r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(596454),
    u = r(633302),
    c = r(695346),
    d = r(660536);
function f(e) {
    let { emoji: n, className: r, animate: a = !0, hideTooltip: f, tooltipDelay: p } = e,
        h = c.Yk.useSetting(),
        _ = null != n.id ? ':'.concat(n.name, ':') : u.ZP.translateSurrogatesToInlineEmoji(n.name),
        m = {
            className: o()(d.emoji, r),
            emojiId: n.id,
            emojiName: n.name,
            autoplay: !0,
            animated: !!(n.animated && h && a)
        };
    return f
        ? (0, i.jsx)(l.Z, { ...m })
        : (0, i.jsx)(s.Tooltip, {
              text: _,
              delay: p,
              children: (e) =>
                  (0, i.jsx)(l.Z, {
                      ...e,
                      ...m
                  })
          });
}
