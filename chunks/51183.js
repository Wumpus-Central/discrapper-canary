"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(565645),
    u = n(7584),
    c = n(253932),
    d = n(300703);
n(851883);
var _ = n(123511);
function f(e) {
    let { emoji: t, className: n, animate: a = !0, hideTooltip: f = !1, tooltipDelay: p = 150 } = e,
        h = c.Sf.useSetting(),
        m = i.useRef(null),
        g = null != t.id ? `:${t.name}:` : u.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.V.has(t.name)) return (0, r.jsx)("span", { className: s()(_.Zg, n), children: t.name });
    let E = {
        className: s()(_.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        autoplay: !0,
        animated: !!(t.animated && h && a),
        registerInnerRef: (e) => {
            m.current = e;
        },
    };
    return f
        ? (0, r.jsx)(l.A, { ...E })
        : (0, r.jsx)(o.m, { targetElementRef: m, text: g, delay: p, children: (0, r.jsx)(l.A, { ...E }) });
}
