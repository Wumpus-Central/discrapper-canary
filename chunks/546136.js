l.d(n, { Ay: () => y, _T: () => I, oA: () => j });
var i = l(627968);
l(64700);
var t = l(503698),
    s = l.n(t),
    a = l(397927),
    r = l(927578),
    o = l(487233),
    d = l(230635),
    c = l(336289),
    u = l(473219),
    m = l(542454),
    p = l(338003),
    x = l(642737),
    A = l(23722),
    g = l(985018),
    f = l(266603);
let h = "profile-modal-editing-panel",
    v = "profile-modal-editing-panel-heading";
function j(e) {
    let { onClick: n, className: l, innerRef: t } = e;
    return (0, i.jsx)(a.DUT, {
        innerRef: t,
        "aria-label": g.intl.string(g.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": h,
        className: s()(f.eg, l),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, i.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function I(e) {
    let { onClick: n, className: l, buttonRef: t } = e;
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(a.K0, {
            buttonRef: t,
            "aria-label": g.intl.string(g.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": h,
            icon: a.NDp,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function N(e) {
    let { onClick: n, innerRef: l } = e;
    return (0, i.jsxs)(a.DUT, {
        innerRef: l,
        className: f.cS,
        "aria-label": g.intl.string(g.t.X6NklS),
        onClick: n,
        "aria-controls": h,
        "aria-expanded": !0,
        children: [
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function y(e) {
    let {
            user: n,
            selectedGuildId: l,
            onSelectGuildId: t,
            isLoading: j = !1,
            onClose: I,
            className: y,
            collapseButtonRef: C,
        } = e,
        b = (0, A.A)(t),
        E = null != l,
        T = r.Ay.canUsePremiumProfileCustomization(n);
    return (0, i.jsxs)("aside", {
        id: h,
        "aria-labelledby": v,
        className: s()(f.nd, y),
        "aria-busy": j,
        children: [
            (0, i.jsx)(a.AC4, { children: (0, i.jsx)(a.H, { id: v, children: g.intl.string(g.t["L+ch00"]) }) }),
            (0, i.jsxs)("div", {
                className: f.wx,
                children: [
                    (0, i.jsx)(N, { innerRef: C, onClick: I }),
                    (0, i.jsx)(x.A, { selectedGuildId: l ?? null, onChange: b, loading: j }),
                ],
            }),
            (0, i.jsx)(a.Fmo, {
                children: (0, i.jsxs)(a.HOs, {
                    className: f.XG,
                    fade: !0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: f.Os,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: f.AM,
                                    children: g.intl.string(g.t.x5CoXR),
                                }),
                                (0, i.jsx)(u.A, { user: n, guildId: l, disabled: j || (E && !T) }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: f.Os,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: f.AM,
                                    children: g.intl.string(g.t["50Nwpc"]),
                                }),
                                (0, i.jsx)(o.A, { user: n, guildId: l, disabled: j || (E && !T) }),
                                (0, i.jsx)(d.A, { user: n, guildId: l, disabled: j || (E && !T) }),
                            ],
                        }),
                        T &&
                            (0, i.jsxs)("div", {
                                className: f.Os,
                                children: [
                                    (0, i.jsx)(a.Heading, {
                                        variant: "text-sm/medium",
                                        className: f.AM,
                                        children: g.intl.string(g.t.Zenogr),
                                    }),
                                    (0, i.jsx)(m.A, { user: n, guildId: l, disabled: j }),
                                    (0, i.jsx)(c.A, { userId: n.id, guildId: l, disabled: j }),
                                ],
                            }),
                    ],
                }),
            }),
            !T && (0, i.jsx)(p.O, {}),
        ],
    });
}
