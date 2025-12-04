r.d(t, {
    GJ: () => c,
    ME: () => p,
    aB: () => I,
    dr: () => d,
});
var n = r(509440),
    a = r(847572),
    i = r(661822),
    o = r(431660),
    _ = r(959036),
    s = r(886649);
function c(e, t) {
    let r = l(e, t),
        n = {
            type: t && t.name,
            value: (function (e) {
                let t = e && e.message;
                return t ? (t.error && "string" == typeof t.error.message ? t.error.message : t) : "No error message";
            })(t),
        };
    return (
        r.length && (n.stacktrace = { frames: r }),
        void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"),
        n
    );
}
function E(e, t) {
    return { exception: { values: [c(e, t)] } };
}
function l(e, t) {
    var r, n;
    let a = t.stacktrace || t.stack || "",
        i = (r = t) && u.test(r.message) ? 1 : 0,
        o = "number" == typeof (n = t).framesToPop ? n.framesToPop : 0;
    try {
        return e(a, i, o);
    } catch (e) {}
    return [];
}
let u = /Minified React error #\d+;/i;
function d(e, t, r, n) {
    let a = p(e, t, (r && r.syntheticException) || void 0, n);
    return (0, o.EG)(a), (a.level = "error"), r && r.event_id && (a.event_id = r.event_id), (0, _.WD)(a);
}
function I(e, t, r = "info", n, a) {
    let i = R(e, t, (n && n.syntheticException) || void 0, a);
    return (i.level = r), n && n.event_id && (i.event_id = n.event_id), (0, _.WD)(i);
}
function p(e, t, r, _, u) {
    let d;
    if ((0, i.VW)(t) && t.error) return E(e, t.error);
    if ((0, i.TX)(t) || (0, i.fm)(t)) {
        if ("stack" in t) d = E(e, t);
        else {
            let n = t.name || ((0, i.TX)(t) ? "DOMError" : "DOMException"),
                a = t.message ? `${n}: ${t.message}` : n;
            (d = R(e, a, r, _)), (0, o.Db)(d, a);
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
    return (0, i.VZ)(t)
        ? E(e, t)
        : ((0, i.PO)(t) || (0, i.cO)(t)
              ? (d = (function (e, t, r, o) {
                    let _ = (0, n.s3)(),
                        E = _ && _.getOptions().normalizeDepth,
                        u = (function (e) {
                            for (let t in e)
                                if (Object.prototype.hasOwnProperty.call(e, t)) {
                                    let r = e[t];
                                    if (r instanceof Error) return r;
                                }
                        })(t),
                        d = { __serialized__: (0, a.Qy)(t, E) };
                    if (u)
                        return {
                            exception: { values: [c(e, u)] },
                            extra: d,
                        };
                    let I = {
                        exception: {
                            values: [
                                {
                                    type: (0, i.cO)(t) ? t.constructor.name : o ? "UnhandledRejection" : "Error",
                                    value: (function (e, { isUnhandledRejection: t }) {
                                        let r = (0, s.zf)(e),
                                            n = t ? "promise rejection" : "exception";
                                        if ((0, i.VW)(e))
                                            return `Event \`ErrorEvent\` captured as ${n} with message \`${e.message}\``;
                                        if ((0, i.cO)(e)) {
                                            let t = (function (e) {
                                                try {
                                                    let t = Object.getPrototypeOf(e);
                                                    return t ? t.constructor.name : void 0;
                                                } catch (e) {}
                                            })(e);
                                            return `Event \`${t}\` (type=${e.type}) captured as ${n}`;
                                        }
                                        return `Object captured as ${n} with keys: ${r}`;
                                    })(t, { isUnhandledRejection: o }),
                                },
                            ],
                        },
                        extra: d,
                    };
                    if (r) {
                        let t = l(e, r);
                        t.length && (I.exception.values[0].stacktrace = { frames: t });
                    }
                    return I;
                })(e, t, r, u))
              : ((d = R(e, t, r, _)), (0, o.Db)(d, `${t}`, void 0)),
          (0, o.EG)(d, { synthetic: !0 }),
          d);
}
function R(e, t, r, n) {
    let a = {};
    if (n && r) {
        let n = l(e, r);
        n.length &&
            (a.exception = {
                values: [
                    {
                        value: t,
                        stacktrace: { frames: n },
                    },
                ],
            });
    }
    if ((0, i.Le)(t)) {
        let { __sentry_template_string__: e, __sentry_template_values__: r } = t;
        return (
            (a.logentry = {
                message: e,
                params: r,
            }),
            a
        );
    }
    return (a.message = t), a;
}
