r.d(t, { default: () => l });
var n = r(255367),
    o = r(73800),
    i = r(481060),
    c = r(388032);
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
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['onConfirm']);
    let a = o.useCallback(() => {
        l(), (0, i.pTH)();
    }, [l]);
    return (0, n.jsxs)(
        i.Y0X,
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
        })({ size: i.CgR.SMALL }, s)),
        (r = r =
            {
                parentComponent: 'DisableLandingPageWarningModal',
                children: [
                    (0, n.jsx)(i.hzk, {
                        children: (0, n.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            style: { marginTop: 24 },
                            children: c.intl.string(c.t.nmBUv7)
                        })
                    }),
                    (0, n.jsxs)(i.mzw, {
                        children: [
                            (0, n.jsx)(i.zxk, {
                                color: i.Ttl.PRIMARY,
                                onClick: i.pTH,
                                children: c.intl.string(c.t['ETE/oK'])
                            }),
                            (0, n.jsx)(i.zxk, {
                                color: i.Ttl.RED,
                                onClick: a,
                                style: { marginRight: 8 },
                                children: c.intl.string(c.t.R9GHyc)
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
