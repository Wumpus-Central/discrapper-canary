n.r(t),
    n.d(t, {
        enrollAndStartVideoQuestWithErrorHandling: () => et,
        getPrimaryCtaIcon: () => en,
        loadVideoQuestModal: () => z,
        maybeShowSurveyForQuest: () => K,
        navigateToQuestHome: () => Y,
        openAppWithQuest: () => X,
        openAppWithQuestPreview: () => $,
        openDisclosureModal: () => H,
        openPushToPhoneModal: () => ee,
        openQuestCollectibleRewardModal: () => B,
        openQuestInGameRewardModal: () => Z,
        openQuestMinorEnrollmentBlockModal: () => V,
        openQuestOrbsRewardModal: () => F,
        openQuestsRewardCodeModal: () => G,
        openVideoQuestModal: () => q,
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
    v = n(492112),
    S = n(862657),
    I = n(254579),
    T = n(283689),
    C = n(542347),
    A = n(61115),
    N = n(150560),
    P = n(324805),
    R = n(981631),
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
    let { quest: t, sourceQuestContent: i } = e;
    (0, s.ZDy)(async () => {
        let { default: e } = await n.e("66547").then(n.bind(n, 101007));
        return (n) =>
            (0, r.jsx)(
                e,
                M(L({}, n), {
                    initialQuest: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function Z(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("97158").then(n.bind(n, 964129));
        return (n) =>
            (0, r.jsx)(
                a,
                M(L({}, n), {
                    initialQuest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}
function F(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("32869").then(n.bind(n, 187311));
        return (n) =>
            (0, r.jsx)(
                a,
                M(L({}, n), {
                    initialQuest: e,
                    sourceQuestContent: i,
                    location: t,
                }),
            );
    });
}
function B(e, t, i, a) {
    (0, s.ZDy)(async () => {
        let { default: o } = await n.e("28217").then(n.bind(n, 824571));
        return (n) =>
            (0, r.jsx)(
                o,
                M(L({}, n), {
                    initialQuest: e,
                    sourceQuestContent: i,
                    location: t,
                    preview: a,
                }),
            );
    });
}
function V(e, t, i) {
    (0, s.ZDy)(async () => {
        let { default: a } = await n.e("52040").then(n.bind(n, 636494));
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
                    M(L({}, n), {
                        questContent: t.content,
                        quest: e,
                    }),
                );
        });
}
function Y() {
    let {
        fromContent: e,
        questId: t,
        forceDiscoveryQuestHomeRoute: n = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, N.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: U,
        utmMediumCurrent: k,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(E.jn).find((t) => E.jn[t] === e),
    });
    let r = null != t ? "#".concat(t) : "";
    n && c.Z.setState({ selectedTab: w.GlobalDiscoveryTab.QUESTS }),
        (0, d.default)(),
        (0, u.uL)((n ? R.Z5c.QUEST_HOME : R.Z5c.QUEST_HOME_V2) + r);
}
let W = 0.2;
function K(e) {
    let t = (0, O.T)({ quest: e }),
        n = { location: P.dr.QUESTS_BAR };
    if (!(0, y.j)(n) || Math.random() > W) return;
    let r = (0, v.Z)(e);
    t.log("Showing survey ".concat(r.id)),
        (0, A.C)({
            questId: e.id,
            survey: r,
        });
}
function z() {
    return Promise.all([n.e("13193"), n.e("75909"), n.e("11941")]).then(n.bind(n, 215113));
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
    if ((0, I.HJ)(n)) return void ee(n);
    let d = (0, i.Z)();
    if (!u && (null == (t = n.userStatus) ? void 0 : t.enrolledAt) == null && !(0, S.zi)(n)) {
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
            p.default.track(R.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, h._b)(o),
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
function Q(e) {
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
    let t = Q(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(R.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.Z.launch(t, (t) => {
            t ||
                (0, u.dL)({
                    pathname: R.Z5c.QUEST_HOME_V2,
                    hash: e,
                });
        });
}
function J(e) {
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
function $(e) {
    let t = J(e),
        n = (0, a.zS)(t);
    null != n &&
        p.default.track(R.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.Z.launch(t, (t) => {
            t ||
                (0, u.dL)({
                    pathname: R.Z5c.QUEST_HOME_V2,
                    hash: e,
                });
        });
}
function ee(e) {
    (0, s.ZDy)(async () => {
        let { default: t } = await Promise.all([n.e("37193"), n.e("53145")]).then(n.bind(n, 627080));
        return (n) => (0, r.jsx)(t, M(L({}, n), { questId: e.id }));
    });
}
async function et(e, t) {
    let { type: n } = await (0, m.AH)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case m.wF.SUCCESS:
            q({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case m.wF.CAPTCHA_FAILED:
            l.Z.show({
                title: D.intl.string(D.t["/CidxO"]),
                body: D.intl.string(D.t.HQdHg6),
            });
            break;
        case m.wF.UNKNOWN_ERROR:
            l.Z.show({
                title: D.intl.string(D.t.R0RpRX),
                body: D.intl.string(D.t.OXD41D),
            });
        case m.wF.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function en(e) {
    if ((0, T.Rt)(e)) return e.config.features.includes(P.S7.CLOUD_GAMING_ACTIVITY) ? s.v3n : s.iWm;
}
