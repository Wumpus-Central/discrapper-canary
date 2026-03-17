i.d(l, { A: () => c });
var n = i(627968);
i(64700);
var t = i(503698),
    s = i.n(t),
    a = i(397927),
    r = i(642737),
    o = i(891726);
function d(e) {
    let { onClick: l } = e;
    return (0, n.jsxs)(a.DUT, {
        className: o.cS,
        "aria-label": "Close editing panel",
        onClick: l,
        children: [
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, n.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function c(e) {
    let { guildId: l, onChangeGuildId: i, onClose: t, className: c } = e;
    return (0, n.jsxs)("aside", {
        className: s()(o.nd, c),
        children: [
            (0, n.jsxs)("div", {
                className: o.wx,
                children: [(0, n.jsx)(r.A, { selectedGuildId: l ?? null, onChange: i }), (0, n.jsx)(d, { onClick: t })],
            }),
            (0, n.jsx)(a.HOs, { className: o.XG, fade: !0, children: (0, n.jsx)("div", {}) }),
        ],
    });
}
