n.d(t, { Z: () => l });
var i = n(544891),
    r = n(981631);
let l = {
    updatePrivateChannelRecipientFlags: (e, t) =>
        i.tn.patch({
            url: r.ANM.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t },
            rejectWithError: !1,
        }),
};
