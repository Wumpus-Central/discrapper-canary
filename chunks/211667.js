n(47120);
var i,
    s = n(200651),
    r = n(192379),
    a = n(313201),
    l = n(622999),
    o = n(655868),
    c = n(754103),
    d = n(388032),
    u = n(498918);
(i || (i = {})).EXPIRATION_DATE = 'expirationDate';
let m = [
    {
        fields: [
            {
                expirationDate: {
                    name: 'expirationDate',
                    id: (0, a.hQ)(),
                    title: () => d.intl.string(d.t['CeBa//']),
                    autoComplete: 'cc-exp',
                    placeholder: () => d.intl.string(d.t.xeEWQ0),
                    pattern: '\\d*',
                    getClassNameForLayout: () => u.width50,
                    renderInput: (e) => (0, s.jsx)(o.Z, { ...e })
                }
            }.expirationDate
        ]
    }
];
t.Z = function (e) {
    let { onCardInfoChange: t, className: n, expirationDate: i, error: a } = e,
        [o, u] = r.useState(!1),
        [g, h] = r.useState(null),
        [p, x] = r.useState(i);
    return (
        r.useEffect(() => {
            t({ expirationDate: p }, null === g);
        }, [p, t, g]),
        (0, s.jsx)(c.Z, {
            className: n,
            form: m,
            values: { expirationDate: p },
            errors: null != g ? { expirationDate: g } : {},
            formError: a,
            onFieldChange: (e) => {
                !o && '' !== e && u(!0), (o && '' === e) || !(0, l.eH)(e) ? h(d.intl.string(d.t['9/zZdn'])) : h(null), x(e);
            }
        })
    );
};
