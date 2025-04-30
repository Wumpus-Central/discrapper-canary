n.d(t, { Z: () => f }), n(388685), n(361932), n(187205);
var a = n(200651),
    r = n(442837),
    l = n(481060),
    i = n(100527),
    s = n(892001),
    o = n(594174),
    c = n(719247),
    d = n(71585),
    u = n(146282),
    m = n(897674),
    x = n(561308),
    h = n(206583),
    p = n(873289);
function b(e) {
    let { id: t } = e,
        n = (0, r.e7)([o.default], () => o.default.getUser(t));
    return null == n
        ? null
        : (0, a.jsx)(l.P3F, {
              className: p.entryAuthor,
              onClick: function () {
                  (0, s.openUserProfileModal)({
                      sourceAnalyticsLocations: [i.Z.DEV_TOOLS],
                      userId: t
                  });
              },
              children: (0, a.jsx)(l.Text, {
                  variant: 'text-md/semibold',
                  children: n.username
              })
          });
}
function f() {
    var e;
    let t = (0, r.e7)([u.Z], () => u.Z.getFeed(h.YN.GLOBAL_FEED)),
        n = (0, r.e7)([u.Z], () => u.Z.getFilters()),
        i = (0, r.cj)(
            [c.Z],
            () => {
                var e;
                let n = {};
                for (let a of null != (e = null == t ? void 0 : t.entries) ? e : []) n[(0, c.T)(a.content)] = c.Z.canRenderContent(a.content);
                return n;
            },
            [t]
        ),
        s = (0, r.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
    if (null == n) return null;
    let o =
        null == t || null == (e = t.entries)
            ? void 0
            : e.flatMap((e) => {
                  let { content: t } = e;
                  if (!(0, m.g)(n, t)) return [];
                  let r = i[(0, c.T)(t)];
                  return (0, a.jsxs)(
                      'li',
                      {
                          className: p.locatorEntry,
                          children: [
                              (0, a.jsx)(b, {
                                  type: t.author_type,
                                  id: t.author_id
                              }),
                              !r &&
                                  (0, a.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: 'Expired or no matching presence'
                                  }),
                              (0, x.n2)(t) &&
                                  (0, a.jsxs)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: ['Expired at ', t.expires_at]
                                  }),
                              s.has(t.id) &&
                                  (0, a.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: 'Impression capped'
                                  })
                          ]
                      },
                      t.id
                  );
              });
    return (0, a.jsxs)(l.hjN, {
        children: [(0, a.jsx)(l.vwX, { children: 'Selected Content' }), null != o ? (0, a.jsx)('ul', { children: o }) : (0, a.jsx)('div', { children: '(none?)' })]
    });
}
