"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(51183),
    l = n(498968);
function o(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: r,
        textClassName: o,
        placeholderText: d,
        soloEmojiClassName: c,
        animate: u = !0,
        hideTooltip: _ = !1,
        hideEmoji: E = !1,
        children: A,
    } = e;
    if (null == t) return null;
    let { emoji: h } = t,
        I = null != t.state && "" !== t.state ? t.state : d;
    return (0, i.jsxs)("div", {
        className: a()(l.__invalid_container, n),
        children: [
            E || null == h
                ? null
                : (0, i.jsx)(s.A, {
                      emoji: h,
                      className: a()(l.Z, r, null != c ? { [c]: null == I || "" === I } : null),
                      animate: u,
                      hideTooltip: _,
                  }),
            null != I && I.length > 0 ? (0, i.jsx)("span", { className: o, children: I }) : null,
            A,
        ],
    });
}
