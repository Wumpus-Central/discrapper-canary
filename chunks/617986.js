n.d(t, {
    QA: () => eo,
    Df: () => Z,
    z6: () => en,
    cf: () => X,
    ii: () => W,
    zg: () => el,
    hJ: () => J,
    q$: () => es,
    mA: () => G.m,
    Zc: () => et,
    gC: () => er,
    Fy: () => eu,
    _x: () => B,
    d5: () => ea,
    f7: () => F,
    m6: () => ee,
    e0: () => ec,
    rx: () => K,
    Q_: () => em,
    l9: () => ei,
    Oz: () => ed,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(627968);
n(64700);
var a = n(132500),
    o = n(323889),
    s = n(742821),
    l = n(80703);
n(876230);
var r = n(192308),
    u = n(892491),
    c = n(414499),
    d = n(687966),
    m = n(646270),
    f = n(157559),
    p = n(376728),
    C = n(274670),
    E = n(144779),
    y = n(167189),
    _ = n(833291),
    g = n(976860),
    A = n(280450),
    I = n(299091),
    h = n(711014),
    S = n(174459),
    x = n(998218),
    T = n(877062),
    v = n(340124),
    w = n(859703),
    L = n(405670),
    N = n(192444),
    q = n(104886),
    b = n(46948),
    Q = n(561844),
    P = n(590202),
    j = n(851936),
    O = n(588350),
    D = n.n(O),
    M = n(792620),
    k = n(375708),
    R = n(710969),
    U = n(814793),
    V = n(753386),
    z = n(448967),
    H = n(190107),
    $ = n(652215),
    G = n(216934);
async function Y(e) {
    try {
        let t = (0, _.br)(e);
        if (null == t || t.type !== y.I.INVITE) return !1;
        let n = I.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await p.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = h.Ay.getFlattenedGuildIds(),
            a = n?.guild?.id;
        return null != a && i.includes(a);
    } catch (e) {
        return !1;
    }
}
async function F(e) {
    try {
        if (x.A.isDiscordUrl(e)) return !0;
        return await Y(e);
    } catch (e) {
        return !1;
    }
}
function K(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, r.openModalLazy)(async () => {
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
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: a });
    });
}
function B(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, r.openModalLazy)(async () => {
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
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: a });
    });
}
function W(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, r.openModalLazy)(async () => {
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
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: a });
    });
}
function X(e, t, a) {
    (0, r.openModalLazy)(async () => {
        let { default: o } = await Promise.all([
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
        return (n) => (0, i.jsx)(o, { ...n, initialQuest: e, location: t, sourceQuestContent: a });
    });
}
function Z(e, t, a) {
    (0, r.openModalLazy)(async () => {
        let { default: o } = await Promise.all([
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
        return (n) => (0, i.jsx)(o, { ...n, initialQuest: e, sourceQuestContent: a, location: t });
    });
}
function J(e, t, a, o) {
    (0, r.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
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
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: a, location: t, preview: o });
    });
}
function ee(e, t, a) {
    (0, r.openModalLazy)(async () => {
        let { default: o } = await n.e("81169").then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(o, { ...n, quest: e, location: t, sourceQuestContent: a });
    });
}
function et(e, t, a) {
    let { ctaContent: s } = t;
    (0, q.E5)(q.kI.STEP_2_CLICKED_INTERNAL, "open_disclosure_modal")
        ? (0, C.r)({
              type: E.F.CLICK_INTERNAL,
              adCreativeType: o.p.QUEST,
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
                let { default: o } = await Promise.all([n.e("99547"), n.e("78050"), n.e("132")]).then(
                    n.bind(n, 348559),
                );
                return (n) => (0, i.jsx)(o, { ...n, questContent: t.content, quest: e, returnRef: a });
            },
            {
                onCloseCallback: () => {
                    let e = a?.current;
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
        n = (0, j.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
        ((t = [
            {
                key: "NOT_INTERESTED",
                text: (0, M.vv)(e)
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
            choices: D()(t.slice(0, 4)).concat(t[4]),
        });
    n.log(`Showing survey ${i.id}`), (0, z.m)({ questId: e.id, survey: i });
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
function ea(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: o,
        sourceQuestContentCTA: s,
        autoplay: l = !0,
        skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, M.K$)(t)) return void eu(t);
    let d = (0, a.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, R.Ic)(t)) {
        w.A.isEnrolling(t.id) ||
            (0, v.Oy)(t.id, { questContent: n, questContentCTA: P.Cy.ACCEPT_QUEST, sourceQuestContent: o });
        let e = L.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, v.QG)(t.id),
            S.default.track($.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, P.jO)(o),
                source_quest_content_cta: s,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: m, muted: f, volume: p, captionEnabled: C } = L.Ay.getState(),
        { enabled: E, variant: y } = N.Ig.getConfig({ location: H.rE.VIDEO_MODAL }),
        _ = null != (0, b.tW)(t, b.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    f &&
        E &&
        (y === N.sy.AUTO_ENABLE_CAPTIONS && _ && !C
            ? m(!0)
            : y === N.sy.AUTO_UNMUTE && (L.Ay.getState().setMuted(!1), 0 === p && L.Ay.getState().setVolume(0.3)));
    let g = performance.now();
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await ei();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: g,
                    questId: t.id,
                    autoplay: l,
                    videoSessionId: d,
                    sourceQuestContent: o,
                });
        },
        {
            modalKey: (0, V.cZ)(t.id),
            backdropStyle: u.F.IMMERSIVE,
            onCloseCallback: () => (0, V.vm)({ questId: t.id, sourceQuestContent: o, videoSessionId: d }),
        },
    );
}
function eo(e) {
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
        S.default.track($.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        T.A.launch(t, (t) => {
            t || (0, g.bG)({ pathname: $.BVt.QUEST_HOME, hash: e });
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
        S.default.track($.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        T.A.launch(t, (t) => {
            t || (0, g.bG)({ pathname: $.BVt.QUEST_HOME, hash: e });
        });
}
function el(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = A.default.getFingerprint(),
                a = (0, s.I_)(),
                o = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, s.Ay)(o, { utmSource: "quest-home-preview", fingerprint: i, attemptId: a });
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        S.default.track($.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        T.A.launch(t, (e) => {
            e || (0, g.bG)({ pathname: $.BVt.QUEST_HOME });
        });
}
function er(e, t) {
    (0, r.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("36861"),
            n.e("16328"),
            n.e("8304"),
            n.e("47018"),
            n.e("83774"),
            n.e("99513"),
            n.e("62101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(a, { ...n, multiplier: e, orbMultiplierEligibility: t });
    });
}
function eu(e) {
    (0, r.openModalLazy)(async () => {
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
    let { type: n } = await (0, v.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case v.WM.SUCCESS:
            ea({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case v.WM.CAPTCHA_FAILED:
            f.A.show({ title: k.intl.string(k.t["/CidxO"]), body: k.intl.string(k.t.HQdHg6) });
            break;
        case v.WM.UNKNOWN_ERROR:
            f.A.show({ title: k.intl.string(k.t.R0RpRX), body: k.intl.string(k.t.OXD41D) });
        case v.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ed(e) {
    if ((0, U.vA)(e)) return e.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY) ? c.h : d._;
}
function em(e) {
    if ((0, M.K$)(e)) return m.u;
}
