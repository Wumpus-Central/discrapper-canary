t.d(n, {
    Z: function () {
        return p;
    }
});
var a = t(200651),
    i = t(192379),
    r = t(34674),
    l = t(823379),
    o = t(448021),
    s = t(405411),
    c = t(215453),
    d = t(24746),
    u = t(669401),
    m = t(609396);
function p(e) {
    let { application: n } = e,
        t = i.useMemo(() => {
            var e, t, a;
            return null !== (a = (null !== (t = null === (e = n.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(r.RF).filter(l.lm)) && void 0 !== a ? a : [];
        }, [n]);
    return (0, a.jsxs)('div', {
        className: m.aboutContainer,
        children: [
            (0, a.jsx)(o.Z, {
                application: n,
                carouselItems: t
            }),
            (0, a.jsx)(d.Z, { application: n }),
            (0, a.jsx)(s.Z, { application: n }),
            (0, a.jsx)(u.Z, { application: n }),
            (0, a.jsx)(c.Z, { application: n })
        ]
    });
}
