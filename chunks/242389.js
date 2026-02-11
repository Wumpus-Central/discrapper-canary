"use strict";
n.d(t, { A: () => o });
var r = n(643479),
    i = n(587935),
    a = n(343828),
    s = n(326456);
let o = { read: u };
class l extends Error {
    constructor(e) {
        super(e), (this.name = "ParseError");
    }
}
function u(e, t, n) {
    let r = {};
    if ("string" == typeof e) return _(r, e, n), r;
    let [i, a] = c(e, t),
        s = _(r, i, n);
    if (a) {
        let i = _(r, a, n);
        s || i || (delete r._raw, _(r, d(e, t), n));
    }
    return r;
}
function c(e, t) {
    if (0 === t.length) return [];
    let n = [d(e, t.slice(0, 1))];
    return t.length > 1 && n.push(d(e, t.slice(1))), n;
}
function d(e, t) {
    let n = new Uint8Array(t.reduce((e, t) => e + t.length, 0)),
        r = 0;
    for (let i = 0; i < t.length; i++) {
        let a = t[i],
            s = e.buffer.slice(a.dataOffset, a.dataOffset + a.length);
        n.set(new Uint8Array(s), r), (r += a.length);
    }
    return new DataView(n.buffer);
}
function _(e, t, n) {
    try {
        let { doc: i, raw: a } = f(t, n);
        e._raw = (e._raw || "") + a;
        let s = g(i);
        return (0, r.dP)(e, b(E(s, !0))), !0;
    } catch (e) {
        return !1;
    }
}
function f(e, t) {
    let n = a.A.get(t);
    if (!n)
        throw (
            (console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags."), Error())
        );
    let i = "string" == typeof e ? e : (0, r.hT)(e, 0, e.byteLength);
    return { doc: p(n, h(i)), raw: i };
}
function h(e) {
    return e.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1");
}
function p(e, t, n = !1) {
    try {
        let n = e.parseFromString(t, "application/xml"),
            r = n.getElementsByTagName("parsererror");
        if (r.length > 0) throw new l(r[0].textContent);
        return n;
    } catch (r) {
        if ("ParseError" === r.name && (0, s.g)(r) && !n) return p(e, (0, s.E)(t), !0);
        throw r;
    }
}
function g(e) {
    for (let t = 0; t < e.childNodes.length; t++) {
        if ("x:xmpmeta" === e.childNodes[t].tagName) return g(e.childNodes[t]);
        if ("rdf:RDF" === e.childNodes[t].tagName) return e.childNodes[t];
    }
    throw Error();
}
function E(e, t = !1) {
    let n = A(e);
    return I(n) ? (t ? {} : T(n[0])) : y(n);
}
function A(e) {
    let t = [];
    for (let n = 0; n < e.childNodes.length; n++) t.push(e.childNodes[n]);
    return t;
}
function I(e) {
    return 1 === e.length && "#text" === e[0].nodeName;
}
function T(e) {
    return e.nodeValue;
}
function y(e) {
    let t = {};
    return (
        e.forEach((e) => {
            if (S(e)) {
                let n = v(e);
                void 0 !== t[e.nodeName]
                    ? (Array.isArray(t[e.nodeName]) || (t[e.nodeName] = [t[e.nodeName]]), t[e.nodeName].push(n))
                    : (t[e.nodeName] = n);
            }
        }),
        t
    );
}
function S(e) {
    return e.nodeName && "#text" !== e.nodeName;
}
function v(e) {
    return { attributes: C(e), value: E(e) };
}
function C(e) {
    let t = {};
    for (let n = 0; n < e.attributes.length; n++)
        t[e.attributes[n].nodeName] = decodeURIComponent(escape(e.attributes[n].value));
    return t;
}
function b(e) {
    let t = {};
    if ("string" == typeof e) return e;
    for (let n in e) {
        let i = e[n];
        Array.isArray(i) || (i = [i]),
            i.forEach((e) => {
                (0, r.dP)(t, N(e.attributes)), "object" == typeof e.value && (0, r.dP)(t, M(e.value));
            });
    }
    return t;
}
function N(e) {
    let t = {};
    for (let n in e)
        try {
            R(n) && (t[D(n)] = { value: e[n], attributes: {}, description: L(e[n], n) });
        } catch (e) {}
    return t;
}
function R(e) {
    return "rdf:parseType" !== e && !O(e);
}
function O(e) {
    return "xmlns" === e.split(":")[0];
}
function D(e) {
    return /^MicrosoftPhoto(_\d+_)?:Rating$/i.test(e) ? "RatingPercent" : e.split(":")[1];
}
function L(e, t) {
    if (Array.isArray(e)) {
        let n = w(e);
        return t && "function" == typeof i.A[t] ? i.A[t](e, n) : n;
    }
    if ("object" == typeof e) return x(e);
    try {
        if (t && "function" == typeof i.A[t]) return i.A[t](e);
        return decodeURIComponent(escape(e));
    } catch (t) {
        return e;
    }
}
function w(e) {
    return e.map((e) => (void 0 !== e.value ? L(e.value) : L(e))).join(", ");
}
function x(e) {
    let t = [];
    for (let n in e) t.push(`${P(n)}: ${L(e[n].value)}`);
    return t.join("; ");
}
function P(e) {
    return "CiAdrCity" === e
        ? "CreatorCity"
        : "CiAdrCtry" === e
          ? "CreatorCountry"
          : "CiAdrExtadr" === e
            ? "CreatorAddress"
            : "CiAdrPcode" === e
              ? "CreatorPostalCode"
              : "CiAdrRegion" === e
                ? "CreatorRegion"
                : "CiEmailWork" === e
                  ? "CreatorWorkEmail"
                  : "CiTelWork" === e
                    ? "CreatorWorkPhone"
                    : "CiUrlWork" === e
                      ? "CreatorWorkUrl"
                      : e;
}
function M(e) {
    let t = {};
    for (let n in e)
        try {
            O(n) || (t[D(n)] = k(e[n], n));
        } catch (e) {}
    return t;
}
function k(e, t) {
    return G(e)
        ? F(e, t)
        : U(e)
          ? { value: "", attributes: {}, description: "" }
          : V(e)
            ? B(e, t)
            : W(e)
              ? K(e, t)
              : $(e)
                ? z(e, t)
                : q(e)
                  ? Z(e, t)
                  : J(e, t);
}
function U(e) {
    return "Resource" === e.attributes["rdf:parseType"] && "string" == typeof e.value && "" === e.value.trim();
}
function G(e) {
    return Array.isArray(e);
}
function F(e, t) {
    return J(e[e.length - 1], t);
}
function V(e) {
    return (
        ("Resource" === e.attributes["rdf:parseType"] && void 0 !== e.value["rdf:value"]) ||
        (void 0 !== e.value["rdf:Description"] && void 0 !== e.value["rdf:Description"].value["rdf:value"])
    );
}
function B(e, t) {
    let n = j(e);
    void 0 !== e.value["rdf:Description"] && (e = e.value["rdf:Description"]), (0, r.dP)(n, j(e), H(e));
    let i = Y(e);
    return { value: i, attributes: n, description: L(i, t) };
}
function j(e) {
    let t = {};
    for (let n in e.attributes) "rdf:parseType" === n || "rdf:resource" === n || O(n) || (t[D(n)] = e.attributes[n]);
    return t;
}
function H(e) {
    let t = {};
    for (let n in e.value) "rdf:value" === n || O(n) || (t[D(n)] = e.value[n].value);
    return t;
}
function Y(e) {
    return ee(e.value["rdf:value"]) || e.value["rdf:value"].value;
}
function W(e) {
    return (
        "Resource" === e.attributes["rdf:parseType"] ||
        (void 0 !== e.value["rdf:Description"] && void 0 === e.value["rdf:Description"].value["rdf:value"])
    );
}
function K(e, t) {
    let n = { value: {}, attributes: {} };
    return (
        void 0 !== e.value["rdf:Description"] &&
            ((0, r.dP)(n.value, N(e.value["rdf:Description"].attributes)),
            (0, r.dP)(n.attributes, j(e)),
            (e = e.value["rdf:Description"])),
        (0, r.dP)(n.value, M(e.value)),
        (n.description = L(n.value, t)),
        n
    );
}
function $(e) {
    return (
        0 === Object.keys(e.value).length &&
        void 0 === e.attributes["xml:lang"] &&
        void 0 === e.attributes["rdf:resource"]
    );
}
function z(e, t) {
    let n = N(e.attributes);
    return { value: n, attributes: {}, description: L(n, t) };
}
function q(e) {
    return void 0 !== X(e.value);
}
function X(e) {
    return e["rdf:Bag"] || e["rdf:Seq"] || e["rdf:Alt"];
}
function Z(e, t) {
    let n = X(e.value).value["rdf:li"],
        r = j(e),
        i = [];
    return (
        void 0 === n ? (n = []) : Array.isArray(n) || (n = [n]),
        n.forEach((e) => {
            i.push(Q(e));
        }),
        { value: i, attributes: r, description: L(i, t) }
    );
}
function Q(e) {
    return V(e) ? B(e) : W(e) ? K(e).value : $(e) ? z(e).value : J(e);
}
function J(e, t) {
    let n = ee(e) || b(e.value);
    return { value: n, attributes: j(e), description: L(n, t) };
}
function ee(e) {
    return e.attributes && e.attributes["rdf:resource"];
}
