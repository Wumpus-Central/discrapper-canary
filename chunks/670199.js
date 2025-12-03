e.d(t, { Z: () => h }), e(953529);
var i = e(54381);
e(473749);
var a = e(120356),
    s = e.n(a),
    l = e(481060),
    r = e(600164),
    o = e(531441),
    c = e(788080),
    d = e(548647),
    x = e(696375),
    m = e(97568),
    g = e(800530),
    u = e(388032),
    p = e(186425);
function h(n) {
    var t, e;
    let {
            classification: a,
            isDsaEligible: h = !1,
            isSpam: N = !1,
            isCoppa: C = !1,
            appealIngestionType: j,
            className: _,
            onClose: E,
            onNext: I,
        } = n,
        v = (0, d.n)(),
        T = null != (t = null == a ? void 0 : a.explainer_link) ? t : "",
        S = null != a && null != a.flagged_content && a.flagged_content.length > 0,
        A = (0, c.c7)(null == a ? void 0 : a.description),
        k = !N && !C && (null == j || j === o.j4.IN_APP),
        Z = null != a && ((0, c.FB)(a) || S);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: r.Z.Direction.VERTICAL,
                className: p.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: p.title,
                        variant: "heading-xl/semibold",
                        children: u.intl.string(u.t["C5q+pW"]),
                    }),
                    (0, i.jsx)(l.Text, {
                        className: p.subtitle,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: u.intl.string(u.t.URt7VI),
                    }),
                    null != E &&
                        (0, i.jsx)(l.olH, {
                            "data-migration-pending": !0,
                            className: p.closeButton,
                            onClick: E,
                        }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: s()(p.modalContent, !Z && p.evidenceOffset, _),
                paddingFix: !1,
                children: [
                    Z && (0, i.jsx)(m.s, { flaggedContent: null != (e = a.flagged_content) ? e : [] }),
                    (0, i.jsx)(l.Text, {
                        className: p.optionHeader,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: u.intl.string(u.t.xsdcxh),
                    }),
                    (0, i.jsx)("div", {
                        className: p.policyContainer,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: A,
                        }),
                    }),
                    C &&
                        (0, i.jsx)(x.Z, {
                            url: g.sQ.AGE_VERIFICATION_LINK,
                            text: u.intl.string(u.t["gJs+kf"]),
                            onClick: () => v(g.n0.ClickAgeVerificationLink),
                        }),
                    N &&
                        !C &&
                        (0, i.jsx)(x.Z, {
                            url: g.sQ.SPAM_LINK,
                            text: u.intl.string(u.t["PaNS+I"]),
                            onClick: () => v(g.n0.ClickSpamWebformLink),
                        }),
                    !C &&
                        (0, i.jsx)(x.Z, {
                            text: u.intl.string(u.t["Vtyn/7"]),
                            url: T,
                            onClick: () => v(g.n0.ClickLearnMoreLink),
                        }),
                    k &&
                        h &&
                        (0, i.jsx)(l.Text, {
                            className: p.learnMore,
                            variant: "text-xs/normal",
                            children: u.intl.format(u.t.WMUgCX, {}),
                        }),
                ],
            }),
            k &&
                (0, i.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    children: (0, i.jsx)(l.Button, {
                        variant: "primary",
                        text: u.intl.string(u.t.PDTjLN),
                        onClick: I,
                    }),
                }),
        ],
    });
}
