t.d(n, { Z: () => _ }), t(953529);
var i = t(200651);
t(192379);
var s = t(120356),
    l = t.n(s),
    a = t(481060),
    r = t(600164),
    o = t(788080),
    c = t(548647),
    d = t(696375),
    x = t(97568),
    m = t(800530),
    u = t(388032),
    h = t(91463);
function _(e) {
    var n, t;
    let { classification: s, isDsaEligible: _ = !1, isSpam: C = !1, isCoppa: N = !1, className: p, onClose: g, onNext: j } = e,
        I = (0, c.n)(),
        k = null != (n = null == s ? void 0 : s.explainer_link) ? n : '',
        E = null != s && null != s.flagged_content && s.flagged_content.length > 0,
        T = (0, o.c7)(null == s ? void 0 : s.description),
        f = !C && !N,
        S = null != s && ((0, o.FB)(s) || E);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: h.title,
                        variant: 'heading-xl/semibold',
                        children: u.intl.string(u.t['C5q+pa'])
                    }),
                    (0, i.jsx)(a.Text, {
                        className: h.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: u.intl.string(u.t.URt7VF)
                    }),
                    null != g &&
                        (0, i.jsx)(a.olH, {
                            className: h.closeButton,
                            onClick: g
                        })
                ]
            }),
            (0, i.jsxs)(a.hzk, {
                className: l()(h.modalContent, !S && h.evidenceOffset, p),
                paddingFix: !1,
                children: [
                    S && (0, i.jsx)(x.s, { flaggedContent: null != (t = s.flagged_content) ? t : [] }),
                    (0, i.jsx)(a.Text, {
                        className: h.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: u.intl.string(u.t.xsdcxs)
                    }),
                    (0, i.jsx)('div', {
                        className: h.policyContainer,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-md/semibold',
                            children: T
                        })
                    }),
                    N &&
                        (0, i.jsx)(d.Z, {
                            url: m.sQ.AGE_VERIFICATION_LINK,
                            text: u.intl.string(u.t['gJs+kZ']),
                            onClick: () => I(m.n0.ClickAgeVerificationLink)
                        }),
                    C &&
                        !N &&
                        (0, i.jsx)(d.Z, {
                            url: m.sQ.SPAM_LINK,
                            text: u.intl.string(u.t['PaNS+P']),
                            onClick: () => I(m.n0.ClickSpamWebformLink)
                        }),
                    !N &&
                        (0, i.jsx)(d.Z, {
                            text: u.intl.string(u.t['Vtyn//']),
                            url: k,
                            onClick: () => I(m.n0.ClickLearnMoreLink)
                        }),
                    f &&
                        _ &&
                        (0, i.jsx)(a.Text, {
                            className: h.learnMore,
                            variant: 'text-xs/normal',
                            children: u.intl.format(u.t.WMUgCQ, {})
                        })
                ]
            }),
            f &&
                (0, i.jsx)(a.mzw, {
                    children: (0, i.jsx)(a.zxk, {
                        onClick: j,
                        color: a.zxk.Colors.BRAND,
                        children: u.intl.string(u.t.PDTjLC)
                    })
                })
        ]
    });
}
