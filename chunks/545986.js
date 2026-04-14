"use strict";
n.d(t, {
    Df: () => j,
    Fy: () => er,
    Oz: () => es,
    QA: () => J,
    Zc: () => K,
    cf: () => H,
    d5: () => X,
    e0: () => ei,
    f7: () => B,
    gC: () => en,
    hJ: () => Y,
    l9: () => Z,
    m6: () => W,
    navigateToQuestHome: () => $,
    q$: () => et,
    rx: () => V,
    z6: () => q,
});
var r = n(627968);
n(64700);
var i = n(835245),
    s = n(49485),
    a = n(80703);
n(876230);
var o = n(397927),
    l = n(157559),
    u = n(846293),
    c = n(167189),
    d = n(833291),
    _ = n(726845),
    f = n(976860),
    h = n(779733),
    p = n(961350),
    m = n(299091),
    E = n(711014),
    g = n(954571),
    A = n(998218),
    I = n(877062),
    T = n(829219),
    S = n(859703),
    y = n(405670),
    v = n(245853),
    C = n(579473),
    N = n(561844),
    R = n(590202),
    b = n(851936),
    O = n(437343),
    D = n(710969),
    L = n(792620),
    w = n(814793),
    M = n(753386),
    x = n(964168),
    P = n(654487),
    k = n(652215),
    U = n(488995),
    G = n(985018);
async function F(e) {
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
async function B(e) {
    try {
        if (A.A.isDiscordUrl(e)) return !0;
        return await F(e);
    } catch (e) {
        return !1;
    }
}
function V(e) {
    let { quest: t, sourceQuestContent: i } = e;
    (0, o.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("72302"), n.e("58686")]).then(n.bind(n, 975726));
        return (n) => (0, r.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: i });
    });
}
function H(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await Promise.all([n.e("72302"), n.e("28758")]).then(n.bind(n, 529398));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: i });
    });
}
function j(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await Promise.all([n.e("72302"), n.e("84111")]).then(n.bind(n, 268473));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: i, location: t });
    });
}
function Y(e, t, i, s) {
    (0, o.mMO)(async () => {
        let { default: a } = await Promise.all([n.e("72302"), n.e("16185")]).then(n.bind(n, 651663));
        return (n) => (0, r.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: i, location: t, preview: s });
    });
}
function W(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, r.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: i });
    });
}
function K(e, t) {
    (0, N.Y5)({
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
function $(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: r = !1 } = e;
    (0, w.jQ)({ questId: n, fromContent: t });
    let i = null != n ? `#${n}` : "";
    r && _.A.setState({ selectedTab: U.GlobalDiscoveryTab.QUESTS }),
        (0, h.default)(),
        (0, f.pX)((r ? k.BVt.QUEST_HOME_DEPRECATED : k.BVt.QUEST_HOME) + i);
}
let z = 0.01;
function q(e) {
    let t = (0, b.L)({ quest: e });
    if (Math.random() > z) return;
    let n = (0, O.A)(e);
    t.log(`Showing survey ${n.id}`), (0, x.m)({ questId: e.id, survey: n });
}
function Z() {
    return Promise.all([n.e("92868"), n.e("29636"), n.e("7634"), n.e("70294")]).then(n.bind(n, 201257));
}
function X(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: l = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, L.K$)(t)) return void er(t);
    let c = (0, i.A)();
    if (!u && t.userStatus?.enrolledAt == null && !(0, D.Ic)(t)) {
        S.A.isEnrolling(t.id) ||
            (0, T.Oy)(t.id, { questContent: n, questContentCTA: R.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = y.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, T.QG)(t.id),
            g.default.track(k.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, R.jO)(s),
                source_quest_content_cta: a,
                video_session_id: c,
            }));
    }
    let { setCaptionEnabled: d, muted: _, volume: f, captionEnabled: h } = y.Ay.getState(),
        { enabled: p, variant: m } = v.Ig.getConfig({ location: P.rE.VIDEO_MODAL }),
        E = null != (0, C.tW)(t, C.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    _ &&
        p &&
        (m === v.sy.AUTO_ENABLE_CAPTIONS && E && !h
            ? d(!0)
            : m === v.sy.AUTO_UNMUTE && (y.Ay.getState().setMuted(!1), 0 === f && y.Ay.getState().setVolume(0.3))),
        (0, o.mMO)(
            async () => {
                let { default: e } = await Z();
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
function Q(e) {
    let t = platform.os?.family,
        n = "quest";
    if ("Android" === t || "iOS" === t) {
        let t = p.default.getFingerprint(),
            r = (0, s.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
        return (0, s.Ay)(i, { utmSource: n, fingerprint: t, attemptId: r });
    }
    return "discord://";
}
function J(e) {
    let t = Q(e),
        n = (0, s.X7)(t);
    null != n &&
        g.default.track(k.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        I.A.launch(t, (t) => {
            t || (0, f.bG)({ pathname: k.BVt.QUEST_HOME, hash: e });
        });
}
function ee(e) {
    let t = platform.os?.family,
        n = "quest-preview";
    if ("Android" === t || "iOS" === t) {
        let t = p.default.getFingerprint(),
            r = (0, s.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
        return (0, s.Ay)(i, { utmSource: n, fingerprint: t, attemptId: r });
    }
    return "discord://";
}
function et(e) {
    let t = ee(e),
        n = (0, s.X7)(t);
    null != n &&
        g.default.track(k.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        I.A.launch(t, (t) => {
            t || (0, f.bG)({ pathname: k.BVt.QUEST_HOME, hash: e });
        });
}
function en(e, t) {
    (0, o.mMO)(async () => {
        let { default: i } = await Promise.all([n.e("21393"), n.e("27296"), n.e("35755"), n.e("61827")]).then(
            n.bind(n, 50292),
        );
        return (n) => (0, r.jsx)(i, { ...n, multiplier: e, eligibleToReceivePremiumRewards: t });
    });
}
function er(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await Promise.all([n.e("85939"), n.e("27818")]).then(n.bind(n, 518420));
        return (n) => (0, r.jsx)(t, { ...n, questId: e.id });
    });
}
async function ei(e, t) {
    let { type: n } = await (0, T.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case T.WM.SUCCESS:
            X({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case T.WM.CAPTCHA_FAILED:
            l.A.show({ title: G.intl.string(G.t["/CidxO"]), body: G.intl.string(G.t.HQdHg6) });
            break;
        case T.WM.UNKNOWN_ERROR:
            l.A.show({ title: G.intl.string(G.t.R0RpRX), body: G.intl.string(G.t.OXD41D) });
        case T.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function es(e) {
    if ((0, w.vA)(e)) return e.config.features.includes(P.Li.CLOUD_GAMING_ACTIVITY) ? o.hpF : o._xR;
}
