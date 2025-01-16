var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(611528);
let c = a.memo(function (e) {
    let { text: n, variant: r = 'text-xs/medium', color: s = 'text-normal', icon: c, className: d, selected: f, onMouseEnter: _, onMouseLeave: h, onClick: p } = e,
        m = a.useMemo(() => {
            if (null != p) return () => p(n);
        }, [p, n]);
    return (0, i.jsxs)(l.Clickable, {
        tabIndex: null == p ? -1 : 0,
        className: o()(
            u.trait,
            {
                [u.selectable]: null != m && !f,
                [u.selected]: f,
                [u.clickable]: null != m
            },
            d
        ),
        onMouseEnter: _,
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
                color: s,
                lineClamp: 1,
                children: n
            })
        ]
    });
});
n.Z = c;
