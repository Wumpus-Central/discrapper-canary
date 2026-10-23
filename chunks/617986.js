(n.d(t, {
    QA: () => es,
    Df: () => Z,
    FS: () => et,
    z6: () => ei,
    cf: () => X,
    hJ: () => J,
    zg: () => er,
    q$: () => el,
    mA: () => F.m,
    Zc: () => en,
    gC: () => eu,
    Fy: () => ec,
    _x: () => W,
    d5: () => ea,
    f7: () => B,
    m6: () => ee,
    e0: () => ed,
    rx: () => K,
    Q_: () => ef,
    l9: () => eo,
    Oz: () => em,
}),
    n(323874),
    n(14289),
    n(35956));
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
    E = n(157559),
    y = n(376728),
    C = n(274670),
    g = n(144779),
    A = n(167189),
    _ = n(721779),
    h = n(976860),
    I = n(280450),
    S = n(299091),
    x = n(711014),
    v = n(174459),
    T = n(998218),
    w = n(877062),
    N = n(396813),
    L = n(859703),
    b = n(405670),
    P = n(192444),
    j = n(291749),
    q = n(590202),
    O = n(851936),
    Q = n(199510),
    M = n.n(Q),
    D = n(792620),
    k = n(105292),
    R = n(977416),
    U = n(620954),
    V = n(814793),
    z = n(753386),
    G = n(448967),
    $ = n(190107),
    H = n(652215),
    F = n(216934);
async function Y(e) {
    try {
        let t = (0, _.br)(e);
        if (null == t || t.type !== A.I.INVITE) return !1;
        let n = S.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await y.Ay.resolveInvite(t.code, "Markdown Link");
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
async function B(e) {
    try {
        if (T.A.isDiscordUrl(e)) return !0;
        return await Y(e);
    } catch (e) {
        return !1;
    }
}
function K(e) {
    let { quest: t, sourceQuestContent: o } = e;
    (0, r.openModalLazy)(async () => {
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
            n.e("915170"),
            n.e("64769"),
            n.e("992956"),
            n.e("880150"),
            n.e("490743"),
            n.e("457428"),
            n.e("7452"),
            n.e("205035"),
            n.e("529787"),
            n.e("60002"),
            n.e("189423"),
            n.e("415695"),
            n.e("828881"),
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
            n.e("398929"),
            n.e("377989"),
            n.e("102075"),
            n.e("828178"),
            n.e("505928"),
            n.e("752657"),
            n.e("747973"),
            n.e("395919"),
            n.e("885251"),
            n.e("953840"),
            n.e("70690"),
            n.e("587618"),
            n.e("828598"),
            n.e("645499"),
            n.e("726391"),
            n.e("615643"),
            n.e("454048"),
            n.e("300699"),
            n.e("349619"),
            n.e("599666"),
            n.e("543039"),
            n.e("398125"),
            n.e("221825"),
            n.e("930758"),
            n.e("244560"),
            n.e("901555"),
            n.e("253729"),
            n.e("593600"),
            n.e("827708"),
            n.e("266900"),
            n.e("707826"),
            n.e("948804"),
            n.e("205596"),
            n.e("611523"),
            n.e("199999"),
            n.e("828111"),
            n.e("890027"),
            n.e("809915"),
            n.e("851130"),
            n.e("672727"),
            n.e("417286"),
            n.e("812310"),
            n.e("534822"),
            n.e("361626"),
            n.e("646506"),
            n.e("445124"),
            n.e("445421"),
            n.e("832823"),
            n.e("761935"),
            n.e("511527"),
            n.e("763070"),
            n.e("536200"),
            n.e("776195"),
            n.e("87306"),
            n.e("502018"),
            n.e("955184"),
            n.e("249366"),
            n.e("969354"),
            n.e("728633"),
            n.e("628439"),
            n.e("756148"),
            n.e("570506"),
            n.e("539620"),
            n.e("225990"),
            n.e("183534"),
            n.e("248329"),
            n.e("398829"),
            n.e("165595"),
            n.e("401590"),
            n.e("498215"),
            n.e("27773"),
            n.e("631608"),
            n.e("123353"),
            n.e("231588"),
            n.e("593176"),
            n.e("621624"),
            n.e("133902"),
            n.e("76705"),
            n.e("913823"),
            n.e("401827"),
            n.e("836545"),
            n.e("187110"),
            n.e("489949"),
            n.e("292583"),
            n.e("858514"),
            n.e("344265"),
            n.e("637721"),
            n.e("170653"),
            n.e("716092"),
            n.e("784041"),
            n.e("466322"),
            n.e("836863"),
            n.e("238412"),
            n.e("454625"),
            n.e("231578"),
            n.e("288705"),
            n.e("661008"),
            n.e("35485"),
            n.e("837687"),
            n.e("653849"),
            n.e("324761"),
            n.e("159957"),
            n.e("577894"),
            n.e("932606"),
            n.e("39038"),
            n.e("806295"),
            n.e("285350"),
            n.e("271217"),
            n.e("993616"),
            n.e("212466"),
            n.e("307865"),
            n.e("536037"),
            n.e("769539"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: o });
    });
}
function W(e) {
    let { quest: t, sourceQuestContent: o } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("102075"),
            n.e("828178"),
            n.e("505928"),
            n.e("885251"),
            n.e("953840"),
            n.e("115308"),
            n.e("388250"),
            n.e("782208"),
            n.e("454048"),
            n.e("969354"),
            n.e("913823"),
            n.e("292583"),
            n.e("466322"),
            n.e("836863"),
            n.e("454625"),
            n.e("35485"),
            n.e("363618"),
            n.e("653849"),
            n.e("324761"),
            n.e("577894"),
            n.e("932606"),
            n.e("39038"),
            n.e("672877"),
            n.e("806295"),
            n.e("285350"),
            n.e("689393"),
            n.e("993616"),
            n.e("506286"),
            n.e("212466"),
            n.e("394704"),
            n.e("873551"),
            n.e("334853"),
        ]).then(n.bind(n, 205604));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: o });
    });
}
function X(e, t, o) {
    (0, r.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("505928"),
            n.e("752657"),
            n.e("747973"),
            n.e("395919"),
            n.e("885251"),
            n.e("953840"),
            n.e("454048"),
            n.e("969354"),
            n.e("187110"),
            n.e("836863"),
            n.e("653849"),
            n.e("324761"),
            n.e("577894"),
            n.e("932606"),
            n.e("39038"),
            n.e("271217"),
            n.e("993616"),
            n.e("212466"),
            n.e("307865"),
            n.e("826747"),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, location: t, sourceQuestContent: o });
    });
}
function Z(e, t, o) {
    (0, r.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("171206"),
            n.e("395919"),
            n.e("505928"),
            n.e("885251"),
            n.e("953840"),
            n.e("454048"),
            n.e("969354"),
            n.e("942724"),
            n.e("836863"),
            n.e("653849"),
            n.e("324761"),
            n.e("753589"),
            n.e("577894"),
            n.e("932606"),
            n.e("39038"),
            n.e("271217"),
            n.e("993616"),
            n.e("888205"),
            n.e("254103"),
            n.e("212466"),
            n.e("307865"),
            n.e("33546"),
            n.e("446098"),
        ]).then(n.bind(n, 589161));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: o, location: t });
    });
}
function J(e, t, o, a) {
    (0, r.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("621820"),
            n.e("395919"),
            n.e("505928"),
            n.e("885251"),
            n.e("953840"),
            n.e("454048"),
            n.e("300699"),
            n.e("349619"),
            n.e("599666"),
            n.e("398125"),
            n.e("221825"),
            n.e("930758"),
            n.e("244560"),
            n.e("593600"),
            n.e("707826"),
            n.e("534822"),
            n.e("536200"),
            n.e("776195"),
            n.e("87306"),
            n.e("969354"),
            n.e("836863"),
            n.e("77473"),
            n.e("653849"),
            n.e("324761"),
            n.e("577894"),
            n.e("932606"),
            n.e("39038"),
            n.e("36877"),
            n.e("627323"),
            n.e("271217"),
            n.e("993616"),
            n.e("212466"),
            n.e("307865"),
            n.e("190948"),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: o, location: t, preview: a });
    });
}
function ee(e, t, o) {
    (0, r.openModalLazy)(async () => {
        let { default: a } = await Promise.all([n.e("653849"), n.e("981169")]).then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(a, { ...n, quest: e, location: t, sourceQuestContent: o });
    });
}
function et() {
    (0, r.openModalLazy)(async () => {
        let { default: e } = await n.e("856086").then(n.bind(n, 700085));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function en(e, t, o) {
    let { ctaContent: s } = t;
    ((0, C.r)({
        type: g.F.CLICK_INTERNAL,
        adCreativeType: a.p.QUEST,
        adCreativeId: e.id,
        questContentCTA: s,
        surfaceId: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
    }),
        (0, r.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([
                    n.e("422750"),
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
        ));
}
function ei(e) {
    let t,
        n = (0, O.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
        ((t = [
            {
                key: "NOT_INTERESTED",
                text: (0, D.vv)(e)
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
            choices: M()(t.slice(0, 4)).concat(t[4]),
        });
    (n.log(`Showing survey ${i.id}`), (0, G.m)({ questId: e.id, survey: i }));
}
function eo() {
    return Promise.all([
        n.e("245420"),
        n.e("216870"),
        n.e("651585"),
        n.e("955628"),
        n.e("505928"),
        n.e("752657"),
        n.e("747973"),
        n.e("814306"),
        n.e("920955"),
        n.e("953840"),
        n.e("974119"),
        n.e("392868"),
        n.e("454048"),
        n.e("809915"),
        n.e("969354"),
        n.e("621624"),
        n.e("643612"),
        n.e("398793"),
        n.e("187110"),
        n.e("784103"),
        n.e("592731"),
        n.e("53374"),
        n.e("482815"),
        n.e("256616"),
        n.e("170653"),
        n.e("817852"),
        n.e("133179"),
        n.e("614784"),
        n.e("334127"),
        n.e("344502"),
        n.e("912773"),
        n.e("710638"),
        n.e("613867"),
        n.e("434691"),
        n.e("653849"),
        n.e("324761"),
        n.e("577894"),
        n.e("932606"),
        n.e("39038"),
        n.e("285350"),
        n.e("24914"),
        n.e("655602"),
        n.e("825717"),
        n.e("258427"),
        n.e("263408"),
        n.e("77375"),
        n.e("182045"),
        n.e("479907"),
        n.e("119580"),
    ]).then(n.bind(n, 834135));
}
function ea(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: a,
        sourceQuestContentCTA: s,
        autoplay: l = !0,
        skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, D.K$)(t)) return void ec(t);
    if (L.A.isQuestAccessSuspended && t.userStatus?.completedAt == null) return void et();
    let d = (0, o.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, R.Ic)(t)) {
        L.A.isEnrolling(t.id) ||
            (0, N.Oy)(t.id, { questContent: n, questContentCTA: q.Cy.ACCEPT_QUEST, sourceQuestContent: a });
        let e = b.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, N.QG)(t.id),
            v.default.track(H.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, q.jO)(a),
                source_quest_content_cta: s,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: m, muted: f, volume: p, captionEnabled: E } = b.Ay.getState(),
        { enabled: y, variant: C } = P.Ig.getConfig({ location: $.rE.VIDEO_MODAL }),
        g = null != (0, j.tW)(t, j.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    f &&
        y &&
        (C === P.sy.AUTO_ENABLE_CAPTIONS && g && !E
            ? m(!0)
            : C === P.sy.AUTO_UNMUTE && (b.Ay.getState().setMuted(!1), 0 === p && b.Ay.getState().setVolume(0.3)));
    let A = performance.now();
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await eo();
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
            modalKey: (0, z.cZ)(t.id),
            backdropStyle: u.F.IMMERSIVE,
            onCloseCallback: () => (0, z.vm)({ questId: t.id, sourceQuestContent: a, videoSessionId: d }),
        },
    );
}
function es(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = I.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    (null != n &&
        v.default.track(H.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        w.A.launch(t, (t) => {
            t || (0, h.bG)({ pathname: H.BVt.QUEST_HOME, hash: e });
        }));
}
function el(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = I.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    (null != n &&
        v.default.track(H.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        w.A.launch(t, (t) => {
            t || (0, h.bG)({ pathname: H.BVt.QUEST_HOME, hash: e });
        }));
}
function er(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = I.default.getFingerprint(),
                o = (0, s.I_)(),
                a = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, s.Ay)(a, { utmSource: "quest-home-preview", fingerprint: i, attemptId: o });
        })(e),
        n = (0, s.X7)(t);
    (null != n &&
        v.default.track(H.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        w.A.launch(t, (e) => {
            e || (0, h.bG)({ pathname: H.BVt.QUEST_HOME });
        }));
}
function eu(e, t, o) {
    (0, r.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("10058"),
            n.e("974969"),
            n.e("454048"),
            n.e("217951"),
            n.e("199999"),
            n.e("165595"),
            n.e("133902"),
            n.e("486792"),
            n.e("831145"),
            n.e("662355"),
            n.e("209518"),
            n.e("59413"),
            n.e("724637"),
            n.e("883922"),
            n.e("899513"),
            n.e("862101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(a, { ...n, multiplier: e, orbMultiplierEligibility: t, ...o });
    });
}
function ec(e) {
    (0, r.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("262546"),
            n.e("241797"),
            n.e("595429"),
            n.e("338439"),
            n.e("748370"),
            n.e("746485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function ed(e, t) {
    let { type: n } = await (0, N.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case N.WM.SUCCESS:
            ea({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case N.WM.UNKNOWN_ERROR:
            E.A.show({ title: k.intl.string(k.t.R0RpRX), body: k.intl.string(k.t.OXD41D) });
        case N.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function em(e) {
    if ((0, V.vA)(e)) return e.config.features.includes($.Li.CLOUD_GAMING_ACTIVITY) ? c.h : d.GameControllerIcon;
}
function ef(e) {
    let t = (0, U.bg)(e);
    return (0, D.K$)(e)
        ? { icon: m.u }
        : t.length > 0 && !(0, D.I6)(e)
          ? { icon: f.a, iconPosition: "end" }
          : (0, D.no)(e)
            ? { icon: p.I, iconPosition: "end" }
            : { icon: void 0, iconPosition: void 0 };
}
