n.d(t, { A: () => s });
var l = n(132500),
    i = n(228366),
    r = n(870391);
let s = {
    createGroup(e) {
        let t = (0, l.A)();
        return i.h.dispatch({ type: "CREATE_FRIEND_GROUP", groupId: t, name: e }), t;
    },
    updateGroup(e, t) {
        i.h.dispatch({ type: "UPDATE_FRIEND_GROUP", groupId: e, name: t });
    },
    deleteGroup(e) {
        i.h.dispatch({ type: "DELETE_FRIEND_GROUP", groupId: e });
    },
    reorderGroups(e) {
        i.h.dispatch({ type: "REORDER_FRIEND_GROUPS", groupIds: e });
    },
    addUsersToGroup(e, t) {
        let n = Array.isArray(t) ? t : [t];
        i.h.dispatch({ type: "ADD_USERS_TO_GROUP", groupId: e, userIds: n });
    },
    removeUsersFromGroup(e, t) {
        let n = Array.isArray(t) ? t : [t];
        i.h.dispatch({ type: "REMOVE_USERS_FROM_GROUP", groupId: e, userIds: n });
    },
    toggleUserInGroup(e, t) {
        let n = r.A.getGroup(e);
        null != n && (n.userIds.includes(t) ? this.removeUsersFromGroup(e, t) : this.addUsersToGroup(e, t));
    },
};
