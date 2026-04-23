i.d(t, { A: () => a });
var n = i(311907),
    s = i(576705),
    l = i(652215);
function a(e) {
    let {
        canManageGuild: t,
        canManageRoles: i,
        canBanMembers: a,
        canManageNicknames: r,
        canCreateEmojisAndStickers: d,
        canManageEmojisAndStickers: o,
        canManageWebhooks: c,
        canViewAuditLog: u,
    } = (0, n.cf)(
        [s.A],
        () => ({
            canManageGuild: s.A.can(l.xBc.MANAGE_GUILD, e),
            canManageRoles: s.A.can(l.xBc.MANAGE_ROLES, e),
            canBanMembers: s.A.can(l.xBc.BAN_MEMBERS, e),
            canManageNicknames: s.A.can(l.xBc.MANAGE_NICKNAMES, e),
            canCreateEmojisAndStickers: s.A.can(l.xBc.CREATE_GUILD_EXPRESSIONS, e),
            canManageEmojisAndStickers: s.A.can(l.xBc.MANAGE_GUILD_EXPRESSIONS, e),
            canManageWebhooks: s.A.can(l.xBc.MANAGE_WEBHOOKS, e),
            canViewAuditLog: s.A.can(l.xBc.VIEW_AUDIT_LOG, e),
        }),
        [e],
    );
    return t || i || a || r || d || o || c || u;
}
