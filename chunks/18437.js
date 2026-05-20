l.d(t, { Ii: () => S, Ut: () => p, WS: () => T, cR: () => C, tG: () => A, u0: () => g });
var n = l(64700),
    r = l(835245),
    s = l(323889),
    a = l(345353),
    u = l(69114),
    i = l(174459),
    o = l(723702),
    d = l(859703),
    c = l(507107),
    E = l(710969),
    v = l(561844),
    _ = l(590202),
    f = l(971649),
    m = l(652215);
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
            (0, a.N)((0, _.jO)(n)).then((t) => {
                e({
                    questId: l,
                    event: m.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, _.fF)(n, i, c),
                        ...(0, u.A)(),
                        cta_name: s,
                        quest_status: null != g ? (0, _.NI)(g) : null,
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
function T() {
    let e = (0, f.vU)();
    return n.useCallback(
        (t) => {
            (0, v.Qg)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function A() {
    let e = T();
    return n.useCallback(
        (t) => {
            let {
                    adContentId: l,
                    relatedQuestId: n,
                    adCreativeType: s,
                    questContent: i,
                    questContentCTA: d,
                    questContentPosition: c,
                    questContentRowIndex: v,
                    trackGuildAndChannelMetadata: f,
                    sourceQuestContent: g,
                } = t,
                p = (0, E.L4)(i, l);
            (0, a.N)((0, _.jO)(i)).then((t) => {
                e({
                    adContentId: l,
                    relatedQuestId: n,
                    adCreativeType: s,
                    event: m.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, _.fF)(i, c, v),
                        ...(0, u.A)(),
                        cta_name: d,
                        click_id: (0, r.A)(),
                        apple_advertising_id: null != t && (0, o.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, o.isAndroid)() ? t.advertisingId : null,
                        metadata_sealed: null != p ? p : null,
                    },
                    trackGuildAndChannelMetadata: f,
                    shouldExtendSession: (0, E.xn)(i),
                    sourceQuestContent: g,
                });
            });
        },
        [e],
    );
}
function S(e, t) {
    n.useEffect(() => {
        (0, v.DZ)(t, e);
    }, [e, t]);
}
function C(e) {
    let { questHomeHero: t, shouldShowQuestHomeHeroContent: l } = e,
        r = l ? c.uF.QUEST_HOME_ENTRYPOINT_THEMED : c.uF.QUEST_HOME_ENTRYPOINT,
        a = n.useMemo(() => {
            let e = (0, _.fF)(r);
            return delete e.row_index, e;
        }, [r]),
        u = n.useCallback(
            (e) => {
                null != t && l
                    ? (0, v.Qg)({
                          adContentId: t.id,
                          adCreativeType: s.p.QUEST_HOME_HERO,
                          event: e,
                          properties: a,
                          sourceQuestContent: r,
                      })
                    : i.default.track(e, a);
            },
            [t, l, r, a],
        ),
        o = n.useCallback(() => {
            u(m.HAw.QUEST_HOVER);
        }, [u]),
        d = n.useCallback(() => {
            u(m.HAw.QUEST_HOVER_OFF);
        }, [u]),
        E = n.useCallback(() => {
            i.default.track(m.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []),
        f = n.useCallback(() => {
            i.default.track(m.HAw.QUEST_CONTENT_CLICKED, { is_targeted: !1, ...(0, _.fF)(r) });
        }, [r]);
    return n.useMemo(
        () => ({ handleMouseEnter: o, handleMouseLeave: d, handleOnboardingPopoutRender: E, handleEntrypointClick: f }),
        [o, d, E, f],
    );
}
