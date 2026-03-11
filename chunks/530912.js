n.d(e, { Jf: () => A, TA: () => d, VF: () => g, hH: () => o, nL: () => _, pp: () => c });
var r = n(64700),
    a = n(735438),
    s = n(58149),
    i = n(734057),
    l = n(954571),
    u = n(652215);
function c(t, e, n) {
    l.default.track(u.HAw.FORWARD_MESSAGE_STARTED, { channel_id: t, message_id: e, source: n });
}
function o(t) {
    let { channelId: e, messageId: n, numDestinationChanges: r, numQueryChanges: a } = t;
    l.default.track(u.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: e,
        message_id: n,
        num_destination_changes: r,
        num_query_changes: a,
    });
}
function d(t) {
    let {
        channelId: e,
        messageId: n,
        hasError: r,
        hasContextMessage: a,
        numDestinations: c,
        numDestinationChanges: o,
        numQueryChanges: d,
        anyDestinationHasSlowmode: A,
        source: _,
    } = t;
    if (
        (l.default.track(u.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: e,
            message_id: n,
            has_error: r,
            has_context_message: a,
            num_destinations: c,
            num_destination_changes: o,
            num_query_changes: d,
            any_destination_has_slowmode: A,
        }),
        "message-shortcut" === _)
    ) {
        let t = i.A.getChannel(e);
        l.default.track(u.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, s.H$)(t?.guild_id),
            ...(0, s.dI)(t),
        });
    }
}
function A() {
    return r.useMemo(
        () =>
            (0, a.once)((t, e, n) => {
                l.default.track(u.HAw.FORWARD_ADD_RECIPIENT, { channel_id: t, message_id: e, has_query: n });
            }),
        [],
    );
}
function _() {
    return r.useMemo(
        () =>
            (0, a.once)((t, e) => {
                l.default.track(u.HAw.FORWARD_EDIT_SEARCH, { channel_id: t, message_id: e });
            }),
        [],
    );
}
function g() {
    return r.useMemo(
        () =>
            (0, a.once)((t, e) => {
                l.default.track(u.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: t, message_id: e });
            }),
        [],
    );
}
