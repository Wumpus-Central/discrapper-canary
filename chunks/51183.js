var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(866665),
    o = n(565645),
    u = n(7584),
    c = n(253932),
    d = n(673375);
n(851883);
var m = n(607013);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { emoji: t, className: n, animate: a = !0, hideTooltip: A = !1, tooltipDelay: p = 150 } = e,
                h = c.Sf.useSetting(),
                f = i.useRef(null),
                g = null != t.id ? `:${t.name}:` : u.Ay.translateSurrogatesToInlineEmoji(t.name);
            if (null == t.id && d.V.has(t.name))
                return (0, l.jsx)("span", { className: r()(m.Zg, n), children: t.name });
            let x = {
                className: r()(m.Zg, n),
                emojiId: t.id,
                emojiName: t.name,
                alt: g,
                autoplay: !0,
                animated: !!(t.animated && h && a),
                registerInnerRef: (e) => {
                    f.current = e;
                },
            };
            return A
                ? (0, l.jsx)(o.A, { ...x })
                : (0, l.jsx)(s.m, {
                      targetElementRef: f,
                      text: g,
                      delay: p,
                      ariaHidden: !0,
                      children: (0, l.jsx)(o.A, { ...x }),
                  });
        },
    },
);
