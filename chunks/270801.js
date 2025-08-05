n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(257465),
    a = n(369585),
    o = n(103866),
    s = n(481060),
    l = n(313201),
    c = n(388032),
    u = n(802867);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = () =>
        n
            .e('49812')
            .then(n.t.bind(n, 48603, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    m = (e) => {
        let t = (0, l.Dt)(),
            n = () => {
                (e.onAccept(), e.onClose());
            };
        return (0, r.jsxs)(
            i.I,
            p(f({}, e), {
                size: 'sm',
                children: [
                    (0, r.jsx)('div', {
                        className: u.animationContainer,
                        children: (0, r.jsx)(s.Fmz, {
                            importData: h,
                            className: u.animationMiddle
                        })
                    }),
                    (0, r.jsx)(o.f, {
                        children: (0, r.jsxs)('div', {
                            className: u.manaContainer,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: u.header,
                                    id: t,
                                    children: c.intl.format(c.t.z9qozM, { guildName: e.guildName })
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: c.intl.string(c.t.nwpqyc)
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)(a.G, {
                        actions: [
                            {
                                variant: 'primary',
                                onClick: n,
                                text: c.intl.string(c.t.NuzmOD)
                            }
                        ],
                        actionsFullWidth: !0
                    })
                ]
            })
        );
    };
