"use strict";
n.d(t, {
    QA: () => ea,
    Df: () => Q,
    rx: () => z,
    z6: () => ei,
    cf: () => X,
    ii: () => Z,
    zg: () => el,
    hJ: () => J,
    q$: () => eo,
    Zc: () => et,
    gC: () => eu,
    d5: () => es,
    Fy: () => ec,
    _x: () => q,
    f7: () => $,
    navigateToQuestHome: () => en,
    e0: () => ed,
    m6: () => ee,
    Q_: () => eh,
    l9: () => er,
    Oz: () => e_,
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
    A = n(976860),
    I = n(830543),
    T = n(495544),
    S = n(299091),
    y = n(711014),
    C = n(174459),
    N = n(998218),
    v = n(877062),
    R = n(340124),
    O = n(859703),
    b = n(405670),
    D = n(192444),
    L = n(104886),
    w = n(46948),
    M = n(561844),
    P = n(590202),
    x = n(851936),
    k = n(588350),
    U = n.n(k),
    G = n(792620),
    F = n(375708),
    V = n(710969),
    B = n(814793),
    j = n(753386),
    H = n(448967),
    Y = n(190107),
    W = n(652215);
async function K(e) {
    try {
        let t = (0, g.br)(e);
        if (null == t || t.type !== m.I.INVITE) return !1;
        let n = S.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await f.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = y.Ay.getFlattenedGuildIds(),
            r = n?.guild?.id;
        return null != r && i.includes(r);
    } catch (e) {
        return !1;
    }
}
async function $(e) {
    try {
        if (N.A.isDiscordUrl(e)) return !0;
        return await K(e);
    } catch (e) {
        return !1;
    }
}
function z(e) {
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
function q(e) {
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
function Z(e) {
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
function X(e, t, r) {
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
function Q(e, t, r) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("51452"),
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
function J(e, t, r, s) {
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
function ee(e, t, r) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: r });
    });
}
function et(e, t, r) {
    let { ctaContent: a } = t;
    (0, L.E5)(L.kI.STEP_2_CLICKED_INTERNAL, "open_disclosure_modal")
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
        : (0, M.Y5)({
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
    let { fromContent: t, questId: n } = e;
    (0, B.jQ)({ questId: n, fromContent: t });
    let i = null != n ? `#${n}` : "";
    (0, I.default)(), (0, A.pX)(W.BVt.QUEST_HOME + i);
}
function ei(e) {
    let t,
        n = (0, x.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
        ((t = [
            {
                key: "NOT_INTERESTED",
                text: (0, G.vv)(e)
                    ? F.intl.string(F.t.wHRWkE)
                    : F.intl.formatToPlainString(F.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
            },
            { key: "INVALUABLE", text: F.intl.string(F.t.ETU4Na) },
            { key: "TOO_LONG", text: F.intl.string(F.t.uRIIpD) },
            { key: "UNSURE_HOW", text: F.intl.string(F.t["5dxvxs"]) },
            { key: "OTHER", text: F.intl.string(F.t.RFasgu) },
        ]),
        {
            id: "1290718710658629658",
            title: F.intl.string(F.t.ugbhDS),
            subtitle: F.intl.string(F.t.FIYcpC),
            choices: U()(t.slice(0, 4)).concat(t[4]),
        });
    n.log(`Showing survey ${i.id}`), (0, H.m)({ questId: e.id, survey: i });
}
function er() {
    return Promise.all([
        n.e("29071"),
        n.e("58530"),
        n.e("88147"),
        n.e("92868"),
        n.e("34691"),
        n.e("24914"),
        n.e("24689"),
        n.e("63408"),
        n.e("77375"),
        n.e("25717"),
        n.e("19580"),
    ]).then(n.bind(n, 834135));
}
function es(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: o = !0,
        skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, G.K$)(t)) return void ec(t);
    let d = (0, r.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, V.Ic)(t)) {
        O.A.isEnrolling(t.id) ||
            (0, R.Oy)(t.id, { questContent: n, questContentCTA: P.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = b.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, R.QG)(t.id),
            C.default.track(W.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, P.jO)(s),
                source_quest_content_cta: a,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: _, muted: h, volume: f, captionEnabled: p } = b.Ay.getState(),
        { enabled: E, variant: m } = D.Ig.getConfig({ location: Y.rE.VIDEO_MODAL }),
        g = null != (0, w.tW)(t, w.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    h &&
        E &&
        (m === D.sy.AUTO_ENABLE_CAPTIONS && g && !p
            ? _(!0)
            : m === D.sy.AUTO_UNMUTE && (b.Ay.getState().setMuted(!1), 0 === f && b.Ay.getState().setVolume(0.3)));
    let A = performance.now();
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await er();
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
            modalKey: (0, j.cZ)(t.id),
            backdropStyle: u.F.IMMERSIVE,
            onCloseCallback: () => (0, j.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: d }),
        },
    );
}
function ea(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = T.default.getFingerprint(),
                    n = (0, a.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, a.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        C.default.track(W.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        v.A.launch(t, (t) => {
            t || (0, A.bG)({ pathname: W.BVt.QUEST_HOME, hash: e });
        });
}
function eo(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = T.default.getFingerprint(),
                    n = (0, a.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, a.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        C.default.track(W.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        v.A.launch(t, (t) => {
            t || (0, A.bG)({ pathname: W.BVt.QUEST_HOME, hash: e });
        });
}
function el(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = T.default.getFingerprint(),
                r = (0, a.I_)(),
                s = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, a.Ay)(s, { utmSource: "quest-home-preview", fingerprint: i, attemptId: r });
        })(e),
        n = (0, a.X7)(t);
    null != n &&
        C.default.track(W.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        v.A.launch(t, (e) => {
            e || (0, A.bG)({ pathname: W.BVt.QUEST_HOME });
        });
}
function eu(e, t) {
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
function ec(e) {
    (0, l.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("88647"),
            n.e("95429"),
            n.e("60923"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function ed(e, t) {
    let { type: n } = await (0, R.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case R.WM.SUCCESS:
            es({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case R.WM.CAPTCHA_FAILED:
            h.A.show({ title: F.intl.string(F.t["/CidxO"]), body: F.intl.string(F.t.HQdHg6) });
            break;
        case R.WM.UNKNOWN_ERROR:
            h.A.show({ title: F.intl.string(F.t.R0RpRX), body: F.intl.string(F.t.OXD41D) });
        case R.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function e_(e) {
    if ((0, B.vA)(e)) return e.config.features.includes(Y.Li.CLOUD_GAMING_ACTIVITY) ? c.h : d._;
}
function eh(e) {
    if ((0, G.K$)(e)) return _.u;
}
