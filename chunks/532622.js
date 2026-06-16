"use strict";
n.d(t, { Ay: () => u });
var i = n(17928),
    r = n(576705),
    s = n(488926),
    a = n(818348);
let o = [a.xB.SET_VOICE_CHANNEL_STATUS, a.xB.CONNECT, a.xB.VIEW_CHANNEL],
    l = [a.xB.SET_VOICE_CHANNEL_STATUS];
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, i.bG)([r.A], () => {
        var i;
        return (
            (i = r.A),
            (t ? l : o).every((t) => (null == n ? i.can(t, e) : s.$3({ permission: t, user: n, context: e })))
        );
    }, [e, t, n]);
}
