n.r(t),
    n.d(t, {
        loadVideoQuestModal: () => V,
        maybeShowSurveyForQuest: () => B,
        navigateToQuestHome: () => G,
        openAppWithQuest: () => H,
        openDisclosureModal: () => U,
        openQuestInGameRewardModal: () => M,
        openQuestMinorEnrollmentBlockModal: () => j,
        openQuestOrbsRewardModal: () => k,
        openQuestsNitroRewardModal: () => x,
        openQuestsRewardCodeModal: () => L,
        openVideoQuestModal: () => F
    });
var r = n(200651);
n(192379);
var i = n(772848),
    o = n(271579),
    a = n(756647),
    s = n(481060),
    l = n(836768),
    c = n(98278),
    u = n(703656),
    d = n(751648),
    f = n(82856),
    _ = n(314897),
    p = n(626135),
    h = n(954824),
    m = n(617136),
    g = n(497505),
    E = n(918701),
    b = n(862847),
    y = n(5881),
    O = n(492112),
    v = n(61115),
    I = n(150560),
    S = n(46140),
    T = n(981631),
    A = n(49898);
function N(e, t, n) {
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
                N(e, t, n[t]);
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
function L(e) {
    let { questId: t, location: i, questContentPosition: o, preview: a = !1, previewQuest: l = null } = e;
    (0, s.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('37447'), n.e('64838'), n.e('27458'), n.e('78900'), n.e('37560')]).then(n.bind(n, 985866));
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
function x(e, t) {
    var i;
    (null == (i = e.userStatus) ? void 0 : i.claimedAt) == null
        ? (0, s.ZDy)(async () => {
              let { default: i } = await Promise.resolve().then(n.bind(n, 824393));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      P(C({}, n), {
                          quest: e,
                          location: t
                      })
                  );
          })
        : (0, c.$)();
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
    (0, d.S6)(),
        (0, s.ZDy)(
            async () => {
                let { default: i } = await n.e('20565').then(n.bind(n, 383294));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        P(C({}, n), {
                            quest: e,
                            location: t
                        })
                    );
            },
            {
                onCloseCallback() {
                    (0, f.vp)();
                }
            }
        );
}
function j(e) {
    (0, s.ZDy)(async () => {
        let { default: t } = await n.e('58641').then(n.bind(n, 828664));
        return (n) => (0, r.jsx)(t, P(C({}, n), { location: e }));
    });
}
function U(e, t) {
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
                    P(C({}, n), {
                        questContent: t.content,
                        quest: e
                    })
                );
        });
}
function G() {
    let { fromContent: e, questId: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, I.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: D,
        utmMediumCurrent: w,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(g.jn).find((t) => g.jn[t] === e)
    });
    let n = null != t ? '#'.concat(t) : '';
    l.Z.setState({ selectedTab: A.GlobalDiscoveryTab.QUESTS }), (0, u.uL)(T.Z5c.QUEST_HOME + n);
}
function B(e) {
    let t = (0, y.T)({ quest: e }),
        n = { location: S.dr.QUESTS_BAR };
    if (!(0, b.j)(n)) return;
    let r = (0, O.Z)({ entityName: e.config.messages.gameTitle });
    t.log('Showing survey '.concat(r.id)),
        (0, v.C)({
            questId: e.id,
            survey: r
        });
}
function V() {
    return Promise.all([n.e('66816'), n.e('27458'), n.e('32249'), n.e('60333')]).then(n.bind(n, 536687));
}
function F(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, i.Z)();
    (0, s.ZDy)(
        async () => {
            let { default: i } = await V();
            return (o) =>
                (0, r.jsx)(
                    i,
                    P(C({}, o), {
                        openStartClockTime: performance.now(),
                        questId: e.id,
                        autoplay: t,
                        videoSessionId: n
                    })
                );
        },
        {
            modalKey: (0, E.u7)(e.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () =>
                (0, E.Mo)({
                    questId: e.id,
                    videoSessionId: n
                })
        }
    );
}
function Z(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
        r = 'quest';
    if ('Android' === n || 'iOS' === n) {
        let t = _.default.getFingerprint(),
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
function H(e) {
    let t = Z(e),
        n = (0, o.zS)(t);
    null != n &&
        p.default.track(T.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        h.Z.launch(t, (t) => {
            t ||
                (0, u.dL)({
                    pathname: T.Z5c.QUEST_HOME,
                    hash: e
                });
        });
}
