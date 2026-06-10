"use strict";
n.d(t, {
    QA: () => er,
    Df: () => X,
    rx: () => K,
    z6: () => et,
    cf: () => q,
    ii: () => z,
    zg: () => ea,
    hJ: () => Z,
    q$: () => es,
    Zc: () => J,
    gC: () => eo,
    d5: () => ei,
    Fy: () => el,
    _x: () => $,
    f7: () => W,
    navigateToQuestHome: () => ee,
    e0: () => eu,
    m6: () => Q,
    Q_: () => ed,
    l9: () => en,
    Oz: () => ec,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(627968);
n(64700);
var r = n(835245),
    s = n(742821),
    a = n(80703);
n(876230);
var o = n(192308),
    l = n(892491),
    u = n(414499),
    c = n(687966),
    d = n(646270),
    _ = n(157559),
    h = n(376728),
    f = n(167189),
    p = n(833291),
    E = n(726845),
    m = n(976860),
    g = n(830543),
    A = n(495544),
    I = n(299091),
    T = n(711014),
    S = n(174459),
    y = n(998218),
    N = n(877062),
    v = n(340124),
    C = n(859703),
    R = n(405670),
    O = n(192444),
    b = n(551875),
    D = n(561844),
    L = n(590202),
    w = n(851936),
    M = n(588350),
    P = n.n(M),
    x = n(792620),
    k = n(375708),
    U = n(710969),
    G = n(814793),
    F = n(753386),
    V = n(448967),
    B = n(190107),
    H = n(652215),
    j = n(488995);
async function Y(e) {
    try {
        let t = (0, p.br)(e);
        if (null == t || t.type !== f.I.INVITE) return !1;
        let n = I.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await h.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = T.Ay.getFlattenedGuildIds(),
            r = n?.guild?.id;
        return null != r && i.includes(r);
    } catch (e) {
        return !1;
    }
}
async function W(e) {
    try {
        if (y.A.isDiscordUrl(e)) return !0;
        return await Y(e);
    } catch (e) {
        return !1;
    }
}
function K(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, o.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("72253"),
            n.e("53785"),
            n.e("71576"),
            n.e("43234"),
            n.e("36863"),
            n.e("37687"),
            n.e("59957"),
            n.e("967"),
            n.e("71217"),
            n.e("12466"),
            n.e("7865"),
            n.e("36037"),
            n.e("69539"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function $(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, o.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("53785"),
            n.e("46521"),
            n.e("734"),
            n.e("1785"),
            n.e("36863"),
            n.e("54625"),
            n.e("1354"),
            n.e("63618"),
            n.e("72877"),
            n.e("967"),
            n.e("62875"),
            n.e("52419"),
            n.e("12466"),
            n.e("6286"),
            n.e("78872"),
            n.e("94704"),
            n.e("34853"),
        ]).then(n.bind(n, 205604));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function z(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, o.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("53785"),
            n.e("46521"),
            n.e("734"),
            n.e("1656"),
            n.e("36863"),
            n.e("63618"),
            n.e("967"),
            n.e("68904"),
            n.e("12466"),
            n.e("43019"),
            n.e("6286"),
            n.e("78872"),
            n.e("54738"),
        ]).then(n.bind(n, 624937));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function q(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("72253"),
            n.e("53785"),
            n.e("71576"),
            n.e("27050"),
            n.e("36863"),
            n.e("967"),
            n.e("71217"),
            n.e("12466"),
            n.e("7865"),
            n.e("26747"),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: r });
    });
}
function X(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("8641"),
            n.e("72253"),
            n.e("53785"),
            n.e("71576"),
            n.e("89693"),
            n.e("85404"),
            n.e("34303"),
            n.e("94723"),
            n.e("42724"),
            n.e("36863"),
            n.e("23532"),
            n.e("967"),
            n.e("71217"),
            n.e("52511"),
            n.e("54103"),
            n.e("12466"),
            n.e("77298"),
            n.e("7865"),
            n.e("33546"),
            n.e("50332"),
        ]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: r, location: t });
    });
}
function Z(e, t, r, s) {
    (0, o.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("72253"),
            n.e("53785"),
            n.e("71576"),
            n.e("63549"),
            n.e("36863"),
            n.e("77473"),
            n.e("36877"),
            n.e("27323"),
            n.e("967"),
            n.e("71217"),
            n.e("12466"),
            n.e("7865"),
            n.e("90948"),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: r, location: t, preview: s });
    });
}
function Q(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: r });
    });
}
function J(e, t, r) {
    (0, D.Y5)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, o.openModalLazy)(
            async () => {
                let { default: s } = await Promise.all([n.e("99547"), n.e("78050"), n.e("132")]).then(
                    n.bind(n, 348559),
                );
                return (n) => (0, i.jsx)(s, { ...n, questContent: t.content, quest: e, returnRef: r });
            },
            {
                onCloseCallback: () => {
                    let e = r?.current;
                    if (null == e) return;
                    let t = 0,
                        n = () => {
                            let i;
                            (t += 1),
                                document.body.contains(e) &&
                                    ((null != (i = document.activeElement) &&
                                        document.body.contains(i) &&
                                        null !=
                                            i.closest(
                                                '[data-mana-component="modal"], [role="dialog"][tabindex="-1"]',
                                            )) ||
                                        document.activeElement === e ||
                                        e.focus(),
                                    (null != document.querySelector('[data-mana-component="modal"]') ||
                                        document.activeElement !== e) &&
                                        t < 90 &&
                                        requestAnimationFrame(n));
                        };
                    requestAnimationFrame(n);
                },
            },
        );
}
function ee(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: i = !1 } = e;
    (0, G.jQ)({ questId: n, fromContent: t });
    let r = null != n ? `#${n}` : "";
    i && E.A.setState({ selectedTab: j.GlobalDiscoveryTab.QUESTS }),
        (0, g.default)(),
        (0, m.pX)((i ? H.BVt.QUEST_HOME_DEPRECATED : H.BVt.QUEST_HOME) + r);
}
function et(e) {
    let t,
        n = (0, w.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
        ((t = [
            {
                key: "NOT_INTERESTED",
                text: (0, x.vv)(e)
                    ? k.intl.string(k.t.wHRWkE)
                    : k.intl.formatToPlainString(k.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
            },
            { key: "INVALUABLE", text: k.intl.string(k.t.ETU4Na) },
            { key: "TOO_LONG", text: k.intl.string(k.t.uRIIpD) },
            { key: "UNSURE_HOW", text: k.intl.string(k.t["5dxvxs"]) },
            { key: "OTHER", text: k.intl.string(k.t.RFasgu) },
        ]),
        {
            id: "1290718710658629658",
            title: k.intl.string(k.t.ugbhDS),
            subtitle: k.intl.string(k.t.FIYcpC),
            choices: P()(t.slice(0, 4)).concat(t[4]),
        });
    n.log(`Showing survey ${i.id}`), (0, V.m)({ questId: e.id, survey: i });
}
function en() {
    return Promise.all([
        n.e("11268"),
        n.e("53785"),
        n.e("92868"),
        n.e("24914"),
        n.e("24689"),
        n.e("63408"),
        n.e("77375"),
        n.e("25717"),
        n.e("19580"),
    ]).then(n.bind(n, 834135));
}
function ei(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: u = !0,
        skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, x.K$)(t)) return void el(t);
    let d = (0, r.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, U.Ic)(t)) {
        C.A.isEnrolling(t.id) ||
            (0, v.Oy)(t.id, { questContent: n, questContentCTA: L.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = R.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, v.QG)(t.id),
            S.default.track(H.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, L.jO)(s),
                source_quest_content_cta: a,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: _, muted: h, volume: f, captionEnabled: p } = R.Ay.getState(),
        { enabled: E, variant: m } = O.Ig.getConfig({ location: B.rE.VIDEO_MODAL }),
        g = null != (0, b.tW)(t, b.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    h &&
        E &&
        (m === O.sy.AUTO_ENABLE_CAPTIONS && g && !p
            ? _(!0)
            : m === O.sy.AUTO_UNMUTE && (R.Ay.getState().setMuted(!1), 0 === f && R.Ay.getState().setVolume(0.3)));
    let A = performance.now();
    (0, o.openModalLazy)(
        async () => {
            let { default: e } = await en();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: A,
                    questId: t.id,
                    autoplay: u,
                    videoSessionId: d,
                    sourceQuestContent: s,
                });
        },
        {
            modalKey: (0, F.cZ)(t.id),
            backdropStyle: l.F.IMMERSIVE,
            onCloseCallback: () => (0, F.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: d }),
        },
    );
}
function er(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = A.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        S.default.track(H.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        N.A.launch(t, (t) => {
            t || (0, m.bG)({ pathname: H.BVt.QUEST_HOME, hash: e });
        });
}
function es(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = A.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        S.default.track(H.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        N.A.launch(t, (t) => {
            t || (0, m.bG)({ pathname: H.BVt.QUEST_HOME, hash: e });
        });
}
function ea(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = A.default.getFingerprint(),
                r = (0, s.I_)(),
                a = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, s.Ay)(a, { utmSource: "quest-home-preview", fingerprint: i, attemptId: r });
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        S.default.track(H.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        N.A.launch(t, (e) => {
            e || (0, m.bG)({ pathname: H.BVt.QUEST_HOME });
        });
}
function eo(e, t) {
    (0, o.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("53785"),
            n.e("81030"),
            n.e("8304"),
            n.e("47018"),
            n.e("83774"),
            n.e("99513"),
            n.e("62101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(r, { ...n, multiplier: e, orbMultiplierEligibility: t });
    });
}
function el(e) {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("734"),
            n.e("75222"),
            n.e("95429"),
            n.e("88905"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function eu(e, t) {
    let { type: n } = await (0, v.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case v.WM.SUCCESS:
            ei({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case v.WM.CAPTCHA_FAILED:
            _.A.show({ title: k.intl.string(k.t["/CidxO"]), body: k.intl.string(k.t.HQdHg6) });
            break;
        case v.WM.UNKNOWN_ERROR:
            _.A.show({ title: k.intl.string(k.t.R0RpRX), body: k.intl.string(k.t.OXD41D) });
        case v.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ec(e) {
    if ((0, G.vA)(e)) return e.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY) ? u.h : c._;
}
function ed(e) {
    if ((0, x.K$)(e)) return d.u;
}
