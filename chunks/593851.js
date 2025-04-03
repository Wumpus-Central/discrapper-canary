n.d(t, { default: () => p }), n(47120);
var r = n(200651),
    a = n(192379),
    c = n(481060),
    o = n(239091),
    s = n(76234),
    i = n(981631),
    l = n(388032);
function u(e) {
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
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { initialOptions: t, onChangeMaxAge: n, onChangeMaxUses: p } = e,
        [O, f] = a.useState(t),
        g = a.useCallback(
            (e) => {
                f((t) => b(u({}, t), { max_age: e })), n(e);
            },
            [f, n]
        ),
        y = a.useCallback(
            (e) => {
                f((t) => b(u({}, t), { max_uses: e })), p(e);
            },
            [f, p]
        );
    return (0, r.jsxs)(c.v2r, {
        navId: 'instant_invite_options',
        onSelect: i.dG4,
        onClose: o.Zy,
        'aria-label': l.NW.string(l.t.b85Vws),
        children: [
            (0, r.jsx)(c.kSQ, {
                label: l.NW.string(l.t.Sdarfn),
                children: s.H.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, r.jsx)(
                        c.k5B,
                        {
                            id: 'max-age-'.concat(t),
                            group: 'instant_invite_max_age',
                            checked: t === O.max_age,
                            label: n,
                            action: () => g(t)
                        },
                        'max-age-'.concat(t)
                    );
                })
            }),
            (0, r.jsx)(c.kSQ, {
                label: l.NW.string(l.t['/2yRSE']),
                children: s.p.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, r.jsx)(
                        c.k5B,
                        {
                            id: 'max-uses-'.concat(t),
                            group: 'instant_invite_max_uses',
                            checked: t === O.max_uses,
                            label: n,
                            action: () => y(t)
                        },
                        'max-uses-'.concat(t)
                    );
                })
            })
        ]
    });
}
