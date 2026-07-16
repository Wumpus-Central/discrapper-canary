"use strict";
n.d(t, { Ay: () => d });
var i = n(17928),
    r = n(576705),
    a = n(488926),
    s = n(818348);
let l = [s.xB.SET_VOICE_CHANNEL_STATUS, s.xB.CONNECT, s.xB.VIEW_CHANNEL],
    o = [s.xB.SET_VOICE_CHANNEL_STATUS];
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, i.bG)([r.A], () => {
        var i;
        return (
            (i = r.A),
            (t ? o : l).every((t) => (null == n ? i.can(t, e) : a.$3({ permission: t, user: n, context: e })))
        );
    }, [e, t, n]);
}
