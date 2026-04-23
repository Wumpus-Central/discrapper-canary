n.d(t, { Ay: () => d });
var l = n(17928),
    i = n(576705),
    r = n(488926),
    a = n(818348);
let u = [a.xB.SET_VOICE_CHANNEL_STATUS, a.xB.CONNECT, a.xB.VIEW_CHANNEL],
    s = [a.xB.SET_VOICE_CHANNEL_STATUS];
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, l.bG)([i.A], () => {
        var l;
        return (
            (l = i.A),
            (t ? s : u).every((t) => (null == n ? l.can(t, e) : r.$3({ permission: t, user: n, context: e })))
        );
    }, [e, t, n]);
}
