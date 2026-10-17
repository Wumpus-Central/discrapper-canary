n.d(t, { AS: () => E, Du: () => u, kF: () => f, ug: () => _, wv: () => A, xI: () => h });
var i = n(587895),
    r = n(321191),
    a = n(808728),
    s = n(71393),
    l = n(576705),
    o = n(246338),
    d = n(951178),
    c = n(652215);
function u(e) {
    return i.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function _(e) {
    let t = e.preview_application_id;
    return null == t ? null : (i.A.getApplication(t)?.bot?.id ?? t);
}
function E(e, t) {
    if (null == t) return null;
    let n = r.A.getMutualGuilds(u(e));
    return null == n
        ? null
        : n.some((e) => {
              let { guild: n } = e;
              return n.id === t;
          });
}
function A(e, t) {
    return (null != t && l.A.canManageUser(c.xBc.KICK_MEMBERS, t, e)) || l.A.can(c.xBc.MANAGE_GUILD, e);
}
function h(e, t) {
    return a.Ay.getChannels(e)
        [a.I6].map((e) => {
            let { channel: t } = e;
            return t;
        })
        .filter((e) => (0, o.us)(e) === t);
}
function f(e) {
    if ("user" === e.install_scope || null == e.guild_id || null == s.A.getGuild(e.guild_id)) return null;
    let t = E(e, e.guild_id);
    return !0 === t || h(e.guild_id, e.application_id).length > 0
        ? "in_server"
        : (e.supported_surfaces?.length ?? 0) > 0 && ((0, d.Hv)(e) || !1 === t)
          ? "not_in_server"
          : null;
}
