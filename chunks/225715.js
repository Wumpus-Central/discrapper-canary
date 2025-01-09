t.d(e, {
    CW: function () {
        return d;
    },
    G9: function () {
        return f;
    },
    K9: function () {
        return x;
    },
    q$: function () {
        return h;
    },
    r0: function () {
        return u;
    },
    s$: function () {
        return m;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    a = t(481060),
    s = t(41959),
    o = t(245561),
    c = t(76962);
let d = (n) => {
        let { application: e, asset: t, className: r, ...l } = n;
        return (0, i.jsx)(s.Z, {
            application: e,
            size: s.H.MEDIUM,
            asset: t,
            className: r,
            ...l
        });
    },
    u = (n) => {
        let { children: e, className: t, id: r, ...s } = n;
        return (0, i.jsx)(a.Heading, {
            className: l()(c.header, t),
            variant: 'heading-xl/extrabold',
            id: r,
            ...s,
            children: e
        });
    };
function m() {
    return (0, i.jsx)('hr', { className: c.divider });
}
let x = (n) => {
        let { className: e, title: t, description: r, ...l } = n;
        return (0, i.jsxs)('div', {
            className: e,
            ...l,
            children: [
                (0, i.jsx)(a.Heading, {
                    variant: 'heading-md/bold',
                    color: 'header-primary',
                    children: t
                }),
                (0, i.jsx)(a.Heading, {
                    variant: 'heading-sm/normal',
                    color: 'header-secondary',
                    children: r
                })
            ]
        });
    },
    f = (n) => {
        let { applicationId: e, storeListingBenefits: t, skuBenefits: r, className: a, ...s } = n;
        return (0, i.jsx)('div', {
            className: l()(c.benefitsContainer, a),
            ...s,
            children: (0, i.jsx)(o.GU, {
                applicationId: e,
                storeListingBenefits: t,
                skuBenefits: r,
                className: c.benefit
            })
        });
    },
    h = (n) => {
        let { children: e, className: t, ...r } = n;
        return (0, i.jsx)('div', {
            className: l()(c.container, t),
            ...r,
            children: e
        });
    };
