"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(687498),
    l = n(158954),
    u = n(599891),
    c = n(631899),
    d = n(144121),
    _ = n(21086),
    f = n(346640),
    p = n(75772),
    h = n(985018),
    m = n(365341),
    E = n(983266),
    g = n(448323);
function A(e) {
    let { gridItem: t, onClick: n, isMatched: i } = e,
        s = (0, l.zhh)({ transform: t.flipped || i ? "rotateY(180deg)" : "rotateY(0deg)" }),
        c = (0, l.zhh)({ transform: t.flipped || i ? "rotateY(0deg)" : "rotateY(180deg)" });
    return (0, r.jsxs)(l.DUT, {
        onClick: n,
        className: a()(m.ux, { [m.jQ]: i }),
        children: [
            (0, r.jsx)(o.animated.img, { style: s, src: g.A, alt: "", className: m.qe }),
            (0, r.jsx)(o.animated.div, {
                style: c,
                className: m.si,
                children: (0, r.jsx)(u.Ay, { glyph: t.glyph, className: m.fC }),
            }),
        ],
    });
}
function I(e) {
    let { setScreen: t } = e,
        { onSuccess: n, rewards: s } = (0, _.A)(f.$p.COMBAT, t),
        { grid: a, matchesFound: o, onClick: l } = (0, d.A)(n),
        u = (0, i.useRef)(null);
    return (0, r.jsx)(c.A, {
        score: `${o.length}/3`,
        activityDescription: h.intl.string(p.default["+gmjbS"]),
        rewards: s,
        rewardTitle: h.intl.string(p.default.lNLsa8),
        background: (0, r.jsx)("img", { ref: u, src: E.A, alt: "", className: m.m9 }),
        setScreen: t,
        children: (0, r.jsx)("div", {
            className: m.Vg,
            children: a.map((e, t) =>
                (0, r.jsx)(
                    "div",
                    {
                        className: m.lJ,
                        children: e.map((e, n) =>
                            (0, r.jsx)(
                                A,
                                { gridItem: e, onClick: () => l(t, n), isMatched: o.some((t) => t === e.glyph) },
                                `grid-item-${n}`,
                            ),
                        ),
                    },
                    `grid-row-${t}`,
                ),
            ),
        }),
    });
}
