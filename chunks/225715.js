n.d(t, {
    CW: () => c,
    G9: () => p,
    K9: () => _,
    q$: () => h,
    r0: () => d,
    s$: () => f
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(41959),
    l = n(245561),
    u = n(762584);
let c = (e) => {
        let { application: t, asset: n, className: r, ...a } = e;
        return (0, i.jsx)(o.Z, {
            application: t,
            size: o.H.MEDIUM,
            asset: n,
            className: r,
            ...a
        });
    },
    d = (e) => {
        let { children: t, className: n, id: r, ...o } = e;
        return (0, i.jsx)(s.X6q, {
            className: a()(u.header, n),
            variant: 'heading-xl/extrabold',
            id: r,
            ...o,
            children: t
        });
    };
function f() {
    return (0, i.jsx)('hr', { className: u.divider });
}
let _ = (e) => {
        let { className: t, title: n, description: r, ...a } = e;
        return (0, i.jsxs)('div', {
            className: t,
            ...a,
            children: [
                (0, i.jsx)(s.X6q, {
                    variant: 'heading-md/bold',
                    color: 'header-primary',
                    children: n
                }),
                (0, i.jsx)(s.X6q, {
                    variant: 'heading-sm/normal',
                    color: 'header-secondary',
                    children: r
                })
            ]
        });
    },
    p = (e) => {
        let { applicationId: t, storeListingBenefits: n, skuBenefits: r, className: s, ...o } = e;
        return (0, i.jsx)('div', {
            className: a()(u.benefitsContainer, s),
            ...o,
            children: (0, i.jsx)(l.GU, {
                applicationId: t,
                storeListingBenefits: n,
                skuBenefits: r,
                className: u.benefit
            })
        });
    },
    h = (e) => {
        let { children: t, className: n, ...r } = e;
        return (0, i.jsx)('div', {
            className: a()(u.container, n),
            ...r,
            children: t
        });
    };
