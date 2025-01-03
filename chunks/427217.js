n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(788307),
    s = n(874751);
function o(e) {
    let { activity: t, className: n, emojiClassName: r, textClassName: o, placeholderText: c, soloEmojiClassName: d, animate: u = !0, hideTooltip: h = !1, hideEmoji: m = !1, children: p } = e;
    if (null == t) return null;
    let { emoji: g } = t,
        f = null != t.state && '' !== t.state ? t.state : c;
    return (0, i.jsxs)('div', {
        className: l()(s.__invalid_container, n),
        children: [
            m || null == g
                ? null
                : (0, i.jsx)(a.Iv, {
                      emoji: g,
                      className: l()(s.emoji, r, null != d ? { [d]: null == f || '' === f } : null),
                      animate: u,
                      hideTooltip: h
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
