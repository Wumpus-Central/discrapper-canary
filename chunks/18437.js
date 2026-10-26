l.d(t, { Ii: () => H, Ut: () => k, WS: () => f, cR: () => N, u0: () => T });
var a = l(582128),
    n = l(132500),
    i = l(323889),
    u = l(345353),
    s = l(69114),
    r = l(174459),
    d = l(723702),
    _ = l(738822),
    c = l(710969),
    E = l(561844),
    o = l(590202),
    p = l(971649),
    C = l(823784),
    O = l(652215);
function T() {
    let e = (0, p.wW)();
    return a.useCallback(
        (t) => {
            (0, E.av)({ ...t, properties: { ...t.properties, impression_id: e() } });
        },
        [e],
    );
}
function k() {
    let e = T();
    return a.useCallback(
        (t) => {
            let {
                    questId: l,
                    questContent: a,
                    questContentCTA: i,
                    questContentPosition: r,
                    questContentRowIndex: _,
                    trackGuildAndChannelMetadata: E,
                    sourceQuestContent: p,
                } = t,
                T = (0, c.L4)(p),
                k = (0, c.Gp)(p, l);
            (0, u.N)((0, o.jO)(a)).then((t) => {
                e({
                    questId: l,
                    event: O.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, o.fF)(a, r, _),
                        ...(0, s.A)(),
                        cta_name: i,
                        click_id: (0, n.A)(),
                        apple_advertising_id: null != t && (0, d.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, d.isAndroid)() ? t.advertisingId : null,
                        metadata_sealed: null != T ? T : null,
                        traffic_metadata_sealed: null != k ? k : null,
                        search_session_id: (0, C.tv)()?.uuid ?? null,
                    },
                    trackGuildAndChannelMetadata: E,
                    shouldExtendSession: (0, c.xn)(a),
                    sourceQuestContent: p,
                });
            });
        },
        [e],
    );
}
function f() {
    let e = (0, p.wW)();
    return a.useCallback(
        (t) => {
            (0, E.Qg)({ ...t, properties: { ...t.properties, impression_id: e() } });
        },
        [e],
    );
}
function H(e, t) {
    a.useEffect(() => {
        (0, E.DZ)(t, e);
    }, [e, t]);
}
function N(e) {
    let { questHomeHero: t, shouldShowQuestHomeHeroContent: l } = e,
        n = l ? _.uF.QUEST_HOME_ENTRYPOINT_THEMED : _.uF.QUEST_HOME_ENTRYPOINT,
        u = a.useMemo(() => {
            let e = (0, o.fF)(n);
            return (delete e.row_index, e);
        }, [n]),
        s = a.useCallback(
            (e) => {
                null != t && l
                    ? (0, E.Qg)({
                          adContentId: t.id,
                          adCreativeType: i.p.QUEST_HOME_HERO,
                          event: e,
                          properties: u,
                          sourceQuestContent: n,
                      })
                    : r.default.track(e, u);
            },
            [t, l, n, u],
        ),
        d = a.useCallback(() => {
            s(O.HAw.QUEST_HOVER);
        }, [s]),
        c = a.useCallback(() => {
            s(O.HAw.QUEST_HOVER_OFF);
        }, [s]),
        p = a.useCallback(() => {
            r.default.track(O.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []),
        C = a.useCallback(() => {
            r.default.track(O.HAw.QUEST_CONTENT_CLICKED, {
                is_targeted: !1,
                ...u,
                ...(null != t ? { ad_content_id: t.id } : {}),
            });
        }, [u, t]);
    return a.useMemo(
        () => ({ handleMouseEnter: d, handleMouseLeave: c, handleOnboardingPopoutRender: p, handleEntrypointClick: C }),
        [d, c, p, C],
    );
}
