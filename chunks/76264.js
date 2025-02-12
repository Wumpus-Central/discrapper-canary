n.d(t, { Z: () => u }), n(47120);
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    s = n(259580),
    o = n(879918),
    d = n(766142);
let c = (e) => {
        let { child: t, onClick: n } = e,
            [i] = t;
        return (0, l.jsxs)(a.P3F, {
            className: r()(d.childButton, o.listElement),
            onClick: () => n(t),
            children: [
                (0, l.jsx)(a.Text, {
                    className: d.childText,
                    variant: 'text-md/semibold',
                    children: i
                }),
                (0, l.jsx)(s.Z, {
                    className: d.childIcon,
                    direction: s.Z.Directions.RIGHT
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
        let i = t.map((e) => {
            let [t, i] = e;
            return (0, l.jsx)(
                c,
                {
                    child: e,
                    onClick: n
                },
                ''.concat(t, '+').concat(i)
            );
        });
        return (0, l.jsx)('div', {
            className: o.listElementWrapper,
            children: i
        });
    };
