n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var a = n(200651),
    l = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(835473),
    s = n(925329),
    u = n(706454),
    d = n(709054),
    c = n(388032),
    m = n(829734);
function p(e) {
    var t, n;
    let { clip: p } = e,
        [v] = (0, o.Z)([null !== (t = p.applicationId) && void 0 !== t ? t : '']),
        f = (0, i.e7)([u.default], () => u.default.locale),
        b = l.useMemo(() => new Date(d.default.extractTimestamp(p.id)), [p.id]);
    return (0, a.jsxs)('div', {
        className: m.root,
        children: [
            (0, a.jsxs)('div', {
                className: m.nameSection,
                children: [
                    (0, a.jsx)(s.Z, { game: v }),
                    (0, a.jsx)(r.Text, {
                        className: m.name,
                        variant: 'text-md/medium',
                        color: 'interactive-active',
                        children: null !== (n = null == v ? void 0 : v.name) && void 0 !== n ? n : p.applicationName
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: m.timeContainer,
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(r.FormTitle, {
                                className: m.timeTitle,
                                children: c.intl.string(c.t.g8pDeX)
                            }),
                            (0, a.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'interactive-active',
                                children: b.toLocaleDateString(f, {
                                    year: '2-digit',
                                    month: '2-digit',
                                    day: '2-digit'
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(r.FormTitle, {
                                className: m.timeTitle,
                                children: c.intl.string(c.t.v6XAgo)
                            }),
                            (0, a.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'interactive-active',
                                children: b.toLocaleTimeString(f, {
                                    hour: 'numeric',
                                    minute: 'numeric'
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
