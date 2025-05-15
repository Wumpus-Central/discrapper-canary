n.d(t, { Z: () => c });
var r = n(812206),
    i = n(307643),
    o = n(973616),
    a = n(592125),
    s = n(566620),
    l = n(969345);
async function c(e, t) {
    var n;
    let c = r.Z.getApplication(e);
    if (u(c)) return c;
    let d = null == (n = a.Z.getChannel(t)) ? void 0 : n.guild_id,
        { activityConfigs: f, applications: _ } = await (0, s.w1)({ guildId: d }),
        p = (0, l.Z)({
            applicationId: e,
            activityConfigs: f,
            applications: _
        });
    if (u(null == p ? void 0 : p.application)) return null == p ? void 0 : p.application;
    {
        let t = await (0, i.UM)(e);
        return o.ZP.createFromServer(t);
    }
}
function u(e) {
    return null != e && null != e.embeddedActivityConfig;
}
