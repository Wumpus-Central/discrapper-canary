n.d(t, { default: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(287734),
    l = n(313201),
    a = n(471253),
    c = n(939863),
    s = n(388032),
    u = n(717215);
let d = (e) => {
    var t,
        n,
        { channel: d } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel']);
    let f = (0, l.Dt)();
    return (0, r.jsxs)(
        i.ConfirmModal,
        ((t = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                confirmText: s.NW.string(s.t.saZaRU),
                cancelText: s.NW.string(s.t['ETE/oK']),
                onConfirm: () => {
                    (0, a.NZ)(d), o.default.disconnect();
                },
                confirmButtonColor: i.zxk.Colors.RED,
                bodyClassName: u.body
            },
            _
        )),
        (n = n =
            {
                children: [
                    (0, r.jsx)(c.Z, {
                        className: u.headerIconContainer,
                        children: (0, r.jsx)('div', {
                            className: u.iconBackground,
                            children: (0, r.jsx)(i.XzT, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40,
                                className: u.headerIcon
                            })
                        })
                    }),
                    (0, r.jsx)(i.X6q, {
                        id: f,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: u.title,
                        children: s.NW.string(s.t.xrYNBA)
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: u.subtitle,
                        children: s.NW.string(s.t.TP1D8v)
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
};
