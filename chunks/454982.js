n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(484614),
    a = n(313201),
    o = n(518638),
    c = n(388032),
    d = n(660604);
function u(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                separator: !1,
                className: d.errorHeader,
                children: [
                    (0, i.jsx)('div', { className: d.errorArt }),
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-xl/semibold',
                        children: c.intl.string(c.t.iufib2)
                    })
                ]
            }),
            (0, i.jsx)(r.ModalContent, {
                className: d.errorBody,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: d.bodyText,
                    children: c.intl.string(c.t.eAn6z8)
                })
            }),
            (0, i.jsx)(r.ModalFooter, {
                children: (0, i.jsx)(r.Button, {
                    color: r.Button.Colors.BRAND,
                    onClick: t,
                    children: c.intl.string(c.t.cpT0Cg)
                })
            })
        ]
    });
}
t.Z = function (e) {
    let { onClose: t, onClaim: n, code: m, outboundPromotion: h, transitionState: g } = e,
        [p, x] = s.useState(null),
        S = (0, a.Dt)();
    return (
        s.useEffect(() => {
            null == m &&
                (0, o.A2)(h.id)
                    .then((e) => n(e))
                    .catch((e) => {
                        var t;
                        return x(null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code);
                    });
        }, [m, h.id, n]),
        (0, i.jsx)(r.ModalRoot, {
            transitionState: g,
            'aria-labelledby': S,
            children:
                null != p
                    ? (0, i.jsx)(u, { onClose: t })
                    : null == m
                      ? (0, i.jsx)(r.ModalContent, { children: (0, i.jsx)(r.Spinner, { className: d.loading }) })
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(r.ModalHeader, {
                                    separator: !1,
                                    className: d.headerContainer,
                                    children: [
                                        (0, i.jsx)('div', { className: d.art }),
                                        (0, i.jsx)(r.Heading, {
                                            variant: 'heading-xl/semibold',
                                            children: c.intl.string(c.t['23BfZm'])
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(r.ModalContent, {
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-md/normal',
                                            className: d.bodyText,
                                            children: h.outboundRedemptionModalBody
                                        }),
                                        (0, i.jsx)(r.FormDivider, { className: d.formDivider }),
                                        (0, i.jsxs)(r.FormSection, {
                                            title: c.intl.string(c.t.s9LFQk),
                                            className: d.formSection,
                                            children: [
                                                (0, i.jsx)(l.Z, {
                                                    value: m,
                                                    buttonColor: r.Button.Colors.BRAND,
                                                    buttonLook: r.Button.Looks.FILLED,
                                                    delay: 1000
                                                }),
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    className: d.confirmationText,
                                                    children: c.intl.string(c.t['F+nFTU'])
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(r.ModalFooter, {
                                    children: [
                                        (0, i.jsx)(r.Button, {
                                            color: r.Button.Colors.BRAND,
                                            onClick: () => {
                                                let e = (0, o.BU)(m, h);
                                                window.open(e, '_blank');
                                            },
                                            children: c.intl.string(c.t['+zx47e'])
                                        }),
                                        (0, i.jsx)(r.Button, {
                                            onClick: t,
                                            look: r.Button.Looks.LINK,
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
