n.d(t, {
    A: () => G,
}),
    n(896048),
    n(667532);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(108531),
    u = n(837381),
    d = n(838677),
    f = n(319060),
    p = n(397927),
    _ = n(554375),
    h = n(82495),
    m = n(260762),
    g = n(915089),
    E = n(7584),
    b = n(690521),
    y = n(240248),
    O = n(650583),
    A = n(985018),
    v = n(580103);

function S(e, t, n) {
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

function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}

function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let w = 20,
    P = 125,
    D = (0, g.Ld)(),
    x = d.A.convert.fromCodePoint("1f44f"),
    L = (0, y.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    j = (0, y.xI)(f.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);

function M(e) {
    switch (d.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return A.intl.string(A.t["BVK5b/"]);
        case "1f3fc":
            return A.intl.string(A.t.xJWOK8);
        case "1f3fd":
            return A.intl.string(A.t["MB+T5g"]);
        case "1f3fe":
            return A.intl.string(A.t.MODud2);
        case "1f3ff":
            return A.intl.string(A.t["0uzqsc"]);
        default:
            return A.intl.string(A.t.bGN1ow);
    }
}
let k = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: a, index: s } = e,
            o = (0, u.rm)("item-".concat(s)),
            l = b.Ay.getURL(x + n),
            d = (0, p.zhh)(
                {
                    opacity: 1,
                    from: {
                        opacity: +!t,
                    },
                    delay: a,
                },
                "animate-always",
            );
        return (0, r.jsx)(
            p.DUT,
            C(I({}, o), {
                role: "option",
                "aria-selected": 0 === s,
                onClick: () => i(n),
                className: v.B6,
                children: (0, r.jsx)(c.animated.div, {
                    "aria-label": M(n),
                    className: v.g4,
                    style: I(
                        {
                            backgroundImage: 'url("'.concat(l, '")'),
                        },
                        d,
                    ),
                }),
            }),
        );
    },
    U = (e) => {
        let { id: t, selectedSurrogate: n, onClick: a } = e,
            s = (0, m.A)("diversity"),
            o = (0, p.zhh)({
                height: (j + 2 * L) * (E.W$.length + 1),
                from: {
                    height: j,
                },
                config: {
                    duration: P,
                },
            });
        i.useEffect(() => {
            s.focusFirstVisibleItem();
        }, [s]);
        let d = ["", ...E.W$];
        return (
            l().remove(d, (e) => e === n),
            d.unshift(n),
            (0, r.jsx)(u.hD, {
                navigator: s,
                children: (0, r.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n } = e,
                            i = N(e, ["ref"]);
                        return (0, r.jsx)(
                            c.animated.div,
                            C(I({}, i), {
                                id: t,
                                ref: n,
                                className: v.J6,
                                style: o,
                                role: "listbox",
                                children: d.map((e, t) =>
                                    (0, r.jsx)(
                                        k,
                                        {
                                            index: t,
                                            fade: 0 !== t,
                                            delay: t * w,
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
            o = b.Ay.getURL(x + n),
            [l, c] = i.useState(!1),
            u = (0, h.A)(null, () => c(!1)),
            d = i.useRef(null),
            f = () => {
                c(!0);
            },
            m = (e) => {
                e.key === O.dh.ESCAPE && (e.stopPropagation(), c(!1), null != d.current && d.current.focus());
            },
            g = (e) => {
                var n;
                (0, _.dK)(e), c(!1), null == (n = t.current) || n.focus();
            };
        return (0, r.jsxs)("div", {
            ref: u,
            className: s()(v.fx, a),
            children: [
                (0, r.jsx)(p.DUT, {
                    innerRef: d,
                    className: v.Dj,
                    onClick: f,
                    "aria-label": A.intl.string(A.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": l,
                    "aria-controls": D,
                    tabIndex: l ? -1 : 0,
                    children: (0, r.jsx)("div", {
                        className: v.g4,
                        style: {
                            backgroundImage: 'url("'.concat(o, '")'),
                        },
                    }),
                }),
                l
                    ? (0, r.jsx)("div", {
                          onKeyDown: m,
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
