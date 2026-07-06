i.d(t, { Ii: () => I, Ut: () => k, WS: () => v, cR: () => N, tG: () => f, u0: () => T });
var n = i(64700),
    l = i(835245),
    a = i(323889),
    s = i(345353),
    d = i(69114),
    u = i(174459),
    r = i(723702),
    _ = i(24001),
    c = i(710969),
    o = i(561844),
    E = i(590202),
    p = i(971649),
    C = i(823784),
    O = i(652215);
function T() {
    let e = (0, p.vU)();
    return n.useCallback(
        (t) => {
            (0, o.av)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function k() {
    let e = T();
    return n.useCallback(
        (t) => {
            let {
                    questId: i,
                    questContent: n,
                    questContentCTA: a,
                    questContentPosition: u,
                    questContentRowIndex: _,
                    trackGuildAndChannelMetadata: o,
                    sourceQuestContent: p,
                } = t,
                T = (0, c.L4)(p),
                k = (0, c.Gp)(p, i);
            (0, s.N)((0, E.jO)(n)).then((t) => {
                e({
                    questId: i,
                    event: O.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, E.fF)(n, u, _),
                        ...(0, d.A)(),
                        cta_name: a,
                        click_id: (0, l.A)(),
                        apple_advertising_id: null != t && (0, r.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, r.isAndroid)() ? t.advertisingId : null,
                        metadata_sealed: null != T ? T : null,
                        traffic_metadata_sealed: null != k ? k : null,
                        search_session_id: (0, C.tv)()?.uuid ?? null,
                    },
                    trackGuildAndChannelMetadata: o,
                    shouldExtendSession: (0, c.xn)(n),
                    sourceQuestContent: p,
                });
            });
        },
        [e],
    );
}
function v() {
    let e = (0, p.vU)();
    return n.useCallback(
        (t) => {
            (0, o.Qg)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function f() {
    let e = v();
    return n.useCallback(
        (t) => {
            let {
                adContentId: i,
                relatedQuestId: n,
                adCreativeType: a,
                questContent: u,
                questContentCTA: _,
                questContentPosition: o,
                questContentRowIndex: p,
                trackGuildAndChannelMetadata: T,
                sourceQuestContent: k,
            } = t;
            (0, s.N)((0, E.jO)(u)).then((t) => {
                e({
                    adContentId: i,
                    relatedQuestId: n,
                    adCreativeType: a,
                    event: O.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, E.fF)(u, o, p),
                        ...(0, d.A)(),
                        cta_name: _,
                        click_id: (0, l.A)(),
                        apple_advertising_id: null != t && (0, r.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, r.isAndroid)() ? t.advertisingId : null,
                        search_session_id: (0, C.tv)()?.uuid ?? null,
                    },
                    trackGuildAndChannelMetadata: T,
                    shouldExtendSession: (0, c.xn)(u),
                    sourceQuestContent: k,
                });
            });
        },
        [e],
    );
}
function I(e, t) {
    n.useEffect(() => {
        (0, o.DZ)(t, e);
    }, [e, t]);
}
function N(e) {
    let { questHomeHero: t, shouldShowQuestHomeHeroContent: i } = e,
        l = i ? _.uF.QUEST_HOME_ENTRYPOINT_THEMED : _.uF.QUEST_HOME_ENTRYPOINT,
        s = n.useMemo(() => {
            let e = (0, E.fF)(l);
            return delete e.row_index, e;
        }, [l]),
        d = n.useCallback(
            (e) => {
                null != t && i
                    ? (0, o.Qg)({
                          adContentId: t.id,
                          adCreativeType: a.p.QUEST_HOME_HERO,
                          event: e,
                          properties: s,
                          sourceQuestContent: l,
                      })
                    : u.default.track(e, s);
            },
            [t, i, l, s],
        ),
        r = n.useCallback(() => {
            d(O.HAw.QUEST_HOVER);
        }, [d]),
        c = n.useCallback(() => {
            d(O.HAw.QUEST_HOVER_OFF);
        }, [d]),
        p = n.useCallback(() => {
            u.default.track(O.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []),
        C = n.useCallback(() => {
            u.default.track(O.HAw.QUEST_CONTENT_CLICKED, {
                is_targeted: !1,
                ...s,
                ...(null != t ? { ad_content_id: t.id } : {}),
            });
        }, [s, t]);
    return n.useMemo(
        () => ({ handleMouseEnter: r, handleMouseLeave: c, handleOnboardingPopoutRender: p, handleEntrypointClick: C }),
        [r, c, p, C],
    );
}
