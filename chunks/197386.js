r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(475179),
    a = r(812206),
    s = r(776862),
    o = r(703656),
    l = r(317381),
    u = r(531826),
    c = r(16609),
    d = r(917107),
    f = r(981631);
function _(e, n) {
    let r = l.ZP.getSelfEmbeddedActivityForLocation(n),
        _ = a.Z.getApplication(null == r ? void 0 : r.applicationId),
        h = (0, c.p)(null == r ? void 0 : r.location),
        p = (0, u.ZP)({
            application: _,
            channelId: h
        });
    null == p && null != h ? (0, o.uL)(f.Z5c.CHANNEL(e, h)) : null != p && (0, s.Z)(p), null != h && null != r && (0, d.Z)(h) && (i.Z.selectParticipant(h, r.applicationId), i.Z.updateLayout(h, f.AEg.NO_CHAT));
}
