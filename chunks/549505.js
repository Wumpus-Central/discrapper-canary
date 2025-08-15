a.d(t, { default: () => _ });
var s = a(951288);
a(647438);
var n = a(481060),
    i = a(688465),
    r = a(547972),
    o = a(63063),
    l = a(981631),
    d = a(332325),
    c = a(388032),
    m = a(688364),
    x = a(83173);
function _(e) {
    let { transitionState: t, onClose: a } = e;
    return (0, s.jsxs)(n.Y0X, {
        transitionState: t,
        size: n.CgR.DYNAMIC,
        className: m.modalRoot,
        parentComponent: "MemberListContentLearnMoreModal",
        children: [
            (0, s.jsxs)(n.xBx, {
                separator: !1,
                className: m.modalHeader,
                children: [
                    (0, s.jsx)("div", {
                        className: m.imageFrame,
                        children: (0, s.jsx)("img", {
                            alt: c.intl.string(c.t.AWkQTk),
                            src: x,
                            className: m.heroImage,
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        className: m.headerWrapper,
                        children: [
                            (0, s.jsx)(n.X6q, {
                                variant: "heading-xl/bold",
                                children: c.intl.string(c.t.gb37Ky),
                            }),
                            (0, s.jsx)(i.Z, { className: m.betaTag }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(n.hzk, {
                className: m.modalContent,
                children: [
                    (0, s.jsxs)("div", {
                        className: m.modalContentFrame,
                        children: [
                            (0, s.jsx)(n.Text, {
                                variant: "text-md/medium",
                                color: "header-secondary",
                                children: c.intl.string(c.t.WKxo8v),
                            }),
                            (0, s.jsx)(h, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: m.modalFooter,
                        children: [
                            (0, s.jsx)(n.zxk, {
                                onClick: a,
                                variant: "primary",
                                fullWidth: !0,
                                text: c.intl.string(c.t["x/26d3"]),
                            }),
                            (0, s.jsx)(n.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: m.disclosureText,
                                children: c.intl.format(c.t["5Ey5Dw"], {
                                    recentActivityURL: o.Z.getArticleURL(l.BhN.MEMBER_LIST_ACTIVITY_FEED),
                                    handleActivityPrivacyClick: () => {
                                        a(), (0, r.Z)(d.Z.ACTIVITY_PRIVACY);
                                    },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let h = () => {
    let e = [
        {
            icon: (0, s.jsx)(n.iFz, { className: m.icon }),
            text: c.intl.string(c.t.vXBrdn),
        },
        {
            icon: (0, s.jsx)(n.iWm, { className: m.icon }),
            text: c.intl.string(c.t.aExjOz),
        },
        {
            icon: (0, s.jsx)(n.kBi, { className: m.icon }),
            text: c.intl.string(c.t["i7/QHB"]),
        },
        {
            icon: (0, s.jsx)(n.lMe, { className: m.icon }),
            text: c.intl.string(c.t.ZmBfKC),
        },
    ];
    return (0, s.jsx)("div", {
        className: m.notes,
        children: e.map((e, t) => {
            let { icon: a, text: i } = e;
            return (0, s.jsxs)(
                "div",
                {
                    className: m.badgeNote,
                    children: [
                        (0, s.jsx)("div", {
                            className: m.badge,
                            children: a,
                        }),
                        (0, s.jsx)(n.Text, {
                            variant: "text-sm/medium",
                            children: i,
                        }),
                    ],
                },
                "memberlist-learn-more-note-".concat(t),
            );
        }),
    });
};
