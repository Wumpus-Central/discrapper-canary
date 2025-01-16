var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(803343);
let u = (e) => {
        let { data: n, disabled: r } = e,
            { content: a, className: u, onClick: c, disabled: d } = n;
        return (0, i.jsx)(o.FocusRing, {
            children: (0, i.jsx)('button', {
                type: 'button',
                className: s()(l.item, u),
                onClick: c,
                disabled: r || d,
                children: a
            })
        });
    },
    c = (e) => {
        let { buttons: n, disabled: r, className: a } = e;
        return (0, i.jsx)('div', {
            role: 'group',
            className: s()(l.group, a),
            children: n.map((e, n) =>
                (0, i.jsx)(
                    u,
                    {
                        data: e,
                        disabled: r
                    },
                    n
                )
            )
        });
    };
n.Z = c;
