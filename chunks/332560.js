var e,
    O = E(582128),
    n = E(323889),
    R = E(69114),
    I = E(561844),
    C = E(590202),
    a = E(129230),
    T = E(211824),
    c = E(652215),
    p =
        (((e = {}).FONT_PICKER = "FONT_PICKER"),
        (e.PROFILE_ROW_PROMO = "PROFILE_ROW_PROMO"),
        (e.NON_NITRO_CARD = "NON_NITRO_CARD"),
        (e.THEME_PICKER = "THEME_PICKER"),
        (e.APP_ICON_PICKER = "APP_ICON_PICKER"),
        (e.USER_PROFILE = "USER_PROFILE"),
        (e.GUILD_PROFILE = "GUILD_PROFILE"),
        e);
function P(_) {
    let { content: t, sourceQuestContent: E = t, contentSurface: e } = _;
    (0, I.Qg)({
        adContentId: T.Q3,
        adCreativeType: n.p.QUEST_HOME_HERO,
        event: c.HAw.QUEST_CONTENT_VIEWED,
        properties: { ...(0, C.fF)(t), ...(0, R.A)(), content_surface: e },
        sourceQuestContent: E,
    });
}
E.d(
    t,
    {},
    {
        Cy: function (_) {
            let { perks: t, content: E, sourceQuestContent: e = E, contentSurface: O } = _;
            a.default.track(c.HAw.QUEST_PROMOTIONAL_EVENT_USER_ACTION, {
                ...(0, I.dz)(e, n.p.QUEST_HOME_HERO),
                actions: t.map((_) => T.pp[_]),
                content_id: E,
                content_name: (0, C.jO)(E),
                content_surface: O,
                ad_content_id: T.Q3,
            });
        },
        TW: P,
        UF: function (_, t, E) {
            O.useEffect(() => {
                E && P({ content: _, contentSurface: t });
            }, [_, t, E]);
        },
        iM: async function (_) {
            let { content: t, questContentCTA: E, sourceQuestContent: e = t } = _;
            (0, I.Qg)({
                adContentId: T.Q3,
                adCreativeType: n.p.QUEST_HOME_HERO,
                event: c.HAw.QUEST_CONTENT_CLICKED,
                properties: await (0, I.LW)({ questContent: t, questContentCTA: E }),
                sourceQuestContent: e,
            });
        },
        rl: p,
    },
);
