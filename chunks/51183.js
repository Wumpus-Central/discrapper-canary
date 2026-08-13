"use strict";
n.d(t, { A: () => E });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(565645),
    d = n(7584),
    c = n(885386),
    u = n(350593);
n(851883);
var _ = n(491160);
function E(e) {
    let { emoji: t, className: n, animate: a = !0, hideTooltip: E = !1, tooltipDelay: A = 150 } = e,
        h = c.Sf.useSetting(),
        I = r.useRef(null),
        f = null != t.id ? `:${t.name}:` : d.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && u.V.has(t.name)) return (0, i.jsx)("span", { className: s()(_.Zg, n), children: t.name });
    let p = {
        className: s()(_.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        alt: f,
        autoplay: !0,
        animated: !!(t.animated && h && a),
        registerInnerRef: (e) => {
            I.current = e;
        },
    };
    return E
        ? (0, i.jsx)(o.A, { ...p })
        : (0, i.jsx)(l.m, {
              targetElementRef: I,
              text: f,
              delay: A,
              ariaHidden: !0,
              children: (0, i.jsx)(o.A, { ...p }),
          });
}
