n.d(t, { Z: () => G }), n(388685), n(290780);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(205120),
    u = n(91192),
    d = n(336317),
    f = n(477690),
    p = n(481060),
    _ = n(80932),
    m = n(351773),
    h = n(209613),
    g = n(313201),
    E = n(633302),
    b = n(176354),
    y = n(624138),
    O = n(295907),
    v = n(388032),
    S = n(330580);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = 20,
    w = 125,
    D = (0, g.hQ)(),
    x = d.Z.convert.fromCodePoint("1f44f"),
    L = (0, y.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    j = (0, y.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function M(e) {
    switch (d.Z.convert.toCodePoint(e)) {
        case "1f3fb":
            return v.intl.string(v.t["BVK5b/"]);
        case "1f3fc":
            return v.intl.string(v.t.xJWOK8);
        case "1f3fd":
            return v.intl.string(v.t["MB+T5g"]);
        case "1f3fe":
            return v.intl.string(v.t.MODud2);
        case "1f3ff":
            return v.intl.string(v.t["0uzqsc"]);
        default:
            return v.intl.string(v.t.bGN1ow);
    }
}
let k = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: a, index: o } = e,
            s = (0, u.JA)("item-".concat(o)),
            l = b.ZP.getURL(x + n),
            d = (0, p.q_F)(
                {
                    opacity: 1,
                    from: { opacity: +!t },
                    delay: a,
                },
                "animate-always",
            );
        return (0, r.jsx)(
            p.P3F,
            C(T({}, s), {
                role: "option",
                "aria-selected": 0 === o,
                onClick: () => i(n),
                className: S.diversityEmojiItem,
                children: (0, r.jsx)(c.animated.div, {
                    "aria-label": M(n),
                    className: S.diversityEmojiItemImage,
                    style: T({ backgroundImage: 'url("'.concat(l, '")') }, d),
                }),
            }),
        );
    },
    U = (e) => {
        let { id: t, selectedSurrogate: n, onClick: a } = e,
            o = (0, h.Z)("diversity"),
            s = (0, p.q_F)({
                height: (j + 2 * L) * (E.gw.length + 1),
                from: { height: j },
                config: { duration: w },
            });
        i.useEffect(() => {
            o.focusFirstVisibleItem();
        }, [o]);
        let d = ["", ...E.gw];
        return (
            l().remove(d, (e) => e === n),
            d.unshift(n),
            (0, r.jsx)(u.bG, {
                navigator: o,
                children: (0, r.jsx)(u.SJ, {
                    children: (e) => {
                        var { ref: n } = e,
                            i = N(e, ["ref"]);
                        return (0, r.jsx)(
                            c.animated.div,
                            C(T({}, i), {
                                id: t,
                                ref: n,
                                className: S.diversitySelectorOptions,
                                style: s,
                                role: "listbox",
                                children: d.map((e, t) =>
                                    (0, r.jsx)(
                                        k,
                                        {
                                            index: t,
                                            fade: 0 !== t,
                                            delay: t * R,
                                            surrogate: e,
                                            onClick: a,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        );
                    },
                }),
            })
        );
    },
    G = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: a } = e,
            s = b.ZP.getURL(x + n),
            [l, c] = i.useState(!1),
            u = (0, m.Z)(null, () => c(!1)),
            d = i.useRef(null),
            f = () => {
                c(!0);
            },
            h = (e) => {
                e.key === O.vn.ESCAPE && (e.stopPropagation(), c(!1), null != d.current && d.current.focus());
            },
            g = (e) => {
                var n;
                (0, _.t0)(e), c(!1), null == (n = t.current) || n.focus();
            };
        return (0, r.jsxs)("div", {
            ref: u,
            className: o()(S.diversitySelector, a),
            children: [
                (0, r.jsx)(p.P3F, {
                    innerRef: d,
                    className: S.diversitySelectorButton,
                    onClick: f,
                    "aria-label": v.intl.string(v.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": l,
                    "aria-controls": D,
                    tabIndex: l ? -1 : 0,
                    children: (0, r.jsx)("div", {
                        className: S.diversityEmojiItemImage,
                        style: { backgroundImage: 'url("'.concat(s, '")') },
                    }),
                }),
                l
                    ? (0, r.jsx)("div", {
                          onKeyDown: h,
                          children: (0, r.jsx)(U, {
                              id: D,
                              selectedSurrogate: n,
                              onClick: g,
                          }),
                      })
                    : null,
            ],
        });
    };
