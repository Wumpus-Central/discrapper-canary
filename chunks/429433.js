var i = n(477900);
n(582128);
var l = n(920134),
    s = n(307731);
n.d(
    t,
    {},
    {
        C: function (e) {
            let { channel: t, closePopout: n, analyticsOverride: r, onSelectEmoji: a, messageId: o } = e;
            return (0, i.jsx)(l.A, {
                closePopout: n,
                channel: t,
                onSelectEmoji: a,
                pickerIntention: s.EmojiIntention.REACTION,
                showAddEmojiButton: null == t || null != t.guild_id,
                analyticsOverride: r,
                messageId: o,
            });
        },
    },
);
