n.d(t, { Z: () => p });
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(481060),
    o = n(607070),
    s = n(7093),
    c = n(817466),
    d = n(388032),
    u = n(119290);
let m = r.lazy(() => n.e("77898").then(n.bind(n, 739859)));
function p() {
    let e = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        t = (0, s.Z)((e) => e.shouldRenderTenureLevelUp),
        n = (0, c.Z)();
    return e || !t || null == n ? null : (0, a.jsx)(h, { levelUpData: n });
}
function h(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        i = r.useCallback(() => {
            s.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        r.useEffect(() => i, [i]),
        (0, a.jsx)(l.EqS, {
            containerRef: n,
            children: (0, a.jsxs)("div", {
                className: u.wrapper,
                children: [
                    (0, a.jsx)("div", {
                        className: u.closeButton,
                        children: (0, a.jsx)(l.aML, {
                            text: d.intl.string(d.t.cpT0Cg),
                            children: (e) => {
                                var t, n;
                                return (0, a.jsx)(
                                    l.hU,
                                    ((t = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                a = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (a = a.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                a.forEach(function (t) {
                                                    var a;
                                                    (a = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: a,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = a);
                                                });
                                        }
                                        return e;
                                    })({}, e)),
                                    (n = n =
                                        {
                                            icon: l.Dio,
                                            variant: "secondary",
                                            size: "sm",
                                            onClick: i,
                                            "aria-label": d.intl.string(d.t.cpT0Cg),
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var a = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, a);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t),
                                );
                            },
                        }),
                    }),
                    (0, a.jsx)(r.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(m, { levelUpData: t }),
                    }),
                ],
            }),
        })
    );
}
