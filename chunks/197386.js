r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(475179),
    a = r(812206),
    o = r(413523),
    s = r(776862),
    l = r(703656),
    u = r(317381),
    c = r(531826),
    d = r(16609),
    f = r(917107),
    p = r(981631);
function h(e, n) {
    let r = u.ZP.getSelfEmbeddedActivityForLocation(n),
        h = a.Z.getApplication(null == r ? void 0 : r.applicationId),
        _ = (0, d.p)(null == r ? void 0 : r.location),
        m = (0, c.ZP)({
            application: h,
            channelId: _
        });
    null == m && null != _ ? (0, l.uL)(p.Z5c.CHANNEL(e, _)) : null != m && (0, s.Z)(m), null != _ && null != r && (0, f.Z)(_) && (i.Z.selectParticipant(_, (0, o.oW)(r.applicationId)), i.Z.updateLayout(_, p.AEg.NO_CHAT));
}
