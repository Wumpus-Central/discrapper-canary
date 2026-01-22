n.d(i, {
    A: () => N,
});
var t = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    l = n(397927),
    r = n(235986),
    d = n(261398),
    c = n(808224),
    o = n(239093),
    x = n(985018),
    m = n(504589),
    g = n(299916),
    p = n(83079);

function N(e) {
    let { className: i, onNext: n, onClose: a } = e,
        N = (0, d.e)();
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                direction: r.A.Direction.VERTICAL,
                className: g.wx,
                separator: !1,
                children: [
                    (0, t.jsx)("div", {
                        className: m.zc,
                        children: (0, t.jsx)("img", {
                            src: p,
                            alt: "",
                            className: m.Kk,
                        }),
                    }),
                    (0, t.jsx)(l.Heading, {
                        className: g.DD,
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t.QMbTSu),
                    }),
                    (0, t.jsx)(l.Heading, {
                        className: g.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: x.intl.string(x.t.Qdx8AP),
                    }),
                    null != a &&
                        (0, t.jsx)(l.s_y, {
                            "data-migration-pending": !0,
                            className: g.b,
                            onClick: a,
                        }),
                ],
            }),
            (0, t.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: s()(m.jE, i),
                paddingFix: !1,
                children: [
                    (0, t.jsx)(l.Heading, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        className: m.f9,
                        children: x.intl.string(x.t["9BRc1N"]),
                    }),
                    (0, t.jsx)(c.A, {
                        text: x.intl.string(x.t.PxL38B),
                        url: o.d$.COMMUNITY_GUIDELINES,
                        onClick: () => N(o.ZU.ClickCommunityGuidelinesLink),
                    }),
                    (0, t.jsx)(c.A, {
                        text: x.intl.string(x.t.qC3XKa),
                        url: o.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => N(o.ZU.ClickWarningSystemHelpcenterLink),
                    }),
                ],
            }),
            (0, t.jsx)(l.jlY, {
                "data-migration-pending": !0,
                children: (0, t.jsx)(l.Button, {
                    variant: "primary",
                    text: x.intl.string(x.t.i4jeWR),
                    onClick: n,
                }),
            }),
        ],
    });
}
