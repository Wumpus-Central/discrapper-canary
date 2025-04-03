n.d(t, { Z: () => i });
var r = n(570140);
let i = {
    search(e, t) {
        r.Z.dispatch({
            type: 'PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY',
            query: e,
            channelId: t
        });
    },
    clear(e) {
        r.Z.dispatch({
            type: 'PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY',
            query: '',
            channelId: e
        });
    },
    select(e) {
        r.Z.dispatch({
            type: 'PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT',
            row: e
        });
    },
    addUser(e) {
        r.Z.dispatch({
            type: 'PRIVATE_CHANNEL_RECIPIENTS_ADD_USER',
            userId: e
        });
    },
    removeUser(e) {
        r.Z.dispatch({
            type: 'PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER',
            userId: e
        });
    },
    open(e) {
        r.Z.dispatch({
            type: 'PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN',
            channelId: e
        });
    },
    close() {
        r.Z.dispatch({ type: 'PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE' });
    }
};
