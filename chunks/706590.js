n.d(t, {
    Z: () => _,
    z: () => f
}),
    n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(442837),
    s = n(592125),
    o = n(496675),
    l = n(709054),
    u = n(853856),
    c = n(362658),
    d = n(231338);
function f(e, t, n) {
    let { canShow: i, isFavoritesPerk: a } = c.Z.getCurrentConfig({ location: 'isFavoritesGuildVisible' }, { autoTrackExposure: !1 });
    if (a) return !0;
    if (!i) return !1;
    let s = e.getFavoriteChannels();
    if (r().isEmpty(s)) return !1;
    let o = l.default.keys(s).filter((e) => {
        let i = t.getChannel(e);
        return null != i && (!!i.isPrivate() || n.can(d.Pl.VIEW_CHANNEL, i));
    });
    return !r().isEmpty(o);
}
function _() {
    let { canShow: e, isFavoritesPerk: t } = (0, c.z)('useIsFavoritesGuildVisible'),
        n = (0, a.e7)([u.Z, s.Z, o.Z], () => e && f(u.Z, s.Z, o.Z));
    return !!t || n;
}
