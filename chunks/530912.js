n.d(t, {
    Jf: () => _,
    TA: () => p,
    VF: () => m,
    hH: () => f,
    nL: () => h,
    pp: () => d,
});
var r = n(64700),
    i = n(735438),
    a = n(58149),
    s = n(734057),
    o = n(954571),
    l = n(652215);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t, n) {
    o.default.track(l.HAw.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n,
    });
}
function f(e) {
    let { channelId: t, messageId: n, numDestinationChanges: r, numQueryChanges: i } = e;
    o.default.track(l.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: r,
        num_query_changes: i,
    });
}
function p(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: r,
        hasContextMessage: i,
        numDestinations: c,
        numDestinationChanges: d,
        numQueryChanges: f,
        anyDestinationHasSlowmode: p,
        source: _,
    } = e;
    if (
        (o.default.track(l.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: r,
            has_context_message: i,
            num_destinations: c,
            num_destination_changes: d,
            num_query_changes: f,
            any_destination_has_slowmode: p,
        }),
        "message-shortcut" === _)
    ) {
        let e = s.A.getChannel(t);
        o.default.track(
            l.HAw.MESSAGE_SHORTCUT_ACTION_SENT,
            u(
                {
                    action: "forward",
                    original_message_id: n,
                },
                (0, a.H$)(null == e ? void 0 : e.guild_id),
                (0, a.dI)(e),
            ),
        );
    }
}
function _() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t, n) => {
                o.default.track(l.HAw.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: t,
                    has_query: n,
                });
            }),
        [],
    );
}
function h() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t) => {
                o.default.track(l.HAw.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: t,
                });
            }),
        [],
    );
}
function m() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t) => {
                o.default.track(l.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: t,
                });
            }),
        [],
    );
}
