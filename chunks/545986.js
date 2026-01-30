n.d(t, {
    Df: () => B,
    Fy: () => et,
    Oz: () => er,
    QA: () => J,
    Zc: () => W,
    cf: () => V,
    d5: () => Q,
    e0: () => en,
    hJ: () => H,
    l9: () => Z,
    m6: () => Y,
    navigateToQuestHome: () => K,
    q$: () => ee,
    rx: () => F,
    z6: () => q,
});
var r = n(627968);
n(64700);
var i = n(835245),
    a = n(49485),
    o = n(80703),
    s = n(397927),
    l = n(157559),
    c = n(726845),
    u = n(976860),
    d = n(12901),
    f = n(961350),
    p = n(954571),
    _ = n(877062),
    h = n(829219),
    m = n(859703),
    g = n(341915),
    E = n(405670),
    y = n(972495),
    b = n(943849),
    O = n(561844),
    v = n(590202),
    A = n(437343),
    I = n(710969),
    S = n(792620),
    T = n(814793),
    C = n(753386),
    N = n(964168),
    w = n(419818),
    R = n(654487),
    P = n(652215),
    D = n(488995),
    L = n(985018);

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

function F(e) {
    let { quest: t, sourceQuestContent: i } = e;
    (0, s.mMO)(async () => {
        let { default: e } = await n.e("67299").then(n.bind(n, 975726));
        return (n) =>
            (0, r.jsx)(
                e,
                k(M({}, n), {
                    initialQuest: t,
                    sourceQuestContent: i,
                }),
            );
    });
}

function V(e, t, i) {
    (0, s.mMO)(async () => {
        let { default: a } = await n.e("26747").then(n.bind(n, 529398));
        return (n) =>
            (0, r.jsx)(
                a,
                k(M({}, n), {
                    initialQuest: e,
                    location: t,
                    sourceQuestContent: i,
                }),
            );
    });
}

function B(e, t, i) {
    (0, s.mMO)(async () => {
        let { default: a } = await n.e("67426").then(n.bind(n, 268473));
        return (n) =>
            (0, r.jsx)(
                a,
                k(M({}, n), {
                    initialQuest: e,
                    sourceQuestContent: i,
                    location: t,
                }),
            );
    });
}

function H(e, t, i, a) {
    (0, s.mMO)(async () => {
        let { default: o } = await n.e("90948").then(n.bind(n, 651663));
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
    });
}

function Y(e, t, i) {
    (0, s.mMO)(async () => {
        let { default: a } = await n.e("81169").then(n.bind(n, 124232));
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
    (0, O.Y5)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, s.mMO)(async () => {
            let { default: i } = await n.e("132").then(n.bind(n, 348559));
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
    (0, w.A.getState().setUtmCurrentContext)({
        utmSourceCurrent: G,
        utmMediumCurrent: U,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(g.uF).find((t) => g.uF[t] === e),
    });
    let r = null != t ? "#".concat(t) : "";
    n &&
        c.A.setState({
            selectedTab: D.GlobalDiscoveryTab.QUESTS,
        }),
        (0, d.default)(),
        (0, u.pX)((n ? P.BVt.QUEST_HOME : P.BVt.QUEST_HOME_V2) + r);
}
let z = 0.2;

function q(e) {
    let t = (0, b.L)({
            quest: e,
        }),
        n = {
            location: R.rE.QUESTS_BAR,
        };
    if (!(0, y.l)(n) || Math.random() > z) return;
    let r = (0, A.A)(e);
    t.log("Showing survey ".concat(r.id)),
        (0, N.m)({
            questId: e.id,
            survey: r,
        });
}

function Z() {
    return Promise.all([n.e("35584"), n.e("23628"), n.e("29")]).then(n.bind(n, 717415));
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
    if ((0, S.BS)(n)) return void et(n);
    let d = (0, i.A)();
    if (!u && (null == (t = n.userStatus) ? void 0 : t.enrolledAt) == null && !(0, I.Ic)(n)) {
        m.A.isEnrolling(n.id) ||
            (0, h.Oy)(n.id, {
                questContent: a,
                questContentCTA: v.Cy.ACCEPT_QUEST,
                sourceQuestContent: o,
            });
        let e = E.Ay.getState().getVideoProgress(n.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, h.QG)(n.id),
            p.default.track(P.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: n.id,
                source_quest_content: (0, v.jO)(o),
                source_quest_content_cta: l,
                video_session_id: d,
            }));
    }
    (0, s.mMO)(
        async () => {
            let { default: e } = await Z();
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
            modalKey: (0, C.cZ)(n.id),
            backdropStyle: s.F2Z.IMMERSIVE,
            onCloseCallback: () =>
                (0, C.vm)({
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

function J(e) {
    let t = X(e),
        n = (0, a.X7)(t);
    null != n &&
        p.default.track(P.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.A.launch(t, (t) => {
            t ||
                (0, u.bG)({
                    pathname: P.BVt.QUEST_HOME_V2,
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

function ee(e) {
    let t = $(e),
        n = (0, a.X7)(t);
    null != n &&
        p.default.track(P.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        _.A.launch(t, (t) => {
            t ||
                (0, u.bG)({
                    pathname: P.BVt.QUEST_HOME_V2,
                    hash: e,
                });
        });
}

function et(e) {
    (0, s.mMO)(async () => {
        let { default: t } = await Promise.all([n.e("6665"), n.e("77828")]).then(n.bind(n, 491390));
        return (n) =>
            (0, r.jsx)(
                t,
                k(M({}, n), {
                    questId: e.id,
                }),
            );
    });
}
async function en(e, t) {
    let { type: n } = await (0, h.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case h.WM.SUCCESS:
            Q({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case h.WM.CAPTCHA_FAILED:
            l.A.show({
                title: L.intl.string(L.t["/CidxO"]),
                body: L.intl.string(L.t.HQdHg6),
            });
            break;
        case h.WM.UNKNOWN_ERROR:
            l.A.show({
                title: L.intl.string(L.t.R0RpRX),
                body: L.intl.string(L.t.OXD41D),
            });
        case h.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}

function er(e) {
    if ((0, T.vA)(e)) return e.config.features.includes(R.Li.CLOUD_GAMING_ACTIVITY) ? s.hpF : s._xR;
}
