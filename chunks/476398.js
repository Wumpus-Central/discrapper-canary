n.d(t, { A: () => _ });
var a = n(627968),
    i = n(311907),
    l = n(397927),
    s = n(793574),
    r = n(657331),
    o = n(287809),
    d = n(574520),
    c = n(435738),
    u = n(99753),
    m = n(475450),
    h = n(583846),
    x = n(424994),
    p = n(36078);
function g(e) {
    let { id: t } = e,
        n = (0, i.bG)([o.default], () => o.default.getUser(t));
    return null == n
        ? null
        : (0, a.jsx)(l.DUT, {
              className: p._,
              onClick: function () {
                  (0, r.openUserProfileModal)({ sourceAnalyticsLocations: [s.A.DEV_TOOLS], userId: t });
              },
              children: (0, a.jsx)(l.Text, { variant: "text-md/semibold", children: n.username }),
          });
}
function _() {
    let e = (0, i.bG)([u.A], () => u.A.getFeed(x.X1.GLOBAL_FEED)),
        t = (0, i.bG)([u.A], () => u.A.getFilters()),
        n = (0, i.cf)([d.A], () => {
            let t = {};
            for (let n of e?.entries ?? []) t[(0, d.$)(n.content)] = d.A.canRenderContent(n.content);
            return t;
        }, [e]),
        s = (0, i.bG)([c.A], () => c.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let r = e?.entries?.flatMap((e) => {
        let { content: i } = e;
        if (!(0, m.l)(t, i)) return [];
        let r = n[(0, d.$)(i)];
        return (0, a.jsxs)(
            "li",
            {
                className: p.p,
                children: [
                    (0, a.jsx)(g, { type: i.author_type, id: i.author_id }),
                    !r &&
                        (0, a.jsx)(l.Text, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, h.I5)(i) &&
                        (0, a.jsxs)(l.Text, { variant: "text-md/normal", children: ["Expired at ", i.expires_at] }),
                    s.has(i.id) && (0, a.jsx)(l.Text, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            i.id,
        );
    });
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(l.Heading, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != r ? (0, a.jsx)("ul", { children: r }) : (0, a.jsx)("div", { children: "(none?)" }),
        ],
    });
}
