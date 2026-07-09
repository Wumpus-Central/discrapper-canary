l.d(t, { a: () => c, i: () => o });
var a = l(192308),
    s = l(367513),
    i = l(951001),
    n = l(366811),
    r = l(652215);
function o(e, t) {
    let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, a.hasAnyModalOpen)() ||
        (l && i.A.channelListScrollTo(e, t),
        o && null != t && s.A.updateChatOpen(t, !0),
        n.A.getState().updatePath(r.BVt.CHANNEL(e, t)));
}
function c(e) {
    (0, a.hasAnyModalOpen)() || n.A.getState().updatePath(e);
}
