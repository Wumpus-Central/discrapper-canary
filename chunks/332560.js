var r,
    a = n(582128),
    i = n(323889),
    _ = n(69114),
    o = n(561844),
    E = n(590202),
    u = n(129230),
    c = n(211824),
    s = n(652215),
    O =
        (((r = {}).FONT_PICKER = "FONT_PICKER"),
        (r.PROFILE_ROW_PROMO = "PROFILE_ROW_PROMO"),
        (r.NON_NITRO_CARD = "NON_NITRO_CARD"),
        (r.THEME_PICKER = "THEME_PICKER"),
        (r.APP_ICON_PICKER = "APP_ICON_PICKER"),
        (r.USER_PROFILE = "USER_PROFILE"),
        (r.GUILD_PROFILE = "GUILD_PROFILE"),
        r);
function l(t) {
    let { content: e, sourceQuestContent: n = e, contentSurface: r } = t;
    (0, o.Qg)({
        adContentId: c.Q3,
        adCreativeType: i.p.QUEST_HOME_HERO,
        event: s.HAw.QUEST_CONTENT_VIEWED,
        properties: { ...(0, E.fF)(e), ...(0, _.A)(), content_surface: r },
        sourceQuestContent: n,
    });
}
n.d(
    e,
    {},
    {
        Cy: function (t) {
            let { perks: e, content: n, sourceQuestContent: r = n, contentSurface: a } = t;
            u.default.track(s.HAw.QUEST_PROMOTIONAL_EVENT_USER_ACTION, {
                ...(0, o.dz)(r, i.p.QUEST_HOME_HERO),
                actions: e.map((t) => c.pp[t]),
                content_id: n,
                content_name: (0, E.jO)(n),
                content_surface: a,
                ad_content_id: c.Q3,
            });
        },
        TW: l,
        UF: function (t, e, n) {
            a.useEffect(() => {
                n && l({ content: t, contentSurface: e });
            }, [t, e, n]);
        },
        rl: O,
    },
);
