t.d(n, { Z: () => h }), t(266796);
var i = t(200651);
t(192379);
var s = t(120356),
    a = t.n(s),
    l = t(481060),
    r = t(600164),
    o = t(788080),
    c = t(548647),
    d = t(696375),
    x = t(97568),
    m = t(800530),
    N = t(388032),
    u = t(91463);
function h(e) {
    var n, t;
    let { classification: s, isDsaEligible: h = !1, isSpam: _ = !1, isCoppa: C = !1, className: p, onClose: g, onNext: j } = e,
        I = (0, c.n)(),
        k = null != (n = null == s ? void 0 : s.explainer_link) ? n : '',
        E = null != s && null != s.flagged_content && s.flagged_content.length > 0,
        T = (0, o.c7)(null == s ? void 0 : s.description),
        f = !_ && !C,
        S = null != s && ((0, o.FB)(s) || E);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: N.NW.string(N.t['C5q+pa'])
                    }),
                    (0, i.jsx)(l.Text, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: N.NW.string(N.t.URt7VF)
                    }),
                    null != g &&
                        (0, i.jsx)(l.olH, {
                            className: u.closeButton,
                            onClick: g
                        })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: a()(u.modalContent, !S && u.evidenceOffset, p),
                paddingFix: !1,
                children: [
                    S && (0, i.jsx)(x.s, { flaggedContent: null != (t = s.flagged_content) ? t : [] }),
                    (0, i.jsx)(l.Text, {
                        className: u.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: N.NW.string(N.t.xsdcxs)
                    }),
                    (0, i.jsx)('div', {
                        className: u.policyContainer,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: T
                        })
                    }),
                    C &&
                        (0, i.jsx)(d.Z, {
                            url: m.sQ.AGE_VERIFICATION_LINK,
                            text: N.NW.string(N.t['gJs+kZ']),
                            onClick: () => I(m.n0.ClickAgeVerificationLink)
                        }),
                    _ &&
                        !C &&
                        (0, i.jsx)(d.Z, {
                            url: m.sQ.SPAM_LINK,
                            text: N.NW.string(N.t['PaNS+P']),
                            onClick: () => I(m.n0.ClickSpamWebformLink)
                        }),
                    !C &&
                        (0, i.jsx)(d.Z, {
                            text: N.NW.string(N.t['Vtyn//']),
                            url: k,
                            onClick: () => I(m.n0.ClickLearnMoreLink)
                        }),
                    f &&
                        h &&
                        (0, i.jsx)(l.Text, {
                            className: u.learnMore,
                            variant: 'text-xs/normal',
                            children: N.NW.format(N.t.WMUgCQ, {})
                        })
                ]
            }),
            f &&
                (0, i.jsx)(l.mzw, {
                    children: (0, i.jsx)(l.zxk, {
                        onClick: j,
                        color: l.zxk.Colors.BRAND,
                        children: N.NW.string(N.t.PDTjLC)
                    })
                })
        ]
    });
}
