n.d(t, {
    UN: () => g,
    Ui: () => m,
});
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(705262),
    o = n(569984),
    s = n(564034),
    l = n(176168),
    c = n(234086),
    u = n(17057),
    d = n(70621),
    f = n(429080),
    _ = n(675720),
    p = n(388032),
    h = n(726927);
function m() {
    return [
        {
            value: "quest_bar",
            label: p.intl.string(p.t.dCHFNT),
        },
        {
            value: "share_embed",
            label: p.intl.string(p.t.LUZFws),
        },
        {
            value: "home_card",
            label: p.intl.string(p.t.Mko3j4),
        },
        {
            value: "channel_call_header",
            label: p.intl.string(p.t["Vfl/AQ"]),
        },
        {
            value: "members_list",
            label: p.intl.string(p.t.QbGtHB),
        },
        {
            value: "trophy_case",
            label: p.intl.string(p.t.dQ3vgI),
        },
    ];
}
let g = (e) => {
    let { questId: t, selectedSections: n } = e,
        p = (0, i.e7)([o.Z], () => o.Z.getQuest(t));
    if (null != (0, i.e7)([o.Z], () => o.Z.getFetchQuestPreviewError(t)) || null == p) return null;
    let m = (e) => null == n || 0 === n.length || n.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m("home_card") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.w, { quest: p }), (0, r.jsx)(s.i, {})],
                }),
            m("quest_bar") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.Z, { quest: p }), (0, r.jsx)(s.i, {})],
                }),
            m("share_embed") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Z, { questId: p.id }), (0, r.jsx)(s.i, {})],
                }),
            m("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.i, { quest: p }), (0, r.jsx)(s.i, {})],
                }),
            m("members_list") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(f.Z, { quest: p }), (0, r.jsx)(s.i, {})],
                }),
            m("trophy_case") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.Z, { quest: p }), (0, r.jsx)(s.i, {})],
                }),
            (0, r.jsx)("div", {
                className: h.themes,
                children: (0, r.jsx)(a.ZP, {
                    type: a.yH.SETTINGS,
                    children: (0, r.jsx)(a.ZP.Basic, { className: h.themeSelectionGroup }),
                }),
            }),
        ],
    });
};
