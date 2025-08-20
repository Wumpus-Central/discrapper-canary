n.d(t, {
    K: () => l,
    z: () => c,
});
var r = n(481060),
    i = n(475179),
    a = n(925549),
    o = n(905423),
    s = n(981631);
function l(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, r.$sL)() ||
        (n && a.Z.channelListScrollTo(e, t),
        l && null != t && i.Z.updateChatOpen(t, !0),
        o.Z.getState().updatePath(s.Z5c.CHANNEL(e, t)));
}
function c(e) {
    (0, r.$sL)() || o.Z.getState().updatePath(e);
}
