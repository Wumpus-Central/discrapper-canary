n.d(t, {
    QA: () => er,
    Df: () => ee,
    FS: () => ei,
    z6: () => ea,
    cf: () => J,
    hJ: () => et,
    zg: () => ec,
    q$: () => eu,
    mA: () => K.m,
    Zc: () => eo,
    gC: () => ed,
    Fy: () => em,
    _x: () => Z,
    d5: () => el,
    f7: () => W,
    m6: () => en,
    e0: () => ef,
    rx: () => X,
    Q_: () => eC,
    l9: () => es,
    Oz: () => ep,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(477900);
n(582128);
var o = n(132500),
    a = n(323889),
    s = n(742821),
    l = n(80703);
n(876230);
var r = n(192308),
    u = n(892491),
    c = n(414499),
    d = n(687966),
    m = n(646270),
    f = n(847374),
    p = n(509434),
    C = n(157559),
    E = n(376728),
    y = n(274670),
    g = n(144779),
    _ = n(167189),
    A = n(833291),
    I = n(976860),
    h = n(280450),
    S = n(299091),
    x = n(711014),
    T = n(174459),
    v = n(998218),
    w = n(877062),
    L = n(396813),
    N = n(859703),
    b = n(405670),
    q = n(192444),
    P = n(104886),
    j = n(291749),
    Q = n(561844),
    O = n(590202),
    D = n(851936),
    M = n(199510),
    k = n.n(M),
    R = n(792620),
    U = n(375708),
    V = n(710969),
    z = n(901406),
    H = n(814793),
    $ = n(753386),
    G = n(448967),
    F = n(190107),
    Y = n(652215),
    K = n(216934);
async function B(e) {
    try {
        let t = (0, A.br)(e);
        if (null == t || t.type !== _.I.INVITE) return !1;
        let n = S.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await E.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = x.Ay.getFlattenedGuildIds(),
            o = n?.guild?.id;
        return null != o && i.includes(o);
    } catch (e) {
        return !1;
    }
}
async function W(e) {
    try {
        if (v.A.isDiscordUrl(e)) return !0;
        return await B(e);
    } catch (e) {
        return !1;
    }
}
function X(e) {
    let { quest: t, sourceQuestContent: o } = e;
    (0, r.openModalLazy)(async () => {
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
            n.e("13823"),
            n.e("53930"),
            n.e("92583"),
            n.e("36863"),
            n.e("54625"),
            n.e("35485"),
            n.e("37687"),
            n.e("24761"),
            n.e("59957"),
            n.e("32606"),
            n.e("85350"),
            n.e("39038"),
            n.e("62875"),
            n.e("71217"),
            n.e("93004"),
            n.e("12466"),
            n.e("7865"),
            n.e("36037"),
            n.e("69539"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: o });
    });
}
function Z(e) {
    let { quest: t, sourceQuestContent: o } = e;
    (0, r.openModalLazy)(async () => {
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
            n.e("39038"),
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
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: o });
    });
}
function J(e, t, o) {
    (0, r.openModalLazy)(async () => {
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
            n.e("39038"),
            n.e("71217"),
            n.e("93004"),
            n.e("12466"),
            n.e("7865"),
            n.e("26747"),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, location: t, sourceQuestContent: o });
    });
}
function ee(e, t, o) {
    (0, r.openModalLazy)(async () => {
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
            n.e("39038"),
            n.e("71217"),
            n.e("54103"),
            n.e("93004"),
            n.e("12466"),
            n.e("77298"),
            n.e("7865"),
            n.e("33546"),
            n.e("50332"),
        ]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: o, location: t });
    });
}
function et(e, t, o, a) {
    (0, r.openModalLazy)(async () => {
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
            n.e("39038"),
            n.e("71217"),
            n.e("93004"),
            n.e("12466"),
            n.e("7865"),
            n.e("90948"),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: o, location: t, preview: a });
    });
}
function en(e, t, o) {
    (0, r.openModalLazy)(async () => {
        let { default: a } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(a, { ...n, quest: e, location: t, sourceQuestContent: o });
    });
}
function ei() {
    (0, r.openModalLazy)(async () => {
        let { default: e } = await n.e("56086").then(n.bind(n, 700085));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function eo(e, t, o) {
    let { ctaContent: s } = t;
    (0, P.E5)(P.kI.STEP_2_CLICKED_INTERNAL, "open_disclosure_modal")
        ? (0, y.r)({
              type: g.F.CLICK_INTERNAL,
              adCreativeType: a.p.QUEST,
              adCreativeId: e.id,
              questContentCTA: s,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentPosition: t.position,
              impressionId: t.impressionId,
          })
        : (0, Q.Y5)({
              questId: e.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentCTA: s,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (0, r.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([n.e("78275"), n.e("24922"), n.e("78050"), n.e("132")]).then(
                    n.bind(n, 348559),
                );
                return (n) => (0, i.jsx)(a, { ...n, questContent: t.content, quest: e, returnRef: o });
            },
            {
                onCloseCallback: () => {
                    let e = o?.current;
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
        n = (0, D.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
        ((t = [
            {
                key: "NOT_INTERESTED",
                text: (0, R.vv)(e)
                    ? U.intl.string(U.t.wHRWkE)
                    : U.intl.formatToPlainString(U.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
            },
            { key: "INVALUABLE", text: U.intl.string(U.t.ETU4Na) },
            { key: "TOO_LONG", text: U.intl.string(U.t.uRIIpD) },
            { key: "UNSURE_HOW", text: U.intl.string(U.t["5dxvxs"]) },
            { key: "OTHER", text: U.intl.string(U.t.RFasgu) },
        ]),
        {
            id: "1290718710658629658",
            title: U.intl.string(U.t.ugbhDS),
            subtitle: U.intl.string(U.t.FIYcpC),
            choices: k()(t.slice(0, 4)).concat(t[4]),
        });
    n.log(`Showing survey ${i.id}`), (0, G.m)({ questId: e.id, survey: i });
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
        n.e("13867"),
        n.e("24761"),
        n.e("32606"),
        n.e("85350"),
        n.e("39038"),
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
    if ((0, R.K$)(t)) return void em(t);
    let d = (0, o.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, V.Ic)(t)) {
        N.A.isEnrolling(t.id) ||
            (0, L.Oy)(t.id, { questContent: n, questContentCTA: O.Cy.ACCEPT_QUEST, sourceQuestContent: a });
        let e = b.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, L.QG)(t.id),
            T.default.track(Y.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, O.jO)(a),
                source_quest_content_cta: s,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: m, muted: f, volume: p, captionEnabled: C } = b.Ay.getState(),
        { enabled: E, variant: y } = q.Ig.getConfig({ location: F.rE.VIDEO_MODAL }),
        g = null != (0, j.tW)(t, j.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    f &&
        E &&
        (y === q.sy.AUTO_ENABLE_CAPTIONS && g && !C
            ? m(!0)
            : y === q.sy.AUTO_UNMUTE && (b.Ay.getState().setMuted(!1), 0 === p && b.Ay.getState().setVolume(0.3)));
    let _ = performance.now();
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await es();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: _,
                    questId: t.id,
                    autoplay: l,
                    videoSessionId: d,
                    sourceQuestContent: a,
                });
        },
        {
            modalKey: (0, $.cZ)(t.id),
            backdropStyle: u.F.IMMERSIVE,
            onCloseCallback: () => (0, $.vm)({ questId: t.id, sourceQuestContent: a, videoSessionId: d }),
        },
    );
}
function er(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = h.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        T.default.track(Y.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        w.A.launch(t, (t) => {
            t || (0, I.bG)({ pathname: Y.BVt.QUEST_HOME, hash: e });
        });
}
function eu(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = h.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        T.default.track(Y.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        w.A.launch(t, (t) => {
            t || (0, I.bG)({ pathname: Y.BVt.QUEST_HOME, hash: e });
        });
}
function ec(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = h.default.getFingerprint(),
                o = (0, s.I_)(),
                a = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, s.Ay)(a, { utmSource: "quest-home-preview", fingerprint: i, attemptId: o });
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        T.default.track(Y.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        w.A.launch(t, (e) => {
            e || (0, I.bG)({ pathname: Y.BVt.QUEST_HOME });
        });
}
function ed(e, t) {
    (0, r.openModalLazy)(async () => {
        let { default: o } = await Promise.all([
            n.e("55907"),
            n.e("65253"),
            n.e("8304"),
            n.e("24637"),
            n.e("83774"),
            n.e("99513"),
            n.e("62101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(o, { ...n, multiplier: e, orbMultiplierEligibility: t });
    });
}
function em(e) {
    (0, r.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("76729"),
            n.e("24766"),
            n.e("95429"),
            n.e("80501"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function ef(e, t) {
    let { type: n } = await (0, L.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case L.WM.SUCCESS:
            el({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case L.WM.CAPTCHA_FAILED:
            C.A.show({ title: U.intl.string(U.t["/CidxO"]), body: U.intl.string(U.t.HQdHg6) });
            break;
        case L.WM.UNKNOWN_ERROR:
            C.A.show({ title: U.intl.string(U.t.R0RpRX), body: U.intl.string(U.t.OXD41D) });
        case L.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ep(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if ((0, H.vA)(e)) return e.config.features.includes(F.Li.CLOUD_GAMING_ACTIVITY) ? (t ? void 0 : c.h) : d._;
}
function eC(e) {
    let t = (0, z.bg)(e);
    return (0, R.K$)(e)
        ? { icon: m.u }
        : t.length > 0 && !(0, R.I6)(e)
          ? { icon: f.a, iconPosition: "end" }
          : (0, R.no)(e)
            ? { icon: p.I, iconPosition: "end" }
            : { icon: void 0, iconPosition: void 0 };
}
