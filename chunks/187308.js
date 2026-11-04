var l = n(7584);
(n(191850), n(792996));
let i = /^\d{17,20}$/,
    s = /^\w{2,32}$/;
n.d(
    t,
    {},
    {
        tH: function (e, t) {
            return null != e && e.emoji === t.emoji && e.emojiId === t.emojiId && e.animated === t.animated;
        },
        xN: function (e) {
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
        },
    },
);
