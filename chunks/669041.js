n.d(t, {
    B: () => p,
    QuestsRewardModalUnverified: () => _
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(893776),
    l = n(594174),
    u = n(918701),
    c = n(388032),
    d = n(347257),
    f = n(800010);
function _(e) {
    let { transitionState: t, onClose: n } = e,
        _ = (0, a.e7)([l.default], () => {
            var e;
            return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
        }),
        [p, h] = r.useState({ status: 'unknown' });
    r.useEffect(() => {
        h({ status: 'loading' }),
            o.Z.verifyResend().then(
                () => h({ status: 'success' }),
                (e) => {
                    h({ status: 'error' }), (0, u.ys)(e, { tags: { location: 'QuestsRewardModalUnverified' } });
                }
            );
    }, []);
    let m = () =>
        (0, i.jsx)(s.mzw, {
            className: d.modalFooter,
            children: (0, i.jsx)(s.zxk, {
                color: s.zxk.Colors.BRAND,
                size: s.zxk.Sizes.MEDIUM,
                onClick: n,
                children: c.intl.string(c.t.cpT0Cg)
            })
        });
    return (0, i.jsxs)(s.Y0X, {
        transitionState: t,
        disableTrack: !0,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: d.headerImage,
                src: f
            }),
            (0, i.jsxs)(s.xBx, {
                separator: !1,
                className: d.header,
                children: [
                    (0, i.jsx)(s.X6q, {
                        className: d.title,
                        variant: 'heading-xl/bold',
                        children: c.intl.string(c.t.c8eASE)
                    }),
                    (0, i.jsx)(s.olH, {
                        onClick: n,
                        className: d.modalCloseButton
                    })
                ]
            }),
            'loading' === p.status &&
                (0, i.jsx)(s.hzk, {
                    className: d.content,
                    children: (0, i.jsx)(s.$jN, {})
                }),
            'error' === p.status &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.hzk, {
                            className: d.content,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: c.intl.string(c.t.vjyinp)
                            })
                        }),
                        m()
                    ]
                }),
            'success' === p.status &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.hzk, {
                            className: d.content,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: c.intl.format(c.t.qP5xYW, {
                                    emailAddress: _,
                                    emailAddressLink: 'mailto:'.concat(_)
                                })
                            })
                        }),
                        (0, i.jsx)(s.hzk, {
                            className: d.content,
                            children: (0, i.jsxs)('div', {
                                className: d.tooltip,
                                children: [
                                    (0, i.jsx)(s.d3s, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: d.infoFilledIcon
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        className: d.tooltipText,
                                        variant: 'text-sm/normal',
                                        children: c.intl.string(c.t.yb7itb)
                                    })
                                ]
                            })
                        }),
                        m()
                    ]
                })
        ]
    });
}
function p() {
    (0, s.ZDy)(async () => {
        let { QuestsRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 669041));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
