"use strict";
n.d(t, { A: () => h });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(565645),
    u = n(7584),
    c = n(885386),
    d = n(350593);
n(851883);
var m = n(124704);
function h(e) {
    let { emoji: t, className: n, animate: r = !0, hideTooltip: h = !1, tooltipDelay: p = 150 } = e,
        f = c.Sf.useSetting(),
        g = i.useRef(null),
        E = null != t.id ? `:${t.name}:` : u.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.V.has(t.name)) return (0, l.jsx)("span", { className: s()(m.Zg, n), children: t.name });
    let A = {
        className: s()(m.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        alt: E,
        autoplay: !0,
        animated: !!(t.animated && f && r),
        registerInnerRef: (e) => {
            g.current = e;
        },
    };
    return h
        ? (0, l.jsx)(o.A, { ...A })
        : (0, l.jsx)(a.m, { targetElementRef: g, text: E, delay: p, children: (0, l.jsx)(o.A, { ...A }) });
}
