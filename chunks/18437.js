"use strict";
n.d(t, { Ii: () => m, Ut: () => h, u0: () => p });
var r = n(64700),
    i = n(835245),
    a = n(345353),
    s = n(69114),
    o = n(723702),
    l = n(859703),
    u = n(710969),
    c = n(561844),
    d = n(590202),
    _ = n(971649),
    f = n(652215);
function p() {
    let e = (0, _.vU)();
    return r.useCallback(
        (t) => {
            (0, c.av)({ ...t, properties: { ...t.properties, impression_id: e?.getId() } });
        },
        [e],
    );
}
function h() {
    let e = p();
    return r.useCallback(
        (t) => {
            let {
                    questId: n,
                    questContent: r,
                    questContentCTA: c,
                    questContentPosition: _,
                    questContentRowIndex: p,
                    trackGuildAndChannelMetadata: h,
                    sourceQuestContent: m,
                } = t,
                g = l.A.getQuest(n),
                E = (0, u.Li)(r),
                A = (0, u.L4)(r),
                I = (0, u.yI)(r, n),
                T = (0, u.Gp)(r, n);
            (0, a.N)((0, d.jO)(r)).then((t) => {
                e({
                    questId: n,
                    event: f.HAw.QUEST_CONTENT_CLICKED,
                    properties: {
                        ...(0, d.fF)(r, _, p),
                        ...(0, s.A)(),
                        cta_name: c,
                        quest_status: null != g ? (0, d.NI)(g) : null,
                        click_id: (0, i.A)(),
                        apple_advertising_id: null != t && (0, o.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, o.isAndroid)() ? t.advertisingId : null,
                        metadata_raw: null != E ? E : null,
                        metadata_sealed: null != A ? A : null,
                        traffic_metadata_raw: null != I ? I : null,
                        traffic_metadata_sealed: null != T ? T : null,
                    },
                    trackGuildAndChannelMetadata: h,
                    shouldExtendSession: (0, u.xn)(r),
                    sourceQuestContent: m,
                });
            });
        },
        [e],
    );
}
function m(e, t) {
    r.useEffect(() => {
        (0, c.DZ)(t, e);
    }, [e, t]);
}
