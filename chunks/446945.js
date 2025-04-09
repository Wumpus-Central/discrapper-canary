n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(239091),
    a = n(838221),
    l = n(246364),
    o = n(540457),
    c = n(700833),
    d = n(388032),
    u = n(999384);
function m(e) {
    let { addFormField: t, onSelect: n, guild: o, allowTerms: m } = e;
    return (0, r.jsx)(i.v2r, {
        navId: 'add-questions',
        className: u.menu,
        onClose: s.Zy,
        'aria-label': d.NW.string(d.t.liqwPD),
        onSelect: n,
        children: (0, r.jsxs)(i.kSQ, {
            children: [
                (0, r.jsx)(i.sNh, {
                    id: 'text-input',
                    icon: (0, i.GSL)(a.Z),
                    label: d.NW.string(d.t.w6Q9w8),
                    action: () => (0, c.Md)(l.QJ.TEXT_INPUT, t, o)
                }),
                (0, r.jsx)(i.sNh, {
                    id: 'paragraph',
                    icon: i.OvV,
                    label: d.NW.string(d.t.gG0JBA),
                    action: () => (0, c.Md)(l.QJ.PARAGRAPH, t, o)
                }),
                (0, r.jsx)(i.sNh, {
                    id: 'multiple-choice',
                    icon: i.jE$,
                    label: d.NW.string(d.t.ooKh3t),
                    action: () => (0, c.Md)(l.QJ.MULTIPLE_CHOICE, t, o)
                }),
                m &&
                    (0, r.jsx)(i.sNh, {
                        id: 'terms',
                        icon: i.snC,
                        label: d.NW.string(d.t['3pz9t7']),
                        action: () => (0, c.Md)(l.QJ.TERMS, t, o)
                    })
            ]
        })
    });
}
let g = function (e) {
    let { addFormField: t, guild: n, allowTerms: i } = e;
    return (0, r.jsx)(o.A, {
        text: d.NW.string(d.t.CoHdoK),
        tooltipText: d.NW.string(d.t.nsI4dX),
        onClick: (e) => {
            (0, s.vq)(
                e,
                (e) => {
                    var s, a;
                    return (0, r.jsx)(
                        m,
                        ((s = (function (e) {
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
                        (a = a =
                            {
                                addFormField: t,
                                guild: n,
                                allowTerms: i
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        s)
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
