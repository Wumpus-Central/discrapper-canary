e.r(t);
var r = e(200651);
e(192379);
var i = e(481060),
    l = e(287734),
    o = e(313201),
    c = e(471253),
    a = e(939863),
    s = e(388032),
    u = e(962190);
t.default = (n) => {
    let { channel: t, ...e } = n,
        d = (0, o.Dt)();
    return (0, r.jsxs)(i.ConfirmModal, {
        confirmText: s.intl.string(s.t.saZaRU),
        cancelText: s.intl.string(s.t['ETE/oK']),
        onConfirm: () => {
            (0, c.NZ)(t), l.default.disconnect();
        },
        confirmButtonColor: i.Button.Colors.RED,
        bodyClassName: u.body,
        ...e,
        children: [
            (0, r.jsx)(a.Z, {
                className: u.headerIconContainer,
                children: (0, r.jsx)('div', {
                    className: u.iconBackground,
                    children: (0, r.jsx)(i.StageXIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40,
                        className: u.headerIcon
                    })
                })
            }),
            (0, r.jsx)(i.Heading, {
                id: d,
                variant: 'heading-xl/semibold',
                color: 'header-primary',
                className: u.title,
                children: s.intl.string(s.t.xrYNBA)
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: u.subtitle,
                children: s.intl.string(s.t.TP1D8v)
            })
        ]
    });
};
