n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(934846);
let c = r.memo(function (e) {
    let { text: t, variant: n = 'text-xs/medium', color: l = 'text-normal', icon: c, className: u, selected: d, onMouseEnter: m, onMouseLeave: f, onClick: g } = e,
        h = r.useMemo(() => {
            if (null != g) return () => g(t);
        }, [g, t]);
    return (0, i.jsxs)(s.P3F, {
        tabIndex: null == g ? -1 : 0,
        className: a()(
            o.trait,
            {
                [o.selectable]: null != h && !d,
                [o.selected]: d,
                [o.clickable]: null != h
            },
            u
        ),
        onMouseEnter: m,
        onMouseLeave: f,
        onClick: h,
        children: [
            null != c &&
                (0, i.jsx)(c, {
                    size: 'xs',
                    color: 'currentColor'
                }),
            (0, i.jsx)(s.Text, {
                variant: n,
                color: l,
                lineClamp: 1,
                children: t
            })
        ]
    });
});
