n.d(t, { A: () => o, b: () => l });
var i = n(702841),
    r = n(236285),
    a = n(307731);
let s = [];
function l(e) {
    let { emojiStoreInstance: t = r.Ay, guildId: n, pickerIntention: i } = e;
    return {
        topEmojis: i !== a.EmojiIntention.REACTION ? t.getTopEmoji(n) : s,
        newlyAddedEmojis: i !== a.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(n) : s,
    };
}
function o(e, t) {
    return (0, i.cf)([r.Ay], () => l({ emojiStoreInstance: r.Ay, guildId: e, pickerIntention: t }), [e, t]);
}
