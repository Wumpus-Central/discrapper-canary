n.d(t, {
    Z: () => _,
    z: () => f
}),
    n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(592125),
    s = n(496675),
    l = n(709054),
    c = n(853856),
    u = n(362658),
    d = n(231338);
function f(e, t, n) {
    let { canShow: r, isFavoritesPerk: a } = u.Z.getCurrentConfig({ location: 'isFavoritesGuildVisible' }, { autoTrackExposure: !1 });
    if (a) return !0;
    if (!r) return !1;
    let o = e.getFavoriteChannels();
    if (i().isEmpty(o)) return !1;
    let s = l.default.keys(o).filter((e) => {
        let r = t.getChannel(e);
        return null != r && (!!r.isPrivate() || n.can(d.Pl.VIEW_CHANNEL, r));
    });
    return !i().isEmpty(s);
}
function _() {
    let { canShow: e, isFavoritesPerk: t } = (0, u.z)('useIsFavoritesGuildVisible'),
        n = (0, a.e7)([c.Z, o.Z, s.Z], () => e && f(c.Z, o.Z, s.Z));
    return !!t || n;
}
