var a = l(582128),
    n = l(115560),
    u = l(323889),
    i = l(345353),
    s = l(69114),
    r = l(129230),
    d = l(723702),
    _ = l(506988),
    c = l(710969),
    E = l(561844),
    o = l(590202),
    p = l(971649),
    C = l(823784),
    T = l(652215);
function O() {
    let e = (0, p.wW)();
    return a.useCallback(
        (t) => {
            (0, E.av)({ ...t, properties: { ...t.properties, impression_id: e() } });
        },
        [e],
    );
}
l.d(
    t,
    {},
    {
        Ii: function (e, t) {
            a.useEffect(() => {
                (0, E.DZ)(t, e);
            }, [e, t]);
        },
        Ut: function () {
            let e = O();
            return a.useCallback(
                (t) => {
                    let {
                            questId: l,
                            questContent: a,
                            questContentCTA: u,
                            questContentPosition: r,
                            questContentRowIndex: _,
                            trackGuildAndChannelMetadata: E,
                            sourceQuestContent: p,
                        } = t,
                        O = (0, c.L4)(p),
                        k = (0, c.Gp)(p, l);
                    (0, i.N)((0, o.jO)(a)).then((t) => {
                        e({
                            questId: l,
                            event: T.HAw.QUEST_CONTENT_CLICKED,
                            properties: {
                                ...(0, o.fF)(a, r, _),
                                ...(0, s.A)(),
                                cta_name: u,
                                click_id: (0, n.A)(),
                                apple_advertising_id: null != t && (0, d.un)() ? t.advertisingId : null,
                                android_advertising_id: null != t && (0, d.m0)() ? t.advertisingId : null,
                                metadata_sealed: null != O ? O : null,
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
        },
        WS: function () {
            let e = (0, p.wW)();
            return a.useCallback(
                (t) => {
                    (0, E.Qg)({ ...t, properties: { ...t.properties, impression_id: e() } });
                },
                [e],
            );
        },
        cR: function (e) {
            let { questHomeHero: t, shouldShowQuestHomeHeroContent: l } = e,
                n = l ? _.uF.QUEST_HOME_ENTRYPOINT_THEMED : _.uF.QUEST_HOME_ENTRYPOINT,
                i = a.useMemo(() => {
                    let e = (0, o.fF)(n);
                    return (delete e.row_index, e);
                }, [n]),
                s = a.useCallback(
                    (e) => {
                        null != t && l
                            ? (0, E.Qg)({
                                  adContentId: t.id,
                                  adCreativeType: u.p.QUEST_HOME_HERO,
                                  event: e,
                                  properties: i,
                                  sourceQuestContent: n,
                              })
                            : r.default.track(e, i);
                    },
                    [t, l, n, i],
                ),
                d = a.useCallback(() => {
                    s(T.HAw.QUEST_HOVER);
                }, [s]),
                c = a.useCallback(() => {
                    s(T.HAw.QUEST_HOVER_OFF);
                }, [s]),
                p = a.useCallback(() => {
                    r.default.track(T.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
                }, []),
                C = a.useCallback(() => {
                    r.default.track(T.HAw.QUEST_CONTENT_CLICKED, {
                        is_targeted: !1,
                        ...i,
                        ...(null != t ? { ad_content_id: t.id } : {}),
                    });
                }, [i, t]);
            return a.useMemo(
                () => ({
                    handleMouseEnter: d,
                    handleMouseLeave: c,
                    handleOnboardingPopoutRender: p,
                    handleEntrypointClick: C,
                }),
                [d, c, p, C],
            );
        },
        u0: O,
    },
);
