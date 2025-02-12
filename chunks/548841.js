t.d(e, { default: () => u });
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(287734),
    a = t(313201),
    o = t(471253),
    s = t(939863),
    c = t(388032),
    d = t(633812);
let u = (n) => {
    let { channel: e, ...t } = n,
        u = (0, a.Dt)();
    return (0, i.jsxs)(r.ConfirmModal, {
        confirmText: c.intl.string(c.t.saZaRU),
        cancelText: c.intl.string(c.t['ETE/oK']),
        onConfirm: () => {
            (0, o.NZ)(e), l.default.disconnect();
        },
        confirmButtonColor: r.zxk.Colors.RED,
        bodyClassName: d.body,
        ...t,
        children: [
            (0, i.jsx)(s.Z, {
                className: d.headerIconContainer,
                children: (0, i.jsx)('div', {
                    className: d.iconBackground,
                    children: (0, i.jsx)(r.XzT, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40,
                        className: d.headerIcon
                    })
                })
            }),
            (0, i.jsx)(r.X6q, {
                id: u,
                variant: 'heading-xl/semibold',
                color: 'header-primary',
                className: d.title,
                children: c.intl.string(c.t.xrYNBA)
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: d.subtitle,
                children: c.intl.string(c.t.TP1D8v)
            })
        ]
    });
};
