n.d(t, {
    K: () => l,
    z: () => c,
});
var r = n(481060),
    i = n(475179),
    o = n(925549),
    a = n(905423),
    s = n(981631);
function l(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, r.$sL)() ||
        (n && o.Z.channelListScrollTo(e, t),
        l && null != t && i.Z.updateChatOpen(t, !0),
        a.Z.getState().updatePath(s.Z5c.CHANNEL(e, t)));
}
function c(e) {
    (0, r.$sL)() || a.Z.getState().updatePath(e);
}
