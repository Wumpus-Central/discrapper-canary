"use strict";
n.d(t, { Ii: () => A, Ut: () => g, cR: () => I, u0: () => E });
var r = n(64700),
    i = n(835245),
    s = n(323889),
    a = n(345353),
    o = n(69114),
    l = n(954571),
    u = n(723702),
    c = n(859703),
    d = n(341915),
    _ = n(710969),
    f = n(561844),
    p = n(590202),
    h = n(971649),
    m = n(652215);
function E() {
    let e = (0, h.vU)();
    return r.useCallback(
        (t) => {
            (0, f.av)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function g() {
    let e = E();
    return r.useCallback(
        (t) => {
            let {
                    questId: n,
                    questContent: r,
                    questContentCTA: s,
                    questContentPosition: l,
                    questContentRowIndex: d,
                    trackGuildAndChannelMetadata: f,
                    sourceQuestContent: h,
                } = t,
                E = c.A.getQuest(n),
                g = (0, _.Li)(r),
                A = (0, _.L4)(r),
                I = (0, _.yI)(r, n),
                T = (0, _.Gp)(r, n);
            (0, a.N)((0, p.jO)(r)).then((t) => {
                e({
                    questId: n,
                    event: m.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, p.fF)(r, l, d),
                        ...(0, o.A)(),
                        cta_name: s,
                        quest_status: null != E ? (0, p.NI)(E) : null,
                        click_id: (0, i.A)(),
                        apple_advertising_id: null != t && (0, u.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, u.isAndroid)() ? t.advertisingId : null,
                        metadata_raw: null != g ? g : null,
                        metadata_sealed: null != A ? A : null,
                        traffic_metadata_raw: null != I ? I : null,
                        traffic_metadata_sealed: null != T ? T : null,
                    },
                    trackGuildAndChannelMetadata: f,
                    shouldExtendSession: (0, _.xn)(r),
                    sourceQuestContent: h,
                });
            });
        },
        [e],
    );
}
function A(e, t) {
    r.useEffect(() => {
        (0, f.DZ)(t, e);
    }, [e, t]);
}
function I(e) {
    let { questHomeHeroConfig: t, shouldShowQuestHomeHeroContent: n } = e,
        i = n ? d.uF.QUEST_HOME_ENTRYPOINT_THEMED : d.uF.QUEST_HOME_ENTRYPOINT,
        a = r.useMemo(() => {
            let e = (0, p.fF)(i);
            return delete e.row_index, e;
        }, [i]),
        o = r.useCallback(
            (e) => {
                null != t && n
                    ? (0, f.Qg)({
                          adContentId: t.campaignId,
                          adCreativeType: s.p.QUEST_HOME_HERO,
                          event: e,
                          properties: a,
                          sourceQuestContent: i,
                      })
                    : l.default.track(e, a);
            },
            [t, n, i, a],
        ),
        u = r.useCallback(() => {
            o(m.HAw.QUEST_HOVER);
        }, [o]),
        c = r.useCallback(() => {
            o(m.HAw.QUEST_HOVER_OFF);
        }, [o]),
        _ = r.useCallback(() => {
            l.default.track(m.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []);
    return r.useMemo(() => ({ handleMouseEnter: u, handleMouseLeave: c, handleOnboardingPopoutRender: _ }), [u, c, _]);
}
