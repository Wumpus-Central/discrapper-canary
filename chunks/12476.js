var i = n(439372),
    r = n(587426);
function a() {
    r.E.setState({ selectedUserIds: {} });
}
class s extends i.A {
    actions = {
        GUILD_MEMBER_REMOVE: (e) => {
            let { guildId: t, user: n } = e;
            r.E.getState().removeUser(t, n.id);
        },
        GUILD_MEMBER_REMOVE_LOCAL: (e) => {
            let { guildId: t, userId: n } = e;
            r.E.getState().removeUser(t, n);
        },
        GUILD_BAN_ADD: (e) => {
            let { guildId: t, user: n } = e;
            r.E.getState().removeUser(t, n.id);
        },
        GUILD_DELETE: (e) => {
            let { guild: t } = e;
            t.unavailable || r.E.getState().clearSelection(t.id);
        },
        GUILD_SETTINGS_CLOSE: a,
        LOGOUT: a,
    };
}
let l = new s();
n.d(t, {}, { A: l });
