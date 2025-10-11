t.d(n, { D: () => s });
var l = t(442837),
    i = t(704215),
    a = t(605236),
    r = t(496675),
    o = t(981631);
function s(e) {
    var n;
    let t = (0, l.e7)([r.Z], () => r.Z.can(o.Plq.ADMINISTRATOR, e)),
        s = null == e ? void 0 : e.features.has(o.oNc.PIN_PERMISSION_MIGRATION_COMPLETE),
        c = (0, a.OA)(
            i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
            null != (n = null == e ? void 0 : e.id) ? n : o.lds,
        );
    return t && !s && !c;
}
