(n.d(t, {
    QA: () => er,
    Df: () => Z,
    FS: () => et,
    z6: () => ei,
    cf: () => X,
    hJ: () => J,
    zg: () => eu,
    q$: () => el,
    mA: () => $.m,
    Zc: () => en,
    gC: () => ec,
    Fy: () => ed,
    _x: () => W,
    d5: () => es,
    f7: () => F,
    m6: () => ee,
    e0: () => em,
    rx: () => K,
    Q_: () => ef,
    l9: () => ea,
    Oz: () => ep,
}),
    n(323874),
    n(14289),
    n(35956));
var i = n(477900);
n(582128);
var a = n(132500),
    o = n(323889),
    s = n(742821),
    r = n(80703);
n(876230);
var l = n(192308),
    u = n(892491),
    c = n(414499),
    d = n(687966),
    m = n(646270),
    p = n(847374),
    f = n(509434),
    y = n(157559),
    E = n(376728),
    C = n(507395),
    g = n(144779),
    A = n(494280),
    h = n(167189),
    _ = n(721779),
    I = n(976860),
    S = n(280450),
    v = n(299091),
    T = n(711014),
    L = n(174459),
    b = n(998218),
    x = n(877062),
    N = n(427495),
    w = n(859703),
    q = n(405670),
    Q = n(192444),
    P = n(590202),
    j = n(851936),
    O = n(199510),
    U = n.n(O),
    M = n(792620),
    D = n(105292),
    k = n(977416),
    R = n(620954),
    Y = n(814793),
    V = n(753386),
    B = n(448967),
    z = n(190107),
    G = n(652215),
    $ = n(216934);
async function H(e) {
    try {
        let t = (0, _.br)(e);
        if (null == t || t.type !== h.I.INVITE) return !1;
        let n = v.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await E.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = T.Ay.getFlattenedGuildIds(),
            a = n?.guild?.id;
        return null != a && i.includes(a);
    } catch (e) {
        return !1;
    }
}
async function F(e) {
    try {
        if (b.A.isDiscordUrl(e)) return !0;
        return await H(e);
    } catch (e) {
        return !1;
    }
}
function K(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("730931"),
            n.e("329172"),
            n.e("644013"),
            n.e("896691"),
            n.e("971156"),
            n.e("260009"),
            n.e("779367"),
            n.e("552653"),
            n.e("85427"),
            n.e("698584"),
            n.e("967850"),
            n.e("291329"),
            n.e("64769"),
            n.e("992956"),
            n.e("880150"),
            n.e("490743"),
            n.e("44141"),
            n.e("428643"),
            n.e("512831"),
            n.e("630290"),
            n.e("321735"),
            n.e("60002"),
            n.e("189423"),
            n.e("415695"),
            n.e("315771"),
            n.e("691398"),
            n.e("266201"),
            n.e("752704"),
            n.e("56606"),
            n.e("206516"),
            n.e("327545"),
            n.e("163466"),
            n.e("940298"),
            n.e("738015"),
            n.e("234017"),
            n.e("621820"),
            n.e("40791"),
            n.e("358404"),
            n.e("996907"),
            n.e("831130"),
            n.e("599618"),
            n.e("377989"),
            n.e("546547"),
            n.e("102075"),
            n.e("828178"),
            n.e("505928"),
            n.e("752657"),
            n.e("747973"),
            n.e("395919"),
            n.e("885251"),
            n.e("953840"),
            n.e("650376"),
            n.e("587618"),
            n.e("645499"),
            n.e("322690"),
            n.e("454048"),
            n.e("300699"),
            n.e("349619"),
            n.e("488694"),
            n.e("543039"),
            n.e("398125"),
            n.e("221825"),
            n.e("930758"),
            n.e("776195"),
            n.e("901555"),
            n.e("253729"),
            n.e("593600"),
            n.e("827708"),
            n.e("266900"),
            n.e("707826"),
            n.e("948804"),
            n.e("199999"),
            n.e("205596"),
            n.e("110116"),
            n.e("828111"),
            n.e("890027"),
            n.e("492762"),
            n.e("809915"),
            n.e("463095"),
            n.e("851130"),
            n.e("672727"),
            n.e("417286"),
            n.e("927211"),
            n.e("534822"),
            n.e("361626"),
            n.e("646506"),
            n.e("445124"),
            n.e("76428"),
            n.e("27773"),
            n.e("445421"),
            n.e("832823"),
            n.e("761935"),
            n.e("511527"),
            n.e("763070"),
            n.e("87306"),
            n.e("502018"),
            n.e("955184"),
            n.e("249366"),
            n.e("728633"),
            n.e("628439"),
            n.e("570506"),
            n.e("539620"),
            n.e("225990"),
            n.e("41402"),
            n.e("248329"),
            n.e("93939"),
            n.e("811310"),
            n.e("165595"),
            n.e("401590"),
            n.e("664977"),
            n.e("466354"),
            n.e("133902"),
            n.e("123353"),
            n.e("263765"),
            n.e("445980"),
            n.e("76705"),
            n.e("401827"),
            n.e("836545"),
            n.e("187110"),
            n.e("621624"),
            n.e("489949"),
            n.e("323624"),
            n.e("858514"),
            n.e("344265"),
            n.e("637721"),
            n.e("292583"),
            n.e("716092"),
            n.e("784041"),
            n.e("371933"),
            n.e("815859"),
            n.e("547646"),
            n.e("288004"),
            n.e("836863"),
            n.e("821198"),
            n.e("466322"),
            n.e("170653"),
            n.e("231578"),
            n.e("454625"),
            n.e("288705"),
            n.e("661008"),
            n.e("180657"),
            n.e("35485"),
            n.e("837687"),
            n.e("653849"),
            n.e("324761"),
            n.e("159957"),
            n.e("932606"),
            n.e("39038"),
            n.e("913823"),
            n.e("561000"),
            n.e("271217"),
            n.e("881821"),
            n.e("768637"),
            n.e("212466"),
            n.e("307865"),
            n.e("536037"),
            n.e("769539"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: a });
    });
}
function W(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("546547"),
            n.e("102075"),
            n.e("828178"),
            n.e("505928"),
            n.e("885251"),
            n.e("953840"),
            n.e("540620"),
            n.e("782208"),
            n.e("454048"),
            n.e("492762"),
            n.e("811310"),
            n.e("323624"),
            n.e("292583"),
            n.e("836863"),
            n.e("821198"),
            n.e("466322"),
            n.e("454625"),
            n.e("180657"),
            n.e("35485"),
            n.e("363618"),
            n.e("653849"),
            n.e("324761"),
            n.e("932606"),
            n.e("39038"),
            n.e("913823"),
            n.e("672877"),
            n.e("561000"),
            n.e("881821"),
            n.e("689393"),
            n.e("768637"),
            n.e("394704"),
            n.e("212466"),
            n.e("402848"),
        ]).then(n.bind(n, 762339));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: a });
    });
}
function X(e, t, a) {
    (0, l.openModalLazy)(async () => {
        let { default: o } = await Promise.all([
            n.e("505928"),
            n.e("752657"),
            n.e("747973"),
            n.e("395919"),
            n.e("885251"),
            n.e("953840"),
            n.e("454048"),
            n.e("811310"),
            n.e("187110"),
            n.e("836863"),
            n.e("653849"),
            n.e("324761"),
            n.e("932606"),
            n.e("39038"),
            n.e("271217"),
            n.e("768637"),
            n.e("212466"),
            n.e("307865"),
            n.e("826747"),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(o, { ...n, initialQuest: e, location: t, sourceQuestContent: a });
    });
}
function Z(e, t, a) {
    (0, l.openModalLazy)(async () => {
        let { default: o } = await Promise.all([
            n.e("171206"),
            n.e("395919"),
            n.e("505928"),
            n.e("885251"),
            n.e("953840"),
            n.e("454048"),
            n.e("811310"),
            n.e("942724"),
            n.e("836863"),
            n.e("653849"),
            n.e("753589"),
            n.e("324761"),
            n.e("932606"),
            n.e("39038"),
            n.e("271217"),
            n.e("768637"),
            n.e("888205"),
            n.e("254103"),
            n.e("212466"),
            n.e("307865"),
            n.e("134015"),
        ]).then(n.bind(n, 186818));
        return (n) => (0, i.jsx)(o, { ...n, initialQuest: e, sourceQuestContent: a, location: t });
    });
}
function J(e, t, a, o) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("621820"),
            n.e("395919"),
            n.e("505928"),
            n.e("885251"),
            n.e("953840"),
            n.e("454048"),
            n.e("332447"),
            n.e("300699"),
            n.e("349619"),
            n.e("488694"),
            n.e("398125"),
            n.e("221825"),
            n.e("930758"),
            n.e("776195"),
            n.e("593600"),
            n.e("707826"),
            n.e("534822"),
            n.e("87306"),
            n.e("811310"),
            n.e("836863"),
            n.e("77473"),
            n.e("653849"),
            n.e("324761"),
            n.e("932606"),
            n.e("36877"),
            n.e("39038"),
            n.e("627323"),
            n.e("271217"),
            n.e("768637"),
            n.e("212466"),
            n.e("307865"),
            n.e("190948"),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: a, location: t, preview: o });
    });
}
function ee(e, t, a) {
    (0, l.openModalLazy)(async () => {
        let { default: o } = await Promise.all([n.e("653849"), n.e("981169")]).then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(o, { ...n, quest: e, location: t, sourceQuestContent: a });
    });
}
function et() {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("856086").then(n.bind(n, 700085));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function en(e, t, a) {
    let { ctaContent: s } = t,
        r = (function (e) {
            switch (e.type) {
                case o.p.QUEST: {
                    let { gamePublisher: t, gameTitle: n } = e.quest.config.messages;
                    return {
                        adCreativeType: o.p.QUEST,
                        gamePublisher: t,
                        gameTitle: n,
                        cosponsorName: e.quest.config.cosponsorMetadata?.name,
                        isVideoQuest: (0, M.vv)(e.quest),
                    };
                }
                case o.p.BOUNTY:
                    return { adCreativeType: o.p.BOUNTY, gamePublisher: e.bounty.advertiserName };
                case o.p.PLAYABLE:
                    return { adCreativeType: o.p.PLAYABLE, gamePublisher: e.playable.advertiserName };
            }
        })(e);
    ((0, C.r)({
        type: g.F.CLICK_INTERNAL,
        ...(0, A.Yh)(e),
        questContentCTA: s,
        surfaceId: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
    }),
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("422750"),
                    n.e("24922"),
                    n.e("678050"),
                    n.e("100132"),
                ]).then(n.bind(n, 348559));
                return (n) => (0, i.jsx)(e, { ...n, ...r, questContent: t.content, returnRef: a });
            },
            {
                onCloseCallback: () => {
                    let e = a?.current;
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
        ));
}
function ei(e) {
    let t,
        n = (0, j.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
        ((t = [
            {
                key: "NOT_INTERESTED",
                text: (0, M.vv)(e)
                    ? D.intl.string(D.t.wHRWkE)
                    : D.intl.formatToPlainString(D.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
            },
            { key: "INVALUABLE", text: D.intl.string(D.t.ETU4Na) },
            { key: "TOO_LONG", text: D.intl.string(D.t.uRIIpD) },
            { key: "UNSURE_HOW", text: D.intl.string(D.t["5dxvxs"]) },
            { key: "OTHER", text: D.intl.string(D.t.RFasgu) },
        ]),
        {
            id: "1290718710658629658",
            title: D.intl.string(D.t.ugbhDS),
            subtitle: D.intl.string(D.t.FIYcpC),
            choices: U()(t.slice(0, 4)).concat(t[4]),
        });
    (n.log(`Showing survey ${i.id}`), (0, B.m)({ questId: e.id, survey: i }));
}
function ea() {
    return Promise.all([
        n.e("245420"),
        n.e("216870"),
        n.e("651585"),
        n.e("955628"),
        n.e("505928"),
        n.e("752657"),
        n.e("747973"),
        n.e("572388"),
        n.e("953840"),
        n.e("974119"),
        n.e("392868"),
        n.e("454048"),
        n.e("110116"),
        n.e("809915"),
        n.e("811310"),
        n.e("187110"),
        n.e("621624"),
        n.e("508699"),
        n.e("398793"),
        n.e("592731"),
        n.e("784103"),
        n.e("53374"),
        n.e("482815"),
        n.e("256616"),
        n.e("344502"),
        n.e("170653"),
        n.e("817852"),
        n.e("133179"),
        n.e("614784"),
        n.e("275702"),
        n.e("613867"),
        n.e("912773"),
        n.e("710638"),
        n.e("653849"),
        n.e("434691"),
        n.e("324761"),
        n.e("932606"),
        n.e("39038"),
        n.e("24914"),
        n.e("285350"),
        n.e("655602"),
        n.e("825717"),
        n.e("664973"),
        n.e("263408"),
        n.e("220858"),
        n.e("182045"),
        n.e("479907"),
        n.e("119580"),
    ]).then(n.bind(n, 834135));
}
function eo(e, t, n, i) {
    let a = q.Ay.getState().getVideoProgress(e);
    null != a &&
        a.timestampSec > 1 &&
        ((0, N.QG)(e),
        L.default.track(G.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
            quest_id: e,
            source_quest_content: (0, P.jO)(t),
            source_quest_content_cta: n,
            video_session_id: i,
        }));
}
function es(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: o,
        sourceQuestContentCTA: s,
        autoplay: r = !0,
        skipEnrollmentCheck: c = !1,
        videoSessionId: d = (0, a.A)(),
    } = e;
    if ((0, M.K$)(t)) return void ed(t);
    if (w.A.isQuestAccessSuspended && t.userStatus?.completedAt == null) return void et();
    c ||
        t.userStatus?.enrolledAt != null ||
        (0, k.Ic)(t) ||
        (w.A.isEnrolling(t.id) ||
            (0, N.Oy)(t.id, { questContent: n, questContentCTA: P.Cy.ACCEPT_QUEST, sourceQuestContent: o }),
        eo(t.id, o, s, d));
    let { muted: m, volume: p } = q.Ay.getState(),
        { enabled: f, variant: y } = Q.Ig.getConfig({ location: z.rE.VIDEO_MODAL });
    m && f && y === Q.sy.AUTO_UNMUTE && (q.Ay.getState().setMuted(!1), 0 === p && q.Ay.getState().setVolume(0.3));
    let E = performance.now();
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await ea();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: E,
                    questId: t.id,
                    autoplay: r,
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
function er(e) {
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
    (null != n &&
        L.default.track(G.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, r.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        x.A.launch(t, (t) => {
            t || (0, I.bG)({ pathname: G.BVt.QUEST_HOME, hash: e });
        }));
}
function el(e) {
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
    (null != n &&
        L.default.track(G.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, r.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        x.A.launch(t, (t) => {
            t || (0, I.bG)({ pathname: G.BVt.QUEST_HOME, hash: e });
        }));
}
function eu(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = S.default.getFingerprint(),
                a = (0, s.I_)(),
                o = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, s.Ay)(o, { utmSource: "quest-home-preview", fingerprint: i, attemptId: a });
        })(e),
        n = (0, s.X7)(t);
    (null != n &&
        L.default.track(G.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, r.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        x.A.launch(t, (e) => {
            e || (0, I.bG)({ pathname: G.BVt.QUEST_HOME });
        }));
}
function ec(e, t, a) {
    (0, l.openModalLazy)(async () => {
        let { default: o } = await Promise.all([
            n.e("10058"),
            n.e("974969"),
            n.e("454048"),
            n.e("114252"),
            n.e("199999"),
            n.e("165595"),
            n.e("133902"),
            n.e("545587"),
            n.e("831145"),
            n.e("662355"),
            n.e("209518"),
            n.e("59413"),
            n.e("724637"),
            n.e("883922"),
            n.e("899513"),
            n.e("862101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(o, { ...n, multiplier: e, orbMultiplierEligibility: t, ...a });
    });
}
function ed(e) {
    (0, l.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("72338"),
            n.e("241797"),
            n.e("595429"),
            n.e("643465"),
            n.e("748370"),
            n.e("746485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function em(e, t) {
    let n = await (0, N.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n.type) {
        case N.WM.SUCCESS: {
            let i = (0, a.A)();
            (eo(e.id, t.sourceQuestContent, t.sourceQuestContentCTA, i),
                es({
                    quest: { ...e, userStatus: n.userStatus },
                    videoSessionId: i,
                    questContent: t.questContent,
                    sourceQuestContent: t.sourceQuestContent,
                    sourceQuestContentCTA: t.sourceQuestContentCTA,
                }));
            break;
        }
        case N.WM.UNKNOWN_ERROR:
            y.A.show({ title: D.intl.string(D.t.R0RpRX), body: D.intl.string(D.t.OXD41D) });
        case N.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ep(e) {
    if ((0, Y.vA)(e)) return e.config.features.includes(z.Li.CLOUD_GAMING_ACTIVITY) ? c.h : d.GameControllerIcon;
}
function ef(e) {
    let t = (0, R.bg)(e);
    return (0, M.K$)(e)
        ? { icon: m.u }
        : t.length > 0 && !(0, M.I6)(e)
          ? { icon: p.a, iconPosition: "end" }
          : (0, M.no)(e)
            ? { icon: f.I, iconPosition: "end" }
            : { icon: void 0, iconPosition: void 0 };
}
