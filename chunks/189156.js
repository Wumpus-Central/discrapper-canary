n.d(t, {
    WR: () => _,
    qE: () => f,
    wQ: () => p
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(833062),
    a = n(678738),
    s = n(502762),
    l = n(292814),
    c = n(388032),
    u = n(188394);
function d(e) {
    return (0, r.jsx)(o.Z, { application: e }, e.id);
}
function f(e) {
    let { userId: t } = e,
        n = (0, l.e)({
            userId: t,
            renderApplicationName: d
        });
    return (0, r.jsxs)(i.Zbd, {
        className: u.channelHeader,
        children: [
            (0, r.jsxs)('div', {
                className: u.header,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'text-md/semibold',
                        color: 'text-normal',
                        children: c.NW.string(c.t.Iyka0d)
                    }),
                    (0, r.jsx)(i.P4T, {
                        size: 'xs',
                        className: u.icon
                    })
                ]
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                children: n
            })
        ]
    });
}
function _(e) {
    let { userId: t, headingColor: n } = e,
        o = (0, l.e)({
            userId: t,
            renderApplicationName: d
        });
    return (0, r.jsx)(a.Z, {
        headingColor: n,
        heading: c.NW.string(c.t.Iyka0d),
        headingIcon: i.P4T,
        children: (0, r.jsx)(i.Text, {
            variant: 'text-xs/normal',
            color: 'text-normal',
            children: o
        })
    });
}
function p(e) {
    let { userId: t, headingColor: n } = e;
    return (0, r.jsx)(s.Z.Overlay, {
        className: u.profile,
        children: (0, r.jsx)(_, {
            userId: t,
            headingColor: n
        })
    });
}
