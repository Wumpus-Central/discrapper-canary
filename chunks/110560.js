n.r(t),
    n.d(t, {
        loadVideoQuestModal: () => Y,
        maybeShowSurveyForQuest: () => H,
        navigateToQuestHome: () => F,
        openAppWithQuest: () => z,
        openDisclosureModal: () => V,
        openPushToPhoneModal: () => q,
        openQuestInGameRewardModal: () => G,
        openQuestMinorEnrollmentBlockModal: () => Z,
        openQuestOrbsRewardModal: () => B,
        openQuestsNitroRewardModal: () => U,
        openQuestsRewardCodeModal: () => k,
        openVideoQuestModal: () => W,
    });
var r = n(951288);
n(647438);
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
    O = n(530691),
    v = n(66340),
    I = n(862847),
    T = n(5881),
    S = n(492112),
    A = n(61115),
    C = n(150560),
    N = n(46140),
    R = n(981631),
    P = n(49898);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = "in-app",
    M = "Discord Widget";
function k(e) {
    let {
        questId: t,
        questContent: i,
        questContentPosition: a,
        preview: o = !1,
        previewQuest: l = null,
        sourceQuestContent: c,
    } = e;
    (0, s.ZDy)(async () => {
        let { default: e } = await n.e("61624").then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(
                e,
                L(D({}, n), {
                    questId: t,
                    questContentPosition: a,
                    questContent: i,
                    preview: o,
                    previewQuest: l,
                    sourceQuestContent: c,
                }),
            );
    });
}
function U(e, t) {
    var i;
    (null == (i = e.userStatus) ? void 0 : i.claimedAt) == null
        ? (0, s.ZDy)(async () => {
              let { default: i } = await n.e("838").then(n.bind(n, 824393));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      L(D({}, n), {
                          quest: e,
                          location: t,
                      }),
                  );
          })
        : (0, u.$)();
}
function G(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("88938").then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(
                a,
                L(D({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function B(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await n.e("20565").then(n.bind(n, 383294));
        return (n) =>
            (0, r.jsx)(
                i,
                L(D({}, n), {
                    quest: e,
                    location: t,
                }),
            );
    });
}
function Z(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("58641").then(n.bind(n, 828664));
        return (n) =>
            (0, r.jsx)(
                a,
                L(D({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function V(e, t) {
    (0, h._3)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, s.ZDy)(async () => {
            let { default: i } = await n.e("4266").then(n.bind(n, 316210));
            return (n) =>
                (0, r.jsx)(
                    i,
                    L(D({}, n), {
                        questContent: t.content,
                        quest: e,
                    }),
                );
        });
}
function F() {
    let { fromContent: e, questId: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, C.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: M,
        utmMediumCurrent: j,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(b.jn).find((t) => b.jn[t] === e),
    });
    let n = null != t ? "#".concat(t) : "";
    c.Z.setState({ selectedTab: P.GlobalDiscoveryTab.QUESTS }), (0, l.xf)(), (0, d.uL)(R.Z5c.QUEST_HOME + n);
}
function H(e) {
    let t = (0, T.T)({ quest: e }),
        n = { location: N.dr.QUESTS_BAR };
    if (!(0, I.j)(n)) return;
    let r = (0, S.Z)({ entityName: e.config.messages.gameTitle });
    t.log("Showing survey ".concat(r.id)),
        (0, A.C)({
            questId: e.id,
            survey: r,
        });
}
function Y() {
    return Promise.all([n.e("66816"), n.e("32249")]).then(n.bind(n, 536687));
}
function W(e) {
    var t;
    let {
        quest: n,
        questContent: a,
        sourceQuestContent: o,
        sourceQuestContentCTA: l,
        autoplay: c = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, m.HJ)(n)) {
        let e = n.config.features.includes(N.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE),
            { enabled: t } = O.S.getCurrentConfig({ location: N.dr.VIDEO_MODAL }, { autoTrackExposure: e });
        if (t && e) return void q(n);
    }
    let d = (0, i.Z)();
    if (
        (0, v.D)(N.dr.VIDEO_MODAL) &&
        !u &&
        (null == (t = n.userStatus) ? void 0 : t.enrolledAt) == null &&
        !(0, m.zi)(n)
    ) {
        E.Z.isEnrolling(n.id) ||
            (0, g.AH)(n.id, {
                questContent: a,
                questContentCTA: h.jZ.ACCEPT_QUEST,
                sourceQuestContent: o,
            });
        let e = y.ZP.getState().getVideoProgress(n.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, g.lx)(n.id),
            _.default.track(R.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, h._b)(o),
                source_quest_content_cta: l,
                video_session_id: d,
            }));
    }
    (0, s.ZDy)(
        async () => {
            let { default: e } = await Y();
            return (t) =>
                (0, r.jsx)(
                    e,
                    L(D({}, t), {
                        openStartClockTime: performance.now(),
                        questId: n.id,
                        autoplay: c,
                        videoSessionId: d,
                        sourceQuestContent: o,
                    }),
                );
        },
        {
            modalKey: (0, m.u7)(n.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () =>
                (0, m.Mo)({
                    questId: n.id,
                    sourceQuestContent: o,
                    videoSessionId: d,
                }),
        },
    );
}
function K(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
        r = "quest";
    if ("Android" === n || "iOS" === n) {
        let t = f.default.getFingerprint(),
            n = (0, a.WS)(),
            i = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/quests/").concat(e);
        return (0, a.ZP)(i, {
            utmSource: r,
            fingerprint: t,
            attemptId: n,
        });
    }
    return "discord://";
}
function z(e) {
    let t = K(e),
        n = (0, a.zS)(t);
    null != n &&
        _.default.track(R.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.Z.launch(t, (t) => {
            t ||
                (0, d.dL)({
                    pathname: R.Z5c.QUEST_HOME,
                    hash: e,
                });
        });
}
function q(e) {
    (0, s.ZDy)(async () => {
        let { default: t } = await Promise.all([n.e("20193"), n.e("33628")]).then(n.bind(n, 570387));
        return (n) =>
            (0, r.jsx)(
                t,
                L(D({}, n), {
                    questId: e.id,
                    questName: e.config.messages.questName,
                }),
            );
    });
}
