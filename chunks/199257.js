r.d(n, {
    Z: function () {
        return u;
    },
    _: function () {
        return l;
    }
});
var i = r(399606),
    a = r(339085),
    o = r(185923);
let s = [];
function l(e) {
    let { emojiStoreInstance: n = a.ZP, guildId: r, pickerIntention: i } = e;
    return {
        topEmojis: i !== o.Hz.REACTION ? n.getTopEmoji(r) : s,
        newlyAddedEmojis: i !== o.Hz.REACTION ? n.getNewlyAddedEmoji(r) : s
    };
}
function u(e, n) {
    return (0, i.cj)(
        [a.ZP],
        () =>
            l({
                emojiStoreInstance: a.ZP,
                guildId: e,
                pickerIntention: n
            }),
        [e, n]
    );
}
