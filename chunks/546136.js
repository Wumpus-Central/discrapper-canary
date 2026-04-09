t.d(l, { Ay: () => N, _T: () => v, oA: () => j });
var n = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(397927),
    r = t(927578),
    o = t(487233),
    d = t(230635),
    c = t(473219),
    u = t(542454),
    m = t(338003),
    x = t(642737),
    p = t(23722),
    A = t(985018),
    g = t(266603);
let f = "profile-modal-editing-panel",
    h = "profile-modal-editing-panel-heading";
function j(e) {
    let { onClick: l, className: t, innerRef: i } = e;
    return (0, n.jsx)(a.DUT, {
        innerRef: i,
        "aria-label": A.intl.string(A.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": f,
        className: s()(g.eg, t),
        onClick: l,
        focusProps: { offset: { right: 6 } },
        children: (0, n.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function v(e) {
    let { onClick: l, className: t, buttonRef: i } = e;
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(a.K0, {
            buttonRef: i,
            "aria-label": A.intl.string(A.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": f,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function I(e) {
    let { onClick: l, innerRef: t } = e;
    return (0, n.jsxs)(a.DUT, {
        innerRef: t,
        className: g.cS,
        "aria-label": A.intl.string(A.t.X6NklS),
        onClick: l,
        "aria-controls": f,
        "aria-expanded": !0,
        children: [
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function N(e) {
    let { user: l, selectedGuildId: t, onSelectGuildId: i, onClose: j, className: v, collapseButtonRef: N } = e,
        y = (0, p.A)(i),
        C = r.Ay.canUsePremiumProfileCustomization(l);
    return (0, n.jsxs)("aside", {
        id: f,
        "aria-labelledby": h,
        className: s()(g.nd, v),
        children: [
            (0, n.jsx)(a.AC4, { children: (0, n.jsx)(a.H, { id: h, children: A.intl.string(A.t["L+ch00"]) }) }),
            (0, n.jsxs)("div", {
                className: g.wx,
                children: [
                    (0, n.jsx)(I, { innerRef: N, onClick: j }),
                    (0, n.jsx)(x.A, { selectedGuildId: t ?? null, onChange: y }),
                ],
            }),
            (0, n.jsx)(a.Fmo, {
                children: (0, n.jsxs)(a.HOs, {
                    className: g.XG,
                    fade: !0,
                    children: [
                        (0, n.jsxs)("div", {
                            className: g.Os,
                            children: [
                                (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: g.AM,
                                    children: A.intl.string(A.t.x5CoXR),
                                }),
                                (0, n.jsx)(c.W, { guildId: t }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: g.Os,
                            children: [
                                (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: g.AM,
                                    children: A.intl.string(A.t["50Nwpc"]),
                                }),
                                (0, n.jsx)(o.m, { guildId: t }),
                                (0, n.jsx)(d.W, { guildId: t }),
                            ],
                        }),
                        C &&
                            (0, n.jsxs)("div", {
                                className: g.Os,
                                children: [
                                    (0, n.jsx)(a.Heading, {
                                        variant: "text-sm/medium",
                                        className: g.AM,
                                        children: A.intl.string(A.t.Zenogr),
                                    }),
                                    (0, n.jsx)(u.A, { user: l, guildId: t }),
                                ],
                            }),
                    ],
                }),
            }),
            !C && (0, n.jsx)(m.O, {}),
        ],
    });
}
