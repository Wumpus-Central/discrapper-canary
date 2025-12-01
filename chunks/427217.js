n.d(t, { Z: () => o });
var a = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    r = n(584973),
    s = n(608007);
function o(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: l,
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
                : (0, a.jsx)(r.Z, {
                      emoji: x,
                      className: i()(s.emoji, l, null != d ? { [d]: null == f || "" === f } : null),
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
