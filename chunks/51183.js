n.d(t, { A: () => u });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(990078),
    o = n(565645),
    d = n(7584),
    c = n(253932),
    _ = n(350593);
n(851883);
var E = n(124704);
function u(e) {
    let { emoji: t, className: n, animate: r = !0, hideTooltip: u = !1, tooltipDelay: A = 150 } = e,
        I = c.Sf.useSetting(),
        T = a.useRef(null),
        h = null != t.id ? `:${t.name}:` : d.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && _.V.has(t.name)) return (0, i.jsx)("span", { className: s()(E.Zg, n), children: t.name });
    let S = {
        className: s()(E.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        autoplay: !0,
        animated: !!(t.animated && I && r),
        registerInnerRef: (e) => {
            T.current = e;
        },
    };
    return u
        ? (0, i.jsx)(o.A, { ...S })
        : (0, i.jsx)(l.m, { targetElementRef: T, text: h, delay: A, children: (0, i.jsx)(o.A, { ...S }) });
}
