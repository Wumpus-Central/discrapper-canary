n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    c = n.n(o),
    s = n(481060),
    a = n(838221),
    l = n(246364),
    u = n(700833),
    d = n(388032),
    f = n(664305);
function p(e) {
    let { onClick: t, text: n, icon: i } = e;
    return (0, r.jsx)('div', {
        className: f.addFormFieldContainer,
        children: (0, r.jsxs)(s.P3F, {
            className: f.addFormField,
            onClick: t,
            children: [
                (0, r.jsx)(i, {
                    className: f.icon,
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, r.jsx)(s.R94, {
                    className: f.addFormFieldText,
                    children: n
                })
            ]
        })
    });
}
let b = function (e) {
    let { addFormField: t, showManualApprovalWarning: o, guild: b, showHeader: j } = e,
        y = i.useCallback(
            (e) => {
                (0, u.Md)(e, t, b);
            },
            [t, b]
        ),
        m = i.useCallback(
            (e) => {
                o
                    ? (0, s.ZDy)(async () => {
                          let { default: t } = await n.e('54845').then(n.bind(n, 199836));
                          return (n) => {
                              var i, o;
                              return (0, r.jsx)(
                                  t,
                                  ((i = (function (e) {
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
                                  })({}, n)),
                                  (o = o = { onSubmit: () => y(e) }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(o)).forEach(function (e) {
                                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                        }),
                                  i)
                              );
                          };
                      })
                    : y(e);
            },
            [o, y]
        );
    return (0, r.jsxs)('div', {
        className: c()(f.spacingContainer, f.backgroundContainer),
        children: [
            j &&
                (0, r.jsx)('div', {
                    className: f.containerTopHat,
                    children: (0, r.jsx)(s.Text, {
                        className: f.containerTopHatText,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: d.NW.string(d.t.neG9U1)
                    })
                }),
            (0, r.jsxs)('div', {
                className: f.leftRailIconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: f.iconContainer,
                        children: (0, r.jsx)(s.qJs, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 18,
                            height: 20,
                            className: f.icon
                        })
                    }),
                    (0, r.jsxs)(s.hjN, {
                        children: [
                            (0, r.jsx)(s.vwX, {
                                tag: 'h3',
                                className: f.leftRailIconContainerTitle,
                                children: d.NW.string(d.t['7v2xvr'])
                            }),
                            (0, r.jsx)(s.R94, {
                                className: f.leftRailIconContainerDescription,
                                type: s.R94.Types.DESCRIPTION,
                                children: d.NW.string(d.t.DyARHR)
                            }),
                            (0, r.jsx)(p, {
                                formFieldType: l.QJ.TEXT_INPUT,
                                addFormField: t,
                                icon: (0, s.GSL)(a.Z),
                                text: d.NW.string(d.t.w6Q9w8),
                                onClick: () => m(l.QJ.TEXT_INPUT)
                            }),
                            (0, r.jsx)(p, {
                                formFieldType: l.QJ.PARAGRAPH,
                                addFormField: t,
                                icon: s.OvV,
                                text: d.NW.string(d.t.gG0JBA),
                                onClick: () => m(l.QJ.PARAGRAPH)
                            }),
                            (0, r.jsx)(p, {
                                formFieldType: l.QJ.MULTIPLE_CHOICE,
                                addFormField: t,
                                icon: s.jE$,
                                text: d.NW.string(d.t.ooKh3t),
                                onClick: () => m(l.QJ.MULTIPLE_CHOICE)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
