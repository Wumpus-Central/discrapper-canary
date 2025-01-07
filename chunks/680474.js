t.d(n, {
    Z: function () {
        return f;
    }
});
var a = t(200651),
    i = t(192379),
    r = t(793030),
    l = t(34674),
    o = t(823379),
    s = t(448021),
    c = t(405411),
    d = t(215453),
    u = t(796150),
    m = t(24746),
    p = t(669401),
    _ = t(388032),
    g = t(609396);
function f(e) {
    let { application: n } = e,
        t = i.useMemo(() => {
            var e, t, a;
            return null !== (a = (null !== (t = null === (e = n.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(l.RF).filter(o.lm)) && void 0 !== a ? a : [];
        }, [n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: g.aboutContainer,
                children: [
                    (0, a.jsx)(s.Z, {
                        application: n,
                        carouselItems: t
                    }),
                    (0, a.jsx)(m.Z, { application: n }),
                    (0, a.jsx)(c.Z, { application: n }),
                    (0, a.jsx)(p.Z, { application: n }),
                    (0, a.jsx)(d.Z, { application: n })
                ]
            }),
            (0, a.jsxs)('div', {
                className: g.informationContainer,
                children: [
                    (0, a.jsx)('div', { className: g.divider }),
                    (0, a.jsx)(r.X6, {
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: _.intl.string(_.t['mD+J/v'])
                    }),
                    (0, a.jsx)(u.Z, {
                        application: n,
                        view: 'embedded'
                    })
                ]
            })
        ]
    });
}
