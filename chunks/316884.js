"use strict";
n.d(t, { A: () => l, b: () => o });
var r = n(417597),
    i = n(508675),
    s = n(307731);
let a = [];
function o(e) {
    let { emojiStoreInstance: t = i.Ay, guildId: n, pickerIntention: r } = e;
    return {
        topEmojis: r !== s.EmojiIntention.REACTION ? t.getTopEmoji(n) : a,
        newlyAddedEmojis: r !== s.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(n) : a,
    };
}
function l(e, t) {
    return (0, r.cf)([i.Ay], () => o({ emojiStoreInstance: i.Ay, guildId: e, pickerIntention: t }), [e, t]);
}
