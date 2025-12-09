n.d(t, { Z: () => s });
var r = n(544891),
    l = n(981631);
let s = {
    updatePrivateChannelRecipientFlags: (e, t) =>
        r.tn.patch({
            url: l.ANM.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t },
            rejectWithError: !1,
        }),
};
