(a.d(t, { Z: () => b }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(515149),
    i = a(913527),
    s = a.n(i),
    o = a(330711),
    c = a(442837),
    d = a(481060),
    u = a(665149),
    m = a(706454),
    x = a(428530),
    p = a(257785),
    h = a(388032);
function b() {
    let e = (0, c.e7)([m.default], () => m.default.locale),
        [t, a] = r.useState(),
        i = (0, l.runtimeHashMessageKey)(null != t ? t : ''),
        b = r.useMemo(() => h.t[i], [i]);
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsxs)(u.ZP, {
                children: [
                    (0, n.jsx)(u.ZP.Icon, {
                        icon: d.os0,
                        tooltip: 'Locale'
                    }),
                    (0, n.jsx)(u.ZP.Title, { children: 'Locale' })
                ]
            }),
            (0, n.jsxs)(p.E, {
                children: [
                    (0, n.jsx)(p.Z9, {
                        name: 'Active System',
                        children: '@discord/intl'
                    }),
                    (0, n.jsx)(p.Z9, {
                        name: 'App',
                        children: e
                    }),
                    (0, n.jsx)(p.Z9, {
                        name: 'System',
                        children: h.systemLocale
                    }),
                    (0, n.jsx)(p.Z9, {
                        name: '@discord/intl',
                        children: h.intl.currentLocale
                    }),
                    (0, n.jsx)(p.Z9, {
                        name: 'common i18n',
                        children: o.Z.getLocale()
                    }),
                    (0, n.jsx)(p.Z9, {
                        name: 'Moment',
                        children: s().locale()
                    })
                ]
            }),
            (0, n.jsxs)(u.ZP, {
                children: [
                    (0, n.jsx)(u.ZP.Icon, {
                        icon: d.os0,
                        tooltip: 'Messages'
                    }),
                    (0, n.jsx)(u.ZP.Title, { children: 'New System Messages' })
                ]
            }),
            (0, n.jsx)(p.E, {
                children: (0, n.jsx)(p.Z9, {
                    name: 'Unique Rendered Main Messages',
                    children: Object.keys(h.t).length
                })
            }),
            (0, n.jsx)(d.oil, {
                onChange: function (e) {
                    a(e);
                },
                name: 'Message name',
                style: { margin: 16 },
                placeholder: 'Find a message'
            }),
            (0, n.jsxs)(p.E, {
                children: [
                    (0, n.jsx)(p.Z9, {
                        name: 'Hashed key',
                        children: i
                    }),
                    (0, n.jsx)(p.Z9, {
                        name: 'Exists?',
                        children: null != b ? 'yes' : 'no'
                    })
                ]
            }),
            (0, n.jsx)(x.Z, { data: null == b ? void 0 : b(e) })
        ]
    });
}
