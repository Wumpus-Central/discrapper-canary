n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(87664),
    c = n(287809),
    u = n(427262),
    A = n(198525),
    _ = n(652215),
    h = n(985018),
    m = n(446e3),
    g = n(891408);
let p = function (e) {
    let { quest: t } = e,
        [n, r] = a.useState(!1),
        p = a.useRef(null),
        E = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        I = u.Ay.useName(E),
        f = (0, d.A)(E?.id),
        C = a.useCallback(
            (e) =>
                (0, i.jsx)(A.A, {
                    name: I,
                    quest: t,
                    memberListItemRef: p,
                    applicationStream: f,
                    ...e,
                    closePopout: () => {
                        r(!1);
                    },
                }),
            [t, f, I],
        );
    return (0, i.jsx)("div", {
        className: m.x3,
        children: (0, i.jsxs)("div", {
            className: m.B0,
            children: [
                (0, i.jsx)(o.Heading, {
                    className: g.R_,
                    variant: "heading-md/semibold",
                    children: h.intl.string(h.t.jY7Zxg),
                }),
                (0, i.jsx)("div", { className: g.$Q, children: h.intl.string(h.t.q3hbne) }),
                (0, i.jsx)("div", {
                    className: g.k0,
                    children: (0, i.jsx)(o.YNO, {
                        targetElementRef: p,
                        renderPopout: C,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => r(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: o.YNO.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, i.jsx)("div", {
                                ref: p,
                                className: l()(g.Tn, { [g.wH]: n }),
                                children: (0, i.jsx)(o.DUT, {
                                    onClick: () => r(!n),
                                    tabIndex: 0,
                                    children: (0, i.jsxs)("div", {
                                        className: g.lm,
                                        children: [
                                            (0, i.jsx)(o.euF, {
                                                size: o._3J.SIZE_32,
                                                src: E?.getAvatarURL(void 0, 32),
                                                status: _.clD.ONLINE,
                                                "aria-label": E?.username,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: g.Fj,
                                                children: [
                                                    (0, i.jsx)(o.Text, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: I,
                                                    }),
                                                    (0, i.jsx)(o.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: h.intl.string(h.t.b9w3bO),
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
