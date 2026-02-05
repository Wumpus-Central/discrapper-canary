e.d(t, { A: () => o });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(435183),
    d = e(526132),
    s = e(576705),
    c = e(652215),
    u = e(985018);
function o(n) {
    let {
        canManageChannels: t,
        canManageRoles: e,
        canManageWebhooks: o,
        canAccessChannel: A,
        canUnlinkChannel: g,
    } = (0, l.cf)(
        [s.A],
        () => ({
            canManageChannels: s.A.can(c.xBc.MANAGE_CHANNELS, n),
            canManageRoles: s.A.can(c.xBc.MANAGE_ROLES, n),
            canManageWebhooks: s.A.can(c.xBc.MANAGE_WEBHOOKS, n),
            canAccessChannel: s.A.can(n.accessPermissions, n),
            canUnlinkChannel: (0, d.n)(n, s.A),
        }),
        [n],
    );
    return !__OVERLAY__ && A && (t || e || o || g)
        ? (0, i.jsx)(r.Drp, {
              id: "edit-channel",
              label: n.type === c.rbe.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs9) : u.intl.string(u.t["3gUsJb"]),
              action: () => a.Ay.open(n.id),
          })
        : null;
}
