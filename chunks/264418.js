n.d(t, { J: () => u });
var i = n(255367),
    r = n(73800),
    s = n(920155),
    a = n(744399),
    l = n(454028),
    o = n(966902),
    c = n(237872),
    d = n(562618);
function u(e) {
    var t,
        n,
        {
            title: u,
            body: m,
            caretConfig: p = {
                position: 'bottom',
                align: 'center'
            },
            badge: g,
            asset: h,
            size: f = 'md',
            buttons: b,
            textLink: x,
            gradientColor: _,
            onRequestClose: j,
            popoverRef: E
        } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['title', 'body', 'caretConfig', 'badge', 'asset', 'size', 'buttons', 'textLink', 'gradientColor', 'onRequestClose', 'popoverRef']);
    let C = r.useCallback(() => {
            null == j || j();
        }, [j]),
        v = r.useCallback(() => {
            null == j || j();
        }, [j]);
    return (0, i.jsx)(
        s.m,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        ((i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i));
                    }));
            }
            return e;
        })({}, O)),
        (n = n =
            {
                onRequestClose: C,
                gradientColor: _,
                children: (0, i.jsxs)('div', {
                    ref: E,
                    children: [
                        (0, i.jsx)(c.u, {
                            onClick: v,
                            colorMix: null != _
                        }),
                        (0, i.jsx)(l.V, {
                            asset: h,
                            size: f
                        }),
                        (0, i.jsx)(d.Y, {
                            title: u,
                            body: m,
                            badge: g,
                            textLink: x
                        }),
                        (0, i.jsx)(a.k, { buttons: b }),
                        (0, i.jsx)(o.$, { caretConfig: p })
                    ]
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
