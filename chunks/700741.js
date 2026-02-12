i.d(t, { A: () => N });
var n = i(627968);
i(64700);
var a = i(503698),
    s = i.n(a),
    l = i(397927),
    r = i(235986),
    d = i(261398),
    c = i(808224),
    o = i(239093),
    x = i(985018),
    m = i(504589),
    g = i(299916),
    p = i(83079);
function N(e) {
    let { className: t, onNext: i, onClose: a } = e,
        N = (0, d.e)();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                direction: r.A.Direction.VERTICAL,
                className: g.wx,
                separator: !1,
                children: [
                    (0, n.jsx)("div", {
                        className: m.zc,
                        children: (0, n.jsx)("img", { src: p, alt: "", className: m.Kk }),
                    }),
                    (0, n.jsx)(l.Heading, {
                        className: g.DD,
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t.QMbTSu),
                    }),
                    (0, n.jsx)(l.Heading, {
                        className: g.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: x.intl.string(x.t.Qdx8AP),
                    }),
                    null != a && (0, n.jsx)(l.s_y, { "data-migration-pending": !0, className: g.b, onClick: a }),
                ],
            }),
            (0, n.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: s()(m.jE, t),
                paddingFix: !1,
                children: [
                    (0, n.jsx)(l.Heading, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        className: m.f9,
                        children: x.intl.string(x.t["9BRc1N"]),
                    }),
                    (0, n.jsx)(c.A, {
                        text: x.intl.string(x.t.PxL38B),
                        url: o.d$.COMMUNITY_GUIDELINES,
                        onClick: () => N(o.ZU.ClickCommunityGuidelinesLink),
                    }),
                    (0, n.jsx)(c.A, {
                        text: x.intl.string(x.t.qC3XKa),
                        url: o.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => N(o.ZU.ClickWarningSystemHelpcenterLink),
                    }),
                ],
            }),
            (0, n.jsx)(l.jlY, {
                "data-migration-pending": !0,
                children: (0, n.jsx)(l.Button, { variant: "primary", text: x.intl.string(x.t.i4jeWR), onClick: i }),
            }),
        ],
    });
}
