n.d(t, { Z: () => r });
var i = n(570140);
let r = {
    search(e, t) {
        i.Z.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
            query: e,
            channelId: t,
        });
    },
    clear(e) {
        i.Z.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
            query: "",
            channelId: e,
        });
    },
    select(e) {
        i.Z.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT",
            row: e,
        });
    },
    addUser(e) {
        i.Z.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER",
            userId: e,
        });
    },
    removeUser(e) {
        i.Z.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER",
            userId: e,
        });
    },
    open(e) {
        i.Z.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN",
            channelId: e,
        });
    },
    close() {
        i.Z.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
