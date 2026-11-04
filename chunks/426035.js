var i = n(803306),
    r = n(587895),
    a = n(851767),
    s = n(808728),
    l = n(71393),
    o = n(576705),
    d = n(246338),
    c = n(951178),
    u = n(652215);
function _(e) {
    return r.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function E(e) {
    let t = e.preview_application_id;
    return null == t ? null : (r.A.getApplication(t)?.bot?.id ?? t);
}
function A(e, t) {
    if (null == t) return null;
    let n = a.A.getMutualGuilds(_(e));
    return null == n
        ? null
        : n.some((e) => {
              let { guild: n } = e;
              return n.id === t;
          });
}
function h(e, t) {
    return s.A.getChannels(e)
        [s.I].map((e) => {
            let { channel: t } = e;
            return t;
        })
        .filter((e) => (0, d.us)(e) === t);
}
n.d(
    t,
    {},
    {
        AS: A,
        Du: _,
        cC: async function (e, t) {
            let n = [_(e), E(e)],
                r = await Promise.all(
                    n.map(async (e) => {
                        if (null == e) return !1;
                        try {
                            await (0, i.eO)(e, { withMutualGuilds: !0 });
                        } catch {
                            return null;
                        }
                        let n = a.A.getMutualGuilds(e);
                        return null == n
                            ? null
                            : n.some((e) => {
                                  let { guild: n } = e;
                                  return n.id === t;
                              });
                    }),
                );
            return !!r.includes(!0) || (!!r.includes(null) && null);
        },
        kF: function (e) {
            if ("guild" !== e.install_scope || null == e.guild_id || null == l.A.getGuild(e.guild_id)) return null;
            let t = A(e, e.guild_id);
            return !0 === t || h(e.guild_id, e.application_id).length > 0
                ? "in_server"
                : (e.supported_surfaces?.length ?? 0) > 0 && ((0, c.Hv)(e) || !1 === t)
                  ? "not_in_server"
                  : null;
        },
        ug: E,
        wv: function (e, t) {
            return (null != t && o.A.canManageUser(u.xBc.KICK_MEMBERS, t, e)) || o.A.can(u.xBc.MANAGE_GUILD, e);
        },
        xI: h,
    },
);
