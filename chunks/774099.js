n.d(t, { L: () => f });
var r = n(688331),
    i = n(469052),
    o = n(630449),
    a = n(871186),
    s = n(291686),
    l = n(875565),
    c = n(693037),
    u = n(272469),
    d = n(607423),
    p = n(297458),
    h = n(804524);
let f = (0, r._C)((e = {}) => {
    let t = { onerror: !0, onunhandledrejection: !0, ...e };
    return {
        name: "GlobalHandlers",
        setupOnce() {
            Error.stackTraceLimit = 50;
        },
        setup(e) {
            var n, r;
            t.onerror &&
                ((n = e),
                (0, i.L)((e) => {
                    var t, r, i, s;
                    let u,
                        d,
                        f,
                        m,
                        _,
                        y,
                        { stackParser: v, attachStacktrace: b } = g();
                    if ((0, o.KU)() !== n || (0, h.jN)()) return;
                    let { msg: S, url: w, line: E, column: k, error: x } = e,
                        C =
                            ((t = (0, p.H7)(v, x || S, void 0, b, !1)),
                            (r = w),
                            (i = E),
                            (s = k),
                            (_ = (m = (f = (d = (u = t.exception = t.exception || {}).values = u.values || [])[0] =
                                d[0] || {}).stacktrace =
                                f.stacktrace || {}).frames =
                                m.frames || []),
                            (y = (0, l.Kg)(r) && r.length > 0 ? r : (0, c.$N)()),
                            0 === _.length && _.push({ colno: s, filename: y, function: "?", in_app: !0, lineno: i }),
                            t);
                    (C.level = "error"),
                        (0, a.r)(C, { originalException: x, mechanism: { handled: !1, type: "onerror" } });
                }),
                m("onerror")),
                t.onunhandledrejection &&
                    ((r = e),
                    (0, s.r)((e) => {
                        var t;
                        let { stackParser: n, attachStacktrace: i } = g();
                        if ((0, o.KU)() !== r || (0, h.jN)()) return;
                        let s = (function (e) {
                                if ((0, l.sO)(e)) return e;
                                try {
                                    if ("reason" in e) return e.reason;
                                    if ("detail" in e && "reason" in e.detail) return e.detail.reason;
                                } catch (e) {}
                                return e;
                            })(e),
                            c = (0, l.sO)(s)
                                ? ((t = s),
                                  {
                                      exception: {
                                          values: [
                                              {
                                                  type: "UnhandledRejection",
                                                  value: `Non-Error promise rejection captured with value: ${String(t)}`,
                                              },
                                          ],
                                      },
                                  })
                                : (0, p.H7)(n, s, void 0, i, !0);
                        (c.level = "error"),
                            (0, a.r)(c, {
                                originalException: s,
                                mechanism: { handled: !1, type: "onunhandledrejection" },
                            });
                    }),
                    m("onunhandledrejection"));
        },
    };
});
function m(e) {
    d.T && u.vF.log(`Global Handler attached: ${e}`);
}
function g() {
    let e = (0, o.KU)();
    return (e && e.getOptions()) || { stackParser: () => [], attachStacktrace: !1 };
}
