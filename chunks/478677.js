n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(87664),
    c = n(287809),
    u = n(427262),
    A = n(198525),
    h = n(652215),
    _ = n(985018),
    m = n(349661),
    p = n(651099);
let g = function (e) {
    let { quest: t } = e,
        [n, a] = l.useState(!1),
        g = l.useRef(null),
        E = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        I = u.Ay.useName(E),
        f = (0, d.A)(E?.id),
        C = l.useCallback(
            (e) =>
                (0, i.jsx)(A.A, {
                    name: I,
                    quest: t,
                    memberListItemRef: g,
                    applicationStream: f,
                    ...e,
                    closePopout: () => {
                        a(!1);
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
                    className: p.R_,
                    variant: "heading-md/semibold",
                    children: _.intl.string(_.t.jY7Zxg),
                }),
                (0, i.jsx)("div", { className: p.$Q, children: _.intl.string(_.t.q3hbne) }),
                (0, i.jsx)("div", {
                    className: p.k0,
                    children: (0, i.jsx)(o.YNO, {
                        targetElementRef: g,
                        renderPopout: C,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => a(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: o.YNO.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, i.jsx)("div", {
                                ref: g,
                                className: r()(p.Tn, { [p.wH]: n }),
                                children: (0, i.jsx)(o.DUT, {
                                    onClick: () => a(!n),
                                    tabIndex: 0,
                                    children: (0, i.jsxs)("div", {
                                        className: p.lm,
                                        children: [
                                            (0, i.jsx)(o.euF, {
                                                size: o._3J.SIZE_32,
                                                src: E?.getAvatarURL(void 0, 32),
                                                status: h.clD.ONLINE,
                                                "aria-label": E?.username,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: p.Fj,
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
