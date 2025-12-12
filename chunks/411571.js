n.d(t, { H: () => f });
var r = n(990681),
    i = n(509440),
    a = n(82255),
    o = n(8062),
    _ = n(98076),
    s = n(343573),
    c = n(309063),
    E = n(886649),
    l = n(808446),
    u = n(687566),
    d = n(13379),
    p = n(483698);
function f() {
    let e,
        t,
        n = 0;
    if (
        !(function () {
            try {
                return (0, r.x)([
                    PerformanceObserver,
                    "access",
                    (e) => e.supportedEntryTypes,
                    "optionalAccess",
                    (e) => e.includes,
                    "call",
                    (e) => e("layout-shift"),
                ]);
            } catch (e) {
                return !1;
            }
        })()
    )
        return;
    let f = !1;
    function I() {
        f ||
            ((f = !0),
            t &&
                (function (e, t, n) {
                    l.X && _.kg.log(`Sending CLS span (${e})`);
                    let a = (0, d.XL)((s.Z1 || 0) + ((0, r.x)([t, "optionalAccess", (e) => e.startTime]) || 0)),
                        u = (0, i.nZ)().getScopeData().transactionName,
                        p = t
                            ? (0, c.Rt)(
                                  (0, r.x)([
                                      t,
                                      "access",
                                      (e) => e.sources,
                                      "access",
                                      (e) => e[0],
                                      "optionalAccess",
                                      (e) => e.node,
                                  ]),
                              )
                            : "Layout shift",
                        f = (0, E.Jr)({
                            [o.S3]: "auto.http.browser.cls",
                            [o.$J]: "ui.webvital.cls",
                            [o.JQ]: (0, r.x)([t, "optionalAccess", (e) => e.duration]) || 0,
                            "sentry.pageload.span_id": n,
                        }),
                        I = (0, d.fi)({
                            name: p,
                            transaction: u,
                            attributes: f,
                            startTime: a,
                        });
                    (0, r.x)([
                        I,
                        "optionalAccess",
                        (e) => e.addEvent,
                        "call",
                        (t) =>
                            t("cls", {
                                [o.E1]: "",
                                [o.Wb]: e,
                            }),
                    ]),
                        (0, r.x)([I, "optionalAccess", (e) => e.end, "call", (e) => e(a)]);
                })(n, e, t),
            T());
    }
    let T = (0, u.PR)(({ metric: t }) => {
        let r = t.entries[t.entries.length - 1];
        r && ((n = t.value), (e = r));
    }, !0);
    (0, p.u)(() => {
        I();
    }),
        setTimeout(() => {
            let e = (0, i.s3)(),
                n = (0, r.x)([
                    e,
                    "optionalAccess",
                    (e) => e.on,
                    "call",
                    (e) =>
                        e("startNavigationSpan", () => {
                            I(), n && n();
                        }),
                ]),
                o = (0, a.HN)(),
                _ = o && (0, a.Gx)(o),
                s = _ && (0, a.XU)(_);
            s && "pageload" === s.op && (t = _.spanContext().spanId);
        }, 0);
}
