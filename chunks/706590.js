n.d(t, {
    Z: () => _,
    z: () => f
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(442837),
    a = n(592125),
    s = n(496675),
    l = n(709054),
    c = n(853856),
    u = n(362658),
    d = n(231338);
function f(e, t, n) {
    let { canShow: r, isFavoritesPerk: o } = u.Z.getCurrentConfig({ location: 'isFavoritesGuildVisible' }, { autoTrackExposure: !1 });
    if (o) return !0;
    if (!r) return !1;
    let a = e.getFavoriteChannels();
    if (i().isEmpty(a)) return !1;
    let s = l.default.keys(a).filter((e) => {
        let r = t.getChannel(e);
        return null != r && (!!r.isPrivate() || n.can(d.Pl.VIEW_CHANNEL, r));
    });
    return !i().isEmpty(s);
}
function _() {
    let { canShow: e, isFavoritesPerk: t } = (0, u.z)('useIsFavoritesGuildVisible'),
        n = (0, o.e7)([c.Z, a.Z, s.Z], () => e && f(c.Z, a.Z, s.Z));
    return !!t || n;
}
