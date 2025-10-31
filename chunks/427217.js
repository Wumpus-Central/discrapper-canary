n.d(t, { Z: () => o });
var a = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    r = n(584973),
    s = n(608007);
function o(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: i,
        textClassName: o,
        placeholderText: c,
        soloEmojiClassName: d,
        animate: u = !0,
        hideTooltip: m = !1,
        hideEmoji: p = !1,
        children: h,
    } = e;
    if (null == t) return null;
    let { emoji: x } = t,
        g = null != t.state && "" !== t.state ? t.state : c;
    return (0, a.jsxs)("div", {
        className: l()(s.__invalid_container, n),
        children: [
            p || null == x
                ? null
                : (0, a.jsx)(r.Z, {
                      emoji: x,
                      className: l()(s.emoji, i, null != d ? { [d]: null == g || "" === g } : null),
                      animate: u,
                      hideTooltip: m,
                  }),
            null != g && g.length > 0
                ? (0, a.jsx)("span", {
                      className: o,
                      children: g,
                  })
                : null,
            h,
        ],
    });
}
