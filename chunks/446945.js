n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(239091),
    c = n(838221),
    s = n(246364),
    a = n(540457),
    l = n(700833),
    u = n(388032),
    d = n(999384);
function f(e) {
    let { addFormField: t, onSelect: n, guild: a, allowTerms: f } = e;
    return (0, r.jsx)(i.v2r, {
        navId: 'add-questions',
        className: d.menu,
        onClose: o.Zy,
        'aria-label': u.NW.string(u.t.liqwPD),
        onSelect: n,
        children: (0, r.jsxs)(i.kSQ, {
            children: [
                (0, r.jsx)(i.sNh, {
                    id: 'text-input',
                    icon: (0, i.GSL)(c.Z),
                    label: u.NW.string(u.t.w6Q9w8),
                    action: () => (0, l.Md)(s.QJ.TEXT_INPUT, t, a)
                }),
                (0, r.jsx)(i.sNh, {
                    id: 'paragraph',
                    icon: i.OvV,
                    label: u.NW.string(u.t.gG0JBA),
                    action: () => (0, l.Md)(s.QJ.PARAGRAPH, t, a)
                }),
                (0, r.jsx)(i.sNh, {
                    id: 'multiple-choice',
                    icon: i.jE$,
                    label: u.NW.string(u.t.ooKh3t),
                    action: () => (0, l.Md)(s.QJ.MULTIPLE_CHOICE, t, a)
                }),
                f &&
                    (0, r.jsx)(i.sNh, {
                        id: 'terms',
                        icon: i.snC,
                        label: u.NW.string(u.t['3pz9t7']),
                        action: () => (0, l.Md)(s.QJ.TERMS, t, a)
                    })
            ]
        })
    });
}
let p = function (e) {
    let { addFormField: t, guild: n, allowTerms: i } = e;
    return (0, r.jsx)(a.A, {
        text: u.NW.string(u.t.CoHdoK),
        tooltipText: u.NW.string(u.t.nsI4dX),
        onClick: (e) => {
            (0, o.vq)(
                e,
                (e) => {
                    var o, c;
                    return (0, r.jsx)(
                        f,
                        ((o = (function (e) {
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
                        (c = c =
                            {
                                addFormField: t,
                                guild: n,
                                allowTerms: i
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(c)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                              }),
                        o)
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
