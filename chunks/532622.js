var a = n(855986),
    i = n(576705),
    l = n(488926),
    s = n(818348);
let r = [s.xB.SET_VOICE_CHANNEL_STATUS, s.xB.CONNECT, s.xB.VIEW_CHANNEL],
    u = [s.xB.SET_VOICE_CHANNEL_STATUS];
n.d(
    e,
    {},
    {
        Ay: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0;
            return (0, a.bG)(
                [i.A],
                () => {
                    var a;
                    return (
                        (a = i.A),
                        (e ? u : r).every((e) =>
                            null == n ? a.can(e, t) : l.$3({ permission: e, user: n, context: t }),
                        )
                    );
                },
                [t, e, n],
            );
        },
    },
);
