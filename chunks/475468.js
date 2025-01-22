n.d(t, {
    K: function () {
        return s;
    },
    z: function () {
        return c;
    }
});
var i = n(481060),
    r = n(475179),
    l = n(925549),
    a = n(905423),
    o = n(981631);
function s(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, i.hasAnyModalOpen)()) n && l.Z.channelListScrollTo(e, t), s && null != t && r.Z.updateChatOpen(t, !0), a.Z.getState().updatePath(o.Z5c.CHANNEL(e, t));
}
function c(e) {
    if (!(0, i.hasAnyModalOpen)()) a.Z.getState().updatePath(e);
}
