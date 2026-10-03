n.d(t, { a: () => r, i: () => u });
var s = n(192308),
    i = n(367513),
    l = n(951001),
    a = n(366811),
    o = n(652215);
function u(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, s.hasAnyModalOpen)() ||
        (n && l.A.channelListScrollTo(e, t),
        u && null != t && i.A.updateChatOpen(t, !0),
        a.A.getState().updatePath(o.BVt.CHANNEL(e, t)));
}
function r(e) {
    (0, s.hasAnyModalOpen)() || a.A.getState().updatePath(e);
}
