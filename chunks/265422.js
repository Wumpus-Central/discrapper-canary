n.d(t, { a: () => o, i: () => E });
var i = n(192308),
    l = n(367513),
    r = n(951001),
    s = n(366811),
    a = n(652215);
function E(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        E = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, i.hasAnyModalOpen)() ||
        (n && r.A.channelListScrollTo(e, t),
        E && null != t && l.A.updateChatOpen(t, !0),
        s.A.getState().updatePath(a.BVt.CHANNEL(e, t)));
}
function o(e) {
    (0, i.hasAnyModalOpen)() || s.A.getState().updatePath(e);
}
