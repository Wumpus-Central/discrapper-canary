n.d(t, { Z: () => u });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(551263);
let u = r.memo(function (e) {
    let { text: t, variant: n = 'text-xs/medium', color: a = 'text-normal', icon: u, className: c, selected: d, onMouseEnter: f, onMouseLeave: _, onClick: p } = e,
        h = r.useMemo(() => {
            if (null != p) return () => p(t);
        }, [p, t]);
    return (0, i.jsxs)(o.P3F, {
        tabIndex: null == p ? -1 : 0,
        className: s()(
            l.trait,
            {
                [l.selectable]: null != h && !d,
                [l.selected]: d,
                [l.clickable]: null != h
            },
            c
        ),
        onMouseEnter: f,
        onMouseLeave: _,
        onClick: h,
        children: [
            null != u &&
                (0, i.jsx)(u, {
                    size: 'xs',
                    color: 'currentColor'
                }),
            (0, i.jsx)(o.Text, {
                variant: n,
                color: a,
                lineClamp: 1,
                children: t
            })
        ]
    });
});
