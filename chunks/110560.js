(n.r(t),
    n.d(t, {
        loadVideoQuestModal: () => H,
        maybeShowSurveyForQuest: () => Z,
        navigateToQuestHome: () => F,
        openAppWithQuest: () => K,
        openDisclosureModal: () => V,
        openQuestInGameRewardModal: () => U,
        openQuestMinorEnrollmentBlockModal: () => B,
        openQuestOrbsRewardModal: () => G,
        openQuestsNitroRewardModal: () => j,
        openQuestsRewardCodeModal: () => k,
        openVideoQuestModal: () => Y
    }));
var r = n(255367);
n(73800);
var i = n(772848),
    a = n(271579),
    o = n(756647),
    s = n(481060),
    l = n(37234),
    c = n(836768),
    u = n(98278),
    d = n(703656),
    f = n(314897),
    _ = n(626135),
    p = n(954824),
    h = n(617136),
    m = n(509212),
    g = n(272008),
    E = n(569984),
    b = n(497505),
    y = n(184299),
    O = n(66340),
    v = n(862847),
    I = n(5881),
    T = n(492112),
    S = n(61115),
    A = n(150560),
    N = n(46140),
    C = n(981631),
    R = n(49898);
function P(e, t, n) {
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
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            }));
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function L(e, t) {
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
let x = 'in-app',
    M = 'Discord Widget';
function k(e) {
    let { questId: t, questContent: i, questContentPosition: a, preview: o = !1, previewQuest: l = null, sourceQuestContent: c } = e;
    (0, s.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('37447'), n.e('64838'), n.e('27458'), n.e('17218'), n.e('25053')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(
                e,
                L(w({}, n), {
                    questId: t,
                    questContentPosition: a,
                    questContent: i,
                    preview: o,
                    previewQuest: l,
                    sourceQuestContent: c
                })
            );
    });
}
function j(e, t) {
    var i;
    (null == (i = e.userStatus) ? void 0 : i.claimedAt) == null
        ? (0, s.ZDy)(async () => {
              let { default: i } = await Promise.all([n.e('8016'), n.e('58011')]).then(n.bind(n, 824393));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      L(w({}, n), {
                          quest: e,
                          location: t
                      })
                  );
          })
        : (0, u.$)();
}
function U(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(
                a,
                L(w({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i
                })
            );
    });
}
function G(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await Promise.all([n.e('66317'), n.e('94784')]).then(n.bind(n, 383294));
        return (n) =>
            (0, r.jsx)(
                i,
                L(w({}, n), {
                    quest: e,
                    location: t
                })
            );
    });
}
function B(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e('58641').then(n.bind(n, 828664));
        return (n) =>
            (0, r.jsx)(
                a,
                L(w({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i
                })
            );
    });
}
function V(e, t) {
    ((0, h._3)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent
    }),
        (0, s.ZDy)(async () => {
            let { default: i } = await n.e('4266').then(n.bind(n, 316210));
            return (n) =>
                (0, r.jsx)(
                    i,
                    L(w({}, n), {
                        questContent: t.content,
                        quest: e
                    })
                );
        }));
}
function F() {
    let { fromContent: e, questId: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, A.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: M,
        utmMediumCurrent: x,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(b.jn).find((t) => b.jn[t] === e)
    });
    let n = null != t ? '#'.concat(t) : '';
    (c.Z.setState({ selectedTab: R.GlobalDiscoveryTab.QUESTS }), (0, l.xf)(), (0, d.uL)(C.Z5c.QUEST_HOME + n));
}
function Z(e) {
    let t = (0, I.T)({ quest: e }),
        n = { location: N.dr.QUESTS_BAR };
    if (!(0, v.j)(n)) return;
    let r = (0, T.Z)({ entityName: e.config.messages.gameTitle });
    (t.log('Showing survey '.concat(r.id)),
        (0, S.C)({
            questId: e.id,
            survey: r
        }));
}
function H() {
    return Promise.all([n.e('66816'), n.e('27458'), n.e('32249'), n.e('60333')]).then(n.bind(n, 536687));
}
function Y(e) {
    var t;
    let { quest: n, questContent: a, sourceQuestContent: o, sourceQuestContentCTA: l, autoplay: c = !0, skipEnrollmentCheck: u = !1 } = e,
        d = (0, i.Z)();
    if ((0, O.D)(N.dr.VIDEO_MODAL) && !u && (null == (t = n.userStatus) ? void 0 : t.enrolledAt) == null && !(0, m.zi)(n)) {
        E.Z.isEnrolling(n.id) ||
            (0, g.AH)(n.id, {
                questContent: a,
                questContentCTA: h.jZ.ACCEPT_QUEST,
                sourceQuestContent: o
            });
        let e = y.ZP.getState().getVideoProgress(n.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, g.lx)(n.id),
            _.default.track(C.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, h._b)(o),
                source_quest_content_cta: l,
                video_session_id: d
            }));
    }
    (0, s.ZDy)(
        async () => {
            let { default: e } = await H();
            return (t) =>
                (0, r.jsx)(
                    e,
                    L(w({}, t), {
                        openStartClockTime: performance.now(),
                        questId: n.id,
                        autoplay: c,
                        videoSessionId: d,
                        sourceQuestContent: o
                    })
                );
        },
        {
            modalKey: (0, m.u7)(n.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () =>
                (0, m.Mo)({
                    questId: n.id,
                    sourceQuestContent: o,
                    videoSessionId: d
                })
        }
    );
}
function W(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
        r = 'quest';
    if ('Android' === n || 'iOS' === n) {
        let t = f.default.getFingerprint(),
            n = (0, a.WS)(),
            i = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, '/quests/').concat(e);
        return (0, a.ZP)(i, {
            utmSource: r,
            fingerprint: t,
            attemptId: n
        });
    }
    return 'discord://';
}
function K(e) {
    let t = W(e),
        n = (0, a.zS)(t);
    (null != n &&
        _.default.track(C.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        p.Z.launch(t, (t) => {
            t ||
                (0, d.dL)({
                    pathname: C.Z5c.QUEST_HOME,
                    hash: e
                });
        }));
}
