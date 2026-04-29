n.d(t, {
    Df: () => K,
    Fy: () => ei,
    Oz: () => er,
    QA: () => ee,
    Zc: () => q,
    cf: () => W,
    d5: () => J,
    e0: () => ea,
    f7: () => j,
    gC: () => en,
    hJ: () => $,
    l9: () => X,
    m6: () => Z,
    navigateToQuestHome: () => Q,
    q$: () => et,
    rx: () => Y,
    z6: () => z,
});
var i = n(627968);
n(64700);
var a = n(132500),
    r = n(742821),
    s = n(80703);
n(876230);
var l = n(192308),
    o = n(892491),
    d = n(414499),
    c = n(687966),
    _ = n(157559),
    E = n(376728),
    u = n(167189),
    A = n(833291),
    I = n(726845),
    T = n(976860),
    h = n(779733),
    S = n(495544),
    N = n(299091),
    f = n(711014),
    p = n(954571),
    m = n(998218),
    O = n(877062),
    C = n(829219),
    R = n(859703),
    g = n(405670),
    L = n(245853),
    D = n(859387),
    b = n(561844),
    M = n(590202),
    P = n(851936),
    U = n(437343),
    v = n(710969),
    y = n(792620),
    G = n(814793),
    w = n(753386),
    x = n(448967),
    V = n(654487),
    B = n(652215),
    F = n(488995),
    k = n(985018);
async function H(e) {
    try {
        let t = (0, A.br)(e);
        if (null == t || t.type !== u.I.INVITE) return !1;
        let n = N.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await E.Ay.resolveInvite(t.code, "Markdown Link");
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
async function j(e) {
    try {
        if (m.A.isDiscordUrl(e)) return !0;
        return await H(e);
    } catch (e) {
        return !1;
    }
}
function Y(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("42105"),
            n.e("90261"),
            n.e("16933"),
            n.e("40841"),
            n.e("17546"),
            n.e("26032"),
            n.e("89753"),
            n.e("68495"),
            n.e("18125"),
            n.e("65420"),
            n.e("22513"),
            n.e("92931"),
            n.e("13498"),
            n.e("80848"),
            n.e("71543"),
            n.e("64150"),
            n.e("13520"),
            n.e("71934"),
            n.e("12721"),
            n.e("7053"),
            n.e("86483"),
            n.e("39995"),
            n.e("25568"),
            n.e("32260"),
            n.e("40153"),
            n.e("68953"),
            n.e("59511"),
            n.e("24199"),
            n.e("57036"),
            n.e("207"),
            n.e("88394"),
            n.e("15380"),
            n.e("88941"),
            n.e("61379"),
            n.e("62680"),
            n.e("98125"),
            n.e("43039"),
            n.e("21825"),
            n.e("69354"),
            n.e("28154"),
            n.e("18441"),
            n.e("48804"),
            n.e("88077"),
            n.e("80527"),
            n.e("85502"),
            n.e("18401"),
            n.e("13681"),
            n.e("53729"),
            n.e("32551"),
            n.e("52367"),
            n.e("23353"),
            n.e("36561"),
            n.e("86949"),
            n.e("50015"),
            n.e("47017"),
            n.e("22584"),
            n.e("77998"),
            n.e("31145"),
            n.e("11523"),
            n.e("66900"),
            n.e("1555"),
            n.e("44695"),
            n.e("21690"),
            n.e("10004"),
            n.e("55314"),
            n.e("29177"),
            n.e("44376"),
            n.e("83429"),
            n.e("96905"),
            n.e("33902"),
            n.e("31644"),
            n.e("70653"),
            n.e("31825"),
            n.e("993"),
            n.e("54527"),
            n.e("72535"),
            n.e("76195"),
            n.e("39227"),
            n.e("1177"),
            n.e("26490"),
            n.e("76170"),
            n.e("32817"),
            n.e("51243"),
            n.e("36498"),
            n.e("18943"),
            n.e("89094"),
            n.e("84103"),
            n.e("9915"),
            n.e("99999"),
            n.e("5501"),
            n.e("11527"),
            n.e("96123"),
            n.e("27168"),
            n.e("39038"),
            n.e("36320"),
            n.e("6223"),
            n.e("77245"),
            n.e("20320"),
            n.e("31549"),
            n.e("43919"),
            n.e("31390"),
            n.e("57906"),
            n.e("37622"),
            n.e("14879"),
            n.e("45421"),
            n.e("44265"),
            n.e("99141"),
            n.e("21435"),
            n.e("98793"),
            n.e("92731"),
            n.e("25990"),
            n.e("34472"),
            n.e("33584"),
            n.e("63095"),
            n.e("68647"),
            n.e("45723"),
            n.e("67657"),
            n.e("64615"),
            n.e("88017"),
            n.e("87225"),
            n.e("12373"),
            n.e("75134"),
            n.e("84967"),
            n.e("23216"),
            n.e("25582"),
            n.e("30770"),
            n.e("38835"),
            n.e("90889"),
            n.e("78777"),
            n.e("3458"),
            n.e("62827"),
            n.e("73547"),
            n.e("32823"),
            n.e("34691"),
            n.e("99593"),
            n.e("61935"),
            n.e("36126"),
            n.e("62168"),
            n.e("55602"),
            n.e("77793"),
            n.e("13499"),
            n.e("91381"),
            n.e("93158"),
            n.e("58765"),
            n.e("22407"),
            n.e("10034"),
            n.e("73500"),
            n.e("25252"),
            n.e("78707"),
            n.e("19452"),
            n.e("36863"),
            n.e("53526"),
            n.e("65881"),
            n.e("32035"),
            n.e("51391"),
            n.e("29375"),
            n.e("91942"),
            n.e("48778"),
            n.e("89465"),
            n.e("79440"),
            n.e("62355"),
            n.e("93708"),
            n.e("71482"),
            n.e("10942"),
            n.e("64480"),
            n.e("10745"),
            n.e("78651"),
            n.e("39406"),
            n.e("37687"),
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
function W(e, t, a) {
    (0, l.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("64150"),
            n.e("59511"),
            n.e("27050"),
            n.e("69354"),
            n.e("28154"),
            n.e("85502"),
            n.e("36561"),
            n.e("31145"),
            n.e("96905"),
            n.e("36498"),
            n.e("39038"),
            n.e("31549"),
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
    (0, l.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("13520"),
            n.e("59511"),
            n.e("64150"),
            n.e("89693"),
            n.e("34303"),
            n.e("94723"),
            n.e("69354"),
            n.e("28154"),
            n.e("85502"),
            n.e("36561"),
            n.e("31145"),
            n.e("42724"),
            n.e("36498"),
            n.e("39038"),
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
    (0, l.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("59511"),
            n.e("64150"),
            n.e("63549"),
            n.e("62680"),
            n.e("98125"),
            n.e("21825"),
            n.e("69354"),
            n.e("28154"),
            n.e("18441"),
            n.e("80527"),
            n.e("85502"),
            n.e("36561"),
            n.e("86949"),
            n.e("22584"),
            n.e("31145"),
            n.e("83429"),
            n.e("76195"),
            n.e("36498"),
            n.e("39038"),
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
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: a, location: t, preview: r });
    });
}
function Z(e, t, a) {
    (0, l.openModalLazy)(async () => {
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
        (0, l.openModalLazy)(async () => {
            let { default: a } = await Promise.all([n.e("99547"), n.e("78050"), n.e("132")]).then(n.bind(n, 348559));
            return (n) => (0, i.jsx)(a, { ...n, questContent: t.content, quest: e });
        });
}
function Q(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: i = !1 } = e;
    (0, G.jQ)({ questId: n, fromContent: t });
    let a = null != n ? `#${n}` : "";
    i && I.A.setState({ selectedTab: F.GlobalDiscoveryTab.QUESTS }),
        (0, h.default)(),
        (0, T.pX)((i ? B.BVt.QUEST_HOME_DEPRECATED : B.BVt.QUEST_HOME) + a);
}
function z(e) {
    let t = (0, P.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let n = (0, U.A)(e);
    t.log(`Showing survey ${n.id}`), (0, x.m)({ questId: e.id, survey: n });
}
function X() {
    return Promise.all([
        n.e("40841"),
        n.e("99245"),
        n.e("64150"),
        n.e("13520"),
        n.e("57174"),
        n.e("92868"),
        n.e("69354"),
        n.e("28154"),
        n.e("85502"),
        n.e("36561"),
        n.e("31145"),
        n.e("96905"),
        n.e("70653"),
        n.e("36498"),
        n.e("84103"),
        n.e("9915"),
        n.e("39038"),
        n.e("31549"),
        n.e("57906"),
        n.e("37622"),
        n.e("98793"),
        n.e("92731"),
        n.e("34691"),
        n.e("55602"),
        n.e("32326"),
        n.e("84971"),
        n.e("2412"),
        n.e("24689"),
        n.e("30920"),
        n.e("78010"),
        n.e("91652"),
        n.e("63408"),
        n.e("25717"),
        n.e("77375"),
        n.e("55458"),
        n.e("97199"),
    ]).then(n.bind(n, 834135));
}
function J(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: r,
        sourceQuestContentCTA: s,
        autoplay: d = !0,
        skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, y.K$)(t)) return void ei(t);
    let _ = (0, a.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, v.Ic)(t)) {
        R.A.isEnrolling(t.id) ||
            (0, C.Oy)(t.id, { questContent: n, questContentCTA: M.Cy.ACCEPT_QUEST, sourceQuestContent: r });
        let e = g.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, C.QG)(t.id),
            p.default.track(B.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, M.jO)(r),
                source_quest_content_cta: s,
                video_session_id: _,
            }));
    }
    let { setCaptionEnabled: E, muted: u, volume: A, captionEnabled: I } = g.Ay.getState(),
        { enabled: T, variant: h } = L.Ig.getConfig({ location: V.rE.VIDEO_MODAL }),
        S = null != (0, D.tW)(t, D.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    u &&
        T &&
        (h === L.sy.AUTO_ENABLE_CAPTIONS && S && !I
            ? E(!0)
            : h === L.sy.AUTO_UNMUTE && (g.Ay.getState().setMuted(!1), 0 === A && g.Ay.getState().setVolume(0.3)));
    let N = performance.now();
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await X();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: N,
                    questId: t.id,
                    autoplay: d,
                    videoSessionId: _,
                    sourceQuestContent: r,
                });
        },
        {
            modalKey: (0, w.cZ)(t.id),
            backdropStyle: o.F.IMMERSIVE,
            onCloseCallback: () => (0, w.vm)({ questId: t.id, sourceQuestContent: r, videoSessionId: _ }),
        },
    );
}
function ee(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = S.default.getFingerprint(),
                    n = (0, r.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, r.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, r.X7)(t);
    null != n &&
        p.default.track(B.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        O.A.launch(t, (t) => {
            t || (0, T.bG)({ pathname: B.BVt.QUEST_HOME, hash: e });
        });
}
function et(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = S.default.getFingerprint(),
                    n = (0, r.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, r.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, r.X7)(t);
    null != n &&
        p.default.track(B.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        O.A.launch(t, (t) => {
            t || (0, T.bG)({ pathname: B.BVt.QUEST_HOME, hash: e });
        });
}
function en(e, t) {
    (0, l.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("40841"),
            n.e("55498"),
            n.e("13520"),
            n.e("42105"),
            n.e("68953"),
            n.e("18824"),
            n.e("24199"),
            n.e("62680"),
            n.e("98125"),
            n.e("21825"),
            n.e("18441"),
            n.e("80527"),
            n.e("86949"),
            n.e("22584"),
            n.e("29177"),
            n.e("83429"),
            n.e("33902"),
            n.e("76195"),
            n.e("1177"),
            n.e("99999"),
            n.e("5501"),
            n.e("37622"),
            n.e("14879"),
            n.e("32823"),
            n.e("34691"),
            n.e("54975"),
            n.e("93158"),
            n.e("19452"),
            n.e("53526"),
            n.e("79440"),
            n.e("62355"),
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
            n.e("99707"),
            n.e("54276"),
            n.e("99513"),
            n.e("62101"),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(a, { ...n, multiplier: e, eligibleToReceivePremiumRewards: t });
    });
}
function ei(e) {
    (0, l.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("40841"),
            n.e("75222"),
            n.e("95429"),
            n.e("6515"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function ea(e, t) {
    let { type: n } = await (0, C.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case C.WM.SUCCESS:
            J({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case C.WM.CAPTCHA_FAILED:
            _.A.show({ title: k.intl.string(k.t["/CidxO"]), body: k.intl.string(k.t.HQdHg6) });
            break;
        case C.WM.UNKNOWN_ERROR:
            _.A.show({ title: k.intl.string(k.t.R0RpRX), body: k.intl.string(k.t.OXD41D) });
        case C.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function er(e) {
    if ((0, G.vA)(e)) return e.config.features.includes(V.Li.CLOUD_GAMING_ACTIVITY) ? d.h : c._;
}
