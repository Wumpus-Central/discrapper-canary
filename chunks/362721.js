n.d(e, { ZP: () => u });
var i = n(442837),
    l = n(496675),
    r = n(700785),
    a = n(231338);
let d = [a.Pl.SET_VOICE_CHANNEL_STATUS, a.Pl.CONNECT, a.Pl.VIEW_CHANNEL],
    s = [a.Pl.SET_VOICE_CHANNEL_STATUS];
function u(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, i.e7)(
        [l.Z],
        () => {
            var i;
            return (
                (i = l.Z),
                (e ? s : d).every((e) =>
                    null == n
                        ? i.can(e, t)
                        : r.BT({
                              permission: e,
                              user: n,
                              context: t
                          })
                )
            );
        },
        [t, e, n]
    );
}
