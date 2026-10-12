n.d(e, { AS: () => E, Du: () => d, kF: () => f, ug: () => _, wv: () => C, xI: () => h });
var r = n(587895),
    i = n(321191),
    l = n(808728),
    u = n(71393),
    o = n(576705),
    a = n(246338),
    c = n(951178),
    s = n(652215);
function d(t) {
    return r.A.getApplication(t.application_id)?.bot?.id ?? t.application_id;
}
function _(t) {
    let e = t.preview_application_id;
    return null == e ? null : (r.A.getApplication(e)?.bot?.id ?? e);
}
function E(t, e) {
    if (null == e) return null;
    let n = i.A.getMutualGuilds(d(t));
    return null == n
        ? null
        : n.some((t) => {
              let { guild: n } = t;
              return n.id === e;
          });
}
function C(t, e) {
    return (null != e && o.A.canManageUser(s.xBc.KICK_MEMBERS, e, t)) || o.A.can(s.xBc.MANAGE_GUILD, t);
}
function h(t, e) {
    return l.Ay.getChannels(t)
        [l.I6].map((t) => {
            let { channel: e } = t;
            return e;
        })
        .filter((t) => (0, a.us)(t) === e);
}
function f(t) {
    if ("user" === t.install_scope || null == t.guild_id || null == u.A.getGuild(t.guild_id)) return null;
    let e = E(t, t.guild_id);
    return !0 === e || h(t.guild_id, t.application_id).length > 0
        ? "in_server"
        : (t.supported_surfaces?.length ?? 0) > 0 && ((0, c.Hv)(t) || !1 === e)
          ? "not_in_server"
          : null;
}
