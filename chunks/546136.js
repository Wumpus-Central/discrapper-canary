t.d(l, { Ay: () => x, _T: () => A, oA: () => m });
var i = t(627968);
t(64700);
var n = t(503698),
    s = t.n(n),
    a = t(397927),
    r = t(642737),
    o = t(985018),
    d = t(266603);
let c = "profile-modal-editing-panel",
    u = "profile-modal-editing-panel-heading";
function m(e) {
    let { onClick: l, className: t } = e;
    return (0, i.jsx)(a.DUT, {
        "aria-label": o.intl.string(o.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": c,
        className: s()(d.eg, t),
        onClick: l,
        children: (0, i.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function A(e) {
    let { onClick: l, className: t } = e;
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(a.K0, {
            "aria-label": o.intl.string(o.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": c,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function p(e) {
    let { onClick: l } = e;
    return (0, i.jsxs)(a.DUT, {
        className: d.cS,
        "aria-label": o.intl.string(o.t.X6NklS),
        onClick: l,
        "aria-controls": c,
        "aria-expanded": !0,
        children: [
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, i.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function x(e) {
    let { selectedGuildId: l, onSelectGuildId: t, onClose: n, className: m } = e;
    return (0, i.jsxs)("aside", {
        id: c,
        "aria-labelledby": u,
        className: s()(d.nd, m),
        children: [
            (0, i.jsx)(a.AC4, { children: (0, i.jsx)(a.H, { id: u, children: o.intl.string(o.t["L+ch00"]) }) }),
            (0, i.jsxs)("div", {
                className: d.wx,
                children: [(0, i.jsx)(r.A, { selectedGuildId: l ?? null, onChange: t }), (0, i.jsx)(p, { onClick: n })],
            }),
            (0, i.jsx)(a.HOs, { className: d.XG, fade: !0, children: (0, i.jsx)("div", {}) }),
        ],
    });
}
