var i = n(200651);
n(192379);
var r = n(481060),
    s = n(858719),
    a = n(739957);
t.Z = (e) => {
    let { header: t, displayType: n } = e,
        l = (0, s.C7)(n);
    return (0, i.jsxs)('div', {
        className: a.counter,
        children: [
            (0, i.jsx)(r.Heading, {
                variant: 'heading-xxl/medium',
                color: l > 0 ? 'text-brand' : 'text-muted',
                children: (0, i.jsx)(r.HeadingLevel, { children: null != l ? l : 0 })
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/semibold',
                children: t
            })
        ]
    });
};
