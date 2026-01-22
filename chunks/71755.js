n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(529200),
    o = n(635491),
    l = n(122906),
    c = n(401755),
    u = n(985018),
    d = n(687563),
    f = n(563111);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
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
    let { code: p } = e,
        h = (0, i.bG)([l.A], () => l.A.getGuildTemplate(p));
    if (null == h || h.state === c.QB.RESOLVING)
        return (0, r.jsxs)(s.A, {
            children: [
                (0, r.jsx)(s.A.Header, { text: u.intl.string(u.t.Xj87Yf) }),
                (0, r.jsx)(s.A.Body, { resolving: !0 }),
            ],
        });
    if (h.state === c.QB.EXPIRED)
        return (0, r.jsxs)(s.A, {
            children: [
                (0, r.jsx)(s.A.Header, { text: u.intl.string(u.t.C7ZRNw) }),
                (0, r.jsxs)(s.A.Body, {
                    children: [
                        (0, r.jsx)(s.A.Icon, { expired: !0 }),
                        (0, r.jsx)(s.A.Info, {
                            expired: !0,
                            title: u.intl.string(u.t.A6MwXE),
                        }),
                    ],
                }),
            ],
        });
    let g = () => {
            (0, a.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("7726"), n.e("4042")]).then(n.bind(n, 72715));
                return (t) => (0, r.jsx)(e, m(_({}, t), { guildTemplate: h }));
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
                  loading: h.state === c.QB.ACCEPTING,
                  variant: "active",
                  text: u.intl.string(u.t["a3Gl+e"]),
              });
    return (0, r.jsxs)(s.A, {
        children: [
            (0, r.jsx)(s.A.Header, { text: u.intl.string(u.t.kAvFkO) }),
            (0, r.jsxs)(s.A.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: f.iH,
                        children: [
                            (0, r.jsx)(o.A, { className: d.K }),
                            (0, r.jsx)(s.A.Info, {
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
