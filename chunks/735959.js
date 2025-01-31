n.d(t, { Z: () => f }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(914552),
    i = n(913527),
    o = n.n(i),
    s = n(330711),
    c = n(442837),
    d = n(481060),
    u = n(665149),
    m = n(706454),
    h = n(428530),
    x = n(257785),
    p = n(388032);
function f() {
    let e = (0, c.e7)([m.default], () => m.default.locale),
        [t, n] = l.useState(),
        i = (0, r.runtimeHashMessageKey)(null != t ? t : ''),
        f = l.useMemo(() => p.t[i], [i]);
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)(u.ZP, {
                children: [
                    (0, a.jsx)(u.ZP.Icon, {
                        icon: d.os0,
                        tooltip: 'Locale'
                    }),
                    (0, a.jsx)(u.ZP.Title, { children: 'Locale' })
                ]
            }),
            (0, a.jsxs)(x.E, {
                children: [
                    (0, a.jsx)(x.Z9, {
                        name: 'Active System',
                        children: '@discord/intl'
                    }),
                    (0, a.jsx)(x.Z9, {
                        name: 'App',
                        children: e
                    }),
                    (0, a.jsx)(x.Z9, {
                        name: '@discord/intl',
                        children: p.intl.currentLocale
                    }),
                    (0, a.jsx)(x.Z9, {
                        name: 'common i18n',
                        children: s.Z.getLocale()
                    }),
                    (0, a.jsx)(x.Z9, {
                        name: 'Moment',
                        children: o().locale()
                    })
                ]
            }),
            (0, a.jsxs)(u.ZP, {
                children: [
                    (0, a.jsx)(u.ZP.Icon, {
                        icon: d.os0,
                        tooltip: 'Messages'
                    }),
                    (0, a.jsx)(u.ZP.Title, { children: 'New System Messages' })
                ]
            }),
            (0, a.jsx)(d.oil, {
                onChange: function (e) {
                    n(e);
                },
                name: 'Message name',
                style: { margin: 16 },
                placeholder: 'Find a message'
            }),
            (0, a.jsxs)(x.E, {
                children: [
                    (0, a.jsx)(x.Z9, {
                        name: 'Hashed key',
                        children: i
                    }),
                    (0, a.jsx)(x.Z9, {
                        name: 'Exists?',
                        children: null != f ? 'yes' : 'no'
                    })
                ]
            }),
            (0, a.jsx)(h.Z, { data: null == f ? void 0 : f(e) })
        ]
    });
}
