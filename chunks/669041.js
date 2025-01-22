r.r(n),
    r.d(n, {
        QuestsRewardModalUnverified: function () {
            return _;
        },
        openRewardModalUnverified: function () {
            return m;
        }
    });
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(481060),
    u = r(893776),
    c = r(594174),
    d = r(918701),
    f = r(388032),
    p = r(162023),
    h = r(800010);
function _(e) {
    let { transitionState: n, onClose: r } = e,
        i = (0, s.e7)([c.default], () => {
            var e;
            return null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
        }),
        [_, m] = o.useState({ status: 'unknown' });
    o.useEffect(() => {
        m({ status: 'loading' }),
            u.Z.verifyResend().then(
                () => m({ status: 'success' }),
                (e) => {
                    m({ status: 'error' }), (0, d.ys)(e, { tags: { location: 'QuestsRewardModalUnverified' } });
                }
            );
    }, []);
    let g = () =>
        (0, a.jsx)(l.ModalFooter, {
            className: p.modalFooter,
            children: (0, a.jsx)(l.Button, {
                color: l.Button.Colors.BRAND,
                size: l.Button.Sizes.MEDIUM,
                onClick: r,
                children: f.intl.string(f.t.cpT0Cg)
            })
        });
    return (0, a.jsxs)(l.ModalRoot, {
        transitionState: n,
        disableTrack: !0,
        children: [
            (0, a.jsx)('img', {
                alt: '',
                className: p.headerImage,
                src: h
            }),
            (0, a.jsxs)(l.ModalHeader, {
                separator: !1,
                className: p.header,
                children: [
                    (0, a.jsx)(l.Heading, {
                        className: p.title,
                        variant: 'heading-xl/bold',
                        children: f.intl.string(f.t.c8eASE)
                    }),
                    (0, a.jsx)(l.ModalCloseButton, {
                        onClick: r,
                        className: p.modalCloseButton
                    })
                ]
            }),
            'loading' === _.status &&
                (0, a.jsx)(l.ModalContent, {
                    className: p.content,
                    children: (0, a.jsx)(l.Spinner, {})
                }),
            'error' === _.status &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(l.ModalContent, {
                            className: p.content,
                            children: (0, a.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: f.intl.string(f.t.vjyinp)
                            })
                        }),
                        g()
                    ]
                }),
            'success' === _.status &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(l.ModalContent, {
                            className: p.content,
                            children: (0, a.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: f.intl.format(f.t.qP5xYW, {
                                    emailAddress: i,
                                    emailAddressLink: 'mailto:'.concat(i)
                                })
                            })
                        }),
                        (0, a.jsx)(l.ModalContent, {
                            className: p.content,
                            children: (0, a.jsxs)('div', {
                                className: p.tooltip,
                                children: [
                                    (0, a.jsx)(l.CircleInformationIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: p.infoFilledIcon
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        className: p.tooltipText,
                                        variant: 'text-sm/normal',
                                        children: f.intl.string(f.t.yb7itb)
                                    })
                                ]
                            })
                        }),
                        g()
                    ]
                })
        ]
    });
}
function m() {
    (0, l.openModalLazy)(async () => {
        let { QuestsRewardModalUnverified: e } = await Promise.resolve().then(r.bind(r, 669041));
        return (n) => (0, a.jsx)(e, { ...n });
    });
}
