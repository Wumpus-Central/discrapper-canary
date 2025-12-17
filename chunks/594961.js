n.d(t, {
    KS: () => b,
    V4: () => E,
}),
    n(388685);
var r,
    i = n(54381),
    s = n(473749),
    a = n(442837),
    l = n(481060),
    o = n(893776),
    c = n(232567),
    u = n(353926),
    d = n(82554),
    h = n(185625),
    f = n(314897),
    g = n(603237),
    m = n(720982),
    p = n(700511),
    x = n(736382);
function _(e) {
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
a.ZP.initialize();
var E = (((r = {}).SELECTION = "selection"), (r.DSA = "dsa"), (r.TIDA = "tida"), r);
let v = (e) => {
        let { transitionState: t, onClose: n } = e,
            [r, E] = s.useState(!0),
            [b, j] = s.useState([]),
            [I, N] = s.useState("selection"),
            y = (0, a.e7)([f.default], () => f.default.isAuthenticated()),
            S = (0, a.e7)([u.Z], () => u.Z.hasLoadedExperiments),
            C = s.useCallback(() => {
                (0, h.Jj)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        E(!1), j(t);
                    })
                    .catch(() => {
                        E(!1), j([]);
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
        let T = b.filter((e) => e !== d.BM.MEDIA_TAKEDOWN),
            O = b.includes(d.BM.MEDIA_TAKEDOWN),
            A = T.length > 0,
            Z = A && O;
        s.useEffect(() => {
            !r && S && !Z && (A ? N("dsa") : O && N("tida"));
        }, [r, S, Z, A, O]),
            s.useEffect(() => {
                r || !S || A || O || n();
            }, [r, S, A, O, n]);
        let P = s.useCallback((e) => {
                N(e);
            }, []),
            R = s.useCallback(() => {
                N("selection");
            }, []),
            L = s.useCallback(() => {
                (0, l.ZDy)(() => Promise.resolve((e) => (0, i.jsx)(v, _({}, e))), { dismissable: !1 });
            }, []),
            D = s.useCallback(
                (e) =>
                    null != e
                        ? (0, i.jsx)(l.mzw, {
                              className: x.footer,
                              "data-migration-pending": !0,
                              children: e,
                          })
                        : null,
                [],
            );
        return (0, i.jsx)(l.Y0X, {
            transitionState: t,
            parentComponent: "UnauthenticatedReportForm",
            "data-migration-pending": !0,
            children: (0, i.jsx)(l.hzk, {
                className: x.container,
                "data-migration-pending": !0,
                children:
                    r || !S
                        ? (0, i.jsx)(l.Kqy, {
                              gap: 16,
                              align: "center",
                              justify: "center",
                              style: { minHeight: "200px" },
                              children: (0, i.jsx)(l.$jN, {}),
                          })
                        : (0, i.jsxs)(l.MyZ, {
                              width: "100%",
                              activeSlide: I,
                              centered: !1,
                              children: [
                                  (0, i.jsx)(l.Mi4, {
                                      id: "selection",
                                      children: (0, i.jsx)(m.d, { onNavigate: P }),
                                  }),
                                  (0, i.jsx)(l.Mi4, {
                                      id: "dsa",
                                      children: (0, i.jsx)(g.n, {
                                          showBackButton: Z,
                                          onBack: Z ? R : void 0,
                                          dsaCapabilities: T,
                                          renderFooter: D,
                                          onClose: n,
                                          onReopen: L,
                                      }),
                                  }),
                                  (0, i.jsx)(l.Mi4, {
                                      id: "tida",
                                      children: (0, i.jsx)(p.e, {
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
    b = () => (
        s.useEffect(() => {
            (0, l.ZDy)(() => Promise.resolve((e) => (0, i.jsx)(v, _({}, e))), { dismissable: !1 });
        }, []),
        null
    );
