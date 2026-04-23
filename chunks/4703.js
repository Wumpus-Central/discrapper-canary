"use strict";
n.d(t, { A: () => D }), n(667532);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(419354),
    c = n(837381),
    d = n(838677),
    _ = n(319060),
    f = n(717421),
    p = n(939249),
    h = n(554375),
    E = n(82495),
    m = n(260762),
    g = n(915089),
    A = n(7584),
    I = n(690521),
    T = n(240248),
    S = n(650583),
    y = n(985018),
    N = n(46274);
let v = (0, g.Ld)(),
    C = d.A.convert.fromCodePoint("1f44f"),
    O = (0, T.xI)(_.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
    R = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: s, index: a } = e,
            o = (0, c.rm)(`item-${a}`),
            l = I.Ay.getURL(C + n),
            _ = (0, f.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
        return (0, r.jsx)(p.D, {
            ...o,
            role: "option",
            "aria-selected": 0 === a,
            onClick: () => i(n),
            className: N.B6,
            children: (0, r.jsx)(u.animated.div, {
                "aria-label": (function (e) {
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
                })(n),
                className: N.g4,
                style: { backgroundImage: `url("${l}")`, ..._ },
            }),
        });
    },
    b = (e) => {
        let { id: t, selectedSurrogate: n, onClick: s } = e,
            a = (0, m.A)("diversity"),
            o = (0, f.z)({ height: (O + 14) * (A.W$.length + 1), from: { height: O + 14 }, config: { duration: 125 } });
        i.useEffect(() => {
            a.focusFirstVisibleItem();
        }, [a]);
        let d = ["", ...A.W$];
        return (
            l().remove(d, (e) => e === n),
            d.unshift(n),
            (0, r.jsx)(c.hD, {
                navigator: a,
                children: (0, r.jsx)(c.PR, {
                    children: (e) => {
                        let { ref: n, ...i } = e;
                        return (0, r.jsx)(u.animated.div, {
                            ...i,
                            id: t,
                            ref: n,
                            className: N.J6,
                            style: o,
                            role: "listbox",
                            children: d.map((e, t) =>
                                (0, r.jsx)(R, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: s }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    D = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: s } = e,
            o = I.Ay.getURL(C + n),
            [l, u] = i.useState(!1),
            c = (0, E.A)(null, () => u(!1)),
            d = i.useRef(null);
        return (0, r.jsxs)("div", {
            ref: c,
            className: a()(N.fx, s),
            children: [
                (0, r.jsx)(p.D, {
                    innerRef: d,
                    className: N.Dj,
                    onClick: () => {
                        u(!0);
                    },
                    "aria-label": y.intl.string(y.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": l,
                    "aria-controls": v,
                    tabIndex: l ? -1 : 0,
                    children: (0, r.jsx)("div", { className: N.g4, style: { backgroundImage: `url("${o}")` } }),
                }),
                l
                    ? (0, r.jsx)("div", {
                          onKeyDown: (e) => {
                              e.key === S.dh.ESCAPE &&
                                  (e.stopPropagation(), u(!1), null != d.current && d.current.focus());
                          },
                          children: (0, r.jsx)(b, {
                              id: v,
                              selectedSurrogate: n,
                              onClick: (e) => {
                                  (0, h.dK)(e), u(!1), t.current?.focus();
                              },
                          }),
                      })
                    : null,
            ],
        });
    };
