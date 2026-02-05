i.d(t, { A: () => r });
var n = i(311907),
    l = i(576705),
    s = i(652215);
function r(e) {
    let {
        canManageGuild: t,
        canManageRoles: i,
        canBanMembers: r,
        canManageNicknames: a,
        canCreateEmojisAndStickers: d,
        canManageEmojisAndStickers: o,
        canManageWebhooks: c,
        canViewAuditLog: u,
    } = (0, n.cf)(
        [l.A],
        () => ({
            canManageGuild: l.A.can(s.xBc.MANAGE_GUILD, e),
            canManageRoles: l.A.can(s.xBc.MANAGE_ROLES, e),
            canBanMembers: l.A.can(s.xBc.BAN_MEMBERS, e),
            canManageNicknames: l.A.can(s.xBc.MANAGE_NICKNAMES, e),
            canCreateEmojisAndStickers: l.A.can(s.xBc.CREATE_GUILD_EXPRESSIONS, e),
            canManageEmojisAndStickers: l.A.can(s.xBc.MANAGE_GUILD_EXPRESSIONS, e),
            canManageWebhooks: l.A.can(s.xBc.MANAGE_WEBHOOKS, e),
            canViewAuditLog: l.A.can(s.xBc.VIEW_AUDIT_LOG, e),
        }),
        [e],
    );
    return t || i || r || a || d || o || c || u;
}
