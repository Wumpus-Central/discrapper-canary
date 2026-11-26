n.d(l, { K: () => M });
var a = n(477900);
n(582128);
var t = n(192308),
    i = n(294454),
    o = n(118517),
    r = n(734057),
    d = n(596344);
(n(508300), n(775859));
var c = n(608299),
    s = n(48325),
    u = n(982024),
    h = n(274652),
    m = n(31717),
    f = n(522602),
    p = n(341923),
    g = n(538724),
    I = n(489496),
    v = n(132319),
    C = n(589553),
    _ = n(767637),
    A = n(696016);
function M(e, l) {
    let { channelId: M, analyticsLocations: w, messageReference: E, povTargetInformation: S, onShared: T } = l,
        y = r.A.getChannel(M);
    if (null != y) {
        let l = e.map((e) =>
                (function (e, l) {
                    if (null == l || null == e.syncTimestamp) return e;
                    let { duration: n, syncTimestamp: a } = l,
                        t = e.syncTimestamp - e.length,
                        i = e.syncTimestamp,
                        o = Math.max(t, a - 1e3 * n),
                        r = Math.min(i, a);
                    return o < r
                        ? {
                              ...e,
                              editMetadata: {
                                  applicationAudio: !0,
                                  voiceAudio: !0,
                                  soundboardAudio: !0,
                                  ...e.editMetadata,
                                  start: (o - t) / 1e3,
                                  end: (r - t) / 1e3,
                              },
                          }
                        : e;
                })(e, S),
            ),
            n = new Set(l.filter((l, n) => l !== e[n]));
        if (
            !(function (e, l, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1,
                    t = m.C.ChannelMessage,
                    i = f.A.getUploads(l, t);
                if (i.length + e.length > 10) return ((0, u.UQ)(), !1);
                if (0 === e.length) return !1;
                let o = (0, g.D)(e.map((e) => e.id));
                if (null == o) return ((0, _.A)(), !1);
                let r = e.length,
                    d = (0, p.s)(),
                    M = e.map((e) => {
                        let i = a(e),
                            m = structuredClone(e),
                            p = m.type === A.nQ.SCREENSHOT ? "image/jpeg" : "video/mp4",
                            g = (0, C.A)(m, m.type === A.nQ.SCREENSHOT ? "jpeg" : "mp4"),
                            _ = new s.bK(
                                {
                                    platform: h.x.WEB,
                                    file: new File([], g, { type: p }),
                                    clip: m.type === A.nQ.SCREENSHOT ? void 0 : (0, v.J)(m),
                                    origin: "unknown:clip_share",
                                },
                                l,
                            );
                        return (
                            (_.isPreparing = !0),
                            (_.preparation = {
                                claimed: !1,
                                ready: (async function () {
                                    try {
                                        let e = await (0, I.VO)(m, {
                                            analyticsLocations: n,
                                            watermark: d,
                                            isTemporaryEdit: i,
                                        });
                                        if (_.isCancelled()) return !1;
                                        let a = f.A.getUpload(l, _.id, t) === _;
                                        if ((!a && _.preparation?.claimed !== !0) || _.item.platform !== h.x.WEB)
                                            return !1;
                                        return (
                                            (_.item.file = new File([e], g, { type: p })),
                                            (_.currentSize = e.size),
                                            (_.preCompressionSize = e.size),
                                            (_.isPreparing = !1),
                                            a && (c.A.update(l, _.id, t, {}), _.upload()),
                                            !0
                                        );
                                    } catch (e) {
                                        return (
                                            A.GU.error(`Clip export failed for ${m.id}`, e),
                                            _.isCancelled() ||
                                                f.A.getUpload(l, _.id, t) !== _ ||
                                                (c.A.remove(l, _.id, t), (0, u.UQ)()),
                                            !1
                                        );
                                    } finally {
                                        0 == --r && o();
                                    }
                                })(),
                            }),
                            _
                        );
                    });
                return (c.A.setUploads({ uploads: [...i, ...M], channelId: l, draftType: t }), !0);
            })(l, y.id, w, (e) => n.has(e))
        )
            return Promise.resolve();
        if (null != E) {
            let e = d.A.getMessage(E.channel_id, E.message_id);
            null != e && (0, o.Yf)({ message: e, channel: y, shouldMention: !1, showMentionToggle: !1 });
        }
        (T?.(), t.s7());
    } else
        (0, t.mM)(
            async () => {
                let { default: l } = await Promise.all([
                    n.e(985768),
                    n.e(325522),
                    n.e(790340),
                    n.e(147119),
                    n.e(425292),
                    n.e(209994),
                    n.e(116815),
                    n.e(582012),
                    n.e(166336),
                    n.e(113658),
                    n.e(162182),
                    n.e(860640),
                    n.e(681801),
                    n.e(570385),
                    n.e(67909),
                    n.e(916885),
                    n.e(272804),
                    n.e(449933),
                    n.e(985236),
                    n.e(75739),
                    n.e(799357),
                    n.e(491899),
                    n.e(889880),
                    n.e(375724),
                    n.e(999272),
                    n.e(677625),
                    n.e(685611),
                    n.e(490514),
                    n.e(962953),
                    n.e(550929),
                    n.e(358931),
                    n.e(168248),
                    n.e(533240),
                    n.e(936090),
                    n.e(841136),
                    n.e(560338),
                    n.e(853564),
                    n.e(459086),
                    n.e(720210),
                    n.e(601152),
                    n.e(319714),
                    n.e(331249),
                    n.e(796662),
                    n.e(801781),
                    n.e(686889),
                    n.e(560570),
                    n.e(592e3),
                    n.e(524434),
                    n.e(992956),
                    n.e(896691),
                    n.e(99965),
                    n.e(779367),
                    n.e(428643),
                    n.e(630290),
                    n.e(189423),
                    n.e(706073),
                    n.e(227512),
                    n.e(933947),
                    n.e(769281),
                    n.e(224155),
                    n.e(125729),
                    n.e(888326),
                    n.e(695765),
                    n.e(84663),
                    n.e(508702),
                    n.e(481647),
                    n.e(749248),
                    n.e(879315),
                    n.e(900361),
                    n.e(37085),
                    n.e(890027),
                    n.e(161379),
                    n.e(844780),
                    n.e(592028),
                    n.e(349460),
                    n.e(425906),
                    n.e(123216),
                    n.e(45072),
                    n.e(182408),
                    n.e(491279),
                    n.e(398793),
                    n.e(317225),
                    n.e(56021),
                    n.e(647177),
                    n.e(124060),
                    n.e(784103),
                    n.e(146566),
                    n.e(958428),
                    n.e(693832),
                    n.e(32661),
                    n.e(346102),
                    n.e(696123),
                    n.e(791154),
                    n.e(8563),
                    n.e(499941),
                    n.e(384498),
                    n.e(271244),
                    n.e(444376),
                    n.e(577084),
                    n.e(826240),
                    n.e(130674),
                    n.e(73500),
                    n.e(959134),
                    n.e(68904),
                    n.e(796867),
                    n.e(86721),
                    n.e(919307),
                    n.e(924862),
                    n.e(565617),
                    n.e(371482),
                    n.e(488934),
                    n.e(455924),
                    n.e(41991),
                    n.e(237834),
                    n.e(872648),
                    n.e(409843),
                    n.e(565065),
                    n.e(834386),
                    n.e(959669),
                    n.e(220518),
                    n.e(875842),
                    n.e(126780),
                    n.e(360781),
                    n.e(368111),
                    n.e(851243),
                    n.e(446693),
                    n.e(952577),
                    n.e(807771),
                    n.e(751202),
                    n.e(496715),
                    n.e(115754),
                    n.e(122266),
                    n.e(474055),
                    n.e(781202),
                    n.e(104513),
                    n.e(744385),
                    n.e(59413),
                    n.e(29664),
                    n.e(471064),
                    n.e(282094),
                    n.e(250478),
                    n.e(421658),
                    n.e(587244),
                    n.e(708692),
                    n.e(680986),
                    n.e(90373),
                    n.e(957506),
                    n.e(539319),
                    n.e(97210),
                    n.e(387933),
                    n.e(948184),
                    n.e(260218),
                    n.e(303730),
                    n.e(362422),
                    n.e(789573),
                    n.e(732272),
                    n.e(935948),
                    n.e(401518),
                    n.e(236946),
                    n.e(593020),
                    n.e(692639),
                    n.e(334119),
                    n.e(890480),
                    n.e(440963),
                    n.e(766031),
                    n.e(394317),
                    n.e(12762),
                    n.e(304329),
                    n.e(895008),
                    n.e(633428),
                ]).then(n.bind(n, 464319));
                return (n) => (0, a.jsx)(l, { ...n, clips: e, analyticsLocations: w, onShared: T });
            },
            { stackingBehavior: "stack", modalKey: i.aU },
        );
    return Promise.resolve();
}
n(652215);
