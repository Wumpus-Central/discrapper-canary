n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(596454),
    c = n(633302),
    u = n(695346),
    d = n(563114),
    f = n(556638),
    p = n(80568);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    let { emoji: t, className: n, animate: o = !0, hideTooltip: _ = !1, tooltipDelay: h = f.X } = e,
        g = u.Yk.useSetting(),
        E = i.useRef(null),
        b = null != t.id ? ":".concat(t.name, ":") : c.ZP.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.T.has(t.name))
        return (0, r.jsx)("span", {
            className: a()(p.emoji, n),
            children: t.name,
        });
    let y = {
        className: a()(p.emoji, n),
        emojiId: t.id,
        emojiName: t.name,
        autoplay: !0,
        animated: !!(t.animated && g && o),
        registerInnerRef: (e) => {
            E.current = e;
        },
    };
    return _
        ? (0, r.jsx)(l.Z, m({}, y))
        : (0, r.jsx)(s.aML, {
              "data-migration-pending": !0,
              targetElementRef: E,
              text: b,
              delay: h,
              children: (e) => (0, r.jsx)(l.Z, m({}, e, y)),
          });
}
