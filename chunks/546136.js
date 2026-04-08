t.d(l, { Ay: () => I, _T: () => h, oA: () => f });
var n = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(397927),
    r = t(927578),
    o = t(487233),
    d = t(230635),
    c = t(473219),
    u = t(338003),
    m = t(642737),
    x = t(985018),
    p = t(475276);
let A = "profile-modal-editing-panel",
    g = "profile-modal-editing-panel-heading";
function f(e) {
    let { onClick: l, className: t, innerRef: i } = e;
    return (0, n.jsx)(a.DUT, {
        innerRef: i,
        "aria-label": x.intl.string(x.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": A,
        className: s()(p.eg, t),
        onClick: l,
        focusProps: { offset: { right: 6 } },
        children: (0, n.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function h(e) {
    let { onClick: l, className: t, buttonRef: i } = e;
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(a.K0, {
            buttonRef: i,
            "aria-label": x.intl.string(x.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": A,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function j(e) {
    let { onClick: l, innerRef: t } = e;
    return (0, n.jsxs)(a.DUT, {
        innerRef: t,
        className: p.cS,
        "aria-label": x.intl.string(x.t.X6NklS),
        onClick: l,
        "aria-controls": A,
        "aria-expanded": !0,
        children: [
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function I(e) {
    let { user: l, selectedGuildId: t, onSelectGuildId: i, onClose: f, className: h, collapseButtonRef: I } = e,
        v = r.Ay.canUsePremiumProfileCustomization(l);
    return (0, n.jsxs)("aside", {
        id: A,
        "aria-labelledby": g,
        className: s()(p.nd, h),
        children: [
            (0, n.jsx)(a.AC4, { children: (0, n.jsx)(a.H, { id: g, children: x.intl.string(x.t["L+ch00"]) }) }),
            (0, n.jsxs)("div", {
                className: p.wx,
                children: [
                    (0, n.jsx)(j, { innerRef: I, onClick: f }),
                    (0, n.jsx)(m.A, { selectedGuildId: t ?? null, onChange: i }),
                ],
            }),
            (0, n.jsx)(a.Fmo, {
                children: (0, n.jsxs)(a.HOs, {
                    className: p.XG,
                    fade: !0,
                    children: [
                        (0, n.jsxs)("div", {
                            className: p.Os,
                            children: [
                                (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: p.AM,
                                    children: x.intl.string(x.t.x5CoXR),
                                }),
                                (0, n.jsx)(c.W, { guildId: t }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: p.Os,
                            children: [
                                (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: p.AM,
                                    children: x.intl.string(x.t.lqaIxI),
                                }),
                                (0, n.jsx)(o.m, { guildId: t }),
                                (0, n.jsx)(d.W, { guildId: t }),
                            ],
                        }),
                    ],
                }),
            }),
            !v && (0, n.jsx)(u.O, {}),
        ],
    });
}
