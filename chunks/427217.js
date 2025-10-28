n.d(t, { Z: () => s });
var a = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    i = n(584973),
    o = n(608007);
function s(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: r,
        textClassName: s,
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
        className: l()(o.__invalid_container, n),
        children: [
            p || null == x
                ? null
                : (0, a.jsx)(i.Z, {
                      emoji: x,
                      className: l()(o.emoji, r, null != d ? { [d]: null == f || "" === f } : null),
                      animate: u,
                      hideTooltip: m,
                  }),
            null != f && f.length > 0
                ? (0, a.jsx)("span", {
                      className: s,
                      children: f,
                  })
                : null,
            h,
        ],
    });
}
