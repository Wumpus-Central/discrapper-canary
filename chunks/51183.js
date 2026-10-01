n.d(t, { A: () => x });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(866665),
    o = n(565645),
    u = n(7584),
    d = n(885386),
    c = n(350593);
n(851883);
var m = n(607013);
function x(e) {
    let { emoji: t, className: n, animate: s = !0, hideTooltip: x = !1, tooltipDelay: h = 150 } = e,
        j = d.Sf.useSetting(),
        g = i.useRef(null),
        p = null != t.id ? `:${t.name}:` : u.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && c.V.has(t.name)) return (0, l.jsx)("span", { className: a()(m.Zg, n), children: t.name });
    let f = {
        className: a()(m.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        alt: p,
        autoplay: !0,
        animated: !!(t.animated && j && s),
        registerInnerRef: (e) => {
            g.current = e;
        },
    };
    return x
        ? (0, l.jsx)(o.A, { ...f })
        : (0, l.jsx)(r.m, {
              targetElementRef: g,
              text: p,
              delay: h,
              ariaHidden: !0,
              children: (0, l.jsx)(o.A, { ...f }),
          });
}
