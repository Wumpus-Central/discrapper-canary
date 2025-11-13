n.d(t, {
    UN: () => g,
    Ui: () => h,
});
var r = n(951288),
    i = n(442837),
    l = n(569984),
    a = n(564034),
    s = n(649424),
    o = n(176168),
    c = n(234086),
    u = n(17057),
    d = n(70621),
    p = n(429080),
    f = n(388032);
function h() {
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
let g = (e) => {
    let { questId: t, selectedSections: n } = e,
        f = (0, i.e7)([l.Z], () => l.Z.getQuest(t));
    if (null != (0, i.e7)([l.Z], () => l.Z.getFetchQuestPreviewError(t)) || null == f) return null;
    let h = (e) => null == n || 0 === n.length || n.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            h("quest_bar") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.Z, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
            h("home_card") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.w, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
            h("share_embed") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Z, { questId: f.id }), (0, r.jsx)(a.i, {})],
                }),
            h("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.i, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
            h("members_list") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.Z, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
            h("activity_panel") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.Z, { quest: f }), (0, r.jsx)(a.i, {})],
                }),
        ],
    });
};
