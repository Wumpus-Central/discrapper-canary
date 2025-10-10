n.d(t, { Z: () => o });
var a = n(951288);
n(647438);
var r = n(120356),
    i = n.n(r),
    l = n(584973),
    s = n(608007);
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
    let { emoji: x } = t,
        f = null != t.state && "" !== t.state ? t.state : c;
    return (0, a.jsxs)("div", {
        className: i()(s.__invalid_container, n),
        children: [
            p || null == x
                ? null
                : (0, a.jsx)(l.Z, {
                      emoji: x,
                      className: i()(s.emoji, r, null != d ? { [d]: null == f || "" === f } : null),
                      animate: u,
                      hideTooltip: m,
                  }),
            null != f && f.length > 0
                ? (0, a.jsx)("span", {
                      className: o,
                      children: f,
                  })
                : null,
            h,
        ],
    });
}
