r.d(t, { default: () => a });
var n = r(255367),
    o = r(73800),
    i = r(755721),
    c = r(481060),
    l = r(388032);
function a(e) {
    var t,
        r,
        { onConfirm: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) ((r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
            }
            return o;
        })(e, ['onConfirm']);
    let p = o.useCallback(() => {
        (a(), (0, c.pTH)());
    }, [a]);
    return (0, n.jsxs)(
        c.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })({ size: c.CgR.SMALL }, s)),
        (r = r =
            {
                parentComponent: 'DisableLandingPageWarningModal',
                children: [
                    (0, n.jsx)(c.hzk, {
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            style: { marginTop: 24 },
                            children: l.intl.string(l.t.nmBUv7)
                        })
                    }),
                    (0, n.jsxs)(c.mzw, {
                        children: [
                            (0, n.jsx)(c.zxk, {
                                variant: 'secondary',
                                text: l.intl.string(l.t['ETE/oK']),
                                onClick: c.pTH
                            }),
                            (0, n.jsx)(i.zx, {
                                color: i.Tt.RED,
                                onClick: p,
                                style: { marginRight: 8 },
                                children: l.intl.string(l.t.R9GHyc)
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
