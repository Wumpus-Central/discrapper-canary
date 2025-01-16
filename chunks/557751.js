e.r(n),
    e.d(n, {
        default: function () {
            return c;
        }
    });
var a = e(200651);
e(192379);
var i = e(481060),
    r = e(701488),
    o = e(388032),
    s = e(85957),
    l = e(221886);
function c(t) {
    let { application: n, onCancel: e, onClose: c, onConfirm: d, ...u } = t;
    return (0, a.jsxs)(i.ModalRoot, {
        role: 'alertdialog',
        transitionState: u.transitionState,
        className: s.modalRoot,
        children: [
            (0, a.jsx)('div', {
                className: s.birbContainer,
                children: (0, a.jsx)('img', {
                    src: l,
                    className: s.announcementBirb,
                    alt: o.intl.string(o.t.ElsOBA)
                })
            }),
            (0, a.jsxs)(i.ModalContent, {
                className: s.modalContent,
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: 'eyebrow',
                        className: s.eyebrow,
                        children: o.intl.string(o.t['06YebG'])
                    }),
                    (0, a.jsx)(i.Heading, {
                        variant: 'heading-lg/bold',
                        className: s.header,
                        children: o.intl.format(o.t['Z/eMDQ'], { activityName: n.name })
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        className: s.subHeader,
                        children: o.intl.string(o.t.z81WwM)
                    }),
                    (0, a.jsxs)('div', {
                        className: s.buttonContainer,
                        children: [
                            (0, a.jsx)(i.Button, {
                                size: i.Button.Sizes.LARGE,
                                onClick: () => {
                                    d(), c();
                                },
                                children: o.intl.string(o.t['3PatS0'])
                            }),
                            (0, a.jsx)(i.Button, {
                                size: i.Button.Sizes.LARGE,
                                onClick: () => {
                                    e(), c();
                                },
                                color: i.Button.Colors.PRIMARY,
                                children: o.intl.string(o.t['ETE/oK'])
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: 'text-xs/normal',
                                children: (0, a.jsx)(i.Anchor, {
                                    href: r.OF,
                                    children: o.intl.string(o.t.E0gf5u)
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
