n.d(t, { ZP: () => u });
var r = n(442837),
    i = n(496675),
    o = n(700785),
    a = n(231338);
let s = [a.Pl.SET_VOICE_CHANNEL_STATUS, a.Pl.CONNECT, a.Pl.VIEW_CHANNEL],
    l = [a.Pl.SET_VOICE_CHANNEL_STATUS];
function c(e, t, n, r) {
    return (n ? l : s).every((n) =>
        null == r
            ? t.can(n, e)
            : o.BT({
                  permission: n,
                  user: r,
                  context: e
              })
    );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, r.e7)([i.Z], () => c(e, i.Z, t, n), [e, t, n]);
}
