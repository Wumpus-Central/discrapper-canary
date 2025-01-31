n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(584973),
    s = n(874751);
function o(e) {
    let { activity: t, className: n, emojiClassName: l, textClassName: o, placeholderText: c, soloEmojiClassName: d, animate: u = !0, hideTooltip: h = !1, hideEmoji: m = !1, children: p } = e;
    if (null == t) return null;
    let { emoji: g } = t,
        _ = null != t.state && '' !== t.state ? t.state : c;
    return (0, i.jsxs)('div', {
        className: r()(s.__invalid_container, n),
        children: [
            m || null == g
                ? null
                : (0, i.jsx)(a.Z, {
                      emoji: g,
                      className: r()(s.emoji, l, null != d ? { [d]: null == _ || '' === _ } : null),
                      animate: u,
                      hideTooltip: h
                  }),
            null != _ && _.length > 0
                ? (0, i.jsx)('span', {
                      className: o,
                      children: _
                  })
                : null,
            p
        ]
    });
}
