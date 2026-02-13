"use strict";
n.d(t, { Ii: () => I, Ut: () => A, cR: () => T, u0: () => E });
var r = n(64700),
    i = n(835245),
    a = n(323889),
    s = n(345353),
    o = n(69114),
    l = n(954571),
    u = n(723702),
    c = n(859703),
    d = n(341915),
    _ = n(710969),
    f = n(561844),
    h = n(590202),
    p = n(971649),
    g = n(652215);
function E() {
    let e = (0, p.vU)();
    return r.useCallback(
        (t) => {
            (0, f.av)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function A() {
    let e = E();
    return r.useCallback(
        (t) => {
            let {
                    questId: n,
                    questContent: r,
                    questContentCTA: a,
                    questContentPosition: l,
                    questContentRowIndex: d,
                    trackGuildAndChannelMetadata: f,
                    sourceQuestContent: p,
                } = t,
                E = c.A.getQuest(n),
                A = (0, _.Li)(r),
                I = (0, _.L4)(r),
                T = (0, _.yI)(r, n),
                y = (0, _.Gp)(r, n);
            (0, s.N)((0, h.jO)(r)).then((t) => {
                e({
                    questId: n,
                    event: g.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, h.fF)(r, l, d),
                        ...(0, o.A)(),
                        cta_name: a,
                        quest_status: null != E ? (0, h.NI)(E) : null,
                        click_id: (0, i.A)(),
                        apple_advertising_id: null != t && (0, u.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, u.isAndroid)() ? t.advertisingId : null,
                        metadata_raw: null != A ? A : null,
                        metadata_sealed: null != I ? I : null,
                        traffic_metadata_raw: null != T ? T : null,
                        traffic_metadata_sealed: null != y ? y : null,
                    },
                    trackGuildAndChannelMetadata: f,
                    shouldExtendSession: (0, _.xn)(r),
                    sourceQuestContent: p,
                });
            });
        },
        [e],
    );
}
function I(e, t) {
    r.useEffect(() => {
        (0, f.DZ)(t, e);
    }, [e, t]);
}
function T(e) {
    let { questHomeHeroConfig: t, shouldShowQuestHomeHeroContent: n } = e,
        i = n ? d.uF.QUEST_HOME_ENTRYPOINT_THEMED : d.uF.QUEST_HOME_ENTRYPOINT,
        s = r.useMemo(() => {
            let e = (0, h.fF)(i);
            return delete e.row_index, e;
        }, [i]),
        o = r.useCallback(
            (e) => {
                null != t && n
                    ? (0, f.Qg)({
                          adContentId: t.campaignId,
                          adCreativeType: a.p.QUEST_HOME_HEROES,
                          event: e,
                          properties: s,
                          sourceQuestContent: i,
                      })
                    : l.default.track(e, s);
            },
            [t, n, i, s],
        ),
        u = r.useCallback(() => {
            o(g.HAw.QUEST_HOVER);
        }, [o]),
        c = r.useCallback(() => {
            o(g.HAw.QUEST_HOVER_OFF);
        }, [o]),
        _ = r.useCallback(() => {
            l.default.track(g.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []);
    return r.useMemo(() => ({ handleMouseEnter: u, handleMouseLeave: c, handleOnboardingPopoutRender: _ }), [u, c, _]);
}
