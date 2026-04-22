n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(435183),
    u = n(526132),
    o = n(576705),
    s = n(652215),
    d = n(985018);
function c(e) {
    let {
        canManageChannels: t,
        canManageRoles: n,
        canManageWebhooks: c,
        canAccessChannel: E,
        canUnlinkChannel: _,
    } = (0, i.cf)(
        [o.A],
        () => ({
            canManageChannels: o.A.can(s.xBc.MANAGE_CHANNELS, e),
            canManageRoles: o.A.can(s.xBc.MANAGE_ROLES, e),
            canManageWebhooks: o.A.can(s.xBc.MANAGE_WEBHOOKS, e),
            canAccessChannel: o.A.can(e.accessPermissions, e),
            canUnlinkChannel: (0, u.n)(e, o.A),
        }),
        [e],
    );
    return !__OVERLAY__ && E && (t || n || c || _)
        ? (0, l.jsx)(r.Dr, {
              id: "edit-channel",
              label: e.type === s.rbe.GUILD_CATEGORY ? d.intl.string(d.t.zdPFs9) : d.intl.string(d.t["3gUsJb"]),
              action: () => a.Ay.open(e.id),
          })
        : null;
}
