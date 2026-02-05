"use strict";
n.d(t, { A: () => A, X: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(73939),
    l = n(397927),
    u = n(235986),
    c = n(805466),
    d = n(282413),
    _ = n(383501),
    f = n(6155),
    p = n(919706),
    h = n(598565),
    m = n(985018),
    g = n(319567);
function E(e) {
    let { title: t, onJumpToChannel: n, onHide: i, idle: a, preventIdleComponent: o } = e,
        u = (0, s.bG)([_.A], () => _.A.getChannelId()),
        d = null != u ? (0, r.jsx)(f.A, { voiceChannelId: u, idle: a }) : null,
        { enabled: p } = c.A.useExperiment({ location: "PictureInPicturePlayer" });
    return (0, r.jsxs)(o, {
        className: g.Nc,
        children: [
            (0, r.jsxs)(l.DUT, {
                className: g.qd,
                onClick: n,
                children: [
                    (0, r.jsx)(l.rJJ, {
                        size: "custom",
                        color: "currentColor",
                        "aria-label": m.intl.string(m.t.mSfLs0),
                        className: g.Gv,
                        width: 20,
                        height: 20,
                    }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/normal",
                        className: g.TK,
                        color: "always-white",
                        children: t,
                    }),
                ],
            }),
            p && null != i ? (0, r.jsx)(h.A, { onClick: i, label: m.intl.string(m.t.BEuDEn) }) : null,
            d,
        ],
    });
}
function A(e) {
    let {
        children: t,
        idle: n,
        onJumpToChannel: i,
        onHide: s,
        backgroundKey: l,
        onActive: c,
        onForceIdle: _,
        renderBottomLeftControls: f,
        renderBottomRightControls: h,
        screenMessage: m,
        hideControls: A = !1,
        className: I,
        innerClassName: T,
        videoControlsClassName: y,
        ...S
    } = e;
    return (0, r.jsxs)("div", {
        onMouseMove: c,
        onMouseDown: c,
        onMouseLeave: _,
        className: a()(g.Hu, { [g.N7]: n }, I),
        onDoubleClick: i,
        children: [
            (0, r.jsx)(o.F, { children: (0, r.jsx)(d.o, { className: T, children: t }, l) }),
            null != m ? (0, r.jsx)(p.A, { size: "small", ...m }) : null,
            !A &&
                (0, r.jsxs)("div", {
                    className: a()(g._v, y, "theme-dark"),
                    children: [
                        (0, r.jsx)("div", {
                            className: g.K1,
                            children: (0, r.jsx)(E, { idle: n, onJumpToChannel: i, onHide: s, ...S }),
                        }),
                        (0, r.jsxs)("div", {
                            className: g.q6,
                            children: [
                                (0, r.jsx)(u.A, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: "50%",
                                    align: u.A.Align.CENTER,
                                    className: g.Px,
                                    children: f?.(),
                                }),
                                (0, r.jsx)(u.A, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: u.A.Justify.END,
                                    basis: "50%",
                                    align: u.A.Align.CENTER,
                                    children: h?.(),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
