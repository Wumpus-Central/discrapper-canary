"use strict";
n.d(t, { V: () => o, A: () => _ });
var i = n(838677),
    r = n(486020),
    s = n(998304),
    a = n(515718);
let o = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);
function l(e) {
    if (o.has(e)) return "";
    try {
        let t = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
        return n(256628)(`./${i.A.convert.toCodePoint(t)}.svg`);
    } catch (t) {
        return console.warn(t, "no emoji for", e), "";
    }
}
async function d(e) {
    let t,
        { id: n, name: i } = e;
    t = null != n ? r.Ay.getEmojiURL({ id: n, size: 32, animated: !1 }) : l(i);
    let o = await (0, a.S4)(t);
    return o?.map((e) => {
        let [t, n, i] = e;
        return (0, s.Ob)(t, n, i);
    });
}
let _ = {
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
    getEmojiColors: d,
    triggerFullscreenAnimation: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e;
    },
};
