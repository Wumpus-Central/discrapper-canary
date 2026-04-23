"use strict";
n.d(t, { A: () => d, V: () => l });
var r = n(838677),
    i = n(486020),
    s = n(998304),
    a = n(515718),
    o = n(791059);
let l = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);
function u(e) {
    if (l.has(e)) return "";
    try {
        let t = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
        return n(256628)(`./${r.A.convert.toCodePoint(t)}.svg`);
    } catch (t) {
        return console.warn(t, "no emoji for", e), "";
    }
}
async function c(e) {
    let t,
        { id: n, name: r } = e;
    t = null != n ? i.Ay.getEmojiURL({ id: n, size: 32, animated: !1 }) : u(r);
    let o = await (0, a.S4)(t);
    return o?.map((e) => {
        let [t, n, r] = e;
        return (0, s.Ob)(t, n, r);
    });
}
let d = {
    getURL: o.A.makeMemoizer(u),
    filterUnsupportedEmojis: function (e) {
        return e;
    },
    applyPlatformToThemedEmojiColorPalette: function (e) {
        let { palette: t, shouldProcessMobileColors: n = !1 } = e;
        return t;
    },
    getEmojiColors: c,
    triggerFullscreenAnimation: function (e) {
        let { channelId: t, messageId: n, emoji: r } = e;
    },
};
