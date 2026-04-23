"use strict";
n.d(t, { A: () => A, X: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(73939),
    l = n(939249),
    u = n(477155),
    d = n(534514),
    c = n(235986),
    _ = n(282413),
    f = n(383501),
    E = n(6155),
    h = n(919706),
    p = n(985018),
    m = n(27600);
function g(e) {
    let { title: t, onJumpToChannel: n, idle: i, preventIdleComponent: s } = e,
        o = (0, a.bG)([f.A], () => f.A.getChannelId()),
        c = null != o ? (0, r.jsx)(E.A, { voiceChannelId: o, idle: i }) : null;
    return (0, r.jsxs)(s, {
        className: m.Nc,
        children: [
            (0, r.jsxs)(l.D, {
                className: m.qd,
                onClick: n,
                children: [
                    (0, r.jsx)(u.r, {
                        size: "custom",
                        color: "currentColor",
                        "aria-label": p.intl.string(p.t.mSfLs0),
                        className: m.Gv,
                        width: 20,
                        height: 20,
                    }),
                    (0, r.jsx)(d.D, {
                        variant: "heading-md/normal",
                        className: m.TK,
                        color: "always-white",
                        children: t,
                    }),
                ],
            }),
            c,
        ],
    });
}
function A(e) {
    let {
        children: t,
        idle: n,
        onJumpToChannel: i,
        backgroundKey: a,
        onActive: l,
        onForceIdle: u,
        renderBottomLeftControls: d,
        renderBottomRightControls: f,
        screenMessage: E,
        hideControls: p = !1,
        className: A,
        innerClassName: I,
        videoControlsClassName: T,
        ...S
    } = e;
    return (0, r.jsxs)("div", {
        onMouseMove: l,
        onMouseDown: l,
        onMouseLeave: u,
        className: s()(m.Hu, { [m.N7]: n }, A),
        onDoubleClick: i,
        children: [
            (0, r.jsx)(o.F, { children: (0, r.jsx)(_.o, { className: I, children: t }, a) }),
            null != E ? (0, r.jsx)(h.A, { size: "small", ...E }) : null,
            !p &&
                (0, r.jsxs)("div", {
                    className: s()(m._v, T, "theme-dark"),
                    children: [
                        (0, r.jsx)("div", {
                            className: m.K1,
                            children: (0, r.jsx)(g, { idle: n, onJumpToChannel: i, ...S }),
                        }),
                        (0, r.jsxs)("div", {
                            className: m.q6,
                            children: [
                                (0, r.jsx)(c.A, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: "50%",
                                    align: c.A.Align.CENTER,
                                    className: m.Px,
                                    children: d?.(),
                                }),
                                (0, r.jsx)(c.A, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: c.A.Justify.END,
                                    basis: "50%",
                                    align: c.A.Align.CENTER,
                                    children: f?.(),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
