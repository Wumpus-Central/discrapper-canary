l.d(t, { Ay: () => N, _T: () => v, oA: () => j });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(397927),
    r = l(927578),
    o = l(487233),
    d = l(230635),
    c = l(473219),
    u = l(542454),
    m = l(338003),
    p = l(642737),
    x = l(23722),
    A = l(985018),
    g = l(266603);
let f = "profile-modal-editing-panel",
    h = "profile-modal-editing-panel-heading";
function j(e) {
    let { onClick: t, className: l, innerRef: i } = e;
    return (0, n.jsx)(a.DUT, {
        innerRef: i,
        "aria-label": A.intl.string(A.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": f,
        className: s()(g.eg, l),
        onClick: t,
        focusProps: { offset: { right: 6 } },
        children: (0, n.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function v(e) {
    let { onClick: t, className: l, buttonRef: i } = e;
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(a.K0, {
            buttonRef: i,
            "aria-label": A.intl.string(A.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": f,
            icon: a.NDp,
            onClick: t,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function I(e) {
    let { onClick: t, innerRef: l } = e;
    return (0, n.jsxs)(a.DUT, {
        innerRef: l,
        className: g.cS,
        "aria-label": A.intl.string(A.t.X6NklS),
        onClick: t,
        "aria-controls": f,
        "aria-expanded": !0,
        children: [
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function N(e) {
    let {
            user: t,
            selectedGuildId: l,
            onSelectGuildId: i,
            isLoading: j = !1,
            onClose: v,
            className: N,
            collapseButtonRef: y,
        } = e,
        C = (0, x.A)(i),
        E = r.Ay.canUsePremiumProfileCustomization(t);
    return (0, n.jsxs)("aside", {
        id: f,
        "aria-labelledby": h,
        className: s()(g.nd, N),
        "aria-busy": j,
        children: [
            (0, n.jsx)(a.AC4, { children: (0, n.jsx)(a.H, { id: h, children: A.intl.string(A.t["L+ch00"]) }) }),
            (0, n.jsxs)("div", {
                className: g.wx,
                children: [
                    (0, n.jsx)(I, { innerRef: y, onClick: v }),
                    (0, n.jsx)(p.A, { selectedGuildId: l ?? null, onChange: C, loading: j }),
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
                                (0, n.jsx)(c.A, { user: t, guildId: l, disabled: j }),
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
                                (0, n.jsx)(o.A, { user: t, guildId: l, disabled: j }),
                                (0, n.jsx)(d.A, { user: t, guildId: l, disabled: j }),
                            ],
                        }),
                        E &&
                            (0, n.jsxs)("div", {
                                className: g.Os,
                                children: [
                                    (0, n.jsx)(a.Heading, {
                                        variant: "text-sm/medium",
                                        className: g.AM,
                                        children: A.intl.string(A.t.Zenogr),
                                    }),
                                    (0, n.jsx)(u.A, { user: t, guildId: l, disabled: j }),
                                ],
                            }),
                    ],
                }),
            }),
            !E && (0, n.jsx)(m.O, {}),
        ],
    });
}
