n.d(t, { A: () => p });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(565645),
    u = n(7584),
    c = n(253932),
    d = n(300703);
n(851883);
var _ = n(124704);
function p(e) {
    let { emoji: t, className: n, animate: i = !0, hideTooltip: p = !1, tooltipDelay: h = 150 } = e,
        m = c.Sf.useSetting(),
        A = l.useRef(null),
        f = null != t.id ? `:${t.name}:` : u.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.V.has(t.name)) return (0, r.jsx)("span", { className: a()(_.Zg, n), children: t.name });
    let g = {
        className: a()(_.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        autoplay: !0,
        animated: !!(t.animated && m && i),
        registerInnerRef: (e) => {
            A.current = e;
        },
    };
    return p
        ? (0, r.jsx)(o.A, { ...g })
        : (0, r.jsx)(s.m, { targetElementRef: A, text: f, delay: h, children: (0, r.jsx)(o.A, { ...g }) });
}
