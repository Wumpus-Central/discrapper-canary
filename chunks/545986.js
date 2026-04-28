n.d(t, {
    Df: () => K,
    Fy: () => ei,
    Oz: () => er,
    QA: () => ee,
    Zc: () => q,
    cf: () => x,
    d5: () => J,
    e0: () => ea,
    f7: () => Y,
    gC: () => en,
    hJ: () => $,
    l9: () => Z,
    m6: () => Q,
    navigateToQuestHome: () => X,
    q$: () => et,
    rx: () => W,
    z6: () => z,
});
var i = n(627968);
n(64700);
var a = n(132500),
    r = n(742821),
    _ = n(80703);
n(876230);
var s = n(192308),
    l = n(892491),
    o = n(414499),
    E = n(687966),
    d = n(157559),
    c = n(376728),
    u = n(167189),
    I = n(833291),
    T = n(726845),
    A = n(976860),
    S = n(779733),
    N = n(495544),
    O = n(299091),
    f = n(711014),
    R = n(954571),
    C = n(998218),
    D = n(877062),
    L = n(829219),
    p = n(859703),
    m = n(405670),
    h = n(245853),
    g = n(859387),
    b = n(561844),
    U = n(590202),
    P = n(851936),
    M = n(437343),
    G = n(710969),
    y = n(792620),
    v = n(814793),
    B = n(753386),
    w = n(448967),
    F = n(654487),
    V = n(652215),
    H = n(488995),
    k = n(985018);
async function j(e) {
    try {
        let t = (0, I.br)(e);
        if (null == t || t.type !== u.I.INVITE) return !1;
        let n = O.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await c.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = f.Ay.getFlattenedGuildIds(),
            a = n?.guild?.id;
        return null != a && i.includes(a);
    } catch (e) {
        return !1;
    }
}
async function Y(e) {
    try {
        if (C.A.isDiscordUrl(e)) return !0;
        return await j(e);
    } catch (e) {
        return !1;
    }
}
function W(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("48486"),
            n.e("47042"),
            n.e("93816"),
            n.e("25385"),
            n.e("61748"),
            n.e("92165"),
            n.e("28592"),
            n.e("19586"),
            n.e("18125"),
            n.e("62924"),
            n.e("89092"),
            n.e("13498"),
            n.e("77598"),
            n.e("57568"),
            n.e("42021"),
            n.e("75903"),
            n.e("58435"),
            n.e("73432"),
            n.e("19364"),
            n.e("80813"),
            n.e("86483"),
            n.e("31632"),
            n.e("86821"),
            n.e("25568"),
            n.e("32260"),
            n.e("40153"),
            n.e("59511"),
            n.e("24199"),
            n.e("57036"),
            n.e("88394"),
            n.e("15380"),
            n.e("207"),
            n.e("88941"),
            n.e("61379"),
            n.e("62680"),
            n.e("43039"),
            n.e("98125"),
            n.e("18441"),
            n.e("21825"),
            n.e("69354"),
            n.e("28154"),
            n.e("48804"),
            n.e("88077"),
            n.e("80527"),
            n.e("85502"),
            n.e("18401"),
            n.e("13681"),
            n.e("53729"),
            n.e("21690"),
            n.e("32551"),
            n.e("31644"),
            n.e("52367"),
            n.e("23353"),
            n.e("36561"),
            n.e("86949"),
            n.e("50015"),
            n.e("77998"),
            n.e("31145"),
            n.e("11523"),
            n.e("66900"),
            n.e("44695"),
            n.e("10004"),
            n.e("55314"),
            n.e("29177"),
            n.e("44376"),
            n.e("9915"),
            n.e("83429"),
            n.e("96905"),
            n.e("33902"),
            n.e("70653"),
            n.e("31825"),
            n.e("54527"),
            n.e("72535"),
            n.e("76195"),
            n.e("51485"),
            n.e("76170"),
            n.e("1177"),
            n.e("26490"),
            n.e("32817"),
            n.e("51243"),
            n.e("18943"),
            n.e("89094"),
            n.e("84103"),
            n.e("99999"),
            n.e("5501"),
            n.e("96123"),
            n.e("27168"),
            n.e("39038"),
            n.e("36320"),
            n.e("77245"),
            n.e("31549"),
            n.e("20320"),
            n.e("43919"),
            n.e("31390"),
            n.e("57906"),
            n.e("37622"),
            n.e("22584"),
            n.e("45421"),
            n.e("44265"),
            n.e("99141"),
            n.e("21435"),
            n.e("98793"),
            n.e("92731"),
            n.e("25990"),
            n.e("33584"),
            n.e("63095"),
            n.e("68647"),
            n.e("67657"),
            n.e("64615"),
            n.e("88017"),
            n.e("87225"),
            n.e("12373"),
            n.e("75134"),
            n.e("84967"),
            n.e("23216"),
            n.e("30770"),
            n.e("56212"),
            n.e("47017"),
            n.e("36498"),
            n.e("3458"),
            n.e("62827"),
            n.e("1555"),
            n.e("73547"),
            n.e("32823"),
            n.e("34691"),
            n.e("99593"),
            n.e("61935"),
            n.e("62168"),
            n.e("55602"),
            n.e("52463"),
            n.e("13499"),
            n.e("993"),
            n.e("91381"),
            n.e("93158"),
            n.e("10034"),
            n.e("72832"),
            n.e("95183"),
            n.e("73500"),
            n.e("14879"),
            n.e("35403"),
            n.e("53526"),
            n.e("17286"),
            n.e("34472"),
            n.e("11527"),
            n.e("45723"),
            n.e("29375"),
            n.e("6223"),
            n.e("48778"),
            n.e("5895"),
            n.e("38835"),
            n.e("90889"),
            n.e("2537"),
            n.e("78777"),
            n.e("62355"),
            n.e("93708"),
            n.e("71482"),
            n.e("72727"),
            n.e("36126"),
            n.e("80565"),
            n.e("58765"),
            n.e("78707"),
            n.e("19452"),
            n.e("36863"),
            n.e("65881"),
            n.e("10745"),
            n.e("84113"),
            n.e("51391"),
            n.e("91942"),
            n.e("89465"),
            n.e("51130"),
            n.e("1827"),
            n.e("64480"),
            n.e("78651"),
            n.e("37687"),
            n.e("46568"),
            n.e("39406"),
            n.e("59957"),
            n.e("967"),
            n.e("71217"),
            n.e("33249"),
            n.e("19235"),
            n.e("36037"),
            n.e("69539"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: a });
    });
}
function x(e, t, a) {
    (0, s.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("57568"),
            n.e("59511"),
            n.e("69354"),
            n.e("28154"),
            n.e("85502"),
            n.e("36561"),
            n.e("31145"),
            n.e("96905"),
            n.e("39038"),
            n.e("31549"),
            n.e("36498"),
            n.e("36863"),
            n.e("967"),
            n.e("71217"),
            n.e("33249"),
            n.e("19235"),
            n.e("26747"),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(r, { ...n, initialQuest: e, location: t, sourceQuestContent: a });
    });
}
function K(e, t, a) {
    (0, s.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("8641"),
            n.e("59511"),
            n.e("57568"),
            n.e("34303"),
            n.e("94723"),
            n.e("69354"),
            n.e("28154"),
            n.e("85502"),
            n.e("36561"),
            n.e("31145"),
            n.e("39038"),
            n.e("42724"),
            n.e("36498"),
            n.e("36863"),
            n.e("967"),
            n.e("71217"),
            n.e("52511"),
            n.e("54103"),
            n.e("33249"),
            n.e("77298"),
            n.e("19235"),
            n.e("33546"),
            n.e("50332"),
        ]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(r, { ...n, initialQuest: e, sourceQuestContent: a, location: t });
    });
}
function $(e, t, a, r) {
    (0, s.openModalLazy)(async () => {
        let { default: _ } = await Promise.all([
            n.e("59511"),
            n.e("57568"),
            n.e("63549"),
            n.e("62680"),
            n.e("98125"),
            n.e("18441"),
            n.e("21825"),
            n.e("69354"),
            n.e("28154"),
            n.e("80527"),
            n.e("85502"),
            n.e("36561"),
            n.e("86949"),
            n.e("31145"),
            n.e("83429"),
            n.e("76195"),
            n.e("39038"),
            n.e("22584"),
            n.e("36498"),
            n.e("14879"),
            n.e("36863"),
            n.e("77473"),
            n.e("27323"),
            n.e("36877"),
            n.e("967"),
            n.e("71217"),
            n.e("33249"),
            n.e("19235"),
            n.e("90948"),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(_, { ...n, initialQuest: e, sourceQuestContent: a, location: t, preview: r });
    });
}
function Q(e, t, a) {
    (0, s.openModalLazy)(async () => {
        let { default: r } = await Promise.all([n.e("28154"), n.e("81169")]).then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(r, { ...n, quest: e, location: t, sourceQuestContent: a });
    });
}
function q(e, t) {
    (0, b.Y5)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, s.openModalLazy)(async () => {
            let { default: a } = await Promise.all([n.e("99547"), n.e("78050"), n.e("132")]).then(n.bind(n, 348559));
            return (n) => (0, i.jsx)(a, { ...n, questContent: t.content, quest: e });
        });
}
function X(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: i = !1 } = e;
    (0, v.jQ)({ questId: n, fromContent: t });
    let a = null != n ? `#${n}` : "";
    i && T.A.setState({ selectedTab: H.GlobalDiscoveryTab.QUESTS }),
        (0, S.default)(),
        (0, A.pX)((i ? V.BVt.QUEST_HOME_DEPRECATED : V.BVt.QUEST_HOME) + a);
}
function z(e) {
    let t = (0, P.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let n = (0, M.A)(e);
    t.log(`Showing survey ${n.id}`), (0, w.m)({ questId: e.id, survey: n });
}
function Z() {
    return Promise.all([
        n.e("93816"),
        n.e("19364"),
        n.e("57568"),
        n.e("22448"),
        n.e("73432"),
        n.e("57174"),
        n.e("92868"),
        n.e("69354"),
        n.e("28154"),
        n.e("85502"),
        n.e("36561"),
        n.e("31145"),
        n.e("9915"),
        n.e("96905"),
        n.e("70653"),
        n.e("84103"),
        n.e("39038"),
        n.e("31549"),
        n.e("57906"),
        n.e("37622"),
        n.e("98793"),
        n.e("92731"),
        n.e("36498"),
        n.e("34691"),
        n.e("55602"),
        n.e("84971"),
        n.e("32326"),
        n.e("2412"),
        n.e("24689"),
        n.e("30920"),
        n.e("78010"),
        n.e("91652"),
        n.e("25717"),
        n.e("55458"),
        n.e("63408"),
        n.e("77375"),
        n.e("97199"),
    ]).then(n.bind(n, 834135));
}
function J(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: r,
        sourceQuestContentCTA: _,
        autoplay: o = !0,
        skipEnrollmentCheck: E = !1,
    } = e;
    if ((0, y.K$)(t)) return void ei(t);
    let d = (0, a.A)();
    if (!E && t.userStatus?.enrolledAt == null && !(0, G.Ic)(t)) {
        p.A.isEnrolling(t.id) ||
            (0, L.Oy)(t.id, { questContent: n, questContentCTA: U.Cy.ACCEPT_QUEST, sourceQuestContent: r });
        let e = m.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, L.QG)(t.id),
            R.default.track(V.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, U.jO)(r),
                source_quest_content_cta: _,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: c, muted: u, volume: I, captionEnabled: T } = m.Ay.getState(),
        { enabled: A, variant: S } = h.Ig.getConfig({ location: F.rE.VIDEO_MODAL }),
        N = null != (0, g.tW)(t, g.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    u &&
        A &&
        (S === h.sy.AUTO_ENABLE_CAPTIONS && N && !T
            ? c(!0)
            : S === h.sy.AUTO_UNMUTE && (m.Ay.getState().setMuted(!1), 0 === I && m.Ay.getState().setVolume(0.3)));
    let O = performance.now();
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Z();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: O,
                    questId: t.id,
                    autoplay: o,
                    videoSessionId: d,
                    sourceQuestContent: r,
                });
        },
        {
            modalKey: (0, B.cZ)(t.id),
            backdropStyle: l.F.IMMERSIVE,
            onCloseCallback: () => (0, B.vm)({ questId: t.id, sourceQuestContent: r, videoSessionId: d }),
        },
    );
}
function ee(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = N.default.getFingerprint(),
                    n = (0, r.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, r.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, r.X7)(t);
    null != n &&
        R.default.track(V.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, _.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        D.A.launch(t, (t) => {
            t || (0, A.bG)({ pathname: V.BVt.QUEST_HOME, hash: e });
        });
}
function et(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = N.default.getFingerprint(),
                    n = (0, r.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, r.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, r.X7)(t);
    null != n &&
        R.default.track(V.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, _.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        D.A.launch(t, (t) => {
            t || (0, A.bG)({ pathname: V.BVt.QUEST_HOME, hash: e });
        });
}
function en(e, t) {
    (0, s.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("93816"),
            n.e("55498"),
            n.e("54531"),
            n.e("90765"),
            n.e("19364"),
            n.e("80813"),
            n.e("89206"),
            n.e("24199"),
            n.e("62680"),
            n.e("98125"),
            n.e("18441"),
            n.e("21825"),
            n.e("80527"),
            n.e("86949"),
            n.e("29177"),
            n.e("83429"),
            n.e("33902"),
            n.e("76195"),
            n.e("1177"),
            n.e("99999"),
            n.e("5501"),
            n.e("37622"),
            n.e("22584"),
            n.e("32823"),
            n.e("34691"),
            n.e("54975"),
            n.e("93158"),
            n.e("14879"),
            n.e("53526"),
            n.e("5895"),
            n.e("62355"),
            n.e("19452"),
            n.e("55577"),
            n.e("39286"),
            n.e("18024"),
            n.e("28152"),
            n.e("49520"),
            n.e("65826"),
            n.e("63618"),
            n.e("80007"),
            n.e("967"),
            n.e("71217"),
            n.e("47018"),
            n.e("31638"),
            n.e("64072"),
            n.e("65065"),
            n.e("84820"),
            n.e("10142"),
            n.e("44912"),
            n.e("18792"),
            n.e("36674"),
            n.e("61099"),
            n.e("4551"),
            n.e("96680"),
            n.e("63874"),
            n.e("68214"),
            n.e("98425"),
            n.e("33973"),
            n.e("48725"),
            n.e("91708"),
            n.e("57856"),
            n.e("99513"),
            n.e("62101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(a, { ...n, multiplier: e, eligibleToReceivePremiumRewards: t });
    });
}
function ei(e) {
    (0, s.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("93816"),
            n.e("75222"),
            n.e("95429"),
            n.e("29835"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function ea(e, t) {
    let { type: n } = await (0, L.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case L.WM.SUCCESS:
            J({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case L.WM.CAPTCHA_FAILED:
            d.A.show({ title: k.intl.string(k.t["/CidxO"]), body: k.intl.string(k.t.HQdHg6) });
            break;
        case L.WM.UNKNOWN_ERROR:
            d.A.show({ title: k.intl.string(k.t.R0RpRX), body: k.intl.string(k.t.OXD41D) });
        case L.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function er(e) {
    if ((0, v.vA)(e)) return e.config.features.includes(F.Li.CLOUD_GAMING_ACTIVITY) ? o.h : E._;
}
