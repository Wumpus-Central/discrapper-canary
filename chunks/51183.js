"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(565645),
    u = n(7584),
    c = n(885386),
    d = n(350593);
n(851883);
var _ = n(124704);
function h(e) {
    let { emoji: t, className: n, animate: s = !0, hideTooltip: h = !1, tooltipDelay: f = 150 } = e,
        p = c.Sf.useSetting(),
        E = r.useRef(null),
        m = null != t.id ? `:${t.name}:` : u.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.V.has(t.name)) return (0, i.jsx)("span", { className: a()(_.Zg, n), children: t.name });
    let g = {
        className: a()(_.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        alt: m,
        autoplay: !0,
        animated: !!(t.animated && p && s),
        registerInnerRef: (e) => {
            E.current = e;
        },
    };
    return h
        ? (0, i.jsx)(l.A, { ...g })
        : (0, i.jsx)(o.m, { targetElementRef: E, text: m, delay: f, children: (0, i.jsx)(l.A, { ...g }) });
}
