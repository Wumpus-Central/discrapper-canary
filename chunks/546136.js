t.d(l, { Ay: () => f, _T: () => p, oA: () => x });
var i = t(627968);
t(64700);
var n = t(503698),
    s = t.n(n),
    a = t(397927),
    r = t(487233),
    o = t(230635),
    d = t(642737),
    c = t(985018),
    u = t(266603);
let m = "profile-modal-editing-panel",
    A = "profile-modal-editing-panel-heading";
function x(e) {
    let { onClick: l, className: t } = e;
    return (0, i.jsx)(a.DUT, {
        "aria-label": c.intl.string(c.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": m,
        className: s()(u.eg, t),
        onClick: l,
        children: (0, i.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function p(e) {
    let { onClick: l, className: t } = e;
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(a.K0, {
            "aria-label": c.intl.string(c.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": m,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function g(e) {
    let { onClick: l } = e;
    return (0, i.jsxs)(a.DUT, {
        className: u.cS,
        "aria-label": c.intl.string(c.t.X6NklS),
        onClick: l,
        "aria-controls": m,
        "aria-expanded": !0,
        children: [
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function f(e) {
    let { selectedGuildId: l, onSelectGuildId: t, onClose: n, className: x } = e;
    return (0, i.jsxs)("aside", {
        id: m,
        "aria-labelledby": A,
        className: s()(u.nd, x),
        children: [
            (0, i.jsx)(a.AC4, { children: (0, i.jsx)(a.H, { id: A, children: c.intl.string(c.t["L+ch00"]) }) }),
            (0, i.jsxs)("div", {
                className: u.wx,
                children: [(0, i.jsx)(d.A, { selectedGuildId: l ?? null, onChange: t }), (0, i.jsx)(g, { onClick: n })],
            }),
            (0, i.jsx)(a.Fmo, {
                children: (0, i.jsx)(a.HOs, {
                    className: u.XG,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: u.Os,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: "text-sm/medium",
                                className: u.AM,
                                children: c.intl.string(c.t.lqaIxI),
                            }),
                            (0, i.jsx)(r.m, { guildId: l }),
                            (0, i.jsx)(o.W, { guildId: l }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
