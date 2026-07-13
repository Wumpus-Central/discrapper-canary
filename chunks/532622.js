n.d(e, { Ay: () => o });
var a = n(17928),
    l = n(576705),
    i = n(488926),
    s = n(818348);
let r = [s.xB.SET_VOICE_CHANNEL_STATUS, s.xB.CONNECT, s.xB.VIEW_CHANNEL],
    u = [s.xB.SET_VOICE_CHANNEL_STATUS];
function o(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, a.bG)([l.A], () => {
        var a;
        return (
            (a = l.A),
            (e ? u : r).every((e) => (null == n ? a.can(e, t) : i.$3({ permission: e, user: n, context: t })))
        );
    }, [t, e, n]);
}
