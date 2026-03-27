r.d(t, { A: () => u });
var n = r(627968);
r(64700);
var a = r(503698),
    c = r.n(a),
    l = r(51183),
    s = r(13585);
function u(e) {
    let {
        activity: t,
        className: r,
        emojiClassName: a,
        textClassName: u,
        placeholderText: i,
        soloEmojiClassName: o,
        animate: d = !0,
        hideTooltip: m = !1,
        hideEmoji: f = !1,
        children: x,
    } = e;
    if (null == t) return null;
    let { emoji: h } = t,
        g = null != t.state && "" !== t.state ? t.state : i;
    return (0, n.jsxs)("div", {
        className: c()(s.__invalid_container, r),
        children: [
            f || null == h
                ? null
                : (0, n.jsx)(l.A, {
                      emoji: h,
                      className: c()(s.Z, a, null != o ? { [o]: null == g || "" === g } : null),
                      animate: d,
                      hideTooltip: m,
                  }),
            null != g && g.length > 0 ? (0, n.jsx)("span", { className: u, children: g }) : null,
            x,
        ],
    });
}
