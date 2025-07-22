n.d(t, { E: () => s });
var r = n(442837),
    i = n(496675),
    a = n(574176),
    o = n(231338);
function s(e, t) {
    let { enableHangStatus: n } = a.n.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: e
        }),
        s = (0, r.e7)([i.Z], () => i.Z.can(o.Pl.CONNECT, t));
    return n && s;
}
