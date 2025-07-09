n.d(t, { default: () => _ });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    o = n(287734),
    a = n(313201),
    c = n(471253),
    s = n(939863),
    u = n(388032),
    d = n(717215);
let _ = (e) => {
    var t,
        n,
        { channel: _ } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['channel']);
    let p = (0, a.Dt)();
    return (0, r.jsxs)(
        l.ConfirmModal,
        ((t = (function (e) {
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
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })(
            {
                confirmText: u.intl.string(u.t.saZaRU),
                cancelText: u.intl.string(u.t['ETE/oK']),
                onConfirm: () => {
                    ((0, c.NZ)(_), o.default.disconnect());
                },
                confirmButtonColor: i.zx.Colors.RED,
                bodyClassName: d.body
            },
            f
        )),
        (n = n =
            {
                children: [
                    (0, r.jsx)(s.Z, {
                        className: d.headerIconContainer,
                        children: (0, r.jsx)('div', {
                            className: d.iconBackground,
                            children: (0, r.jsx)(l.XzT, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40,
                                className: d.headerIcon
                            })
                        })
                    }),
                    (0, r.jsx)(l.X6q, {
                        id: p,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: d.title,
                        children: u.intl.string(u.t.xrYNBA)
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: d.subtitle,
                        children: u.intl.string(u.t.TP1D8v)
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
