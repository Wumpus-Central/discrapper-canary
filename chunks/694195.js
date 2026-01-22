n.d(t, {
    o: () => l,
}),
    n(896048),
    n(446912);
var r = n(64700);

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function a(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}

function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let l = function (e) {
    let { scrollOffset: t } =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      scrollOffset: 60,
                  },
        n = (0, r.useCallback)(
            (e) => {
                let n = u.current[e];
                null != n &&
                    ((n.style.scrollMarginTop = "".concat(t, "px")),
                    n.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    }));
            },
            [t],
        ),
        [i, s] = (0, r.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
        [l, c] = (0, r.useState)(e[0]);
    (0, r.useEffect)(() => {
        let e = Object.keys(i).filter((e) => i[e]);
        e.length > 0 && c(e[0]);
    }, [i]);
    let u = (0, r.useRef)({});
    return (
        (0, r.useEffect)(() => {
            let e = new IntersectionObserver((e) => {
                e.forEach((e) => {
                    s((t) =>
                        o(a({}, t), {
                            [e.target.id]: e.isIntersecting,
                        }),
                    );
                });
            });
            return (
                Object.values(u.current).forEach((t) => {
                    null != t && e.observe(t);
                }),
                () => e.disconnect()
            );
        }, []),
        {
            navBarSections: (0, r.useMemo)(() => {
                let t = {};
                return e.reduce(
                    (e, t, r) => (
                        (e[t] = {
                            id: t,
                            ref: (e) => {
                                (u.current[t] = e), null != e && (e.id = t);
                            },
                            scrollToSection: () => n(t),
                            order: r,
                        }),
                        e
                    ),
                    t,
                );
            }, [e, n]),
            activeSectionId: l,
            setActiveSectionId: c,
        }
    );
};
