i.d(t, { A: () => s });
var n = i(643479),
    r = i(587935),
    o = i(343828),
    a = i(326456);
let s = {
    read: function (e, t, i) {
        let n = {};
        if ("string" == typeof e) return c(n, e, i), n;
        let [r, o] = (function (e, t) {
                if (0 === t.length) return [];
                let i = [u(e, t.slice(0, 1))];
                return t.length > 1 && i.push(u(e, t.slice(1))), i;
            })(e, t),
            a = c(n, r, i);
        if (o) {
            let r = c(n, o, i);
            a || r || (delete n._raw, c(n, u(e, t), i));
        }
        return n;
    },
};
class l extends Error {
    constructor(e) {
        super(e), (this.name = "ParseError");
    }
}
function u(e, t) {
    let i = new Uint8Array(t.reduce((e, t) => e + t.length, 0)),
        n = 0;
    for (let r = 0; r < t.length; r++) {
        let o = t[r],
            a = e.buffer.slice(o.dataOffset, o.dataOffset + o.length);
        i.set(new Uint8Array(a), n), (n += o.length);
    }
    return new DataView(i.buffer);
}
function c(e, t, i) {
    try {
        let { doc: r, raw: s } = (function (e, t) {
            let i = o.A.get(t);
            if (!i)
                throw (
                    (console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags."),
                    Error())
                );
            let r = "string" == typeof e ? e : (0, n.hT)(e, 0, e.byteLength);
            return {
                doc: (function e(t, i, n = !1) {
                    try {
                        let e = t.parseFromString(i, "application/xml"),
                            n = e.getElementsByTagName("parsererror");
                        if (n.length > 0) throw new l(n[0].textContent);
                        return e;
                    } catch (r) {
                        if ("ParseError" === r.name && (0, a.g)(r) && !n) return e(t, (0, a.E)(i), !0);
                        throw r;
                    }
                })(i, r.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1")),
                raw: r,
            };
        })(t, i);
        e._raw = (e._raw || "") + s;
        let u = (function e(t) {
            for (let i = 0; i < t.childNodes.length; i++) {
                if ("x:xmpmeta" === t.childNodes[i].tagName) return e(t.childNodes[i]);
                if ("rdf:RDF" === t.childNodes[i].tagName) return t.childNodes[i];
            }
            throw Error();
        })(r);
        return (
            (0, n.dP)(
                e,
                d(
                    (function e(t, i = !1) {
                        var n;
                        let r,
                            o = (function (e) {
                                let t = [];
                                for (let i = 0; i < e.childNodes.length; i++) t.push(e.childNodes[i]);
                                return t;
                            })(t);
                        if (1 === (n = o).length && "#text" === n[0].nodeName) return i ? {} : o[0].nodeValue;
                        return (
                            (r = {}),
                            o.forEach((t) => {
                                var i, n;
                                if ((i = t).nodeName && "#text" !== i.nodeName) {
                                    let i = {
                                        attributes: (function (e) {
                                            let t = {};
                                            for (let i = 0; i < e.attributes.length; i++)
                                                t[e.attributes[i].nodeName] = decodeURIComponent(
                                                    escape(e.attributes[i].value),
                                                );
                                            return t;
                                        })((n = t)),
                                        value: e(n),
                                    };
                                    void 0 !== r[t.nodeName]
                                        ? (Array.isArray(r[t.nodeName]) || (r[t.nodeName] = [r[t.nodeName]]),
                                          r[t.nodeName].push(i))
                                        : (r[t.nodeName] = i);
                                }
                            }),
                            r
                        );
                    })(u, !0),
                ),
            ),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function d(e) {
    let t = {};
    if ("string" == typeof e) return e;
    for (let i in e) {
        let r = e[i];
        Array.isArray(r) || (r = [r]),
            r.forEach((e) => {
                (0, n.dP)(t, f(e.attributes)), "object" == typeof e.value && (0, n.dP)(t, h(e.value));
            });
    }
    return t;
}
function f(e) {
    let t = {};
    for (let n in e)
        try {
            var i;
            (i = n),
                "rdf:parseType" === i || p(i) || (t[m(n)] = { value: e[n], attributes: {}, description: g(e[n], n) });
        } catch (e) {}
    return t;
}
function p(e) {
    return "xmlns" === e.split(":")[0];
}
function m(e) {
    return /^MicrosoftPhoto(_\d+_)?:Rating$/i.test(e) ? "RatingPercent" : e.split(":")[1];
}
function g(e, t) {
    if (Array.isArray(e)) {
        let i = e.map((e) => (void 0 !== e.value ? g(e.value) : g(e))).join(", ");
        return t && "function" == typeof r.A[t] ? r.A[t](e, i) : i;
    }
    if ("object" == typeof e) {
        var i,
            n = e;
        let t = [];
        for (let e in n) {
            t.push(
                `${"CiAdrCity" === ((i = e)) ? "CreatorCity" : "CiAdrCtry" === i ? "CreatorCountry" : "CiAdrExtadr" === i ? "CreatorAddress" : "CiAdrPcode" === i ? "CreatorPostalCode" : "CiAdrRegion" === i ? "CreatorRegion" : "CiEmailWork" === i ? "CreatorWorkEmail" : "CiTelWork" === i ? "CreatorWorkPhone" : "CiUrlWork" === i ? "CreatorWorkUrl" : i}: ${g(n[e].value)}`,
            );
        }
        return t.join("; ");
    }
    try {
        if (t && "function" == typeof r.A[t]) return r.A[t](e);
        return decodeURIComponent(escape(e));
    } catch (t) {
        return e;
    }
}
function h(e) {
    let t = {};
    for (let i in e)
        try {
            p(i) ||
                (t[m(i)] = (function (e, t) {
                    var i, n, r, o, a;
                    return ((i = e), Array.isArray(i))
                        ? ((n = e), (r = t), I(n[n.length - 1], r))
                        : ((o = e),
                            "Resource" === o.attributes["rdf:parseType"] &&
                                "string" == typeof o.value &&
                                "" === o.value.trim())
                          ? { value: "", attributes: {}, description: "" }
                          : y(e)
                            ? A(e, t)
                            : T(e)
                              ? b(e, t)
                              : P(e)
                                ? S(e, t)
                                : ((a = e), void 0 !== F(a.value))
                                  ? (function (e, t) {
                                        let i = F(e.value).value["rdf:li"],
                                            n = v(e),
                                            r = [];
                                        return (
                                            void 0 === i ? (i = []) : Array.isArray(i) || (i = [i]),
                                            i.forEach((e) => {
                                                var t;
                                                r.push(
                                                    ((t = e),
                                                    y(t) ? A(t) : T(t) ? b(t).value : P(t) ? S(t).value : I(t)),
                                                );
                                            }),
                                            { value: r, attributes: n, description: g(r, t) }
                                        );
                                    })(e, t)
                                  : I(e, t);
                })(e[i], i));
        } catch (e) {}
    return t;
}
function y(e) {
    return (
        ("Resource" === e.attributes["rdf:parseType"] && void 0 !== e.value["rdf:value"]) ||
        (void 0 !== e.value["rdf:Description"] && void 0 !== e.value["rdf:Description"].value["rdf:value"])
    );
}
function A(e, t) {
    var i;
    let r = v(e);
    void 0 !== e.value["rdf:Description"] && (e = e.value["rdf:Description"]),
        (0, n.dP)(
            r,
            v(e),
            (function (e) {
                let t = {};
                for (let i in e.value) "rdf:value" === i || p(i) || (t[m(i)] = e.value[i].value);
                return t;
            })(e),
        );
    let o = C((i = e).value["rdf:value"]) || i.value["rdf:value"].value;
    return { value: o, attributes: r, description: g(o, t) };
}
function v(e) {
    let t = {};
    for (let i in e.attributes) "rdf:parseType" === i || "rdf:resource" === i || p(i) || (t[m(i)] = e.attributes[i]);
    return t;
}
function T(e) {
    return (
        "Resource" === e.attributes["rdf:parseType"] ||
        (void 0 !== e.value["rdf:Description"] && void 0 === e.value["rdf:Description"].value["rdf:value"])
    );
}
function b(e, t) {
    let i = { value: {}, attributes: {} };
    return (
        void 0 !== e.value["rdf:Description"] &&
            ((0, n.dP)(i.value, f(e.value["rdf:Description"].attributes)),
            (0, n.dP)(i.attributes, v(e)),
            (e = e.value["rdf:Description"])),
        (0, n.dP)(i.value, h(e.value)),
        (i.description = g(i.value, t)),
        i
    );
}
function P(e) {
    return (
        0 === Object.keys(e.value).length &&
        void 0 === e.attributes["xml:lang"] &&
        void 0 === e.attributes["rdf:resource"]
    );
}
function S(e, t) {
    let i = f(e.attributes);
    return { value: i, attributes: {}, description: g(i, t) };
}
function F(e) {
    return e["rdf:Bag"] || e["rdf:Seq"] || e["rdf:Alt"];
}
function I(e, t) {
    let i = C(e) || d(e.value);
    return { value: i, attributes: v(e), description: g(i, t) };
}
function C(e) {
    return e.attributes && e.attributes["rdf:resource"];
}
