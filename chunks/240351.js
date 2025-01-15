var i = n(200651);
n(192379);
var s = n(481060),
    r = n(858719),
    a = n(81929);
t.Z = (e) => {
    let { header: t, displayType: n } = e,
        l = (0, r.C7)(n);
    return (0, i.jsxs)('div', {
        className: a.counter,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xxl/medium',
                color: l > 0 ? 'text-brand' : 'text-muted',
                children: (0, i.jsx)(s.HeadingLevel, { children: null != l ? l : 0 })
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                children: t
            })
        ]
    });
};
