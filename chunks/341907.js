n.r(t),
    n.d(t, {
        loadVideoQuestModal: () => V,
        maybeShowSurveyForQuest: () => F,
        navigateToQuestHome: () => B,
        openAppWithQuest: () => Y,
        openDisclosureModal: () => G,
        openQuestInGameRewardModal: () => M,
        openQuestMinorEnrollmentBlockModal: () => U,
        openQuestOrbsRewardModal: () => j,
        openQuestsNitroRewardModal: () => k,
        openQuestsRewardCodeModal: () => x,
        openVideoQuestModal: () => Z
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
    f = n(751648),
    _ = n(82856),
    p = n(314897),
    h = n(626135),
    m = n(954824),
    g = n(617136),
    E = n(497505),
    b = n(918701),
    y = n(862847),
    O = n(5881),
    v = n(492112),
    I = n(61115),
    S = n(150560),
    T = n(46140),
    A = n(981631),
    N = n(49898);
function C(e, t, n) {
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
                C(e, t, n[t]);
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
function w(e, t) {
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
let D = 'in-app',
    L = 'Discord Widget';
function x(e) {
    let { questId: t, location: i, questContentPosition: o, preview: a = !1, previewQuest: l = null } = e;
    (0, s.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('37447'), n.e('64838'), n.e('27458'), n.e('78900'), n.e('37560')]).then(n.bind(n, 985866));
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
function k(e, t) {
    var i;
    (null == (i = e.userStatus) ? void 0 : i.claimedAt) == null
        ? (0, s.ZDy)(async () => {
              let { default: i } = await Promise.resolve().then(n.bind(n, 824393));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      w(P({}, n), {
                          quest: e,
                          location: t
                      })
                  );
          })
        : (0, u.$)();
}
function M(e, t) {
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
function j(e, t) {
    (0, f.S6)(),
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
                    (0, _.vp)();
                }
            }
        );
}
function U(e) {
    (0, s.ZDy)(async () => {
        let { default: t } = await n.e('58641').then(n.bind(n, 828664));
        return (n) => (0, r.jsx)(t, w(P({}, n), { location: e }));
    });
}
function G(e, t) {
    (0, g._3)({
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
    (0, S.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: L,
        utmMediumCurrent: D,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(E.jn).find((t) => E.jn[t] === e)
    });
    let n = null != t ? '#'.concat(t) : '';
    c.Z.setState({ selectedTab: N.GlobalDiscoveryTab.QUESTS }), (0, l.xf)(), (0, d.uL)(A.Z5c.QUEST_HOME + n);
}
function F(e) {
    let t = (0, O.T)({ quest: e }),
        n = { location: T.dr.QUESTS_BAR };
    if (!(0, y.j)(n)) return;
    let r = (0, v.Z)({ entityName: e.config.messages.gameTitle });
    t.log('Showing survey '.concat(r.id)),
        (0, I.C)({
            questId: e.id,
            survey: r
        });
}
function V() {
    return Promise.all([n.e('66816'), n.e('27458'), n.e('32249'), n.e('60333')]).then(n.bind(n, 536687));
}
function Z(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, i.Z)();
    (0, s.ZDy)(
        async () => {
            let { default: i } = await V();
            return (o) =>
                (0, r.jsx)(
                    i,
                    w(P({}, o), {
                        openStartClockTime: performance.now(),
                        questId: e.id,
                        autoplay: t,
                        videoSessionId: n
                    })
                );
        },
        {
            modalKey: (0, b.u7)(e.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () =>
                (0, b.Mo)({
                    questId: e.id,
                    videoSessionId: n
                })
        }
    );
}
function H(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
        r = 'quest';
    if ('Android' === n || 'iOS' === n) {
        let t = p.default.getFingerprint(),
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
    let t = H(e),
        n = (0, o.zS)(t);
    null != n &&
        h.default.track(A.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        m.Z.launch(t, (t) => {
            t ||
                (0, d.dL)({
                    pathname: A.Z5c.QUEST_HOME,
                    hash: e
                });
        });
}
