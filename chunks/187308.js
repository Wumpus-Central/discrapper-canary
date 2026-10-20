n.d(t, { pW: () => a, tH: () => d, xN: () => o });
var l = n(7584),
    i = n(261425),
    s = n(105292);
let r = /^\d{17,20}$/,
    u = /^\w{2,32}$/;
function o(e) {
    let { emoji: t, emoji_id: n } = e;
    return null == t || "" === t
        ? null
        : null != n
          ? r.test(n) && u.test(t)
              ? { emoji: t, emojiId: n, animated: !0 === e.animated }
              : null
          : "" === l.Ay.convertSurrogateToName(t, !1)
            ? null
            : { emoji: t };
}
function d(e, t) {
    return null != e && e.emoji === t.emoji && e.emojiId === t.emojiId && e.animated === t.animated;
}
function a(e) {
    let t = null != e.emojiId ? `:${e.emoji}:` : l.Ay.convertSurrogateToName(e.emoji, !1);
    return s.intl.formatToPlainString(i.default.lxXLho, { emojiName: t });
}
