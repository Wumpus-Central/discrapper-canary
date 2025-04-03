n.d(t, { Z: () => c }), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(600164),
    l = n(245315),
    o = n(388032),
    s = n(49791);
let c = () =>
    (0, r.jsxs)(a.Z, {
        align: a.Z.Align.CENTER,
        justify: a.Z.Justify.CENTER,
        direction: a.Z.Direction.VERTICAL,
        className: s.popout,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: (0, l.QA)(),
                className: s.avatar
            }),
            (0, r.jsxs)(a.Z, {
                align: a.Z.Align.CENTER,
                justify: a.Z.Justify.CENTER,
                className: s.nameWrapper,
                children: [
                    (0, r.jsx)(i.ua7, {
                        text: o.NW.string(o.t.oMx98P),
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                'div',
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
                                })({}, e)),
                                (n = n = { className: s.staffBadge }),
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
                        }
                    }),
                    (0, r.jsx)(i.X6q, {
                        className: s.header,
                        variant: 'heading-md/semibold',
                        children: o.NW.string(o.t.xfAlNz)
                    })
                ]
            }),
            (0, r.jsx)(i.Text, {
                className: s.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: o.NW.string(o.t.BUZ0sr)
            }),
            (0, r.jsx)(i.Text, {
                className: s.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: o.NW.string(o.t.w5beJC)
            })
        ]
    });
