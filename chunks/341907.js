n.r(t),
    n.d(t, {
        formatVideoProgressRatio: () => V,
        loadVideoQuestModal: () => Z,
        maybeShowSurveyForQuest: () => F,
        navigateToQuestHome: () => B,
        openAppWithQuest: () => Y,
        openDisclosureModal: () => G,
        openQuestInGameRewardModal: () => k,
        openQuestOrbsRewardModal: () => U,
        openQuestsNitroRewardModal: () => j,
        openQuestsRewardCodeModal: () => M,
        openVideoQuestModal: () => H
    });
var r = n(200651);
n(192379);
var i = n(772848),
    o = n(271579),
    a = n(756647),
    s = n(481060),
    l = n(836768),
    c = n(703656),
    u = n(751648),
    d = n(82856),
    f = n(314897),
    p = n(866960),
    _ = n(626135),
    h = n(954824),
    m = n(617136),
    g = n(569984),
    E = n(497505),
    v = n(918701),
    b = n(184299),
    y = n(862847),
    O = n(5881),
    S = n(492112),
    I = n(61115),
    T = n(150560),
    N = n(46140),
    A = n(981631),
    C = n(49898);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = 'in-app',
    x = 'Discord Widget';
function M(e) {
    let { questId: t, location: i, questContentPosition: o, preview: a = !1, previewQuest: l = null } = e;
    (0, s.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('99393'), n.e('48923'), n.e('78226')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(
                e,
                w(P({}, n), {
                    questId: t,
                    questContentPosition: o,
                    location: i,
                    preview: a,
                    previewQuest: l
                })
            );
    });
}
function j(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await Promise.all([n.e('8016'), n.e('85089')]).then(n.bind(n, 824393));
        return (n) =>
            (0, r.jsx)(
                i,
                w(P({}, n), {
                    quest: e,
                    location: t
                })
            );
    });
}
function k(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(
                i,
                w(P({}, n), {
                    quest: e,
                    location: t
                })
            );
    });
}
function U(e, t) {
    (0, u.S6)(),
        (0, s.ZDy)(
            async () => {
                let { default: i } = await n.e('20565').then(n.bind(n, 383294));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        w(P({}, n), {
                            quest: e,
                            location: t
                        })
                    );
            },
            {
                onCloseCallback() {
                    (0, d.c9)();
                }
            }
        );
}
function G(e, t) {
    (0, m._3)({
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
                    w(P({}, n), {
                        questContent: t.content,
                        quest: e
                    })
                );
        });
}
function B() {
    let { fromContent: e, questId: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, T.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: x,
        utmMediumCurrent: L,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(E.jn).find((t) => E.jn[t] === e)
    });
    let n = null != t ? '#'.concat(t) : '';
    l.Z.setState({ selectedTab: C.GlobalDiscoveryTab.QUESTS }), (0, c.uL)(A.Z5c.QUEST_HOME + n);
}
function F(e) {
    let t = (0, O.T)({ quest: e }),
        n = { location: N.dr.QUESTS_BAR };
    if (!(0, y.j)(n)) return;
    let r = (0, S.Z)({ entityName: e.config.messages.gameTitle });
    t.log('Showing survey '.concat(r.id)),
        (0, I.C)({
            questId: e.id,
            survey: r
        });
}
function V(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function Z() {
    return Promise.all([n.e('29976'), n.e('32249'), n.e('56627')]).then(n.bind(n, 536687));
}
function H(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, i.Z)(),
        o = performance.now();
    (0, s.ZDy)(
        async () => {
            let { default: i } = await Z();
            return (a) =>
                (0, r.jsx)(
                    i,
                    w(P({}, a), {
                        startTime: o,
                        questId: e.id,
                        autoplay: t,
                        videoSessionId: n
                    })
                );
        },
        {
            modalKey: (0, v.u7)(e.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () => {
                var t, r;
                let i = b.ZP.getState().getVideoProgress(e.id);
                if (null == i) return;
                let o = g.Z.getQuest(e.id);
                null != o && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (null === (r = o.userStatus) || void 0 === r ? void 0 : r.completedAt) == null && (0, v.FI)(o, i.maxTimestampSec);
                let a = V(i.maxTimestampSec, i.duration);
                (0, m.dA)({
                    questId: e.id,
                    event: A.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: a,
                        video_timestamp_seconds: i.maxTimestampSec,
                        video_session_id: n
                    }
                }),
                    (0, m.dA)({
                        questId: e.id,
                        event: A.rMx.QUEST_VIDEO_MODAL_CLOSED,
                        properties: {
                            video_progress: a,
                            video_session_id: n,
                            network_connection_speed: p.Z.getEffectiveConnectionSpeed()
                        }
                    });
            }
        }
    );
}
function W(e) {
    var t;
    let n = null === (t = platform.os) || void 0 === t ? void 0 : t.family,
        r = 'quest';
    if ('Android' === n || 'iOS' === n) {
        let t = f.default.getFingerprint(),
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
function Y(e) {
    let t = W(e),
        n = (0, o.zS)(t);
    null != n &&
        _.default.track(A.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        h.Z.launch(t, (t) => {
            t ||
                (0, c.dL)({
                    pathname: A.Z5c.QUEST_HOME,
                    hash: e
                });
        });
}
