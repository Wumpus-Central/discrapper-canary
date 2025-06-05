n.d(e, { default: () => h });
var a = n(255367),
    c = n(73800),
    r = n(481060),
    s = n(313201),
    o = n(626135),
    i = n(981631),
    l = n(388032),
    d = n(221488),
    b = n(963705);
function h(t) {
    let { source: e, onClose: n, transitionState: h } = t;
    c.useEffect(() => {
        o.default.track(i.rMx.OPEN_MODAL, {
            type: i.jXE.CONTACT_SYNC_NC_MODAL,
            source: { location: e }
        });
    }, [e]);
    let u = (0, s.Dt)();
    return (0, a.jsxs)(r.Y0X, {
        className: d.contactSync,
        transitionState: h,
        'aria-labelledby': u,
        parentComponent: 'ContactSyncModal',
        children: [
            (0, a.jsx)(r.olH, {
                onClick: n,
                className: d.modalCloseButton
            }),
            (0, a.jsxs)('div', {
                className: d.inner,
                children: [
                    (0, a.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        color: 'header-primary',
                        className: d.header,
                        children: l.intl.string(l.t.fdR8HR)
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: l.intl.string(l.t.JXyNq6)
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: d.container,
                children: (0, a.jsx)('img', {
                    alt: '',
                    src: b
                })
            })
        ]
    });
}
