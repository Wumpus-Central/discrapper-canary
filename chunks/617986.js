"use strict";
n.d(t, {
    QA: () => el,
    Df: () => ee,
    rx: () => Z,
    z6: () => es,
    cf: () => J,
    ii: () => Q,
    zg: () => ec,
    hJ: () => et,
    q$: () => eu,
    Zc: () => ei,
    gC: () => ed,
    d5: () => eo,
    Fy: () => e_,
    _x: () => X,
    f7: () => q,
    navigateToQuestHome: () => er,
    e0: () => eh,
    m6: () => en,
    Q_: () => ep,
    l9: () => ea,
    Oz: () => ef,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(627968);
n(64700);
var r = n(835245),
    s = n(323889),
    a = n(742821),
    o = n(80703);
n(876230);
var l = n(192308),
    u = n(892491),
    c = n(414499),
    d = n(687966),
    _ = n(646270),
    h = n(157559),
    f = n(376728),
    p = n(274670),
    E = n(144779),
    m = n(167189),
    g = n(833291),
    A = n(726845),
    I = n(976860),
    T = n(830543),
    S = n(495544),
    y = n(299091),
    C = n(711014),
    N = n(174459),
    v = n(998218),
    R = n(877062),
    O = n(340124),
    b = n(859703),
    D = n(405670),
    L = n(192444),
    w = n(104886),
    M = n(46948),
    P = n(561844),
    x = n(590202),
    k = n(851936),
    U = n(588350),
    G = n.n(U),
    F = n(792620),
    V = n(375708),
    B = n(710969),
    j = n(814793),
    H = n(753386),
    Y = n(448967),
    W = n(190107),
    K = n(652215),
    $ = n(488995);
async function z(e) {
    try {
        let t = (0, g.br)(e);
        if (null == t || t.type !== m.I.INVITE) return !1;
        let n = y.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await f.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = C.Ay.getFlattenedGuildIds(),
            r = n?.guild?.id;
        return null != r && i.includes(r);
    } catch (e) {
        return !1;
    }
}
async function q(e) {
    try {
        if (v.A.isDiscordUrl(e)) return !0;
        return await z(e);
    } catch (e) {
        return !1;
    }
}
function Z(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("27973"),
            n.e("36863"),
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
function X(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("27973"),
            n.e("22989"),
            n.e("31544"),
            n.e("1785"),
            n.e("36863"),
            n.e("72877"),
            n.e("967"),
            n.e("12466"),
            n.e("6286"),
            n.e("78872"),
            n.e("94704"),
            n.e("34853"),
        ]).then(n.bind(n, 205604));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function Q(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("27973"),
            n.e("22989"),
            n.e("1656"),
            n.e("36863"),
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
function J(e, t, r) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("27973"),
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
function ee(e, t, r) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("11399"),
            n.e("27973"),
            n.e("52511"),
            n.e("36863"),
            n.e("967"),
            n.e("71217"),
            n.e("54103"),
            n.e("42724"),
            n.e("12466"),
            n.e("77298"),
            n.e("7865"),
            n.e("33546"),
            n.e("50332"),
        ]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: r, location: t });
    });
}
function et(e, t, r, s) {
    (0, l.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("27973"),
            n.e("36877"),
            n.e("36863"),
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
function en(e, t, r) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: r });
    });
}
function ei(e, t, r) {
    let { ctaContent: a } = t;
    (0, w.E5)(w.kI.STEP_2_CLICKED_INTERNAL, "open_disclosure_modal")
        ? (0, p.r)({
              type: E.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: e.id,
              questContentCTA: a,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentPosition: t.position,
              impressionId: t.impressionId,
          })
        : (0, P.Y5)({
              questId: e.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentCTA: a,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (0, l.openModalLazy)(
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
                            var i;
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
function er(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: i = !1 } = e;
    (0, j.jQ)({ questId: n, fromContent: t });
    let r = null != n ? `#${n}` : "";
    i && A.A.setState({ selectedTab: $.GlobalDiscoveryTab.QUESTS }),
        (0, T.default)(),
        (0, I.pX)((i ? K.BVt.QUEST_HOME_DEPRECATED : K.BVt.QUEST_HOME) + r);
}
function es(e) {
    let t,
        n = (0, k.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
        ((t = [
            {
                key: "NOT_INTERESTED",
                text: (0, F.vv)(e)
                    ? V.intl.string(V.t.wHRWkE)
                    : V.intl.formatToPlainString(V.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
            },
            { key: "INVALUABLE", text: V.intl.string(V.t.ETU4Na) },
            { key: "TOO_LONG", text: V.intl.string(V.t.uRIIpD) },
            { key: "UNSURE_HOW", text: V.intl.string(V.t["5dxvxs"]) },
            { key: "OTHER", text: V.intl.string(V.t.RFasgu) },
        ]),
        {
            id: "1290718710658629658",
            title: V.intl.string(V.t.ugbhDS),
            subtitle: V.intl.string(V.t.FIYcpC),
            choices: G()(t.slice(0, 4)).concat(t[4]),
        });
    n.log(`Showing survey ${i.id}`), (0, Y.m)({ questId: e.id, survey: i });
}
function ea() {
    return Promise.all([
        n.e("29071"),
        n.e("58530"),
        n.e("88147"),
        n.e("92868"),
        n.e("24914"),
        n.e("24689"),
        n.e("63408"),
        n.e("77375"),
        n.e("25717"),
        n.e("19580"),
    ]).then(n.bind(n, 834135));
}
function eo(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: o = !0,
        skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, F.K$)(t)) return void e_(t);
    let d = (0, r.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, B.Ic)(t)) {
        b.A.isEnrolling(t.id) ||
            (0, O.Oy)(t.id, { questContent: n, questContentCTA: x.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = D.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, O.QG)(t.id),
            N.default.track(K.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, x.jO)(s),
                source_quest_content_cta: a,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: _, muted: h, volume: f, captionEnabled: p } = D.Ay.getState(),
        { enabled: E, variant: m } = L.Ig.getConfig({ location: W.rE.VIDEO_MODAL }),
        g = null != (0, M.tW)(t, M.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    h &&
        E &&
        (m === L.sy.AUTO_ENABLE_CAPTIONS && g && !p
            ? _(!0)
            : m === L.sy.AUTO_UNMUTE && (D.Ay.getState().setMuted(!1), 0 === f && D.Ay.getState().setVolume(0.3)));
    let A = performance.now();
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await ea();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: A,
                    questId: t.id,
                    autoplay: o,
                    videoSessionId: d,
                    sourceQuestContent: s,
                });
        },
        {
            modalKey: (0, H.cZ)(t.id),
            backdropStyle: u.F.IMMERSIVE,
            onCloseCallback: () => (0, H.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: d }),
        },
    );
}
function el(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = S.default.getFingerprint(),
                    n = (0, a.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, a.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        N.default.track(K.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        R.A.launch(t, (t) => {
            t || (0, I.bG)({ pathname: K.BVt.QUEST_HOME, hash: e });
        });
}
function eu(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = S.default.getFingerprint(),
                    n = (0, a.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, a.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        N.default.track(K.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        R.A.launch(t, (t) => {
            t || (0, I.bG)({ pathname: K.BVt.QUEST_HOME, hash: e });
        });
}
function ec(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = S.default.getFingerprint(),
                r = (0, a.I_)(),
                s = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, a.Ay)(s, { utmSource: "quest-home-preview", fingerprint: i, attemptId: r });
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        N.default.track(K.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        R.A.launch(t, (e) => {
            e || (0, I.bG)({ pathname: K.BVt.QUEST_HOME });
        });
}
function ed(e, t) {
    (0, l.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("65857"),
            n.e("16328"),
            n.e("47018"),
            n.e("83774"),
            n.e("99513"),
            n.e("62101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(r, { ...n, multiplier: e, orbMultiplierEligibility: t });
    });
}
function e_(e) {
    (0, l.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("88647"),
            n.e("95429"),
            n.e("67113"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function eh(e, t) {
    let { type: n } = await (0, O.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case O.WM.SUCCESS:
            eo({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case O.WM.CAPTCHA_FAILED:
            h.A.show({ title: V.intl.string(V.t["/CidxO"]), body: V.intl.string(V.t.HQdHg6) });
            break;
        case O.WM.UNKNOWN_ERROR:
            h.A.show({ title: V.intl.string(V.t.R0RpRX), body: V.intl.string(V.t.OXD41D) });
        case O.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ef(e) {
    if ((0, j.vA)(e)) return e.config.features.includes(W.Li.CLOUD_GAMING_ACTIVITY) ? c.h : d._;
}
function ep(e) {
    if ((0, F.K$)(e)) return _.u;
}
