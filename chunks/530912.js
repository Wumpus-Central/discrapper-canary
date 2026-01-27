n.d(t, {
    Jf: () => m,
    TA: () => d,
    VF: () => p,
    hH: () => u,
    nL: () => f,
    pp: () => c,
});
var r = n(64700),
    l = n(735438),
    a = n(58149),
    i = n(734057),
    s = n(954571),
    o = n(652215);

function c(e, t, n) {
    s.default.track(o.HAw.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n,
    });
}

function u(e) {
    let { channelId: t, messageId: n, numDestinationChanges: r, numQueryChanges: l } = e;
    s.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: r,
        num_query_changes: l,
    });
}

function d(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: r,
        hasContextMessage: l,
        numDestinations: c,
        numDestinationChanges: u,
        numQueryChanges: d,
        anyDestinationHasSlowmode: m,
        source: f,
    } = e;
    if (
        (s.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: r,
            has_context_message: l,
            num_destinations: c,
            num_destination_changes: u,
            num_query_changes: d,
            any_destination_has_slowmode: m,
        }),
        "message-shortcut" === f)
    ) {
        let e = i.A.getChannel(t);
        s.default.track(
            o.HAw.MESSAGE_SHORTCUT_ACTION_SENT,
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
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

function m() {
    return r.useMemo(
        () =>
            (0, l.once)((e, t, n) => {
                s.default.track(o.HAw.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: t,
                    has_query: n,
                });
            }),
        [],
    );
}

function f() {
    return r.useMemo(
        () =>
            (0, l.once)((e, t) => {
                s.default.track(o.HAw.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: t,
                });
            }),
        [],
    );
}

function p() {
    return r.useMemo(
        () =>
            (0, l.once)((e, t) => {
                s.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: t,
                });
            }),
        [],
    );
}
