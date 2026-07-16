n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(51183),
    a = n(208971),
    o = n(729688);
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
    let { emoji: I } = t,
        S = null != E && "" !== E ? E : d;
    return (0, i.jsxs)("div", {
        className: s()(o.__invalid_container, n),
        children: [
            f || null == I
                ? null
                : (0, i.jsx)(r.A, {
                      emoji: I,
                      className: s()(o.Z, l, null != c ? { [c]: null == S || "" === S } : null),
                      animate: h,
                      hideTooltip: g,
                  }),
            null != S && S.length > 0 ? (0, i.jsx)("span", { className: u, children: S }) : null,
            A,
        ],
    });
}
