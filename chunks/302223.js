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
        hideEmoji: f = !1,
        children: h,
    } = e;
    if (null == t) return null;
    let { emoji: p } = t,
        E = null != t.state && "" !== t.state ? t.state : u;
    return (0, i.jsxs)("div", {
        className: s()(o.__invalid_container, n),
        children: [
            f || null == p
                ? null
                : (0, i.jsx)(a.A, {
                      emoji: p,
                      className: s()(o.Z, r, null != c ? { [c]: null == E || "" === E } : null),
                      animate: d,
                      hideTooltip: _,
                  }),
            null != E && E.length > 0 ? (0, i.jsx)("span", { className: l, children: E }) : null,
            h,
        ],
    });
}
