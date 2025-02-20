n.d(t, { Z: () => p });
var r = n(475179),
    i = n(812206),
    o = n(413523),
    a = n(776862),
    s = n(703656),
    l = n(317381),
    c = n(531826),
    u = n(16609),
    d = n(917107),
    f = n(981631);
function p(e, t) {
    let n = l.ZP.getSelfEmbeddedActivityForLocation(t),
        p = i.Z.getApplication(null == n ? void 0 : n.applicationId),
        _ = (0, u.pY)(null == n ? void 0 : n.location),
        h = (0, c.ZP)({
            application: p,
            channelId: _
        });
    null == h && null != _ ? (0, s.uL)(f.Z5c.CHANNEL(e, _)) : null != h && (0, a.Z)(h), null != _ && null != n && (0, d.Z)(_) && (r.Z.selectParticipant(_, (0, o.oW)(n.applicationId)), r.Z.updateLayout(_, f.AEg.NO_CHAT));
}
