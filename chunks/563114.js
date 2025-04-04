n.d(t, { Z: () => p }), n(47120), n(757143), n(301563);
var r = n(336317),
    i = n(768581),
    o = n(302221),
    a = n(956664),
    s = n(753090);
let l = new Set(['\u2122', '\u2122️', '\xA9', '\xA9️', '\xAE', '\xAE️']);
function c(e) {
    if (l.has(e)) return '';
    try {
        let t = 0 > e.indexOf('‍') ? e.replace('️', '') : e;
        return n(723080)('./'.concat(r.Z.convert.toCodePoint(t), '.svg'));
    } catch (t) {
        return console.warn(t, 'no emoji for', e), '';
    }
}
function u(e) {
    return e;
}
function d(e) {
    let { palette: t, shouldProcessMobileColors: n = !1 } = e;
    return t;
}
async function f(e) {
    let t,
        { id: n, name: r } = e;
    t =
        null != n
            ? i.ZP.getEmojiURL({
                  id: n,
                  size: 32,
                  animated: !1
              })
            : c(r);
    let s = await (0, a.OF)(t);
    return null == s
        ? void 0
        : s.map((e) => {
              let [t, n, r] = e;
              return (0, o.vq)(t, n, r);
          });
}
function _(e) {
    let { channelId: t, messageId: n, emoji: r } = e;
}
let p = {
    getURL: s.Z.makeMemoizer(c),
    filterUnsupportedEmojis: u,
    applyPlatformToThemedEmojiColorPalette: d,
    getEmojiColors: f,
    triggerFullscreenAnimation: _
};
