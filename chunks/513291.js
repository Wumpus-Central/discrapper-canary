(n.d(t, { BD: () => w, X8: () => G, mH: () => P, US: () => M }), n(667532));
var i = n(477900);
n(582128);
var r = n(435558),
    a = n.n(r),
    s = n(192308),
    l = n(310953),
    o = n(749884),
    d = n(366811),
    c = n(808728),
    u = n(967198),
    _ = n(711014),
    E = n(645959),
    A = n(188567),
    f = n(265422),
    h = n(652215),
    I = n(790782);
function p(e, t) {
    return [
        { resourceId: e, type: I.P.GUILD_EVENT },
        ...(e === h.ME
            ? E.A.getPrivateChannelIds()
            : (0, l.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let m = a().throttle(function (e, t) {
    var r;
    let a,
        l,
        E,
        {
            channelPredicate: I = () => !0,
            guildPredicate: m = () => !0,
            guildFeaturePredicate: T = () => !1,
            ensureChatIsVisible: g = () => !1,
            withVoiceChannels: S = !1,
        } = t,
        N = d.A.getState().guildId ?? h.ME,
        C = d.A.getState().channelId,
        O =
            ((r = N),
            (a = [...((0, o.J)() ? [h.YYv] : []), h.ME, ..._.Ay.getFlattenedGuildIds()]).includes(r) || a.unshift(r),
            (l = a.indexOf(r)),
            e > 0
                ? a.slice(l).concat(a.slice(0, l), r)
                : (a.splice(l, 0, r), a.slice(l + 1).concat(a.slice(0, l + 1)))),
        R = e > 0 ? 0 : O.length - 1,
        L = p(N, S),
        y = L.indexOf(C) + e;
    for (; null != N && "" !== N;) {
        if (((E = L[y]), m(N)))
            for (; null != E && "" !== E;) {
                if ("string" == typeof E) {
                    if (I(N, E)) return (0, f.i)(N, E, !1, g(N, E));
                } else if ("object" == typeof E && T(E.resourceId, E.type))
                    return (
                        N !== u.A.getGuildId() && (0, f.i)(N, c.A.getDefaultChannel(N)?.id),
                        (0, s.mM)(async () => {
                            let { default: e } = await Promise.all([
                                n.e(505866),
                                n.e(512831),
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
                                n.e(291329),
                                n.e(64769),
                                n.e(329172),
                                n.e(992956),
                                n.e(880150),
                                n.e(490743),
                                n.e(44141),
                                n.e(428643),
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
                                n.e(670870),
                                n.e(684231),
                                n.e(570690),
                                n.e(886631),
                                n.e(144909),
                                n.e(884841),
                                n.e(998835),
                                n.e(311913),
                                n.e(435860),
                                n.e(694303),
                                n.e(474172),
                                n.e(650376),
                                n.e(587618),
                                n.e(645499),
                                n.e(322690),
                                n.e(454048),
                                n.e(188941),
                                n.e(508702),
                                n.e(300699),
                                n.e(349619),
                                n.e(922716),
                                n.e(543039),
                                n.e(398125),
                                n.e(990189),
                                n.e(221825),
                                n.e(930758),
                                n.e(776195),
                                n.e(55348),
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
                                n.e(490028),
                                n.e(809915),
                                n.e(314243),
                                n.e(110116),
                                n.e(37085),
                                n.e(890027),
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
                                n.e(276863),
                                n.e(955184),
                                n.e(249366),
                                n.e(728633),
                                n.e(628439),
                                n.e(570506),
                                n.e(539620),
                                n.e(225990),
                                n.e(297964),
                                n.e(787672),
                                n.e(248329),
                                n.e(996830),
                                n.e(165595),
                                n.e(401590),
                                n.e(213653),
                                n.e(466354),
                                n.e(133902),
                                n.e(123353),
                                n.e(263765),
                                n.e(592028),
                                n.e(76705),
                                n.e(349460),
                                n.e(425906),
                                n.e(123216),
                                n.e(967288),
                                n.e(588940),
                                n.e(494768),
                                n.e(182408),
                                n.e(401827),
                                n.e(674783),
                                n.e(858514),
                                n.e(344265),
                                n.e(489949),
                                n.e(121435),
                                n.e(486309),
                                n.e(414260),
                                n.e(695881),
                                n.e(621624),
                                n.e(637721),
                                n.e(54953),
                                n.e(317225),
                                n.e(741162),
                                n.e(547646),
                                n.e(288004),
                                n.e(124060),
                                n.e(146566),
                                n.e(32661),
                                n.e(696123),
                                n.e(147626),
                                n.e(661008),
                                n.e(231578),
                                n.e(288705),
                                n.e(73500),
                                n.e(459414),
                                n.e(632756),
                                n.e(237834),
                                n.e(858337),
                                n.e(349644),
                                n.e(901922),
                                n.e(940248),
                                n.e(256373),
                                n.e(908170),
                                n.e(752695),
                                n.e(449347),
                                n.e(853934),
                                n.e(402076),
                                n.e(469647),
                                n.e(543267),
                                n.e(798354),
                                n.e(18181),
                                n.e(675506),
                            ]).then(n.bind(n, 568036));
                            return (t) => (0, i.jsx)(e, { ...t, guildId: N });
                        })
                    );
                ((y += e), (E = L[y]));
            }
        if (((R += e), null == (N = O[R]) || "" === N)) break;
        ((L = p(N, S)), (y = e < 0 ? L.length - 1 : 0));
    }
    A._.dispatch(h.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, 50);
var T = n(181079),
    g = n(5180),
    S = n(455234),
    N = n(95701),
    C = n(734057),
    O = n(218461),
    R = n(309010),
    L = n(543465);
let y = (e, t) => {
        let n = C.A.getChannel(t);
        return (
            null != n &&
            ((0, N.Gw)(n.type) || h.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? O.Ay.getMentionCount(t) > 0 || R.Ay.getVoiceChannelId() === t
                : (!L.Ay.isChannelMuted(e, t) || O.Ay.getMentionCount(t) > 0) && (0, S.Y)(n))
        );
    },
    D = (e, t) =>
        t === I.P.GUILD_EVENT ? !L.Ay.isMuteScheduledEventsEnabled(e) && O.Ay.hasUnread(e, t) : O.Ay.hasUnread(e, t);
function b(e) {
    return (0, g.ai)(e) ? T.A.favoriteGuildMuted : L.Ay.isMuted(e);
}
let v = (e, t) => {
        let n = C.A.getChannel(t);
        return (
            null != n &&
            !!h.kvI.GUILD_VOCAL.has(n.type) &&
            (O.Ay.getMentionCount(t) > 0 || (R.Ay.getVoiceChannelId() === t && O.Ay.getUnreadCount(t) > 0))
        );
    },
    P = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getState().guildId ?? h.ME;
            return (
                m(1, {
                    channelPredicate: y,
                    guildPredicate: (t) => t === e || !b(t),
                    guildFeaturePredicate: D,
                    ensureChatIsVisible: v,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    M = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getState().guildId ?? h.ME;
            return (
                m(-1, {
                    channelPredicate: y,
                    guildPredicate: (t) => t === e || !b(t),
                    guildFeaturePredicate: D,
                    ensureChatIsVisible: v,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    U = (e, t) => O.Ay.getMentionCount(t) > 0,
    w = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (m(1, { channelPredicate: U, ensureChatIsVisible: v, withVoiceChannels: !0 }), !1),
    },
    G = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (m(-1, { channelPredicate: U, ensureChatIsVisible: v, withVoiceChannels: !0 }), !1),
    };
