a.d(t, { Jf: () => m, TA: () => u, VF: () => p, hH: () => d, nL: () => _, pp: () => c });
var n = a(64700),
    i = a(735438),
    l = a(58149),
    s = a(734057),
    r = a(954571),
    o = a(652215);
function c(e, t, a) {
    r.default.track(o.HAw.FORWARD_MESSAGE_STARTED, { channel_id: e, message_id: t, source: a });
}
function d(e) {
    let { channelId: t, messageId: a, numDestinationChanges: n, numQueryChanges: i } = e;
    r.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: a,
        num_destination_changes: n,
        num_query_changes: i,
    });
}
function u(e) {
    let {
        channelId: t,
        messageId: a,
        hasError: n,
        hasContextMessage: i,
        numDestinations: c,
        numDestinationChanges: d,
        numQueryChanges: u,
        anyDestinationHasSlowmode: m,
        source: _,
    } = e;
    if (
        (r.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: a,
            has_error: n,
            has_context_message: i,
            num_destinations: c,
            num_destination_changes: d,
            num_query_changes: u,
            any_destination_has_slowmode: m,
        }),
        "message-shortcut" === _)
    ) {
        let e = s.A.getChannel(t);
        r.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: a,
            ...(0, l.H$)(e?.guild_id),
            ...(0, l.dI)(e),
        });
    }
}
function m() {
    return n.useMemo(
        () =>
            (0, i.once)((e, t, a) => {
                r.default.track(o.HAw.FORWARD_ADD_RECIPIENT, { channel_id: e, message_id: t, has_query: a });
            }),
        [],
    );
}
function _() {
    return n.useMemo(
        () =>
            (0, i.once)((e, t) => {
                r.default.track(o.HAw.FORWARD_EDIT_SEARCH, { channel_id: e, message_id: t });
            }),
        [],
    );
}
function p() {
    return n.useMemo(
        () =>
            (0, i.once)((e, t) => {
                r.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: e, message_id: t });
            }),
        [],
    );
}
