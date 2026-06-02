l.d(t, { Ii: () => A, Ut: () => g, WS: () => p, cR: () => S, tG: () => T, u0: () => m });
var n = l(64700),
    r = l(835245),
    s = l(323889),
    i = l(345353),
    a = l(69114),
    u = l(174459),
    o = l(723702),
    d = l(507107),
    c = l(710969),
    E = l(561844),
    v = l(590202),
    _ = l(971649),
    f = l(652215);
function m() {
    let e = (0, _.vU)();
    return n.useCallback(
        (t) => {
            (0, E.av)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function g() {
    let e = m();
    return n.useCallback(
        (t) => {
            let {
                    questId: l,
                    questContent: n,
                    questContentCTA: s,
                    questContentPosition: u,
                    questContentRowIndex: d,
                    trackGuildAndChannelMetadata: E,
                    sourceQuestContent: _,
                } = t,
                m = (0, c.L4)(n),
                g = (0, c.Gp)(n, l);
            (0, i.N)((0, v.jO)(n)).then((t) => {
                e({
                    questId: l,
                    event: f.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, v.fF)(n, u, d),
                        ...(0, a.A)(),
                        cta_name: s,
                        click_id: (0, r.A)(),
                        apple_advertising_id: null != t && (0, o.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, o.isAndroid)() ? t.advertisingId : null,
                        metadata_sealed: null != m ? m : null,
                        traffic_metadata_sealed: null != g ? g : null,
                    },
                    trackGuildAndChannelMetadata: E,
                    shouldExtendSession: (0, c.xn)(n),
                    sourceQuestContent: _,
                });
            });
        },
        [e],
    );
}
function p() {
    let e = (0, _.vU)();
    return n.useCallback(
        (t) => {
            (0, E.Qg)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function T() {
    let e = p();
    return n.useCallback(
        (t) => {
            let {
                adContentId: l,
                relatedQuestId: n,
                adCreativeType: s,
                questContent: u,
                questContentCTA: d,
                questContentPosition: E,
                questContentRowIndex: _,
                trackGuildAndChannelMetadata: m,
                sourceQuestContent: g,
            } = t;
            (0, i.N)((0, v.jO)(u)).then((t) => {
                e({
                    adContentId: l,
                    relatedQuestId: n,
                    adCreativeType: s,
                    event: f.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, v.fF)(u, E, _),
                        ...(0, a.A)(),
                        cta_name: d,
                        click_id: (0, r.A)(),
                        apple_advertising_id: null != t && (0, o.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, o.isAndroid)() ? t.advertisingId : null,
                    },
                    trackGuildAndChannelMetadata: m,
                    shouldExtendSession: (0, c.xn)(u),
                    sourceQuestContent: g,
                });
            });
        },
        [e],
    );
}
function A(e, t) {
    n.useEffect(() => {
        (0, E.DZ)(t, e);
    }, [e, t]);
}
function S(e) {
    let { questHomeHero: t, shouldShowQuestHomeHeroContent: l } = e,
        r = l ? d.uF.QUEST_HOME_ENTRYPOINT_THEMED : d.uF.QUEST_HOME_ENTRYPOINT,
        i = n.useMemo(() => {
            let e = (0, v.fF)(r);
            return delete e.row_index, e;
        }, [r]),
        a = n.useCallback(
            (e) => {
                null != t && l
                    ? (0, E.Qg)({
                          adContentId: t.id,
                          adCreativeType: s.p.QUEST_HOME_HERO,
                          event: e,
                          properties: i,
                          sourceQuestContent: r,
                      })
                    : u.default.track(e, i);
            },
            [t, l, r, i],
        ),
        o = n.useCallback(() => {
            a(f.HAw.QUEST_HOVER);
        }, [a]),
        c = n.useCallback(() => {
            a(f.HAw.QUEST_HOVER_OFF);
        }, [a]),
        _ = n.useCallback(() => {
            u.default.track(f.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []),
        m = n.useCallback(() => {
            u.default.track(f.HAw.QUEST_CONTENT_CLICKED, {
                is_targeted: !1,
                ...i,
                ...(null != t ? { ad_content_id: t.id } : {}),
            });
        }, [i, t]);
    return n.useMemo(
        () => ({ handleMouseEnter: o, handleMouseLeave: c, handleOnboardingPopoutRender: _, handleEntrypointClick: m }),
        [o, c, _, m],
    );
}
