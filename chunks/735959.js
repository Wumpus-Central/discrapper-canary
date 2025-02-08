n.d(t, { Z: () => p }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(914552),
    i = n(913527),
    o = n.n(i),
    s = n(330711),
    c = n(442837),
    d = n(481060),
    u = n(665149),
    h = n(706454),
    m = n(428530),
    x = n(257785),
    _ = n(388032);
function p() {
    let e = (0, c.e7)([h.default], () => h.default.locale),
        [t, n] = r.useState(),
        i = (0, l.runtimeHashMessageKey)(null != t ? t : ''),
        p = r.useMemo(() => _.t[i], [i]);
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
                        children: _.intl.currentLocale
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
                        children: null != p ? 'yes' : 'no'
                    })
                ]
            }),
            (0, a.jsx)(m.Z, { data: null == p ? void 0 : p(e) })
        ]
    });
}
