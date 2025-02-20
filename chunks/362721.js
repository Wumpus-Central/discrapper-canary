n.d(t, { ZP: () => o });
var i = n(442837),
    r = n(496675),
    a = n(700785),
    d = n(231338);
let l = [d.Pl.SET_VOICE_CHANNEL_STATUS, d.Pl.CONNECT, d.Pl.VIEW_CHANNEL],
    s = [d.Pl.SET_VOICE_CHANNEL_STATUS];
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, i.e7)(
        [r.Z],
        () => {
            var i;
            return (
                (i = r.Z),
                (t ? s : l).every((t) =>
                    null == n
                        ? i.can(t, e)
                        : a.BT({
                              permission: t,
                              user: n,
                              context: e
                          })
                )
            );
        },
        [e, t, n]
    );
}
