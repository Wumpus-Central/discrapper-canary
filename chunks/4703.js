n.d(t, {
    A: () => G,
}),
    n(896048),
    n(667532);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(92674),
    u = n(837381),
    d = n(838677),
    f = n(319060),
    p = n(397927),
    _ = n(554375),
    h = n(82495),
    m = n(260762),
    g = n(915089),
    E = n(7584),
    y = n(690521),
    b = n(240248),
    O = n(650583),
    v = n(985018),
    A = n(580103);

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

function S(e) {
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
    if (((a = w(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let R = 20,
    P = 125,
    D = (0, g.Ld)(),
    L = d.A.convert.fromCodePoint("1f44f"),
    x = (0, b.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    M = (0, b.xI)(f.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);

function j(e) {
    switch (d.A.convert.toCodePoint(e)) {
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
            s = (0, u.rm)("item-".concat(o)),
            l = y.Ay.getURL(L + n),
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
            C(S({}, s), {
                role: "option",
                "aria-selected": 0 === o,
                onClick: () => i(n),
                className: A.B6,
                children: (0, r.jsx)(c.animated.div, {
                    "aria-label": j(n),
                    className: A.g4,
                    style: S(
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
            o = (0, m.A)("diversity"),
            s = (0, p.zhh)({
                height: (M + 2 * x) * (E.W$.length + 1),
                from: {
                    height: M,
                },
                config: {
                    duration: P,
                },
            });
        i.useEffect(() => {
            o.focusFirstVisibleItem();
        }, [o]);
        let d = ["", ...E.W$];
        return (
            l().remove(d, (e) => e === n),
            d.unshift(n),
            (0, r.jsx)(u.hD, {
                navigator: o,
                children: (0, r.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n } = e,
                            i = N(e, ["ref"]);
                        return (0, r.jsx)(
                            c.animated.div,
                            C(S({}, i), {
                                id: t,
                                ref: n,
                                className: A.J6,
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
            s = y.Ay.getURL(L + n),
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
            className: o()(A.fx, a),
            children: [
                (0, r.jsx)(p.DUT, {
                    innerRef: d,
                    className: A.Dj,
                    onClick: f,
                    "aria-label": v.intl.string(v.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": l,
                    "aria-controls": D,
                    tabIndex: l ? -1 : 0,
                    children: (0, r.jsx)("div", {
                        className: A.g4,
                        style: {
                            backgroundImage: 'url("'.concat(s, '")'),
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
