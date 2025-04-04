n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(477660);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e) {
    return (
        (e.heading = i.defaultRules.heading),
        (e.lheading = i.defaultRules.lheading),
        (e.list = i.defaultRules.list),
        (e.paragraph = l(a({}, e.paragraph), {
            react: function (e, t, n) {
                return (0, r.jsx)('p', { children: t(e.content, n) }, n.key);
            }
        })),
        (e.link = l(a({}, e.link), {
            react: function (e, t, n) {
                let o = {};
                if (null != e.context) {
                    let t = e.context[e.target];
                    t && t.onClick ? ((o.onClick = t.onClick), (o.onContextMenu = t.onContextMenu)) : (o.onClick = t);
                }
                if (null == o.onClick) {
                    var s;
                    (o.href = null != (s = (0, i.sanitizeUrl)(e.target)) ? s : void 0), (o.target = '_blank');
                }
                return (0, r.jsx)(
                    'a',
                    l(a({ title: e.title }, o), {
                        rel: 'noreferrer',
                        children: t(e.content, n)
                    }),
                    n.key
                );
            }
        })),
        e
    );
}
