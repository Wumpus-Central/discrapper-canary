n.d(t, { c$: () => l, Nh: () => u, kQ: () => s });
var o,
    r = n(136722),
    i = n(441574),
    a =
        (((o = {})[(o.INCREASED_FILE_UPLOAD_SIZE = 0)] = "INCREASED_FILE_UPLOAD_SIZE"),
        (o[(o.INCREASED_GUILD_LIMIT = 1)] = "INCREASED_GUILD_LIMIT"),
        o);
function l(e) {
    if (null == e) return null;
    let t = {};
    for (let [n, o] of Object.entries(e.config_by_perk))
        t[n] = {
            source: o.source,
            kind: (function (e) {
                if (null != e.kind)
                    switch (e.kind.type) {
                        case a.INCREASED_FILE_UPLOAD_SIZE:
                            return { type: a.INCREASED_FILE_UPLOAD_SIZE, maxSize: e.kind.max_size };
                        case a.INCREASED_GUILD_LIMIT:
                            return { type: a.INCREASED_GUILD_LIMIT, maxGuilds: e.kind.max_guilds };
                        default:
                            return;
                    }
            })(o),
        };
    return { activePerksBitmask: e.active_perks_bitmask, configByPerk: t, rulesVersion: e.rules_version };
}
function u(e, t) {
    if (null == e) return !1;
    let n = e.activePerksBitmask,
        o = Math.floor(t / 64);
    return !(o >= n.length) && r.zy(r.iu(n[o]), r.jB(t % 64));
}
function s(e, t) {
    if (null == e) return;
    let n = e.configByPerk[String(t)];
    return n?.source != null ? n.source : u(e, t) ? [i.g$.SOURCE_NITRO] : void 0;
}
