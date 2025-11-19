i.d(e, { Z: () => u });
var t = i(54381);
i(473749);
var a = i(120356),
    s = i.n(a),
    l = i(481060),
    r = i(600164),
    o = i(548647),
    c = i(696375),
    d = i(800530),
    x = i(388032),
    m = i(691196),
    g = i(186425),
    p = i(160557);
function u(n) {
    let { className: e, onNext: i, onClose: a } = n,
        u = (0, o.n)();
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: r.Z.Direction.VERTICAL,
                className: g.header,
                separator: !1,
                children: [
                    (0, t.jsx)("div", {
                        className: m.iconContainer,
                        children: (0, t.jsx)("img", {
                            src: p,
                            alt: "",
                            className: m.icon,
                        }),
                    }),
                    (0, t.jsx)(l.Heading, {
                        className: g.title,
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t.QMbTSu),
                    }),
                    (0, t.jsx)(l.Heading, {
                        className: g.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: x.intl.string(x.t.Qdx8AP),
                    }),
                    null != a &&
                        (0, t.jsx)(l.olH, {
                            "data-migration-pending": !0,
                            className: g.closeButton,
                            onClick: a,
                        }),
                ],
            }),
            (0, t.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: s()(m.modalContent, e),
                paddingFix: !1,
                children: [
                    (0, t.jsx)(l.Heading, {
                        variant: "heading-md/bold",
                        color: "header-primary",
                        className: m.actionsHeader,
                        children: x.intl.string(x.t["9BRc1N"]),
                    }),
                    (0, t.jsx)(c.Z, {
                        text: x.intl.string(x.t.PxL38B),
                        url: d.sQ.COMMUNITY_GUIDELINES,
                        onClick: () => u(d.n0.ClickCommunityGuidelinesLink),
                    }),
                    (0, t.jsx)(c.Z, {
                        text: x.intl.string(x.t.qC3XKa),
                        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => u(d.n0.ClickWarningSystemHelpcenterLink),
                    }),
                ],
            }),
            (0, t.jsx)(l.mzw, {
                "data-migration-pending": !0,
                children: (0, t.jsx)(l.Button, {
                    variant: "primary",
                    text: x.intl.string(x.t.i4jeWR),
                    onClick: i,
                }),
            }),
        ],
    });
}
