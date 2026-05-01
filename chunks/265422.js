"use strict";
n.d(t, { a: () => u, i: () => l });
var i = n(192308),
    r = n(367513),
    s = n(951001),
    a = n(366811),
    o = n(652215);
function l(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, i.hasAnyModalOpen)() ||
        (n && s.A.channelListScrollTo(e, t),
        l && null != t && r.A.updateChatOpen(t, !0),
        a.A.getState().updatePath(o.BVt.CHANNEL(e, t)));
}
function u(e) {
    (0, i.hasAnyModalOpen)() || a.A.getState().updatePath(e);
}
