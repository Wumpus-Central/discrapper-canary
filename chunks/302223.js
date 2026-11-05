var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(51183),
    a = n(208971),
    o = n(224437);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    activity: t,
                    className: n,
                    emojiClassName: r,
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
                className: l()(o.__invalid_container, n),
                children: [
                    g || null == m
                        ? null
                        : (0, i.jsx)(s.A, {
                              emoji: m,
                              className: l()(o.Z, r, null != c ? { [c]: null == I || "" === I } : null),
                              animate: h,
                              hideTooltip: f,
                          }),
                    null != I && I.length > 0 ? (0, i.jsx)("span", { className: u, children: I }) : null,
                    A,
                ],
            });
        },
    },
);
