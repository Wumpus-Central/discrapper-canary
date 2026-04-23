"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(565645),
    u = n(7584),
    c = n(253932),
    d = n(300703);
n(851883);
var _ = n(124704);
function f(e) {
    let { emoji: t, className: n, animate: s = !0, hideTooltip: f = !1, tooltipDelay: p = 150 } = e,
        h = c.Sf.useSetting(),
        E = i.useRef(null),
        m = null != t.id ? `:${t.name}:` : u.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.V.has(t.name)) return (0, r.jsx)("span", { className: a()(_.Zg, n), children: t.name });
    let g = {
        className: a()(_.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        autoplay: !0,
        animated: !!(t.animated && h && s),
        registerInnerRef: (e) => {
            E.current = e;
        },
    };
    return f
        ? (0, r.jsx)(l.A, { ...g })
        : (0, r.jsx)(o.m, { targetElementRef: E, text: m, delay: p, children: (0, r.jsx)(l.A, { ...g }) });
}
