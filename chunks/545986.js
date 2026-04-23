n.d(t, {
    Df: () => K,
    Fy: () => ei,
    Oz: () => ea,
    QA: () => ee,
    Zc: () => q,
    cf: () => j,
    d5: () => Z,
    e0: () => er,
    f7: () => W,
    gC: () => en,
    hJ: () => $,
    l9: () => J,
    m6: () => Q,
    navigateToQuestHome: () => X,
    q$: () => et,
    rx: () => Y,
    z6: () => z,
});
var i = n(627968);
n(64700);
var r = n(132500),
    a = n(742821),
    s = n(80703);
n(876230);
var _ = n(192308),
    l = n(892491),
    o = n(414499),
    E = n(687966),
    d = n(157559),
    c = n(376728),
    u = n(167189),
    I = n(833291),
    A = n(726845),
    T = n(976860),
    S = n(779733),
    N = n(495544),
    O = n(299091),
    R = n(711014),
    f = n(954571),
    C = n(998218),
    p = n(877062),
    m = n(829219),
    L = n(859703),
    D = n(405670),
    h = n(245853),
    g = n(859387),
    b = n(561844),
    U = n(590202),
    P = n(851936),
    M = n(437343),
    y = n(710969),
    G = n(792620),
    v = n(814793),
    B = n(753386),
    w = n(448967),
    F = n(654487),
    V = n(652215),
    H = n(488995),
    k = n(985018);
async function x(e) {
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
            r = n?.guild?.id;
        return null != r && i.includes(r);
    } catch (e) {
        return !1;
    }
}
async function W(e) {
    try {
        if (C.A.isDiscordUrl(e)) return !0;
        return await x(e);
    } catch (e) {
        return !1;
    }
}
function Y(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, _.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("19235"), n.e("79162")]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function j(e, t, r) {
    (0, _.openModalLazy)(async () => {
        let { default: a } = await Promise.all([n.e("19235"), n.e("61106")]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, location: t, sourceQuestContent: r });
    });
}
function K(e, t, r) {
    (0, _.openModalLazy)(async () => {
        let { default: a } = await Promise.all([n.e("19235"), n.e("46449")]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: r, location: t });
    });
}
function $(e, t, r, a) {
    (0, _.openModalLazy)(async () => {
        let { default: s } = await Promise.all([n.e("19235"), n.e("94553")]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: r, location: t, preview: a });
    });
}
function Q(e, t, r) {
    (0, _.openModalLazy)(async () => {
        let { default: a } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(a, { ...n, quest: e, location: t, sourceQuestContent: r });
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
        (0, _.openModalLazy)(async () => {
            let { default: r } = await n.e("132").then(n.bind(n, 348559));
            return (n) => (0, i.jsx)(r, { ...n, questContent: t.content, quest: e });
        });
}
function X(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: i = !1 } = e;
    (0, v.jQ)({ questId: n, fromContent: t });
    let r = null != n ? `#${n}` : "";
    i && A.A.setState({ selectedTab: H.GlobalDiscoveryTab.QUESTS }),
        (0, S.default)(),
        (0, T.pX)((i ? V.BVt.QUEST_HOME_DEPRECATED : V.BVt.QUEST_HOME) + r);
}
function z(e) {
    let t = (0, P.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let n = (0, M.A)(e);
    t.log(`Showing survey ${n.id}`), (0, w.m)({ questId: e.id, survey: n });
}
function J() {
    return Promise.all([n.e("57174"), n.e("92868"), n.e("91652"), n.e("77375"), n.e("19580"), n.e("44932")]).then(
        n.bind(n, 834135),
    );
}
function Z(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: a,
        sourceQuestContentCTA: s,
        autoplay: o = !0,
        skipEnrollmentCheck: E = !1,
    } = e;
    if ((0, G.K$)(t)) return void ei(t);
    let d = (0, r.A)();
    if (!E && t.userStatus?.enrolledAt == null && !(0, y.Ic)(t)) {
        L.A.isEnrolling(t.id) ||
            (0, m.Oy)(t.id, { questContent: n, questContentCTA: U.Cy.ACCEPT_QUEST, sourceQuestContent: a });
        let e = D.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, m.QG)(t.id),
            f.default.track(V.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, U.jO)(a),
                source_quest_content_cta: s,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: c, muted: u, volume: I, captionEnabled: A } = D.Ay.getState(),
        { enabled: T, variant: S } = h.Ig.getConfig({ location: F.rE.VIDEO_MODAL }),
        N = null != (0, g.tW)(t, g.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    u &&
        T &&
        (S === h.sy.AUTO_ENABLE_CAPTIONS && N && !A
            ? c(!0)
            : S === h.sy.AUTO_UNMUTE && (D.Ay.getState().setMuted(!1), 0 === I && D.Ay.getState().setVolume(0.3)));
    let O = performance.now();
    (0, _.openModalLazy)(
        async () => {
            let { default: e } = await J();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: O,
                    questId: t.id,
                    autoplay: o,
                    videoSessionId: d,
                    sourceQuestContent: a,
                });
        },
        {
            modalKey: (0, B.cZ)(t.id),
            backdropStyle: l.F.IMMERSIVE,
            onCloseCallback: () => (0, B.vm)({ questId: t.id, sourceQuestContent: a, videoSessionId: d }),
        },
    );
}
function ee(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = N.default.getFingerprint(),
                    n = (0, a.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, a.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        f.default.track(V.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.A.launch(t, (t) => {
            t || (0, T.bG)({ pathname: V.BVt.QUEST_HOME, hash: e });
        });
}
function et(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = N.default.getFingerprint(),
                    n = (0, a.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, a.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        f.default.track(V.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.A.launch(t, (t) => {
            t || (0, T.bG)({ pathname: V.BVt.QUEST_HOME, hash: e });
        });
}
function en(e, t) {
    (0, _.openModalLazy)(async () => {
        let { default: r } = await Promise.all([n.e("62092"), n.e("9931"), n.e("62505")]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(r, { ...n, multiplier: e, eligibleToReceivePremiumRewards: t });
    });
}
function ei(e) {
    (0, _.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("53242"), n.e("27818")]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function er(e, t) {
    let { type: n } = await (0, m.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case m.WM.SUCCESS:
            Z({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case m.WM.CAPTCHA_FAILED:
            d.A.show({ title: k.intl.string(k.t["/CidxO"]), body: k.intl.string(k.t.HQdHg6) });
            break;
        case m.WM.UNKNOWN_ERROR:
            d.A.show({ title: k.intl.string(k.t.R0RpRX), body: k.intl.string(k.t.OXD41D) });
        case m.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ea(e) {
    if ((0, v.vA)(e)) return e.config.features.includes(F.Li.CLOUD_GAMING_ACTIVITY) ? o.h : E._;
}
