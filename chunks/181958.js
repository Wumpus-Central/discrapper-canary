n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(172564);
let l = (e) => {
        let { data: t, disabled: n } = e,
            { content: r, className: l, onClick: u, disabled: c } = t;
        return (0, i.jsx)(s.tEY, {
            children: (0, i.jsx)('button', {
                type: 'button',
                className: a()(o.item, l),
                onClick: u,
                disabled: n || c,
                children: r
            })
        });
    },
    u = (e) => {
        let { buttons: t, disabled: n, className: r } = e;
        return (0, i.jsx)('div', {
            role: 'group',
            className: a()(o.group, r),
            children: t.map((e, t) =>
                (0, i.jsx)(
                    l,
                    {
                        data: e,
                        disabled: n
                    },
                    t
                )
            )
        });
    };
