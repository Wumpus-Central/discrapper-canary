a.d(t, { A: () => _ });
var n = a(627968),
    l = a(311907),
    i = a(939249),
    s = a(834730),
    r = a(534514),
    o = a(793574),
    d = a(657331),
    c = a(287809),
    u = a(352139),
    m = a(435738),
    h = a(99753),
    p = a(475450),
    x = a(583846),
    g = a(424994),
    v = a(330837);
function b(e) {
    let { id: t } = e,
        a = (0, l.bG)([c.default], () => c.default.getUser(t));
    return null == a
        ? null
        : (0, n.jsx)(i.D, {
              className: v._,
              onClick: function () {
                  (0, d.openUserProfileModal)({ sourceAnalyticsLocations: [o.A.DEV_TOOLS], userId: t });
              },
              children: (0, n.jsx)(s.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function _() {
    let e = (0, l.bG)([h.A], () => h.A.getFeed(g.X1.GLOBAL_FEED)),
        t = (0, l.bG)([h.A], () => h.A.getFilters()),
        a = (0, l.cf)([u.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, u.$)(a.content)] = u.A.canRenderContent(a.content);
            return t;
        }, [e]),
        i = (0, l.bG)([m.A], () => m.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let o = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, p.l)(t, l)) return [];
        let r = a[(0, u.$)(l)];
        return (0, n.jsxs)(
            "li",
            {
                className: v.p,
                children: [
                    (0, n.jsx)(b, { type: l.author_type, id: l.author_id }),
                    !r && (0, n.jsx)(s.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, x.I5)(l) &&
                        (0, n.jsxs)(s.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    i.has(l.id) && (0, n.jsx)(s.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(r.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != o ? (0, n.jsx)("ul", { children: o }) : (0, n.jsx)("div", { children: "(none?)" }),
        ],
    });
}
