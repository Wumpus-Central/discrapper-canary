n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(934846);
let c = i.memo(function (e) {
    let { text: t, variant: n = 'text-xs/medium', color: s = 'text-normal', icon: c, className: d, selected: u, onMouseEnter: m, onMouseLeave: g, onClick: p } = e,
        h = i.useMemo(() => {
            if (null != p) return () => p(t);
        }, [p, t]);
    return (0, r.jsxs)(l.P3F, {
        tabIndex: null == p ? -1 : 0,
        className: a()(
            o.trait,
            {
                [o.selectable]: null != h && !u,
                [o.selected]: u,
                [o.clickable]: null != h
            },
            d
        ),
        onMouseEnter: m,
        onMouseLeave: g,
        onClick: h,
        children: [
            null != c &&
                (0, r.jsx)(c, {
                    size: 'xs',
                    color: 'currentColor'
                }),
            (0, r.jsx)(l.Text, {
                variant: n,
                color: s,
                lineClamp: 1,
                children: t
            })
        ]
    });
});
