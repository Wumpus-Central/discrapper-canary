r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(812206),
    a = r(307643),
    o = r(973616),
    s = r(592125),
    l = r(566620),
    u = r(969345);
async function c(e, n) {
    var r;
    let c = i.Z.getApplication(e);
    if (d(c)) return c;
    let f = null === (r = s.Z.getChannel(n)) || void 0 === r ? void 0 : r.guild_id,
        { activityConfigs: p, applications: h } = await (0, l.w1)({ guildId: f }),
        _ = (0, u.Z)({
            applicationId: e,
            activityConfigs: p,
            applications: h
        });
    if (d(null == _ ? void 0 : _.application)) return null == _ ? void 0 : _.application;
    {
        let n = await (0, a.UM)(e);
        return o.ZP.createFromServer(n);
    }
}
function d(e) {
    return null != e && null != e.embeddedActivityConfig && !0;
}
