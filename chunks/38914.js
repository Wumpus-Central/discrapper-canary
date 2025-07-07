n.d(t, { q: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(483444),
    a = n(388032),
    s = n(505318),
    o = n(302681);
let c = () => {
    let e = [a.t.E1NP29, a.t.kpMomJ, a.t.xT1Vfn, a.t.myyAEh, a.t.zTk8Ul];
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)('img', {
                src: o.Z,
                alt: '',
                className: s.headerAsset
            }),
            (0, r.jsx)(l.Z, { color: 'white' }),
            (0, r.jsx)('div', {
                className: s.benefits,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        'div',
                        {
                            className: s.benefitRow,
                            children: [
                                (0, r.jsx)(i.kmB, { color: i.TVs.colors.WHITE }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: a.intl.string(e)
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
