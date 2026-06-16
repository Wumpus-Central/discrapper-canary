"use strict";
n.d(t, { V: () => a });
var i = n(17928),
    r = n(760751),
    s = n(375708);
function a(e) {
    let { gameName: t, gameId: n } = e,
        a = (0, i.bG)([r.A], () => (null != n ? r.A.getDetectableGame(n)?.name : void 0), [n]),
        o = t ?? a;
    return { name: o ?? s.intl.string(s.t["11pdXZ"]), hasName: null != o };
}
