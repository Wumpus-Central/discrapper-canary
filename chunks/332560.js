var O,
    e = t(582128),
    n = t(323889),
    R = t(69114),
    I = t(561844),
    T = t(590202),
    C = t(129230),
    P = t(211824),
    a = t(652215),
    N =
        (((O = {}).FONT_PICKER = "FONT_PICKER"),
        (O.PROFILE_ROW_PROMO = "PROFILE_ROW_PROMO"),
        (O.NON_NITRO_CARD = "NON_NITRO_CARD"),
        (O.THEME_PICKER = "THEME_PICKER"),
        (O.APP_ICON_PICKER = "APP_ICON_PICKER"),
        (O.USER_PROFILE = "USER_PROFILE"),
        (O.GUILD_PROFILE = "GUILD_PROFILE"),
        (O.EXPIRING_SOON_SHEET = "EXPIRING_SOON_SHEET"),
        (O.EXPIRED_SHEET = "EXPIRED_SHEET"),
        O);
function c(E) {
    let { content: _, sourceQuestContent: t = _, contentSurface: O } = E;
    (0, I.Qg)({
        adContentId: P.Q3,
        adCreativeType: n.p.QUEST_HOME_HERO,
        event: a.HAw.QUEST_CONTENT_VIEWED,
        properties: { ...(0, T.fF)(_), ...(0, R.A)(), content_surface: O },
        sourceQuestContent: t,
    });
}
t.d(
    _,
    {},
    {
        Cy: function (E) {
            let { perks: _, content: t, sourceQuestContent: O = t, contentSurface: e } = E;
            C.default.track(a.HAw.QUEST_PROMOTIONAL_EVENT_USER_ACTION, {
                ...(0, I.dz)(O, n.p.QUEST_HOME_HERO),
                actions: _.map((E) => P.pp[E]),
                content_id: t,
                content_name: (0, T.jO)(t),
                content_surface: e,
                ad_content_id: P.Q3,
            });
        },
        TW: c,
        UF: function (E, _, t) {
            e.useEffect(() => {
                t && c({ content: E, contentSurface: _ });
            }, [E, _, t]);
        },
        iM: async function (E) {
            let { content: _, questContentCTA: t, sourceQuestContent: O = _ } = E;
            (0, I.Qg)({
                adContentId: P.Q3,
                adCreativeType: n.p.QUEST_HOME_HERO,
                event: a.HAw.QUEST_CONTENT_CLICKED,
                properties: await (0, I.LW)({ questContent: _, questContentCTA: t }),
                sourceQuestContent: O,
            });
        },
        rl: N,
    },
);
