n.d(t, { q: () => l });
var r = n(255367);
n(73800);
var a = n(481060),
    i = n(483444),
    o = n(388032),
    c = n(505318),
    s = n(302681);
let l = () => {
    let e = [o.t.E1NP29, o.t.kpMomJ, o.t.xT1Vfn, o.t.myyAEh, o.t.zTk8Ul];
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)('img', {
                src: s.Z,
                alt: '',
                className: c.headerAsset
            }),
            (0, r.jsx)(i.Z, { color: 'white' }),
            (0, r.jsx)('div', {
                className: c.benefits,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        'div',
                        {
                            className: c.benefitRow,
                            children: [
                                (0, r.jsx)(a.kmB, { color: a.TVs.colors.WHITE }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: o.intl.string(e)
                                })
                            ]
                        },
                        t
                    )
                )
            })
        ]
    });
};
