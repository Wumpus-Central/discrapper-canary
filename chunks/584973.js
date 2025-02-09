n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(596454),
    l = n(633302),
    u = n(695346),
    c = n(556638),
    d = n(694978);
function f(e) {
    let { emoji: t, className: n, animate: r = !0, hideTooltip: f = !1, tooltipDelay: _ = c.X } = e,
        p = u.Yk.useSetting(),
        h = null != t.id ? ':'.concat(t.name, ':') : l.ZP.translateSurrogatesToInlineEmoji(t.name),
        m = {
            className: a()(d.emoji, n),
            emojiId: t.id,
            emojiName: t.name,
            autoplay: !0,
            animated: !!(t.animated && p && r)
        };
    return f
        ? (0, i.jsx)(o.Z, { ...m })
        : (0, i.jsx)(s.ua7, {
              text: h,
              delay: _,
              children: (e) =>
                  (0, i.jsx)(o.Z, {
                      ...e,
                      ...m
                  })
          });
}
