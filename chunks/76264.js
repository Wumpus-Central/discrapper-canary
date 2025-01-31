n.d(t, { Z: () => d }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(259580),
    l = n(170780),
    u = n(847273);
let c = (e) => {
        let { child: t, onClick: n } = e,
            [r] = t;
        return (0, i.jsxs)(s.P3F, {
            className: a()(u.childButton, l.listElement),
            onClick: () => n(t),
            children: [
                (0, i.jsx)(s.Text, {
                    className: u.childText,
                    variant: 'text-md/semibold',
                    children: r
                }),
                (0, i.jsx)(o.Z, {
                    className: u.childIcon,
                    direction: o.Z.Directions.RIGHT
                })
            ]
        });
    },
    d = (e) => {
        let {
            node: { children: t },
            onSelectChild: n
        } = e;
        if (null == t || 0 === t.length) return null;
        let r = t.map((e) => {
            let [t, r] = e;
            return (0, i.jsx)(
                c,
                {
                    child: e,
                    onClick: n
                },
                ''.concat(t, '+').concat(r)
            );
        });
        return (0, i.jsx)('div', {
            className: l.listElementWrapper,
            children: r
        });
    };
