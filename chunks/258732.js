n.d(t, { Z: () => r });
var a = n(544891),
    l = n(981631);
let r = {
    updatePrivateChannelRecipientFlags: (e, t) =>
        a.tn.patch({
            url: l.ANM.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t },
            rejectWithError: !1
        })
};
