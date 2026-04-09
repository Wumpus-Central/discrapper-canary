n.d(l, { Ay: () => I, _T: () => j, oA: () => h });
var t = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    r = n(927578),
    o = n(487233),
    d = n(230635),
    c = n(473219),
    u = n(542454),
    m = n(338003),
    x = n(642737),
    p = n(985018),
    A = n(475276);
let g = "profile-modal-editing-panel",
    f = "profile-modal-editing-panel-heading";
function h(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(a.DUT, {
        innerRef: i,
        "aria-label": p.intl.string(p.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": g,
        className: s()(A.eg, n),
        onClick: l,
        focusProps: { offset: { right: 6 } },
        children: (0, t.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function j(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(a.K0, {
            buttonRef: i,
            "aria-label": p.intl.string(p.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": g,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function v(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsxs)(a.DUT, {
        innerRef: n,
        className: A.cS,
        "aria-label": p.intl.string(p.t.X6NklS),
        onClick: l,
        "aria-controls": g,
        "aria-expanded": !0,
        children: [
            (0, t.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, t.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function I(e) {
    let { user: l, selectedGuildId: n, onSelectGuildId: i, onClose: h, className: j, collapseButtonRef: I } = e,
        N = r.Ay.canUsePremiumProfileCustomization(l);
    return (0, t.jsxs)("aside", {
        id: g,
        "aria-labelledby": f,
        className: s()(A.nd, j),
        children: [
            (0, t.jsx)(a.AC4, { children: (0, t.jsx)(a.H, { id: f, children: p.intl.string(p.t["L+ch00"]) }) }),
            (0, t.jsxs)("div", {
                className: A.wx,
                children: [
                    (0, t.jsx)(v, { innerRef: I, onClick: h }),
                    (0, t.jsx)(x.A, { selectedGuildId: n ?? null, onChange: i }),
                ],
            }),
            (0, t.jsx)(a.Fmo, {
                children: (0, t.jsxs)(a.HOs, {
                    className: A.XG,
                    fade: !0,
                    children: [
                        (0, t.jsxs)("div", {
                            className: A.Os,
                            children: [
                                (0, t.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: A.AM,
                                    children: p.intl.string(p.t.x5CoXR),
                                }),
                                (0, t.jsx)(c.W, { guildId: n }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: A.Os,
                            children: [
                                (0, t.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: A.AM,
                                    children: p.intl.string(p.t["50Nwpc"]),
                                }),
                                (0, t.jsx)(o.m, { guildId: n }),
                                (0, t.jsx)(d.W, { guildId: n }),
                            ],
                        }),
                        N &&
                            (0, t.jsxs)("div", {
                                className: A.Os,
                                children: [
                                    (0, t.jsx)(a.Heading, {
                                        variant: "text-sm/medium",
                                        className: A.AM,
                                        children: p.intl.string(p.t.Zenogr),
                                    }),
                                    (0, t.jsx)(u.A, { user: l, guildId: n }),
                                ],
                            }),
                    ],
                }),
            }),
            !N && (0, t.jsx)(m.O, {}),
        ],
    });
}
