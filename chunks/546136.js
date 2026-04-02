t.d(l, { Ay: () => h, _T: () => g, oA: () => p });
var i = t(627968);
t(64700);
var n = t(503698),
    s = t.n(n),
    a = t(397927),
    r = t(487233),
    o = t(230635),
    d = t(473219),
    c = t(642737),
    u = t(985018),
    m = t(266603);
let x = "profile-modal-editing-panel",
    A = "profile-modal-editing-panel-heading";
function p(e) {
    let { onClick: l, className: t } = e;
    return (0, i.jsx)(a.DUT, {
        "aria-label": u.intl.string(u.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": x,
        className: s()(m.eg, t),
        onClick: l,
        children: (0, i.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function g(e) {
    let { onClick: l, className: t } = e;
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(a.K0, {
            "aria-label": u.intl.string(u.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": x,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function f(e) {
    let { onClick: l } = e;
    return (0, i.jsxs)(a.DUT, {
        className: m.cS,
        "aria-label": u.intl.string(u.t.X6NklS),
        onClick: l,
        "aria-controls": x,
        "aria-expanded": !0,
        children: [
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function h(e) {
    let { selectedGuildId: l, onSelectGuildId: t, onClose: n, className: p } = e;
    return (0, i.jsxs)("aside", {
        id: x,
        "aria-labelledby": A,
        className: s()(m.nd, p),
        children: [
            (0, i.jsx)(a.AC4, { children: (0, i.jsx)(a.H, { id: A, children: u.intl.string(u.t["L+ch00"]) }) }),
            (0, i.jsxs)("div", {
                className: m.wx,
                children: [(0, i.jsx)(c.A, { selectedGuildId: l ?? null, onChange: t }), (0, i.jsx)(f, { onClick: n })],
            }),
            (0, i.jsx)(a.Fmo, {
                children: (0, i.jsxs)(a.HOs, {
                    className: m.XG,
                    fade: !0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: m.Os,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: m.AM,
                                    children: u.intl.string(u.t.x5CoXR),
                                }),
                                (0, i.jsx)(d.W, { guildId: l }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: m.Os,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: m.AM,
                                    children: u.intl.string(u.t.lqaIxI),
                                }),
                                (0, i.jsx)(r.m, { guildId: l }),
                                (0, i.jsx)(o.W, { guildId: l }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
