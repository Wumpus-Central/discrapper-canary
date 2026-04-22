"use strict";
n.d(t, {
    Df: () => K,
    Fy: () => er,
    Oz: () => es,
    QA: () => ee,
    Zc: () => q,
    cf: () => j,
    d5: () => Z,
    e0: () => ei,
    f7: () => Y,
    gC: () => en,
    hJ: () => $,
    l9: () => J,
    m6: () => z,
    navigateToQuestHome: () => X,
    q$: () => et,
    rx: () => W,
    z6: () => Q,
});
var r = n(627968);
n(64700);
var i = n(835245),
    s = n(49485),
    a = n(80703);
n(876230);
var o = n(192308),
    l = n(892491),
    u = n(414499),
    d = n(687966),
    c = n(157559),
    _ = n(846293),
    f = n(167189),
    E = n(833291),
    h = n(726845),
    p = n(976860),
    m = n(779733),
    g = n(961350),
    A = n(299091),
    I = n(711014),
    T = n(954571),
    S = n(998218),
    y = n(877062),
    N = n(829219),
    O = n(859703),
    R = n(405670),
    v = n(245853),
    C = n(579473),
    b = n(561844),
    D = n(590202),
    L = n(851936),
    w = n(437343),
    M = n(710969),
    P = n(792620),
    U = n(814793),
    k = n(753386),
    x = n(964168),
    G = n(654487),
    V = n(652215),
    F = n(488995),
    B = n(985018);
async function H(e) {
    try {
        let t = (0, E.br)(e);
        if (null == t || t.type !== f.I.INVITE) return !1;
        let n = A.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await _.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let r = I.Ay.getFlattenedGuildIds(),
            i = n?.guild?.id;
        return null != i && r.includes(i);
    } catch (e) {
        return !1;
    }
}
async function Y(e) {
    try {
        if (S.A.isDiscordUrl(e)) return !0;
        return await H(e);
    } catch (e) {
        return !1;
    }
}
function W(e) {
    let { quest: t, sourceQuestContent: i } = e;
    (0, o.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("24199"),
            n.e("57036"),
            n.e("70474"),
            n.e("76640"),
            n.e("7175"),
            n.e("55202"),
            n.e("23353"),
            n.e("73667"),
            n.e("11250"),
            n.e("14138"),
            n.e("3442"),
            n.e("85071"),
            n.e("88017"),
            n.e("70994"),
            n.e("17239"),
            n.e("24267"),
            n.e("51793"),
            n.e("58164"),
            n.e("81645"),
            n.e("36682"),
            n.e("63070"),
            n.e("25370"),
            n.e("96313"),
            n.e("23252"),
            n.e("93777"),
        ]).then(n.bind(n, 975726));
        return (n) => (0, r.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: i });
    });
}
function j(e, t, i) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([n.e("7175"), n.e("23252"), n.e("6119")]).then(n.bind(n, 529398));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: i });
    });
}
function K(e, t, i) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([n.e("7175"), n.e("23252"), n.e("25804")]).then(n.bind(n, 268473));
        return (n) => (0, r.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: i, location: t });
    });
}
function $(e, t, i, s) {
    (0, o.openModalLazy)(async () => {
        let { default: a } = await Promise.all([n.e("76640"), n.e("7175"), n.e("23252"), n.e("1997")]).then(
            n.bind(n, 651663),
        );
        return (n) => (0, r.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: i, location: t, preview: s });
    });
}
function z(e, t, i) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, r.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: i });
    });
}
function q(e, t) {
    (0, b.Y5)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, o.openModalLazy)(async () => {
            let { default: i } = await n.e("132").then(n.bind(n, 348559));
            return (n) => (0, r.jsx)(i, { ...n, questContent: t.content, quest: e });
        });
}
function X(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: r = !1 } = e;
    (0, U.jQ)({ questId: n, fromContent: t });
    let i = null != n ? `#${n}` : "";
    r && h.A.setState({ selectedTab: F.GlobalDiscoveryTab.QUESTS }),
        (0, m.default)(),
        (0, p.pX)((r ? V.BVt.QUEST_HOME_DEPRECATED : V.BVt.QUEST_HOME) + i);
}
function Q(e) {
    let t = (0, L.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let n = (0, w.A)(e);
    t.log(`Showing survey ${n.id}`), (0, x.m)({ questId: e.id, survey: n });
}
function J() {
    return Promise.all([
        n.e("57174"),
        n.e("92868"),
        n.e("7175"),
        n.e("91652"),
        n.e("19482"),
        n.e("7634"),
        n.e("96712"),
    ]).then(n.bind(n, 201257));
}
function Z(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: u = !0,
        skipEnrollmentCheck: d = !1,
    } = e;
    if ((0, P.K$)(t)) return void er(t);
    let c = (0, i.A)();
    if (!d && t.userStatus?.enrolledAt == null && !(0, M.Ic)(t)) {
        O.A.isEnrolling(t.id) ||
            (0, N.Oy)(t.id, { questContent: n, questContentCTA: D.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = R.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, N.QG)(t.id),
            T.default.track(V.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, D.jO)(s),
                source_quest_content_cta: a,
                video_session_id: c,
            }));
    }
    let { setCaptionEnabled: _, muted: f, volume: E, captionEnabled: h } = R.Ay.getState(),
        { enabled: p, variant: m } = v.Ig.getConfig({ location: G.rE.VIDEO_MODAL }),
        g = null != (0, C.tW)(t, C.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    f &&
        p &&
        (m === v.sy.AUTO_ENABLE_CAPTIONS && g && !h
            ? _(!0)
            : m === v.sy.AUTO_UNMUTE && (R.Ay.getState().setMuted(!1), 0 === E && R.Ay.getState().setVolume(0.3)));
    let A = performance.now();
    (0, o.openModalLazy)(
        async () => {
            let { default: e } = await J();
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    openStartClockTime: A,
                    questId: t.id,
                    autoplay: u,
                    videoSessionId: c,
                    sourceQuestContent: s,
                });
        },
        {
            modalKey: (0, k.cZ)(t.id),
            backdropStyle: l.F.IMMERSIVE,
            onCloseCallback: () => (0, k.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: c }),
        },
    );
}
function ee(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = g.default.getFingerprint(),
                    n = (0, s.I_)(),
                    r = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, s.Ay)(r, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        T.default.track(V.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        y.A.launch(t, (t) => {
            t || (0, p.bG)({ pathname: V.BVt.QUEST_HOME, hash: e });
        });
}
function et(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = g.default.getFingerprint(),
                    n = (0, s.I_)(),
                    r = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, s.Ay)(r, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        T.default.track(V.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        y.A.launch(t, (t) => {
            t || (0, p.bG)({ pathname: V.BVt.QUEST_HOME, hash: e });
        });
}
function en(e, t) {
    (0, o.openModalLazy)(async () => {
        let { default: i } = await Promise.all([
            n.e("24199"),
            n.e("76640"),
            n.e("25370"),
            n.e("56403"),
            n.e("84560"),
            n.e("29864"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, r.jsx)(i, { ...n, multiplier: e, eligibleToReceivePremiumRewards: t });
    });
}
function er(e) {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("66535"), n.e("27818")]).then(n.bind(n, 518420));
        return (n) => (0, r.jsx)(t, { ...n, questId: e.id });
    });
}
async function ei(e, t) {
    let { type: n } = await (0, N.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case N.WM.SUCCESS:
            Z({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case N.WM.CAPTCHA_FAILED:
            c.A.show({ title: B.intl.string(B.t["/CidxO"]), body: B.intl.string(B.t.HQdHg6) });
            break;
        case N.WM.UNKNOWN_ERROR:
            c.A.show({ title: B.intl.string(B.t.R0RpRX), body: B.intl.string(B.t.OXD41D) });
        case N.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function es(e) {
    if ((0, U.vA)(e)) return e.config.features.includes(G.Li.CLOUD_GAMING_ACTIVITY) ? u.h : d._;
}
