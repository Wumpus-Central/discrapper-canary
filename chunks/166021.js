n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(358458),
    l = n(481060),
    c = n(51636),
    u = n(329352);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = 910,
    m = 1400,
    g = (e) => {
        let { cards: t, className: n, cardType: a } = e,
            d = () => (window.innerWidth < h ? 1 : window.innerWidth < m ? 2 : 3),
            [_, g] = i.useState(0),
            [E, b] = i.useState(d()),
            y = t.length;
        i.useEffect(() => {
            let e = () => {
                b(d());
            };
            return (
                window.addEventListener("resize", e),
                () => {
                    window.removeEventListener("resize", e);
                }
            );
        }, []),
            i.useEffect(() => {
                g((e) => (y > E && e > y - E ? y - E : y <= E ? 0 : e));
            }, [y, E]);
        let O = _ > 0,
            v = () => {
                g((e) => (0 === e ? y - E : e - 1));
            },
            I = () => {
                g((e) => (e >= y - E ? 0 : e + 1));
            },
            T = i.useCallback((e) => ({ x: (e - _) * 100 }), [_]),
            [S, A] = (0, l.bYB)(t.length, T);
        return (
            i.useEffect(() => {
                A(T);
            }, [A, T]),
            (0, r.jsx)("div", {
                className: n,
                children: (0, r.jsxs)("div", {
                    className: u.cardContainer,
                    children: [
                        y > E &&
                            (0, r.jsx)(l.P3F, {
                                onClick: O ? v : void 0,
                                className: o()({
                                    [u.leftArrow]: O,
                                    [u.inactiveArrow]: !O,
                                }),
                                children: (0, r.jsx)(l.whL, {
                                    className: u.arrowIcon,
                                    colorClass: u.arrowIcon,
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: u.cardInnerContainer,
                            children: S.map((e, n) => {
                                let { x: i } = e;
                                return (0, r.jsx)(
                                    s.animated.div,
                                    {
                                        className: u.card,
                                        style: {
                                            transform:
                                                null == i ? void 0 : i.to((e) => "translate3d(".concat(e, "%,0,0)")),
                                        },
                                        children: (0, r.jsx)(
                                            c.Z,
                                            p(f({}, t[n]), { cardType: a }),
                                            "".concat(t[n].name, "_").concat(n, "_perks_card"),
                                        ),
                                    },
                                    "".concat(t[n].name, "_").concat(n, "_animated_div"),
                                );
                            }),
                        }),
                        y > E &&
                            (0, r.jsx)(l.P3F, {
                                onClick: I,
                                className: u.rightArrow,
                                children: (0, r.jsx)(l.ZSh, {
                                    className: u.arrowIcon,
                                    colorClass: u.arrowIcon,
                                }),
                            }),
                        y > E &&
                            (0, r.jsx)("div", {
                                className: u.cardProgressBar,
                                children: t.map((e, t) => {
                                    if (!(t > y - E))
                                        return (0, r.jsx)(
                                            "div",
                                            { className: t === _ ? u.selectedDot : u.dot },
                                            "progress_bar_dot_".concat(t),
                                        );
                                }),
                            }),
                    ],
                }),
            })
        );
    };
