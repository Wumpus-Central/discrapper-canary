r.d(t, { default: () => l });
var n = r(200651),
    o = r(192379),
    c = r(481060),
    i = r(388032);
function l(e) {
    var t,
        r,
        { onConfirm: l } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['onConfirm']);
    let p = o.useCallback(() => {
        l(), (0, c.pTH)();
    }, [l]);
    return (0, n.jsxs)(
        c.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({ size: c.CgR.SMALL }, s)),
        (r = r =
            {
                children: [
                    (0, n.jsx)(c.hzk, {
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            style: { marginTop: 24 },
                            children: i.NW.string(i.t.nmBUv7)
                        })
                    }),
                    (0, n.jsxs)(c.mzw, {
                        children: [
                            (0, n.jsx)(c.zxk, {
                                color: c.Ttl.PRIMARY,
                                onClick: c.pTH,
                                children: i.NW.string(i.t['ETE/oK'])
                            }),
                            (0, n.jsx)(c.zxk, {
                                color: c.Ttl.RED,
                                onClick: p,
                                style: { marginRight: 8 },
                                children: i.NW.string(i.t.R9GHyc)
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
