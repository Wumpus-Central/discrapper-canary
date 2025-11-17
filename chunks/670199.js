i.d(e, { Z: () => h }), i(953529);
var t = i(54381);
i(473749);
var a = i(120356),
    s = i.n(a),
    l = i(481060),
    r = i(600164),
    o = i(531441),
    c = i(788080),
    d = i(548647),
    x = i(696375),
    m = i(97568),
    g = i(800530),
    p = i(388032),
    u = i(186425);
function h(n) {
    var e, i;
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
        T = null != (e = null == a ? void 0 : a.explainer_link) ? e : "",
        S = null != a && null != a.flagged_content && a.flagged_content.length > 0,
        A = (0, c.c7)(null == a ? void 0 : a.description),
        k = !N && !C && (null == j || j === o.j4.IN_APP),
        Z = null != a && ((0, c.FB)(a) || S);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: r.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, t.jsx)(l.Heading, {
                        className: u.title,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(l.Text, {
                        className: u.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: p.intl.string(p.t.URt7VI),
                    }),
                    null != E &&
                        (0, t.jsx)(l.olH, {
                            "data-migration-pending": !0,
                            className: u.closeButton,
                            onClick: E,
                        }),
                ],
            }),
            (0, t.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: s()(u.modalContent, !Z && u.evidenceOffset, _),
                paddingFix: !1,
                children: [
                    Z && (0, t.jsx)(m.s, { flaggedContent: null != (i = a.flagged_content) ? i : [] }),
                    (0, t.jsx)(l.Text, {
                        className: u.optionHeader,
                        color: "header-secondary",
                        variant: "text-xs/bold",
                        children: p.intl.string(p.t.xsdcxh),
                    }),
                    (0, t.jsx)("div", {
                        className: u.policyContainer,
                        children: (0, t.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: A,
                        }),
                    }),
                    C &&
                        (0, t.jsx)(x.Z, {
                            url: g.sQ.AGE_VERIFICATION_LINK,
                            text: p.intl.string(p.t["gJs+kf"]),
                            onClick: () => v(g.n0.ClickAgeVerificationLink),
                        }),
                    N &&
                        !C &&
                        (0, t.jsx)(x.Z, {
                            url: g.sQ.SPAM_LINK,
                            text: p.intl.string(p.t["PaNS+I"]),
                            onClick: () => v(g.n0.ClickSpamWebformLink),
                        }),
                    !C &&
                        (0, t.jsx)(x.Z, {
                            text: p.intl.string(p.t["Vtyn/7"]),
                            url: T,
                            onClick: () => v(g.n0.ClickLearnMoreLink),
                        }),
                    k &&
                        h &&
                        (0, t.jsx)(l.Text, {
                            className: u.learnMore,
                            variant: "text-xs/normal",
                            children: p.intl.format(p.t.WMUgCX, {}),
                        }),
                ],
            }),
            k &&
                (0, t.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)(l.Button, {
                        variant: "primary",
                        text: p.intl.string(p.t.PDTjLN),
                        onClick: I,
                    }),
                }),
        ],
    });
}
