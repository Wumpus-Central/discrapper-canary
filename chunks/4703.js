"use strict";
n.d(t, { A: () => M }), n(667532);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(382222),
    c = n(837381),
    d = n(838677),
    _ = n(319060),
    f = n(397927),
    p = n(554375),
    h = n(82495),
    m = n(260762),
    E = n(915089),
    g = n(7584),
    A = n(690521),
    I = n(240248),
    T = n(650583),
    S = n(985018),
    y = n(987378);
let v = 20,
    N = 125,
    C = (0, E.Ld)(),
    R = d.A.convert.fromCodePoint("1f44f"),
    O = 7,
    b = (0, I.xI)(_.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function D(e) {
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
let L = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: s, index: a } = e,
            o = (0, c.rm)(`item-${a}`),
            l = A.Ay.getURL(R + n),
            d = (0, f.zhh)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
        return (0, r.jsx)(f.DUT, {
            ...o,
            role: "option",
            "aria-selected": 0 === a,
            onClick: () => i(n),
            className: y.B6,
            children: (0, r.jsx)(u.animated.div, {
                "aria-label": D(n),
                className: y.g4,
                style: { backgroundImage: `url("${l}")`, ...d },
            }),
        });
    },
    w = (e) => {
        let { id: t, selectedSurrogate: n, onClick: s } = e,
            a = (0, m.A)("diversity"),
            o = (0, f.zhh)({
                height: (b + 2 * O) * (g.W$.length + 1),
                from: { height: b + 2 * O },
                config: { duration: N },
            });
        i.useEffect(() => {
            a.focusFirstVisibleItem();
        }, [a]);
        let d = ["", ...g.W$];
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
                            className: y.J6,
                            style: o,
                            role: "listbox",
                            children: d.map((e, t) =>
                                (0, r.jsx)(L, { index: t, fade: 0 !== t, delay: t * v, surrogate: e, onClick: s }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    M = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: s } = e,
            o = A.Ay.getURL(R + n),
            [l, u] = i.useState(!1),
            c = (0, h.A)(null, () => u(!1)),
            d = i.useRef(null),
            _ = () => {
                u(!0);
            },
            m = (e) => {
                e.key === T.dh.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus());
            },
            E = (e) => {
                (0, p.dK)(e), u(!1), t.current?.focus();
            };
        return (0, r.jsxs)("div", {
            ref: c,
            className: a()(y.fx, s),
            children: [
                (0, r.jsx)(f.DUT, {
                    innerRef: d,
                    className: y.Dj,
                    onClick: _,
                    "aria-label": S.intl.string(S.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": l,
                    "aria-controls": C,
                    tabIndex: l ? -1 : 0,
                    children: (0, r.jsx)("div", { className: y.g4, style: { backgroundImage: `url("${o}")` } }),
                }),
                l
                    ? (0, r.jsx)("div", {
                          onKeyDown: m,
                          children: (0, r.jsx)(w, { id: C, selectedSurrogate: n, onClick: E }),
                      })
                    : null,
            ],
        });
    };
