n.d(t, { h: () => d }), n(733860);
var i = n(192379),
    r = n(399606),
    a = n(496675),
    s = n(771845),
    o = n(594174),
    l = n(74538),
    u = n(981631),
    c = n(231338);
function d(e, t) {
    var n;
    let d = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        f = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : u.lds,
        _ = (0, r.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()),
        p = (0, r.e7)([a.Z], () => null == e || null == e.guild_id || a.Z.can(c.Pl.USE_EXTERNAL_SOUNDS, e));
    return i.useMemo(() => {
        if ((l.ZP.canUseSoundboardEverywhere(d) || !t) && p) {
            let e = '' !== f,
                t = e ? _.filter((e) => e !== f) : _;
            return e && t.unshift(f), t;
        }
        return [f];
    }, [d, t, f, _, p]);
}
