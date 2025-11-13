n.d(t, { Z: () => f }), n(388685), n(361932), n(187205);
var a = n(951288),
    i = n(442837),
    r = n(481060),
    l = n(100527),
    s = n(892001),
    o = n(594174),
    c = n(719247),
    d = n(71585),
    u = n(146282),
    m = n(897674),
    p = n(561308),
    h = n(206583),
    x = n(281327);
function g(e) {
    let { id: t } = e,
        n = (0, i.e7)([o.default], () => o.default.getUser(t));
    return null == n
        ? null
        : (0, a.jsx)(r.P3F, {
              className: x.entryAuthor,
              onClick: function () {
                  (0, s.openUserProfileModal)({
                      sourceAnalyticsLocations: [l.Z.DEV_TOOLS],
                      userId: t,
                  });
              },
              children: (0, a.jsx)(r.Text, {
                  variant: "text-md/semibold",
                  children: n.username,
              }),
          });
}
function f() {
    var e;
    let t = (0, i.e7)([u.Z], () => u.Z.getFeed(h.YN.GLOBAL_FEED)),
        n = (0, i.e7)([u.Z], () => u.Z.getFilters()),
        l = (0, i.cj)([c.Z], () => {
            var e;
            let n = {};
            for (let a of null != (e = null == t ? void 0 : t.entries) ? e : [])
                n[(0, c.T)(a.content)] = c.Z.canRenderContent(a.content);
            return n;
        }, [t]),
        s = (0, i.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
    if (null == n) return null;
    let o =
        null == t || null == (e = t.entries)
            ? void 0
            : e.flatMap((e) => {
                  let { content: t } = e;
                  if (!(0, m.g)(n, t)) return [];
                  let i = l[(0, c.T)(t)];
                  return (0, a.jsxs)(
                      "li",
                      {
                          className: x.locatorEntry,
                          children: [
                              (0, a.jsx)(g, {
                                  type: t.author_type,
                                  id: t.author_id,
                              }),
                              !i &&
                                  (0, a.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      children: "Expired or no matching presence",
                                  }),
                              (0, p.n2)(t) &&
                                  (0, a.jsxs)(r.Text, {
                                      variant: "text-md/normal",
                                      children: ["Expired at ", t.expires_at],
                                  }),
                              s.has(t.id) &&
                                  (0, a.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      children: "Impression capped",
                                  }),
                          ],
                      },
                      t.id,
                  );
              });
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                children: "Selected Content",
            }),
            null != o ? (0, a.jsx)("ul", { children: o }) : (0, a.jsx)("div", { children: "(none?)" }),
        ],
    });
}
