"use strict";
n.d(t, { A: () => x }), n(667532);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(92674),
    c = n(837381),
    d = n(838677),
    _ = n(319060),
    f = n(397927),
    p = n(554375),
    h = n(82495),
    m = n(260762),
    g = n(915089),
    E = n(7584),
    A = n(690521),
    I = n(240248),
    T = n(650583),
    y = n(985018),
    S = n(580103);
let v = 20,
    C = 125,
    b = (0, g.Ld)(),
    N = d.A.convert.fromCodePoint("1f44f"),
    R = (0, I.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    O = (0, I.xI)(_.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function D(e) {
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
let L = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: a, index: s } = e,
            o = (0, c.rm)(`item-${s}`),
            l = A.Ay.getURL(N + n),
            d = (0, f.zhh)({ opacity: 1, from: { opacity: +!t }, delay: a }, "animate-always");
        return (0, r.jsx)(f.DUT, {
            ...o,
            role: "option",
            "aria-selected": 0 === s,
            onClick: () => i(n),
            className: S.B6,
            children: (0, r.jsx)(u.animated.div, {
                "aria-label": D(n),
                className: S.g4,
                style: { backgroundImage: `url("${l}")`, ...d },
            }),
        });
    },
    w = (e) => {
        let { id: t, selectedSurrogate: n, onClick: a } = e,
            s = (0, m.A)("diversity"),
            o = (0, f.zhh)({ height: (O + 2 * R) * (E.W$.length + 1), from: { height: O }, config: { duration: C } });
        i.useEffect(() => {
            s.focusFirstVisibleItem();
        }, [s]);
        let d = ["", ...E.W$];
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
                            className: S.J6,
                            style: o,
                            role: "listbox",
                            children: d.map((e, t) =>
                                (0, r.jsx)(L, { index: t, fade: 0 !== t, delay: t * v, surrogate: e, onClick: a }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    x = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: a } = e,
            o = A.Ay.getURL(N + n),
            [l, u] = i.useState(!1),
            c = (0, h.A)(null, () => u(!1)),
            d = i.useRef(null),
            _ = () => {
                u(!0);
            },
            m = (e) => {
                e.key === T.dh.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus());
            },
            g = (e) => {
                (0, p.dK)(e), u(!1), t.current?.focus();
            };
        return (0, r.jsxs)("div", {
            ref: c,
            className: s()(S.fx, a),
            children: [
                (0, r.jsx)(f.DUT, {
                    innerRef: d,
                    className: S.Dj,
                    onClick: _,
                    "aria-label": y.intl.string(y.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": l,
                    "aria-controls": b,
                    tabIndex: l ? -1 : 0,
                    children: (0, r.jsx)("div", { className: S.g4, style: { backgroundImage: `url("${o}")` } }),
                }),
                l
                    ? (0, r.jsx)("div", {
                          onKeyDown: m,
                          children: (0, r.jsx)(w, { id: b, selectedSurrogate: n, onClick: g }),
                      })
                    : null,
            ],
        });
    };
