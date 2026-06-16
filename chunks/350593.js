"use strict";
n.d(t, { V: () => o, A: () => c });
var i = n(833272),
    r = n(486020),
    s = n(998304),
    a = n(515718);
let o = new Set(["\u2122", "\u2122\uFE0F", "\xa9", "\xa9\uFE0F", "\xae", "\xae\uFE0F"]);
function l(e) {
    if (o.has(e)) return "";
    try {
        let t = 0 > e.indexOf("\u200D") ? e.replace("\uFE0F", "") : e;
        return n(874629)(`./${i.A.convert.toCodePoint(t)}.svg`);
    } catch (t) {
        return console.warn(t, "no emoji for", e), "";
    }
}
async function u(e) {
    let t,
        { id: n, name: i } = e;
    t = null != n ? r.Ay.getEmojiURL({ id: n, size: 32, animated: !1 }) : l(i);
    let o = await (0, a.S4)(t);
    return o?.map((e) => {
        let [t, n, i] = e;
        return (0, s.Ob)(t, n, i);
    });
}
let c = {
    getURL: {
        makeMemoizer: function (e) {
            let t = new Map();
            return (n) => {
                let i = t.get(n);
                return void 0 === i && ((i = e(n)), t.set(n, i)), i;
            };
        },
    }.makeMemoizer(l),
    filterUnsupportedEmojis: function (e) {
        return e;
    },
    applyPlatformToThemedEmojiColorPalette: function (e) {
        let { palette: t, shouldProcessMobileColors: n = !1 } = e;
        return t;
    },
    getEmojiColors: u,
    triggerFullscreenAnimation: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e;
    },
};
