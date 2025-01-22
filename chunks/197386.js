r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(475179),
    a = r(812206),
    o = r(776862),
    s = r(703656),
    l = r(317381),
    u = r(531826),
    c = r(16609),
    d = r(917107),
    f = r(981631);
function p(e, n) {
    let r = l.ZP.getSelfEmbeddedActivityForLocation(n),
        p = a.Z.getApplication(null == r ? void 0 : r.applicationId),
        h = (0, c.p)(null == r ? void 0 : r.location),
        _ = (0, u.ZP)({
            application: p,
            channelId: h
        });
    null == _ && null != h ? (0, s.uL)(f.Z5c.CHANNEL(e, h)) : null != _ && (0, o.Z)(_), null != h && null != r && (0, d.Z)(h) && (i.Z.selectParticipant(h, r.applicationId), i.Z.updateLayout(h, f.AEg.NO_CHAT));
}
