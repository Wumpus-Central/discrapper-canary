"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(51183),
    o = n(729688);
function l(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: r,
        textClassName: l,
        placeholderText: u,
        soloEmojiClassName: c,
        animate: d = !0,
        hideTooltip: _ = !1,
        hideEmoji: h = !1,
        children: f,
    } = e;
    if (null == t) return null;
    let { emoji: E } = t,
        p = null != t.state && "" !== t.state ? t.state : u;
    return (0, i.jsxs)("div", {
        className: s()(o.__invalid_container, n),
        children: [
            h || null == E
                ? null
                : (0, i.jsx)(a.A, {
                      emoji: E,
                      className: s()(o.Z, r, null != c ? { [c]: null == p || "" === p } : null),
                      animate: d,
                      hideTooltip: _,
                  }),
            null != p && p.length > 0 ? (0, i.jsx)("span", { className: l, children: p }) : null,
            f,
        ],
    });
}
