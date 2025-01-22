r.d(n, {
    CW: function () {
        return d;
    },
    G9: function () {
        return _;
    },
    K9: function () {
        return h;
    },
    q$: function () {
        return m;
    },
    r0: function () {
        return f;
    },
    s$: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(41959),
    u = r(245561),
    c = r(76962);
let d = (e) => {
        let { application: n, asset: r, className: a, ...o } = e;
        return (0, i.jsx)(l.Z, {
            application: n,
            size: l.H.MEDIUM,
            asset: r,
            className: a,
            ...o
        });
    },
    f = (e) => {
        let { children: n, className: r, id: a, ...l } = e;
        return (0, i.jsx)(s.Heading, {
            className: o()(c.header, r),
            variant: 'heading-xl/extrabold',
            id: a,
            ...l,
            children: n
        });
    };
function p() {
    return (0, i.jsx)('hr', { className: c.divider });
}
let h = (e) => {
        let { className: n, title: r, description: a, ...o } = e;
        return (0, i.jsxs)('div', {
            className: n,
            ...o,
            children: [
                (0, i.jsx)(s.Heading, {
                    variant: 'heading-md/bold',
                    color: 'header-primary',
                    children: r
                }),
                (0, i.jsx)(s.Heading, {
                    variant: 'heading-sm/normal',
                    color: 'header-secondary',
                    children: a
                })
            ]
        });
    },
    _ = (e) => {
        let { applicationId: n, storeListingBenefits: r, skuBenefits: a, className: s, ...l } = e;
        return (0, i.jsx)('div', {
            className: o()(c.benefitsContainer, s),
            ...l,
            children: (0, i.jsx)(u.GU, {
                applicationId: n,
                storeListingBenefits: r,
                skuBenefits: a,
                className: c.benefit
            })
        });
    },
    m = (e) => {
        let { children: n, className: r, ...a } = e;
        return (0, i.jsx)('div', {
            className: o()(c.container, r),
            ...a,
            children: n
        });
    };
