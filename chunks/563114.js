n.d(t, { Z: () => p }), n(47120), n(757143);
var i = n(336317),
    r = n(768581),
    a = n(302221),
    s = n(956664),
    o = n(753090);
let l = new Set(['\u2122', '\u2122️', '\xA9', '\xA9️', '\xAE', '\xAE️']);
function u(e) {
    if (l.has(e)) return '';
    try {
        let t = 0 > e.indexOf('‍') ? e.replace('️', '') : e;
        return n(723080)('./'.concat(i.Z.convert.toCodePoint(t), '.svg'));
    } catch (t) {
        return console.warn(t, 'no emoji for', e), '';
    }
}
function c(e) {
    return e;
}
function d(e) {
    let { palette: t, shouldProcessMobileColors: n = !1 } = e;
    return t;
}
async function f(e) {
    let t;
    let { id: n, name: i } = e;
    t =
        null != n
            ? r.ZP.getEmojiURL({
                  id: n,
                  size: 32,
                  animated: !1
              })
            : u(i);
    let o = await (0, s.OF)(t);
    return null == o
        ? void 0
        : o.map((e) => {
              let [t, n, i] = e;
              return (0, a.vq)(t, n, i);
          });
}
function _(e) {
    let { channelId: t, messageId: n, emoji: i } = e;
}
let p = {
    getURL: o.Z.makeMemoizer(u),
    filterUnsupportedEmojis: c,
    applyPlatformToThemedEmojiColorPalette: d,
    getEmojiColors: f,
    triggerFullscreenAnimation: _
};
