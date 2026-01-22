n.d(t, {
    A: () => _,
    V: () => l,
}),
    n(896048),
    n(747238),
    n(812715);
var r = n(838677),
    i = n(486020),
    a = n(998304),
    s = n(515718),
    o = n(791059);
let l = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);

function c(e) {
    if (l.has(e)) return "";
    try {
        let t = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
        return n(256628)("./".concat(r.A.convert.toCodePoint(t), ".svg"));
    } catch (t) {
        return console.warn(t, "no emoji for", e), "";
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
            ? i.Ay.getEmojiURL({
                  id: n,
                  size: 32,
                  animated: !1,
              })
            : c(r);
    let o = await (0, s.S4)(t);
    return null == o
        ? void 0
        : o.map((e) => {
              let [t, n, r] = e;
              return (0, a.Ob)(t, n, r);
          });
}

function p(e) {
    let { channelId: t, messageId: n, emoji: r } = e;
}
let _ = {
    getURL: o.A.makeMemoizer(c),
    filterUnsupportedEmojis: u,
    applyPlatformToThemedEmojiColorPalette: d,
    getEmojiColors: f,
    triggerFullscreenAnimation: p,
};
