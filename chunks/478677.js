n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    o = n(397927),
    d = n(87664),
    c = n(287809),
    u = n(427262),
    A = n(198525),
    h = n(652215),
    _ = n(985018),
    m = n(446e3),
    g = n(891408);
let p = function (e) {
    let { quest: t } = e,
        [n, l] = a.useState(!1),
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
                        l(!1);
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
                    children: _.intl.string(_.t.jY7Zxg),
                }),
                (0, i.jsx)("div", { className: g.$Q, children: _.intl.string(_.t.q3hbne) }),
                (0, i.jsx)("div", {
                    className: g.k0,
                    children: (0, i.jsx)(o.YNO, {
                        targetElementRef: p,
                        renderPopout: C,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => l(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: o.YNO.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, i.jsx)("div", {
                                ref: p,
                                className: r()(g.Tn, { [g.wH]: n }),
                                children: (0, i.jsx)(o.DUT, {
                                    onClick: () => l(!n),
                                    tabIndex: 0,
                                    children: (0, i.jsxs)("div", {
                                        className: g.lm,
                                        children: [
                                            (0, i.jsx)(o.euF, {
                                                size: o._3J.SIZE_32,
                                                src: E?.getAvatarURL(void 0, 32),
                                                status: h.clD.ONLINE,
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
                                                        children: _.intl.string(_.t.b9w3bO),
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
