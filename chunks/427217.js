n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(584973),
    s = n(608007);
function l(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: i,
        textClassName: l,
        placeholderText: c,
        soloEmojiClassName: u,
        animate: d = !0,
        hideTooltip: f = !1,
        hideEmoji: _ = !1,
        children: p,
    } = e;
    if (null == t) return null;
    let { emoji: h } = t,
        m = null != t.state && "" !== t.state ? t.state : c;
    return (0, r.jsxs)("div", {
        className: a()(s.__invalid_container, n),
        children: [
            _ || null == h
                ? null
                : (0, r.jsx)(o.Z, {
                      emoji: h,
                      className: a()(s.emoji, i, null != u ? { [u]: null == m || "" === m } : null),
                      animate: d,
                      hideTooltip: f,
                  }),
            null != m && m.length > 0
                ? (0, r.jsx)("span", {
                      className: l,
                      children: m,
                  })
                : null,
            p,
        ],
    });
}
