n.r(t),
    n.d(t, {
        enrollAndStartVideoQuestWithErrorHandling: () => er,
        getPrimaryCtaIcon: () => ei,
        loadVideoQuestModal: () => X,
        maybeShowSurveyForQuest: () => q,
        navigateToQuestHome: () => K,
        openAppWithQuest: () => $,
        openAppWithQuestPreview: () => et,
        openDisclosureModal: () => W,
        openPushToPhoneModal: () => en,
        openQuestCollectibleRewardModal: () => H,
        openQuestInGameRewardModal: () => F,
        openQuestMinorEnrollmentBlockModal: () => Y,
        openQuestOrbsRewardModal: () => V,
        openQuestsNitroRewardModal: () => Z,
        openQuestsRewardCodeModal: () => B,
        openVideoQuestModal: () => Q,
    });
var r = n(951288);
n(647438);
var i = n(772848),
    a = n(271579),
    o = n(756647),
    s = n(481060),
    l = n(668781),
    c = n(836768),
    u = n(98278),
    d = n(703656),
    f = n(342386),
    _ = n(314897),
    p = n(626135),
    h = n(954824),
    m = n(22095),
    g = n(617136),
    E = n(509212),
    b = n(569984),
    y = n(497505),
    O = n(184299),
    v = n(66340),
    I = n(862847),
    T = n(5881),
    S = n(323811),
    A = n(492112),
    C = n(566078),
    N = n(61115),
    R = n(150560),
    P = n(46140),
    D = n(981631),
    w = n(49898),
    x = n(388032);
function L(e, t, n) {
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
function M(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = "in-app",
    G = "Discord Widget";
function B(e) {
    let {
        quest: t,
        questContent: i,
        questContentPosition: a,
        preview: o = !1,
        previewQuest: l = null,
        sourceQuestContent: c,
    } = e;
    (0, s.ZDy)(async () => {
        let e = (0, S.i)("openQuestsRewardCodeModal"),
            s = C.r.build(t.config).rewardPlatforms.length > 1;
        if (e && !s) {
            let { default: e } = await Promise.all([n.e("64838"), n.e("50433"), n.e("96861")]).then(n.bind(n, 188209));
            return (n) =>
                (0, r.jsx)(
                    e,
                    k(M({}, n), {
                        initialQuest: t,
                        preview: o,
                        sourceQuestContent: c,
                        questContentPosition: a,
                    }),
                );
        }
        let { default: u } = await Promise.all([n.e("64838"), n.e("50433"), n.e("61624")]).then(n.bind(n, 985866));
        return (e) =>
            (0, r.jsx)(
                u,
                k(M({}, e), {
                    questId: t.id,
                    questContentPosition: a,
                    questContent: i,
                    preview: o,
                    previewQuest: l,
                    sourceQuestContent: c,
                }),
            );
    });
}
function Z(e, t) {
    var i;
    (null == (i = e.userStatus) ? void 0 : i.claimedAt) == null
        ? (0, s.ZDy)(async () => {
              let { default: i } = await n.e("838").then(n.bind(n, 824393));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      k(M({}, n), {
                          quest: e,
                          location: t,
                      }),
                  );
          })
        : (0, u.$)();
}
function F(e, t, i) {
    (0, s.ZDy)(async () => {
        if ((0, S.i)("openQuestInGameRewardModal")) {
            let { default: a } = await n.e("76418").then(n.bind(n, 34251));
            return (n) =>
                (0, r.jsx)(
                    a,
                    k(M({}, n), {
                        initialQuest: e,
                        location: t,
                        sourceQuestContent: i,
                    }),
                );
        }
        let { default: a } = await n.e("88938").then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(
                a,
                k(M({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function V(e, t, i) {
    (0, s.ZDy)(async () => {
        if ((0, S.i)("openQuestOrbsRewardModal")) {
            let { default: a } = await n.e("74560").then(n.bind(n, 246855));
            return (n) =>
                (0, r.jsx)(
                    a,
                    k(M({}, n), {
                        initialQuest: e,
                        sourceQuestContent: i,
                        location: t,
                    }),
                );
        }
        let { default: a } = await n.e("20565").then(n.bind(n, 383294));
        return (n) =>
            (0, r.jsx)(
                a,
                k(M({}, n), {
                    quest: e,
                    location: t,
                }),
            );
    });
}
function H(e, t, i, a) {
    (0, s.ZDy)(async () => {
        if ((0, S.i)("openQuestCollectibleRewardModal")) {
            let { default: o } = await n.e("41023").then(n.bind(n, 305815));
            return (n) =>
                (0, r.jsx)(
                    o,
                    k(M({}, n), {
                        initialQuest: e,
                        sourceQuestContent: i,
                        location: t,
                        preview: a,
                    }),
                );
        }
        let { default: o } = await Promise.all([n.e("79589"), n.e("83175")]).then(n.bind(n, 920916));
        return (n) =>
            (0, r.jsx)(
                o,
                k(M({}, n), {
                    quest: e,
                    location: t,
                    preview: a,
                }),
            );
    });
}
function Y(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("58641").then(n.bind(n, 828664));
        return (n) =>
            (0, r.jsx)(
                a,
                k(M({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function W(e, t) {
    (0, g._3)({
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
                    k(M({}, n), {
                        questContent: t.content,
                        quest: e,
                    }),
                );
        });
}
function K() {
    let {
        fromContent: e,
        questId: t,
        forceDiscoveryQuestHomeRoute: n = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, R.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: G,
        utmMediumCurrent: U,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(y.jn).find((t) => y.jn[t] === e),
    });
    let r = null != t ? "#".concat(t) : "";
    n && c.Z.setState({ selectedTab: w.GlobalDiscoveryTab.QUESTS }),
        (0, f.default)(),
        (0, d.uL)((n ? D.Z5c.QUEST_HOME : D.Z5c.QUEST_HOME_V2) + r);
}
let z = 0.2;
function q(e) {
    let t = (0, T.T)({ quest: e }),
        n = { location: P.dr.QUESTS_BAR };
    if (!(0, I.j)(n) || Math.random() > z) return;
    let r = (0, A.Z)(e);
    t.log("Showing survey ".concat(r.id)),
        (0, N.C)({
            questId: e.id,
            survey: r,
        });
}
function X() {
    return Promise.all([n.e("13193"), n.e("32249"), n.e("24875")]).then(n.bind(n, 536687));
}
function Q(e) {
    var t;
    let {
        quest: n,
        questContent: a,
        sourceQuestContent: o,
        sourceQuestContentCTA: l,
        autoplay: c = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, E.HJ)(n) && n.config.features.includes(P.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) return void en(n);
    let d = (0, i.Z)();
    if (
        (0, v.D)(P.dr.VIDEO_MODAL) &&
        !u &&
        (null == (t = n.userStatus) ? void 0 : t.enrolledAt) == null &&
        !(0, E.zi)(n)
    ) {
        b.Z.isEnrolling(n.id) ||
            (0, m.AH)(n.id, {
                questContent: a,
                questContentCTA: g.jZ.ACCEPT_QUEST,
                sourceQuestContent: o,
            });
        let e = O.ZP.getState().getVideoProgress(n.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, m.lx)(n.id),
            p.default.track(D.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, g._b)(o),
                source_quest_content_cta: l,
                video_session_id: d,
            }));
    }
    (0, s.ZDy)(
        async () => {
            let { default: e } = await X();
            return (t) =>
                (0, r.jsx)(
                    e,
                    k(M({}, t), {
                        openStartClockTime: performance.now(),
                        questId: n.id,
                        autoplay: c,
                        videoSessionId: d,
                        sourceQuestContent: o,
                    }),
                );
        },
        {
            modalKey: (0, E.u7)(n.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () =>
                (0, E.Mo)({
                    questId: n.id,
                    sourceQuestContent: o,
                    videoSessionId: d,
                }),
        },
    );
}
function J(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
        r = "quest";
    if ("Android" === n || "iOS" === n) {
        let t = _.default.getFingerprint(),
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
function $(e) {
    let t = J(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(D.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        h.Z.launch(t, (t) => {
            t ||
                (0, d.dL)({
                    pathname: D.Z5c.QUEST_HOME_V2,
                    hash: e,
                });
        });
}
function ee(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
        r = "quest-preview";
    if ("Android" === n || "iOS" === n) {
        let t = _.default.getFingerprint(),
            n = (0, a.WS)(),
            i = ""
                .concat(location.protocol, "//")
                .concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/quest-preview/")
                .concat(e);
        return (0, a.ZP)(i, {
            utmSource: r,
            fingerprint: t,
            attemptId: n,
        });
    }
    return "discord://";
}
function et(e) {
    let t = ee(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(D.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        h.Z.launch(t, (t) => {
            t ||
                (0, d.dL)({
                    pathname: D.Z5c.QUEST_HOME_V2,
                    hash: e,
                });
        });
}
function en(e) {
    (0, s.ZDy)(async () => {
        let { default: t } = await Promise.all([n.e("74990"), n.e("16794")]).then(n.bind(n, 570387));
        return (n) =>
            (0, r.jsx)(
                t,
                k(M({}, n), {
                    questId: e.id,
                    questName: e.config.messages.questName,
                }),
            );
    });
}
async function er(e, t) {
    let { type: n } = await (0, m.AH)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case m.wF.SUCCESS:
            Q({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case m.wF.CAPTCHA_FAILED:
            l.Z.show({
                title: x.intl.string(x.t["/CidxO"]),
                body: x.intl.string(x.t.HQdHg6),
            });
            break;
        case m.wF.UNKNOWN_ERROR:
            l.Z.show({
                title: x.intl.string(x.t.R0RpRX),
                body: x.intl.string(x.t.OXD41D),
            });
        case m.wF.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ei(e) {
    if ((0, E.Rt)(e)) return e.config.features.includes(P.S7.CLOUD_GAMING_ACTIVITY) ? s.v3n : s.iWm;
}
