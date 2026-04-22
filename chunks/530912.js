"use strict";
n.d(t, { Jf: () => _, TA: () => d, VF: () => m, hH: () => u, nL: () => p, pp: () => c });
var i = n(64700),
    a = n(735438),
    r = n(58149),
    l = n(734057),
    s = n(954571),
    o = n(652215);
function c(e, t, n) {
    s.default.track(o.HAw.FORWARD_MESSAGE_STARTED, { channel_id: e, message_id: t, source: n });
}
function u(e) {
    let { channelId: t, messageId: n, numDestinationChanges: i, numQueryChanges: a } = e;
    s.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: i,
        num_query_changes: a,
    });
}
function d(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: i,
        hasContextMessage: a,
        numDestinations: c,
        numDestinationChanges: u,
        numQueryChanges: d,
        anyDestinationHasSlowmode: _,
        source: p,
    } = e;
    if (
        (s.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: i,
            has_context_message: a,
            num_destinations: c,
            num_destination_changes: u,
            num_query_changes: d,
            any_destination_has_slowmode: _,
        }),
        "message-shortcut" === p)
    ) {
        let e = l.A.getChannel(t);
        s.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, r.H$)(e?.guild_id),
            ...(0, r.dI)(e),
        });
    }
}
function _() {
    return i.useMemo(
        () =>
            (0, a.once)((e, t, n) => {
                s.default.track(o.HAw.FORWARD_ADD_RECIPIENT, { channel_id: e, message_id: t, has_query: n });
            }),
        [],
    );
}
function p() {
    return i.useMemo(
        () =>
            (0, a.once)((e, t) => {
                s.default.track(o.HAw.FORWARD_EDIT_SEARCH, { channel_id: e, message_id: t });
            }),
        [],
    );
}
function m() {
    return i.useMemo(
        () =>
            (0, a.once)((e, t) => {
                s.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: e, message_id: t });
            }),
        [],
    );
}
