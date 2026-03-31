t.d(l, { Ay: () => g, _T: () => p, oA: () => A });
var i = t(627968);
t(64700);
var n = t(503698),
    s = t.n(n),
    a = t(397927),
    r = t(230635),
    o = t(642737),
    d = t(985018),
    c = t(475276);
let u = "profile-modal-editing-panel",
    m = "profile-modal-editing-panel-heading";
function A(e) {
    let { onClick: l, className: t } = e;
    return (0, i.jsx)(a.DUT, {
        "aria-label": d.intl.string(d.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": u,
        className: s()(c.eg, t),
        onClick: l,
        children: (0, i.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function p(e) {
    let { onClick: l, className: t } = e;
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(a.K0, {
            "aria-label": d.intl.string(d.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": u,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function x(e) {
    let { onClick: l } = e;
    return (0, i.jsxs)(a.DUT, {
        className: c.cS,
        "aria-label": d.intl.string(d.t.X6NklS),
        onClick: l,
        "aria-controls": u,
        "aria-expanded": !0,
        children: [
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function g(e) {
    let { selectedGuildId: l, onSelectGuildId: t, onClose: n, className: A } = e;
    return (0, i.jsxs)("aside", {
        id: u,
        "aria-labelledby": m,
        className: s()(c.nd, A),
        children: [
            (0, i.jsx)(a.AC4, { children: (0, i.jsx)(a.H, { id: m, children: d.intl.string(d.t["L+ch00"]) }) }),
            (0, i.jsxs)("div", {
                className: c.wx,
                children: [(0, i.jsx)(o.A, { selectedGuildId: l ?? null, onChange: t }), (0, i.jsx)(x, { onClick: n })],
            }),
            (0, i.jsx)(a.HOs, { className: c.XG, fade: !0, children: (0, i.jsx)(r.W, { guildId: l }) }),
        ],
    });
}
