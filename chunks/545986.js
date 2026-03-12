"use strict";
n.d(t, {
    Df: () => z,
    Fy: () => eo,
    Oz: () => eu,
    QA: () => ei,
    Zc: () => X,
    cf: () => $,
    d5: () => en,
    e0: () => el,
    f7: () => W,
    hJ: () => q,
    l9: () => et,
    m6: () => Z,
    navigateToQuestHome: () => Q,
    q$: () => ea,
    rx: () => K,
    z6: () => ee,
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
    y = n(341915),
    v = n(405670),
    N = n(245853),
    C = n(972495),
    R = n(943849),
    O = n(579473),
    b = n(561844),
    D = n(590202),
    L = n(437343),
    w = n(710969),
    M = n(792620),
    x = n(814793),
    P = n(753386),
    k = n(964168),
    U = n(419818),
    G = n(654487),
    F = n(652215),
    V = n(488995),
    B = n(985018);
let H = "in-app",
    j = "Discord Widget";
async function Y(e) {
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
async function W(e) {
    try {
        if (A.A.isDiscordUrl(e)) return !0;
        return await Y(e);
    } catch (e) {
        return !1;
    }
}
function K(e) {
    let { quest: t, sourceQuestContent: i } = e;
    (0, o.mMO)(async () => {
        let { default: e } = await n.e("67299").then(n.bind(n, 975726));
        return (n) => (0, r.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: i });
    });
}
function $(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("26747").then(n.bind(n, 529398));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: i });
    });
}
function z(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("67426").then(n.bind(n, 268473));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: i, location: t });
    });
}
function q(e, t, i, s) {
    (0, o.mMO)(async () => {
        let { default: a } = await n.e("90948").then(n.bind(n, 651663));
        return (n) => (0, r.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: i, location: t, preview: s });
    });
}
function Z(e, t, i) {
    (0, o.mMO)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, r.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: i });
    });
}
function X(e, t) {
    (0, b.Y5)({
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
function Q() {
    let {
        fromContent: e,
        questId: t,
        forceDiscoveryQuestHomeRoute: n = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, U.A.getState().setUtmCurrentContext)({
        utmSourceCurrent: j,
        utmMediumCurrent: H,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(y.uF).find((t) => y.uF[t] === e),
    });
    let r = null != t ? `#${t}` : "";
    n && _.A.setState({ selectedTab: V.GlobalDiscoveryTab.QUESTS }),
        (0, p.default)(),
        (0, f.pX)((n ? F.BVt.QUEST_HOME_DEPRECATED : F.BVt.QUEST_HOME) + r);
}
let J = 0.2;
function ee(e) {
    let t = (0, R.L)({ quest: e }),
        n = { location: G.rE.QUESTS_BAR };
    if (!(0, C.l)(n) || Math.random() > J) return;
    let r = (0, L.A)(e);
    t.log(`Showing survey ${r.id}`), (0, k.m)({ questId: e.id, survey: r });
}
function et() {
    return Promise.all([n.e("35584"), n.e("23628"), n.e("73845")]).then(n.bind(n, 717415));
}
function en(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: l = !0,
        skipEnrollmentCheck: u = !1,
    } = e;
    if ((0, M.K$)(t)) return void eo(t);
    let c = (0, i.A)();
    if (!u && t.userStatus?.enrolledAt == null && !(0, w.Ic)(t)) {
        S.A.isEnrolling(t.id) ||
            (0, T.Oy)(t.id, { questContent: n, questContentCTA: D.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = v.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, T.QG)(t.id),
            g.default.track(F.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, D.jO)(s),
                source_quest_content_cta: a,
                video_session_id: c,
            }));
    }
    let { setCaptionEnabled: d, muted: _, volume: f, captionEnabled: p } = v.Ay.getState(),
        { enabled: h, variant: m } = N.Ig.getConfig({ location: G.rE.VIDEO_MODAL }),
        E = null != (0, O.tW)(t, O.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    _ &&
        h &&
        (m === N.sy.AUTO_ENABLE_CAPTIONS && E && !p
            ? d(!0)
            : m === N.sy.AUTO_UNMUTE && (v.Ay.getState().setMuted(!1), 0 === f && v.Ay.getState().setVolume(0.3))),
        (0, o.mMO)(
            async () => {
                let { default: e } = await et();
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
                modalKey: (0, P.cZ)(t.id),
                backdropStyle: o.F2Z.IMMERSIVE,
                onCloseCallback: () => (0, P.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: c }),
            },
        );
}
function er(e) {
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
function ei(e) {
    let t = er(e),
        n = (0, s.X7)(t);
    null != n &&
        g.default.track(F.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        I.A.launch(t, (t) => {
            t || (0, f.bG)({ pathname: F.BVt.QUEST_HOME, hash: e });
        });
}
function es(e) {
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
function ea(e) {
    let t = es(e),
        n = (0, s.X7)(t);
    null != n &&
        g.default.track(F.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        I.A.launch(t, (t) => {
            t || (0, f.bG)({ pathname: F.BVt.QUEST_HOME, hash: e });
        });
}
function eo(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await Promise.all([n.e("86184"), n.e("77828")]).then(n.bind(n, 491390));
        return (n) => (0, r.jsx)(t, { ...n, questId: e.id });
    });
}
async function el(e, t) {
    let { type: n } = await (0, T.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case T.WM.SUCCESS:
            en({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case T.WM.CAPTCHA_FAILED:
            l.A.show({ title: B.intl.string(B.t["/CidxO"]), body: B.intl.string(B.t.HQdHg6) });
            break;
        case T.WM.UNKNOWN_ERROR:
            l.A.show({ title: B.intl.string(B.t.R0RpRX), body: B.intl.string(B.t.OXD41D) });
        case T.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function eu(e) {
    if ((0, x.vA)(e)) return e.config.features.includes(G.Li.CLOUD_GAMING_ACTIVITY) ? o.hpF : o._xR;
}
