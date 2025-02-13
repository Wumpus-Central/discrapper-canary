t.d(n, { default: () => c });
var a = t(200651);
t(192379);
var i = t(481060),
    r = t(701488),
    s = t(388032),
    o = t(828881),
    l = t(221886);
function c(e) {
    let { application: n, onCancel: t, onClose: c, onConfirm: d, ...x } = e;
    return (0, a.jsxs)(i.Y0X, {
        role: 'alertdialog',
        transitionState: x.transitionState,
        className: o.modalRoot,
        children: [
            (0, a.jsx)('div', {
                className: o.birbContainer,
                children: (0, a.jsx)('img', {
                    src: l,
                    className: o.announcementBirb,
                    alt: s.intl.string(s.t.ElsOBA)
                })
            }),
            (0, a.jsxs)(i.hzk, {
                className: o.modalContent,
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: 'eyebrow',
                        className: o.eyebrow,
                        children: s.intl.string(s.t['06YebG'])
                    }),
                    (0, a.jsx)(i.X6q, {
                        variant: 'heading-lg/bold',
                        className: o.header,
                        children: s.intl.format(s.t['Z/eMDQ'], { activityName: n.name })
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        className: o.subHeader,
                        children: s.intl.string(s.t.z81WwM)
                    }),
                    (0, a.jsxs)('div', {
                        className: o.buttonContainer,
                        children: [
                            (0, a.jsx)(i.zxk, {
                                size: i.zxk.Sizes.LARGE,
                                onClick: () => {
                                    d(), c();
                                },
                                children: s.intl.string(s.t['3PatS0'])
                            }),
                            (0, a.jsx)(i.zxk, {
                                size: i.zxk.Sizes.LARGE,
                                onClick: () => {
                                    t(), c();
                                },
                                color: i.zxk.Colors.PRIMARY,
                                children: s.intl.string(s.t['ETE/oK'])
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: 'text-xs/normal',
                                children: (0, a.jsx)(i.eee, {
                                    href: r.OF,
                                    children: s.intl.string(s.t.E0gf5u)
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
