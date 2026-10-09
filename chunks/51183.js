n.d(t, { A: () => x });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(866665),
    o = n(565645),
    u = n(7584),
    c = n(885386),
    d = n(350593);
n(851883);
var m = n(607013);
function x(e) {
    let { emoji: t, className: n, animate: i = !0, hideTooltip: x = !1, tooltipDelay: h = 150 } = e,
        j = c.Sf.useSetting(),
        p = s.useRef(null),
        g = null != t.id ? `:${t.name}:` : u.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.V.has(t.name)) return (0, l.jsx)("span", { className: a()(m.Zg, n), children: t.name });
    let f = {
        className: a()(m.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        alt: g,
        autoplay: !0,
        animated: !!(t.animated && j && i),
        registerInnerRef: (e) => {
            p.current = e;
        },
    };
    return x
        ? (0, l.jsx)(o.A, { ...f })
        : (0, l.jsx)(r.m, {
              targetElementRef: p,
              text: g,
              delay: h,
              ariaHidden: !0,
              children: (0, l.jsx)(o.A, { ...f }),
          });
}
