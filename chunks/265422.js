"use strict";
n.d(t, { a: () => d, i: () => o });
var i = n(192308),
    r = n(367513),
    a = n(951001),
    s = n(366811),
    l = n(652215);
function o(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, i.hasAnyModalOpen)() ||
        (n && a.A.channelListScrollTo(e, t),
        o && null != t && r.A.updateChatOpen(t, !0),
        s.A.getState().updatePath(l.BVt.CHANNEL(e, t)));
}
function d(e) {
    (0, i.hasAnyModalOpen)() || s.A.getState().updatePath(e);
}
