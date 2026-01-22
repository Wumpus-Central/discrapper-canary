n.d(t, {
    A: () => o,
});
var r = n(643479),
    i = n(587935),
    a = n(343828),
    s = n(326456);
let o = {
    read: c,
};
class l extends Error {
    constructor(e) {
        super(e), (this.name = "ParseError");
    }
}

function c(e, t, n) {
    let r = {};
    if ("string" == typeof e) return f(r, e, n), r;
    let [i, a] = u(e, t),
        s = f(r, i, n);
    if (a) {
        let i = f(r, a, n);
        s || i || (delete r._raw, f(r, d(e, t), n));
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
            s = e.buffer.slice(a.dataOffset, a.dataOffset + a.length);
        n.set(new Uint8Array(s), r), (r += a.length);
    }
    return new DataView(n.buffer);
}

function f(e, t, n) {
    try {
        let { doc: i, raw: a } = p(t, n);
        e._raw = (e._raw || "") + a;
        let s = m(i);
        return (0, r.dP)(e, I(g(s, !0))), !0;
    } catch (e) {
        return !1;
    }
}

function p(e, t) {
    let n = a.A.get(t);
    if (!n)
        throw (
            (console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags."), Error())
        );
    let i = "string" == typeof e ? e : (0, r.hT)(e, 0, e.byteLength);
    return {
        doc: h(n, _(i)),
        raw: i,
    };
}

function _(e) {
    return e.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1");
}

function h(e, t, n = !1) {
    try {
        let n = e.parseFromString(t, "application/xml"),
            r = n.getElementsByTagName("parsererror");
        if (r.length > 0) throw new l(r[0].textContent);
        return n;
    } catch (r) {
        if ("ParseError" === r.name && (0, s.g)(r) && !n) return h(e, (0, s.E)(t), !0);
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
            if (A(e)) {
                let n = v(e);
                void 0 !== t[e.nodeName]
                    ? (Array.isArray(t[e.nodeName]) || (t[e.nodeName] = [t[e.nodeName]]), t[e.nodeName].push(n))
                    : (t[e.nodeName] = n);
            }
        }),
        t
    );
}

function A(e) {
    return e.nodeName && "#text" !== e.nodeName;
}

function v(e) {
    return {
        attributes: S(e),
        value: g(e),
    };
}

function S(e) {
    let t = {};
    for (let n = 0; n < e.attributes.length; n++)
        t[e.attributes[n].nodeName] = decodeURIComponent(escape(e.attributes[n].value));
    return t;
}

function I(e) {
    let t = {};
    if ("string" == typeof e) return e;
    for (let n in e) {
        let i = e[n];
        Array.isArray(i) || (i = [i]),
            i.forEach((e) => {
                (0, r.dP)(t, T(e.attributes)), "object" == typeof e.value && (0, r.dP)(t, L(e.value));
            });
    }
    return t;
}

function T(e) {
    let t = {};
    for (let n in e)
        try {
            C(n) &&
                (t[R(n)] = {
                    value: e[n],
                    attributes: {},
                    description: w(e[n], n),
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

function w(e, t) {
    if (Array.isArray(e)) {
        let n = P(e);
        return t && "function" == typeof i.A[t] ? i.A[t](e, n) : n;
    }
    if ("object" == typeof e) return D(e);
    try {
        if (t && "function" == typeof i.A[t]) return i.A[t](e);
        return decodeURIComponent(escape(e));
    } catch (t) {
        return e;
    }
}

function P(e) {
    return e.map((e) => (void 0 !== e.value ? w(e.value) : w(e))).join(", ");
}

function D(e) {
    let t = [];
    for (let n in e) t.push(`${x(n)}: ${w(e[n].value)}`);
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
            N(n) || (t[R(n)] = j(e[n], n));
        } catch (e) {}
    return t;
}

function j(e, t) {
    return k(e)
        ? U(e, t)
        : M(e)
          ? {
                value: "",
                attributes: {},
                description: "",
            }
          : G(e)
            ? V(e, t)
            : Y(e)
              ? W(e, t)
              : K(e)
                ? z(e, t)
                : q(e)
                  ? Z(e, t)
                  : $(e, t);
}

function M(e) {
    return "Resource" === e.attributes["rdf:parseType"] && "string" == typeof e.value && "" === e.value.trim();
}

function k(e) {
    return Array.isArray(e);
}

function U(e, t) {
    return $(e[e.length - 1], t);
}

function G(e) {
    return (
        ("Resource" === e.attributes["rdf:parseType"] && void 0 !== e.value["rdf:value"]) ||
        (void 0 !== e.value["rdf:Description"] && void 0 !== e.value["rdf:Description"].value["rdf:value"])
    );
}

function V(e, t) {
    let n = F(e);
    void 0 !== e.value["rdf:Description"] && (e = e.value["rdf:Description"]), (0, r.dP)(n, F(e), B(e));
    let i = H(e);
    return {
        value: i,
        attributes: n,
        description: w(i, t),
    };
}

function F(e) {
    let t = {};
    for (let n in e.attributes) "rdf:parseType" === n || "rdf:resource" === n || N(n) || (t[R(n)] = e.attributes[n]);
    return t;
}

function B(e) {
    let t = {};
    for (let n in e.value) "rdf:value" === n || N(n) || (t[R(n)] = e.value[n].value);
    return t;
}

function H(e) {
    return J(e.value["rdf:value"]) || e.value["rdf:value"].value;
}

function Y(e) {
    return (
        "Resource" === e.attributes["rdf:parseType"] ||
        (void 0 !== e.value["rdf:Description"] && void 0 === e.value["rdf:Description"].value["rdf:value"])
    );
}

function W(e, t) {
    let n = {
        value: {},
        attributes: {},
    };
    return (
        void 0 !== e.value["rdf:Description"] &&
            ((0, r.dP)(n.value, T(e.value["rdf:Description"].attributes)),
            (0, r.dP)(n.attributes, F(e)),
            (e = e.value["rdf:Description"])),
        (0, r.dP)(n.value, L(e.value)),
        (n.description = w(n.value, t)),
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
    let n = T(e.attributes);
    return {
        value: n,
        attributes: {},
        description: w(n, t),
    };
}

function q(e) {
    return void 0 !== X(e.value);
}

function X(e) {
    return e["rdf:Bag"] || e["rdf:Seq"] || e["rdf:Alt"];
}

function Z(e, t) {
    let n = X(e.value).value["rdf:li"],
        r = F(e),
        i = [];
    return (
        void 0 === n ? (n = []) : Array.isArray(n) || (n = [n]),
        n.forEach((e) => {
            i.push(Q(e));
        }),
        {
            value: i,
            attributes: r,
            description: w(i, t),
        }
    );
}

function Q(e) {
    return G(e) ? V(e) : Y(e) ? W(e).value : K(e) ? z(e).value : $(e);
}

function $(e, t) {
    let n = J(e) || I(e.value);
    return {
        value: n,
        attributes: F(e),
        description: w(n, t),
    };
}

function J(e) {
    return e.attributes && e.attributes["rdf:resource"];
}
