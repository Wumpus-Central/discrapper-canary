"use strict";
n.d(t, { A: () => P }), n(667532);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(40153),
    c = n(837381),
    d = n(838677),
    _ = n(319060),
    f = n(397927),
    h = n(554375),
    p = n(82495),
    g = n(260762),
    E = n(915089),
    A = n(7584),
    I = n(690521),
    T = n(240248),
    y = n(650583),
    S = n(985018),
    v = n(580103);
let C = 20,
    b = 125,
    N = (0, E.Ld)(),
    R = d.A.convert.fromCodePoint("1f44f"),
    O = 7,
    D = (0, T.xI)(_.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function L(e) {
    switch (d.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return S.intl.string(S.t["BVK5b/"]);
        case "1f3fc":
            return S.intl.string(S.t.xJWOK8);
        case "1f3fd":
            return S.intl.string(S.t["MB+T5g"]);
        case "1f3fe":
            return S.intl.string(S.t.MODud2);
        case "1f3ff":
            return S.intl.string(S.t["0uzqsc"]);
        default:
            return S.intl.string(S.t.bGN1ow);
    }
}
let w = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: a, index: s } = e,
            o = (0, c.rm)(`item-${s}`),
            l = I.Ay.getURL(R + n),
            d = (0, f.zhh)({ opacity: 1, from: { opacity: +!t }, delay: a }, "animate-always");
        return (0, r.jsx)(f.DUT, {
            ...o,
            role: "option",
            "aria-selected": 0 === s,
            onClick: () => i(n),
            className: v.B6,
            children: (0, r.jsx)(u.animated.div, {
                "aria-label": L(n),
                className: v.g4,
                style: { backgroundImage: `url("${l}")`, ...d },
            }),
        });
    },
    x = (e) => {
        let { id: t, selectedSurrogate: n, onClick: a } = e,
            s = (0, g.A)("diversity"),
            o = (0, f.zhh)({
                height: (D + 2 * O) * (A.W$.length + 1),
                from: { height: D + 2 * O },
                config: { duration: b },
            });
        i.useEffect(() => {
            s.focusFirstVisibleItem();
        }, [s]);
        let d = ["", ...A.W$];
        return (
            l().remove(d, (e) => e === n),
            d.unshift(n),
            (0, r.jsx)(c.hD, {
                navigator: s,
                children: (0, r.jsx)(c.PR, {
                    children: (e) => {
                        let { ref: n, ...i } = e;
                        return (0, r.jsx)(u.animated.div, {
                            ...i,
                            id: t,
                            ref: n,
                            className: v.J6,
                            style: o,
                            role: "listbox",
                            children: d.map((e, t) =>
                                (0, r.jsx)(w, { index: t, fade: 0 !== t, delay: t * C, surrogate: e, onClick: a }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    P = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: a } = e,
            o = I.Ay.getURL(R + n),
            [l, u] = i.useState(!1),
            c = (0, p.A)(null, () => u(!1)),
            d = i.useRef(null),
            _ = () => {
                u(!0);
            },
            g = (e) => {
                e.key === y.dh.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus());
            },
            E = (e) => {
                (0, h.dK)(e), u(!1), t.current?.focus();
            };
        return (0, r.jsxs)("div", {
            ref: c,
            className: s()(v.fx, a),
            children: [
                (0, r.jsx)(f.DUT, {
                    innerRef: d,
                    className: v.Dj,
                    onClick: _,
                    "aria-label": S.intl.string(S.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": l,
                    "aria-controls": N,
                    tabIndex: l ? -1 : 0,
                    children: (0, r.jsx)("div", { className: v.g4, style: { backgroundImage: `url("${o}")` } }),
                }),
                l
                    ? (0, r.jsx)("div", {
                          onKeyDown: g,
                          children: (0, r.jsx)(x, { id: N, selectedSurrogate: n, onClick: E }),
                      })
                    : null,
            ],
        });
    };
