"use strict";
n.d(t, {
    Df: () => Y,
    Fy: () => ei,
    Oz: () => ea,
    QA: () => ee,
    Zc: () => $,
    cf: () => j,
    d5: () => Q,
    e0: () => es,
    f7: () => B,
    gC: () => er,
    hJ: () => W,
    l9: () => X,
    m6: () => K,
    navigateToQuestHome: () => z,
    q$: () => en,
    rx: () => H,
    z6: () => Z,
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
    p = n(12901),
    h = n(961350),
    m = n(299091),
    E = n(711014),
    g = n(954571),
    A = n(998218),
    I = n(877062),
    T = n(829219),
    S = n(859703),
    y = n(405670),
    v = n(245853),
    C = n(972495),
    N = n(579473),
    R = n(561844),
    O = n(590202),
    b = n(851936),
    D = n(437343),
    L = n(710969),
    w = n(792620),
    M = n(814793),
    x = n(753386),
    P = n(964168),
    k = n(654487),
    U = n(652215),
    G = n(488995),
    F = n(985018);
async function V(e) {
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
        return await V(e);
    } catch (e) {
        return !1;
    }
}
function H(e) {
    let { quest: t, sourceQuestContent: i } = e;
    (0, o.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("72302"), n.e("58686")]).then(n.bind(n, 975726));
        return (n) => (0, r.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: i });
    });
}
function j(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await Promise.all([n.e("72302"), n.e("28758")]).then(n.bind(n, 529398));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: i });
    });
}
function Y(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await Promise.all([n.e("72302"), n.e("84111")]).then(n.bind(n, 268473));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: i, location: t });
    });
}
function W(e, t, i, s) {
    (0, o.mMO)(async () => {
        let { default: a } = await Promise.all([n.e("72302"), n.e("16185")]).then(n.bind(n, 651663));
        return (n) => (0, r.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: i, location: t, preview: s });
    });
}
function K(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, r.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: i });
    });
}
function $(e, t) {
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
function z(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: r = !1 } = e;
    (0, M.jQ)({ questId: n, fromContent: t });
    let i = null != n ? `#${n}` : "";
    r && _.A.setState({ selectedTab: G.GlobalDiscoveryTab.QUESTS }),
        (0, p.default)(),
        (0, f.pX)((r ? U.BVt.QUEST_HOME_DEPRECATED : U.BVt.QUEST_HOME) + i);
}
let q = 0.2;
function Z(e) {
    let t = (0, b.L)({ quest: e }),
        n = { location: k.rE.QUESTS_BAR };
    if (!(0, C.l)(n) || Math.random() > q) return;
    let r = (0, D.A)(e);
    t.log(`Showing survey ${r.id}`), (0, P.m)({ questId: e.id, survey: r });
}
function X() {
    return Promise.all([n.e("57174"), n.e("92868"), n.e("91652"), n.e("29636"), n.e("7634"), n.e("68317")]).then(
        n.bind(n, 201257),
    );
}
function Q(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: l = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, w.K$)(t)) return void ei(t);
    let c = (0, i.A)();
    if (!u && t.userStatus?.enrolledAt == null && !(0, L.Ic)(t)) {
        S.A.isEnrolling(t.id) ||
            (0, T.Oy)(t.id, { questContent: n, questContentCTA: O.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = y.Ay.getState().getVideoProgress(t.id);
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
    let { setCaptionEnabled: d, muted: _, volume: f, captionEnabled: p } = y.Ay.getState(),
        { enabled: h, variant: m } = v.Ig.getConfig({ location: k.rE.VIDEO_MODAL }),
        E = null != (0, N.tW)(t, N.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    _ &&
        h &&
        (m === v.sy.AUTO_ENABLE_CAPTIONS && E && !p
            ? d(!0)
            : m === v.sy.AUTO_UNMUTE && (y.Ay.getState().setMuted(!1), 0 === f && y.Ay.getState().setVolume(0.3))),
        (0, o.mMO)(
            async () => {
                let { default: e } = await X();
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
                modalKey: (0, x.cZ)(t.id),
                backdropStyle: o.F2Z.IMMERSIVE,
                onCloseCallback: () => (0, x.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: c }),
            },
        );
}
function J(e) {
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
function ee(e) {
    let t = J(e),
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
function et(e) {
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
function er(e, t) {
    (0, o.mMO)(async () => {
        let { default: i } = await n.e("62101").then(n.bind(n, 50292));
        return (n) => (0, r.jsx)(i, { ...n, multiplier: e, eligibleToReceivePremiumRewards: t });
    });
}
function ei(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await Promise.all([n.e("8407"), n.e("27818")]).then(n.bind(n, 518420));
        return (n) => (0, r.jsx)(t, { ...n, questId: e.id });
    });
}
async function es(e, t) {
    let { type: n } = await (0, T.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case T.WM.SUCCESS:
            Q({
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
function ea(e) {
    if ((0, M.vA)(e)) return e.config.features.includes(k.Li.CLOUD_GAMING_ACTIVITY) ? o.hpF : o._xR;
}
