i.d(t, { Ay: () => o });
var l = i(17928),
    n = i(576705),
    s = i(488926),
    a = i(818348);
let d = [a.xB.SET_VOICE_CHANNEL_STATUS, a.xB.CONNECT, a.xB.VIEW_CHANNEL],
    r = [a.xB.SET_VOICE_CHANNEL_STATUS];
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 ? arguments[2] : void 0;
    return (0, l.bG)([n.A], () => {
        var l;
        return (
            (l = n.A),
            (t ? r : d).every((t) => (null == i ? l.can(t, e) : s.$3({ permission: t, user: i, context: e })))
        );
    }, [e, t, i]);
}
