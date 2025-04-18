n.d(t, { Z: () => a });
var r = n(544891),
    i = n(981631);
let a = {
    updatePrivateChannelRecipientFlags: (e, t) =>
        r.tn.patch({
            url: i.ANM.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t },
            rejectWithError: !1
        })
};
