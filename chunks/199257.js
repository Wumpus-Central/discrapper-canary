n.d(t, {
    Z: () => l,
    _: () => s
});
var r = n(399606),
    i = n(339085),
    o = n(185923);
let a = [];
function s(e) {
    let { emojiStoreInstance: t = i.ZP, guildId: n, pickerIntention: r } = e;
    return {
        topEmojis: r !== o.Hz.REACTION ? t.getTopEmoji(n) : a,
        newlyAddedEmojis: r !== o.Hz.REACTION ? t.getNewlyAddedEmoji(n) : a
    };
}
function l(e, t) {
    return (0, r.cj)(
        [i.ZP],
        () =>
            s({
                emojiStoreInstance: i.ZP,
                guildId: e,
                pickerIntention: t
            }),
        [e, t]
    );
}
