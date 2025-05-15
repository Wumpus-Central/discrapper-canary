n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(596454),
    c = n(633302),
    u = n(695346),
    d = n(563114),
    f = n(556638),
    _ = n(843280);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let { emoji: t, className: n, animate: a = !0, hideTooltip: p = !1, tooltipDelay: m = f.X } = e,
        g = u.Yk.useSetting(),
        E = i.useRef(null),
        b = null != t.id ? ':'.concat(t.name, ':') : c.ZP.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.T.has(t.name))
        return (0, r.jsx)('span', {
            className: o()(_.emoji, n),
            children: t.name
        });
    let y = {
        className: o()(_.emoji, n),
        emojiId: t.id,
        emojiName: t.name,
        autoplay: !0,
        animated: !!(t.animated && g && a),
        registerInnerRef: (e) => {
            E.current = e;
        }
    };
    return p
        ? (0, r.jsx)(l.Z, h({}, y))
        : (0, r.jsx)(s.ua7, {
              targetElementRef: E,
              text: b,
              delay: m,
              children: (e) => (0, r.jsx)(l.Z, h({}, e, y))
          });
}
