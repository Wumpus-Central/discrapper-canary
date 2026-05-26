"use strict";
n.d(t, { A: () => A, X: () => g });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(868285),
    l = n(939249),
    u = n(477155),
    c = n(534514),
    d = n(235986),
    _ = n(282413),
    f = n(763827),
    h = n(6155),
    p = n(919706),
    E = n(375708),
    m = n(27600);
function g(e) {
    let { title: t, onJumpToChannel: n, idle: r, preventIdleComponent: s } = e,
        o = (0, a.bG)([f.A], () => f.A.getChannelId()),
        d = null != o ? (0, i.jsx)(h.A, { voiceChannelId: o, idle: r }) : null;
    return (0, i.jsxs)(s, {
        className: m.Nc,
        children: [
            (0, i.jsxs)(l.D, {
                className: m.qd,
                onClick: n,
                children: [
                    (0, i.jsx)(u.r, {
                        size: "custom",
                        color: "currentColor",
                        "aria-label": E.intl.string(E.t.mSfLs0),
                        className: m.Gv,
                        width: 20,
                        height: 20,
                    }),
                    (0, i.jsx)(c.D, {
                        variant: "heading-md/normal",
                        className: m.TK,
                        color: "always-white",
                        children: t,
                    }),
                ],
            }),
            d,
        ],
    });
}
function A(e) {
    let {
        children: t,
        idle: n,
        onJumpToChannel: r,
        backgroundKey: a,
        onActive: l,
        onForceIdle: u,
        renderBottomLeftControls: c,
        renderBottomRightControls: f,
        screenMessage: h,
        hideControls: E = !1,
        className: A,
        innerClassName: I,
        videoControlsClassName: T,
        ...S
    } = e;
    return (0, i.jsxs)("div", {
        onMouseMove: l,
        onMouseDown: l,
        onMouseLeave: u,
        className: s()(m.Hu, { [m.N7]: n }, A),
        onDoubleClick: r,
        children: [
            (0, i.jsx)(o.F, { children: (0, i.jsx)(_.o, { className: I, children: t }, a) }),
            null != h ? (0, i.jsx)(p.A, { size: "small", ...h }) : null,
            !E &&
                (0, i.jsxs)("div", {
                    className: s()(m._v, T, "theme-dark"),
                    children: [
                        (0, i.jsx)("div", {
                            className: m.K1,
                            children: (0, i.jsx)(g, { idle: n, onJumpToChannel: r, ...S }),
                        }),
                        (0, i.jsxs)("div", {
                            className: m.q6,
                            children: [
                                (0, i.jsx)(d.A, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: "50%",
                                    align: d.A.Align.CENTER,
                                    className: m.Px,
                                    children: c?.(),
                                }),
                                (0, i.jsx)(d.A, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: d.A.Justify.END,
                                    basis: "50%",
                                    align: d.A.Align.CENTER,
                                    children: f?.(),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
