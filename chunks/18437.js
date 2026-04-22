a.d(t, { Ii: () => b, Ut: () => f, cR: () => x, u0: () => g });
var n = a(64700),
    r = a(835245),
    i = a(323889),
    l = a(345353),
    o = a(69114),
    s = a(954571),
    d = a(723702),
    c = a(859703),
    u = a(341915),
    p = a(710969),
    m = a(561844),
    h = a(590202),
    v = a(971649),
    _ = a(652215);
function g() {
    let e = (0, v.vU)();
    return n.useCallback(
        (t) => {
            (0, m.av)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function f() {
    let e = g();
    return n.useCallback(
        (t) => {
            let {
                    questId: a,
                    questContent: n,
                    questContentCTA: i,
                    questContentPosition: s,
                    questContentRowIndex: u,
                    trackGuildAndChannelMetadata: m,
                    sourceQuestContent: v,
                } = t,
                g = c.A.getQuest(a),
                f = (0, p.L4)(n),
                b = (0, p.yI)(n, a),
                x = (0, p.Gp)(n, a);
            (0, l.N)((0, h.jO)(n)).then((t) => {
                e({
                    questId: a,
                    event: _.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, h.fF)(n, s, u),
                        ...(0, o.A)(),
                        cta_name: i,
                        quest_status: null != g ? (0, h.NI)(g) : null,
                        click_id: (0, r.A)(),
                        apple_advertising_id: null != t && (0, d.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, d.isAndroid)() ? t.advertisingId : null,
                        metadata_sealed: null != f ? f : null,
                        traffic_metadata_raw: null != b ? b : null,
                        traffic_metadata_sealed: null != x ? x : null,
                    },
                    trackGuildAndChannelMetadata: m,
                    shouldExtendSession: (0, p.xn)(n),
                    sourceQuestContent: v,
                });
            });
        },
        [e],
    );
}
function b(e, t) {
    n.useEffect(() => {
        (0, m.DZ)(t, e);
    }, [e, t]);
}
function x(e) {
    let { questHomeHero: t, shouldShowQuestHomeHeroContent: a } = e,
        r = a ? u.uF.QUEST_HOME_ENTRYPOINT_THEMED : u.uF.QUEST_HOME_ENTRYPOINT,
        l = n.useMemo(() => {
            let e = (0, h.fF)(r);
            return delete e.row_index, e;
        }, [r]),
        o = n.useCallback(
            (e) => {
                null != t && a
                    ? (0, m.Qg)({
                          adContentId: t.id,
                          adCreativeType: i.p.QUEST_HOME_HERO,
                          event: e,
                          properties: l,
                          sourceQuestContent: r,
                      })
                    : s.default.track(e, l);
            },
            [t, a, r, l],
        ),
        d = n.useCallback(() => {
            o(_.HAw.QUEST_HOVER);
        }, [o]),
        c = n.useCallback(() => {
            o(_.HAw.QUEST_HOVER_OFF);
        }, [o]),
        p = n.useCallback(() => {
            s.default.track(_.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
        }, []);
    return n.useMemo(() => ({ handleMouseEnter: d, handleMouseLeave: c, handleOnboardingPopoutRender: p }), [d, c, p]);
}
