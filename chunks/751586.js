n.d(t, {
    Tl: () => h,
    UN: () => m,
});
var r = n(951288),
    i = n(442837),
    a = n(705262),
    o = n(569984),
    s = n(564034),
    l = n(176168),
    c = n(234086),
    u = n(17057),
    d = n(70621),
    f = n(429080),
    _ = n(675720),
    p = n(726927);
let h = [
        {
            value: "quest_bar",
            label: "Quest Bar",
        },
        {
            value: "share_embed",
            label: "Share Embed",
        },
        {
            value: "home_card",
            label: "Home Card",
        },
        {
            value: "channel_call_header",
            label: "Channel Call Header",
        },
        {
            value: "members_list",
            label: "Members List",
        },
        {
            value: "trophy_case",
            label: "Trophy Case",
        },
    ],
    m = (e) => {
        let { questId: t, selectedSections: n } = e,
            h = (0, i.e7)([o.Z], () => o.Z.getQuest(t));
        if (null != (0, i.e7)([o.Z], () => o.Z.getFetchQuestPreviewError(t)) || null == h) return null;
        let m = (e) => null == n || 0 === n.length || n.includes(e);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                m("home_card") &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(d.w, { quest: h }), (0, r.jsx)(s.i, {})],
                    }),
                m("share_embed") &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.Z, { questId: h.id }), (0, r.jsx)(s.i, {})],
                    }),
                m("quest_bar") &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.Z, { quest: h }), (0, r.jsx)(s.i, {})],
                    }),
                m("channel_call_header") &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c.i, { quest: h }), (0, r.jsx)(s.i, {})],
                    }),
                m("members_list") &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(f.Z, { quest: h }), (0, r.jsx)(s.i, {})],
                    }),
                m("trophy_case") &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(_.Z, { quest: h }), (0, r.jsx)(s.i, {})],
                    }),
                (0, r.jsx)("div", {
                    className: p.themes,
                    children: (0, r.jsx)(a.ZP, {
                        type: a.yH.SETTINGS,
                        children: (0, r.jsx)(a.ZP.Basic, { className: p.themeSelectionGroup }),
                    }),
                }),
            ],
        });
    };
