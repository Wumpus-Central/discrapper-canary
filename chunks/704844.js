var l = n(620632),
    i = n(652215);
n.d(
    t,
    {},
    {
        A: {
            updatePrivateChannelRecipientFlags: (e, t) =>
                l.Bo.patch({ url: i.Rsh.CHANNEL_RECIPIENT_ME(e), body: { flags: t }, rejectWithError: !1 }),
        },
    },
);
