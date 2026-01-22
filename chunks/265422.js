n.d(t, {
    a: () => c,
    i: () => l,
});
var r = n(397927),
    i = n(367513),
    a = n(951001),
    s = n(366811),
    o = n(652215);
function l(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, r.ueM)() ||
        (n && a.A.channelListScrollTo(e, t),
        l && null != t && i.A.updateChatOpen(t, !0),
        s.A.getState().updatePath(o.BVt.CHANNEL(e, t)));
}
function c(e) {
    (0, r.ueM)() || s.A.getState().updatePath(e);
}
