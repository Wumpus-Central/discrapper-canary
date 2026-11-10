var t = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(866665),
    u = n(565645),
    o = n(7584),
    d = n(253932),
    c = n(673375);
n(851883);
var m = n(607013);
n.d(
    l,
    {},
    {
        A: function (e) {
            let { emoji: l, className: n, animate: s = !0, hideTooltip: x = !1, tooltipDelay: h = 150 } = e,
                f = d.Sf.useSetting(),
                A = a.useRef(null),
                g = null != l.id ? `:${l.name}:` : o.Ay.translateSurrogatesToInlineEmoji(l.name);
            if (null == l.id && c.V.has(l.name))
                return (0, t.jsx)("span", { className: i()(m.Zg, n), children: l.name });
            let p = {
                className: i()(m.Zg, n),
                emojiId: l.id,
                emojiName: l.name,
                alt: g,
                autoplay: !0,
                animated: !!(l.animated && f && s),
                registerInnerRef: (e) => {
                    A.current = e;
                },
            };
            return x
                ? (0, t.jsx)(u.A, { ...p })
                : (0, t.jsx)(r.m, {
                      targetElementRef: A,
                      text: g,
                      delay: h,
                      ariaHidden: !0,
                      children: (0, t.jsx)(u.A, { ...p }),
                  });
        },
    },
);
