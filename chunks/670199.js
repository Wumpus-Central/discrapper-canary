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
    r = t(788080),
    c = t(548647),
    d = t(696375),
    u = t(97568),
    x = t(800530),
    m = t(388032),
    C = t(816742);
function h(e) {
    var n, t;
    let { classification: l, isDsaEligible: h = !1, isSpam: N = !1, isCoppa: p = !1, className: g, onClose: _, onNext: j } = e,
        b = (0, c.n)(),
        I = null !== (n = null == l ? void 0 : l.explainer_link) && void 0 !== n ? n : '',
        E = null != l && null != l.flagged_content && l.flagged_content.length > 0,
        T = (0, r.c7)(null == l ? void 0 : l.description),
        S = !N && !p,
        v = null != l && ((0, r.FB)(l) || E);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: C.header,
                separator: !1,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: C.title,
                        variant: 'heading-xl/semibold',
                        children: m.intl.string(m.t['C5q+pa'])
                    }),
                    (0, i.jsx)(s.Text, {
                        className: C.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: m.intl.string(m.t.URt7VF)
                    }),
                    null != _ &&
                        (0, i.jsx)(s.ModalCloseButton, {
                            className: C.closeButton,
                            onClick: _
                        })
                ]
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: a()(C.modalContent, !v && C.evidenceOffset, g),
                paddingFix: !1,
                children: [
                    v && (0, i.jsx)(u.s, { flaggedContent: null !== (t = l.flagged_content) && void 0 !== t ? t : [] }),
                    (0, i.jsx)(s.Text, {
                        className: C.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: m.intl.string(m.t.xsdcxs)
                    }),
                    (0, i.jsx)('div', {
                        className: C.policyContainer,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-md/semibold',
                            children: T
                        })
                    }),
                    p &&
                        (0, i.jsx)(d.Z, {
                            url: x.sQ.AGE_VERIFICATION_LINK,
                            text: m.intl.string(m.t['gJs+kZ']),
                            onClick: () => b(x.n0.ClickAgeVerificationLink)
                        }),
                    N &&
                        !p &&
                        (0, i.jsx)(d.Z, {
                            url: x.sQ.SPAM_LINK,
                            text: m.intl.string(m.t['PaNS+P']),
                            onClick: () => b(x.n0.ClickSpamWebformLink)
                        }),
                    !p &&
                        (0, i.jsx)(d.Z, {
                            text: m.intl.string(m.t['Vtyn//']),
                            url: I,
                            onClick: () => b(x.n0.ClickLearnMoreLink)
                        }),
                    S &&
                        h &&
                        (0, i.jsx)(s.Text, {
                            className: C.learnMore,
                            variant: 'text-xs/normal',
                            children: m.intl.format(m.t.WMUgCQ, {})
                        })
                ]
            }),
            S &&
                (0, i.jsx)(s.ModalFooter, {
                    children: (0, i.jsx)(s.Button, {
                        onClick: j,
                        color: s.Button.Colors.BRAND,
                        children: m.intl.string(m.t.PDTjLC)
                    })
                })
        ]
    });
}
