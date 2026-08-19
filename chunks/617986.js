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
    A = n(167189),
    _ = n(833291),
    I = n(976860),
    h = n(280450),
    S = n(299091),
    x = n(711014),
    v = n(174459),
    T = n(998218),
    w = n(877062),
    L = n(396813),
    N = n(859703),
    b = n(405670),
    q = n(192444),
    P = n(104886),
    Q = n(291749),
    j = n(561844),
    O = n(590202),
    D = n(851936),
    M = n(199510),
    k = n.n(M),
    R = n(792620),
    U = n(375708),
    V = n(710969),
    z = n(901406),
    H = n(814793),
    G = n(753386),
    $ = n(448967),
    F = n(190107),
    Y = n(652215),
    K = n(216934);
async function B(e) {
    try {
        let t = (0, _.br)(e);
        if (null == t || t.type !== A.I.INVITE) return !1;
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
        if (T.A.isDiscordUrl(e)) return !0;
        return await B(e);
    } catch (e) {
        return !1;
    }
}
function X(e) {
    let { quest: t, sourceQuestContent: o } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("695367"),
            n.e("414397"),
            n.e("98818"),
            n.e("794246"),
            n.e("365110"),
            n.e("130706"),
            n.e("421223"),
            n.e("476984"),
            n.e("220389"),
            n.e("451566"),
            n.e("574965"),
            n.e("300450"),
            n.e("161756"),
            n.e("995705"),
            n.e("864031"),
            n.e("495522"),
            n.e("984137"),
            n.e("352403"),
            n.e("512157"),
            n.e("472866"),
            n.e("799453"),
            n.e("663369"),
            n.e("239816"),
            n.e("886148"),
            n.e("748968"),
            n.e("182277"),
            n.e("267232"),
            n.e("762376"),
            n.e("597569"),
            n.e("701348"),
            n.e("478909"),
            n.e("44153"),
            n.e("395914"),
            n.e("72032"),
            n.e("225091"),
            n.e("986760"),
            n.e("68454"),
            n.e("79998"),
            n.e("290093"),
            n.e("909403"),
            n.e("294128"),
            n.e("517223"),
            n.e("305689"),
            n.e("195553"),
            n.e("708397"),
            n.e("712975"),
            n.e("167672"),
            n.e("360481"),
            n.e("771612"),
            n.e("114508"),
            n.e("361361"),
            n.e("263177"),
            n.e("292428"),
            n.e("67482"),
            n.e("117763"),
            n.e("800961"),
            n.e("757638"),
            n.e("983199"),
            n.e("918448"),
            n.e("869729"),
            n.e("433757"),
            n.e("909852"),
            n.e("78477"),
            n.e("933439"),
            n.e("327508"),
            n.e("284169"),
            n.e("243767"),
            n.e("205528"),
            n.e("4820"),
            n.e("599467"),
            n.e("100722"),
            n.e("304670"),
            n.e("912249"),
            n.e("207117"),
            n.e("559804"),
            n.e("811245"),
            n.e("841272"),
            n.e("373243"),
            n.e("325933"),
            n.e("576921"),
            n.e("130826"),
            n.e("671229"),
            n.e("712439"),
            n.e("200010"),
            n.e("503143"),
            n.e("102523"),
            n.e("930192"),
            n.e("522128"),
            n.e("502199"),
            n.e("693020"),
            n.e("758186"),
            n.e("79863"),
            n.e("988744"),
            n.e("46259"),
            n.e("609023"),
            n.e("982034"),
            n.e("285538"),
            n.e("933983"),
            n.e("475459"),
            n.e("943300"),
            n.e("732886"),
            n.e("650119"),
            n.e("364648"),
            n.e("568599"),
            n.e("424199"),
            n.e("645499"),
            n.e("964367"),
            n.e("307296"),
            n.e("811310"),
            n.e("913823"),
            n.e("331549"),
            n.e("28154"),
            n.e("27773"),
            n.e("349619"),
            n.e("292583"),
            n.e("776195"),
            n.e("183776"),
            n.e("599666"),
            n.e("894747"),
            n.e("300699"),
            n.e("346102"),
            n.e("276640"),
            n.e("398125"),
            n.e("611523"),
            n.e("836863"),
            n.e("621624"),
            n.e("253729"),
            n.e("593600"),
            n.e("482815"),
            n.e("170653"),
            n.e("234236"),
            n.e("543039"),
            n.e("948804"),
            n.e("418943"),
            n.e("73874"),
            n.e("89892"),
            n.e("829177"),
            n.e("444376"),
            n.e("896232"),
            n.e("161379"),
            n.e("232551"),
            n.e("53374"),
            n.e("710638"),
            n.e("904723"),
            n.e("631825"),
            n.e("770697"),
            n.e("318546"),
            n.e("620320"),
            n.e("851243"),
            n.e("466322"),
            n.e("50015"),
            n.e("747017"),
            n.e("165595"),
            n.e("858514"),
            n.e("588940"),
            n.e("199999"),
            n.e("864931"),
            n.e("776750"),
            n.e("511527"),
            n.e("515168"),
            n.e("936320"),
            n.e("763070"),
            n.e("564615"),
            n.e("193158"),
            n.e("955184"),
            n.e("123216"),
            n.e("784041"),
            n.e("638658"),
            n.e("454625"),
            n.e("190889"),
            n.e("314805"),
            n.e("790244"),
            n.e("173547"),
            n.e("844695"),
            n.e("756210"),
            n.e("274380"),
            n.e("317225"),
            n.e("434691"),
            n.e("761935"),
            n.e("858821"),
            n.e("539620"),
            n.e("176358"),
            n.e("427926"),
            n.e("999146"),
            n.e("214524"),
            n.e("87306"),
            n.e("146248"),
            n.e("637721"),
            n.e("356948"),
            n.e("123353"),
            n.e("836545"),
            n.e("505551"),
            n.e("257520"),
            n.e("313681"),
            n.e("837687"),
            n.e("224992"),
            n.e("491849"),
            n.e("901555"),
            n.e("231578"),
            n.e("225990"),
            n.e("463095"),
            n.e("131223"),
            n.e("35485"),
            n.e("324761"),
            n.e("159957"),
            n.e("932606"),
            n.e("285350"),
            n.e("39038"),
            n.e("30939"),
            n.e("271217"),
            n.e("660748"),
            n.e("212466"),
            n.e("307865"),
            n.e("536037"),
            n.e("769539"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: o });
    });
}
function Z(e) {
    let { quest: t, sourceQuestContent: o } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("285538"),
            n.e("933983"),
            n.e("475459"),
            n.e("364648"),
            n.e("568599"),
            n.e("27605"),
            n.e("544595"),
            n.e("854721"),
            n.e("811310"),
            n.e("913823"),
            n.e("28154"),
            n.e("292583"),
            n.e("836863"),
            n.e("466322"),
            n.e("454625"),
            n.e("858821"),
            n.e("35485"),
            n.e("363618"),
            n.e("324761"),
            n.e("932606"),
            n.e("285350"),
            n.e("39038"),
            n.e("672877"),
            n.e("30939"),
            n.e("689393"),
            n.e("660748"),
            n.e("506286"),
            n.e("212466"),
            n.e("394704"),
            n.e("873551"),
            n.e("334853"),
        ]).then(n.bind(n, 205604));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: o });
    });
}
function J(e, t, o) {
    (0, r.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("475459"),
            n.e("943300"),
            n.e("732886"),
            n.e("650119"),
            n.e("364648"),
            n.e("568599"),
            n.e("811310"),
            n.e("331549"),
            n.e("28154"),
            n.e("836863"),
            n.e("324761"),
            n.e("932606"),
            n.e("285350"),
            n.e("39038"),
            n.e("271217"),
            n.e("660748"),
            n.e("212466"),
            n.e("307865"),
            n.e("826747"),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, location: t, sourceQuestContent: o });
    });
}
function ee(e, t, o) {
    (0, r.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("100009"),
            n.e("650119"),
            n.e("475459"),
            n.e("364648"),
            n.e("568599"),
            n.e("234303"),
            n.e("994723"),
            n.e("811310"),
            n.e("752511"),
            n.e("942724"),
            n.e("28154"),
            n.e("836863"),
            n.e("423532"),
            n.e("324761"),
            n.e("932606"),
            n.e("285350"),
            n.e("39038"),
            n.e("271217"),
            n.e("254103"),
            n.e("660748"),
            n.e("212466"),
            n.e("177298"),
            n.e("307865"),
            n.e("33546"),
            n.e("150332"),
        ]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: o, location: t });
    });
}
function et(e, t, o, a) {
    (0, r.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("225091"),
            n.e("650119"),
            n.e("475459"),
            n.e("364648"),
            n.e("568599"),
            n.e("811310"),
            n.e("28154"),
            n.e("349619"),
            n.e("776195"),
            n.e("183776"),
            n.e("599666"),
            n.e("300699"),
            n.e("276640"),
            n.e("398125"),
            n.e("836863"),
            n.e("593600"),
            n.e("87306"),
            n.e("77473"),
            n.e("324761"),
            n.e("36877"),
            n.e("932606"),
            n.e("285350"),
            n.e("627323"),
            n.e("39038"),
            n.e("271217"),
            n.e("660748"),
            n.e("212466"),
            n.e("307865"),
            n.e("190948"),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: o, location: t, preview: a });
    });
}
function en(e, t, o) {
    (0, r.openModalLazy)(async () => {
        let { default: a } = await Promise.all([n.e("28154"), n.e("981169")]).then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(a, { ...n, quest: e, location: t, sourceQuestContent: o });
    });
}
function ei() {
    (0, r.openModalLazy)(async () => {
        let { default: e } = await n.e("856086").then(n.bind(n, 700085));
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
        : (0, j.Y5)({
              questId: e.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentCTA: s,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (0, r.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([
                    n.e("578275"),
                    n.e("24922"),
                    n.e("678050"),
                    n.e("100132"),
                ]).then(n.bind(n, 348559));
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
    n.log(`Showing survey ${i.id}`), (0, $.m)({ questId: e.id, survey: i });
}
function es() {
    return Promise.all([
        n.e("599467"),
        n.e("475459"),
        n.e("943300"),
        n.e("732886"),
        n.e("256976"),
        n.e("780904"),
        n.e("568599"),
        n.e("57381"),
        n.e("974362"),
        n.e("298987"),
        n.e("392868"),
        n.e("811310"),
        n.e("331549"),
        n.e("28154"),
        n.e("621624"),
        n.e("482815"),
        n.e("170653"),
        n.e("344502"),
        n.e("896232"),
        n.e("53374"),
        n.e("710638"),
        n.e("613867"),
        n.e("434691"),
        n.e("257520"),
        n.e("324761"),
        n.e("932606"),
        n.e("285350"),
        n.e("39038"),
        n.e("24914"),
        n.e("655602"),
        n.e("825717"),
        n.e("263408"),
        n.e("77375"),
        n.e("479907"),
        n.e("119580"),
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
    if (N.A.isQuestAccessSuspended && t.userStatus?.completedAt == null) return void ei();
    let d = (0, o.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, V.Ic)(t)) {
        N.A.isEnrolling(t.id) ||
            (0, L.Oy)(t.id, { questContent: n, questContentCTA: O.Cy.ACCEPT_QUEST, sourceQuestContent: a });
        let e = b.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, L.QG)(t.id),
            v.default.track(Y.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, O.jO)(a),
                source_quest_content_cta: s,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: m, muted: f, volume: p, captionEnabled: C } = b.Ay.getState(),
        { enabled: E, variant: y } = q.Ig.getConfig({ location: F.rE.VIDEO_MODAL }),
        g = null != (0, Q.tW)(t, Q.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    f &&
        E &&
        (y === q.sy.AUTO_ENABLE_CAPTIONS && g && !C
            ? m(!0)
            : y === q.sy.AUTO_UNMUTE && (b.Ay.getState().setMuted(!1), 0 === p && b.Ay.getState().setVolume(0.3)));
    let A = performance.now();
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await es();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: A,
                    questId: t.id,
                    autoplay: l,
                    videoSessionId: d,
                    sourceQuestContent: a,
                });
        },
        {
            modalKey: (0, G.cZ)(t.id),
            backdropStyle: u.F.IMMERSIVE,
            onCloseCallback: () => (0, G.vm)({ questId: t.id, sourceQuestContent: a, videoSessionId: d }),
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
        v.default.track(Y.HAw.DEEP_LINK_CLICKED, {
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
        v.default.track(Y.HAw.DEEP_LINK_CLICKED, {
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
        v.default.track(Y.HAw.DEEP_LINK_CLICKED, {
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
            n.e("155907"),
            n.e("465253"),
            n.e("396656"),
            n.e("165595"),
            n.e("199999"),
            n.e("638658"),
            n.e("724637"),
            n.e("783774"),
            n.e("899513"),
            n.e("862101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(o, { ...n, multiplier: e, orbMultiplierEligibility: t });
    });
}
function em(e) {
    (0, r.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("176729"),
            n.e("24766"),
            n.e("595429"),
            n.e("865037"),
            n.e("748370"),
            n.e("746485"),
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
    if ((0, H.vA)(e))
        return e.config.features.includes(F.Li.CLOUD_GAMING_ACTIVITY) ? (t ? void 0 : c.h) : d.GameControllerIcon;
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
