var i = r(47120);
var a = r(200651);
r(192379);
var s = r(481060),
    o = r(259580),
    l = r(847273);
let u = (e) => {
        let { child: n, onClick: r } = e,
            [i] = n;
        return (0, a.jsxs)(s.Clickable, {
            className: l.childButton,
            onClick: () => r(n),
            children: [
                (0, a.jsx)(s.Text, {
                    className: l.childText,
                    variant: 'text-md/semibold',
                    children: i
                }),
                (0, a.jsx)(o.Z, {
                    className: l.childIcon,
                    direction: o.Z.Directions.RIGHT
                })
            ]
        });
    },
    c = (e) => {
        let {
            node: { children: n },
            onSelectChild: r
        } = e;
        if (null == n || 0 === n.length) return null;
        let i = n.map((e) => {
            let [n, i] = e;
            return (0, a.jsx)(
                u,
                {
                    child: e,
                    onClick: r
                },
                ''.concat(n, '+').concat(i)
            );
        });
        return (0, a.jsx)('div', {
            className: l.__invalid_childrenContainer,
            children: i
        });
    };
n.Z = c;
