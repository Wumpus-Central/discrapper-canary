r.d(n, {
    h: function () {
        return p;
    }
});
var i = r(733860);
var a = r(192379),
    o = r(399606),
    s = r(496675),
    l = r(771845),
    u = r(594174),
    c = r(74538),
    d = r(981631),
    f = r(231338);
function p(e, n) {
    var r;
    let i = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        p = null !== (r = null == e ? void 0 : e.guild_id) && void 0 !== r ? r : d.lds,
        h = (0, o.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()),
        _ = (0, o.e7)([s.Z], () => null == e || null == e.guild_id || s.Z.can(f.Pl.USE_EXTERNAL_SOUNDS, e));
    return a.useMemo(() => {
        if ((c.ZP.canUseSoundboardEverywhere(i) || !n) && _) {
            let e = '' !== p,
                n = e ? h.filter((e) => e !== p) : h;
            return e && n.unshift(p), n;
        }
        return [p];
    }, [i, n, p, h, _]);
}
