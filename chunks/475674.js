n.d(t, { Z: () => d });
var l = n(442837),
    i = n(199902),
    r = n(314897),
    a = n(858340),
    s = n(959457),
    o = n(557457),
    u = n(614963),
    c = n(981631);
function d(e) {
    let t = (0, o.Wc)(e),
        n = e.stream.guildId,
        d = e.stream.ownerId;
    return (0, l.e7)(
        [s.Z, a.Z, r.default, i.Z],
        () => {
            if (null == d) return null;
            let e = d === r.default.getId();
            if (!e && null == i.Z.getActiveStreamForUser(d, n)) return null;
            let l = e && null != a.Z.getHookError(c.K3D.SOUND);
            return (0, u.Z)(s.Z.getQuality(), s.Z.getStatsHistory(n, d, e), l, t);
        },
        [t, n, d]
    );
}
