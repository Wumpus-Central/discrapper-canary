n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(990078),
    l = n(565645),
    o = n(7584),
    E = n(253932),
    d = n(350593);
n(851883);
var c = n(124704);
function u(e) {
    let { emoji: t, className: n, animate: a = !0, hideTooltip: u = !1, tooltipDelay: I = 150 } = e,
        A = E.Sf.useSetting(),
        T = r.useRef(null),
        S = null != t.id ? `:${t.name}:` : o.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.V.has(t.name)) return (0, i.jsx)("span", { className: s()(c.Zg, n), children: t.name });
    let N = {
        className: s()(c.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        autoplay: !0,
        animated: !!(t.animated && A && a),
        registerInnerRef: (e) => {
            T.current = e;
        },
    };
    return u
        ? (0, i.jsx)(l.A, { ...N })
        : (0, i.jsx)(_.m, { targetElementRef: T, text: S, delay: I, children: (0, i.jsx)(l.A, { ...N }) });
}
