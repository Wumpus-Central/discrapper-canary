n.d(e, { A: () => h });
var t = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    l = n(935462),
    r = n(534514),
    c = n(821609),
    d = n(235986),
    o = n(39017),
    x = n(808224),
    m = n(239093),
    g = n(985018),
    p = n(170826),
    N = n(503193),
    A = n(83079);
function h(i) {
    let { className: e, onNext: n, onClose: a } = i,
        h = (0, o.e)();
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: N.wx,
                separator: !1,
                children: [
                    (0, t.jsx)("div", {
                        className: p.zc,
                        children: (0, t.jsx)("img", { src: A, alt: "", className: p.Kk }),
                    }),
                    (0, t.jsx)(r.D, {
                        className: N.DD,
                        variant: "heading-xl/semibold",
                        children: g.intl.string(g.t.QMbTSu),
                    }),
                    (0, t.jsx)(r.D, {
                        className: N.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: g.intl.string(g.t.Qdx8AP),
                    }),
                    null != a && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: N.b, onClick: a }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: s()(p.jE, e),
                paddingFix: !1,
                children: [
                    (0, t.jsx)(r.D, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        className: p.f9,
                        children: g.intl.string(g.t["9BRc1N"]),
                    }),
                    (0, t.jsx)(x.A, {
                        text: g.intl.string(g.t.PxL38B),
                        url: m.d$.COMMUNITY_GUIDELINES,
                        onClick: () => h(m.ZU.ClickCommunityGuidelinesLink),
                    }),
                    (0, t.jsx)(x.A, {
                        text: g.intl.string(g.t.qC3XKa),
                        url: m.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => h(m.ZU.ClickWarningSystemHelpcenterLink),
                    }),
                ],
            }),
            (0, t.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, t.jsx)(c.$, { variant: "primary", text: g.intl.string(g.t.i4jeWR), onClick: n }),
            }),
        ],
    });
}
