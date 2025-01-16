var r = n(544891),
    a = n(981631);
t.Z = {
    updatePrivateChannelRecipientFlags: (e, t) =>
        r.tn.patch({
            url: a.ANM.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t },
            rejectWithError: !1
        })
};
