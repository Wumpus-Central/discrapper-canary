n.r(t),
    n.d(t, {
        formatVideoProgressRatio: () => M,
        loadVideoQuestModal: () => k,
        maybeShowSurveyForQuest: () => P,
        navigateToQuestHome: () => w,
        openAppWithQuest: () => B,
        openDisclosureModal: () => x,
        openQuestInGameRewardModal: () => L,
        openQuestsNitroRewardModal: () => D,
        openQuestsRewardCodeModal: () => O,
        openVideoQuestModal: () => U
    });
var i = n(200651);
n(192379);
var r = n(772848),
    a = n(271579),
    s = n(756647),
    o = n(481060),
    l = n(836768),
    u = n(703656),
    c = n(314897),
    d = n(866960),
    f = n(626135),
    _ = n(954824),
    p = n(617136),
    h = n(569984),
    m = n(497505),
    g = n(918701),
    E = n(184299),
    v = n(862847),
    y = n(5881),
    I = n(492112),
    T = n(61115),
    b = n(150560),
    S = n(46140),
    A = n(981631),
    N = n(49898);
let C = 'in-app',
    R = 'Discord Widget';
function O(e) {
    let { questId: t, location: r, questContentPosition: a, preview: s = !1, previewQuest: l = null } = e;
    (0, o.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('48923'), n.e('99393'), n.e('28044'), n.e('5479')]).then(n.bind(n, 985866));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                questId: t,
                questContentPosition: a,
                location: r,
                preview: s,
                previewQuest: l
            });
    });
}
function D(e, t) {
    (0, o.ZDy)(async () => {
        let { default: r } = await Promise.all([n.e('8016'), n.e('15190')]).then(n.bind(n, 824393));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function L(e, t) {
    (0, o.ZDy)(async () => {
        let { default: r } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function x(e, t) {
    (0, p._3)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        (0, o.ZDy)(async () => {
            let { default: r } = await n.e('4266').then(n.bind(n, 316210));
            return (n) =>
                (0, i.jsx)(r, {
                    ...n,
                    questContent: t.content,
                    quest: e
                });
        });
}
function w(e, t, n) {
    (0, b.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: R,
        utmMediumCurrent: C,
        utmCampaignCurrent: n,
        utmContentCurrent: Object.keys(m.jn).find((e) => m.jn[e] === t)
    });
    let i = null != n ? '#'.concat(n) : '';
    l.Z.setState({ selectedTab: N.GlobalDiscoveryTab.QUESTS }), (0, u.uL)(A.Z5c.QUEST_HOME + i);
}
function P(e) {
    let t = (0, y.T)({ quest: e }),
        n = { location: S.dr.QUESTS_BAR };
    if (!(0, v.j)(n)) return;
    let i = (0, I.Z)({ entityName: e.config.messages.gameTitle });
    t.log('Showing survey '.concat(i.id)),
        (0, T.C)({
            questId: e.id,
            survey: i
        });
}
function M(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function k() {
    return Promise.all([n.e('29976'), n.e('32249'), n.e('25964')]).then(n.bind(n, 536687));
}
function U(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, r.Z)(),
        a = performance.now();
    (0, o.ZDy)(
        async () => {
            let { default: r } = await k();
            return (s) =>
                (0, i.jsx)(r, {
                    ...s,
                    startTime: a,
                    questId: e.id,
                    autoplay: t,
                    videoSessionId: n
                });
        },
        {
            modalKey: (0, g.u7)(e.id),
            backdropStyle: o.fCB.IMMERSIVE,
            onCloseCallback: () => {
                var t, i;
                let r = E.ZP.getState().getVideoProgress(e.id);
                if (null == r) return;
                let a = h.Z.getQuest(e.id);
                null != a && (null === (t = a.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (null === (i = a.userStatus) || void 0 === i ? void 0 : i.completedAt) == null && (0, g.FI)(a, r.maxTimestampSec);
                let s = M(r.maxTimestampSec, r.duration);
                (0, p.dA)({
                    questId: e.id,
                    event: A.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: s,
                        video_timestamp_seconds: r.maxTimestampSec,
                        video_session_id: n
                    }
                }),
                    (0, p.dA)({
                        questId: e.id,
                        event: A.rMx.QUEST_VIDEO_MODAL_CLOSED,
                        properties: {
                            video_progress: s,
                            video_session_id: n,
                            network_connection_speed: d.Z.getEffectiveConnectionSpeed()
                        }
                    });
            }
        }
    );
}
function G(e) {
    var t;
    let n = null === (t = platform.os) || void 0 === t ? void 0 : t.family,
        i = 'quest';
    if ('Android' === n || 'iOS' === n) {
        let t = c.default.getFingerprint(),
            n = (0, a.WS)(),
            r = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, '/quests/').concat(e);
        return (0, a.ZP)(r, {
            utmSource: i,
            fingerprint: t,
            attemptId: n
        });
    }
    return 'discord://';
}
function B(e) {
    let t = G(e),
        n = (0, a.zS)(t);
    null != n &&
        f.default.track(A.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        _.Z.launch(t, (t) => {
            t ||
                (0, u.dL)({
                    pathname: A.Z5c.QUEST_HOME,
                    hash: e
                });
        });
}
