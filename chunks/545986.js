n.d(t, {
    Df: () => F,
    Fy: () => ee,
    Oz: () => en,
    QA: () => Q,
    Zc: () => Y,
    cf: () => V,
    d5: () => X,
    e0: () => et,
    hJ: () => B,
    l9: () => q,
    m6: () => H,
    navigateToQuestHome: () => W,
    q$: () => J,
    rx: () => G,
    z6: () => z,
});
var r = n(627968);
n(64700);
var i = n(835245),
    a = n(49485),
    s = n(80703),
    o = n(397927),
    l = n(157559),
    c = n(726845),
    u = n(976860),
    d = n(12901),
    f = n(961350),
    p = n(954571),
    _ = n(877062),
    h = n(829219),
    m = n(216456),
    g = n(859703),
    E = n(341915),
    b = n(405670),
    y = n(972495),
    O = n(943849),
    A = n(437343),
    v = n(710969),
    S = n(792620),
    I = n(814793),
    T = n(753386),
    C = n(964168),
    N = n(419818),
    R = n(654487),
    w = n(652215),
    P = n(488995),
    D = n(985018);
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
    (0, o.mMO)(async () => {
        let { default: e } = await n.e("67299").then(n.bind(n, 975726));
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
function V(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: a } = await n.e("26747").then(n.bind(n, 529398));
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
    (0, o.mMO)(async () => {
        let { default: a } = await n.e("67426").then(n.bind(n, 268473));
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
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("90948").then(n.bind(n, 651663));
        return (n) =>
            (0, r.jsx)(
                s,
                M(L({}, n), {
                    initialQuest: e,
                    sourceQuestContent: i,
                    location: t,
                    preview: a,
                }),
            );
    });
}
function H(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: a } = await n.e("81169").then(n.bind(n, 124232));
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
function Y(e, t) {
    (0, m.Y5)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, o.mMO)(async () => {
            let { default: i } = await n.e("132").then(n.bind(n, 348559));
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
function W() {
    let {
        fromContent: e,
        questId: t,
        forceDiscoveryQuestHomeRoute: n = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, N.A.getState().setUtmCurrentContext)({
        utmSourceCurrent: U,
        utmMediumCurrent: k,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(E.uF).find((t) => E.uF[t] === e),
    });
    let r = null != t ? "#".concat(t) : "";
    n && c.A.setState({ selectedTab: P.GlobalDiscoveryTab.QUESTS }),
        (0, d.default)(),
        (0, u.pX)((n ? w.BVt.QUEST_HOME : w.BVt.QUEST_HOME_V2) + r);
}
let K = 0.2;
function z(e) {
    let t = (0, O.L)({ quest: e }),
        n = { location: R.rE.QUESTS_BAR };
    if (!(0, y.l)(n) || Math.random() > K) return;
    let r = (0, A.A)(e);
    t.log("Showing survey ".concat(r.id)),
        (0, C.m)({
            questId: e.id,
            survey: r,
        });
}
function q() {
    return Promise.all([n.e("35584"), n.e("23628"), n.e("29")]).then(n.bind(n, 717415));
}
function X(e) {
    var t;
    let {
        quest: n,
        questContent: a,
        sourceQuestContent: s,
        sourceQuestContentCTA: l,
        autoplay: c = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, S.BS)(n)) return void ee(n);
    let d = (0, i.A)();
    if (!u && (null == (t = n.userStatus) ? void 0 : t.enrolledAt) == null && !(0, v.Ic)(n)) {
        g.A.isEnrolling(n.id) ||
            (0, h.Oy)(n.id, {
                questContent: a,
                questContentCTA: m.Cy.ACCEPT_QUEST,
                sourceQuestContent: s,
            });
        let e = b.Ay.getState().getVideoProgress(n.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, h.QG)(n.id),
            p.default.track(w.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, m.jO)(s),
                source_quest_content_cta: l,
                video_session_id: d,
            }));
    }
    (0, o.mMO)(
        async () => {
            let { default: e } = await q();
            return (t) =>
                (0, r.jsx)(
                    e,
                    M(L({}, t), {
                        openStartClockTime: performance.now(),
                        questId: n.id,
                        autoplay: c,
                        videoSessionId: d,
                        sourceQuestContent: s,
                    }),
                );
        },
        {
            modalKey: (0, T.cZ)(n.id),
            backdropStyle: o.F2Z.IMMERSIVE,
            onCloseCallback: () =>
                (0, T.vm)({
                    questId: n.id,
                    sourceQuestContent: s,
                    videoSessionId: d,
                }),
        },
    );
}
function Z(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
        r = "quest";
    if ("Android" === n || "iOS" === n) {
        let t = f.default.getFingerprint(),
            n = (0, a.I_)(),
            i = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/quests/").concat(e);
        return (0, a.Ay)(i, {
            utmSource: r,
            fingerprint: t,
            attemptId: n,
        });
    }
    return "discord://";
}
function Q(e) {
    let t = Z(e),
        n = (0, a.X7)(t);
    null != n &&
        p.default.track(w.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.A.launch(t, (t) => {
            t ||
                (0, u.bG)({
                    pathname: w.BVt.QUEST_HOME_V2,
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
            n = (0, a.I_)(),
            i = ""
                .concat(location.protocol, "//")
                .concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/quest-preview/")
                .concat(e);
        return (0, a.Ay)(i, {
            utmSource: r,
            fingerprint: t,
            attemptId: n,
        });
    }
    return "discord://";
}
function J(e) {
    let t = $(e),
        n = (0, a.X7)(t);
    null != n &&
        p.default.track(w.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.A.launch(t, (t) => {
            t ||
                (0, u.bG)({
                    pathname: w.BVt.QUEST_HOME_V2,
                    hash: e,
                });
        });
}
function ee(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await Promise.all([n.e("43887"), n.e("77828")]).then(n.bind(n, 491390));
        return (n) => (0, r.jsx)(t, M(L({}, n), { questId: e.id }));
    });
}
async function et(e, t) {
    let { type: n } = await (0, h.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case h.WM.SUCCESS:
            X({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case h.WM.CAPTCHA_FAILED:
            l.A.show({
                title: D.intl.string(D.t["/CidxO"]),
                body: D.intl.string(D.t.HQdHg6),
            });
            break;
        case h.WM.UNKNOWN_ERROR:
            l.A.show({
                title: D.intl.string(D.t.R0RpRX),
                body: D.intl.string(D.t.OXD41D),
            });
        case h.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function en(e) {
    if ((0, I.vA)(e)) return e.config.features.includes(R.Li.CLOUD_GAMING_ACTIVITY) ? o.hpF : o._xR;
}
