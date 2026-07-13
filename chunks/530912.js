a.d(n, { Jf: () => l, TA: () => u, VF: () => m, hH: () => r, nL: () => h, pp: () => c });
var t = a(64700),
    s = a(735438),
    i = a(95561),
    d = a(734057),
    _ = a(174459),
    o = a(652215);
function c(e, n, a) {
    _.default.track(o.HAw.FORWARD_MESSAGE_STARTED, { channel_id: e, message_id: n, source: a });
}
function r(e) {
    let { channelId: n, messageId: a, numDestinationChanges: t, numQueryChanges: s } = e;
    _.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: n,
        message_id: a,
        num_destination_changes: t,
        num_query_changes: s,
    });
}
function u(e) {
    let {
        channelId: n,
        messageId: a,
        hasError: t,
        hasContextMessage: s,
        numDestinations: c,
        numDestinationChanges: r,
        numQueryChanges: u,
        anyDestinationHasSlowmode: l,
        source: h,
    } = e;
    if (
        (_.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: n,
            message_id: a,
            has_error: t,
            has_context_message: s,
            num_destinations: c,
            num_destination_changes: r,
            num_query_changes: u,
            any_destination_has_slowmode: l,
        }),
        "message-shortcut" === h)
    ) {
        let e = d.A.getChannel(n);
        _.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: a,
            ...(0, i.H$)(e?.guild_id),
            ...(0, i.dI)(e),
        });
    }
}
function l() {
    return t.useMemo(
        () =>
            (0, s.once)((e, n, a) => {
                _.default.track(o.HAw.FORWARD_ADD_RECIPIENT, { channel_id: e, message_id: n, has_query: a });
            }),
        [],
    );
}
function h() {
    return t.useMemo(
        () =>
            (0, s.once)((e, n) => {
                _.default.track(o.HAw.FORWARD_EDIT_SEARCH, { channel_id: e, message_id: n });
            }),
        [],
    );
}
function m() {
    return t.useMemo(
        () =>
            (0, s.once)((e, n) => {
                _.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: e, message_id: n });
            }),
        [],
    );
}
