n.d(t, { E: () => s });
var r = n(442837),
    i = n(496675),
    o = n(574176),
    a = n(231338);
function s(e, t) {
    let { enableHangStatus: n } = o.n.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: e,
        }),
        s = (0, r.e7)([i.Z], () => i.Z.can(a.Pl.CONNECT, t));
    return n && s;
}
