"use strict";
n.d(t, {
    Df: () => F,
    Fy: () => Q,
    Oz: () => ee,
    QA: () => q,
    Zc: () => j,
    cf: () => G,
    d5: () => $,
    e0: () => J,
    hJ: () => V,
    l9: () => K,
    m6: () => B,
    navigateToQuestHome: () => H,
    q$: () => Z,
    rx: () => U,
    z6: () => W,
});
var r = n(627968);
n(64700);
var i = n(835245),
    a = n(49485),
    s = n(80703),
    o = n(397927),
    l = n(157559),
    u = n(726845),
    c = n(976860),
    d = n(12901),
    _ = n(961350),
    f = n(954571),
    h = n(877062),
    p = n(829219),
    g = n(859703),
    E = n(341915),
    A = n(405670),
    I = n(972495),
    T = n(943849),
    y = n(561844),
    S = n(590202),
    v = n(437343),
    C = n(710969),
    b = n(792620),
    N = n(814793),
    R = n(753386),
    O = n(964168),
    D = n(419818),
    L = n(654487),
    w = n(652215),
    x = n(488995),
    P = n(985018);
let M = "in-app",
    k = "Discord Widget";
function U(e) {
    let { quest: t, sourceQuestContent: i } = e;
    (0, o.mMO)(async () => {
        let { default: e } = await n.e("67299").then(n.bind(n, 975726));
        return (n) => (0, r.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: i });
    });
}
function G(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: a } = await n.e("26747").then(n.bind(n, 529398));
        return (n) => (0, r.jsx)(a, { ...n, initialQuest: e, location: t, sourceQuestContent: i });
    });
}
function F(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: a } = await n.e("67426").then(n.bind(n, 268473));
        return (n) => (0, r.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: i, location: t });
    });
}
function V(e, t, i, a) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("90948").then(n.bind(n, 651663));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: i, location: t, preview: a });
    });
}
function B(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: a } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, r.jsx)(a, { ...n, quest: e, location: t, sourceQuestContent: i });
    });
}
function j(e, t) {
    (0, y.Y5)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, o.mMO)(async () => {
            let { default: i } = await n.e("132").then(n.bind(n, 348559));
            return (n) => (0, r.jsx)(i, { ...n, questContent: t.content, quest: e });
        });
}
function H() {
    let {
        fromContent: e,
        questId: t,
        forceDiscoveryQuestHomeRoute: n = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, D.A.getState().setUtmCurrentContext)({
        utmSourceCurrent: k,
        utmMediumCurrent: M,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(E.uF).find((t) => E.uF[t] === e),
    });
    let r = null != t ? `#${t}` : "";
    n && u.A.setState({ selectedTab: x.GlobalDiscoveryTab.QUESTS }),
        (0, d.default)(),
        (0, c.pX)((n ? w.BVt.QUEST_HOME : w.BVt.QUEST_HOME_V2) + r);
}
let Y = 0.2;
function W(e) {
    let t = (0, T.L)({ quest: e }),
        n = { location: L.rE.QUESTS_BAR };
    if (!(0, I.l)(n) || Math.random() > Y) return;
    let r = (0, v.A)(e);
    t.log(`Showing survey ${r.id}`), (0, O.m)({ questId: e.id, survey: r });
}
function K() {
    return Promise.resolve().then(n.bind(n, 717415));
}
function $(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: a,
        sourceQuestContentCTA: s,
        autoplay: l = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, b.BS)(t)) return void Q(t);
    let c = (0, i.A)();
    if (!u && t.userStatus?.enrolledAt == null && !(0, C.Ic)(t)) {
        g.A.isEnrolling(t.id) ||
            (0, p.Oy)(t.id, { questContent: n, questContentCTA: S.Cy.ACCEPT_QUEST, sourceQuestContent: a });
        let e = A.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, p.QG)(t.id),
            f.default.track(w.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, S.jO)(a),
                source_quest_content_cta: s,
                video_session_id: c,
            }));
    }
    (0, o.mMO)(
        async () => {
            let { default: e } = await K();
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    openStartClockTime: performance.now(),
                    questId: t.id,
                    autoplay: l,
                    videoSessionId: c,
                    sourceQuestContent: a,
                });
        },
        {
            modalKey: (0, R.cZ)(t.id),
            backdropStyle: o.F2Z.IMMERSIVE,
            onCloseCallback: () => (0, R.vm)({ questId: t.id, sourceQuestContent: a, videoSessionId: c }),
        },
    );
}
function z(e) {
    let t = platform.os?.family,
        n = "quest";
    if ("Android" === t || "iOS" === t) {
        let t = _.default.getFingerprint(),
            r = (0, a.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
        return (0, a.Ay)(i, { utmSource: n, fingerprint: t, attemptId: r });
    }
    return "discord://";
}
function q(e) {
    let t = z(e),
        n = (0, a.X7)(t);
    null != n &&
        f.default.track(w.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        h.A.launch(t, (t) => {
            t || (0, c.bG)({ pathname: w.BVt.QUEST_HOME_V2, hash: e });
        });
}
function X(e) {
    let t = platform.os?.family,
        n = "quest-preview";
    if ("Android" === t || "iOS" === t) {
        let t = _.default.getFingerprint(),
            r = (0, a.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
        return (0, a.Ay)(i, { utmSource: n, fingerprint: t, attemptId: r });
    }
    return "discord://";
}
function Z(e) {
    let t = X(e),
        n = (0, a.X7)(t);
    null != n &&
        f.default.track(w.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        h.A.launch(t, (t) => {
            t || (0, c.bG)({ pathname: w.BVt.QUEST_HOME_V2, hash: e });
        });
}
function Q(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await Promise.all([n.e("50906"), n.e("77828")]).then(n.bind(n, 491390));
        return (n) => (0, r.jsx)(t, { ...n, questId: e.id });
    });
}
async function J(e, t) {
    let { type: n } = await (0, p.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case p.WM.SUCCESS:
            $({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case p.WM.CAPTCHA_FAILED:
            l.A.show({ title: P.intl.string(P.t["/CidxO"]), body: P.intl.string(P.t.HQdHg6) });
            break;
        case p.WM.UNKNOWN_ERROR:
            l.A.show({ title: P.intl.string(P.t.R0RpRX), body: P.intl.string(P.t.OXD41D) });
        case p.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ee(e) {
    if ((0, N.vA)(e)) return e.config.features.includes(L.Li.CLOUD_GAMING_ACTIVITY) ? o.hpF : o._xR;
}
