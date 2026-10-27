n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(51183),
    a = n(208971),
    o = n(224437);
function u(e) {
    let {
            activity: t,
            className: n,
            emojiClassName: l,
            textClassName: u,
            placeholderText: d,
            soloEmojiClassName: c,
            animate: h = !0,
            hideTooltip: f = !1,
            hideEmoji: g = !1,
            children: A,
        } = e,
        p = (0, a.G)(t?.state);
    if (null == t) return null;
    let { emoji: m } = t,
        I = null != p && "" !== p ? p : d;
    return (0, i.jsxs)("div", {
        className: r()(o.__invalid_container, n),
        children: [
            g || null == m
                ? null
                : (0, i.jsx)(s.A, {
                      emoji: m,
                      className: r()(o.Z, l, null != c ? { [c]: null == I || "" === I } : null),
                      animate: h,
                      hideTooltip: f,
                  }),
            null != I && I.length > 0 ? (0, i.jsx)("span", { className: u, children: I }) : null,
            A,
        ],
    });
}
