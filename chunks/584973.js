n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(596454),
    c = n(633302),
    u = n(695346),
    d = n(556638),
    f = n(843280);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    let { emoji: t, className: n, animate: o = !0, hideTooltip: _ = !1, tooltipDelay: h = d.X } = e,
        m = u.Yk.useSetting(),
        g = i.useRef(null),
        E = null != t.id ? ':'.concat(t.name, ':') : c.ZP.translateSurrogatesToInlineEmoji(t.name),
        b = {
            className: a()(f.emoji, n),
            emojiId: t.id,
            emojiName: t.name,
            autoplay: !0,
            animated: !!(t.animated && m && o),
            registerInnerRef: (e) => {
                g.current = e;
            }
        };
    return _
        ? (0, r.jsx)(l.Z, p({}, b))
        : (0, r.jsx)(s.ua7, {
              targetElementRef: g,
              text: E,
              delay: h,
              children: (e) => (0, r.jsx)(l.Z, p({}, e, b))
          });
}
