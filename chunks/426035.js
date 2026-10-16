n.d(e, { AS: () => h, Du: () => d, kF: () => p, ug: () => E, wv: () => s, xI: () => C });
var r = n(587895),
    i = n(321191),
    l = n(808728),
    a = n(71393),
    o = n(576705),
    u = n(246338),
    c = n(951178),
    _ = n(652215);
function d(t) {
    return r.A.getApplication(t.application_id)?.bot?.id ?? t.application_id;
}
function E(t) {
    let e = t.preview_application_id;
    return null == e ? null : (r.A.getApplication(e)?.bot?.id ?? e);
}
function h(t, e) {
    if (null == e) return null;
    let n = i.A.getMutualGuilds(d(t));
    return null == n
        ? null
        : n.some((t) => {
              let { guild: n } = t;
              return n.id === e;
          });
}
function s(t, e) {
    return (null != e && o.A.canManageUser(_.xBc.KICK_MEMBERS, e, t)) || o.A.can(_.xBc.MANAGE_GUILD, t);
}
function C(t, e) {
    return l.Ay.getChannels(t)
        [l.I6].map((t) => {
            let { channel: e } = t;
            return e;
        })
        .filter((t) => (0, u.us)(t) === e);
}
function p(t) {
    if ("user" === t.install_scope || null == t.guild_id || null == a.A.getGuild(t.guild_id)) return null;
    let e = h(t, t.guild_id);
    return !0 === e || C(t.guild_id, t.application_id).length > 0
        ? "in_server"
        : (t.supported_surfaces?.length ?? 0) > 0 && ((0, c.Hv)(t) || !1 === e)
          ? "not_in_server"
          : null;
}
