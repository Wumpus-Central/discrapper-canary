n.d(t, { a: () => d, i: () => o });
var i = n(397927),
    l = n(367513),
    a = n(951001),
    r = n(366811),
    s = n(652215);
function o(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, i.ueM)() ||
        (n && a.A.channelListScrollTo(e, t),
        o && null != t && l.A.updateChatOpen(t, !0),
        r.A.getState().updatePath(s.BVt.CHANNEL(e, t)));
}
function d(e) {
    (0, i.ueM)() || r.A.getState().updatePath(e);
}
