r.d(t, { default: () => d }), r(47120);
var n = r(200651),
    o = r(192379),
    c = r(481060),
    s = r(27237),
    a = r(17622),
    i = r(790053),
    l = r(942570);
function d(e) {
    var t,
        r,
        { guildId: d, powerup: p } = e,
        u = (function (e, t) {
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
        })(e, ['guildId', 'powerup']);
    let [b, f] = o.useState(void 0);
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
        })(
            {
                className: i.modal,
                size: c.CgR.SMALL
            },
            u
        )),
        (r = r =
            {
                children: [
                    (0, n.jsxs)(c.hzk, {
                        className: i.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsx)('img', {
                                alt: '',
                                src: l,
                                className: i.boostImage
                            }),
                            (0, n.jsxs)('div', {
                                className: i.contentContainer,
                                children: [
                                    (0, n.jsx)(c.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        children: p.title
                                    }),
                                    (0, n.jsx)(a.Z, {}),
                                    null != b &&
                                        (0, n.jsx)(c.Text, {
                                            color: 'status-danger',
                                            variant: 'text-sm/semibold',
                                            children: b
                                        }),
                                    (0, n.jsx)(s._R, {
                                        className: i.footer,
                                        guildId: d,
                                        powerup: p,
                                        onError: f
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)(c.olH, {
                        className: i.close,
                        onClick: u.onClose
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
