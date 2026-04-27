n.d(t, { a: () => o, i: () => d });
var i = n(192308),
    r = n(367513),
    s = n(951001),
    l = n(366811),
    a = n(652215);
function d(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, i.hasAnyModalOpen)() ||
        (n && s.A.channelListScrollTo(e, t),
        d && null != t && r.A.updateChatOpen(t, !0),
        l.A.getState().updatePath(a.BVt.CHANNEL(e, t)));
}
function o(e) {
    (0, i.hasAnyModalOpen)() || l.A.getState().updatePath(e);
}
