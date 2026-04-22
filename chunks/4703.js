"use strict";
n.d(t, { A: () => R }), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(517738),
    u = n(837381),
    d = n(838677),
    h = n(319060),
    m = n(717421),
    p = n(939249),
    f = n(554375),
    g = n(82495),
    _ = n(260762),
    x = n(915089),
    A = n(7584),
    C = n(690521),
    E = n(240248),
    I = n(650583),
    v = n(985018),
    y = n(340354);
let S = (0, x.Ld)(),
    b = d.A.convert.fromCodePoint("1f44f"),
    N = (0, E.xI)(h.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
    T = (e) => {
        let { fade: t, surrogate: n, onClick: l, delay: s, index: r } = e,
            a = (0, u.rm)(`item-${r}`),
            o = C.Ay.getURL(b + n),
            h = (0, m.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
        return (0, i.jsx)(p.D, {
            ...a,
            role: "option",
            "aria-selected": 0 === r,
            onClick: () => l(n),
            className: y.B6,
            children: (0, i.jsx)(c.animated.div, {
                "aria-label": (function (e) {
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
                })(n),
                className: y.g4,
                style: { backgroundImage: `url("${o}")`, ...h },
            }),
        });
    },
    j = (e) => {
        let { id: t, selectedSurrogate: n, onClick: s } = e,
            r = (0, _.A)("diversity"),
            a = (0, m.z)({ height: (N + 14) * (A.W$.length + 1), from: { height: N + 14 }, config: { duration: 125 } });
        l.useEffect(() => {
            r.focusFirstVisibleItem();
        }, [r]);
        let d = ["", ...A.W$];
        return (
            o().remove(d, (e) => e === n),
            d.unshift(n),
            (0, i.jsx)(u.hD, {
                navigator: r,
                children: (0, i.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsx)(c.animated.div, {
                            ...l,
                            id: t,
                            ref: n,
                            className: y.J6,
                            style: a,
                            role: "listbox",
                            children: d.map((e, t) =>
                                (0, i.jsx)(T, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: s }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    R = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: s } = e,
            a = C.Ay.getURL(b + n),
            [o, c] = l.useState(!1),
            u = (0, g.A)(null, () => c(!1)),
            d = l.useRef(null);
        return (0, i.jsxs)("div", {
            ref: u,
            className: r()(y.fx, s),
            children: [
                (0, i.jsx)(p.D, {
                    innerRef: d,
                    className: y.Dj,
                    onClick: () => {
                        c(!0);
                    },
                    "aria-label": v.intl.string(v.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": o,
                    "aria-controls": S,
                    tabIndex: o ? -1 : 0,
                    children: (0, i.jsx)("div", { className: y.g4, style: { backgroundImage: `url("${a}")` } }),
                }),
                o
                    ? (0, i.jsx)("div", {
                          onKeyDown: (e) => {
                              e.key === I.dh.ESCAPE &&
                                  (e.stopPropagation(), c(!1), null != d.current && d.current.focus());
                          },
                          children: (0, i.jsx)(j, {
                              id: S,
                              selectedSurrogate: n,
                              onClick: (e) => {
                                  (0, f.dK)(e), c(!1), t.current?.focus();
                              },
                          }),
                      })
                    : null,
            ],
        });
    };
