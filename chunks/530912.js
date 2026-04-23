n.d(t, { Jf: () => m, TA: () => u, VF: () => h, hH: () => c, nL: () => _, pp: () => d });
var a = n(64700),
    l = n(735438),
    i = n(58149),
    r = n(734057),
    s = n(954571),
    o = n(652215);
function d(e, t, n) {
    s.default.track(o.HAw.FORWARD_MESSAGE_STARTED, { channel_id: e, message_id: t, source: n });
}
function c(e) {
    let { channelId: t, messageId: n, numDestinationChanges: a, numQueryChanges: l } = e;
    s.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: a,
        num_query_changes: l,
    });
}
function u(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: a,
        hasContextMessage: l,
        numDestinations: d,
        numDestinationChanges: c,
        numQueryChanges: u,
        anyDestinationHasSlowmode: m,
        source: _,
    } = e;
    if (
        (s.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: a,
            has_context_message: l,
            num_destinations: d,
            num_destination_changes: c,
            num_query_changes: u,
            any_destination_has_slowmode: m,
        }),
        "message-shortcut" === _)
    ) {
        let e = r.A.getChannel(t);
        s.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, i.H$)(e?.guild_id),
            ...(0, i.dI)(e),
        });
    }
}
function m() {
    return a.useMemo(
        () =>
            (0, l.once)((e, t, n) => {
                s.default.track(o.HAw.FORWARD_ADD_RECIPIENT, { channel_id: e, message_id: t, has_query: n });
            }),
        [],
    );
}
function _() {
    return a.useMemo(
        () =>
            (0, l.once)((e, t) => {
                s.default.track(o.HAw.FORWARD_EDIT_SEARCH, { channel_id: e, message_id: t });
            }),
        [],
    );
}
function h() {
    return a.useMemo(
        () =>
            (0, l.once)((e, t) => {
                s.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: e, message_id: t });
            }),
        [],
    );
}
