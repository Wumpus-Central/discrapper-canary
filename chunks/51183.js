n.d(t, { A: () => h });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(866665),
    o = n(565645),
    u = n(7584),
    c = n(885386),
    d = n(350593);
n(851883);
var m = n(607013);
function h(e) {
    let { emoji: t, className: n, animate: s = !0, hideTooltip: h = !1, tooltipDelay: p = 150 } = e,
        f = c.Sf.useSetting(),
        g = i.useRef(null),
        x = null != t.id ? `:${t.name}:` : u.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.V.has(t.name)) return (0, l.jsx)("span", { className: r()(m.Zg, n), children: t.name });
    let A = {
        className: r()(m.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        alt: x,
        autoplay: !0,
        animated: !!(t.animated && f && s),
        registerInnerRef: (e) => {
            g.current = e;
        },
    };
    return h
        ? (0, l.jsx)(o.A, { ...A })
        : (0, l.jsx)(a.m, {
              targetElementRef: g,
              text: x,
              delay: p,
              ariaHidden: !0,
              children: (0, l.jsx)(o.A, { ...A }),
          });
}
