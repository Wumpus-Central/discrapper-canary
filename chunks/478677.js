s.d(t, { A: () => b });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(311907),
    o = s(534514),
    c = s(265872),
    u = s(939249),
    d = s(97808),
    _ = s(778712),
    m = s(834730),
    h = s(87664),
    x = s(287809),
    f = s(427262),
    E = s(198525),
    p = s(652215),
    g = s(985018),
    A = s(332544),
    C = s(66176);
let b = function (e) {
    let { quest: t } = e,
        [s, a] = l.useState(!1),
        b = l.useRef(null),
        j = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
        v = f.Ay.useName(j),
        N = (0, h.A)(j?.id),
        T = l.useCallback(
            (e) =>
                (0, n.jsx)(E.A, {
                    name: v,
                    quest: t,
                    memberListItemRef: b,
                    applicationStream: N,
                    ...e,
                    closePopout: () => {
                        a(!1);
                    },
                }),
            [t, N, v],
        );
    return (0, n.jsx)("div", {
        className: A.x3,
        children: (0, n.jsxs)("div", {
            className: A.B0,
            children: [
                (0, n.jsx)(o.D, {
                    className: C.R_,
                    variant: "heading-md/semibold",
                    children: g.intl.string(g.t.jY7Zxg),
                }),
                (0, n.jsx)("div", { className: C.$Q, children: g.intl.string(g.t.q3hbne) }),
                (0, n.jsx)("div", {
                    className: C.k0,
                    children: (0, n.jsx)(c.Y, {
                        targetElementRef: b,
                        renderPopout: T,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => a(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: c.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, n.jsx)("div", {
                                ref: b,
                                className: r()(C.Tn, { [C.wH]: s }),
                                children: (0, n.jsx)(u.D, {
                                    onClick: () => a(!s),
                                    tabIndex: 0,
                                    children: (0, n.jsxs)("div", {
                                        className: C.lm,
                                        children: [
                                            (0, n.jsx)(d.eu, {
                                                size: _._3.SIZE_32,
                                                src: j?.getAvatarURL(void 0, 32),
                                                status: p.clD.ONLINE,
                                                "aria-label": j?.username,
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: C.Fj,
                                                children: [
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: v,
                                                    }),
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: g.intl.string(g.t.b9w3bO),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                    }),
                }),
            ],
        }),
    });
};
