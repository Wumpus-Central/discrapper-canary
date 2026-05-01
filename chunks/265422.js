n.d(e, { a: () => c, i: () => o });
var s = n(192308),
    i = n(367513),
    l = n(951001),
    a = n(366811),
    r = n(652215);
function o(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, s.hasAnyModalOpen)() ||
        (n && l.A.channelListScrollTo(t, e),
        o && null != e && i.A.updateChatOpen(e, !0),
        a.A.getState().updatePath(r.BVt.CHANNEL(t, e)));
}
function c(t) {
    (0, s.hasAnyModalOpen)() || a.A.getState().updatePath(t);
}
