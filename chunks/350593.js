n.d(t, { V: () => l, A: () => c });
var i = n(833272),
    r = n(486020),
    a = n(998304),
    s = n(515718);
let l = new Set(["\u2122", "\u2122\uFE0F", "\xa9", "\xa9\uFE0F", "\xae", "\xae\uFE0F"]);
function o(e) {
    if (l.has(e)) return "";
    try {
        let t = 0 > e.indexOf("\u200D") ? e.replace("\uFE0F", "") : e;
        return n(874629)(`./${i.A.convert.toCodePoint(t)}.svg`);
    } catch (t) {
        return console.warn(t, "no emoji for", e), "";
    }
}
async function d(e) {
    let t,
        { id: n, name: i } = e;
    t = null != n ? r.Ay.getEmojiURL({ id: n, size: 32, animated: !1 }) : o(i);
    let l = await (0, s.S4)(t);
    return l?.map((e) => {
        let [t, n, i] = e;
        return (0, a.Ob)(t, n, i);
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
    }.makeMemoizer(o),
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
