"use strict";
n.d(t, { A: () => o });
var r = n(643479),
    i = n(587935),
    s = n(343828),
    a = n(326456);
let o = { read: u };
class l extends Error {
    constructor(e) {
        super(e), (this.name = "ParseError");
    }
}
function u(e, t, n) {
    let r = {};
    if ("string" == typeof e) return _(r, e, n), r;
    let [i, s] = c(e, t),
        a = _(r, i, n);
    if (s) {
        let i = _(r, s, n);
        a || i || (delete r._raw, _(r, d(e, t), n));
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
        let s = t[i],
            a = e.buffer.slice(s.dataOffset, s.dataOffset + s.length);
        n.set(new Uint8Array(a), r), (r += s.length);
    }
    return new DataView(n.buffer);
}
function _(e, t, n) {
    try {
        let { doc: i, raw: s } = f(t, n);
        e._raw = (e._raw || "") + s;
        let a = m(i);
        return (0, r.dP)(e, N(E(a, !0))), !0;
    } catch (e) {
        return !1;
    }
}
function f(e, t) {
    let n = s.A.get(t);
    if (!n)
        throw (
            (console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags."), Error())
        );
    let i = "string" == typeof e ? e : (0, r.hT)(e, 0, e.byteLength);
    return { doc: h(n, p(i)), raw: i };
}
function p(e) {
    return e.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1");
}
function h(e, t, n = !1) {
    try {
        let n = e.parseFromString(t, "application/xml"),
            r = n.getElementsByTagName("parsererror");
        if (r.length > 0) throw new l(r[0].textContent);
        return n;
    } catch (r) {
        if ("ParseError" === r.name && (0, a.g)(r) && !n) return h(e, (0, a.E)(t), !0);
        throw r;
    }
}
function m(e) {
    for (let t = 0; t < e.childNodes.length; t++) {
        if ("x:xmpmeta" === e.childNodes[t].tagName) return m(e.childNodes[t]);
        if ("rdf:RDF" === e.childNodes[t].tagName) return e.childNodes[t];
    }
    throw Error();
}
function E(e, t = !1) {
    let n = g(e);
    return A(n) ? (t ? {} : I(n[0])) : T(n);
}
function g(e) {
    let t = [];
    for (let n = 0; n < e.childNodes.length; n++) t.push(e.childNodes[n]);
    return t;
}
function A(e) {
    return 1 === e.length && "#text" === e[0].nodeName;
}
function I(e) {
    return e.nodeValue;
}
function T(e) {
    let t = {};
    return (
        e.forEach((e) => {
            if (S(e)) {
                let n = y(e);
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
function y(e) {
    return { attributes: v(e), value: E(e) };
}
function v(e) {
    let t = {};
    for (let n = 0; n < e.attributes.length; n++)
        t[e.attributes[n].nodeName] = decodeURIComponent(escape(e.attributes[n].value));
    return t;
}
function N(e) {
    let t = {};
    if ("string" == typeof e) return e;
    for (let n in e) {
        let i = e[n];
        Array.isArray(i) || (i = [i]),
            i.forEach((e) => {
                (0, r.dP)(t, C(e.attributes)), "object" == typeof e.value && (0, r.dP)(t, M(e.value));
            });
    }
    return t;
}
function C(e) {
    let t = {};
    for (let n in e)
        try {
            b(n) && (t[O(n)] = { value: e[n], attributes: {}, description: D(e[n], n) });
        } catch (e) {}
    return t;
}
function b(e) {
    return "rdf:parseType" !== e && !R(e);
}
function R(e) {
    return "xmlns" === e.split(":")[0];
}
function O(e) {
    return /^MicrosoftPhoto(_\d+_)?:Rating$/i.test(e) ? "RatingPercent" : e.split(":")[1];
}
function D(e, t) {
    if (Array.isArray(e)) {
        let n = L(e);
        return t && "function" == typeof i.A[t] ? i.A[t](e, n) : n;
    }
    if ("object" == typeof e) return w(e);
    try {
        if (t && "function" == typeof i.A[t]) return i.A[t](e);
        return decodeURIComponent(escape(e));
    } catch (t) {
        return e;
    }
}
function L(e) {
    return e.map((e) => (void 0 !== e.value ? D(e.value) : D(e))).join(", ");
}
function w(e) {
    let t = [];
    for (let n in e) t.push(`${x(n)}: ${D(e[n].value)}`);
    return t.join("; ");
}
function x(e) {
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
            R(n) || (t[O(n)] = P(e[n], n));
        } catch (e) {}
    return t;
}
function P(e, t) {
    return U(e)
        ? G(e, t)
        : k(e)
          ? { value: "", attributes: {}, description: "" }
          : F(e)
            ? V(e, t)
            : Y(e)
              ? W(e, t)
              : K(e)
                ? z(e, t)
                : $(e)
                  ? Z(e, t)
                  : Q(e, t);
}
function k(e) {
    return "Resource" === e.attributes["rdf:parseType"] && "string" == typeof e.value && "" === e.value.trim();
}
function U(e) {
    return Array.isArray(e);
}
function G(e, t) {
    return Q(e[e.length - 1], t);
}
function F(e) {
    return (
        ("Resource" === e.attributes["rdf:parseType"] && void 0 !== e.value["rdf:value"]) ||
        (void 0 !== e.value["rdf:Description"] && void 0 !== e.value["rdf:Description"].value["rdf:value"])
    );
}
function V(e, t) {
    let n = B(e);
    void 0 !== e.value["rdf:Description"] && (e = e.value["rdf:Description"]), (0, r.dP)(n, B(e), H(e));
    let i = j(e);
    return { value: i, attributes: n, description: D(i, t) };
}
function B(e) {
    let t = {};
    for (let n in e.attributes) "rdf:parseType" === n || "rdf:resource" === n || R(n) || (t[O(n)] = e.attributes[n]);
    return t;
}
function H(e) {
    let t = {};
    for (let n in e.value) "rdf:value" === n || R(n) || (t[O(n)] = e.value[n].value);
    return t;
}
function j(e) {
    return J(e.value["rdf:value"]) || e.value["rdf:value"].value;
}
function Y(e) {
    return (
        "Resource" === e.attributes["rdf:parseType"] ||
        (void 0 !== e.value["rdf:Description"] && void 0 === e.value["rdf:Description"].value["rdf:value"])
    );
}
function W(e, t) {
    let n = { value: {}, attributes: {} };
    return (
        void 0 !== e.value["rdf:Description"] &&
            ((0, r.dP)(n.value, C(e.value["rdf:Description"].attributes)),
            (0, r.dP)(n.attributes, B(e)),
            (e = e.value["rdf:Description"])),
        (0, r.dP)(n.value, M(e.value)),
        (n.description = D(n.value, t)),
        n
    );
}
function K(e) {
    return (
        0 === Object.keys(e.value).length &&
        void 0 === e.attributes["xml:lang"] &&
        void 0 === e.attributes["rdf:resource"]
    );
}
function z(e, t) {
    let n = C(e.attributes);
    return { value: n, attributes: {}, description: D(n, t) };
}
function $(e) {
    return void 0 !== q(e.value);
}
function q(e) {
    return e["rdf:Bag"] || e["rdf:Seq"] || e["rdf:Alt"];
}
function Z(e, t) {
    let n = q(e.value).value["rdf:li"],
        r = B(e),
        i = [];
    return (
        void 0 === n ? (n = []) : Array.isArray(n) || (n = [n]),
        n.forEach((e) => {
            i.push(X(e));
        }),
        { value: i, attributes: r, description: D(i, t) }
    );
}
function X(e) {
    return F(e) ? V(e) : Y(e) ? W(e).value : K(e) ? z(e).value : Q(e);
}
function Q(e, t) {
    let n = J(e) || N(e.value);
    return { value: n, attributes: B(e), description: D(n, t) };
}
function J(e) {
    return e.attributes && e.attributes["rdf:resource"];
}
