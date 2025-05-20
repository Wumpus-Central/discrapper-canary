n.r(t),
    n.d(t, {
        loadVideoQuestModal: () => B,
        maybeShowSurveyForQuest: () => G,
        navigateToQuestHome: () => U,
        openAppWithQuest: () => Z,
        openDisclosureModal: () => j,
        openQuestInGameRewardModal: () => x,
        openQuestMinorEnrollmentBlockModal: () => M,
        openQuestOrbsRewardModal: () => k,
        openQuestsNitroRewardModal: () => L,
        openQuestsRewardCodeModal: () => D,
        openVideoQuestModal: () => F
    });
var r = n(255367);
n(73800);
var i = n(772848),
    o = n(271579),
    a = n(756647),
    s = n(481060),
    l = n(37234),
    c = n(836768),
    u = n(98278),
    d = n(703656),
    f = n(314897),
    _ = n(626135),
    p = n(954824),
    h = n(617136),
    m = n(497505),
    g = n(918701),
    E = n(862847),
    b = n(5881),
    y = n(492112),
    O = n(61115),
    v = n(150560),
    I = n(46140),
    S = n(981631),
    T = n(49898);
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
function N(e) {
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
function C(e, t) {
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
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = 'in-app',
    w = 'Discord Widget';
function D(e) {
    let { questId: t, location: i, questContentPosition: o, preview: a = !1, previewQuest: l = null } = e;
    (0, s.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('37447'), n.e('64838'), n.e('88622'), n.e('11186')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(
                e,
                P(N({}, n), {
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
    var i;
    (null == (i = e.userStatus) ? void 0 : i.claimedAt) == null
        ? (0, s.ZDy)(async () => {
              let { default: i } = await Promise.resolve().then(n.bind(n, 824393));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      P(N({}, n), {
                          quest: e,
                          location: t
                      })
                  );
          })
        : (0, u.$)();
}
function x(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(
                i,
                P(N({}, n), {
                    quest: e,
                    location: t
                })
            );
    });
}
function k(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await Promise.all([n.e('66317'), n.e('94784')]).then(n.bind(n, 383294));
        return (n) =>
            (0, r.jsx)(
                i,
                P(N({}, n), {
                    quest: e,
                    location: t
                })
            );
    });
}
function M(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await n.e('58641').then(n.bind(n, 828664));
        return (n) =>
            (0, r.jsx)(
                i,
                P(N({}, n), {
                    quest: e,
                    location: t
                })
            );
    });
}
function j(e, t) {
    (0, h._3)({
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
                    P(N({}, n), {
                        questContent: t.content,
                        quest: e
                    })
                );
        });
}
function U() {
    let { fromContent: e, questId: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, v.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: w,
        utmMediumCurrent: R,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(m.jn).find((t) => m.jn[t] === e)
    });
    let n = null != t ? '#'.concat(t) : '';
    c.Z.setState({ selectedTab: T.GlobalDiscoveryTab.QUESTS }), (0, l.xf)(), (0, d.uL)(S.Z5c.QUEST_HOME + n);
}
function G(e) {
    let t = (0, b.T)({ quest: e }),
        n = { location: I.dr.QUESTS_BAR };
    if (!(0, E.j)(n)) return;
    let r = (0, y.Z)({ entityName: e.config.messages.gameTitle });
    t.log('Showing survey '.concat(r.id)),
        (0, O.C)({
            questId: e.id,
            survey: r
        });
}
function B() {
    return Promise.all([n.e('66816'), n.e('32249'), n.e('58914')]).then(n.bind(n, 536687));
}
function F(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, i.Z)();
    (0, s.ZDy)(
        async () => {
            let { default: i } = await B();
            return (o) =>
                (0, r.jsx)(
                    i,
                    P(N({}, o), {
                        openStartClockTime: performance.now(),
                        questId: e.id,
                        autoplay: t,
                        videoSessionId: n
                    })
                );
        },
        {
            modalKey: (0, g.u7)(e.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () =>
                (0, g.Mo)({
                    questId: e.id,
                    videoSessionId: n
                })
        }
    );
}
function V(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
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
function Z(e) {
    let t = V(e),
        n = (0, o.zS)(t);
    null != n &&
        _.default.track(S.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        p.Z.launch(t, (t) => {
            t ||
                (0, d.dL)({
                    pathname: S.Z5c.QUEST_HOME,
                    hash: e
                });
        });
}
