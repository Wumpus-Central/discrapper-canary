var i,
    r = n(582128),
    s = n(323889),
    l = n(69114),
    a = n(561844),
    c = n(590202),
    o = n(129230),
    u = n(211824),
    d = n(652215),
    m =
        (((i = {}).FONT_PICKER = "FONT_PICKER"),
        (i.PROFILE_ROW_PROMO = "PROFILE_ROW_PROMO"),
        (i.NON_NITRO_CARD = "NON_NITRO_CARD"),
        (i.THEME_PICKER = "THEME_PICKER"),
        (i.APP_ICON_PICKER = "APP_ICON_PICKER"),
        (i.USER_PROFILE = "USER_PROFILE"),
        (i.GUILD_PROFILE = "GUILD_PROFILE"),
        i);
n.d(
    t,
    {},
    {
        Cy: function (e) {
            let { perks: t, content: n, sourceQuestContent: i = n, contentSurface: r } = e;
            o.default.track(d.HAw.QUEST_PROMOTIONAL_EVENT_USER_ACTION, {
                ...(0, a.dz)(i, s.p.QUEST_HOME_HERO),
                actions: t.map((e) => u.pp[e]),
                content_id: n,
                content_name: (0, c.jO)(n),
                content_surface: r,
                ad_content_id: u.Q3,
            });
        },
        UF: function (e, t, n) {
            r.useEffect(() => {
                n &&
                    (function (e) {
                        let { content: t, sourceQuestContent: n = t, contentSurface: i } = e;
                        (0, a.Qg)({
                            adContentId: u.Q3,
                            adCreativeType: s.p.QUEST_HOME_HERO,
                            event: d.HAw.QUEST_CONTENT_VIEWED,
                            properties: { ...(0, c.fF)(t), ...(0, l.A)(), content_surface: i },
                            sourceQuestContent: n,
                        });
                    })({ content: e, contentSurface: t });
            }, [e, t, n]);
        },
        rl: m,
    },
);
