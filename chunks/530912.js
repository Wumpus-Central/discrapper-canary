var t = a(582128),
    s = a(435558),
    i = a(149468),
    _ = a(734057),
    d = a(129230),
    o = a(652215);
a.d(
    n,
    {},
    {
        Jf: function () {
            return t.useMemo(
                () =>
                    (0, s.once)((e, n, a) => {
                        d.default.track(o.HAw.FORWARD_ADD_RECIPIENT, { channel_id: e, message_id: n, has_query: a });
                    }),
                [],
            );
        },
        TA: function (e) {
            let {
                channelId: n,
                messageId: a,
                hasError: t,
                hasContextMessage: s,
                numDestinations: c,
                numDestinationChanges: r,
                numQueryChanges: u,
                anyDestinationHasSlowmode: l,
                source: m,
            } = e;
            if (
                (d.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
                    channel_id: n,
                    message_id: a,
                    has_error: t,
                    has_context_message: s,
                    num_destinations: c,
                    num_destination_changes: r,
                    num_query_changes: u,
                    any_destination_has_slowmode: l,
                }),
                "message-shortcut" === m)
            ) {
                let e = _.A.getChannel(n);
                d.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
                    action: "forward",
                    original_message_id: a,
                    ...(0, i.H$)(e?.guild_id),
                    ...(0, i.dI)(e),
                });
            }
        },
        VF: function () {
            return t.useMemo(
                () =>
                    (0, s.once)((e, n) => {
                        d.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, { channel_id: e, message_id: n });
                    }),
                [],
            );
        },
        hH: function (e) {
            let { channelId: n, messageId: a, numDestinationChanges: t, numQueryChanges: s } = e;
            d.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
                channel_id: n,
                message_id: a,
                num_destination_changes: t,
                num_query_changes: s,
            });
        },
        nL: function () {
            return t.useMemo(
                () =>
                    (0, s.once)((e, n) => {
                        d.default.track(o.HAw.FORWARD_EDIT_SEARCH, { channel_id: e, message_id: n });
                    }),
                [],
            );
        },
        pp: function (e, n, a) {
            d.default.track(o.HAw.FORWARD_MESSAGE_STARTED, { channel_id: e, message_id: n, source: a });
        },
    },
);
