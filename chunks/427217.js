n.d(t, { Z: () => o });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(584973),
    s = n(725562);
function o(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: r,
        textClassName: o,
        placeholderText: c,
        soloEmojiClassName: d,
        animate: u = !0,
        hideTooltip: m = !1,
        hideEmoji: p = !1,
        children: h,
    } = e;
    if (null == t) return null;
    let { emoji: f } = t,
        x = null != t.state && "" !== t.state ? t.state : c;
    return (0, a.jsxs)("div", {
        className: i()(s.__invalid_container, n),
        children: [
            p || null == f
                ? null
                : (0, a.jsx)(l.Z, {
                      emoji: f,
                      className: i()(s.emoji, r, null != d ? { [d]: null == x || "" === x } : null),
                      animate: u,
                      hideTooltip: m,
                  }),
            null != x && x.length > 0
                ? (0, a.jsx)("span", {
                      className: o,
                      children: x,
                  })
                : null,
            h,
        ],
    });
}
