var t,
    e = O(582128),
    R = O(323889),
    I = O(69114),
    n = O(561844),
    P = O(590202),
    T = O(129230),
    N = O(211824),
    C = O(652215),
    a =
        (((t = {}).FONT_PICKER = "FONT_PICKER"),
        (t.PROFILE_ROW_PROMO = "PROFILE_ROW_PROMO"),
        (t.NON_NITRO_CARD = "NON_NITRO_CARD"),
        (t.THEME_PICKER = "THEME_PICKER"),
        (t.APP_ICON_PICKER = "APP_ICON_PICKER"),
        (t.USER_PROFILE = "USER_PROFILE"),
        (t.GUILD_PROFILE = "GUILD_PROFILE"),
        (t.EXPIRING_SOON_SHEET = "EXPIRING_SOON_SHEET"),
        (t.EXPIRED_SHEET = "EXPIRED_SHEET"),
        (t.EXPIRING_SOON_POPOVER = "EXPIRING_SOON_POPOVER"),
        t);
function c(E) {
    let { content: _, sourceQuestContent: O = _, contentSurface: t } = E;
    (0, n.Qg)({
        adContentId: N.Q3,
        adCreativeType: R.p.QUEST_HOME_HERO,
        event: C.HAw.QUEST_CONTENT_VIEWED,
        properties: { ...(0, P.fF)(_), ...(0, I.A)(), content_surface: t },
        sourceQuestContent: O,
    });
}
O.d(
    _,
    {},
    {
        Cy: function (E) {
            let { perks: _, content: O, sourceQuestContent: t = O, contentSurface: e } = E;
            T.default.track(C.HAw.QUEST_PROMOTIONAL_EVENT_USER_ACTION, {
                ...(0, n.dz)(t, R.p.QUEST_HOME_HERO),
                actions: _.map((E) => N.pp[E]),
                content_id: O,
                content_name: (0, P.jO)(O),
                content_surface: e,
                ad_content_id: N.Q3,
            });
        },
        TW: c,
        UF: function (E, _, O) {
            e.useEffect(() => {
                O && c({ content: E, contentSurface: _ });
            }, [E, _, O]);
        },
        iM: async function (E) {
            let { content: _, questContentCTA: O, sourceQuestContent: t = _ } = E;
            (0, n.Qg)({
                adContentId: N.Q3,
                adCreativeType: R.p.QUEST_HOME_HERO,
                event: C.HAw.QUEST_CONTENT_CLICKED,
                properties: await (0, n.LW)({ questContent: _, questContentCTA: O }),
                sourceQuestContent: t,
            });
        },
        rl: a,
    },
);
