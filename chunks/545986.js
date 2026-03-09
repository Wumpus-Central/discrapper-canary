"use strict";
n.d(t, {
    Df: () => K,
    Fy: () => es,
    Oz: () => eo,
    QA: () => en,
    Zc: () => q,
    cf: () => W,
    d5: () => ee,
    e0: () => ea,
    f7: () => j,
    hJ: () => $,
    l9: () => J,
    m6: () => z,
    navigateToQuestHome: () => Z,
    q$: () => ei,
    rx: () => Y,
    z6: () => Q,
});
var r = n(627968);
n(64700);
var i = n(835245),
    s = n(49485),
    a = n(80703),
    o = n(397927),
    l = n(157559),
    u = n(846293),
    c = n(167189),
    d = n(833291),
    _ = n(726845),
    f = n(976860),
    p = n(12901),
    h = n(961350),
    m = n(299091),
    E = n(711014),
    g = n(954571),
    A = n(998218),
    I = n(877062),
    T = n(829219),
    S = n(859703),
    y = n(341915),
    v = n(405670),
    N = n(972495),
    C = n(943849),
    R = n(561844),
    O = n(590202),
    b = n(437343),
    D = n(710969),
    L = n(792620),
    w = n(814793),
    M = n(753386),
    x = n(964168),
    P = n(419818),
    k = n(654487),
    U = n(652215),
    G = n(488995),
    F = n(985018);
let V = "in-app",
    B = "Discord Widget";
async function H(e) {
    try {
        let t = (0, d.br)(e);
        if (null == t || t.type !== c.I.INVITE) return !1;
        let n = m.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await u.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let r = E.Ay.getFlattenedGuildIds(),
            i = n?.guild?.id;
        return null != i && r.includes(i);
    } catch (e) {
        return !1;
    }
}
async function j(e) {
    try {
        if (A.A.isDiscordUrl(e)) return !0;
        return await H(e);
    } catch (e) {
        return !1;
    }
}
function Y(e) {
    let { quest: t, sourceQuestContent: i } = e;
    (0, o.mMO)(async () => {
        let { default: e } = await n.e("67299").then(n.bind(n, 975726));
        return (n) => (0, r.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: i });
    });
}
function W(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("26747").then(n.bind(n, 529398));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: i });
    });
}
function K(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("67426").then(n.bind(n, 268473));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: i, location: t });
    });
}
function $(e, t, i, s) {
    (0, o.mMO)(async () => {
        let { default: a } = await n.e("90948").then(n.bind(n, 651663));
        return (n) => (0, r.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: i, location: t, preview: s });
    });
}
function z(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, r.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: i });
    });
}
function q(e, t) {
    (0, R.Y5)({
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
function Z() {
    let {
        fromContent: e,
        questId: t,
        forceDiscoveryQuestHomeRoute: n = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, P.A.getState().setUtmCurrentContext)({
        utmSourceCurrent: B,
        utmMediumCurrent: V,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(y.uF).find((t) => y.uF[t] === e),
    });
    let r = null != t ? `#${t}` : "";
    n && _.A.setState({ selectedTab: G.GlobalDiscoveryTab.QUESTS }),
        (0, p.default)(),
        (0, f.pX)((n ? U.BVt.QUEST_HOME_DEPRECATED : U.BVt.QUEST_HOME) + r);
}
let X = 0.2;
function Q(e) {
    let t = (0, C.L)({ quest: e }),
        n = { location: k.rE.QUESTS_BAR };
    if (!(0, N.l)(n) || Math.random() > X) return;
    let r = (0, b.A)(e);
    t.log(`Showing survey ${r.id}`), (0, x.m)({ questId: e.id, survey: r });
}
function J() {
    return Promise.all([n.e("35584"), n.e("23628"), n.e("73845")]).then(n.bind(n, 717415));
}
function ee(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: l = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, L.K$)(t)) return void es(t);
    let c = (0, i.A)();
    if (!u && t.userStatus?.enrolledAt == null && !(0, D.Ic)(t)) {
        S.A.isEnrolling(t.id) ||
            (0, T.Oy)(t.id, { questContent: n, questContentCTA: O.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = v.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, T.QG)(t.id),
            g.default.track(U.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, O.jO)(s),
                source_quest_content_cta: a,
                video_session_id: c,
            }));
    }
    (0, o.mMO)(
        async () => {
            let { default: e } = await J();
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
            modalKey: (0, M.cZ)(t.id),
            backdropStyle: o.F2Z.IMMERSIVE,
            onCloseCallback: () => (0, M.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: c }),
        },
    );
}
function et(e) {
    let t = platform.os?.family,
        n = "quest";
    if ("Android" === t || "iOS" === t) {
        let t = h.default.getFingerprint(),
            r = (0, s.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
        return (0, s.Ay)(i, { utmSource: n, fingerprint: t, attemptId: r });
    }
    return "discord://";
}
function en(e) {
    let t = et(e),
        n = (0, s.X7)(t);
    null != n &&
        g.default.track(U.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        I.A.launch(t, (t) => {
            t || (0, f.bG)({ pathname: U.BVt.QUEST_HOME, hash: e });
        });
}
function er(e) {
    let t = platform.os?.family,
        n = "quest-preview";
    if ("Android" === t || "iOS" === t) {
        let t = h.default.getFingerprint(),
            r = (0, s.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
        return (0, s.Ay)(i, { utmSource: n, fingerprint: t, attemptId: r });
    }
    return "discord://";
}
function ei(e) {
    let t = er(e),
        n = (0, s.X7)(t);
    null != n &&
        g.default.track(U.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        I.A.launch(t, (t) => {
            t || (0, f.bG)({ pathname: U.BVt.QUEST_HOME, hash: e });
        });
}
function es(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await Promise.all([n.e("76550"), n.e("77828")]).then(n.bind(n, 491390));
        return (n) => (0, r.jsx)(t, { ...n, questId: e.id });
    });
}
async function ea(e, t) {
    let { type: n } = await (0, T.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case T.WM.SUCCESS:
            ee({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case T.WM.CAPTCHA_FAILED:
            l.A.show({ title: F.intl.string(F.t["/CidxO"]), body: F.intl.string(F.t.HQdHg6) });
            break;
        case T.WM.UNKNOWN_ERROR:
            l.A.show({ title: F.intl.string(F.t.R0RpRX), body: F.intl.string(F.t.OXD41D) });
        case T.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function eo(e) {
    if ((0, w.vA)(e)) return e.config.features.includes(k.Li.CLOUD_GAMING_ACTIVITY) ? o.hpF : o._xR;
}
