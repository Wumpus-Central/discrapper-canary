n.d(t, { A: () => i });
var r = n(562465),
    l = n(652215);
let i = {
    updatePrivateChannelRecipientFlags: (e, t) =>
        r.Bo.patch({
            url: l.Rsh.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t },
            rejectWithError: !1,
        }),
};
