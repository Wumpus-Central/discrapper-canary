t.d(l, { A: () => A });
var i = t(627968);
t(64700);
var n = t(503698),
    s = t.n(n),
    a = t(397927),
    r = t(642737),
    o = t(985018),
    d = t(891726);
let c = "profile-modal-editing-panel",
    u = "profile-modal-editing-panel-heading";
function m(e) {
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
function A(e) {
    let { guildId: l, onChangeGuildId: t, onClose: n, className: A } = e;
    return (0, i.jsxs)("aside", {
        id: c,
        "aria-labelledby": u,
        className: s()(d.nd, A),
        children: [
            (0, i.jsx)(a.AC4, { children: (0, i.jsx)(a.H, { id: u, children: o.intl.string(o.t["L+ch00"]) }) }),
            (0, i.jsxs)("div", {
                className: d.wx,
                children: [(0, i.jsx)(r.A, { selectedGuildId: l ?? null, onChange: t }), (0, i.jsx)(m, { onClick: n })],
            }),
            (0, i.jsx)(a.HOs, { className: d.XG, fade: !0, children: (0, i.jsx)("div", {}) }),
        ],
    });
}
