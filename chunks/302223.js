"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(51183),
    s = n(729688);
function o(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: i,
        textClassName: o,
        placeholderText: d,
        soloEmojiClassName: c,
        animate: u = !0,
        hideTooltip: _ = !1,
        hideEmoji: h = !1,
        children: f,
    } = e;
    if (null == t) return null;
    let { emoji: p } = t,
        A = null != t.state && "" !== t.state ? t.state : d;
    return (0, r.jsxs)("div", {
        className: a()(s.__invalid_container, n),
        children: [
            h || null == p
                ? null
                : (0, r.jsx)(l.A, {
                      emoji: p,
                      className: a()(s.Z, i, null != c ? { [c]: null == A || "" === A } : null),
                      animate: u,
                      hideTooltip: _,
                  }),
            null != A && A.length > 0 ? (0, r.jsx)("span", { className: o, children: A }) : null,
            f,
        ],
    });
}
