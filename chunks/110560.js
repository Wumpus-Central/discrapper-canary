n.r(t),
    n.d(t, {
        enrollAndStartVideoQuestWithErrorHandling: () => en,
        getPrimaryCtaIcon: () => er,
        loadVideoQuestModal: () => q,
        maybeShowSurveyForQuest: () => z,
        navigateToQuestHome: () => W,
        openAppWithQuest: () => J,
        openAppWithQuestPreview: () => ee,
        openDisclosureModal: () => Y,
        openPushToPhoneModal: () => et,
        openQuestCollectibleRewardModal: () => V,
        openQuestInGameRewardModal: () => B,
        openQuestMinorEnrollmentBlockModal: () => H,
        openQuestOrbsRewardModal: () => F,
        openQuestsRewardCodeModal: () => Z,
        openVideoQuestModal: () => Q,
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
    b = n(184299),
    y = n(775065),
    O = n(535584),
    v = n(66340),
    S = n(492112),
    I = n(862657),
    T = n(254579),
    A = n(283689),
    C = n(542347),
    N = n(61115),
    P = n(150560),
    R = n(324805),
    w = n(981631),
    D = n(49898),
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
function j(e) {
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
function M(e, t) {
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
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = "in-app",
    G = "Discord Widget";
function Z(e) {
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
                    k(j({}, n), {
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
                k(j({}, n), {
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
function B(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("76418").then(n.bind(n, 34251));
        return (n) =>
            (0, r.jsx)(
                a,
                k(j({}, n), {
                    initialQuest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function F(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("74560").then(n.bind(n, 246855));
        return (n) =>
            (0, r.jsx)(
                a,
                k(j({}, n), {
                    initialQuest: e,
                    sourceQuestContent: i,
                    location: t,
                }),
            );
    });
}
function V(e, t, i, a) {
    (0, s.ZDy)(async () => {
        let { default: o } = await n.e("41023").then(n.bind(n, 305815));
        return (n) =>
            (0, r.jsx)(
                o,
                k(j({}, n), {
                    initialQuest: e,
                    sourceQuestContent: i,
                    location: t,
                    preview: a,
                }),
            );
    });
}
function H(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("52040").then(n.bind(n, 636494));
        return (n) =>
            (0, r.jsx)(
                a,
                k(j({}, n), {
                    quest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function Y(e, t) {
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
                    k(j({}, n), {
                        questContent: t.content,
                        quest: e,
                    }),
                );
        });
}
function W() {
    let {
        fromContent: e,
        questId: t,
        forceDiscoveryQuestHomeRoute: n = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, P.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: G,
        utmMediumCurrent: U,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(E.jn).find((t) => E.jn[t] === e),
    });
    let r = null != t ? "#".concat(t) : "";
    n && c.Z.setState({ selectedTab: D.GlobalDiscoveryTab.QUESTS }),
        (0, d.default)(),
        (0, u.uL)((n ? w.Z5c.QUEST_HOME : w.Z5c.QUEST_HOME_V2) + r);
}
let K = 0.2;
function z(e) {
    let t = (0, O.T)({ quest: e }),
        n = { location: R.dr.QUESTS_BAR };
    if (!(0, y.j)(n) || Math.random() > K) return;
    let r = (0, S.Z)(e);
    t.log("Showing survey ".concat(r.id)),
        (0, N.C)({
            questId: e.id,
            survey: r,
        });
}
function q() {
    return Promise.all([n.e("13193"), n.e("75909"), n.e("90499")]).then(n.bind(n, 215113));
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
    if ((0, T.HJ)(n)) return void et(n);
    let d = (0, i.Z)();
    if (
        (0, v.D)(R.dr.VIDEO_MODAL) &&
        !u &&
        (null == (t = n.userStatus) ? void 0 : t.enrolledAt) == null &&
        !(0, I.zi)(n)
    ) {
        g.Z.isEnrolling(n.id) ||
            (0, m.AH)(n.id, {
                questContent: a,
                questContentCTA: h.jZ.ACCEPT_QUEST,
                sourceQuestContent: o,
            });
        let e = b.ZP.getState().getVideoProgress(n.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, m.lx)(n.id),
            p.default.track(w.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, h._b)(o),
                source_quest_content_cta: l,
                video_session_id: d,
            }));
    }
    (0, s.ZDy)(
        async () => {
            let { default: e } = await q();
            return (t) =>
                (0, r.jsx)(
                    e,
                    k(j({}, t), {
                        openStartClockTime: performance.now(),
                        questId: n.id,
                        autoplay: c,
                        videoSessionId: d,
                        sourceQuestContent: o,
                    }),
                );
        },
        {
            modalKey: (0, C.u7)(n.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () =>
                (0, C.Mo)({
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
function J(e) {
    let t = X(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(w.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.Z.launch(t, (t) => {
            t ||
                (0, u.dL)({
                    pathname: w.Z5c.QUEST_HOME_V2,
                    hash: e,
                });
        });
}
function $(e) {
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
function ee(e) {
    let t = $(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(w.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.Z.launch(t, (t) => {
            t ||
                (0, u.dL)({
                    pathname: w.Z5c.QUEST_HOME_V2,
                    hash: e,
                });
        });
}
function et(e) {
    (0, s.ZDy)(async () => {
        let { default: t } = await Promise.all([n.e("1216"), n.e("53145")]).then(n.bind(n, 627080));
        return (n) =>
            (0, r.jsx)(
                t,
                k(j({}, n), {
                    questId: e.id,
                    questName: e.config.messages.questName,
                }),
            );
    });
}
async function en(e, t) {
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
function er(e) {
    if ((0, A.Rt)(e)) return e.config.features.includes(R.S7.CLOUD_GAMING_ACTIVITY) ? s.v3n : s.iWm;
}
