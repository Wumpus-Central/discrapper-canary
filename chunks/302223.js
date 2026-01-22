n.d(t, {
    A: () => o,
});
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(51183),
    s = n(802455);

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
    let { emoji: f } = t,
        x = null != t.state && "" !== t.state ? t.state : c;
    return (0, a.jsxs)("div", {
        className: i()(s.__invalid_container, n),
        children: [
            p || null == f
                ? null
                : (0, a.jsx)(r.A, {
                      emoji: f,
                      className: i()(
                          s.Z,
                          l,
                          null != d
                              ? {
                                    [d]: null == x || "" === x,
                                }
                              : null,
                      ),
                      animate: u,
                      hideTooltip: m,
                  }),
            null != x && x.length > 0
                ? (0, a.jsx)("span", {
                      className: o,
                      children: x,
                  })
                : null,
            h,
        ],
    });
}
