(t.d(n, { Z: () => p }), t(953529));
var i = t(255367);
t(73800);
var s = t(120356),
    a = t.n(s),
    l = t(481060),
    r = t(600164),
    o = t(531441),
    c = t(788080),
    d = t(548647),
    x = t(696375),
    m = t(97568),
    u = t(800530),
    _ = t(388032),
    h = t(91463);
function p(e) {
    var n, t;
    let { classification: s, isDsaEligible: p = !1, isSpam: C = !1, isCoppa: N = !1, appealIngestionType: g, className: j, onClose: I, onNext: E } = e,
        T = (0, d.n)(),
        v = null != (n = null == s ? void 0 : s.explainer_link) ? n : '',
        f = null != s && null != s.flagged_content && s.flagged_content.length > 0,
        S = (0, c.c7)(null == s ? void 0 : s.description),
        k = !C && !N && (null == g || g === o.j4.IN_APP),
        A = null != s && ((0, c.FB)(s) || f);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: h.title,
                        variant: 'heading-xl/semibold',
                        children: _.intl.string(_.t['C5q+pa'])
                    }),
                    (0, i.jsx)(l.Text, {
                        className: h.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: _.intl.string(_.t.URt7VF)
                    }),
                    null != I &&
                        (0, i.jsx)(l.olH, {
                            className: h.closeButton,
                            onClick: I
                        })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: a()(h.modalContent, !A && h.evidenceOffset, j),
                paddingFix: !1,
                children: [
                    A && (0, i.jsx)(m.s, { flaggedContent: null != (t = s.flagged_content) ? t : [] }),
                    (0, i.jsx)(l.Text, {
                        className: h.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: _.intl.string(_.t.xsdcxs)
                    }),
                    (0, i.jsx)('div', {
                        className: h.policyContainer,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: S
                        })
                    }),
                    N &&
                        (0, i.jsx)(x.Z, {
                            url: u.sQ.AGE_VERIFICATION_LINK,
                            text: _.intl.string(_.t['gJs+kZ']),
                            onClick: () => T(u.n0.ClickAgeVerificationLink)
                        }),
                    C &&
                        !N &&
                        (0, i.jsx)(x.Z, {
                            url: u.sQ.SPAM_LINK,
                            text: _.intl.string(_.t['PaNS+P']),
                            onClick: () => T(u.n0.ClickSpamWebformLink)
                        }),
                    !N &&
                        (0, i.jsx)(x.Z, {
                            text: _.intl.string(_.t['Vtyn//']),
                            url: v,
                            onClick: () => T(u.n0.ClickLearnMoreLink)
                        }),
                    k &&
                        p &&
                        (0, i.jsx)(l.Text, {
                            className: h.learnMore,
                            variant: 'text-xs/normal',
                            children: _.intl.format(_.t.WMUgCQ, {})
                        })
                ]
            }),
            k &&
                (0, i.jsx)(l.mzw, {
                    children: (0, i.jsx)(l.zxk, {
                        variant: 'primary',
                        text: _.intl.string(_.t.PDTjLC),
                        onClick: E
                    })
                })
        ]
    });
}
