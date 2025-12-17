n.d(t, {
    UN: () => h,
    Ui: () => g,
});
var r = n(54381),
    i = n(442837),
    l = n(616022),
    a = n(564034),
    o = n(649424),
    s = n(176168),
    c = n(234086),
    u = n(17057),
    d = n(70621),
    p = n(429080),
    f = n(388032);
function g() {
    return [
        {
            value: "quest_bar",
            label: f.intl.string(f.t.rjVPdM),
        },
        {
            value: "share_embed",
            label: f.intl.string(f.t["D/gSWS"]),
        },
        {
            value: "home_card",
            label: f.intl.string(f.t["5wnpF3"]),
        },
        {
            value: "channel_call_header",
            label: f.intl.string(f.t.gWinpQ),
        },
        {
            value: "members_list",
            label: f.intl.string(f.t.wpYima),
        },
        {
            value: "activity_panel",
            label: f.intl.string(f.t.L2mlUb),
        },
    ];
}
let h = (e) => {
    let { questId: t, selectedSections: n } = e,
        f = (0, i.e7)([l.Z], () => l.Z.getQuest(t));
    if (null != (0, i.e7)([l.Z], () => l.Z.getFetchQuestPreviewError(t)) || null == f) return null;
    let g = (e) => null == n || 0 === n.length || n.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            g("quest_bar") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.Z, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
            g("home_card") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.w, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
            g("share_embed") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Z, { questId: f.id }), (0, r.jsx)(a.i, {})],
                }),
            g("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.i, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
            g("members_list") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.Z, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
            g("activity_panel") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.Z, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
        ],
    });
};
