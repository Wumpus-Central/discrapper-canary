"use strict";
n.d(t, { Jf: () => _, TA: () => d, VF: () => f, hH: () => c, nL: () => h, pp: () => u });
var i = n(64700),
    r = n(735438),
    s = n(95561),
    a = n(734057),
    o = n(174459),
    l = n(652215);
function u(e, t, n) {
    o.default.track(l.HAw.FORWARD_MESSAGE_STARTED, { channel_id: e, message_id: t, source: n });
}
function c(e) {
    let { channelId: t, messageId: n, numDestinationChanges: i, numQueryChanges: r } = e;
    o.default.track(l.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: i,
        num_query_changes: r,
    });
}
function d(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: i,
        hasContextMessage: r,
        numDestinations: u,
        numDestinationChanges: c,
        numQueryChanges: d,
        anyDestinationHasSlowmode: _,
        source: h,
    } = e;
    if (
        (o.default.track(l.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: i,
            has_context_message: r,
            num_destinations: u,
            num_destination_changes: c,
            num_query_changes: d,
            any_destination_has_slowmode: _,
        }),
        "message-shortcut" === h)
    ) {
        let e = a.A.getChannel(t);
        o.default.track(l.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, s.H$)(e?.guild_id),
            ...(0, s.dI)(e),
        });
    }
}
function _() {
    return i.useMemo(
        () =>
            (0, r.once)((e, t, n) => {
                o.default.track(l.HAw.FORWARD_ADD_RECIPIENT, { channel_id: e, message_id: t, has_query: n });
            }),
        [],
    );
}
function h() {
    return i.useMemo(
        () =>
            (0, r.once)((e, t) => {
                o.default.track(l.HAw.FORWARD_EDIT_SEARCH, { channel_id: e, message_id: t });
            }),
        [],
    );
}
function f() {
    return i.useMemo(
        () =>
            (0, r.once)((e, t) => {
                o.default.track(l.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: e, message_id: t });
            }),
        [],
    );
}
