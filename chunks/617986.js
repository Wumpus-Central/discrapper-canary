"use strict";
n.d(t, {
    QA: () => eo,
    Df: () => ee,
    FS: () => ei,
    z6: () => ea,
    cf: () => J,
    hJ: () => et,
    zg: () => ec,
    q$: () => ed,
    mA: () => z.m,
    Zc: () => er,
    gC: () => eu,
    Fy: () => e_,
    _x: () => Q,
    d5: () => el,
    f7: () => Z,
    m6: () => en,
    e0: () => eE,
    rx: () => X,
    Q_: () => eh,
    l9: () => es,
    Oz: () => eA,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(477900);
n(582128);
var r = n(132500),
    a = n(323889),
    s = n(742821),
    l = n(80703);
n(876230);
var o = n(192308),
    d = n(892491),
    c = n(414499),
    u = n(687966),
    _ = n(646270),
    E = n(847374),
    A = n(509434),
    h = n(157559),
    I = n(376728),
    f = n(274670),
    p = n(144779),
    T = n(167189),
    m = n(833291),
    g = n(976860),
    S = n(280450),
    N = n(299091),
    C = n(711014),
    O = n(174459),
    R = n(998218),
    L = n(877062),
    D = n(352774),
    y = n(859703),
    v = n(405670),
    b = n(192444),
    M = n(104886),
    P = n(291749),
    U = n(561844),
    w = n(590202),
    G = n(851936),
    x = n(199510),
    k = n.n(x),
    F = n(792620),
    V = n(375708),
    B = n(710969),
    H = n(901406),
    j = n(814793),
    W = n(753386),
    Y = n(448967),
    K = n(190107),
    $ = n(652215),
    z = n(216934);
async function q(e) {
    try {
        let t = (0, m.br)(e);
        if (null == t || t.type !== T.I.INVITE) return !1;
        let n = N.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await I.Ay.resolveInvite(t.code, "Markdown Link");
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
async function Z(e) {
    try {
        if (R.A.isDiscordUrl(e)) return !0;
        return await q(e);
    } catch (e) {
        return !1;
    }
}
function X(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, o.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("95367"),
            n.e("10887"),
            n.e("75459"),
            n.e("43300"),
            n.e("32886"),
            n.e("50119"),
            n.e("64648"),
            n.e("99432"),
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
            n.e("73"),
            n.e("62875"),
            n.e("71217"),
            n.e("93004"),
            n.e("12466"),
            n.e("7865"),
            n.e("36037"),
            n.e("69539"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function Q(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, o.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("10887"),
            n.e("75459"),
            n.e("64648"),
            n.e("99432"),
            n.e("27605"),
            n.e("44595"),
            n.e("54721"),
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
            n.e("73"),
            n.e("72877"),
            n.e("62875"),
            n.e("89393"),
            n.e("93004"),
            n.e("6286"),
            n.e("12466"),
            n.e("94704"),
            n.e("73551"),
            n.e("34853"),
        ]).then(n.bind(n, 205604));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function J(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("75459"),
            n.e("43300"),
            n.e("32886"),
            n.e("50119"),
            n.e("64648"),
            n.e("99432"),
            n.e("11310"),
            n.e("53930"),
            n.e("36863"),
            n.e("24761"),
            n.e("32606"),
            n.e("85350"),
            n.e("73"),
            n.e("71217"),
            n.e("93004"),
            n.e("12466"),
            n.e("7865"),
            n.e("26747"),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, location: t, sourceQuestContent: r });
    });
}
function ee(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("9"),
            n.e("50119"),
            n.e("75459"),
            n.e("64648"),
            n.e("99432"),
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
            n.e("73"),
            n.e("71217"),
            n.e("54103"),
            n.e("93004"),
            n.e("12466"),
            n.e("77298"),
            n.e("7865"),
            n.e("33546"),
            n.e("50332"),
        ]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: r, location: t });
    });
}
function et(e, t, r, a) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("50119"),
            n.e("75459"),
            n.e("64648"),
            n.e("99432"),
            n.e("48357"),
            n.e("11310"),
            n.e("36863"),
            n.e("77473"),
            n.e("24761"),
            n.e("36877"),
            n.e("32606"),
            n.e("85350"),
            n.e("27323"),
            n.e("73"),
            n.e("71217"),
            n.e("93004"),
            n.e("12466"),
            n.e("7865"),
            n.e("90948"),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: r, location: t, preview: a });
    });
}
function en(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: a } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(a, { ...n, quest: e, location: t, sourceQuestContent: r });
    });
}
function ei() {
    (0, o.openModalLazy)(async () => {
        let { default: e } = await n.e("56086").then(n.bind(n, 700085));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function er(e, t, r) {
    let { ctaContent: s } = t;
    (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "open_disclosure_modal")
        ? (0, f.r)({
              type: p.F.CLICK_INTERNAL,
              adCreativeType: a.p.QUEST,
              adCreativeId: e.id,
              questContentCTA: s,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentPosition: t.position,
              impressionId: t.impressionId,
          })
        : (0, U.Y5)({
              questId: e.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentCTA: s,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (0, o.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([n.e("78275"), n.e("24922"), n.e("78050"), n.e("132")]).then(
                    n.bind(n, 348559),
                );
                return (n) => (0, i.jsx)(a, { ...n, questContent: t.content, quest: e, returnRef: r });
            },
            {
                onCloseCallback: () => {
                    let e = r?.current;
                    if (null == e) return;
                    let t = 0;
                    requestAnimationFrame(function n() {
                        var i;
                        null == e ||
                            ((t += 1),
                            document.body.contains(e) &&
                                ((null != (i = document.activeElement) &&
                                    document.body.contains(i) &&
                                    null !=
                                        i.closest('[data-mana-component="modal"], [role="dialog"][tabindex="-1"]')) ||
                                    document.activeElement === e ||
                                    e.focus(),
                                (null != document.querySelector('[data-mana-component="modal"]') ||
                                    document.activeElement !== e) &&
                                    t < 90 &&
                                    requestAnimationFrame(n)));
                    });
                },
            },
        );
}
function ea(e) {
    let t,
        n = (0, G.L)({ quest: e });
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
            choices: k()(t.slice(0, 4)).concat(t[4]),
        });
    n.log(`Showing survey ${i.id}`), (0, Y.m)({ questId: e.id, survey: i });
}
function es() {
    return Promise.all([
        n.e("75459"),
        n.e("43300"),
        n.e("32886"),
        n.e("56976"),
        n.e("80904"),
        n.e("99432"),
        n.e("57381"),
        n.e("74362"),
        n.e("98987"),
        n.e("92868"),
        n.e("11310"),
        n.e("53930"),
        n.e("44502"),
        n.e("7788"),
        n.e("24689"),
        n.e("24761"),
        n.e("32606"),
        n.e("85350"),
        n.e("73"),
        n.e("24914"),
        n.e("55602"),
        n.e("25717"),
        n.e("63408"),
        n.e("77375"),
        n.e("79907"),
        n.e("97199"),
    ]).then(n.bind(n, 834135));
}
function el(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: a,
        sourceQuestContentCTA: s,
        autoplay: l = !0,
        skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, F.K$)(t)) return void e_(t);
    let u = (0, r.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, B.Ic)(t)) {
        y.A.isEnrolling(t.id) ||
            (0, D.Oy)(t.id, { questContent: n, questContentCTA: w.Cy.ACCEPT_QUEST, sourceQuestContent: a });
        let e = v.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, D.QG)(t.id),
            O.default.track($.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, w.jO)(a),
                source_quest_content_cta: s,
                video_session_id: u,
            }));
    }
    let { setCaptionEnabled: _, muted: E, volume: A, captionEnabled: h } = v.Ay.getState(),
        { enabled: I, variant: f } = b.Ig.getConfig({ location: K.rE.VIDEO_MODAL }),
        p = null != (0, P.tW)(t, P.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    E &&
        I &&
        (f === b.sy.AUTO_ENABLE_CAPTIONS && p && !h
            ? _(!0)
            : f === b.sy.AUTO_UNMUTE && (v.Ay.getState().setMuted(!1), 0 === A && v.Ay.getState().setVolume(0.3)));
    let T = performance.now();
    (0, o.openModalLazy)(
        async () => {
            let { default: e } = await es();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: T,
                    questId: t.id,
                    autoplay: l,
                    videoSessionId: u,
                    sourceQuestContent: a,
                });
        },
        {
            modalKey: (0, W.cZ)(t.id),
            backdropStyle: d.F.IMMERSIVE,
            onCloseCallback: () => (0, W.vm)({ questId: t.id, sourceQuestContent: a, videoSessionId: u }),
        },
    );
}
function eo(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = S.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        O.default.track($.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        L.A.launch(t, (t) => {
            t || (0, g.bG)({ pathname: $.BVt.QUEST_HOME, hash: e });
        });
}
function ed(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = S.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        O.default.track($.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        L.A.launch(t, (t) => {
            t || (0, g.bG)({ pathname: $.BVt.QUEST_HOME, hash: e });
        });
}
function ec(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = S.default.getFingerprint(),
                r = (0, s.I_)(),
                a = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, s.Ay)(a, { utmSource: "quest-home-preview", fingerprint: i, attemptId: r });
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        O.default.track($.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        L.A.launch(t, (e) => {
            e || (0, g.bG)({ pathname: $.BVt.QUEST_HOME });
        });
}
function eu(e, t) {
    (0, o.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("55907"),
            n.e("81015"),
            n.e("8304"),
            n.e("24637"),
            n.e("83774"),
            n.e("99513"),
            n.e("62101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(r, { ...n, multiplier: e, orbMultiplierEligibility: t });
    });
}
function e_(e) {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("76729"),
            n.e("24766"),
            n.e("95429"),
            n.e("92117"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function eE(e, t) {
    let { type: n } = await (0, D.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case D.WM.SUCCESS:
            el({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case D.WM.CAPTCHA_FAILED:
            h.A.show({ title: V.intl.string(V.t["/CidxO"]), body: V.intl.string(V.t.HQdHg6) });
            break;
        case D.WM.UNKNOWN_ERROR:
            h.A.show({ title: V.intl.string(V.t.R0RpRX), body: V.intl.string(V.t.OXD41D) });
        case D.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function eA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if ((0, j.vA)(e)) return e.config.features.includes(K.Li.CLOUD_GAMING_ACTIVITY) ? (t ? void 0 : c.h) : u._;
}
function eh(e) {
    let t = (0, H.bg)(e);
    return (0, F.K$)(e)
        ? { icon: _.u }
        : t.length > 0 && !(0, F.I6)(e)
          ? { icon: E.a, iconPosition: "end" }
          : (0, F.no)(e)
            ? { icon: A.I, iconPosition: "end" }
            : { icon: void 0, iconPosition: void 0 };
}
