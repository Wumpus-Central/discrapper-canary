var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(611528);
let c = a.memo(function (e) {
    let { text: n, variant: r = 'text-xs/medium', color: o = 'text-normal', icon: c, className: d, selected: f, onMouseEnter: p, onMouseLeave: h, onClick: _ } = e,
        m = a.useMemo(() => {
            if (null != _) return () => _(n);
        }, [_, n]);
    return (0, i.jsxs)(l.Clickable, {
        tabIndex: null == _ ? -1 : 0,
        className: s()(
            u.trait,
            {
                [u.selectable]: null != m && !f,
                [u.selected]: f,
                [u.clickable]: null != m
            },
            d
        ),
        onMouseEnter: p,
        onMouseLeave: h,
        onClick: m,
        children: [
            null != c &&
                (0, i.jsx)(c, {
                    size: 'xs',
                    color: 'currentColor'
                }),
            (0, i.jsx)(l.Text, {
                variant: r,
                color: o,
                lineClamp: 1,
                children: n
            })
        ]
    });
});
n.Z = c;
