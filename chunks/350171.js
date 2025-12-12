n.d(t, {
    GJ: () => c,
    ME: () => f,
    aB: () => p,
    dr: () => d,
});
var r = n(509440),
    i = n(847572),
    a = n(661822),
    o = n(431660),
    _ = n(959036),
    s = n(886649);
function c(e, t) {
    let n = l(e, t),
        r = {
            type: t && t.name,
            value: (function (e) {
                let t = e && e.message;
                return t ? (t.error && "string" == typeof t.error.message ? t.error.message : t) : "No error message";
            })(t),
        };
    return (
        n.length && (r.stacktrace = { frames: n }),
        void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
        r
    );
}
function E(e, t) {
    return { exception: { values: [c(e, t)] } };
}
function l(e, t) {
    var n, r;
    let i = t.stacktrace || t.stack || "",
        a = (n = t) && u.test(n.message) ? 1 : 0,
        o = "number" == typeof (r = t).framesToPop ? r.framesToPop : 0;
    try {
        return e(i, a, o);
    } catch (e) {}
    return [];
}
let u = /Minified React error #\d+;/i;
function d(e, t, n, r) {
    let i = f(e, t, (n && n.syntheticException) || void 0, r);
    return (0, o.EG)(i), (i.level = "error"), n && n.event_id && (i.event_id = n.event_id), (0, _.WD)(i);
}
function p(e, t, n = "info", r, i) {
    let a = I(e, t, (r && r.syntheticException) || void 0, i);
    return (a.level = n), r && r.event_id && (a.event_id = r.event_id), (0, _.WD)(a);
}
function f(e, t, n, _, u) {
    let d;
    if ((0, a.VW)(t) && t.error) return E(e, t.error);
    if ((0, a.TX)(t) || (0, a.fm)(t)) {
        if ("stack" in t) d = E(e, t);
        else {
            let r = t.name || ((0, a.TX)(t) ? "DOMError" : "DOMException"),
                i = t.message ? `${r}: ${t.message}` : r;
            (d = I(e, i, n, _)), (0, o.Db)(d, i);
        }
        return (
            "code" in t &&
                (d.tags = {
                    ...d.tags,
                    "DOMException.code": `${t.code}`,
                }),
            d
        );
    }
    return (0, a.VZ)(t)
        ? E(e, t)
        : ((0, a.PO)(t) || (0, a.cO)(t)
              ? (d = (function (e, t, n, o) {
                    let _ = (0, r.s3)(),
                        E = _ && _.getOptions().normalizeDepth,
                        u = (function (e) {
                            for (let t in e)
                                if (Object.prototype.hasOwnProperty.call(e, t)) {
                                    let n = e[t];
                                    if (n instanceof Error) return n;
                                }
                        })(t),
                        d = { __serialized__: (0, i.Qy)(t, E) };
                    if (u)
                        return {
                            exception: { values: [c(e, u)] },
                            extra: d,
                        };
                    let p = {
                        exception: {
                            values: [
                                {
                                    type: (0, a.cO)(t) ? t.constructor.name : o ? "UnhandledRejection" : "Error",
                                    value: (function (e, { isUnhandledRejection: t }) {
                                        let n = (0, s.zf)(e),
                                            r = t ? "promise rejection" : "exception";
                                        if ((0, a.VW)(e))
                                            return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                                        if ((0, a.cO)(e)) {
                                            let t = (function (e) {
                                                try {
                                                    let t = Object.getPrototypeOf(e);
                                                    return t ? t.constructor.name : void 0;
                                                } catch (e) {}
                                            })(e);
                                            return `Event \`${t}\` (type=${e.type}) captured as ${r}`;
                                        }
                                        return `Object captured as ${r} with keys: ${n}`;
                                    })(t, { isUnhandledRejection: o }),
                                },
                            ],
                        },
                        extra: d,
                    };
                    if (n) {
                        let t = l(e, n);
                        t.length && (p.exception.values[0].stacktrace = { frames: t });
                    }
                    return p;
                })(e, t, n, u))
              : ((d = I(e, t, n, _)), (0, o.Db)(d, `${t}`, void 0)),
          (0, o.EG)(d, { synthetic: !0 }),
          d);
}
function I(e, t, n, r) {
    let i = {};
    if (r && n) {
        let r = l(e, n);
        r.length &&
            (i.exception = {
                values: [
                    {
                        value: t,
                        stacktrace: { frames: r },
                    },
                ],
            });
    }
    if ((0, a.Le)(t)) {
        let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
        return (
            (i.logentry = {
                message: e,
                params: n,
            }),
            i
        );
    }
    return (i.message = t), i;
}
