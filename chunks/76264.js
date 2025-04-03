n.d(t, { Z: () => u }), n(47120);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(259580),
    s = n(88309),
    c = n(935786);
let d = (e) => {
        let { child: t, onClick: n } = e,
            [l] = t;
        return (0, r.jsxs)(a.P3F, {
            className: i()(c.childButton, s.listElement),
            onClick: () => n(t),
            children: [
                (0, r.jsx)(a.Text, {
                    className: c.childText,
                    variant: 'text-md/semibold',
                    children: l
                }),
                (0, r.jsx)(o.Z, {
                    className: c.childIcon,
                    direction: o.Z.Directions.RIGHT
                })
            ]
        });
    },
    u = (e) => {
        let {
            node: { children: t },
            onSelectChild: n
        } = e;
        if (null == t || 0 === t.length) return null;
        let l = t.map((e) => {
            let [t, l] = e;
            return (0, r.jsx)(
                d,
                {
                    child: e,
                    onClick: n
                },
                ''.concat(t, '+').concat(l)
            );
        });
        return (0, r.jsx)('div', {
            className: s.listElementWrapper,
            children: l
        });
    };
