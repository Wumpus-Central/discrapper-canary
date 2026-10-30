n.d(t, { tH: () => u, xN: () => r });
var l = n(7584);
(n(809526), n(105292));
let i = /^\d{17,20}$/,
    s = /^\w{2,32}$/;
function r(e) {
    let { emoji: t, emoji_id: n } = e;
    return null == t || "" === t
        ? null
        : null != n
          ? i.test(n) && s.test(t)
              ? { emoji: t, emojiId: n, animated: !0 === e.animated }
              : null
          : "" === l.Ay.convertSurrogateToName(t, !1)
            ? null
            : { emoji: t };
}
function u(e, t) {
    return null != e && e.emoji === t.emoji && e.emojiId === t.emojiId && e.animated === t.animated;
}
