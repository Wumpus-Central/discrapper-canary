n.d(e, { a: () => u, i: () => r });
var s = n(192308),
    i = n(367513),
    a = n(951001),
    l = n(366811),
    o = n(652215);
function r(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, s.hasAnyModalOpen)() ||
        (n && a.A.channelListScrollTo(t, e),
        r && null != e && i.A.updateChatOpen(e, !0),
        l.A.getState().updatePath(o.BVt.CHANNEL(t, e)));
}
function u(t) {
    (0, s.hasAnyModalOpen)() || l.A.getState().updatePath(t);
}
