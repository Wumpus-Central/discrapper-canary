n.d(t, { k: () => f });
var r = n(688560),
    i = n(509440),
    a = n(771560),
    o = n(294181),
    _ = n(320372),
    s = n(661822),
    c = n(309063),
    E = n(521257),
    l = n(98076),
    u = n(549040),
    d = n(350171),
    p = n(889929);
let f = (0, r._I)((e = {}) => {
    let t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e,
    };
    return {
        name: "GlobalHandlers",
        setupOnce() {
            Error.stackTraceLimit = 50;
        },
        setup(e) {
            var n, r;
            t.onerror &&
                ((n = e),
                (0, o.V)((e) => {
                    let { stackParser: t, attachStacktrace: r } = T();
                    if ((0, i.s3)() !== n || (0, p.Wz)()) return;
                    let { msg: o, url: _, line: l, column: u, error: f } = e,
                        I = (function (e, t, n, r) {
                            let i = (e.exception = e.exception || {}),
                                a = (i.values = i.values || []),
                                o = (a[0] = a[0] || {}),
                                _ = (o.stacktrace = o.stacktrace || {}),
                                l = (_.frames = _.frames || []),
                                u = isNaN(parseInt(r, 10)) ? void 0 : r,
                                d = isNaN(parseInt(n, 10)) ? void 0 : n,
                                p = (0, s.HD)(t) && t.length > 0 ? t : (0, c.l4)();
                            return (
                                0 === l.length &&
                                    l.push({
                                        colno: u,
                                        filename: p,
                                        function: E.Fi,
                                        in_app: !0,
                                        lineno: d,
                                    }),
                                e
                            );
                        })((0, d.ME)(t, f || o, void 0, r, !1), _, l, u);
                    (I.level = "error"),
                        (0, a.eN)(I, {
                            originalException: f,
                            mechanism: {
                                handled: !1,
                                type: "onerror",
                            },
                        });
                }),
                I("onerror")),
                t.onunhandledrejection &&
                    ((r = e),
                    (0, _.h)((e) => {
                        var t;
                        let { stackParser: n, attachStacktrace: o } = T();
                        if ((0, i.s3)() !== r || (0, p.Wz)()) return;
                        let _ = (function (e) {
                                if ((0, s.pt)(e)) return e;
                                try {
                                    if ("reason" in e) return e.reason;
                                    if ("detail" in e && "reason" in e.detail) return e.detail.reason;
                                } catch (e) {}
                                return e;
                            })(e),
                            c = (0, s.pt)(_)
                                ? ((t = _),
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
                                : (0, d.ME)(n, _, void 0, o, !0);
                        (c.level = "error"),
                            (0, a.eN)(c, {
                                originalException: _,
                                mechanism: {
                                    handled: !1,
                                    type: "onunhandledrejection",
                                },
                            });
                    }),
                    I("onunhandledrejection"));
        },
    };
});
function I(e) {
    u.X && l.kg.log(`Global Handler attached: ${e}`);
}
function T() {
    let e = (0, i.s3)();
    return (
        (e && e.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
        }
    );
}
