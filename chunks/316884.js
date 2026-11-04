var i = n(164636),
    r = n(121681),
    a = n(307731);
let s = [];
function l(e) {
    let { emojiStoreInstance: t = r.Ay, guildId: n, pickerIntention: i } = e;
    return {
        topEmojis: i !== a.EmojiIntention.REACTION ? t.getTopEmoji(n) : s,
        newlyAddedEmojis: i !== a.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(n) : s,
    };
}
n.d(
    t,
    {},
    {
        A: function (e, t) {
            return (0, i.cf)([r.Ay], () => l({ emojiStoreInstance: r.Ay, guildId: e, pickerIntention: t }), [e, t]);
        },
        b: l,
    },
);
