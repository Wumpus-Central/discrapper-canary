i.d(e, {
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
var t = i(200651);
i(192379);
var r = i(120356),
    l = i.n(r),
    a = i(481060),
    s = i(41959),
    o = i(245561),
    c = i(715309);
let d = (n) => {
        let { application: e, asset: i, className: r, ...l } = n;
        return (0, t.jsx)(s.Z, {
            application: e,
            size: s.H.MEDIUM,
            asset: i,
            className: r,
            ...l
        });
    },
    u = (n) => {
        let { children: e, className: i, id: r, ...s } = n;
        return (0, t.jsx)(a.Heading, {
            className: l()(c.header, i),
            variant: 'heading-xl/extrabold',
            id: r,
            ...s,
            children: e
        });
    };
function m() {
    return (0, t.jsx)('hr', { className: c.divider });
}
let x = (n) => {
        let { className: e, title: i, description: r, ...l } = n;
        return (0, t.jsxs)('div', {
            className: e,
            ...l,
            children: [
                (0, t.jsx)(a.Heading, {
                    variant: 'heading-md/bold',
                    color: 'header-primary',
                    children: i
                }),
                (0, t.jsx)(a.Heading, {
                    variant: 'heading-sm/normal',
                    color: 'header-secondary',
                    children: r
                })
            ]
        });
    },
    f = (n) => {
        let { applicationId: e, storeListingBenefits: i, skuBenefits: r, className: a, ...s } = n;
        return (0, t.jsx)('div', {
            className: l()(c.benefitsContainer, a),
            ...s,
            children: (0, t.jsx)(o.GU, {
                applicationId: e,
                storeListingBenefits: i,
                skuBenefits: r,
                className: c.benefit
            })
        });
    },
    h = (n) => {
        let { children: e, className: i, ...r } = n;
        return (0, t.jsx)('div', {
            className: l()(c.container, i),
            ...r,
            children: e
        });
    };
