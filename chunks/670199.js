t.d(n, { Z: () => h }), t(953529);
var i = t(255367);
t(73800);
var a = t(120356),
    s = t.n(a),
    l = t(481060),
    r = t(600164),
    o = t(531441),
    c = t(788080),
    d = t(548647),
    x = t(696375),
    m = t(97568),
    p = t(800530),
    u = t(388032),
    _ = t(979527);
function h(e) {
    var n, t;
    let {
            classification: a,
            isDsaEligible: h = !1,
            isSpam: g = !1,
            isCoppa: C = !1,
            appealIngestionType: N,
            className: j,
            onClose: I,
            onNext: E,
        } = e,
        T = (0, d.n)(),
        v = null != (n = null == a ? void 0 : a.explainer_link) ? n : "",
        f = null != a && null != a.flagged_content && a.flagged_content.length > 0,
        S = (0, c.c7)(null == a ? void 0 : a.description),
        k = !g && !C && (null == N || N === o.j4.IN_APP),
        A = null != a && ((0, c.FB)(a) || f);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: r.Z.Direction.VERTICAL,
                className: _.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: _.title,
                        variant: "heading-xl/semibold",
                        children: u.intl.string(u.t["C5q+pa"]),
                    }),
                    (0, i.jsx)(l.Text, {
                        className: _.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: u.intl.string(u.t.URt7VF),
                    }),
                    null != I &&
                        (0, i.jsx)(l.olH, {
                            className: _.closeButton,
                            onClick: I,
                        }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: s()(_.modalContent, !A && _.evidenceOffset, j),
                paddingFix: !1,
                children: [
                    A && (0, i.jsx)(m.s, { flaggedContent: null != (t = a.flagged_content) ? t : [] }),
                    (0, i.jsx)(l.Text, {
                        className: _.optionHeader,
                        color: "header-secondary",
                        variant: "text-xs/bold",
                        children: u.intl.string(u.t.xsdcxs),
                    }),
                    (0, i.jsx)("div", {
                        className: _.policyContainer,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: S,
                        }),
                    }),
                    C &&
                        (0, i.jsx)(x.Z, {
                            url: p.sQ.AGE_VERIFICATION_LINK,
                            text: u.intl.string(u.t["gJs+kZ"]),
                            onClick: () => T(p.n0.ClickAgeVerificationLink),
                        }),
                    g &&
                        !C &&
                        (0, i.jsx)(x.Z, {
                            url: p.sQ.SPAM_LINK,
                            text: u.intl.string(u.t["PaNS+P"]),
                            onClick: () => T(p.n0.ClickSpamWebformLink),
                        }),
                    !C &&
                        (0, i.jsx)(x.Z, {
                            text: u.intl.string(u.t["Vtyn//"]),
                            url: v,
                            onClick: () => T(p.n0.ClickLearnMoreLink),
                        }),
                    k &&
                        h &&
                        (0, i.jsx)(l.Text, {
                            className: _.learnMore,
                            variant: "text-xs/normal",
                            children: u.intl.format(u.t.WMUgCQ, {}),
                        }),
                ],
            }),
            k &&
                (0, i.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    children: (0, i.jsx)(l.zxk, {
                        variant: "primary",
                        text: u.intl.string(u.t.PDTjLC),
                        onClick: E,
                    }),
                }),
        ],
    });
}
