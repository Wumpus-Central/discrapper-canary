n.d(l, { A: () => x });
var t = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(866665),
    u = n(565645),
    o = n(7584),
    c = n(885386),
    d = n(350593);
n(851883);
var m = n(607013);
function x(e) {
    let { emoji: l, className: n, animate: i = !0, hideTooltip: x = !1, tooltipDelay: h = 150 } = e,
        f = c.Sf.useSetting(),
        p = s.useRef(null),
        j = null != l.id ? `:${l.name}:` : o.Ay.translateSurrogatesToInlineEmoji(l.name);
    if (null == l.id && d.V.has(l.name)) return (0, t.jsx)("span", { className: a()(m.Zg, n), children: l.name });
    let A = {
        className: a()(m.Zg, n),
        emojiId: l.id,
        emojiName: l.name,
        alt: j,
        autoplay: !0,
        animated: !!(l.animated && f && i),
        registerInnerRef: (e) => {
            p.current = e;
        },
    };
    return x
        ? (0, t.jsx)(u.A, { ...A })
        : (0, t.jsx)(r.m, {
              targetElementRef: p,
              text: j,
              delay: h,
              ariaHidden: !0,
              children: (0, t.jsx)(u.A, { ...A }),
          });
}
