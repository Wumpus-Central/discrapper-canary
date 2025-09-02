n.r(t),
    n.d(t, {
        enrollAndStartVideoQuestWithErrorHandling: () => $,
        loadVideoQuestModal: () => z,
        maybeShowSurveyForQuest: () => K,
        navigateToQuestHome: () => Y,
        openAppWithQuest: () => Q,
        openDisclosureModal: () => H,
        openPushToPhoneModal: () => J,
        openQuestInGameRewardModal: () => Z,
        openQuestMinorEnrollmentBlockModal: () => V,
        openQuestOrbsRewardModal: () => F,
        openQuestsNitroRewardModal: () => B,
        openQuestsRewardCodeModal: () => G,
        openVideoQuestModal: () => q,
    });
var r = n(951288);
n(647438);
var i = n(772848),
    a = n(271579),
    o = n(756647),
    s = n(481060),
    l = n(668781),
    c = n(37234),
    u = n(836768),
    d = n(98278),
    f = n(703656),
    _ = n(314897),
    p = n(626135),
    h = n(954824),
    m = n(617136),
    g = n(509212),
    E = n(272008),
    b = n(569984),
    y = n(497505),
    O = n(184299),
    v = n(530691),
    I = n(66340),
    T = n(862847),
    S = n(5881),
    A = n(492112),
    C = n(61115),
    N = n(150560),
    R = n(46140),
    P = n(981631),
    w = n(49898),
    D = n(388032);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
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
function M(e, t) {
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
let k = "in-app",
    U = "Discord Widget";
function G(e) {
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
                M(L({}, n), {
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
function B(e, t) {
    var i;
    (null == (i = e.userStatus) ? void 0 : i.claimedAt) == null
        ? (0, s.ZDy)(async () => {
              let { default: i } = await n.e("838").then(n.bind(n, 824393));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      M(L({}, n), {
                          quest: e,
                          location: t,
                      }),
                  );
          })
        : (0, d.$)();
}
function Z(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("88938").then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(
                a,
                M(L({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function F(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await n.e("20565").then(n.bind(n, 383294));
        return (n) =>
            (0, r.jsx)(
                i,
                M(L({}, n), {
                    quest: e,
                    location: t,
                }),
            );
    });
}
function V(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("58641").then(n.bind(n, 828664));
        return (n) =>
            (0, r.jsx)(
                a,
                M(L({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function H(e, t) {
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
                    M(L({}, n), {
                        questContent: t.content,
                        quest: e,
                    }),
                );
        });
}
function Y() {
    let { fromContent: e, questId: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, N.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: U,
        utmMediumCurrent: k,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(y.jn).find((t) => y.jn[t] === e),
    });
    let n = null != t ? "#".concat(t) : "";
    u.Z.setState({ selectedTab: w.GlobalDiscoveryTab.QUESTS }), (0, c.xf)(), (0, f.uL)(P.Z5c.QUEST_HOME + n);
}
let W = 0.2;
function K(e) {
    let t = (0, S.T)({ quest: e }),
        n = { location: R.dr.QUESTS_BAR };
    if (!(0, T.j)(n) || Math.random() > W) return;
    let r = (0, A.Z)(e);
    t.log("Showing survey ".concat(r.id)),
        (0, C.C)({
            questId: e.id,
            survey: r,
        });
}
function z() {
    return Promise.all([n.e("66816"), n.e("32249")]).then(n.bind(n, 536687));
}
function q(e) {
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
        let e = n.config.features.includes(R.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE),
            { enabled: t } = v.S.getCurrentConfig({ location: R.dr.VIDEO_MODAL }, { autoTrackExposure: e });
        if (t && e) return void J(n);
    }
    let d = (0, i.Z)();
    if (
        (0, I.D)(R.dr.VIDEO_MODAL) &&
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
            p.default.track(P.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, m._b)(o),
                source_quest_content_cta: l,
                video_session_id: d,
            }));
    }
    (0, s.ZDy)(
        async () => {
            let { default: e } = await z();
            return (t) =>
                (0, r.jsx)(
                    e,
                    M(L({}, t), {
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
function X(e) {
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
function Q(e) {
    let t = X(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(P.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        h.Z.launch(t, (t) => {
            t ||
                (0, f.dL)({
                    pathname: P.Z5c.QUEST_HOME,
                    hash: e,
                });
        });
}
function J(e) {
    (0, s.ZDy)(async () => {
        let { default: t } = await Promise.all([n.e("25520"), n.e("33628")]).then(n.bind(n, 570387));
        return (n) =>
            (0, r.jsx)(
                t,
                M(L({}, n), {
                    questId: e.id,
                    questName: e.config.messages.questName,
                }),
            );
    });
}
async function $(e, t) {
    let { type: n } = await (0, E.AH)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case E.wF.SUCCESS:
            q({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case E.wF.CAPTCHA_FAILED:
            l.Z.show({
                title: D.intl.string(D.t["/CidxM"]),
                body: D.intl.string(D.t.HQdHg4),
            });
            break;
        case E.wF.UNKNOWN_ERROR:
            l.Z.show({
                title: D.intl.string(D.t.R0RpRU),
                body: D.intl.string(D.t.OXD41N),
            });
        case E.wF.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
