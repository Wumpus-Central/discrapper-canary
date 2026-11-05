(n.d(t, {
    e0: () => ed,
    Oz: () => em,
    Q_: () => ep,
    l9: () => ei,
    z6: () => en,
    mA: () => H.m,
    QA: () => er,
    zg: () => el,
    q$: () => eo,
    Zc: () => et,
    Fy: () => ec,
    FS: () => ee,
    _x: () => W,
    hJ: () => Z,
    cf: () => z,
    m6: () => J,
    gC: () => eu,
    Df: () => X,
    rx: () => K,
    d5: () => es,
    f7: () => F,
}),
    n(323874),
    n(14289),
    n(35956));
var i = n(477900);
n(582128);
var a = n(115560),
    s = n(323889),
    r = n(869733),
    o = n(80703);
n(876230);
var l = n(192308),
    u = n(892491),
    c = n(414499),
    d = n(687966),
    m = n(646270),
    p = n(847374),
    f = n(509434),
    C = n(157559),
    E = n(574332),
    y = n(438457),
    g = n(144779),
    h = n(494280),
    A = n(167189),
    I = n(486889),
    S = n(976860),
    _ = n(46653),
    v = n(299091),
    T = n(711014),
    b = n(129230),
    x = n(998218),
    w = n(877062),
    N = n(343559),
    q = n(859703),
    P = n(405670),
    Q = n(914313),
    L = n(590202),
    j = n(851936),
    O = n(199510),
    U = n.n(O),
    M = n(792620),
    D = n(792996),
    k = n(977416),
    R = n(574112),
    Y = n(814793),
    V = n(753386),
    B = n(798899),
    G = n(221596),
    $ = n(652215),
    H = n(216934);
async function F(e) {
    try {
        if (x.A.isDiscordUrl(e)) return !0;
        return await (async function (e) {
            try {
                let t = (0, I.br)(e);
                if (null == t || t.type !== A.I.INVITE) return !1;
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
        })(e);
    } catch (e) {
        return !1;
    }
}
function K(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, l.mM)(async () => {
        let { default: e } = await Promise.all([
            n.e(388859),
            n.e(506933),
            n.e(644013),
            n.e(896691),
            n.e(447505),
            n.e(971156),
            n.e(260009),
            n.e(779367),
            n.e(552653),
            n.e(85427),
            n.e(66149),
            n.e(996969),
            n.e(281342),
            n.e(967850),
            n.e(505866),
            n.e(291329),
            n.e(64769),
            n.e(992956),
            n.e(880150),
            n.e(490743),
            n.e(44141),
            n.e(428643),
            n.e(512831),
            n.e(630290),
            n.e(668756),
            n.e(60002),
            n.e(189423),
            n.e(415695),
            n.e(188259),
            n.e(715867),
            n.e(249938),
            n.e(266201),
            n.e(752704),
            n.e(56606),
            n.e(678749),
            n.e(327545),
            n.e(163466),
            n.e(940298),
            n.e(738015),
            n.e(234017),
            n.e(629972),
            n.e(40791),
            n.e(358404),
            n.e(996907),
            n.e(831130),
            n.e(599618),
            n.e(377989),
            n.e(546547),
            n.e(102075),
            n.e(828178),
            n.e(505928),
            n.e(752657),
            n.e(747973),
            n.e(395919),
            n.e(885251),
            n.e(206988),
            n.e(650376),
            n.e(587618),
            n.e(645499),
            n.e(322690),
            n.e(454048),
            n.e(508702),
            n.e(300699),
            n.e(349619),
            n.e(922716),
            n.e(543039),
            n.e(398125),
            n.e(221825),
            n.e(930758),
            n.e(776195),
            n.e(901555),
            n.e(44561),
            n.e(253729),
            n.e(593600),
            n.e(827708),
            n.e(266900),
            n.e(707826),
            n.e(948804),
            n.e(199999),
            n.e(879315),
            n.e(110116),
            n.e(37085),
            n.e(890027),
            n.e(492762),
            n.e(809915),
            n.e(463095),
            n.e(710911),
            n.e(851130),
            n.e(672727),
            n.e(417286),
            n.e(927211),
            n.e(717907),
            n.e(361626),
            n.e(646506),
            n.e(445124),
            n.e(76428),
            n.e(27773),
            n.e(445421),
            n.e(783988),
            n.e(832823),
            n.e(761935),
            n.e(511527),
            n.e(763070),
            n.e(87306),
            n.e(502018),
            n.e(955184),
            n.e(249366),
            n.e(728633),
            n.e(628439),
            n.e(570506),
            n.e(539620),
            n.e(225990),
            n.e(297964),
            n.e(248329),
            n.e(996830),
            n.e(811310),
            n.e(165595),
            n.e(401590),
            n.e(213653),
            n.e(466354),
            n.e(133902),
            n.e(123353),
            n.e(263765),
            n.e(445980),
            n.e(76705),
            n.e(967288),
            n.e(494768),
            n.e(49782),
            n.e(401827),
            n.e(323624),
            n.e(674783),
            n.e(858514),
            n.e(344265),
            n.e(489949),
            n.e(885434),
            n.e(486309),
            n.e(414260),
            n.e(695881),
            n.e(621624),
            n.e(637721),
            n.e(54953),
            n.e(741162),
            n.e(547646),
            n.e(288004),
            n.e(836863),
            n.e(821198),
            n.e(466322),
            n.e(170653),
            n.e(661008),
            n.e(231578),
            n.e(454625),
            n.e(288705),
            n.e(180657),
            n.e(75971),
            n.e(837687),
            n.e(165362),
            n.e(324761),
            n.e(159957),
            n.e(932606),
            n.e(39038),
            n.e(913823),
            n.e(557940),
            n.e(271217),
            n.e(881821),
            n.e(88321),
            n.e(212466),
            n.e(496341),
            n.e(536037),
            n.e(482205),
        ]).then(n.bind(n, 639852));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: a });
    });
}
function W(e) {
    let { quest: t, sourceQuestContent: a } = e;
    (0, l.mM)(async () => {
        let { default: e } = await Promise.all([
            n.e(546547),
            n.e(102075),
            n.e(828178),
            n.e(505928),
            n.e(885251),
            n.e(206988),
            n.e(505866),
            n.e(540620),
            n.e(782208),
            n.e(454048),
            n.e(508702),
            n.e(44561),
            n.e(492762),
            n.e(811310),
            n.e(323624),
            n.e(885434),
            n.e(836863),
            n.e(821198),
            n.e(466322),
            n.e(689393),
            n.e(454625),
            n.e(180657),
            n.e(75971),
            n.e(363618),
            n.e(165362),
            n.e(324761),
            n.e(932606),
            n.e(39038),
            n.e(913823),
            n.e(672877),
            n.e(557940),
            n.e(881821),
            n.e(88321),
            n.e(394704),
            n.e(212466),
            n.e(631768),
        ]).then(n.bind(n, 968779));
        return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: a });
    });
}
function z(e, t, a) {
    (0, l.mM)(async () => {
        let { default: s } = await Promise.all([
            n.e(505928),
            n.e(752657),
            n.e(747973),
            n.e(395919),
            n.e(885251),
            n.e(206988),
            n.e(454048),
            n.e(811310),
            n.e(49782),
            n.e(836863),
            n.e(165362),
            n.e(324761),
            n.e(932606),
            n.e(39038),
            n.e(271217),
            n.e(88321),
            n.e(212466),
            n.e(496341),
            n.e(826747),
        ]).then(n.bind(n, 529398));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, location: t, sourceQuestContent: a });
    });
}
function X(e, t, a) {
    (0, l.mM)(async () => {
        let { default: s } = await Promise.all([
            n.e(450998),
            n.e(340363),
            n.e(145010),
            n.e(171206),
            n.e(395919),
            n.e(505928),
            n.e(885251),
            n.e(206988),
            n.e(454048),
            n.e(811310),
            n.e(942724),
            n.e(836863),
            n.e(539319),
            n.e(165362),
            n.e(439480),
            n.e(324761),
            n.e(932606),
            n.e(39038),
            n.e(941394),
            n.e(271217),
            n.e(294653),
            n.e(88321),
            n.e(888205),
            n.e(254103),
            n.e(954180),
            n.e(212466),
            n.e(496341),
            n.e(280401),
        ]).then(n.bind(n, 459624));
        return (n) => (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: a, location: t });
    });
}
function Z(e, t, a, s) {
    (0, l.mM)(async () => {
        let { default: r } = await Promise.all([
            n.e(629972),
            n.e(395919),
            n.e(505928),
            n.e(885251),
            n.e(206988),
            n.e(454048),
            n.e(332447),
            n.e(300699),
            n.e(349619),
            n.e(922716),
            n.e(398125),
            n.e(221825),
            n.e(930758),
            n.e(776195),
            n.e(593600),
            n.e(707826),
            n.e(717907),
            n.e(87306),
            n.e(811310),
            n.e(836863),
            n.e(77473),
            n.e(165362),
            n.e(324761),
            n.e(932606),
            n.e(646284),
            n.e(39038),
            n.e(627323),
            n.e(271217),
            n.e(88321),
            n.e(212466),
            n.e(496341),
            n.e(190948),
        ]).then(n.bind(n, 651663));
        return (n) => (0, i.jsx)(r, { ...n, initialQuest: e, sourceQuestContent: a, location: t, preview: s });
    });
}
function J(e, t, a) {
    (0, l.mM)(async () => {
        let { default: s } = await Promise.all([n.e(165362), n.e(981169)]).then(n.bind(n, 124232));
        return (n) => (0, i.jsx)(s, { ...n, quest: e, location: t, sourceQuestContent: a });
    });
}
function ee() {
    (0, l.mM)(async () => {
        let { default: e } = await n.e(856086).then(n.bind(n, 700085));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function et(e, t, a) {
    let { ctaContent: r } = t,
        o = (function (e) {
            switch (e.type) {
                case s.p.QUEST: {
                    let { gamePublisher: t, gameTitle: n } = e.quest.config.messages;
                    return {
                        adCreativeType: s.p.QUEST,
                        gamePublisher: t,
                        gameTitle: n,
                        cosponsorName: e.quest.config.cosponsorMetadata?.name,
                        isVideoQuest: (0, M.vv)(e.quest),
                    };
                }
                case s.p.BOUNTY:
                    return { adCreativeType: s.p.BOUNTY, gamePublisher: e.bounty.advertiserName };
                case s.p.PLAYABLE:
                    return { adCreativeType: s.p.PLAYABLE, gamePublisher: e.playable.advertiserName };
            }
        })(e);
    ((0, y.r)({
        type: g.F.CLICK_INTERNAL,
        ...(0, h.Yh)(e),
        questContentCTA: r,
        surfaceId: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
    }),
        (0, l.mM)(
            async () => {
                let { default: e } = await Promise.all([n.e(422750), n.e(24922), n.e(678050), n.e(100132)]).then(
                    n.bind(n, 348559),
                );
                return (n) => (0, i.jsx)(e, { ...n, ...o, questContent: t.content, returnRef: a });
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
function en(e) {
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
function ei() {
    return Promise.all([
        n.e(985768),
        n.e(476662),
        n.e(447505),
        n.e(188259),
        n.e(253044),
        n.e(311913),
        n.e(881717),
        n.e(734818),
        n.e(936090),
        n.e(651585),
        n.e(955628),
        n.e(505928),
        n.e(752657),
        n.e(747973),
        n.e(572388),
        n.e(206988),
        n.e(974119),
        n.e(363269),
        n.e(474172),
        n.e(392868),
        n.e(454048),
        n.e(489218),
        n.e(912875),
        n.e(862782),
        n.e(55348),
        n.e(110116),
        n.e(809915),
        n.e(710911),
        n.e(811310),
        n.e(791154),
        n.e(967288),
        n.e(49782),
        n.e(674783),
        n.e(491279),
        n.e(398793),
        n.e(592731),
        n.e(53374),
        n.e(482815),
        n.e(56021),
        n.e(344502),
        n.e(170653),
        n.e(817852),
        n.e(133179),
        n.e(614784),
        n.e(555793),
        n.e(613867),
        n.e(912773),
        n.e(796867),
        n.e(165362),
        n.e(434691),
        n.e(324761),
        n.e(932606),
        n.e(39038),
        n.e(24914),
        n.e(285350),
        n.e(655602),
        n.e(260500),
        n.e(852701),
        n.e(263408),
        n.e(505453),
        n.e(182045),
        n.e(166631),
        n.e(708952),
    ]).then(n.bind(n, 491147));
}
function ea(e, t, n, i) {
    let a = P.Ay.getState().getVideoProgress(e);
    null != a &&
        a.timestampSec > 1 &&
        ((0, N.QG)(e),
        b.default.track($.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
            quest_id: e,
            source_quest_content: (0, L.jO)(t),
            source_quest_content_cta: n,
            video_session_id: i,
        }));
}
function es(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: s,
        sourceQuestContentCTA: r,
        autoplay: o = !0,
        skipEnrollmentCheck: c = !1,
        videoSessionId: d = (0, a.A)(),
    } = e;
    if ((0, M.K$)(t)) return void ec(t);
    if (q.A.isQuestAccessSuspended && t.userStatus?.completedAt == null) return void ee();
    c ||
        t.userStatus?.enrolledAt != null ||
        (0, k.Ic)(t) ||
        (q.A.isEnrolling(t.id) ||
            (0, N.Oy)(t.id, { questContent: n, questContentCTA: L.Cy.ACCEPT_QUEST, sourceQuestContent: s }),
        ea(t.id, s, r, d));
    let { muted: m, volume: p } = P.Ay.getState(),
        { enabled: f, variant: C } = Q.Ig.getConfig({ location: G.rE.VIDEO_MODAL });
    m && f && C === Q.sy.AUTO_UNMUTE && (P.Ay.getState().setMuted(!1), 0 === p && P.Ay.getState().setVolume(0.3));
    let E = performance.now();
    (0, l.mM)(
        async () => {
            let { default: e } = await ei();
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    openStartClockTime: E,
                    questId: t.id,
                    autoplay: o,
                    videoSessionId: d,
                    sourceQuestContent: s,
                });
        },
        {
            modalKey: (0, V.cZ)(t.id),
            backdropStyle: u.F.IMMERSIVE,
            onCloseCallback: () => (0, V.vm)({ questId: t.id, sourceQuestContent: s, videoSessionId: d }),
        },
    );
}
function er(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = _.default.getFingerprint(),
                    n = (0, r.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
                return (0, r.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, r.X7)(t);
    (null != n &&
        b.default.track($.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        w.A.launch(t, (t) => {
            t || (0, S.bG)({ pathname: $.BVt.QUEST_HOME, hash: e });
        }));
}
function eo(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = _.default.getFingerprint(),
                    n = (0, r.I_)(),
                    i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
                return (0, r.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
            }
            return "discord://";
        })(e),
        n = (0, r.X7)(t);
    (null != n &&
        b.default.track($.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        w.A.launch(t, (t) => {
            t || (0, S.bG)({ pathname: $.BVt.QUEST_HOME, hash: e });
        }));
}
function el(e) {
    let t = (function (e) {
            let t = platform.os?.family;
            if ("Android" !== t && "iOS" !== t) return "discord://";
            let n = new URLSearchParams();
            e.forEach((e) => n.append("ad_creative_ids", e));
            let i = _.default.getFingerprint(),
                a = (0, r.I_)(),
                s = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
            return (0, r.Ay)(s, { utmSource: "quest-home-preview", fingerprint: i, attemptId: a });
        })(e),
        n = (0, r.X7)(t);
    (null != n &&
        b.default.track($.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        w.A.launch(t, (e) => {
            e || (0, S.bG)({ pathname: $.BVt.QUEST_HOME });
        }));
}
function eu(e, t, a) {
    (0, l.mM)(async () => {
        let { default: s } = await Promise.all([
            n.e(10058),
            n.e(974969),
            n.e(454048),
            n.e(649408),
            n.e(199999),
            n.e(165595),
            n.e(133902),
            n.e(545587),
            n.e(831145),
            n.e(662355),
            n.e(209518),
            n.e(59413),
            n.e(724637),
            n.e(671710),
            n.e(210034),
            n.e(862101),
        ]).then(n.bind(n, 50292));
        return (n) => (0, i.jsx)(s, { ...n, multiplier: e, orbMultiplierEligibility: t, ...a });
    });
}
function ec(e) {
    (0, l.mM)(async () => {
        let { default: t } = await Promise.all([
            n.e(72338),
            n.e(241797),
            n.e(595429),
            n.e(595948),
            n.e(525989),
            n.e(746485),
        ]).then(n.bind(n, 518420));
        return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
}
async function ed(e, t) {
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
            (ea(e.id, t.sourceQuestContent, t.sourceQuestContentCTA, i),
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
            C.A.show({ title: D.intl.string(D.t.R0RpRX), body: D.intl.string(D.t.OXD41D) });
        case N.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
}
function em(e) {
    if ((0, Y.vA)(e))
        return e.config.features.includes(G.Li.CLOUD_GAMING_ACTIVITY) ? c.CloudIcon : d.GameControllerIcon;
}
function ep(e) {
    let t = (0, R.bg)(e);
    return (0, M.K$)(e)
        ? { icon: m.MobilePhoneIcon }
        : t.length > 0 && !(0, M.I6)(e)
          ? { icon: p.ChevronSmallDownIcon, iconPosition: "end" }
          : (0, M.no)(e)
            ? { icon: f.LinkExternalSmallIcon, iconPosition: "end" }
            : { icon: void 0, iconPosition: void 0 };
}
