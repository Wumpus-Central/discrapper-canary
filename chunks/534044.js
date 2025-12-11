e.d(t, { Z: () => p });
var i = e(54381);
e(473749);
var a = e(120356),
    s = e.n(a),
    l = e(481060),
    r = e(600164),
    o = e(548647),
    c = e(696375),
    d = e(800530),
    x = e(388032),
    m = e(423332),
    g = e(420418),
    u = e(160557);
function p(n) {
    let { className: t, onNext: e, onClose: a } = n,
        p = (0, o.n)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: r.Z.Direction.VERTICAL,
                className: g.header,
                separator: !1,
                children: [
                    (0, i.jsx)("div", {
                        className: m.iconContainer,
                        children: (0, i.jsx)("img", {
                            src: u,
                            alt: "",
                            className: m.icon,
                        }),
                    }),
                    (0, i.jsx)(l.Heading, {
                        className: g.title,
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t.QMbTSu),
                    }),
                    (0, i.jsx)(l.Heading, {
                        className: g.subtitle,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: x.intl.string(x.t.Qdx8AP),
                    }),
                    null != a &&
                        (0, i.jsx)(l.olH, {
                            "data-migration-pending": !0,
                            className: g.closeButton,
                            onClick: a,
                        }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: s()(m.modalContent, t),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        className: m.actionsHeader,
                        children: x.intl.string(x.t["9BRc1N"]),
                    }),
                    (0, i.jsx)(c.Z, {
                        text: x.intl.string(x.t.PxL38B),
                        url: d.sQ.COMMUNITY_GUIDELINES,
                        onClick: () => p(d.n0.ClickCommunityGuidelinesLink),
                    }),
                    (0, i.jsx)(c.Z, {
                        text: x.intl.string(x.t.qC3XKa),
                        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => p(d.n0.ClickWarningSystemHelpcenterLink),
                    }),
                ],
            }),
            (0, i.jsx)(l.mzw, {
                "data-migration-pending": !0,
                children: (0, i.jsx)(l.Button, {
                    variant: "primary",
                    text: x.intl.string(x.t.i4jeWR),
                    onClick: e,
                }),
            }),
        ],
    });
}
