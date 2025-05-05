n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(584973),
    a = n(60213);
function o(e) {
    let { activity: t, className: n, emojiClassName: r, textClassName: o, placeholderText: c, soloEmojiClassName: d, animate: u = !0, hideTooltip: m = !1, hideEmoji: g = !1, children: p } = e;
    if (null == t) return null;
    let { emoji: h } = t,
        f = null != t.state && '' !== t.state ? t.state : c;
    return (0, i.jsxs)('div', {
        className: s()(a.__invalid_container, n),
        children: [
            g || null == h
                ? null
                : (0, i.jsx)(l.Z, {
                      emoji: h,
                      className: s()(a.emoji, r, null != d ? { [d]: null == f || '' === f } : null),
                      animate: u,
                      hideTooltip: m
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
