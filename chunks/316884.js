n.d(t, {
    A: () => l,
    b: () => o,
});
var r = n(417597),
    i = n(508675),
    a = n(307731);
let s = [];

function o(e) {
    let { emojiStoreInstance: t = i.Ay, guildId: n, pickerIntention: r } = e;
    return {
        topEmojis: r !== a.b_.REACTION ? t.getTopEmoji(n) : s,
        newlyAddedEmojis: r !== a.b_.REACTION ? t.getNewlyAddedEmoji(n) : s,
    };
}

function l(e, t) {
    return (0, r.cf)(
        [i.Ay],
        () =>
            o({
                emojiStoreInstance: i.Ay,
                guildId: e,
                pickerIntention: t,
            }),
        [e, t],
    );
}
