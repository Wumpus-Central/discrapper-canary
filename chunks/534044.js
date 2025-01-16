t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    s = t(481060),
    o = t(600164),
    r = t(548647),
    c = t(696375),
    d = t(800530),
    u = t(388032),
    x = t(866219),
    m = t(816742),
    C = t(160557);
function h(e) {
    let { className: n, onNext: t, onClose: l } = e,
        h = (0, r.n)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                    (0, i.jsx)('div', {
                        className: x.iconContainer,
                        children: (0, i.jsx)('img', {
                            src: C,
                            alt: '',
                            className: x.icon
                        })
                    }),
                    (0, i.jsx)(s.Heading, {
                        className: m.title,
                        variant: 'heading-xl/semibold',
                        children: u.intl.string(u.t.QMbTSk)
                    }),
                    (0, i.jsx)(s.Heading, {
                        className: m.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: u.intl.string(u.t.Qdx8AA)
                    }),
                    null != l &&
                        (0, i.jsx)(s.ModalCloseButton, {
                            className: m.closeButton,
                            onClick: l
                        })
                ]
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: a()(x.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        className: x.actionsHeader,
                        children: u.intl.string(u.t['9BRc1N'])
                    }),
                    (0, i.jsx)(c.Z, {
                        text: u.intl.string(u.t.PxL38P),
                        url: d.sQ.COMMUNITY_GUIDELINES,
                        onClick: () => h(d.n0.ClickCommunityGuidelinesLink)
                    }),
                    (0, i.jsx)(c.Z, {
                        text: u.intl.string(u.t.qC3XKS),
                        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => h(d.n0.ClickWarningSystemHelpcenterLink)
                    })
                ]
            }),
            (0, i.jsx)(s.ModalFooter, {
                children: (0, i.jsx)(s.Button, {
                    onClick: t,
                    color: s.Button.Colors.BRAND,
                    children: u.intl.string(u.t.i4jeWV)
                })
            })
        ]
    });
}
