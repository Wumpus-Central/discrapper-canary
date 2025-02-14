n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(313201),
    l = n(622999),
    a = n(655868),
    o = n(754103),
    c = n(388032),
    d = n(555153);
let u = [
        {
            fields: [
                {
                    expirationDate: {
                        name: 'expirationDate',
                        id: (0, r.hQ)(),
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
    m = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: r, error: a } = e,
            [d, m] = s.useState(!1),
            [g, h] = s.useState(null),
            [x, _] = s.useState(r);
        return (
            s.useEffect(() => {
                t({ expirationDate: x }, null === g);
            }, [x, t, g]),
            (0, i.jsx)(o.Z, {
                className: n,
                form: u,
                values: { expirationDate: x },
                errors: null != g ? { expirationDate: g } : {},
                formError: a,
                onFieldChange: (e) => {
                    d || '' === e || m(!0), (d && '' === e) || !(0, l.eH)(e) ? h(c.intl.string(c.t['9/zZdn'])) : h(null), _(e);
                }
            })
        );
    };
