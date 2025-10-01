n.r(t),
    n.d(t, {
        enrollAndStartVideoQuestWithErrorHandling: () => ea,
        loadVideoQuestModal: () => J,
        maybeShowSurveyForQuest: () => Q,
        navigateToQuestHome: () => q,
        openAppWithQuest: () => et,
        openAppWithQuestPreview: () => er,
        openDisclosureModal: () => z,
        openPushToPhoneModal: () => ei,
        openQuestCollectibleRewardModal: () => W,
        openQuestInGameRewardModal: () => H,
        openQuestMinorEnrollmentBlockModal: () => K,
        openQuestOrbsRewardModal: () => Y,
        openQuestsNitroRewardModal: () => V,
        openQuestsRewardCodeModal: () => F,
        openVideoQuestModal: () => $,
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
    m = n(617136),
    g = n(509212),
    E = n(272008),
    b = n(569984),
    y = n(497505),
    O = n(184299),
    v = n(937797),
    I = n(530691),
    T = n(66340),
    S = n(862847),
    A = n(5881),
    C = n(323811),
    N = n(492112),
    R = n(566078),
    P = n(61115),
    w = n(150560),
    D = n(46140),
    L = n(981631),
    x = n(49898),
    j = n(388032);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = "in-app",
    Z = "Discord Widget";
function F(e) {
    let {
        quest: t,
        questContent: i,
        questContentPosition: a,
        preview: o = !1,
        previewQuest: l = null,
        sourceQuestContent: c,
    } = e;
    (0, s.ZDy)(async () => {
        let e = (0, C.i)("openQuestsRewardCodeModal"),
            s = R.r.build(t.config).rewardPlatforms.length > 1;
        if (e && !s) {
            let { default: e } = await Promise.all([n.e("64838"), n.e("52407"), n.e("3408"), n.e("96861")]).then(
                n.bind(n, 188209),
            );
            return (n) =>
                (0, r.jsx)(
                    e,
                    G(k({}, n), {
                        quest: t,
                        preview: o,
                        sourceQuestContent: c,
                        questContentPosition: a,
                    }),
                );
        }
        let { default: u } = await Promise.all([n.e("64838"), n.e("52407"), n.e("3408"), n.e("61624")]).then(
            n.bind(n, 985866),
        );
        return (e) =>
            (0, r.jsx)(
                u,
                G(k({}, e), {
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
function V(e, t) {
    var i;
    (null == (i = e.userStatus) ? void 0 : i.claimedAt) == null
        ? (0, s.ZDy)(async () => {
              let { default: i } = await n.e("838").then(n.bind(n, 824393));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      G(k({}, n), {
                          quest: e,
                          location: t,
                      }),
                  );
          })
        : (0, u.$)();
}
function H(e, t, i) {
    (0, s.ZDy)(async () => {
        if ((0, C.i)("openQuestInGameRewardModal")) {
            let { default: a } = await n.e("76418").then(n.bind(n, 34251));
            return (n) =>
                (0, r.jsx)(
                    a,
                    G(k({}, n), {
                        quest: e,
                        location: t,
                        sourceQuestContent: i,
                    }),
                );
        }
        let { default: a } = await n.e("88938").then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(
                a,
                G(k({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function Y(e, t, i) {
    (0, s.ZDy)(async () => {
        if ((0, C.i)("openQuestOrbsRewardModal")) {
            let { default: a } = await n.e("74560").then(n.bind(n, 246855));
            return (n) =>
                (0, r.jsx)(
                    a,
                    G(k({}, n), {
                        quest: e,
                        sourceQuestContent: i,
                        location: t,
                    }),
                );
        }
        let { default: a } = await Promise.all([n.e("93964"), n.e("81501")]).then(n.bind(n, 383294));
        return (n) =>
            (0, r.jsx)(
                a,
                G(k({}, n), {
                    quest: e,
                    location: t,
                }),
            );
    });
}
function W(e, t, i, a) {
    (0, s.ZDy)(async () => {
        if ((0, C.i)("openQuestCollectibleRewardModal")) {
            let { default: o } = await n.e("41023").then(n.bind(n, 305815));
            return (n) =>
                (0, r.jsx)(
                    o,
                    G(k({}, n), {
                        quest: e,
                        sourceQuestContent: i,
                        location: t,
                        preview: a,
                    }),
                );
        }
        let { default: o } = await Promise.all([n.e("79589"), n.e("70154")]).then(n.bind(n, 920916));
        return (n) =>
            (0, r.jsx)(
                o,
                G(k({}, n), {
                    quest: e,
                    location: t,
                    preview: a,
                }),
            );
    });
}
function K(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("58641").then(n.bind(n, 828664));
        return (n) =>
            (0, r.jsx)(
                a,
                G(k({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function z(e, t) {
    (0, m._3)({
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
                    G(k({}, n), {
                        questContent: t.content,
                        quest: e,
                    }),
                );
        });
}
function q() {
    let {
        fromContent: e,
        questId: t,
        forceDiscoveryQuestHomeRoute: n = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, w.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: Z,
        utmMediumCurrent: B,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(y.jn).find((t) => y.jn[t] === e),
    });
    let r = null != t ? "#".concat(t) : "",
        { enabled: i } = v.m8.getConfig({ location: D.dr.NAVIGATE_TO_QUEST_HOME_UTIL }),
        a = i && !n;
    a || c.Z.setState({ selectedTab: x.GlobalDiscoveryTab.QUESTS }),
        (0, f.default)(),
        (0, d.uL)((a ? L.Z5c.QUEST_HOME_V2 : L.Z5c.QUEST_HOME) + r);
}
let X = 0.2;
function Q(e) {
    let t = (0, A.T)({ quest: e }),
        n = { location: D.dr.QUESTS_BAR };
    if (!(0, S.j)(n) || Math.random() > X) return;
    let r = (0, N.Z)(e);
    t.log("Showing survey ".concat(r.id)),
        (0, P.C)({
            questId: e.id,
            survey: r,
        });
}
function J() {
    return Promise.all([n.e("11416"), n.e("52407"), n.e("32249"), n.e("50584")]).then(n.bind(n, 536687));
}
function $(e) {
    var t;
    let {
        quest: n,
        questContent: a,
        sourceQuestContent: o,
        sourceQuestContentCTA: l,
        autoplay: c = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, g.HJ)(n)) {
        let e = n.config.features.includes(D.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE),
            { enabled: t } = I.S.getCurrentConfig({ location: D.dr.VIDEO_MODAL }, { autoTrackExposure: e });
        if (t && e) return void ei(n);
    }
    let d = (0, i.Z)();
    if (
        (0, T.D)(D.dr.VIDEO_MODAL) &&
        !u &&
        (null == (t = n.userStatus) ? void 0 : t.enrolledAt) == null &&
        !(0, g.zi)(n)
    ) {
        b.Z.isEnrolling(n.id) ||
            (0, E.AH)(n.id, {
                questContent: a,
                questContentCTA: m.jZ.ACCEPT_QUEST,
                sourceQuestContent: o,
            });
        let e = O.ZP.getState().getVideoProgress(n.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, E.lx)(n.id),
            p.default.track(L.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, m._b)(o),
                source_quest_content_cta: l,
                video_session_id: d,
            }));
    }
    (0, s.ZDy)(
        async () => {
            let { default: e } = await J();
            return (t) =>
                (0, r.jsx)(
                    e,
                    G(k({}, t), {
                        openStartClockTime: performance.now(),
                        questId: n.id,
                        autoplay: c,
                        videoSessionId: d,
                        sourceQuestContent: o,
                    }),
                );
        },
        {
            modalKey: (0, g.u7)(n.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () =>
                (0, g.Mo)({
                    questId: n.id,
                    sourceQuestContent: o,
                    videoSessionId: d,
                }),
        },
    );
}
function ee(e) {
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
function et(e) {
    let t = ee(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(L.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        h.Z.launch(t, (t) => {
            if (!t) {
                let { enabled: t } = v.m8.getConfig({ location: D.dr.QUEST_DEEP_LINK_UTIL });
                (0, d.dL)({
                    pathname: t ? L.Z5c.QUEST_HOME_V2 : L.Z5c.QUEST_HOME,
                    hash: e,
                });
            }
        });
}
function en(e) {
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
function er(e) {
    let t = en(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(L.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        h.Z.launch(t, (t) => {
            if (!t) {
                let { enabled: t } = v.m8.getConfig({ location: D.dr.QUEST_DEEP_LINK_UTIL });
                (0, d.dL)({
                    pathname: t ? L.Z5c.QUEST_HOME_V2 : L.Z5c.QUEST_HOME,
                    hash: e,
                });
            }
        });
}
function ei(e) {
    (0, s.ZDy)(async () => {
        let { default: t } = await Promise.all([n.e("20680"), n.e("33628")]).then(n.bind(n, 570387));
        return (n) =>
            (0, r.jsx)(
                t,
                G(k({}, n), {
                    questId: e.id,
                    questName: e.config.messages.questName,
                }),
            );
    });
}
async function ea(e, t) {
    let { type: n } = await (0, E.AH)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case E.wF.SUCCESS:
            $({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case E.wF.CAPTCHA_FAILED:
            l.Z.show({
                title: j.intl.string(j.t["/CidxM"]),
                body: j.intl.string(j.t.HQdHg4),
            });
            break;
        case E.wF.UNKNOWN_ERROR:
            l.Z.show({
                title: j.intl.string(j.t.R0RpRU),
                body: j.intl.string(j.t.OXD41N),
            });
        case E.wF.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
