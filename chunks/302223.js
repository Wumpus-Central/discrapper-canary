n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(51183),
    a = n(729688);
function o(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: l,
        textClassName: o,
        placeholderText: u,
        soloEmojiClassName: d,
        animate: c = !0,
        hideTooltip: h = !1,
        hideEmoji: g = !1,
        children: A,
    } = e;
    if (null == t) return null;
    let { emoji: f } = t,
        E = null != t.state && "" !== t.state ? t.state : u;
    return (0, i.jsxs)("div", {
        className: s()(a.__invalid_container, n),
        children: [
            g || null == f
                ? null
                : (0, i.jsx)(r.A, {
                      emoji: f,
                      className: s()(a.Z, l, null != d ? { [d]: null == E || "" === E } : null),
                      animate: c,
                      hideTooltip: h,
                  }),
            null != E && E.length > 0 ? (0, i.jsx)("span", { className: o, children: E }) : null,
            A,
        ],
    });
}
