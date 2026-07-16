"use strict";
n.d(t, { Jf: () => _, TA: () => u, VF: () => A, hH: () => c, nL: () => E, pp: () => d });
var i = n(64700),
    r = n(435558),
    a = n(95561),
    s = n(734057),
    l = n(174459),
    o = n(652215);
function d(e, t, n) {
    l.default.track(o.HAw.FORWARD_MESSAGE_STARTED, { channel_id: e, message_id: t, source: n });
}
function c(e) {
    let { channelId: t, messageId: n, numDestinationChanges: i, numQueryChanges: r } = e;
    l.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: i,
        num_query_changes: r,
    });
}
function u(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: i,
        hasContextMessage: r,
        numDestinations: d,
        numDestinationChanges: c,
        numQueryChanges: u,
        anyDestinationHasSlowmode: _,
        source: E,
    } = e;
    if (
        (l.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: i,
            has_context_message: r,
            num_destinations: d,
            num_destination_changes: c,
            num_query_changes: u,
            any_destination_has_slowmode: _,
        }),
        "message-shortcut" === E)
    ) {
        let e = s.A.getChannel(t);
        l.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, a.H$)(e?.guild_id),
            ...(0, a.dI)(e),
        });
    }
}
function _() {
    return i.useMemo(
        () =>
            (0, r.once)((e, t, n) => {
                l.default.track(o.HAw.FORWARD_ADD_RECIPIENT, { channel_id: e, message_id: t, has_query: n });
            }),
        [],
    );
}
function E() {
    return i.useMemo(
        () =>
            (0, r.once)((e, t) => {
                l.default.track(o.HAw.FORWARD_EDIT_SEARCH, { channel_id: e, message_id: t });
            }),
        [],
    );
}
function A() {
    return i.useMemo(
        () =>
            (0, r.once)((e, t) => {
                l.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: e, message_id: t });
            }),
        [],
    );
}
