t.d(l, { Ay: () => h, _T: () => g, oA: () => A });
var n = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(397927),
    r = t(487233),
    o = t(230635),
    d = t(473219),
    c = t(642737),
    u = t(985018),
    m = t(266603);
let p = "profile-modal-editing-panel",
    x = "profile-modal-editing-panel-heading";
function A(e) {
    let { onClick: l, className: t, innerRef: i } = e;
    return (0, n.jsx)(a.DUT, {
        innerRef: i,
        "aria-label": u.intl.string(u.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": p,
        className: s()(m.eg, t),
        onClick: l,
        focusProps: { offset: { right: 6 } },
        children: (0, n.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function g(e) {
    let { onClick: l, className: t, buttonRef: i } = e;
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(a.K0, {
            buttonRef: i,
            "aria-label": u.intl.string(u.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": p,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function f(e) {
    let { onClick: l, innerRef: t } = e;
    return (0, n.jsxs)(a.DUT, {
        innerRef: t,
        className: m.cS,
        "aria-label": u.intl.string(u.t.X6NklS),
        onClick: l,
        "aria-controls": p,
        "aria-expanded": !0,
        children: [
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function h(e) {
    let { selectedGuildId: l, onSelectGuildId: t, onClose: i, className: A, collapseButtonRef: g } = e;
    return (0, n.jsxs)("aside", {
        id: p,
        "aria-labelledby": x,
        className: s()(m.nd, A),
        children: [
            (0, n.jsx)(a.AC4, { children: (0, n.jsx)(a.H, { id: x, children: u.intl.string(u.t["L+ch00"]) }) }),
            (0, n.jsxs)("div", {
                className: m.wx,
                children: [
                    (0, n.jsx)(f, { innerRef: g, onClick: i }),
                    (0, n.jsx)(c.A, { selectedGuildId: l ?? null, onChange: t }),
                ],
            }),
            (0, n.jsx)(a.Fmo, {
                children: (0, n.jsxs)(a.HOs, {
                    className: m.XG,
                    fade: !0,
                    children: [
                        (0, n.jsxs)("div", {
                            className: m.Os,
                            children: [
                                (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: m.AM,
                                    children: u.intl.string(u.t.x5CoXR),
                                }),
                                (0, n.jsx)(d.W, { guildId: l }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: m.Os,
                            children: [
                                (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: m.AM,
                                    children: u.intl.string(u.t.lqaIxI),
                                }),
                                (0, n.jsx)(r.m, { guildId: l }),
                                (0, n.jsx)(o.W, { guildId: l }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
