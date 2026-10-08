n.d(e, { AS: () => c, Du: () => a, kF: () => s, xI: () => E });
var i = n(587895),
    r = n(321191),
    _ = n(808728),
    l = n(71393),
    u = n(164892),
    o = n(246338);
function a(t) {
    return i.A.getApplication(t.application_id)?.bot?.id ?? t.application_id;
}
function c(t, e) {
    if (null == e) return null;
    let n = r.A.getMutualGuilds(a(t));
    return null == n
        ? null
        : n.some((t) => {
              let { guild: n } = t;
              return n.id === e;
          });
}
function E(t, e) {
    return _.Ay.getChannels(t)
        [_.I6].map((t) => {
            let { channel: e } = t;
            return e;
        })
        .filter((t) => (0, o.us)(t) === e);
}
function s(t) {
    if ("user" === t.install_scope || null == t.guild_id || null == l.A.getGuild(t.guild_id)) return null;
    let e = c(t, t.guild_id);
    return !0 === e || E(t.guild_id, t.application_id).length > 0
        ? "in_server"
        : (t.supported_surfaces?.length ?? 0) > 0 && ((0, u.KQ)(t) || !1 === e)
          ? "not_in_server"
          : null;
}
