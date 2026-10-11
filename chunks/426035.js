n.d(e, { AS: () => E, Du: () => _, kF: () => C, ug: () => d, wv: () => h, xI: () => p });
var r = n(587895),
    i = n(321191),
    l = n(808728),
    u = n(71393),
    a = n(576705),
    o = n(246338),
    c = n(951178),
    s = n(652215);
function _(t) {
    return r.A.getApplication(t.application_id)?.bot?.id ?? t.application_id;
}
function d(t) {
    let e = t.preview_application_id;
    return null == e ? null : (r.A.getApplication(e)?.bot?.id ?? e);
}
function E(t, e) {
    if (null == e) return null;
    let n = i.A.getMutualGuilds(_(t));
    return null == n
        ? null
        : n.some((t) => {
              let { guild: n } = t;
              return n.id === e;
          });
}
function h(t, e) {
    return (null != e && a.A.canManageUser(s.xBc.KICK_MEMBERS, e, t)) || a.A.can(s.xBc.MANAGE_GUILD, t);
}
function p(t, e) {
    return l.Ay.getChannels(t)
        [l.I6].map((t) => {
            let { channel: e } = t;
            return e;
        })
        .filter((t) => (0, o.us)(t) === e);
}
function C(t) {
    if ("user" === t.install_scope || null == t.guild_id || null == u.A.getGuild(t.guild_id)) return null;
    let e = E(t, t.guild_id);
    return !0 === e || p(t.guild_id, t.application_id).length > 0
        ? "in_server"
        : (t.supported_surfaces?.length ?? 0) > 0 && ((0, c.Hv)(t) || !1 === e)
          ? "not_in_server"
          : null;
}
