(a.d(t, { Z: () => f }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(515149),
    i = a(913527),
    s = a.n(i),
    o = a(330711),
    c = a(442837),
    d = a(755721),
    u = a(481060),
    m = a(665149),
    p = a(706454),
    x = a(428530),
    h = a(257785),
    b = a(388032);
function f() {
    let e = (0, c.e7)([p.default], () => p.default.locale),
        [t, a] = r.useState(),
        i = (0, l.runtimeHashMessageKey)(null != t ? t : ''),
        f = r.useMemo(() => b.t[i], [i]);
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsxs)(m.ZP, {
                children: [
                    (0, n.jsx)(m.ZP.Icon, {
                        icon: u.os0,
                        tooltip: 'Locale'
                    }),
                    (0, n.jsx)(m.ZP.Title, { children: 'Locale' })
                ]
            }),
            (0, n.jsxs)(h.E, {
                children: [
                    (0, n.jsx)(h.Z9, {
                        name: 'Active System',
                        children: '@discord/intl'
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: 'App',
                        children: e
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: 'System',
                        children: b.systemLocale
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: '@discord/intl',
                        children: b.intl.currentLocale
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: 'common i18n',
                        children: o.Z.getLocale()
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: 'Moment',
                        children: s().locale()
                    })
                ]
            }),
            (0, n.jsxs)(m.ZP, {
                children: [
                    (0, n.jsx)(m.ZP.Icon, {
                        icon: u.os0,
                        tooltip: 'Messages'
                    }),
                    (0, n.jsx)(m.ZP.Title, { children: 'New System Messages' })
                ]
            }),
            (0, n.jsx)(h.E, {
                children: (0, n.jsx)(h.Z9, {
                    name: 'Unique Rendered Main Messages',
                    children: Object.keys(b.t).length
                })
            }),
            (0, n.jsx)(d.Is, {
                onChange: function (e) {
                    a(e);
                },
                name: 'Message name',
                style: { margin: 16 },
                placeholder: 'Find a message'
            }),
            (0, n.jsxs)(h.E, {
                children: [
                    (0, n.jsx)(h.Z9, {
                        name: 'Hashed key',
                        children: i
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: 'Exists?',
                        children: null != f ? 'yes' : 'no'
                    })
                ]
            }),
            (0, n.jsx)(x.Z, { data: null == f ? void 0 : f(e) })
        ]
    });
}
