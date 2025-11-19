n.d(t, { Z: () => p });
var a = n(54381),
    l = n(473749),
    i = n(442837),
    r = n(481060),
    s = n(607070),
    o = n(7093),
    c = n(817466),
    d = n(388032),
    u = n(119290);
let m = l.lazy(() => n.e("77898").then(n.bind(n, 739859)));
function p() {
    let e = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        t = (0, o.Z)((e) => e.shouldRenderTenureLevelUp),
        n = (0, c.Z)();
    return e || !t || null == n ? null : (0, a.jsx)(h, { levelUpData: n });
}
function h(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        i = l.useCallback(() => {
            o.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        l.useEffect(() => i, [i]),
        (0, a.jsx)(r.EqS, {
            containerRef: n,
            children: (0, a.jsxs)("div", {
                className: u.wrapper,
                children: [
                    (0, a.jsx)("div", {
                        className: u.closeButton,
                        children: (0, a.jsx)(r.aML, {
                            text: d.intl.string(d.t.cpT0Cq),
                            children: (e) => {
                                var t, n;
                                return (0, a.jsx)(
                                    r.hU,
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
                                            icon: r.Dio,
                                            variant: "secondary",
                                            size: "sm",
                                            onClick: i,
                                            "aria-label": d.intl.string(d.t.cpT0Cq),
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
                    (0, a.jsx)(l.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(m, { levelUpData: t }),
                    }),
                ],
            }),
        })
    );
}
