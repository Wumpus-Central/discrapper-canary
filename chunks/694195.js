n.d(t, {
    o: () => i,
}),
    n(896048),
    n(446912);
var r = n(64700);
let i = function (e) {
    let { scrollOffset: t } =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      scrollOffset: 60,
                  },
        n = (0, r.useCallback)(
            (e) => {
                let n = o.current[e];
                null != n &&
                    ((n.style.scrollMarginTop = "".concat(t, "px")),
                    n.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    }));
            },
            [t],
        ),
        [i, l] = (0, r.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
        [s, a] = (0, r.useState)(e[0]);
    (0, r.useEffect)(() => {
        let e = Object.keys(i).filter((e) => i[e]);
        e.length > 0 && a(e[0]);
    }, [i]);
    let o = (0, r.useRef)({});
    return (
        (0, r.useEffect)(() => {
            let e = new IntersectionObserver((e) => {
                e.forEach((e) => {
                    l((t) => {
                        var n, r;
                        return (
                            (n = (function (e) {
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
                            })({}, t)),
                            (r = r =
                                {
                                    [e.target.id]: e.isIntersecting,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n
                        );
                    });
                });
            });
            return (
                Object.values(o.current).forEach((t) => {
                    null != t && e.observe(t);
                }),
                () => e.disconnect()
            );
        }, []),
        {
            navBarSections: (0, r.useMemo)(
                () =>
                    e.reduce(
                        (e, t, r) => (
                            (e[t] = {
                                id: t,
                                ref: (e) => {
                                    (o.current[t] = e), null != e && (e.id = t);
                                },
                                scrollToSection: () => n(t),
                                order: r,
                            }),
                            e
                        ),
                        {},
                    ),
                [e, n],
            ),
            activeSectionId: s,
            setActiveSectionId: a,
        }
    );
};
