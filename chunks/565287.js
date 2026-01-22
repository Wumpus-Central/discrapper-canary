n.d(t, {
    Kz: () => b,
    rP: () => _,
}),
    n(896048);
var r,
    i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(830215),
    c = n(803306),
    u = n(49463),
    d = n(17372),
    h = n(369053),
    f = n(961350),
    p = n(974783),
    g = n(795101),
    m = n(309829),
    A = n(136643);

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
l.Ay.initialize();
var _ = (((r = {}).SELECTION = "selection"), (r.DSA = "dsa"), (r.TIDA = "tida"), r);
let E = (e) => {
        let { transitionState: t, onClose: n } = e,
            [r, _] = s.useState(!0),
            [b, v] = s.useState([]),
            [j, y] = s.useState("selection"),
            S = (0, l.bG)([f.default], () => f.default.isAuthenticated()),
            N = (0, l.bG)([u.A], () => u.A.hasLoadedExperiments),
            O = s.useCallback(() => {
                (0, h.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        _(!1), v(t);
                    })
                    .catch(() => {
                        _(!1), v([]);
                    });
            }, []);
        s.useEffect(() => {
            S
                ? (_(!0),
                  c
                      .rQ({
                          withAnalyticsToken: !0,
                      })
                      .then(() => O())
                      .catch(() => _(!1)))
                : O();
        }, [S, O]),
            s.useEffect(() => {
                (async () => {
                    N || (await o.A.getLocationMetadata(), o.A.getExperiments());
                })();
            }, [N]);
        let I = b.filter((e) => e !== d.tY.MEDIA_TAKEDOWN),
            T = b.includes(d.tY.MEDIA_TAKEDOWN),
            C = I.length > 0,
            R = C && T;
        s.useEffect(() => {
            !r && N && !R && (C ? y("dsa") : T && y("tida"));
        }, [r, N, R, C, T]),
            s.useEffect(() => {
                r || !N || C || T || n();
            }, [r, N, C, T, n]);
        let w = s.useCallback((e) => {
                y(e);
            }, []),
            P = s.useCallback(() => {
                y("selection");
            }, []),
            L = s.useCallback(() => {
                (0, a.mMO)(() => Promise.resolve((e) => (0, i.jsx)(E, x({}, e))), {
                    dismissable: !1,
                });
            }, []),
            k = s.useCallback(
                (e) =>
                    null != e
                        ? (0, i.jsx)(a.jlY, {
                              className: A.q,
                              "data-migration-pending": !0,
                              children: e,
                          })
                        : null,
                [],
            );
        return (0, i.jsx)(a.EOs, {
            transitionState: t,
            parentComponent: "UnauthenticatedReportForm",
            "data-migration-pending": !0,
            children: (0, i.jsx)(a.$mQ, {
                className: A.k,
                "data-migration-pending": !0,
                children:
                    r || !N
                        ? (0, i.jsx)(a.BJc, {
                              gap: 16,
                              align: "center",
                              justify: "center",
                              style: {
                                  minHeight: "200px",
                              },
                              children: (0, i.jsx)(a.y$y, {}),
                          })
                        : (0, i.jsxs)(a.tN_, {
                              width: "100%",
                              activeSlide: j,
                              centered: !1,
                              children: [
                                  (0, i.jsx)(a.q7S, {
                                      id: "selection",
                                      children: (0, i.jsx)(g.u, {
                                          onNavigate: w,
                                      }),
                                  }),
                                  (0, i.jsx)(a.q7S, {
                                      id: "dsa",
                                      children: (0, i.jsx)(p.c, {
                                          showBackButton: R,
                                          onBack: R ? P : void 0,
                                          dsaCapabilities: I,
                                          renderFooter: k,
                                          onClose: n,
                                          onReopen: L,
                                      }),
                                  }),
                                  (0, i.jsx)(a.q7S, {
                                      id: "tida",
                                      children: (0, i.jsx)(m.K, {
                                          showBackButton: R,
                                          onBack: R ? P : void 0,
                                          renderFooter: k,
                                          onClose: n,
                                          onReopen: L,
                                      }),
                                  }),
                              ],
                          }),
            }),
        });
    },
    b = () => (
        s.useEffect(() => {
            (0, a.mMO)(() => Promise.resolve((e) => (0, i.jsx)(E, x({}, e))), {
                dismissable: !1,
            });
        }, []),
        null
    );
