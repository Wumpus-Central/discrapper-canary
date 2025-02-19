t.d(r, { default: () => i });
var n = t(200651);
t(192379);
var o = t(481060),
    c = t(388032);
function i(e) {
    var r,
        t,
        { onConfirm: i } = e,
        l = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                o = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (t = c[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (t = c[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['onConfirm']);
    return (0, n.jsx)(
        o.ConfirmModal,
        ((r = (function (e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {},
                    n = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    n.forEach(function (r) {
                        var n;
                        (n = t[r]),
                            r in e
                                ? Object.defineProperty(e, r, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[r] = n);
                    });
            }
            return e;
        })(
            {
                header: c.NW.string(c.t['5yTUub']),
                confirmText: c.NW.string(c.t.TyCVIi),
                cancelText: c.NW.string(c.t['ETE/oK']),
                confirmButtonColor: o.zxk.Colors.BRAND,
                onConfirm: i
            },
            l
        )),
        (t = t =
            {
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: c.NW.string(c.t.dRhrXl)
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        r)
    );
}
