n.d(t, { Z: () => g }), n(388685), n(361932), n(187205);
var a = n(54381),
    l = n(442837),
    i = n(481060),
    r = n(100527),
    s = n(892001),
    o = n(594174),
    c = n(719247),
    d = n(71585),
    u = n(146282),
    m = n(897674),
    p = n(561308),
    h = n(206583),
    x = n(281327);
function f(e) {
    let { id: t } = e,
        n = (0, l.e7)([o.default], () => o.default.getUser(t));
    return null == n
        ? null
        : (0, a.jsx)(i.P3F, {
              className: x.entryAuthor,
              onClick: function () {
                  (0, s.openUserProfileModal)({
                      sourceAnalyticsLocations: [r.Z.DEV_TOOLS],
                      userId: t,
                  });
              },
              children: (0, a.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  children: n.username,
              }),
          });
}
function g() {
    var e;
    let t = (0, l.e7)([u.Z], () => u.Z.getFeed(h.YN.GLOBAL_FEED)),
        n = (0, l.e7)([u.Z], () => u.Z.getFilters()),
        r = (0, l.cj)([c.Z], () => {
            var e;
            let n = {};
            for (let a of null != (e = null == t ? void 0 : t.entries) ? e : [])
                n[(0, c.T)(a.content)] = c.Z.canRenderContent(a.content);
            return n;
        }, [t]),
        s = (0, l.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
    if (null == n) return null;
    let o =
        null == t || null == (e = t.entries)
            ? void 0
            : e.flatMap((e) => {
                  let { content: t } = e;
                  if (!(0, m.g)(n, t)) return [];
                  let l = r[(0, c.T)(t)];
                  return (0, a.jsxs)(
                      "li",
                      {
                          className: x.locatorEntry,
                          children: [
                              (0, a.jsx)(f, {
                                  type: t.author_type,
                                  id: t.author_id,
                              }),
                              !l &&
                                  (0, a.jsx)(i.Text, {
                                      variant: "text-md/normal",
                                      children: "Expired or no matching presence",
                                  }),
                              (0, p.n2)(t) &&
                                  (0, a.jsxs)(i.Text, {
                                      variant: "text-md/normal",
                                      children: ["Expired at ", t.expires_at],
                                  }),
                              s.has(t.id) &&
                                  (0, a.jsx)(i.Text, {
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
            (0, a.jsx)(i.Heading, {
                variant: "heading-md/semibold",
                children: "Selected Content",
            }),
            null != o ? (0, a.jsx)("ul", { children: o }) : (0, a.jsx)("div", { children: "(none?)" }),
        ],
    });
}
