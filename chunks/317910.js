i.d(e, { A: () => s });
var t = i(627968);
i(64700);
var l = i(17928),
    a = i(477782),
    r = i(435183),
    d = i(526132),
    c = i(576705),
    o = i(652215),
    u = i(985018);
function s(n) {
    let {
        canManageChannels: e,
        canManageRoles: i,
        canManageWebhooks: s,
        canAccessChannel: A,
        canUnlinkChannel: _,
    } = (0, l.cf)(
        [c.A],
        () => ({
            canManageChannels: c.A.can(o.xBc.MANAGE_CHANNELS, n),
            canManageRoles: c.A.can(o.xBc.MANAGE_ROLES, n),
            canManageWebhooks: c.A.can(o.xBc.MANAGE_WEBHOOKS, n),
            canAccessChannel: c.A.can(n.accessPermissions, n),
            canUnlinkChannel: (0, d.n)(n, c.A),
        }),
        [n],
    );
    return !__OVERLAY__ && A && (e || i || s || _)
        ? (0, t.jsx)(a.Dr, {
              id: "edit-channel",
              label: n.type === o.rbe.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs9) : u.intl.string(u.t["3gUsJb"]),
              action: () => r.Ay.open(n.id),
          })
        : null;
}
