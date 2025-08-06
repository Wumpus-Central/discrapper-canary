n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(955415),
    s = n(846587),
    l = n(409059),
    c = n(260539),
    u = n(388032),
    d = n(606966),
    f = n(273254);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                _(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    var t;
    let { code: _ } = e,
        h = (0, i.e7)([l.Z], () => l.Z.getGuildTemplate(_));
    if (null == h || h.state === c.Rj.RESOLVING)
        return (0, r.jsxs)(a.Z, {
            children: [(0, r.jsx)(a.Z.Header, { text: u.intl.string(u.t.Xj87YW) }), (0, r.jsx)(a.Z.Body, { resolving: !0 })]
        });
    if (h.state === c.Rj.EXPIRED)
        return (0, r.jsxs)(a.Z, {
            children: [
                (0, r.jsx)(a.Z.Header, { text: u.intl.string(u.t.C7ZRNz) }),
                (0, r.jsxs)(a.Z.Body, {
                    children: [
                        (0, r.jsx)(a.Z.Icon, { expired: !0 }),
                        (0, r.jsx)(a.Z.Info, {
                            expired: !0,
                            title: u.intl.string(u.t.A6MwXF)
                        })
                    ]
                })
            ]
        });
    let g = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('10778'), n.e('44044')]).then(n.bind(n, 766775));
                return (t) => (0, r.jsx)(e, m(p({}, t), { guildTemplate: h }));
            });
        },
        E = __OVERLAY__
            ? (0, r.jsx)(a.Z.Button, {
                  isDisabled: !0,
                  color: a.Z.Button.Colors.PRIMARY,
                  children: u.intl.string(u.t.W7NTWl)
              })
            : (0, r.jsx)(a.Z.Button, {
                  onClick: g,
                  submitting: h.state === c.Rj.ACCEPTING,
                  color: a.Z.Button.Colors.GREEN,
                  children: u.intl.string(u.t['a3Gl+f'])
              });
    return (0, r.jsxs)(a.Z, {
        children: [
            (0, r.jsx)(a.Z.Header, { text: u.intl.string(u.t.kAvFkJ) }),
            (0, r.jsxs)(a.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: f.headerLine,
                        children: [
                            (0, r.jsx)(s.Z, { className: d.icon }),
                            (0, r.jsx)(a.Z.Info, {
                                title: h.name,
                                children: u.intl.format(u.t.cGXXHB, { usageCount: String(null != (t = h.usageCount) ? t : 0) })
                            })
                        ]
                    }),
                    E
                ]
            })
        ]
    });
}
