n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    u = n(51183),
    i = n(729688);
function s(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: a,
        textClassName: s,
        placeholderText: d,
        soloEmojiClassName: o,
        animate: c = !0,
        hideTooltip: f = !1,
        hideEmoji: h = !1,
        children: S,
    } = e;
    if (null == t) return null;
    let { emoji: g } = t,
        v = null != t.state && "" !== t.state ? t.state : d;
    return (0, r.jsxs)("div", {
        className: l()(i.__invalid_container, n),
        children: [
            h || null == g
                ? null
                : (0, r.jsx)(u.A, {
                      emoji: g,
                      className: l()(i.Z, a, null != o ? { [o]: null == v || "" === v } : null),
                      animate: c,
                      hideTooltip: f,
                  }),
            null != v && v.length > 0 ? (0, r.jsx)("span", { className: s, children: v }) : null,
            S,
        ],
    });
}
