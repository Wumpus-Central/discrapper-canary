a.d(t, { Ay: () => d });
var n = a(17928),
    l = a(576705),
    i = a(488926),
    s = a(818348);
let r = [s.xB.SET_VOICE_CHANNEL_STATUS, s.xB.CONNECT, s.xB.VIEW_CHANNEL],
    u = [s.xB.SET_VOICE_CHANNEL_STATUS];
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = arguments.length > 2 ? arguments[2] : void 0;
    return (0, n.bG)([l.A], () => {
        var n;
        return (
            (n = l.A),
            (t ? u : r).every((t) => (null == a ? n.can(t, e) : i.$3({ permission: t, user: a, context: e })))
        );
    }, [e, t, a]);
}
