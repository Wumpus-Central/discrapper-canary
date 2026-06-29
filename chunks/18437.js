"use strict";
n.d(t, { Ii: () => T, Ut: () => g, WS: () => A, cR: () => S, tG: () => I, u0: () => m });
var i = n(64700),
    r = n(835245),
    s = n(323889),
    a = n(345353),
    o = n(69114),
    l = n(174459),
    u = n(723702),
    c = n(24001),
    d = n(710969),
    _ = n(561844),
    h = n(590202),
    f = n(971649),
    p = n(823784),
    E = n(652215);
function m() {
    let e = (0, f.vU)();
    return i.useCallback(
        (t) => {
            (0, _.av)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function g() {
    let e = m();
    return i.useCallback(
        (t) => {
            let {
                    questId: n,
                    questContent: i,
                    questContentCTA: s,
                    questContentPosition: l,
                    questContentRowIndex: c,
                    trackGuildAndChannelMetadata: _,
                    sourceQuestContent: f,
                } = t,
                m = (0, d.L4)(f),
                g = (0, d.Gp)(f, n);
            (0, a.N)((0, h.jO)(i)).then((t) => {
                e({
                    questId: n,
                    event: E.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, h.fF)(i, l, c),
                        ...(0, o.A)(),
                        cta_name: s,
                        click_id: (0, r.A)(),
                        apple_advertising_id: null != t && (0, u.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, u.isAndroid)() ? t.advertisingId : null,
                        metadata_sealed: null != m ? m : null,
                        traffic_metadata_sealed: null != g ? g : null,
                        search_session_id: (0, p.tv)()?.uuid ?? null,
                    },
                    trackGuildAndChannelMetadata: _,
                    shouldExtendSession: (0, d.xn)(i),
                    sourceQuestContent: f,
                });
            });
        },
        [e],
    );
}
function A() {
    let e = (0, f.vU)();
    return i.useCallback(
        (t) => {
            (0, _.Qg)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function I() {
    let e = A();
    return i.useCallback(
        (t) => {
            let {
                adContentId: n,
                relatedQuestId: i,
                adCreativeType: s,
                questContent: l,
                questContentCTA: c,
                questContentPosition: _,
                questContentRowIndex: f,
                trackGuildAndChannelMetadata: m,
                sourceQuestContent: g,
            } = t;
            (0, a.N)((0, h.jO)(l)).then((t) => {
                e({
                    adContentId: n,
                    relatedQuestId: i,
                    adCreativeType: s,
                    event: E.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, h.fF)(l, _, f),
                        ...(0, o.A)(),
                        cta_name: c,
                        click_id: (0, r.A)(),
                        apple_advertising_id: null != t && (0, u.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, u.isAndroid)() ? t.advertisingId : null,
                        search_session_id: (0, p.tv)()?.uuid ?? null,
                    },
                    trackGuildAndChannelMetadata: m,
                    shouldExtendSession: (0, d.xn)(l),
                    sourceQuestContent: g,
                });
            });
        },
        [e],
    );
}
function T(e, t) {
    i.useEffect(() => {
        (0, _.DZ)(t, e);
    }, [e, t]);
}
function S(e) {
    let { questHomeHero: t, shouldShowQuestHomeHeroContent: n } = e,
        r = n ? c.uF.QUEST_HOME_ENTRYPOINT_THEMED : c.uF.QUEST_HOME_ENTRYPOINT,
        a = i.useMemo(() => {
            let e = (0, h.fF)(r);
            return delete e.row_index, e;
        }, [r]),
        o = i.useCallback(
            (e) => {
                null != t && n
                    ? (0, _.Qg)({
                          adContentId: t.id,
                          adCreativeType: s.p.QUEST_HOME_HERO,
                          event: e,
                          properties: a,
                          sourceQuestContent: r,
                      })
                    : l.default.track(e, a);
            },
            [t, n, r, a],
        ),
        u = i.useCallback(() => {
            o(E.HAw.QUEST_HOVER);
        }, [o]),
        d = i.useCallback(() => {
            o(E.HAw.QUEST_HOVER_OFF);
        }, [o]),
        f = i.useCallback(() => {
            l.default.track(E.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []),
        p = i.useCallback(() => {
            l.default.track(E.HAw.QUEST_CONTENT_CLICKED, {
                is_targeted: !1,
                ...a,
                ...(null != t ? { ad_content_id: t.id } : {}),
            });
        }, [a, t]);
    return i.useMemo(
        () => ({ handleMouseEnter: u, handleMouseLeave: d, handleOnboardingPopoutRender: f, handleEntrypointClick: p }),
        [u, d, f, p],
    );
}
