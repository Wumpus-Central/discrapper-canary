n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(650557),
    l = n(887490),
    c = n(112360);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    let { attributes: n, children: i, element: a } = t;
    return 'gameMentionInput' === a.type
        ? (0, r.jsx)(h, {
              attributes: n,
              element: a,
              children: i
          })
        : null;
}
let h = (e) => {
    let { element: t, attributes: n, children: a } = e,
        u = (0, s.vt)(),
        f = (0, s.UE)(),
        p = (0, s._7)(),
        h = o()(c.inlineElement, c.optionPill, c.inlineFlex, { [c.selectedPill]: f && u }),
        m = i.useCallback(() => {
            l.bN.isVoid(p, t);
        }, [p, t]),
        g = (0, r.jsx)('span', {
            className: c.optionPillValue,
            children: a
        });
    return (0, r.jsxs)(
        'span',
        _(d({}, n), {
            className: h,
            children: [
                (0, r.jsxs)('span', {
                    className: c.optionPillKey,
                    contentEditable: !1,
                    onClick: m,
                    children: ['@game', '\u200B']
                }),
                g,
                (0, r.jsx)('span', {
                    contentEditable: !1,
                    children: '\u200B'
                })
            ]
        })
    );
};
