n.d(t, { Z: () => o });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(584973),
    a = n(60213);
function o(e) {
    let { activity: t, className: n, emojiClassName: r, textClassName: o, placeholderText: c, soloEmojiClassName: d, animate: u = !0, hideTooltip: g = !1, hideEmoji: m = !1, children: p } = e;
    if (null == t) return null;
    let { emoji: h } = t,
        f = null != t.state && '' !== t.state ? t.state : c;
    return (0, i.jsxs)('div', {
        className: s()(a.__invalid_container, n),
        children: [
            m || null == h
                ? null
                : (0, i.jsx)(l.Z, {
                      emoji: h,
                      className: s()(a.emoji, r, null != d ? { [d]: null == f || '' === f } : null),
                      animate: u,
                      hideTooltip: g
                  }),
            null != f && f.length > 0
                ? (0, i.jsx)('span', {
                      className: o,
                      children: f
                  })
                : null,
            p
        ]
    });
}
