n.d(t, {
    WR: () => _,
    qE: () => f,
    wQ: () => p
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(833062),
    s = n(678738),
    o = n(502762),
    l = n(292814),
    u = n(388032),
    c = n(121225);
function d(e) {
    return (0, i.jsx)(a.Z, { application: e }, e.id);
}
function f(e) {
    let { userId: t } = e,
        n = (0, l.e)({
            userId: t,
            renderApplicationName: d
        });
    return (0, i.jsxs)(r.Zbd, {
        className: c.channelHeader,
        children: [
            (0, i.jsxs)('div', {
                className: c.header,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'text-md/semibold',
                        color: 'text-normal',
                        children: u.intl.string(u.t.Iyka0d)
                    }),
                    (0, i.jsx)(r.P4T, {
                        size: 'xs',
                        className: c.icon
                    })
                ]
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                children: n
            })
        ]
    });
}
function _(e) {
    let { userId: t, headingColor: n } = e,
        a = (0, l.e)({
            userId: t,
            renderApplicationName: d
        });
    return (0, i.jsx)(s.Z, {
        headingColor: n,
        heading: u.intl.string(u.t.Iyka0d),
        headingIcon: r.P4T,
        children: (0, i.jsx)(r.Text, {
            variant: 'text-xs/normal',
            color: 'text-normal',
            children: a
        })
    });
}
function p(e) {
    let { userId: t, headingColor: n } = e;
    return (0, i.jsx)(o.Z.Overlay, {
        className: c.profile,
        children: (0, i.jsx)(_, {
            userId: t,
            headingColor: n
        })
    });
}
