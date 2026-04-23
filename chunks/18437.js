n.d(t, { Ii: () => O, Ut: () => N, cR: () => R, u0: () => S });
var i = n(64700),
    r = n(132500),
    a = n(323889),
    s = n(345353),
    _ = n(69114),
    l = n(954571),
    o = n(723702),
    E = n(859703),
    d = n(507107),
    c = n(710969),
    u = n(561844),
    I = n(590202),
    A = n(971649),
    T = n(652215);
function S() {
    let e = (0, A.vU)();
    return i.useCallback(
        (t) => {
            (0, u.av)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function N() {
    let e = S();
    return i.useCallback(
        (t) => {
            let {
                    questId: n,
                    questContent: i,
                    questContentCTA: a,
                    questContentPosition: l,
                    questContentRowIndex: d,
                    trackGuildAndChannelMetadata: u,
                    sourceQuestContent: A,
                } = t,
                S = E.A.getQuest(n),
                N = (0, c.L4)(i),
                O = (0, c.yI)(i, n),
                R = (0, c.Gp)(i, n);
            (0, s.N)((0, I.jO)(i)).then((t) => {
                e({
                    questId: n,
                    event: T.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, I.fF)(i, l, d),
                        ...(0, _.A)(),
                        cta_name: a,
                        quest_status: null != S ? (0, I.NI)(S) : null,
                        click_id: (0, r.A)(),
                        apple_advertising_id: null != t && (0, o.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, o.isAndroid)() ? t.advertisingId : null,
                        metadata_sealed: null != N ? N : null,
                        traffic_metadata_raw: null != O ? O : null,
                        traffic_metadata_sealed: null != R ? R : null,
                    },
                    trackGuildAndChannelMetadata: u,
                    shouldExtendSession: (0, c.xn)(i),
                    sourceQuestContent: A,
                });
            });
        },
        [e],
    );
}
function O(e, t) {
    i.useEffect(() => {
        (0, u.DZ)(t, e);
    }, [e, t]);
}
function R(e) {
    let { questHomeHero: t, shouldShowQuestHomeHeroContent: n } = e,
        r = n ? d.uF.QUEST_HOME_ENTRYPOINT_THEMED : d.uF.QUEST_HOME_ENTRYPOINT,
        s = i.useMemo(() => {
            let e = (0, I.fF)(r);
            return delete e.row_index, e;
        }, [r]),
        _ = i.useCallback(
            (e) => {
                null != t && n
                    ? (0, u.Qg)({
                          adContentId: t.id,
                          adCreativeType: a.p.QUEST_HOME_HERO,
                          event: e,
                          properties: s,
                          sourceQuestContent: r,
                      })
                    : l.default.track(e, s);
            },
            [t, n, r, s],
        ),
        o = i.useCallback(() => {
            _(T.HAw.QUEST_HOVER);
        }, [_]),
        E = i.useCallback(() => {
            _(T.HAw.QUEST_HOVER_OFF);
        }, [_]),
        c = i.useCallback(() => {
            l.default.track(T.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []);
    return i.useMemo(() => ({ handleMouseEnter: o, handleMouseLeave: E, handleOnboardingPopoutRender: c }), [o, E, c]);
}
