n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(313201),
    r = n(622999),
    a = n(655868),
    o = n(754103),
    c = n(388032),
    d = n(589366);
let u = [
        {
            fields: [
                {
                    expirationDate: {
                        name: 'expirationDate',
                        id: (0, l.hQ)(),
                        title: () => c.intl.string(c.t['CeBa//']),
                        autoComplete: 'cc-exp',
                        placeholder: () => c.intl.string(c.t.xeEWQ0),
                        pattern: '\\d*',
                        getClassNameForLayout: () => d.width50,
                        renderInput: (e) => (0, i.jsx)(a.Z, { ...e })
                    }
                }.expirationDate
            ]
        }
    ],
    h = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: l, error: a } = e,
            [d, h] = s.useState(!1),
            [m, g] = s.useState(null),
            [x, _] = s.useState(l);
        return (
            s.useEffect(() => {
                t({ expirationDate: x }, null === m);
            }, [x, t, m]),
            (0, i.jsx)(o.Z, {
                className: n,
                form: u,
                values: { expirationDate: x },
                errors: null != m ? { expirationDate: m } : {},
                formError: a,
                onFieldChange: (e) => {
                    d || '' === e || h(!0), (d && '' === e) || !(0, r.eH)(e) ? g(c.intl.string(c.t['9/zZdn'])) : g(null), _(e);
                }
            })
        );
    };
