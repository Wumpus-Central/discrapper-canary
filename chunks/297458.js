n.d(t, { H7: () => g, K8: () => c, qv: () => m, u: () => f });
var r = n(630449),
    i = n(778334),
    o = n(875565),
    a = n(231577),
    s = n(835869),
    l = n(690094);
function c(e, t) {
    var n, r;
    let i,
        o,
        a = d(e, t),
        s = {
            type:
                !(i = (n = t) && n.name) && h(n)
                    ? n.message && Array.isArray(n.message) && 2 == n.message.length
                        ? n.message[0]
                        : "WebAssembly.Exception"
                    : i,
            value: (o = (r = t) && r.message)
                ? o.error && "string" == typeof o.error.message
                    ? o.error.message
                    : h(r) && Array.isArray(r.message) && 2 == r.message.length
                      ? r.message[1]
                      : o
                : "No error message",
        };
    return (
        a.length && (s.stacktrace = { frames: a }),
        void 0 === s.type && "" === s.value && (s.value = "Unrecoverable error caught"),
        s
    );
}
function u(e, t) {
    return { exception: { values: [c(e, t)] } };
}
function d(e, t) {
    var n, r;
    let i = t.stacktrace || t.stack || "",
        o = (n = t) && p.test(n.message) ? 1 : 0,
        a = "number" == typeof (r = t).framesToPop ? r.framesToPop : 0;
    try {
        return e(i, o, a);
    } catch (e) {}
    return [];
}
let p = /Minified React error #\d+;/i;
function h(e) {
    return "u" > typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception;
}
function f(e, t, n, r) {
    let i = g(e, t, (n && n.syntheticException) || void 0, r);
    return (0, a.M6)(i), (i.level = "error"), n && n.event_id && (i.event_id = n.event_id), (0, s.XW)(i);
}
function m(e, t, n = "info", r, i) {
    let o = _(e, t, (r && r.syntheticException) || void 0, i);
    return (o.level = n), r && r.event_id && (o.event_id = r.event_id), (0, s.XW)(o);
}
function g(e, t, n, s, p) {
    let h;
    if ((0, o.T2)(t) && t.error) return u(e, t.error);
    if ((0, o.BD)(t) || (0, o.W6)(t)) {
        if ("stack" in t) h = u(e, t);
        else {
            let r = t.name || ((0, o.BD)(t) ? "DOMError" : "DOMException"),
                i = t.message ? `${r}: ${t.message}` : r;
            (h = _(e, i, n, s)), (0, a.gO)(h, i);
        }
        return "code" in t && (h.tags = { ...h.tags, "DOMException.code": `${t.code}` }), h;
    }
    return (0, o.bJ)(t)
        ? u(e, t)
        : ((0, o.Qd)(t) || (0, o.xH)(t)
              ? (h = (function (e, t, n, a) {
                    let s = (0, r.KU)(),
                        u = s && s.getOptions().normalizeDepth,
                        p = (function (e) {
                            for (let t in e)
                                if (Object.prototype.hasOwnProperty.call(e, t)) {
                                    let n = e[t];
                                    if (n instanceof Error) return n;
                                }
                        })(t),
                        h = { __serialized__: (0, i.cd)(t, u) };
                    if (p) return { exception: { values: [c(e, p)] }, extra: h };
                    let f = {
                        exception: {
                            values: [
                                {
                                    type: (0, o.xH)(t) ? t.constructor.name : a ? "UnhandledRejection" : "Error",
                                    value: (function (e, { isUnhandledRejection: t }) {
                                        let n = (0, l.HF)(e),
                                            r = t ? "promise rejection" : "exception";
                                        if ((0, o.T2)(e))
                                            return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                                        if ((0, o.xH)(e)) {
                                            let t = (function (e) {
                                                try {
                                                    let t = Object.getPrototypeOf(e);
                                                    return t ? t.constructor.name : void 0;
                                                } catch (e) {}
                                            })(e);
                                            return `Event \`${t}\` (type=${e.type}) captured as ${r}`;
                                        }
                                        return `Object captured as ${r} with keys: ${n}`;
                                    })(t, { isUnhandledRejection: a }),
                                },
                            ],
                        },
                        extra: h,
                    };
                    if (n) {
                        let t = d(e, n);
                        t.length && (f.exception.values[0].stacktrace = { frames: t });
                    }
                    return f;
                })(e, t, n, p))
              : ((h = _(e, t, n, s)), (0, a.gO)(h, `${t}`, void 0)),
          (0, a.M6)(h, { synthetic: !0 }),
          h);
}
function _(e, t, n, r) {
    let i = {};
    if (r && n) {
        let r = d(e, n);
        r.length && (i.exception = { values: [{ value: t, stacktrace: { frames: r } }] }),
            (0, a.M6)(i, { synthetic: !0 });
    }
    if ((0, o.NF)(t)) {
        let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
        return (i.logentry = { message: e, params: n }), i;
    }
    return (i.message = t), i;
}
