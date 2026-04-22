s.d(t, { A: () => C });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(311907),
    o = s(534514),
    c = s(265872),
    u = s(939249),
    d = s(97808),
    m = s(778712),
    _ = s(834730),
    h = s(87664),
    x = s(287809),
    f = s(427262),
    b = s(198525),
    p = s(652215),
    A = s(985018),
    g = s(438464),
    E = s(436352);
let C = function (e) {
    let { quest: t } = e,
        [s, a] = l.useState(!1),
        C = l.useRef(null),
        j = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
        v = f.Ay.useName(j),
        N = (0, h.A)(j?.id),
        T = l.useCallback(
            (e) =>
                (0, n.jsx)(b.A, {
                    name: v,
                    quest: t,
                    memberListItemRef: C,
                    applicationStream: N,
                    ...e,
                    closePopout: () => {
                        a(!1);
                    },
                }),
            [t, N, v],
        );
    return (0, n.jsx)("div", {
        className: g.x3,
        children: (0, n.jsxs)("div", {
            className: g.B0,
            children: [
                (0, n.jsx)(o.D, {
                    className: E.R_,
                    variant: "heading-md/semibold",
                    children: A.intl.string(A.t.jY7Zxg),
                }),
                (0, n.jsx)("div", { className: E.$Q, children: A.intl.string(A.t.q3hbne) }),
                (0, n.jsx)("div", {
                    className: E.k0,
                    children: (0, n.jsx)(c.Y, {
                        targetElementRef: C,
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
                                ref: C,
                                className: r()(E.Tn, { [E.wH]: s }),
                                children: (0, n.jsx)(u.D, {
                                    onClick: () => a(!s),
                                    tabIndex: 0,
                                    children: (0, n.jsxs)("div", {
                                        className: E.lm,
                                        children: [
                                            (0, n.jsx)(d.eu, {
                                                size: m._3.SIZE_32,
                                                src: j?.getAvatarURL(void 0, 32),
                                                status: p.clD.ONLINE,
                                                "aria-label": j?.username,
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: E.Fj,
                                                children: [
                                                    (0, n.jsx)(_.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: v,
                                                    }),
                                                    (0, n.jsx)(_.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: A.intl.string(A.t.b9w3bO),
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
