n.d(t, { Z: () => s });
var r = n(772848),
    i = n(570140),
    l = n(643327);
let s = {
    createGroup(e) {
        let t = (0, r.Z)();
        return (
            i.Z.dispatch({
                type: "CREATE_FRIEND_GROUP",
                groupId: t,
                name: e,
            }),
            t
        );
    },
    updateGroup(e, t) {
        i.Z.dispatch({
            type: "UPDATE_FRIEND_GROUP",
            groupId: e,
            name: t,
        });
    },
    deleteGroup(e) {
        i.Z.dispatch({
            type: "DELETE_FRIEND_GROUP",
            groupId: e,
        });
    },
    reorderGroups(e) {
        i.Z.dispatch({
            type: "REORDER_FRIEND_GROUPS",
            groupIds: e,
        });
    },
    addUsersToGroup(e, t) {
        let n = Array.isArray(t) ? t : [t];
        i.Z.dispatch({
            type: "ADD_USERS_TO_GROUP",
            groupId: e,
            userIds: n,
        });
    },
    removeUsersFromGroup(e, t) {
        let n = Array.isArray(t) ? t : [t];
        i.Z.dispatch({
            type: "REMOVE_USERS_FROM_GROUP",
            groupId: e,
            userIds: n,
        });
    },
    toggleUserInGroup(e, t) {
        let n = l.Z.getGroup(e);
        null != n && (n.userIds.includes(t) ? this.removeUsersFromGroup(e, t) : this.addUsersToGroup(e, t));
    },
};
