n.d(e, { AS: () => p, Du: () => E, kF: () => h, ug: () => s, wv: () => d, xI: () => R });
var i = n(587895),
    r = n(321191),
    l = n(808728),
    _ = n(71393),
    u = n(576705),
    a = n(164892),
    o = n(246338),
    c = n(652215);
function E(t) {
    return i.A.getApplication(t.application_id)?.bot?.id ?? t.application_id;
}
function s(t) {
    let e = t.preview_application_id;
    return null == e ? null : (i.A.getApplication(e)?.bot?.id ?? e);
}
function p(t, e) {
    if (null == e) return null;
    let n = r.A.getMutualGuilds(E(t));
    return null == n
        ? null
        : n.some((t) => {
              let { guild: n } = t;
              return n.id === e;
          });
}
function d(t, e) {
    return (null != e && u.A.canManageUser(c.xBc.KICK_MEMBERS, e, t)) || u.A.can(c.xBc.MANAGE_GUILD, t);
}
function R(t, e) {
    return l.Ay.getChannels(t)
        [l.I6].map((t) => {
            let { channel: e } = t;
            return e;
        })
        .filter((t) => (0, o.us)(t) === e);
}
function h(t) {
    if ("user" === t.install_scope || null == t.guild_id || null == _.A.getGuild(t.guild_id)) return null;
    let e = p(t, t.guild_id);
    return !0 === e || R(t.guild_id, t.application_id).length > 0
        ? "in_server"
        : (t.supported_surfaces?.length ?? 0) > 0 && ((0, a.Hv)(t) || !1 === e)
          ? "not_in_server"
          : null;
}
