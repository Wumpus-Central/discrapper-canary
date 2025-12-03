n.r(t),
    n.d(t, {
        enrollAndStartVideoQuestWithErrorHandling: () => ee,
        getPrimaryCtaIcon: () => et,
        loadVideoQuestModal: () => K,
        maybeShowSurveyForQuest: () => W,
        navigateToQuestHome: () => H,
        openAppWithQuest: () => X,
        openAppWithQuestPreview: () => J,
        openDisclosureModal: () => V,
        openPushToPhoneModal: () => $,
        openQuestCollectibleRewardModal: () => B,
        openQuestInGameRewardModal: () => G,
        openQuestMinorEnrollmentBlockModal: () => F,
        openQuestOrbsRewardModal: () => Z,
        openQuestsRewardCodeModal: () => U,
        openVideoQuestModal: () => z,
    });
var r = n(54381);
n(473749);
var i = n(772848),
    a = n(271579),
    o = n(756647),
    s = n(481060),
    l = n(668781),
    c = n(836768),
    u = n(703656),
    d = n(342386),
    f = n(314897),
    p = n(626135),
    _ = n(954824),
    m = n(22095),
    h = n(617136),
    g = n(616022),
    E = n(49436),
    b = n(509212),
    y = n(184299),
    O = n(775065),
    v = n(535584),
    S = n(66340),
    I = n(492112),
    T = n(542347),
    A = n(61115),
    C = n(150560),
    N = n(324805),
    P = n(981631),
    R = n(49898),
    w = n(388032);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = "in-app",
    k = "Discord Widget";
function U(e) {
    let {
        quest: t,
        questContent: i,
        questContentPosition: a,
        preview: o = !1,
        previewQuest: l = null,
        sourceQuestContent: c,
    } = e;
    (0, s.ZDy)(async () => {
        if (!(t.config.rewardsConfig.platforms.length > 1)) {
            let { default: e } = await Promise.all([n.e("35129"), n.e("83615"), n.e("96861")]).then(n.bind(n, 188209));
            return (n) =>
                (0, r.jsx)(
                    e,
                    j(x({}, n), {
                        initialQuest: t,
                        preview: o,
                        sourceQuestContent: c,
                        questContentPosition: a,
                    }),
                );
        }
        let { default: e } = await Promise.all([n.e("35129"), n.e("83615"), n.e("19341")]).then(n.bind(n, 564733));
        return (n) =>
            (0, r.jsx)(
                e,
                j(x({}, n), {
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
function G(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("76418").then(n.bind(n, 34251));
        return (n) =>
            (0, r.jsx)(
                a,
                j(x({}, n), {
                    initialQuest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function Z(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("74560").then(n.bind(n, 246855));
        return (n) =>
            (0, r.jsx)(
                a,
                j(x({}, n), {
                    initialQuest: e,
                    sourceQuestContent: i,
                    location: t,
                }),
            );
    });
}
function B(e, t, i, a) {
    (0, s.ZDy)(async () => {
        let { default: o } = await n.e("41023").then(n.bind(n, 305815));
        return (n) =>
            (0, r.jsx)(
                o,
                j(x({}, n), {
                    initialQuest: e,
                    sourceQuestContent: i,
                    location: t,
                    preview: a,
                }),
            );
    });
}
function F(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("52040").then(n.bind(n, 636494));
        return (n) =>
            (0, r.jsx)(
                a,
                j(x({}, n), {
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
            let { default: i } = await n.e("27333").then(n.bind(n, 404088));
            return (n) =>
                (0, r.jsx)(
                    i,
                    j(x({}, n), {
                        questContent: t.content,
                        quest: e,
                    }),
                );
        });
}
function H() {
    let {
        fromContent: e,
        questId: t,
        forceDiscoveryQuestHomeRoute: n = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, C.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: k,
        utmMediumCurrent: M,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(E.jn).find((t) => E.jn[t] === e),
    });
    let r = null != t ? "#".concat(t) : "";
    n && c.Z.setState({ selectedTab: R.GlobalDiscoveryTab.QUESTS }),
        (0, d.default)(),
        (0, u.uL)((n ? P.Z5c.QUEST_HOME : P.Z5c.QUEST_HOME_V2) + r);
}
let Y = 0.2;
function W(e) {
    let t = (0, v.T)({ quest: e }),
        n = { location: N.dr.QUESTS_BAR };
    if (!(0, O.j)(n) || Math.random() > Y) return;
    let r = (0, I.Z)(e);
    t.log("Showing survey ".concat(r.id)),
        (0, A.C)({
            questId: e.id,
            survey: r,
        });
}
function K() {
    return Promise.all([n.e("13193"), n.e("75909"), n.e("38746")]).then(n.bind(n, 215113));
}
function z(e) {
    var t;
    let {
        quest: n,
        questContent: a,
        sourceQuestContent: o,
        sourceQuestContentCTA: l,
        autoplay: c = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, b.HJ)(n) && n.config.features.includes(N.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) return void $(n);
    let d = (0, i.Z)();
    if (
        (0, S.D)(N.dr.VIDEO_MODAL) &&
        !u &&
        (null == (t = n.userStatus) ? void 0 : t.enrolledAt) == null &&
        !(0, b.zi)(n)
    ) {
        g.Z.isEnrolling(n.id) ||
            (0, m.AH)(n.id, {
                questContent: a,
                questContentCTA: h.jZ.ACCEPT_QUEST,
                sourceQuestContent: o,
            });
        let e = y.ZP.getState().getVideoProgress(n.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, m.lx)(n.id),
            p.default.track(P.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, h._b)(o),
                source_quest_content_cta: l,
                video_session_id: d,
            }));
    }
    (0, s.ZDy)(
        async () => {
            let { default: e } = await K();
            return (t) =>
                (0, r.jsx)(
                    e,
                    j(x({}, t), {
                        openStartClockTime: performance.now(),
                        questId: n.id,
                        autoplay: c,
                        videoSessionId: d,
                        sourceQuestContent: o,
                    }),
                );
        },
        {
            modalKey: (0, T.u7)(n.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () =>
                (0, T.Mo)({
                    questId: n.id,
                    sourceQuestContent: o,
                    videoSessionId: d,
                }),
        },
    );
}
function q(e) {
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
function X(e) {
    let t = q(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(P.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.Z.launch(t, (t) => {
            t ||
                (0, u.dL)({
                    pathname: P.Z5c.QUEST_HOME_V2,
                    hash: e,
                });
        });
}
function Q(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
        r = "quest-preview";
    if ("Android" === n || "iOS" === n) {
        let t = f.default.getFingerprint(),
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
function J(e) {
    let t = Q(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(P.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.Z.launch(t, (t) => {
            t ||
                (0, u.dL)({
                    pathname: P.Z5c.QUEST_HOME_V2,
                    hash: e,
                });
        });
}
function $(e) {
    (0, s.ZDy)(async () => {
        let { default: t } = await Promise.all([n.e("1216"), n.e("53145")]).then(n.bind(n, 627080));
        return (n) =>
            (0, r.jsx)(
                t,
                j(x({}, n), {
                    questId: e.id,
                    questName: e.config.messages.questName,
                }),
            );
    });
}
async function ee(e, t) {
    let { type: n } = await (0, m.AH)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case m.wF.SUCCESS:
            z({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case m.wF.CAPTCHA_FAILED:
            l.Z.show({
                title: w.intl.string(w.t["/CidxO"]),
                body: w.intl.string(w.t.HQdHg6),
            });
            break;
        case m.wF.UNKNOWN_ERROR:
            l.Z.show({
                title: w.intl.string(w.t.R0RpRX),
                body: w.intl.string(w.t.OXD41D),
            });
        case m.wF.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function et(e) {
    if ((0, b.Rt)(e)) return e.config.features.includes(N.S7.CLOUD_GAMING_ACTIVITY) ? s.v3n : s.iWm;
}
