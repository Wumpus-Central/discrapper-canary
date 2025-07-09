r.d(e, { default: () => l });
var n = r(255367);
r(73800);
var o = r(755721),
    i = r(481060),
    c = r(388032);
function l(t) {
    var e,
        r,
        { onConfirm: l } = t,
        u = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) ((r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]));
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++) ((r = i[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
            }
            return o;
        })(t, ['onConfirm']);
    return (0, n.jsx)(
        i.ConfirmModal,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        })
                    )),
                    n.forEach(function (e) {
                        var n;
                        ((n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = n));
                    }));
            }
            return t;
        })(
            {
                header: c.intl.string(c.t['5yTUub']),
                confirmText: c.intl.string(c.t.TyCVIi),
                cancelText: c.intl.string(c.t['ETE/oK']),
                confirmButtonColor: o.zx.Colors.BRAND,
                onConfirm: l
            },
            u
        )),
        (r = r =
            {
                children: (0, n.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: c.intl.string(c.t.dRhrXl)
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e)
    );
}
