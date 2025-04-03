a.d(t, { default: () => h });
var n = a(200651),
    s = a(192379),
    c = a(481060),
    r = a(313201),
    o = a(626135),
    i = a(981631),
    l = a(388032),
    d = a(221488),
    b = a(963705);
function h(e) {
    let { source: t, onClose: a, transitionState: h } = e;
    s.useEffect(() => {
        o.default.track(i.rMx.OPEN_MODAL, {
            type: i.jXE.CONTACT_SYNC_NC_MODAL,
            source: { location: t }
        });
    }, [t]);
    let u = (0, r.Dt)();
    return (0, n.jsxs)(c.Y0X, {
        className: d.contactSync,
        transitionState: h,
        'aria-labelledby': u,
        children: [
            (0, n.jsx)(c.olH, {
                onClick: a,
                className: d.modalCloseButton
            }),
            (0, n.jsxs)('div', {
                className: d.inner,
                children: [
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/extrabold',
                        color: 'header-primary',
                        className: d.header,
                        children: l.NW.string(l.t.fdR8HR)
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: l.NW.string(l.t.JXyNq6)
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: d.container,
                children: (0, n.jsx)('img', {
                    alt: '',
                    src: b
                })
            })
        ]
    });
}
