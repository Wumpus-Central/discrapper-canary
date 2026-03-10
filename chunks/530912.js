"use strict";
n.d(t, { Jf: () => _, TA: () => u, VF: () => h, hH: () => d, nL: () => m, pp: () => c });
var a = n(64700),
    l = n(735438),
    s = n(58149),
    r = n(734057),
    i = n(954571),
    o = n(652215);
function c(e, t, n) {
    i.default.track(o.HAw.FORWARD_MESSAGE_STARTED, { channel_id: e, message_id: t, source: n });
}
function d(e) {
    let { channelId: t, messageId: n, numDestinationChanges: a, numQueryChanges: l } = e;
    i.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
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
        numDestinations: c,
        numDestinationChanges: d,
        numQueryChanges: u,
        anyDestinationHasSlowmode: _,
        source: m,
    } = e;
    if (
        (i.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: a,
            has_context_message: l,
            num_destinations: c,
            num_destination_changes: d,
            num_query_changes: u,
            any_destination_has_slowmode: _,
        }),
        "message-shortcut" === m)
    ) {
        let e = r.A.getChannel(t);
        i.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, s.H$)(e?.guild_id),
            ...(0, s.dI)(e),
        });
    }
}
function _() {
    return a.useMemo(
        () =>
            (0, l.once)((e, t, n) => {
                i.default.track(o.HAw.FORWARD_ADD_RECIPIENT, { channel_id: e, message_id: t, has_query: n });
            }),
        [],
    );
}
function m() {
    return a.useMemo(
        () =>
            (0, l.once)((e, t) => {
                i.default.track(o.HAw.FORWARD_EDIT_SEARCH, { channel_id: e, message_id: t });
            }),
        [],
    );
}
function h() {
    return a.useMemo(
        () =>
            (0, l.once)((e, t) => {
                i.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: e, message_id: t });
            }),
        [],
    );
}
