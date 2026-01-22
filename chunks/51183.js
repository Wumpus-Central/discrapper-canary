n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(565645),
    c = n(7584),
    u = n(253932),
    d = n(300703);
n(851883);
var f = n(123511);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    let { emoji: t, className: n, animate: a = !0, hideTooltip: p = !1, tooltipDelay: h = 150 } = e,
        m = u.Sf.useSetting(),
        g = i.useRef(null),
        E = null != t.id ? ":".concat(t.name, ":") : c.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && d.V.has(t.name))
        return (0, r.jsx)("span", {
            className: s()(f.Zg, n),
            children: t.name,
        });
    let b = {
        className: s()(f.Zg, n),
        emojiId: t.id,
        emojiName: t.name,
        autoplay: !0,
        animated: !!(t.animated && m && a),
        registerInnerRef: (e) => {
            g.current = e;
        },
    };
    return p
        ? (0, r.jsx)(l.A, _({}, b))
        : (0, r.jsx)(o.m, {
              targetElementRef: g,
              text: E,
              delay: h,
              children: (0, r.jsx)(l.A, _({}, b)),
          });
}
