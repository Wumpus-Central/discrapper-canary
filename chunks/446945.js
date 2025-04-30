n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(239091),
    s = n(838221),
    a = n(246364),
    o = n(540457),
    c = n(700833),
    u = n(388032),
    d = n(999384);
function m(e) {
    let { addFormField: t, onSelect: n, guild: o, allowTerms: m } = e;
    return (0, r.jsx)(i.v2r, {
        navId: 'add-questions',
        className: d.menu,
        onClose: l.Zy,
        'aria-label': u.intl.string(u.t.liqwPD),
        onSelect: n,
        children: (0, r.jsxs)(i.kSQ, {
            children: [
                (0, r.jsx)(i.sNh, {
                    id: 'text-input',
                    icon: (0, i.GSL)(s.Z),
                    label: u.intl.string(u.t.w6Q9w8),
                    action: () => (0, c.Md)(a.QJ.TEXT_INPUT, t, o)
                }),
                (0, r.jsx)(i.sNh, {
                    id: 'paragraph',
                    icon: i.OvV,
                    label: u.intl.string(u.t.gG0JBA),
                    action: () => (0, c.Md)(a.QJ.PARAGRAPH, t, o)
                }),
                (0, r.jsx)(i.sNh, {
                    id: 'multiple-choice',
                    icon: i.jE$,
                    label: u.intl.string(u.t.ooKh3t),
                    action: () => (0, c.Md)(a.QJ.MULTIPLE_CHOICE, t, o)
                }),
                m &&
                    (0, r.jsx)(i.sNh, {
                        id: 'terms',
                        icon: i.snC,
                        label: u.intl.string(u.t['3pz9t7']),
                        action: () => (0, c.Md)(a.QJ.TERMS, t, o)
                    })
            ]
        })
    });
}
let g = function (e) {
    let { addFormField: t, guild: n, allowTerms: i } = e;
    return (0, r.jsx)(o.A, {
        text: u.intl.string(u.t.CoHdoK),
        tooltipText: u.intl.string(u.t.nsI4dX),
        onClick: (e) => {
            (0, l.vq)(
                e,
                (e) => {
                    var l, s;
                    return (0, r.jsx)(
                        m,
                        ((l = (function (e) {
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
                        (s = s =
                            {
                                addFormField: t,
                                guild: n,
                                allowTerms: i
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        l)
                    );
                },
                {
                    position: 'top',
                    align: 'center'
                }
            );
        }
    });
};
