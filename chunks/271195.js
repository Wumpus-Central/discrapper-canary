"use strict";
n.d(t, { A: () => T, X: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(868285),
    o = n(939249),
    d = n(477155),
    c = n(534514),
    u = n(235986),
    _ = n(282413),
    E = n(763827),
    A = n(6155),
    h = n(919706),
    I = n(375708),
    f = n(429904);
function p(e) {
    let { title: t, onJumpToChannel: n, idle: r, preventIdleComponent: a } = e,
        l = (0, s.bG)([E.A], () => E.A.getChannelId()),
        u = null != l ? (0, i.jsx)(A.A, { voiceChannelId: l, idle: r }) : null;
    return (0, i.jsxs)(a, {
        className: f.Nc,
        children: [
            (0, i.jsxs)(o.D, {
                className: f.qd,
                onClick: n,
                children: [
                    (0, i.jsx)(d.r, {
                        size: "custom",
                        color: "currentColor",
                        "aria-label": I.intl.string(I.t.mSfLs0),
                        className: f.Gv,
                        width: 20,
                        height: 20,
                    }),
                    (0, i.jsx)(c.D, {
                        variant: "heading-md/normal",
                        className: f.TK,
                        color: "text-overlay-light",
                        children: t,
                    }),
                ],
            }),
            u,
        ],
    });
}
function T(e) {
    let {
        children: t,
        idle: n,
        onJumpToChannel: r,
        backgroundKey: s,
        onActive: o,
        onForceIdle: d,
        renderBottomLeftControls: c,
        renderBottomRightControls: E,
        screenMessage: A,
        hideControls: I = !1,
        className: T,
        innerClassName: m,
        videoControlsClassName: g,
        ...S
    } = e;
    return (0, i.jsxs)("div", {
        onMouseMove: o,
        onMouseDown: o,
        onMouseLeave: d,
        className: a()(f.Hu, { [f.N7]: n }, T),
        onDoubleClick: r,
        children: [
            (0, i.jsx)(l.F, { children: (0, i.jsx)(_.o, { className: m, children: t }, s) }),
            null != A ? (0, i.jsx)(h.A, { size: "small", ...A }) : null,
            !I &&
                (0, i.jsxs)("div", {
                    className: a()(f._v, g, "theme-dark"),
                    children: [
                        (0, i.jsx)("div", {
                            className: f.K1,
                            children: (0, i.jsx)(p, { idle: n, onJumpToChannel: r, ...S }),
                        }),
                        (0, i.jsxs)("div", {
                            className: f.q6,
                            children: [
                                (0, i.jsx)(u.A, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: "50%",
                                    align: u.A.Align.CENTER,
                                    className: f.Px,
                                    children: c?.(),
                                }),
                                (0, i.jsx)(u.A, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: u.A.Justify.END,
                                    basis: "50%",
                                    align: u.A.Align.CENTER,
                                    children: E?.(),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
