n.d(t, { Z: () => _ });
var i = n(475179),
    r = n(812206),
    a = n(413523),
    s = n(776862),
    o = n(703656),
    l = n(317381),
    u = n(531826),
    c = n(16609),
    d = n(917107),
    f = n(981631);
function _(e, t) {
    let n = l.ZP.getSelfEmbeddedActivityForLocation(t),
        _ = r.Z.getApplication(null == n ? void 0 : n.applicationId),
        p = (0, c.p)(null == n ? void 0 : n.location),
        h = (0, u.ZP)({
            application: _,
            channelId: p
        });
    null == h && null != p ? (0, o.uL)(f.Z5c.CHANNEL(e, p)) : null != h && (0, s.Z)(h), null != p && null != n && (0, d.Z)(p) && (i.Z.selectParticipant(p, (0, a.oW)(n.applicationId)), i.Z.updateLayout(p, f.AEg.NO_CHAT));
}
