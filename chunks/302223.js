n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    r = n(51183),
    a = n(729688);
function o(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: i,
        textClassName: o,
        placeholderText: c,
        soloEmojiClassName: d,
        animate: u = !0,
        hideTooltip: h = !1,
        hideEmoji: g = !1,
        children: p,
    } = e;
    if (null == t) return null;
    let { emoji: m } = t,
        x = null != t.state && "" !== t.state ? t.state : c;
    return (0, l.jsxs)("div", {
        className: s()(a.__invalid_container, n),
        children: [
            g || null == m
                ? null
                : (0, l.jsx)(r.A, {
                      emoji: m,
                      className: s()(a.Z, i, null != d ? { [d]: null == x || "" === x } : null),
                      animate: u,
                      hideTooltip: h,
                  }),
            null != x && x.length > 0 ? (0, l.jsx)("span", { className: o, children: x }) : null,
            p,
        ],
    });
}
