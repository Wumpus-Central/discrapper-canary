var i = n(477900);
n(582128);
var r = n(192308),
    s = n(792852),
    l = n(696016);
n.d(
    t,
    {},
    {
        p: function () {
            let { initialEditingClipId: e, selectedGameId: t } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { resetAll: a, setGameFacet: o } = s.P.getState();
            (a(),
                null != t && o(t),
                (0, r.mM)(
                    async () => {
                        let { default: t } = await Promise.all([
                            n.e(459368),
                            n.e(685432),
                            n.e(269714),
                            n.e(19385),
                            n.e(718955),
                            n.e(126301),
                            n.e(498167),
                            n.e(553829),
                            n.e(895840),
                            n.e(865257),
                            n.e(228767),
                            n.e(323079),
                            n.e(437655),
                            n.e(664064),
                            n.e(970846),
                            n.e(795807),
                            n.e(918024),
                            n.e(736926),
                            n.e(838090),
                            n.e(203930),
                            n.e(903663),
                            n.e(583518),
                            n.e(507406),
                            n.e(466147),
                            n.e(501962),
                            n.e(538733),
                            n.e(746623),
                            n.e(280559),
                            n.e(100126),
                            n.e(17736),
                            n.e(974049),
                            n.e(895008),
                            n.e(231782),
                            n.e(377683),
                            n.e(698101),
                            n.e(306270),
                            n.e(823077),
                            n.e(626750),
                            n.e(689160),
                            n.e(827037),
                            n.e(520342),
                            n.e(795365),
                            n.e(7501),
                        ]).then(n.bind(n, 254876));
                        return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
                    },
                    { modalKey: l.nm },
                ));
        },
    },
);
