"use strict";
n.d(t, {
    QA: () => es,
    Df: () => Q,
    z6: () => en,
    cf: () => X,
    ii: () => Z,
    zg: () => eo,
    hJ: () => J,
    q$: () => ea,
    mA: () => Y.m,
    Zc: () => et,
    gC: () => el,
    Fy: () => eu,
    _x: () => q,
    d5: () => er,
    f7: () => $,
    m6: () => ee,
    e0: () => ec,
    rx: () => z,
    Q_: () => e_,
    l9: () => ei,
    Oz: () => ed,
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
    E = n(274670),
    p = n(144779),
    m = n(167189),
    g = n(833291),
    A = n(976860),
    I = n(280450),
    T = n(299091),
    S = n(711014),
    N = n(174459),
    C = n(998218),
    y = n(877062),
    O = n(340124),
    R = n(859703),
    v = n(405670),
    b = n(192444),
    L = n(104886),
    D = n(46948),
    w = n(561844),
    P = n(590202),
    M = n(851936),
    x = n(588350),
    U = n.n(x),
    k = n(792620),
    G = n(375708),
    V = n(710969),
    F = n(814793),
    B = n(753386),
    H = n(448967),
    j = n(190107),
    W = n(652215),
    Y = n(216934);
async function K(e) {
    try {
        let t = (0, g.br)(e);
        if (null == t || t.type !== m.I.INVITE) return !1;
        let n = T.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await f.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = S.Ay.getFlattenedGuildIds(),
            r = n?.guild?.id;
        return null != r && i.includes(r);
    } catch (e) {
        return !1;
    }
}
async function $(e) {
    try {
        if (C.A.isDiscordUrl(e)) return !0;
        return await K(e);
    } catch (e) {
        return !1;
    }
}
function z(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("62461"),
            n.e("31591"),
            n.e("69487"),
            n.e("87550"),
            n.e("59511"),
            n.e("8736"),
            n.e("79664"),
            n.e("11310"),
            n.e("53930"),
            n.e("13823"),
            n.e("92583"),
            n.e("36863"),
            n.e("54625"),
            n.e("35485"),
            n.e("37687"),
            n.e("24761"),
            n.e("59957"),
            n.e("32606"),
            n.e("85350"),
            n.e("4369"),
            n.e("62875"),
            n.e("71217"),
            n.e("967"),
            n.e("12466"),
            n.e("7865"),
            n.e("36037"),
            n.e("69539"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function q(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("31591"),
            n.e("69487"),
            n.e("8736"),
            n.e("79664"),
            n.e("22989"),
            n.e("31544"),
            n.e("1785"),
            n.e("11310"),
            n.e("13823"),
            n.e("92583"),
            n.e("36863"),
            n.e("54625"),
            n.e("35485"),
            n.e("63618"),
            n.e("24761"),
            n.e("32606"),
            n.e("85350"),
            n.e("4369"),
            n.e("72877"),
            n.e("62875"),
            n.e("967"),
            n.e("6286"),
            n.e("12466"),
            n.e("94704"),
            n.e("78872"),
            n.e("34853"),
        ]).then(n.bind(n, 205604));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function Z(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("31591"),
            n.e("69487"),
            n.e("8736"),
            n.e("79664"),
            n.e("22989"),
            n.e("1656"),
            n.e("11310"),
            n.e("13823"),
            n.e("92583"),
            n.e("36863"),
            n.e("54625"),
            n.e("35485"),
            n.e("63618"),
            n.e("24761"),
            n.e("32606"),
            n.e("85350"),
            n.e("4369"),
            n.e("62875"),
            n.e("68904"),
            n.e("967"),
            n.e("6286"),
            n.e("12466"),
            n.e("43019"),
            n.e("78872"),
            n.e("54738"),
        ]).then(n.bind(n, 624937));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function X(e, t, r) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("69487"),
            n.e("87550"),
            n.e("59511"),
            n.e("8736"),
            n.e("79664"),
            n.e("11310"),
            n.e("53930"),
            n.e("36863"),
            n.e("24761"),
            n.e("32606"),
            n.e("85350"),
            n.e("4369"),
            n.e("71217"),
            n.e("967"),
            n.e("12466"),
            n.e("7865"),
            n.e("26747"),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: r });
    });
}
function Q(e, t, r) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("8641"),
            n.e("59511"),
            n.e("69487"),
            n.e("8736"),
            n.e("79664"),
            n.e("85404"),
            n.e("34303"),
            n.e("94723"),
            n.e("11310"),
            n.e("52511"),
            n.e("42724"),
            n.e("36863"),
            n.e("23532"),
            n.e("24761"),
            n.e("32606"),
            n.e("85350"),
            n.e("4369"),
            n.e("71217"),
            n.e("54103"),
            n.e("967"),
            n.e("12466"),
            n.e("77298"),
            n.e("7865"),
            n.e("33546"),
            n.e("50332"),
        ]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: r, location: t });
    });
}
function J(e, t, r, s) {
    (0, l.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("59511"),
            n.e("69487"),
            n.e("8736"),
            n.e("79664"),
            n.e("63549"),
            n.e("11310"),
            n.e("36877"),
            n.e("36863"),
            n.e("77473"),
            n.e("24761"),
            n.e("32606"),
            n.e("27323"),
            n.e("85350"),
            n.e("4369"),
            n.e("71217"),
            n.e("967"),
            n.e("12466"),
            n.e("7865"),
            n.e("90948"),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: r, location: t, preview: s });
    });
}
function ee(e, t, r) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: r });
    });
}
function et(e, t, r) {
    let { ctaContent: a } = t;
    (0, L.E5)(L.kI.STEP_2_CLICKED_INTERNAL, "open_disclosure_modal")
        ? (0, E.r)({
              type: p.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: e.id,
              questContentCTA: a,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentPosition: t.position,
              impressionId: t.impressionId,
          })
        : (0, w.Y5)({
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
function en(e) {
    let t,
        n = (0, M.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
        ((t = [
            {
                key: "NOT_INTERESTED",
                text: (0, k.vv)(e)
                    ? G.intl.string(G.t.wHRWkE)
                    : G.intl.formatToPlainString(G.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
            },
            { key: "INVALUABLE", text: G.intl.string(G.t.ETU4Na) },
            { key: "TOO_LONG", text: G.intl.string(G.t.uRIIpD) },
            { key: "UNSURE_HOW", text: G.intl.string(G.t["5dxvxs"]) },
            { key: "OTHER", text: G.intl.string(G.t.RFasgu) },
        ]),
        {
            id: "1290718710658629658",
            title: G.intl.string(G.t.ugbhDS),
            subtitle: G.intl.string(G.t.FIYcpC),
            choices: U()(t.slice(0, 4)).concat(t[4]),
        });
    n.log(`Showing survey ${i.id}`), (0, H.m)({ questId: e.id, survey: i });
}
function ei() {
    return Promise.all([
        n.e("69487"),
        n.e("87550"),
        n.e("22448"),
        n.e("79664"),
        n.e("83485"),
        n.e("58530"),
        n.e("88147"),
        n.e("92868"),
        n.e("11310"),
        n.e("53930"),
        n.e("54638"),
        n.e("24689"),
        n.e("34691"),
        n.e("24761"),
        n.e("32606"),
        n.e("85350"),
        n.e("4369"),
        n.e("24914"),
        n.e("55602"),
        n.e("25717"),
        n.e("63408"),
        n.e("77375"),
        n.e("79907"),
        n.e("97199"),
    ]).then(n.bind(n, 834135));
}
function er(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: o = !0,
        skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, k.K$)(t)) return void eu(t);
    let d = (0, r.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, V.Ic)(t)) {
        R.A.isEnrolling(t.id) ||
            (0, O.Oy)(t.id, { questContent: n, questContentCTA: P.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = v.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, O.QG)(t.id),
            N.default.track(W.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, P.jO)(s),
                source_quest_content_cta: a,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: _, muted: h, volume: f, captionEnabled: E } = v.Ay.getState(),
        { enabled: p, variant: m } = b.Ig.getConfig({ location: j.rE.VIDEO_MODAL }),
        g = null != (0, D.tW)(t, D.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    h &&
        p &&
        (m === b.sy.AUTO_ENABLE_CAPTIONS && g && !E
            ? _(!0)
            : m === b.sy.AUTO_UNMUTE && (v.Ay.getState().setMuted(!1), 0 === f && v.Ay.getState().setVolume(0.3)));
    let A = performance.now();
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await ei();
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
            modalKey: (0, B.cZ)(t.id),
            backdropStyle: u.F.IMMERSIVE,
            onCloseCallback: () => (0, B.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: d }),
        },
    );
}
function es(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = I.default.getFingerprint(),
                    n = (0, a.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, a.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        N.default.track(W.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        y.A.launch(t, (t) => {
            t || (0, A.bG)({ pathname: W.BVt.QUEST_HOME, hash: e });
        });
}
function ea(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = I.default.getFingerprint(),
                    n = (0, a.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, a.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        N.default.track(W.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        y.A.launch(t, (t) => {
            t || (0, A.bG)({ pathname: W.BVt.QUEST_HOME, hash: e });
        });
}
function eo(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = I.default.getFingerprint(),
                r = (0, a.I_)(),
                s = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, a.Ay)(s, { utmSource: "quest-home-preview", fingerprint: i, attemptId: r });
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        N.default.track(W.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        y.A.launch(t, (e) => {
            e || (0, A.bG)({ pathname: W.BVt.QUEST_HOME });
        });
}
function el(e, t) {
    (0, l.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("36861"),
            n.e("16328"),
            n.e("8304"),
            n.e("47018"),
            n.e("83774"),
            n.e("99513"),
            n.e("62101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(r, { ...n, multiplier: e, orbMultiplierEligibility: t });
    });
}
function eu(e) {
    (0, l.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("37757"),
            n.e("75222"),
            n.e("95429"),
            n.e("45488"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function ec(e, t) {
    let { type: n } = await (0, O.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case O.WM.SUCCESS:
            er({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case O.WM.CAPTCHA_FAILED:
            h.A.show({ title: G.intl.string(G.t["/CidxO"]), body: G.intl.string(G.t.HQdHg6) });
            break;
        case O.WM.UNKNOWN_ERROR:
            h.A.show({ title: G.intl.string(G.t.R0RpRX), body: G.intl.string(G.t.OXD41D) });
        case O.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ed(e) {
    if ((0, F.vA)(e)) return e.config.features.includes(j.Li.CLOUD_GAMING_ACTIVITY) ? c.h : d._;
}
function e_(e) {
    if ((0, k.K$)(e)) return _.u;
}
