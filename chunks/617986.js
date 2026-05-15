"use strict";
n.d(t, {
    l9: () => J,
    QA: () => et,
    z6: () => Q,
    cf: () => K,
    hJ: () => $,
    q$: () => en,
    Zc: () => Z,
    gC: () => ei,
    d5: () => ee,
    Fy: () => er,
    f7: () => Y,
    m6: () => q,
    navigateToQuestHome: () => X,
    e0: () => es,
    rx: () => W,
    Oz: () => ea,
    Df: () => z,
});
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
    d = n(157559),
    _ = n(376728),
    f = n(167189),
    h = n(833291),
    p = n(726845),
    E = n(976860),
    m = n(830543),
    g = n(495544),
    A = n(299091),
    I = n(711014),
    T = n(174459),
    S = n(998218),
    N = n(877062),
    y = n(340124),
    C = n(859703),
    v = n(405670),
    O = n(192444),
    R = n(859387),
    b = n(561844),
    D = n(590202),
    L = n(851936),
    w = n(588350),
    M = n.n(w),
    P = n(792620),
    x = n(375708),
    U = n(710969),
    k = n(814793),
    G = n(753386),
    F = n(448967),
    V = n(190107),
    B = n(652215),
    H = n(488995);
async function j(e) {
    try {
        let t = (0, h.br)(e);
        if (null == t || t.type !== f.I.INVITE) return !1;
        let n = A.A.getInvite(t.code);
        if (null == n) {
            let { invite: e } = await _.Ay.resolveInvite(t.code, "Markdown Link");
            n = e;
        }
        if (null == n) return !1;
        let i = I.Ay.getFlattenedGuildIds(),
            r = n?.guild?.id;
        return null != r && i.includes(r);
    } catch (e) {
        return !1;
    }
}
async function Y(e) {
    try {
        if (S.A.isDiscordUrl(e)) return !0;
        return await j(e);
    } catch (e) {
        return !1;
    }
}
function W(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, o.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            n.e("73953"),
            n.e("93110"),
            n.e("95664"),
            n.e("54266"),
            n.e("74389"),
            n.e("40671"),
            n.e("9023"),
            n.e("19360"),
            n.e("18125"),
            n.e("35769"),
            n.e("43778"),
            n.e("22513"),
            n.e("13498"),
            n.e("32993"),
            n.e("80203"),
            n.e("48157"),
            n.e("42971"),
            n.e("71934"),
            n.e("29690"),
            n.e("79924"),
            n.e("7053"),
            n.e("13233"),
            n.e("39995"),
            n.e("25568"),
            n.e("16254"),
            n.e("28951"),
            n.e("59511"),
            n.e("24199"),
            n.e("207"),
            n.e("89281"),
            n.e("57036"),
            n.e("98839"),
            n.e("88941"),
            n.e("62680"),
            n.e("61379"),
            n.e("21825"),
            n.e("98125"),
            n.e("18441"),
            n.e("76640"),
            n.e("25693"),
            n.e("43039"),
            n.e("28154"),
            n.e("48804"),
            n.e("88077"),
            n.e("32606"),
            n.e("18401"),
            n.e("14879"),
            n.e("66900"),
            n.e("13681"),
            n.e("53729"),
            n.e("10004"),
            n.e("55314"),
            n.e("89094"),
            n.e("29177"),
            n.e("33902"),
            n.e("32551"),
            n.e("31658"),
            n.e("4369"),
            n.e("23353"),
            n.e("53930"),
            n.e("46270"),
            n.e("86949"),
            n.e("50015"),
            n.e("11523"),
            n.e("1555"),
            n.e("44695"),
            n.e("21690"),
            n.e("44376"),
            n.e("99999"),
            n.e("31644"),
            n.e("70653"),
            n.e("45723"),
            n.e("70697"),
            n.e("18546"),
            n.e("38835"),
            n.e("37622"),
            n.e("90244"),
            n.e("36863"),
            n.e("18943"),
            n.e("84103"),
            n.e("98793"),
            n.e("9915"),
            n.e("53614"),
            n.e("96123"),
            n.e("31825"),
            n.e("36320"),
            n.e("20320"),
            n.e("95387"),
            n.e("31390"),
            n.e("99657"),
            n.e("47017"),
            n.e("90889"),
            n.e("51243"),
            n.e("46248"),
            n.e("44265"),
            n.e("99141"),
            n.e("92731"),
            n.e("25990"),
            n.e("11527"),
            n.e("63095"),
            n.e("68647"),
            n.e("66541"),
            n.e("63070"),
            n.e("64615"),
            n.e("96443"),
            n.e("87225"),
            n.e("75134"),
            n.e("93158"),
            n.e("84967"),
            n.e("55184"),
            n.e("23216"),
            n.e("87079"),
            n.e("73500"),
            n.e("25637"),
            n.e("31145"),
            n.e("78707"),
            n.e("73547"),
            n.e("84456"),
            n.e("99593"),
            n.e("61935"),
            n.e("62168"),
            n.e("55602"),
            n.e("28128"),
            n.e("58157"),
            n.e("91381"),
            n.e("10034"),
            n.e("25252"),
            n.e("37687"),
            n.e("59957"),
            n.e("967"),
            n.e("71217"),
            n.e("19235"),
            n.e("36037"),
            n.e("69539"),
        ]).then(n.bind(n, 130190));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
}
function K(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("42971"),
            n.e("59511"),
            n.e("27050"),
            n.e("25693"),
            n.e("28154"),
            n.e("32606"),
            n.e("4369"),
            n.e("53930"),
            n.e("36863"),
            n.e("967"),
            n.e("71217"),
            n.e("19235"),
            n.e("26747"),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: r });
    });
}
function z(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            n.e("33957"),
            n.e("59511"),
            n.e("42971"),
            n.e("89693"),
            n.e("34303"),
            n.e("8751"),
            n.e("42724"),
            n.e("25693"),
            n.e("28154"),
            n.e("32606"),
            n.e("4369"),
            n.e("36863"),
            n.e("967"),
            n.e("71217"),
            n.e("52511"),
            n.e("54103"),
            n.e("77298"),
            n.e("19235"),
            n.e("33546"),
            n.e("50332"),
        ]).then(n.bind(n, 448887));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: r, location: t });
    });
}
function $(e, t, r, s) {
    (0, o.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("59511"),
            n.e("42971"),
            n.e("63549"),
            n.e("62680"),
            n.e("21825"),
            n.e("98125"),
            n.e("18441"),
            n.e("76640"),
            n.e("25693"),
            n.e("28154"),
            n.e("32606"),
            n.e("14879"),
            n.e("4369"),
            n.e("86949"),
            n.e("36863"),
            n.e("36877"),
            n.e("77473"),
            n.e("27323"),
            n.e("967"),
            n.e("71217"),
            n.e("19235"),
            n.e("90948"),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: r, location: t, preview: s });
    });
}
function q(e, t, r) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([n.e("28154"), n.e("81169")]).then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: r });
    });
}
function Z(e, t, r) {
    (0, b.Y5)({
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
function X(e) {
    let { fromContent: t, questId: n, forceDiscoveryQuestHomeRoute: i = !1 } = e;
    (0, k.jQ)({ questId: n, fromContent: t });
    let r = null != n ? `#${n}` : "";
    i && p.A.setState({ selectedTab: H.GlobalDiscoveryTab.QUESTS }),
        (0, m.default)(),
        (0, E.pX)((i ? B.BVt.QUEST_HOME_DEPRECATED : B.BVt.QUEST_HOME) + r);
}
function Q(e) {
    let t,
        n = (0, L.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
        ((t = [
            {
                key: "NOT_INTERESTED",
                text: (0, P.vv)(e)
                    ? x.intl.string(x.t.wHRWkE)
                    : x.intl.formatToPlainString(x.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
            },
            { key: "INVALUABLE", text: x.intl.string(x.t.ETU4Na) },
            { key: "TOO_LONG", text: x.intl.string(x.t.uRIIpD) },
            { key: "UNSURE_HOW", text: x.intl.string(x.t["5dxvxs"]) },
            { key: "OTHER", text: x.intl.string(x.t.RFasgu) },
        ]),
        {
            id: "1290718710658629658",
            title: x.intl.string(x.t.ugbhDS),
            subtitle: x.intl.string(x.t.FIYcpC),
            choices: M()(t.slice(0, 4)).concat(t[4]),
        });
    n.log(`Showing survey ${i.id}`), (0, F.m)({ questId: e.id, survey: i });
}
function J() {
    return Promise.all([
        n.e("54266"),
        n.e("39012"),
        n.e("42971"),
        n.e("48157"),
        n.e("57174"),
        n.e("92868"),
        n.e("25693"),
        n.e("28154"),
        n.e("32606"),
        n.e("4369"),
        n.e("53930"),
        n.e("70653"),
        n.e("37622"),
        n.e("84103"),
        n.e("98793"),
        n.e("9915"),
        n.e("95387"),
        n.e("92731"),
        n.e("55602"),
        n.e("32326"),
        n.e("84971"),
        n.e("30920"),
        n.e("24689"),
        n.e("78010"),
        n.e("91652"),
        n.e("63408"),
        n.e("77375"),
        n.e("25717"),
        n.e("97199"),
    ]).then(n.bind(n, 834135));
}
function ee(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: a,
        autoplay: u = !0,
        skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, P.K$)(t)) return void er(t);
    let d = (0, r.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, U.Ic)(t)) {
        C.A.isEnrolling(t.id) ||
            (0, y.Oy)(t.id, { questContent: n, questContentCTA: D.Cy.ACCEPT_QUEST, sourceQuestContent: s });
        let e = v.Ay.getState().getVideoProgress(t.id);
        null != e &&
            e.timestampSec > 1 &&
            ((0, y.QG)(t.id),
            T.default.track(B.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
                quest_id: t.id,
                source_quest_content: (0, D.jO)(s),
                source_quest_content_cta: a,
                video_session_id: d,
            }));
    }
    let { setCaptionEnabled: _, muted: f, volume: h, captionEnabled: p } = v.Ay.getState(),
        { enabled: E, variant: m } = O.Ig.getConfig({ location: V.rE.VIDEO_MODAL }),
        g = null != (0, R.tW)(t, R.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    f &&
        E &&
        (m === O.sy.AUTO_ENABLE_CAPTIONS && g && !p
            ? _(!0)
            : m === O.sy.AUTO_UNMUTE && (v.Ay.getState().setMuted(!1), 0 === h && v.Ay.getState().setVolume(0.3)));
    let A = performance.now();
    (0, o.openModalLazy)(
        async () => {
            let { default: e } = await J();
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
            modalKey: (0, G.cZ)(t.id),
            backdropStyle: l.F.IMMERSIVE,
            onCloseCallback: () => (0, G.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: d }),
        },
    );
}
function et(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = g.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        T.default.track(B.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        N.A.launch(t, (t) => {
            t || (0, E.bG)({ pathname: B.BVt.QUEST_HOME, hash: e });
        });
}
function en(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = g.default.getFingerprint(),
                    n = (0, s.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, s.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, s.X7)(t);
    null != n &&
        T.default.track(B.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        N.A.launch(t, (t) => {
            t || (0, E.bG)({ pathname: B.BVt.QUEST_HOME, hash: e });
        });
}
function ei(e, t) {
    (0, o.openModalLazy)(async () => {
        let { default: r } = await Promise.all([n.e("8304"), n.e("99513"), n.e("62101")]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(r, { ...n, multiplier: e, orbMultiplierEligibility: t });
    });
}
function er(e) {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
            n.e("54266"),
            n.e("75222"),
            n.e("95429"),
            n.e("98189"),
            n.e("48370"),
            n.e("46485"),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function es(e, t) {
    let { type: n } = await (0, y.Oy)(e.id, {
        questContent: t.questContent,
        questContentCTA: t.questContentCTA,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.questContentPosition,
        questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
        case y.WM.SUCCESS:
            ee({
                quest: e,
                questContent: t.questContent,
                sourceQuestContent: t.sourceQuestContent,
                sourceQuestContentCTA: t.sourceQuestContentCTA,
            });
            break;
        case y.WM.CAPTCHA_FAILED:
            d.A.show({ title: x.intl.string(x.t["/CidxO"]), body: x.intl.string(x.t.HQdHg6) });
            break;
        case y.WM.UNKNOWN_ERROR:
            d.A.show({ title: x.intl.string(x.t.R0RpRX), body: x.intl.string(x.t.OXD41D) });
        case y.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function ea(e) {
    if ((0, k.vA)(e)) return e.config.features.includes(V.Li.CLOUD_GAMING_ACTIVITY) ? u.h : c._;
}
