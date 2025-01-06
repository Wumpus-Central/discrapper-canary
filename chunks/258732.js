var i = n(544891),
    l = n(981631);
t.Z = {
    updatePrivateChannelRecipientFlags: (e, t) =>
        i.tn.patch({
            url: l.ANM.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t },
            rejectWithError: !1
        })
};
