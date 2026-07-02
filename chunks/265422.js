n.d(e, { a: () => u, i: () => l });
var s = n(192308),
    i = n(367513),
    a = n(951001),
    o = n(366811),
    r = n(652215);
function l(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, s.hasAnyModalOpen)() ||
        (n && a.A.channelListScrollTo(t, e),
        l && null != e && i.A.updateChatOpen(e, !0),
        o.A.getState().updatePath(r.BVt.CHANNEL(t, e)));
}
function u(t) {
    (0, s.hasAnyModalOpen)() || o.A.getState().updatePath(t);
}
