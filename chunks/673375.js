let i;
n.d(t, { V: () => o, A: () => c });
var r = n(833272),
    a = n(486020),
    s = n(998304),
    l = n(515718);
let o = new Set(["\u2122", "\u2122\uFE0F", "\xa9", "\xa9\uFE0F", "\xae", "\xae\uFE0F"]);
function d(e) {
    if (o.has(e)) return "";
    try {
        let t = 0 > e.indexOf("\u200D") ? e.replace("\uFE0F", "") : e;
        return n(874629)(`./${r.A.convert.toCodePoint(t)}.svg`);
    } catch (t) {
        return (console.warn(t, "no emoji for", e), "");
    }
}
let c = {
    getURL:
        ((i = new Map()),
        (e) => {
            let t = i.get(e);
            return (void 0 === t && ((t = d(e)), i.set(e, t)), t);
        }),
    filterUnsupportedEmojis: function (e) {
        return e;
    },
    applyPlatformToThemedEmojiColorPalette: function (e) {
        let { palette: t, shouldProcessMobileColors: n = !1 } = e;
        return t;
    },
    getEmojiColors: async function (e) {
        let t,
            { id: n, name: i } = e;
        t = null != n ? a.Ay.getEmojiURL({ id: n, size: 32, animated: !1 }) : d(i);
        let r = await (0, l.S4)(t);
        return r?.map((e) => {
            let [t, n, i] = e;
            return (0, s.Ob)(t, n, i);
        });
    },
    triggerFullscreenAnimation: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e;
    },
};
