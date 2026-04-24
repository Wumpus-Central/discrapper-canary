n.d(t, {
    Df: () => j,
    Fy: () => ei,
    Oz: () => er,
    QA: () => ee,
    Zc: () => q,
    cf: () => K,
    d5: () => J,
    e0: () => ea,
    f7: () => Y,
    gC: () => en,
    hJ: () => $,
    l9: () => z,
    m6: () => Q,
    navigateToQuestHome: () => X,
    q$: () => et,
    rx: () => x,
    z6: () => Z,
});
var i = n(627968);
n(64700);
var a = n(132500),
    r = n(742821),
    _ = n(80703);
n(876230);
var s = n(192308),
    l = n(892491),
    o = n(414499),
    E = n(687966),
    d = n(157559),
    c = n(376728),
    u = n(167189),
    I = n(833291),
    T = n(726845),
    A = n(976860),
    S = n(779733),
    N = n(495544),
    O = n(299091),
    R = n(711014),
    f = n(954571),
    C = n(998218),
    p = n(877062),
    D = n(829219),
    L = n(859703),
    m = n(405670),
    h = n(245853),
    g = n(859387),
    b = n(561844),
    U = n(590202),
    P = n(851936),
    M = n(437343),
    G = n(710969),
    y = n(792620),
    v = n(814793),
    B = n(753386),
    w = n(448967),
    F = n(654487),
    V = n(652215),
    H = n(488995),
    k = n(985018);
async function W(e) {
    try {
        let t = (0, I.br)(e);
        if (null == t || t.type !== u.I.INVITE) return !1;
        let n = O.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await c.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = R.Ay.getFlattenedGuildIds(),
            a = n?.guild?.id;
        return null != a && i.includes(a);
    } catch (e) {
        return !1;
    }
}
async function Y(e) {
    try {
        if (C.A.isDiscordUrl(e)) return !0;
        return await W(e);
    } catch (e) {
        return !1;
    }
}
function x(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("24199"),
            n.e("57036"),
            n.e("88394"),
            n.e("80527"),
            n.e("58710"),
            n.e("31825"),
            n.e("23353"),
            n.e("7175"),
            n.e("37249"),
            n.e("14138"),
            n.e("8971"),
            n.e("85071"),
            n.e("88017"),
            n.e("1040"),
            n.e("64615"),
            n.e("17239"),
            n.e("66950"),
            n.e("58164"),
            n.e("38229"),
            n.e("20861"),
            n.e("36682"),
            n.e("45723"),
            n.e("56871"),
            n.e("69601"),
            n.e("47511"),
            n.e("51444"),
            n.e("62290"),
            n.e("80973"),
            n.e("82731"),
            n.e("38495"),
            n.e("57752"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: a });
    });
}
function K(e, t, a) {
    (0, s.openModalLazy)(async () => {
        let { default: r } = await Promise.all([n.e("7175"), n.e("38495"), n.e("6119")]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(r, { ...n, initialQuest: e, location: t, sourceQuestContent: a });
    });
}
function j(e, t, a) {
    (0, s.openModalLazy)(async () => {
        let { default: r } = await Promise.all([n.e("7175"), n.e("38495"), n.e("61614")]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(r, { ...n, initialQuest: e, sourceQuestContent: a, location: t });
    });
}
function $(e, t, a, r) {
    (0, s.openModalLazy)(async () => {
        let { default: _ } = await Promise.all([n.e("80527"), n.e("7175"), n.e("38495"), n.e("14206")]).then(
            n.bind(n, 651663),
        );
        return (n) => (0, i.jsx)(_, { ...n, initialQuest: e, sourceQuestContent: a, location: t, preview: r });
    });
}
function Q(e, t, a) {
    (0, s.openModalLazy)(async () => {
        let { default: r } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(r, { ...n, quest: e, location: t, sourceQuestContent: a });
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
        (0, s.openModalLazy)(async () => {
            let { default: a } = await n.e("132").then(n.bind(n, 348559));
            return (n) => (0, i.jsx)(a, { ...n, questContent: t.content, quest: e });
        });
}
function X(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: i = !1 } = e;
    (0, v.jQ)({ questId: n, fromContent: t });
    let a = null != n ? `#${n}` : "";
    i && T.A.setState({ selectedTab: H.GlobalDiscoveryTab.QUESTS }),
        (0, S.default)(),
        (0, A.pX)((i ? V.BVt.QUEST_HOME_DEPRECATED : V.BVt.QUEST_HOME) + a);
}
function Z(e) {
    let t = (0, P.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let n = (0, M.A)(e);
    t.log(`Showing survey ${n.id}`), (0, w.m)({ questId: e.id, survey: n });
}
function z() {
    return Promise.all([
        n.e("57174"),
        n.e("92868"),
        n.e("7175"),
        n.e("91652"),
        n.e("77375"),
        n.e("19580"),
        n.e("10848"),
    ]).then(n.bind(n, 834135));
}
function J(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: r,
        sourceQuestContentCTA: _,
        autoplay: o = !0,
        skipEnrollmentCheck: E = !1,
    } = e;
    if ((0, y.K$)(t)) return void ei(t);
    let d = (0, a.A)();
    if (!E && t.userStatus?.enrolledAt == null && !(0, G.Ic)(t)) {
        L.A.isEnrolling(t.id) ||
            (0, D.Oy)(t.id, { questContent: n, questContentCTA: U.Cy.ACCEPT_QUEST, sourceQuestContent: r });
        let e = m.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, D.QG)(t.id),
            f.default.track(V.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, U.jO)(r),
                source_quest_content_cta: _,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: c, muted: u, volume: I, captionEnabled: T } = m.Ay.getState(),
        { enabled: A, variant: S } = h.Ig.getConfig({ location: F.rE.VIDEO_MODAL }),
        N = null != (0, g.tW)(t, g.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    u &&
        A &&
        (S === h.sy.AUTO_ENABLE_CAPTIONS && N && !T
            ? c(!0)
            : S === h.sy.AUTO_UNMUTE && (m.Ay.getState().setMuted(!1), 0 === I && m.Ay.getState().setVolume(0.3)));
    let O = performance.now();
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await z();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: O,
                    questId: t.id,
                    autoplay: o,
                    videoSessionId: d,
                    sourceQuestContent: r,
                });
        },
        {
            modalKey: (0, B.cZ)(t.id),
            backdropStyle: l.F.IMMERSIVE,
            onCloseCallback: () => (0, B.vm)({ questId: t.id, sourceQuestContent: r, videoSessionId: d }),
        },
    );
}
function ee(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = N.default.getFingerprint(),
                    n = (0, r.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, r.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, r.X7)(t);
    null != n &&
        f.default.track(V.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, _.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.A.launch(t, (t) => {
            t || (0, A.bG)({ pathname: V.BVt.QUEST_HOME, hash: e });
        });
}
function et(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = N.default.getFingerprint(),
                    n = (0, r.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, r.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, r.X7)(t);
    null != n &&
        f.default.track(V.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, _.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.A.launch(t, (t) => {
            t || (0, A.bG)({ pathname: V.BVt.QUEST_HOME, hash: e });
        });
}
function en(e, t) {
    (0, s.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("24199"),
            n.e("80527"),
            n.e("56871"),
            n.e("62092"),
            n.e("98970"),
            n.e("4544"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(a, { ...n, multiplier: e, eligibleToReceivePremiumRewards: t });
    });
}
function ei(e) {
    (0, s.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("53242"), n.e("27818")]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function ea(e, t) {
    let { type: n } = await (0, D.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case D.WM.SUCCESS:
            J({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case D.WM.CAPTCHA_FAILED:
            d.A.show({ title: k.intl.string(k.t["/CidxO"]), body: k.intl.string(k.t.HQdHg6) });
            break;
        case D.WM.UNKNOWN_ERROR:
            d.A.show({ title: k.intl.string(k.t.R0RpRX), body: k.intl.string(k.t.OXD41D) });
        case D.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function er(e) {
    if ((0, v.vA)(e)) return e.config.features.includes(F.Li.CLOUD_GAMING_ACTIVITY) ? o.h : E._;
}
