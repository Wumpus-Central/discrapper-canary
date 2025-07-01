(t.d(n, { Z: () => C }), t(953529));
var i = t(255367);
t(73800);
var s = t(120356),
    l = t.n(s),
    a = t(481060),
    r = t(600164),
    o = t(531441),
    c = t(788080),
    d = t(548647),
    x = t(696375),
    m = t(97568),
    u = t(800530),
    _ = t(388032),
    h = t(91463);
function C(e) {
    var n, t;
    let { classification: s, isDsaEligible: C = !1, isSpam: p = !1, isCoppa: N = !1, appealIngestionType: g, className: j, onClose: I, onNext: k } = e,
        E = (0, d.n)(),
        T = null != (n = null == s ? void 0 : s.explainer_link) ? n : '',
        f = null != s && null != s.flagged_content && s.flagged_content.length > 0,
        A = (0, c.c7)(null == s ? void 0 : s.description),
        S = !p && !N && (null == g || g === o.j4.IN_APP),
        v = null != s && ((0, c.FB)(s) || f);
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
                        children: _.intl.string(_.t['C5q+pa'])
                    }),
                    (0, i.jsx)(a.Text, {
                        className: h.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: _.intl.string(_.t.URt7VF)
                    }),
                    null != I &&
                        (0, i.jsx)(a.olH, {
                            className: h.closeButton,
                            onClick: I
                        })
                ]
            }),
            (0, i.jsxs)(a.hzk, {
                className: l()(h.modalContent, !v && h.evidenceOffset, j),
                paddingFix: !1,
                children: [
                    v && (0, i.jsx)(m.s, { flaggedContent: null != (t = s.flagged_content) ? t : [] }),
                    (0, i.jsx)(a.Text, {
                        className: h.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: _.intl.string(_.t.xsdcxs)
                    }),
                    (0, i.jsx)('div', {
                        className: h.policyContainer,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-md/semibold',
                            children: A
                        })
                    }),
                    N &&
                        (0, i.jsx)(x.Z, {
                            url: u.sQ.AGE_VERIFICATION_LINK,
                            text: _.intl.string(_.t['gJs+kZ']),
                            onClick: () => E(u.n0.ClickAgeVerificationLink)
                        }),
                    p &&
                        !N &&
                        (0, i.jsx)(x.Z, {
                            url: u.sQ.SPAM_LINK,
                            text: _.intl.string(_.t['PaNS+P']),
                            onClick: () => E(u.n0.ClickSpamWebformLink)
                        }),
                    !N &&
                        (0, i.jsx)(x.Z, {
                            text: _.intl.string(_.t['Vtyn//']),
                            url: T,
                            onClick: () => E(u.n0.ClickLearnMoreLink)
                        }),
                    S &&
                        C &&
                        (0, i.jsx)(a.Text, {
                            className: h.learnMore,
                            variant: 'text-xs/normal',
                            children: _.intl.format(_.t.WMUgCQ, {})
                        })
                ]
            }),
            S &&
                (0, i.jsx)(a.mzw, {
                    children: (0, i.jsx)(a.zxk, {
                        onClick: k,
                        color: a.zxk.Colors.BRAND,
                        children: _.intl.string(_.t.PDTjLC)
                    })
                })
        ]
    });
}
