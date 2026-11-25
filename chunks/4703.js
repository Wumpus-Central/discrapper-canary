n(667532);
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(435558),
    o = n.n(a),
    c = n(156150),
    u = n(837381),
    d = n(833272),
    m = n(319060),
    f = n(717421),
    E = n(939249),
    I = n(554375),
    h = n(82495),
    g = n(260762),
    A = n(915089),
    p = n(7584),
    _ = n(690521),
    N = n(240248),
    C = n(650583),
    y = n(792996),
    x = n(683829);
let j = (0, A.Ld)(),
    O = d.A.convert.fromCodePoint("1f44f"),
    S = (0, N.xI)(m.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function T(e) {
    switch (d.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return y.intl.string(y.t["BVK5b/"]);
        case "1f3fc":
            return y.intl.string(y.t.xJWOK8);
        case "1f3fd":
            return y.intl.string(y.t["MB+T5g"]);
        case "1f3fe":
            return y.intl.string(y.t.MODud2);
        case "1f3ff":
            return y.intl.string(y.t["0uzqsc"]);
        default:
            return y.intl.string(y.t.bGN1ow);
    }
}
let b = (e) => {
    let { fade: t, surrogate: n, onClick: s, delay: l, index: r } = e,
        a = (0, u.rm)(`item-${r}`),
        o = _.Ay.getURL(O + n),
        d = (0, f.z)({ opacity: 1, from: { opacity: +!t }, delay: l }, "animate-always");
    return (0, i.jsx)(E.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => s(n),
        className: x.B6,
        children: (0, i.jsx)(c.animated.div, {
            "aria-label": T(n),
            className: x.g4,
            style: { backgroundImage: `url("${o}")`, ...d },
        }),
    });
};
function R(e) {
    let { id: t, selectedSurrogate: n, onClick: l } = e,
        r = (0, g.A)("diversity"),
        a = (0, f.z)({ height: (S + 14) * (p.W$.length + 1), from: { height: S + 14 }, config: { duration: 125 } }),
        d = s.useRef(r);
    s.useEffect(() => {
        d.current.focusFirstVisibleItem();
    }, []);
    let m = ["", ...p.W$];
    return (
        o().remove(m, (e) => e === n),
        m.unshift(n),
        (0, i.jsx)(u.hD, {
            navigator: r,
            children: (0, i.jsx)(u.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, i.jsx)(c.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: x.J6,
                        style: a,
                        role: "listbox",
                        children: m.map((e, t) =>
                            (0, i.jsx)(b, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: l }, t),
                        ),
                    });
                },
            }),
        })
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { searchBarRef: t, selectedSurrogate: n, className: l } = e,
                a = _.Ay.getURL(O + n),
                [o, c] = s.useState(!1),
                u = (0, h.A)(null, () => c(!1)),
                d = s.useRef(null);
            return (0, i.jsxs)("div", {
                ref: u,
                className: r()(x.fx, l),
                children: [
                    (0, i.jsx)(E.D, {
                        innerRef: d,
                        className: x.Dj,
                        onClick: function () {
                            c(!0);
                        },
                        "aria-label": y.intl.formatToPlainString(y.t["2SfnMp"], { skinTone: T(n) }),
                        "aria-haspopup": !0,
                        "aria-expanded": o,
                        "aria-controls": j,
                        tabIndex: o ? -1 : 0,
                        children: (0, i.jsx)("div", { className: x.g4, style: { backgroundImage: `url("${a}")` } }),
                    }),
                    o
                        ? (0, i.jsx)("div", {
                              onKeyDown: function (e) {
                                  e.key === C.dh.ESCAPE
                                      ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                                      : "Tab" === e.key && c(!1);
                              },
                              children: (0, i.jsx)(R, {
                                  id: j,
                                  selectedSurrogate: n,
                                  onClick: function (e) {
                                      ((0, I.dK)(e), c(!1), t.current?.focus());
                                  },
                              }),
                          })
                        : null,
                ],
            });
        },
    },
);
