t.d(n, { D: () => l });
var r = t(442837),
    i = t(704215),
    a = t(605236),
    o = t(496675),
    c = t(981631);
function l(e) {
    var n;
    let t = (0, r.e7)([o.Z], () => o.Z.can(c.Plq.ADMINISTRATOR, e)),
        l = null == e ? void 0 : e.features.has(c.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE),
        s = (0, a.OA)(
            i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
            null != (n = null == e ? void 0 : e.id) ? n : c.lds,
        );
    return t && !l && !s;
}
