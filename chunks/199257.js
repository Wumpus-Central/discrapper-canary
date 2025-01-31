n.d(t, {
    Z: () => l,
    _: () => o
});
var i = n(399606),
    r = n(339085),
    a = n(185923);
let s = [];
function o(e) {
    let { emojiStoreInstance: t = r.ZP, guildId: n, pickerIntention: i } = e;
    return {
        topEmojis: i !== a.Hz.REACTION ? t.getTopEmoji(n) : s,
        newlyAddedEmojis: i !== a.Hz.REACTION ? t.getNewlyAddedEmoji(n) : s
    };
}
function l(e, t) {
    return (0, i.cj)(
        [r.ZP],
        () =>
            o({
                emojiStoreInstance: r.ZP,
                guildId: e,
                pickerIntention: t
            }),
        [e, t]
    );
}
