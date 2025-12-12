n.d(t, {
    KS: () => j,
    V4: () => E,
}),
    n(388685);
var r,
    i = n(54381),
    s = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(893776),
    c = n(232567),
    u = n(353926),
    d = n(82554),
    h = n(185625),
    g = n(314897),
    m = n(603237),
    p = n(720982),
    f = n(700511),
    _ = n(738270);
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
l.ZP.initialize();
var E = (((r = {}).SELECTION = "selection"), (r.DSA = "dsa"), (r.TIDA = "tida"), r);
let v = (e) => {
        let { transitionState: t, onClose: n } = e,
            [r, E] = s.useState(!0),
            [j, b] = s.useState([]),
            [I, N] = s.useState("selection"),
            y = (0, l.e7)([g.default], () => g.default.isAuthenticated()),
            S = (0, l.e7)([u.Z], () => u.Z.hasLoadedExperiments),
            C = s.useCallback(() => {
                (0, h.Jj)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        E(!1), b(t);
                    })
                    .catch(() => {
                        E(!1), b([]);
                    });
            }, []);
        s.useEffect(() => {
            y
                ? (E(!0),
                  c
                      .k({ withAnalyticsToken: !0 })
                      .then(() => C())
                      .catch(() => E(!1)))
                : C();
        }, [y, C]),
            s.useEffect(() => {
                (async () => {
                    S || (await o.Z.getLocationMetadata(), o.Z.getExperiments());
                })();
            }, [S]);
        let O = j.filter((e) => e !== d.BM.MEDIA_TAKEDOWN),
            T = j.includes(d.BM.MEDIA_TAKEDOWN),
            A = O.length > 0,
            Z = A && T;
        s.useEffect(() => {
            !r && S && !Z && (A ? N("dsa") : T && N("tida"));
        }, [r, S, Z, A, T]),
            s.useEffect(() => {
                r || !S || A || T || n();
            }, [r, S, A, T, n]);
        let P = s.useCallback((e) => {
                N(e);
            }, []),
            R = s.useCallback(() => {
                N("selection");
            }, []),
            L = s.useCallback(() => {
                (0, a.ZDy)(() => Promise.resolve((e) => (0, i.jsx)(v, x({}, e))), { dismissable: !1 });
            }, []),
            D = s.useCallback(
                (e) =>
                    null != e
                        ? (0, i.jsx)(a.mzw, {
                              className: _.footer,
                              "data-migration-pending": !0,
                              children: e,
                          })
                        : null,
                [],
            );
        return (0, i.jsx)(a.Y0X, {
            transitionState: t,
            parentComponent: "UnauthenticatedReportForm",
            "data-migration-pending": !0,
            children: (0, i.jsx)(a.hzk, {
                className: _.container,
                "data-migration-pending": !0,
                children:
                    r || !S
                        ? (0, i.jsx)(a.Kqy, {
                              gap: 16,
                              align: "center",
                              justify: "center",
                              style: { minHeight: "200px" },
                              children: (0, i.jsx)(a.$jN, {}),
                          })
                        : (0, i.jsxs)(a.MyZ, {
                              width: "100%",
                              activeSlide: I,
                              centered: !1,
                              children: [
                                  (0, i.jsx)(a.Mi4, {
                                      id: "selection",
                                      children: (0, i.jsx)(p.d, { onNavigate: P }),
                                  }),
                                  (0, i.jsx)(a.Mi4, {
                                      id: "dsa",
                                      children: (0, i.jsx)(m.n, {
                                          showBackButton: Z,
                                          onBack: Z ? R : void 0,
                                          dsaCapabilities: O,
                                          renderFooter: D,
                                          onClose: n,
                                          onReopen: L,
                                      }),
                                  }),
                                  (0, i.jsx)(a.Mi4, {
                                      id: "tida",
                                      children: (0, i.jsx)(f.e, {
                                          showBackButton: Z,
                                          onBack: Z ? R : void 0,
                                          renderFooter: D,
                                          onClose: n,
                                          onReopen: L,
                                      }),
                                  }),
                              ],
                          }),
            }),
        });
    },
    j = () => (
        s.useEffect(() => {
            (0, a.ZDy)(() => Promise.resolve((e) => (0, i.jsx)(v, x({}, e))), { dismissable: !1 });
        }, []),
        null
    );
