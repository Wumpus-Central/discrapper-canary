r.d(t, { H: () => p });
var n = r(990681),
    a = r(509440),
    i = r(82255),
    o = r(8062),
    _ = r(98076),
    s = r(343573),
    c = r(309063),
    E = r(886649),
    l = r(808446),
    u = r(687566),
    d = r(13379),
    I = r(483698);
function p() {
    let e,
        t,
        r = 0;
    if (
        !(function () {
            try {
                return (0, n.x)([
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
    let p = !1;
    function R() {
        p ||
            ((p = !0),
            t &&
                (function (e, t, r) {
                    l.X && _.kg.log(`Sending CLS span (${e})`);
                    let i = (0, d.XL)((s.Z1 || 0) + ((0, n.x)([t, "optionalAccess", (e) => e.startTime]) || 0)),
                        u = (0, a.nZ)().getScopeData().transactionName,
                        I = t
                            ? (0, c.Rt)(
                                  (0, n.x)([
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
                        p = (0, E.Jr)({
                            [o.S3]: "auto.http.browser.cls",
                            [o.$J]: "ui.webvital.cls",
                            [o.JQ]: (0, n.x)([t, "optionalAccess", (e) => e.duration]) || 0,
                            "sentry.pageload.span_id": r,
                        }),
                        R = (0, d.fi)({
                            name: I,
                            transaction: u,
                            attributes: p,
                            startTime: i,
                        });
                    (0, n.x)([
                        R,
                        "optionalAccess",
                        (e) => e.addEvent,
                        "call",
                        (t) =>
                            t("cls", {
                                [o.E1]: "",
                                [o.Wb]: e,
                            }),
                    ]),
                        (0, n.x)([R, "optionalAccess", (e) => e.end, "call", (e) => e(i)]);
                })(r, e, t),
            T());
    }
    let T = (0, u.PR)(({ metric: t }) => {
        let n = t.entries[t.entries.length - 1];
        n && ((r = t.value), (e = n));
    }, !0);
    (0, I.u)(() => {
        R();
    }),
        setTimeout(() => {
            let e = (0, a.s3)(),
                r = (0, n.x)([
                    e,
                    "optionalAccess",
                    (e) => e.on,
                    "call",
                    (e) =>
                        e("startNavigationSpan", () => {
                            R(), r && r();
                        }),
                ]),
                o = (0, i.HN)(),
                _ = o && (0, i.Gx)(o),
                s = _ && (0, i.XU)(_);
            s && "pageload" === s.op && (t = _.spanContext().spanId);
        }, 0);
}
