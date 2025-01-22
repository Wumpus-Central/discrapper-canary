t.d(n, {
    K: function () {
        return o;
    },
    z: function () {
        return d;
    }
});
var l = t(481060),
    i = t(475179),
    a = t(925549),
    u = t(905423),
    r = t(981631);
function o(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, l.hasAnyModalOpen)()) t && a.Z.channelListScrollTo(e, n), o && null != n && i.Z.updateChatOpen(n, !0), u.Z.getState().updatePath(r.Z5c.CHANNEL(e, n));
}
function d(e) {
    if (!(0, l.hasAnyModalOpen)()) u.Z.getState().updatePath(e);
}
