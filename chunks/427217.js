n.d(t, { Z: () => o });
var a = n(951288);
n(647438);
var i = n(120356),
    r = n.n(i),
    l = n(584973),
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
        className: r()(s.__invalid_container, n),
        children: [
            p || null == x
                ? null
                : (0, a.jsx)(l.Z, {
                      emoji: x,
                      className: r()(s.emoji, i, null != d ? { [d]: null == g || "" === g } : null),
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
