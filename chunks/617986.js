"use strict";
n.d(t, {
    QA: () => er,
    Df: () => Z,
    rx: () => K,
    z6: () => et,
    cf: () => q,
    ii: () => z,
    zg: () => ea,
    hJ: () => X,
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
    C = n(877062),
    N = n(340124),
    v = n(859703),
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
    j = n(652215),
    H = n(488995);
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
            n.e("82314"),
            n.e("66434"),
            n.e("74414"),
            n.e("4394"),
            n.e("85566"),
            n.e("79070"),
            n.e("4207"),
            n.e("16192"),
            n.e("71413"),
            n.e("59914"),
            n.e("82655"),
            n.e("76821"),
            n.e("67687"),
            n.e("55642"),
            n.e("97271"),
            n.e("67865"),
            n.e("79989"),
            n.e("50842"),
            n.e("63867"),
            n.e("56405"),
            n.e("22513"),
            n.e("75120"),
            n.e("25508"),
            n.e("22256"),
            n.e("87261"),
            n.e("63160"),
            n.e("45554"),
            n.e("36761"),
            n.e("69292"),
            n.e("29877"),
            n.e("32993"),
            n.e("98488"),
            n.e("31591"),
            n.e("9399"),
            n.e("4704"),
            n.e("85497"),
            n.e("62203"),
            n.e("91024"),
            n.e("33865"),
            n.e("42309"),
            n.e("29351"),
            n.e("43233"),
            n.e("85184"),
            n.e("22796"),
            n.e("4276"),
            n.e("50180"),
            n.e("37497"),
            n.e("60193"),
            n.e("53684"),
            n.e("89050"),
            n.e("88610"),
            n.e("33087"),
            n.e("4189"),
            n.e("50568"),
            n.e("49623"),
            n.e("6026"),
            n.e("1009"),
            n.e("90862"),
            n.e("90266"),
            n.e("66633"),
            n.e("78014"),
            n.e("16918"),
            n.e("33730"),
            n.e("91483"),
            n.e("83893"),
            n.e("70278"),
            n.e("16860"),
            n.e("56359"),
            n.e("63051"),
            n.e("99501"),
            n.e("59494"),
            n.e("33287"),
            n.e("19709"),
            n.e("67458"),
            n.e("58427"),
            n.e("20642"),
            n.e("29161"),
            n.e("98180"),
            n.e("41625"),
            n.e("7959"),
            n.e("60717"),
            n.e("55552"),
            n.e("85484"),
            n.e("2672"),
            n.e("31135"),
            n.e("55929"),
            n.e("26128"),
            n.e("11262"),
            n.e("54483"),
            n.e("33460"),
            n.e("41686"),
            n.e("25677"),
            n.e("85411"),
            n.e("88804"),
            n.e("13233"),
            n.e("89001"),
            n.e("54558"),
            n.e("55990"),
            n.e("73679"),
            n.e("35538"),
            n.e("73178"),
            n.e("61274"),
            n.e("26913"),
            n.e("41229"),
            n.e("31592"),
            n.e("28339"),
            n.e("97638"),
            n.e("22995"),
            n.e("70141"),
            n.e("1055"),
            n.e("23036"),
            n.e("3951"),
            n.e("70736"),
            n.e("39865"),
            n.e("50870"),
            n.e("43608"),
            n.e("29944"),
            n.e("59731"),
            n.e("40690"),
            n.e("98275"),
            n.e("72651"),
            n.e("29363"),
            n.e("88016"),
            n.e("38886"),
            n.e("84133"),
            n.e("30240"),
            n.e("510"),
            n.e("57447"),
            n.e("27282"),
            n.e("7339"),
            n.e("90241"),
            n.e("37271"),
            n.e("49993"),
            n.e("65813"),
            n.e("8037"),
            n.e("50748"),
            n.e("1844"),
            n.e("57016"),
            n.e("45826"),
            n.e("9396"),
            n.e("53075"),
            n.e("26564"),
            n.e("77529"),
            n.e("10061"),
            n.e("57766"),
            n.e("91552"),
            n.e("69213"),
            n.e("86650"),
            n.e("52196"),
            n.e("85899"),
            n.e("61322"),
            n.e("43031"),
            n.e("22656"),
            n.e("25964"),
            n.e("28379"),
            n.e("41737"),
            n.e("92330"),
            n.e("53233"),
            n.e("96901"),
            n.e("71796"),
            n.e("33600"),
            n.e("49645"),
            n.e("25339"),
            n.e("84454"),
            n.e("62426"),
            n.e("1887"),
            n.e("39995"),
            n.e("25568"),
            n.e("29272"),
            n.e("97391"),
            n.e("67332"),
            n.e("57114"),
            n.e("90059"),
            n.e("53552"),
            n.e("58127"),
            n.e("816"),
            n.e("43683"),
            n.e("59303"),
            n.e("31610"),
            n.e("59511"),
            n.e("8736"),
            n.e("71576"),
            n.e("43234"),
            n.e("91680"),
            n.e("57036"),
            n.e("57174"),
            n.e("44649"),
            n.e("207"),
            n.e("24199"),
            n.e("54048"),
            n.e("88941"),
            n.e("61379"),
            n.e("25693"),
            n.e("32606"),
            n.e("28154"),
            n.e("4369"),
            n.e("34236"),
            n.e("11523"),
            n.e("10004"),
            n.e("77473"),
            n.e("53930"),
            n.e("23353"),
            n.e("18943"),
            n.e("7167"),
            n.e("25279"),
            n.e("87306"),
            n.e("92789"),
            n.e("57598"),
            n.e("84967"),
            n.e("31390"),
            n.e("37687"),
            n.e("41043"),
            n.e("43039"),
            n.e("26780"),
            n.e("44265"),
            n.e("48804"),
            n.e("8304"),
            n.e("84103"),
            n.e("17225"),
            n.e("62875"),
            n.e("30920"),
            n.e("63095"),
            n.e("70653"),
            n.e("52266"),
            n.e("53039"),
            n.e("96123"),
            n.e("8892"),
            n.e("92583"),
            n.e("39810"),
            n.e("64615"),
            n.e("31825"),
            n.e("36320"),
            n.e("97526"),
            n.e("79525"),
            n.e("82069"),
            n.e("75134"),
            n.e("1462"),
            n.e("99666"),
            n.e("55184"),
            n.e("74926"),
            n.e("28866"),
            n.e("50015"),
            n.e("72442"),
            n.e("54282"),
            n.e("21574"),
            n.e("90889"),
            n.e("31445"),
            n.e("62931"),
            n.e("18181"),
            n.e("59880"),
            n.e("14805"),
            n.e("73547"),
            n.e("24761"),
            n.e("99593"),
            n.e("60658"),
            n.e("55314"),
            n.e("89094"),
            n.e("6338"),
            n.e("47834"),
            n.e("47555"),
            n.e("18573"),
            n.e("29177"),
            n.e("21435"),
            n.e("61935"),
            n.e("88990"),
            n.e("21856"),
            n.e("58038"),
            n.e("32551"),
            n.e("62680"),
            n.e("26171"),
            n.e("43426"),
            n.e("96443"),
            n.e("65743"),
            n.e("87079"),
            n.e("88559"),
            n.e("21132"),
            n.e("21825"),
            n.e("25637"),
            n.e("60177"),
            n.e("39665"),
            n.e("23532"),
            n.e("18441"),
            n.e("31644"),
            n.e("15559"),
            n.e("86949"),
            n.e("33902"),
            n.e("53614"),
            n.e("52574"),
            n.e("18401"),
            n.e("31145"),
            n.e("27773"),
            n.e("63618"),
            n.e("99999"),
            n.e("53374"),
            n.e("93158"),
            n.e("56313"),
            n.e("71577"),
            n.e("52073"),
            n.e("36863"),
            n.e("9915"),
            n.e("34691"),
            n.e("92731"),
            n.e("28152"),
            n.e("36126"),
            n.e("7962"),
            n.e("64325"),
            n.e("1555"),
            n.e("32823"),
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
            n.e("31591"),
            n.e("9399"),
            n.e("8736"),
            n.e("4704"),
            n.e("22989"),
            n.e("31544"),
            n.e("1785"),
            n.e("54048"),
            n.e("25693"),
            n.e("32606"),
            n.e("28154"),
            n.e("4369"),
            n.e("84967"),
            n.e("62875"),
            n.e("92583"),
            n.e("39810"),
            n.e("24761"),
            n.e("63618"),
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
function z(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, o.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("31591"),
            n.e("9399"),
            n.e("8736"),
            n.e("4704"),
            n.e("33287"),
            n.e("22989"),
            n.e("1656"),
            n.e("54048"),
            n.e("88941"),
            n.e("25693"),
            n.e("32606"),
            n.e("28154"),
            n.e("4369"),
            n.e("84967"),
            n.e("62875"),
            n.e("92583"),
            n.e("39810"),
            n.e("14805"),
            n.e("24761"),
            n.e("63618"),
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
function q(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("9399"),
            n.e("59511"),
            n.e("8736"),
            n.e("4704"),
            n.e("71576"),
            n.e("27050"),
            n.e("54048"),
            n.e("25693"),
            n.e("32606"),
            n.e("28154"),
            n.e("4369"),
            n.e("53930"),
            n.e("24761"),
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
function Z(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("8641"),
            n.e("59511"),
            n.e("9399"),
            n.e("8736"),
            n.e("4704"),
            n.e("71576"),
            n.e("89693"),
            n.e("54048"),
            n.e("25693"),
            n.e("32606"),
            n.e("28154"),
            n.e("4369"),
            n.e("52511"),
            n.e("97526"),
            n.e("24761"),
            n.e("23532"),
            n.e("42724"),
            n.e("36863"),
            n.e("967"),
            n.e("71217"),
            n.e("54103"),
            n.e("77298"),
            n.e("12466"),
            n.e("7865"),
            n.e("33546"),
            n.e("50332"),
        ]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: r, location: t });
    });
}
function X(e, t, r, s) {
    (0, o.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("62203"),
            n.e("59511"),
            n.e("9399"),
            n.e("8736"),
            n.e("4704"),
            n.e("71576"),
            n.e("63549"),
            n.e("54048"),
            n.e("25693"),
            n.e("32606"),
            n.e("28154"),
            n.e("4369"),
            n.e("77473"),
            n.e("87306"),
            n.e("41043"),
            n.e("8892"),
            n.e("99666"),
            n.e("24761"),
            n.e("62680"),
            n.e("21132"),
            n.e("21825"),
            n.e("18441"),
            n.e("86949"),
            n.e("36863"),
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
        let { default: s } = await Promise.all([n.e("28154"), n.e("81169")]).then(n.bind(n, 124232));
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
    i && E.A.setState({ selectedTab: H.GlobalDiscoveryTab.QUESTS }),
        (0, g.default)(),
        (0, m.pX)((i ? j.BVt.QUEST_HOME_DEPRECATED : j.BVt.QUEST_HOME) + r);
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
        n.e("28379"),
        n.e("9399"),
        n.e("22448"),
        n.e("4704"),
        n.e("83485"),
        n.e("58530"),
        n.e("88147"),
        n.e("57174"),
        n.e("92868"),
        n.e("54048"),
        n.e("25693"),
        n.e("32606"),
        n.e("28154"),
        n.e("4369"),
        n.e("53930"),
        n.e("84103"),
        n.e("30920"),
        n.e("70653"),
        n.e("52266"),
        n.e("24761"),
        n.e("53374"),
        n.e("9915"),
        n.e("34691"),
        n.e("92731"),
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
        v.A.isEnrolling(t.id) ||
            (0, N.Oy)(t.id, { questContent: n, questContentCTA: L.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = R.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, N.QG)(t.id),
            S.default.track(j.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
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
        S.default.track(j.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        C.A.launch(t, (t) => {
            t || (0, m.bG)({ pathname: j.BVt.QUEST_HOME, hash: e });
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
        S.default.track(j.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        C.A.launch(t, (t) => {
            t || (0, m.bG)({ pathname: j.BVt.QUEST_HOME, hash: e });
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
        S.default.track(j.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        C.A.launch(t, (e) => {
            e || (0, m.bG)({ pathname: j.BVt.QUEST_HOME });
        });
}
function eo(e, t) {
    (0, o.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("65857"),
            n.e("16328"),
            n.e("54048"),
            n.e("8304"),
            n.e("33902"),
            n.e("31145"),
            n.e("99999"),
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
            n.e("40859"),
            n.e("95429"),
            n.e("88905"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function eu(e, t) {
    let { type: n } = await (0, N.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case N.WM.SUCCESS:
            ei({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case N.WM.CAPTCHA_FAILED:
            _.A.show({ title: k.intl.string(k.t["/CidxO"]), body: k.intl.string(k.t.HQdHg6) });
            break;
        case N.WM.UNKNOWN_ERROR:
            _.A.show({ title: k.intl.string(k.t.R0RpRX), body: k.intl.string(k.t.OXD41D) });
        case N.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ec(e) {
    if ((0, G.vA)(e)) return e.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY) ? u.h : c._;
}
function ed(e) {
    if ((0, x.K$)(e)) return d.u;
}
