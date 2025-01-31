n.d(t, { Z: () => u });
var i = n(812206),
    r = n(307643),
    a = n(973616),
    s = n(592125),
    o = n(566620),
    l = n(969345);
async function u(e, t) {
    var n;
    let u = i.Z.getApplication(e);
    if (c(u)) return u;
    let d = null === (n = s.Z.getChannel(t)) || void 0 === n ? void 0 : n.guild_id,
        { activityConfigs: f, applications: _ } = await (0, o.w1)({ guildId: d }),
        p = (0, l.Z)({
            applicationId: e,
            activityConfigs: f,
            applications: _
        });
    if (c(null == p ? void 0 : p.application)) return null == p ? void 0 : p.application;
    {
        let t = await (0, r.UM)(e);
        return a.ZP.createFromServer(t);
    }
}
function c(e) {
    return null != e && null != e.embeddedActivityConfig;
}
