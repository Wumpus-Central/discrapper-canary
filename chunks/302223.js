"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(51183),
    l = n(208971),
    o = n(729688);
function d(e) {
    let {
            activity: t,
            className: n,
            emojiClassName: r,
            textClassName: d,
            placeholderText: c,
            soloEmojiClassName: u,
            animate: _ = !0,
            hideTooltip: E = !1,
            hideEmoji: A = !1,
            children: h,
        } = e,
        I = (0, l.G)(t?.state);
    if (null == t) return null;
    let { emoji: f } = t,
        p = null != I && "" !== I ? I : c;
    return (0, i.jsxs)("div", {
        className: a()(o.__invalid_container, n),
        children: [
            A || null == f
                ? null
                : (0, i.jsx)(s.A, {
                      emoji: f,
                      className: a()(o.Z, r, null != u ? { [u]: null == p || "" === p } : null),
                      animate: _,
                      hideTooltip: E,
                  }),
            null != p && p.length > 0 ? (0, i.jsx)("span", { className: d, children: p }) : null,
            h,
        ],
    });
}
