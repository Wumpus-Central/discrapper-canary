n.d(t, { Z: () => c });
var r = n(812206),
    i = n(307643),
    a = n(973616),
    o = n(592125),
    s = n(566620),
    l = n(969345);
async function c(e, t) {
    var n;
    let c = r.Z.getApplication(e);
    if (u(c)) return c;
    let d = null == (n = o.Z.getChannel(t)) ? void 0 : n.guild_id,
        { activityConfigs: f, applications: p } = await (0, s.w1)({ guildId: d }),
        _ = (0, l.Z)({
            applicationId: e,
            activityConfigs: f,
            applications: p,
        });
    if (u(null == _ ? void 0 : _.application)) return null == _ ? void 0 : _.application;
    {
        let t = await (0, i.UM)(e);
        return a.ZP.createFromServer(t);
    }
}
function u(e) {
    return null != e && null != e.embeddedActivityConfig;
}
