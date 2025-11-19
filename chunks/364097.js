n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(955415),
    s = n(846587),
    l = n(409059),
    c = n(260539),
    u = n(388032),
    d = n(305794),
    f = n(739236);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
        return (0, r.jsxs)(o.Z, {
            children: [
                (0, r.jsx)(o.Z.Header, { text: u.intl.string(u.t.Xj87Yf) }),
                (0, r.jsx)(o.Z.Body, { resolving: !0 }),
            ],
        });
    if (h.state === c.Rj.EXPIRED)
        return (0, r.jsxs)(o.Z, {
            children: [
                (0, r.jsx)(o.Z.Header, { text: u.intl.string(u.t.C7ZRNw) }),
                (0, r.jsxs)(o.Z.Body, {
                    children: [
                        (0, r.jsx)(o.Z.Icon, { expired: !0 }),
                        (0, r.jsx)(o.Z.Info, {
                            expired: !0,
                            title: u.intl.string(u.t.A6MwXE),
                        }),
                    ],
                }),
            ],
        });
    let g = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("10778"), n.e("10570")]).then(n.bind(n, 766775));
                return (t) => (0, r.jsx)(e, m(p({}, t), { guildTemplate: h }));
            });
        },
        E = __OVERLAY__
            ? (0, r.jsx)(a.Button, {
                  disabled: !0,
                  variant: "secondary",
                  text: u.intl.string(u.t.W7NTWm),
              })
            : (0, r.jsx)(a.Button, {
                  onClick: g,
                  loading: h.state === c.Rj.ACCEPTING,
                  variant: "active",
                  text: u.intl.string(u.t["a3Gl+e"]),
              });
    return (0, r.jsxs)(o.Z, {
        children: [
            (0, r.jsx)(o.Z.Header, { text: u.intl.string(u.t.kAvFkO) }),
            (0, r.jsxs)(o.Z.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: f.headerLine,
                        children: [
                            (0, r.jsx)(s.Z, { className: d.icon }),
                            (0, r.jsx)(o.Z.Info, {
                                title: h.name,
                                children: u.intl.format(u.t.cGXXHL, {
                                    usageCount: String(null != (t = h.usageCount) ? t : 0),
                                }),
                            }),
                        ],
                    }),
                    E,
                ],
            }),
        ],
    });
}
