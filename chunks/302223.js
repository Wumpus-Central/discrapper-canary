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
            hideTooltip: g = !1,
            hideEmoji: f = !1,
            children: A,
        } = e,
        E = (0, a.G)(t?.state);
    if (null == t) return null;
    let { emoji: p } = t,
        m = null != E && "" !== E ? E : d;
    return (0, i.jsxs)("div", {
        className: r()(o.__invalid_container, n),
        children: [
            f || null == p
                ? null
                : (0, i.jsx)(s.A, {
                      emoji: p,
                      className: r()(o.Z, l, null != c ? { [c]: null == m || "" === m } : null),
                      animate: h,
                      hideTooltip: g,
                  }),
            null != m && m.length > 0 ? (0, i.jsx)("span", { className: u, children: m }) : null,
            A,
        ],
    });
}
