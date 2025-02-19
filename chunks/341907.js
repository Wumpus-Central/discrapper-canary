n.r(t),
    n.d(t, {
        formatVideoProgressRatio: () => G,
        loadVideoQuestModal: () => B,
        maybeShowSurveyForQuest: () => U,
        navigateToQuestHome: () => j,
        openAppWithQuest: () => V,
        openDisclosureModal: () => k,
        openQuestInGameRewardModal: () => M,
        openQuestsNitroRewardModal: () => L,
        openQuestsRewardCodeModal: () => x,
        openVideoQuestModal: () => Z
    });
var r = n(200651);
n(192379);
var i = n(772848),
    o = n(271579),
    a = n(756647),
    s = n(481060),
    l = n(836768),
    c = n(703656),
    u = n(314897),
    d = n(866960),
    f = n(626135),
    p = n(954824),
    _ = n(617136),
    h = n(569984),
    m = n(497505),
    g = n(918701),
    E = n(184299),
    v = n(862847),
    b = n(5881),
    y = n(492112),
    O = n(61115),
    S = n(150560),
    I = n(46140),
    T = n(981631),
    N = n(49898);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = 'in-app',
    D = 'Discord Widget';
function x(e) {
    let { questId: t, location: i, questContentPosition: o, preview: a = !1, previewQuest: l = null } = e;
    (0, s.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('99393'), n.e('48923'), n.e('78226')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(
                e,
                P(C({}, n), {
                    questId: t,
                    questContentPosition: o,
                    location: i,
                    preview: a,
                    previewQuest: l
                })
            );
    });
}
function L(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await Promise.all([n.e('8016'), n.e('85089')]).then(n.bind(n, 824393));
        return (n) =>
            (0, r.jsx)(
                i,
                P(C({}, n), {
                    quest: e,
                    location: t
                })
            );
    });
}
function M(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(
                i,
                P(C({}, n), {
                    quest: e,
                    location: t
                })
            );
    });
}
function k(e, t) {
    (0, _._3)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        (0, s.ZDy)(async () => {
            let { default: i } = await n.e('4266').then(n.bind(n, 316210));
            return (n) =>
                (0, r.jsx)(
                    i,
                    P(C({}, n), {
                        questContent: t.content,
                        quest: e
                    })
                );
        });
}
function j() {
    let { fromContent: e, questId: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, S.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: D,
        utmMediumCurrent: w,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(m.jn).find((t) => m.jn[t] === e)
    });
    let n = null != t ? '#'.concat(t) : '';
    l.Z.setState({ selectedTab: N.GlobalDiscoveryTab.QUESTS }), (0, c.uL)(T.Z5c.QUEST_HOME + n);
}
function U(e) {
    let t = (0, b.T)({ quest: e }),
        n = { location: I.dr.QUESTS_BAR };
    if (!(0, v.j)(n)) return;
    let r = (0, y.Z)({ entityName: e.config.messages.gameTitle });
    t.log('Showing survey '.concat(r.id)),
        (0, O.C)({
            questId: e.id,
            survey: r
        });
}
function G(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function B() {
    return Promise.all([n.e('29976'), n.e('32249'), n.e('56627')]).then(n.bind(n, 536687));
}
function Z(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, i.Z)(),
        o = performance.now();
    (0, s.ZDy)(
        async () => {
            let { default: i } = await B();
            return (a) =>
                (0, r.jsx)(
                    i,
                    P(C({}, a), {
                        startTime: o,
                        questId: e.id,
                        autoplay: t,
                        videoSessionId: n
                    })
                );
        },
        {
            modalKey: (0, g.u7)(e.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () => {
                var t, r;
                let i = E.ZP.getState().getVideoProgress(e.id);
                if (null == i) return;
                let o = h.Z.getQuest(e.id);
                null != o && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (null === (r = o.userStatus) || void 0 === r ? void 0 : r.completedAt) == null && (0, g.FI)(o, i.maxTimestampSec);
                let a = G(i.maxTimestampSec, i.duration);
                (0, _.dA)({
                    questId: e.id,
                    event: T.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: a,
                        video_timestamp_seconds: i.maxTimestampSec,
                        video_session_id: n
                    }
                }),
                    (0, _.dA)({
                        questId: e.id,
                        event: T.rMx.QUEST_VIDEO_MODAL_CLOSED,
                        properties: {
                            video_progress: a,
                            video_session_id: n,
                            network_connection_speed: d.Z.getEffectiveConnectionSpeed()
                        }
                    });
            }
        }
    );
}
function F(e) {
    var t;
    let n = null === (t = platform.os) || void 0 === t ? void 0 : t.family,
        r = 'quest';
    if ('Android' === n || 'iOS' === n) {
        let t = u.default.getFingerprint(),
            n = (0, o.WS)(),
            i = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, '/quests/').concat(e);
        return (0, o.ZP)(i, {
            utmSource: r,
            fingerprint: t,
            attemptId: n
        });
    }
    return 'discord://';
}
function V(e) {
    let t = F(e),
        n = (0, o.zS)(t);
    null != n &&
        f.default.track(T.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        p.Z.launch(t, (t) => {
            t ||
                (0, c.dL)({
                    pathname: T.Z5c.QUEST_HOME,
                    hash: e
                });
        });
}
