n.d(e, { a: () => u, i: () => o });
var i = n(192308),
    a = n(367513),
    l = n(951001),
    s = n(366811),
    r = n(652215);
function o(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, i.hasAnyModalOpen)() ||
        (n && l.A.channelListScrollTo(t, e),
        o && null != e && a.A.updateChatOpen(e, !0),
        s.A.getState().updatePath(r.BVt.CHANNEL(t, e)));
}
function u(t) {
    (0, i.hasAnyModalOpen)() || s.A.getState().updatePath(t);
}
