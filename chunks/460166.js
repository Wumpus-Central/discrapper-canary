n.d(t, { Z: () => s });
var r = n(822632),
    i = n(291305),
    a = n(245170),
    o = n(657063);
let s = { read: c };
class l extends Error {
    constructor(e) {
        super(e), (this.name = "ParseError");
    }
}
function c(e, t, n) {
    let r = {};
    if ("string" == typeof e) return f(r, e, n), r;
    let [i, a] = u(e, t),
        o = f(r, i, n);
    if (a) {
        let i = f(r, a, n);
        o || i || (delete r._raw, f(r, d(e, t), n));
    }
    return r;
}
function u(e, t) {
    if (0 === t.length) return [];
    let n = [d(e, t.slice(0, 1))];
    return t.length > 1 && n.push(d(e, t.slice(1))), n;
}
function d(e, t) {
    let n = new Uint8Array(t.reduce((e, t) => e + t.length, 0)),
        r = 0;
    for (let i = 0; i < t.length; i++) {
        let a = t[i],
            o = e.buffer.slice(a.dataOffset, a.dataOffset + a.length);
        n.set(new Uint8Array(o), r), (r += a.length);
    }
    return new DataView(n.buffer);
}
function f(e, t, n) {
    try {
        let { doc: i, raw: a } = _(t, n);
        e._raw = (e._raw || "") + a;
        let o = m(i);
        return (0, r.wB)(e, S(g(o, !0))), !0;
    } catch (e) {
        return !1;
    }
}
function _(e, t) {
    let n = a.Z.get(t);
    if (!n)
        throw (
            (console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags."), Error())
        );
    let i = "string" == typeof e ? e : (0, r.oH)(e, 0, e.byteLength);
    return {
        doc: h(n, p(i)),
        raw: i,
    };
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
        if ("ParseError" === r.name && (0, o.U)(r) && !n) return h(e, (0, o.v)(t), !0);
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
function g(e, t = !1) {
    let n = E(e);
    return b(n) ? (t ? {} : y(n[0])) : O(n);
}
function E(e) {
    let t = [];
    for (let n = 0; n < e.childNodes.length; n++) t.push(e.childNodes[n]);
    return t;
}
function b(e) {
    return 1 === e.length && "#text" === e[0].nodeName;
}
function y(e) {
    return e.nodeValue;
}
function O(e) {
    let t = {};
    return (
        e.forEach((e) => {
            if (v(e)) {
                let n = I(e);
                void 0 !== t[e.nodeName]
                    ? (Array.isArray(t[e.nodeName]) || (t[e.nodeName] = [t[e.nodeName]]), t[e.nodeName].push(n))
                    : (t[e.nodeName] = n);
            }
        }),
        t
    );
}
function v(e) {
    return e.nodeName && "#text" !== e.nodeName;
}
function I(e) {
    return {
        attributes: T(e),
        value: g(e),
    };
}
function T(e) {
    let t = {};
    for (let n = 0; n < e.attributes.length; n++)
        t[e.attributes[n].nodeName] = decodeURIComponent(escape(e.attributes[n].value));
    return t;
}
function S(e) {
    let t = {};
    if ("string" == typeof e) return e;
    for (let n in e) {
        let i = e[n];
        Array.isArray(i) || (i = [i]),
            i.forEach((e) => {
                (0, r.wB)(t, A(e.attributes)), "object" == typeof e.value && (0, r.wB)(t, L(e.value));
            });
    }
    return t;
}
function A(e) {
    let t = {};
    for (let n in e)
        try {
            C(n) &&
                (t[R(n)] = {
                    value: e[n],
                    attributes: {},
                    description: P(e[n], n),
                });
        } catch (e) {}
    return t;
}
function C(e) {
    return "rdf:parseType" !== e && !N(e);
}
function N(e) {
    return "xmlns" === e.split(":")[0];
}
function R(e) {
    return /^MicrosoftPhoto(_\d+_)?:Rating$/i.test(e) ? "RatingPercent" : e.split(":")[1];
}
function P(e, t) {
    if (Array.isArray(e)) {
        let n = w(e);
        return t && "function" == typeof i.Z[t] ? i.Z[t](e, n) : n;
    }
    if ("object" == typeof e) return D(e);
    try {
        if (t && "function" == typeof i.Z[t]) return i.Z[t](e);
        return decodeURIComponent(escape(e));
    } catch (t) {
        return e;
    }
}
function w(e) {
    return e.map((e) => (void 0 !== e.value ? P(e.value) : P(e))).join(", ");
}
function D(e) {
    let t = [];
    for (let n in e) t.push(`${x(n)}: ${P(e[n].value)}`);
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
function L(e) {
    let t = {};
    for (let n in e)
        try {
            N(n) || (t[R(n)] = M(e[n], n));
        } catch (e) {}
    return t;
}
function M(e, t) {
    return k(e)
        ? U(e, t)
        : j(e)
          ? {
                value: "",
                attributes: {},
                description: "",
            }
          : G(e)
            ? B(e, t)
            : H(e)
              ? Y(e, t)
              : W(e)
                ? K(e, t)
                : z(e)
                  ? X(e, t)
                  : J(e, t);
}
function j(e) {
    return "Resource" === e.attributes["rdf:parseType"] && "string" == typeof e.value && "" === e.value.trim();
}
function k(e) {
    return Array.isArray(e);
}
function U(e, t) {
    return J(e[e.length - 1], t);
}
function G(e) {
    return (
        ("Resource" === e.attributes["rdf:parseType"] && void 0 !== e.value["rdf:value"]) ||
        (void 0 !== e.value["rdf:Description"] && void 0 !== e.value["rdf:Description"].value["rdf:value"])
    );
}
function B(e, t) {
    let n = Z(e);
    void 0 !== e.value["rdf:Description"] && (e = e.value["rdf:Description"]), (0, r.wB)(n, Z(e), F(e));
    let i = V(e);
    return {
        value: i,
        attributes: n,
        description: P(i, t),
    };
}
function Z(e) {
    let t = {};
    for (let n in e.attributes) "rdf:parseType" === n || "rdf:resource" === n || N(n) || (t[R(n)] = e.attributes[n]);
    return t;
}
function F(e) {
    let t = {};
    for (let n in e.value) "rdf:value" === n || N(n) || (t[R(n)] = e.value[n].value);
    return t;
}
function V(e) {
    return $(e.value["rdf:value"]) || e.value["rdf:value"].value;
}
function H(e) {
    return (
        "Resource" === e.attributes["rdf:parseType"] ||
        (void 0 !== e.value["rdf:Description"] && void 0 === e.value["rdf:Description"].value["rdf:value"])
    );
}
function Y(e, t) {
    let n = {
        value: {},
        attributes: {},
    };
    return (
        void 0 !== e.value["rdf:Description"] &&
            ((0, r.wB)(n.value, A(e.value["rdf:Description"].attributes)),
            (0, r.wB)(n.attributes, Z(e)),
            (e = e.value["rdf:Description"])),
        (0, r.wB)(n.value, L(e.value)),
        (n.description = P(n.value, t)),
        n
    );
}
function W(e) {
    return (
        0 === Object.keys(e.value).length &&
        void 0 === e.attributes["xml:lang"] &&
        void 0 === e.attributes["rdf:resource"]
    );
}
function K(e, t) {
    let n = A(e.attributes);
    return {
        value: n,
        attributes: {},
        description: P(n, t),
    };
}
function z(e) {
    return void 0 !== q(e.value);
}
function q(e) {
    return e["rdf:Bag"] || e["rdf:Seq"] || e["rdf:Alt"];
}
function X(e, t) {
    let n = q(e.value).value["rdf:li"],
        r = Z(e),
        i = [];
    return (
        void 0 === n ? (n = []) : Array.isArray(n) || (n = [n]),
        n.forEach((e) => {
            i.push(Q(e));
        }),
        {
            value: i,
            attributes: r,
            description: P(i, t),
        }
    );
}
function Q(e) {
    return G(e) ? B(e) : H(e) ? Y(e).value : W(e) ? K(e).value : J(e);
}
function J(e, t) {
    let n = $(e) || S(e.value);
    return {
        value: n,
        attributes: Z(e),
        description: P(n, t),
    };
}
function $(e) {
    return e.attributes && e.attributes["rdf:resource"];
}
