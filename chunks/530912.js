"use strict";
n.d(t, { Jf: () => m, TA: () => u, VF: () => h, hH: () => d, nL: () => f, pp: () => o });
var a = n(64700),
    i = n(735438),
    l = n(58149),
    r = n(734057),
    s = n(954571),
    c = n(652215);
function o(e, t, n) {
    s.default.track(c.HAw.FORWARD_MESSAGE_STARTED, { channel_id: e, message_id: t, source: n });
}
function d(e) {
    let { channelId: t, messageId: n, numDestinationChanges: a, numQueryChanges: i } = e;
    s.default.track(c.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: a,
        num_query_changes: i,
    });
}
function u(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: a,
        hasContextMessage: i,
        numDestinations: o,
        numDestinationChanges: d,
        numQueryChanges: u,
        anyDestinationHasSlowmode: m,
        source: f,
    } = e;
    if (
        (s.default.track(c.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: a,
            has_context_message: i,
            num_destinations: o,
            num_destination_changes: d,
            num_query_changes: u,
            any_destination_has_slowmode: m,
        }),
        "message-shortcut" === f)
    ) {
        let e = r.A.getChannel(t);
        s.default.track(c.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, l.H$)(e?.guild_id),
            ...(0, l.dI)(e),
        });
    }
}
function m() {
    return a.useMemo(
        () =>
            (0, i.once)((e, t, n) => {
                s.default.track(c.HAw.FORWARD_ADD_RECIPIENT, { channel_id: e, message_id: t, has_query: n });
            }),
        [],
    );
}
function f() {
    return a.useMemo(
        () =>
            (0, i.once)((e, t) => {
                s.default.track(c.HAw.FORWARD_EDIT_SEARCH, { channel_id: e, message_id: t });
            }),
        [],
    );
}
function h() {
    return a.useMemo(
        () =>
            (0, i.once)((e, t) => {
                s.default.track(c.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: e, message_id: t });
            }),
        [],
    );
}
