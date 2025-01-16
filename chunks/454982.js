n(47120);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(484614),
    l = n(313201),
    o = n(518638),
    c = n(388032),
    d = n(660604);
function u(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                className: d.errorHeader,
                children: [
                    (0, i.jsx)('div', { className: d.errorArt }),
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-xl/semibold',
                        children: c.intl.string(c.t.iufib2)
                    })
                ]
            }),
            (0, i.jsx)(s.ModalContent, {
                className: d.errorBody,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    className: d.bodyText,
                    children: c.intl.string(c.t.eAn6z8)
                })
            }),
            (0, i.jsx)(s.ModalFooter, {
                children: (0, i.jsx)(s.Button, {
                    color: s.Button.Colors.BRAND,
                    onClick: t,
                    children: c.intl.string(c.t.cpT0Cg)
                })
            })
        ]
    });
}
t.Z = function (e) {
    let { onClose: t, onClaim: n, code: m, outboundPromotion: g, transitionState: h } = e,
        [p, x] = r.useState(null),
        f = (0, l.Dt)();
    return (
        r.useEffect(() => {
            null == m &&
                (0, o.A2)(g.id)
                    .then((e) => n(e))
                    .catch((e) => {
                        var t;
                        return x(null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code);
                    });
        }, [m, g.id, n]),
        (0, i.jsx)(s.ModalRoot, {
            transitionState: h,
            'aria-labelledby': f,
            children:
                null != p
                    ? (0, i.jsx)(u, { onClose: t })
                    : null == m
                      ? (0, i.jsx)(s.ModalContent, { children: (0, i.jsx)(s.Spinner, { className: d.loading }) })
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.ModalHeader, {
                                    separator: !1,
                                    className: d.headerContainer,
                                    children: [
                                        (0, i.jsx)('div', { className: d.art }),
                                        (0, i.jsx)(s.Heading, {
                                            variant: 'heading-xl/semibold',
                                            children: c.intl.string(c.t['23BfZm'])
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(s.ModalContent, {
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            className: d.bodyText,
                                            children: g.outboundRedemptionModalBody
                                        }),
                                        (0, i.jsx)(s.FormDivider, { className: d.formDivider }),
                                        (0, i.jsxs)(s.FormSection, {
                                            title: c.intl.string(c.t.s9LFQk),
                                            className: d.formSection,
                                            children: [
                                                (0, i.jsx)(a.Z, {
                                                    value: m,
                                                    buttonColor: s.Button.Colors.BRAND,
                                                    buttonLook: s.Button.Looks.FILLED,
                                                    delay: 1000
                                                }),
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    className: d.confirmationText,
                                                    children: c.intl.string(c.t['F+nFTU'])
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(s.ModalFooter, {
                                    children: [
                                        (0, i.jsx)(s.Button, {
                                            color: s.Button.Colors.BRAND,
                                            onClick: () => {
                                                let e = (0, o.BU)(m, g);
                                                window.open(e, '_blank');
                                            },
                                            children: c.intl.string(c.t['+zx47e'])
                                        }),
                                        (0, i.jsx)(s.Button, {
                                            onClick: t,
                                            look: s.Button.Looks.LINK,
                                            color: d.maybeLaterButton,
                                            children: c.intl.string(c.t.TulDPj)
                                        })
                                    ]
                                })
                            ]
                        })
        })
    );
};
