n.d(t, { Z: () => _ });
var i = n(200651),
    a = n(192379),
    r = n(793030),
    l = n(34674),
    s = n(823379),
    o = n(448021),
    c = n(405411),
    d = n(215453),
    u = n(796150),
    m = n(24746),
    h = n(669401),
    p = n(388032),
    g = n(290224);
function _(e) {
    let { application: t } = e,
        n = a.useMemo(() => {
            var e, n, i;
            return null !== (i = (null !== (n = null === (e = t.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(l.RF).filter(s.lm)) && void 0 !== i ? i : [];
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: g.aboutContainer,
                children: [
                    (0, i.jsx)(o.Z, {
                        application: t,
                        carouselItems: n
                    }),
                    (0, i.jsx)(m.Z, { application: t }),
                    (0, i.jsx)(c.Z, { application: t }),
                    (0, i.jsx)(h.Z, { application: t }),
                    (0, i.jsx)(d.Z, { application: t })
                ]
            }),
            (0, i.jsxs)('div', {
                className: g.informationContainer,
                children: [
                    (0, i.jsx)('div', { className: g.divider }),
                    (0, i.jsx)(r.X6, {
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: p.intl.string(p.t['mD+J/v'])
                    }),
                    (0, i.jsx)(u.Z, {
                        application: t,
                        view: 'embedded'
                    })
                ]
            })
        ]
    });
}
