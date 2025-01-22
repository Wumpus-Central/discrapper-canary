r.d(n, {
    Z: function () {
        return _;
    },
    z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(392711),
    o = r.n(a),
    s = r(442837),
    l = r(592125),
    u = r(496675),
    c = r(709054),
    d = r(853856),
    f = r(362658),
    p = r(231338);
function h(e, n, r) {
    let { canShow: i, isFavoritesPerk: a } = f.Z.getCurrentConfig({ location: 'isFavoritesGuildVisible' }, { autoTrackExposure: !1 });
    if (a) return !0;
    if (!i) return !1;
    let s = e.getFavoriteChannels();
    if (o().isEmpty(s)) return !1;
    let l = c.default.keys(s).filter((e) => {
        let i = n.getChannel(e);
        return null != i && (!!i.isPrivate() || r.can(p.Pl.VIEW_CHANNEL, i));
    });
    return !o().isEmpty(l) && !0;
}
function _() {
    let { canShow: e, isFavoritesPerk: n } = (0, f.z)('useIsFavoritesGuildVisible'),
        r = (0, s.e7)([d.Z, l.Z, u.Z], () => e && h(d.Z, l.Z, u.Z));
    return !!n || r;
}
