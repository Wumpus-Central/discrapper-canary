l.d(t, { Ii: () => T, Ut: () => p, cR: () => A, u0: () => g });
var n = l(64700),
    r = l(835245),
    s = l(323889),
    u = l(345353),
    a = l(69114),
    i = l(174459),
    o = l(723702),
    d = l(859703),
    c = l(507107),
    E = l(710969),
    v = l(561844),
    m = l(590202),
    f = l(971649),
    _ = l(652215);
function g() {
    let e = (0, f.vU)();
    return n.useCallback(
        (t) => {
            (0, v.av)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function p() {
    let e = g();
    return n.useCallback(
        (t) => {
            let {
                    questId: l,
                    questContent: n,
                    questContentCTA: s,
                    questContentPosition: i,
                    questContentRowIndex: c,
                    trackGuildAndChannelMetadata: v,
                    sourceQuestContent: f,
                } = t,
                g = d.A.getQuest(l),
                p = (0, E.L4)(n),
                T = (0, E.Gp)(n, l);
            (0, u.N)((0, m.jO)(n)).then((t) => {
                e({
                    questId: l,
                    event: _.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, m.fF)(n, i, c),
                        ...(0, a.A)(),
                        cta_name: s,
                        quest_status: null != g ? (0, m.NI)(g) : null,
                        click_id: (0, r.A)(),
                        apple_advertising_id: null != t && (0, o.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, o.isAndroid)() ? t.advertisingId : null,
                        metadata_sealed: null != p ? p : null,
                        traffic_metadata_sealed: null != T ? T : null,
                    },
                    trackGuildAndChannelMetadata: v,
                    shouldExtendSession: (0, E.xn)(n),
                    sourceQuestContent: f,
                });
            });
        },
        [e],
    );
}
function T(e, t) {
    n.useEffect(() => {
        (0, v.DZ)(t, e);
    }, [e, t]);
}
function A(e) {
    let { questHomeHero: t, shouldShowQuestHomeHeroContent: l } = e,
        r = l ? c.uF.QUEST_HOME_ENTRYPOINT_THEMED : c.uF.QUEST_HOME_ENTRYPOINT,
        u = n.useMemo(() => {
            let e = (0, m.fF)(r);
            return delete e.row_index, e;
        }, [r]),
        a = n.useCallback(
            (e) => {
                null != t && l
                    ? (0, v.Qg)({
                          adContentId: t.id,
                          adCreativeType: s.p.QUEST_HOME_HERO,
                          event: e,
                          properties: u,
                          sourceQuestContent: r,
                      })
                    : i.default.track(e, u);
            },
            [t, l, r, u],
        ),
        o = n.useCallback(() => {
            a(_.HAw.QUEST_HOVER);
        }, [a]),
        d = n.useCallback(() => {
            a(_.HAw.QUEST_HOVER_OFF);
        }, [a]),
        E = n.useCallback(() => {
            i.default.track(_.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []);
    return n.useMemo(() => ({ handleMouseEnter: o, handleMouseLeave: d, handleOnboardingPopoutRender: E }), [o, d, E]);
}
