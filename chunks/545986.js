"use strict";
n.d(t, {
    Df: () => G,
    Fy: () => Z,
    Oz: () => J,
    QA: () => $,
    Zc: () => B,
    cf: () => U,
    d5: () => K,
    e0: () => Q,
    hJ: () => F,
    l9: () => W,
    m6: () => V,
    navigateToQuestHome: () => H,
    q$: () => X,
    rx: () => k,
    z6: () => Y,
});
var r = n(627968);
n(64700);
var i = n(835245),
    s = n(49485),
    a = n(80703),
    o = n(397927),
    l = n(157559),
    u = n(726845),
    c = n(976860),
    d = n(12901),
    _ = n(961350),
    f = n(954571),
    p = n(877062),
    h = n(829219),
    m = n(859703),
    E = n(341915),
    g = n(405670),
    A = n(972495),
    I = n(943849),
    T = n(561844),
    S = n(590202),
    y = n(437343),
    v = n(710969),
    N = n(792620),
    C = n(814793),
    b = n(753386),
    R = n(964168),
    O = n(419818),
    D = n(654487),
    L = n(652215),
    w = n(488995),
    x = n(985018);
let M = "in-app",
    P = "Discord Widget";
function k(e) {
    let { quest: t, sourceQuestContent: i } = e;
    (0, o.mMO)(async () => {
        let { default: e } = await n.e("67299").then(n.bind(n, 975726));
        return (n) => (0, r.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: i });
    });
}
function U(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("26747").then(n.bind(n, 529398));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: i });
    });
}
function G(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("67426").then(n.bind(n, 268473));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: i, location: t });
    });
}
function F(e, t, i, s) {
    (0, o.mMO)(async () => {
        let { default: a } = await n.e("90948").then(n.bind(n, 651663));
        return (n) => (0, r.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: i, location: t, preview: s });
    });
}
function V(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, r.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: i });
    });
}
function B(e, t) {
    (0, T.Y5)({
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
    (0, O.A.getState().setUtmCurrentContext)({
        utmSourceCurrent: P,
        utmMediumCurrent: M,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(E.uF).find((t) => E.uF[t] === e),
    });
    let r = null != t ? `#${t}` : "";
    n && u.A.setState({ selectedTab: w.GlobalDiscoveryTab.QUESTS }),
        (0, d.default)(),
        (0, c.pX)((n ? L.BVt.QUEST_HOME : L.BVt.QUEST_HOME_V2) + r);
}
let j = 0.2;
function Y(e) {
    let t = (0, I.L)({ quest: e }),
        n = { location: D.rE.QUESTS_BAR };
    if (!(0, A.l)(n) || Math.random() > j) return;
    let r = (0, y.A)(e);
    t.log(`Showing survey ${r.id}`), (0, R.m)({ questId: e.id, survey: r });
}
function W() {
    return Promise.all([n.e("35584"), n.e("23628"), n.e("5344")]).then(n.bind(n, 717415));
}
function K(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: l = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, N.BS)(t)) return void Z(t);
    let c = (0, i.A)();
    if (!u && t.userStatus?.enrolledAt == null && !(0, v.Ic)(t)) {
        m.A.isEnrolling(t.id) ||
            (0, h.Oy)(t.id, { questContent: n, questContentCTA: S.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = g.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, h.QG)(t.id),
            f.default.track(L.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, S.jO)(s),
                source_quest_content_cta: a,
                video_session_id: c,
            }));
    }
    (0, o.mMO)(
        async () => {
            let { default: e } = await W();
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    openStartClockTime: performance.now(),
                    questId: t.id,
                    autoplay: l,
                    videoSessionId: c,
                    sourceQuestContent: s,
                });
        },
        {
            modalKey: (0, b.cZ)(t.id),
            backdropStyle: o.F2Z.IMMERSIVE,
            onCloseCallback: () => (0, b.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: c }),
        },
    );
}
function z(e) {
    let t = platform.os?.family,
        n = "quest";
    if ("Android" === t || "iOS" === t) {
        let t = _.default.getFingerprint(),
            r = (0, s.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
        return (0, s.Ay)(i, { utmSource: n, fingerprint: t, attemptId: r });
    }
    return "discord://";
}
function $(e) {
    let t = z(e),
        n = (0, s.X7)(t);
    null != n &&
        f.default.track(L.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.A.launch(t, (t) => {
            t || (0, c.bG)({ pathname: L.BVt.QUEST_HOME_V2, hash: e });
        });
}
function q(e) {
    let t = platform.os?.family,
        n = "quest-preview";
    if ("Android" === t || "iOS" === t) {
        let t = _.default.getFingerprint(),
            r = (0, s.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
        return (0, s.Ay)(i, { utmSource: n, fingerprint: t, attemptId: r });
    }
    return "discord://";
}
function X(e) {
    let t = q(e),
        n = (0, s.X7)(t);
    null != n &&
        f.default.track(L.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.A.launch(t, (t) => {
            t || (0, c.bG)({ pathname: L.BVt.QUEST_HOME_V2, hash: e });
        });
}
function Z(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await Promise.all([n.e("45563"), n.e("77828")]).then(n.bind(n, 491390));
        return (n) => (0, r.jsx)(t, { ...n, questId: e.id });
    });
}
async function Q(e, t) {
    let { type: n } = await (0, h.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case h.WM.SUCCESS:
            K({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case h.WM.CAPTCHA_FAILED:
            l.A.show({ title: x.intl.string(x.t["/CidxO"]), body: x.intl.string(x.t.HQdHg6) });
            break;
        case h.WM.UNKNOWN_ERROR:
            l.A.show({ title: x.intl.string(x.t.R0RpRX), body: x.intl.string(x.t.OXD41D) });
        case h.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function J(e) {
    if ((0, C.vA)(e)) return e.config.features.includes(D.Li.CLOUD_GAMING_ACTIVITY) ? o.hpF : o._xR;
}
