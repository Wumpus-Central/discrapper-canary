"use strict";
n.d(t, { A: () => E, X: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(73939),
    l = n(397927),
    u = n(235986),
    c = n(282413),
    d = n(383501),
    _ = n(6155),
    f = n(919706),
    p = n(985018),
    h = n(27600);
function m(e) {
    let { title: t, onJumpToChannel: n, idle: i, preventIdleComponent: s } = e,
        o = (0, a.bG)([d.A], () => d.A.getChannelId()),
        u = null != o ? (0, r.jsx)(_.A, { voiceChannelId: o, idle: i }) : null;
    return (0, r.jsxs)(s, {
        className: h.Nc,
        children: [
            (0, r.jsxs)(l.DUT, {
                className: h.qd,
                onClick: n,
                children: [
                    (0, r.jsx)(l.rJJ, {
                        size: "custom",
                        color: "currentColor",
                        "aria-label": p.intl.string(p.t.mSfLs0),
                        className: h.Gv,
                        width: 20,
                        height: 20,
                    }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/normal",
                        className: h.TK,
                        color: "always-white",
                        children: t,
                    }),
                ],
            }),
            u,
        ],
    });
}
function E(e) {
    let {
        children: t,
        idle: n,
        onJumpToChannel: i,
        backgroundKey: a,
        onActive: l,
        onForceIdle: d,
        renderBottomLeftControls: _,
        renderBottomRightControls: p,
        screenMessage: E,
        hideControls: g = !1,
        className: A,
        innerClassName: I,
        videoControlsClassName: T,
        ...S
    } = e;
    return (0, r.jsxs)("div", {
        onMouseMove: l,
        onMouseDown: l,
        onMouseLeave: d,
        className: s()(h.Hu, { [h.N7]: n }, A),
        onDoubleClick: i,
        children: [
            (0, r.jsx)(o.F, { children: (0, r.jsx)(c.o, { className: I, children: t }, a) }),
            null != E ? (0, r.jsx)(f.A, { size: "small", ...E }) : null,
            !g &&
                (0, r.jsxs)("div", {
                    className: s()(h._v, T, "theme-dark"),
                    children: [
                        (0, r.jsx)("div", {
                            className: h.K1,
                            children: (0, r.jsx)(m, { idle: n, onJumpToChannel: i, ...S }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h.q6,
                            children: [
                                (0, r.jsx)(u.A, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: "50%",
                                    align: u.A.Align.CENTER,
                                    className: h.Px,
                                    children: _?.(),
                                }),
                                (0, r.jsx)(u.A, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: u.A.Justify.END,
                                    basis: "50%",
                                    align: u.A.Align.CENTER,
                                    children: p?.(),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
