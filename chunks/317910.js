n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(435183),
    c = n(526132),
    o = n(576705),
    u = n(652215),
    s = n(985018);
function d(e) {
    let {
        canManageChannels: t,
        canManageRoles: n,
        canManageWebhooks: d,
        canAccessChannel: b,
        canUnlinkChannel: p,
    } = (0, i.cf)(
        [o.A],
        () => ({
            canManageChannels: o.A.can(u.xBc.MANAGE_CHANNELS, e),
            canManageRoles: o.A.can(u.xBc.MANAGE_ROLES, e),
            canManageWebhooks: o.A.can(u.xBc.MANAGE_WEBHOOKS, e),
            canAccessChannel: o.A.can(e.accessPermissions, e),
            canUnlinkChannel: (0, c.n)(e, o.A),
        }),
        [e],
    );
    return !__OVERLAY__ && b && (t || n || d || p)
        ? (0, r.jsx)(l.Drp, {
              id: "edit-channel",
              label: e.type === u.rbe.GUILD_CATEGORY ? s.intl.string(s.t.zdPFs9) : s.intl.string(s.t["3gUsJb"]),
              action: () => a.Ay.open(e.id),
          })
        : null;
}
