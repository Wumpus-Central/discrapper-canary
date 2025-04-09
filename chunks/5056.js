n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(838221),
    c = n(246364),
    d = n(700833),
    u = n(388032),
    m = n(664305);
function g(e) {
    let { onClick: t, text: n, icon: i } = e;
    return (0, r.jsx)('div', {
        className: m.addFormFieldContainer,
        children: (0, r.jsxs)(l.P3F, {
            className: m.addFormField,
            onClick: t,
            children: [
                (0, r.jsx)(i, {
                    className: m.icon,
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, r.jsx)(l.R94, {
                    className: m.addFormFieldText,
                    children: n
                })
            ]
        })
    });
}
let p = function (e) {
    let { addFormField: t, showManualApprovalWarning: s, guild: p, showHeader: f } = e,
        h = i.useCallback(
            (e) => {
                (0, d.Md)(e, t, p);
            },
            [t, p]
        ),
        b = i.useCallback(
            (e) => {
                s
                    ? (0, l.ZDy)(async () => {
                          let { default: t } = await n.e('54845').then(n.bind(n, 199836));
                          return (n) => {
                              var i, s;
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
                                  (s = s = { onSubmit: () => h(e) }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(s)).forEach(function (e) {
                                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                        }),
                                  i)
                              );
                          };
                      })
                    : h(e);
            },
            [s, h]
        );
    return (0, r.jsxs)('div', {
        className: a()(m.spacingContainer, m.backgroundContainer),
        children: [
            f &&
                (0, r.jsx)('div', {
                    className: m.containerTopHat,
                    children: (0, r.jsx)(l.Text, {
                        className: m.containerTopHatText,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: u.NW.string(u.t.neG9U1)
                    })
                }),
            (0, r.jsxs)('div', {
                className: m.leftRailIconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: m.iconContainer,
                        children: (0, r.jsx)(l.qJs, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 18,
                            height: 20,
                            className: m.icon
                        })
                    }),
                    (0, r.jsxs)(l.hjN, {
                        children: [
                            (0, r.jsx)(l.vwX, {
                                tag: 'h3',
                                className: m.leftRailIconContainerTitle,
                                children: u.NW.string(u.t['7v2xvr'])
                            }),
                            (0, r.jsx)(l.R94, {
                                className: m.leftRailIconContainerDescription,
                                type: l.R94.Types.DESCRIPTION,
                                children: u.NW.string(u.t.DyARHR)
                            }),
                            (0, r.jsx)(g, {
                                formFieldType: c.QJ.TEXT_INPUT,
                                addFormField: t,
                                icon: (0, l.GSL)(o.Z),
                                text: u.NW.string(u.t.w6Q9w8),
                                onClick: () => b(c.QJ.TEXT_INPUT)
                            }),
                            (0, r.jsx)(g, {
                                formFieldType: c.QJ.PARAGRAPH,
                                addFormField: t,
                                icon: l.OvV,
                                text: u.NW.string(u.t.gG0JBA),
                                onClick: () => b(c.QJ.PARAGRAPH)
                            }),
                            (0, r.jsx)(g, {
                                formFieldType: c.QJ.MULTIPLE_CHOICE,
                                addFormField: t,
                                icon: l.jE$,
                                text: u.NW.string(u.t.ooKh3t),
                                onClick: () => b(c.QJ.MULTIPLE_CHOICE)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
