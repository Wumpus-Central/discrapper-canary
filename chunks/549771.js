n.d(t, { h: () => d }), n(733860);
var r = n(192379),
    i = n(399606),
    o = n(496675),
    a = n(771845),
    s = n(594174),
    l = n(74538),
    c = n(981631),
    u = n(231338);
function d(e, t) {
    var n;
    let d = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        f = null != (n = null == e ? void 0 : e.guild_id) ? n : c.lds,
        _ = (0, i.e7)([a.ZP], () => a.ZP.getFlattenedGuildIds()),
        p = (0, i.e7)([o.Z], () => null == e || null == e.guild_id || o.Z.can(u.Pl.USE_EXTERNAL_SOUNDS, e));
    return r.useMemo(() => {
        if ((l.ZP.canUseSoundboardEverywhere(d) || !t) && p) {
            let e = '' !== f,
                t = e ? _.filter((e) => e !== f) : _;
            return e && t.unshift(f), t;
        }
        return [f];
    }, [d, t, f, _, p]);
}
