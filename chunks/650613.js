(a.d(t, { Z: () => f }), a(388685), a(361932), a(187205));
var n = a(255367),
    r = a(442837),
    l = a(481060),
    i = a(100527),
    s = a(892001),
    o = a(594174),
    c = a(719247),
    d = a(71585),
    u = a(146282),
    m = a(897674),
    p = a(561308),
    x = a(206583),
    h = a(873289);
function b(e) {
    let { id: t } = e,
        a = (0, r.e7)([o.default], () => o.default.getUser(t));
    return null == a
        ? null
        : (0, n.jsx)(l.P3F, {
              className: h.entryAuthor,
              onClick: function () {
                  (0, s.openUserProfileModal)({
                      sourceAnalyticsLocations: [i.Z.DEV_TOOLS],
                      userId: t
                  });
              },
              children: (0, n.jsx)(l.Text, {
                  variant: 'text-md/semibold',
                  children: a.username
              })
          });
}
function f() {
    var e;
    let t = (0, r.e7)([u.Z], () => u.Z.getFeed(x.YN.GLOBAL_FEED)),
        a = (0, r.e7)([u.Z], () => u.Z.getFilters()),
        i = (0, r.cj)(
            [c.Z],
            () => {
                var e;
                let a = {};
                for (let n of null != (e = null == t ? void 0 : t.entries) ? e : []) a[(0, c.T)(n.content)] = c.Z.canRenderContent(n.content);
                return a;
            },
            [t]
        ),
        s = (0, r.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
    if (null == a) return null;
    let o =
        null == t || null == (e = t.entries)
            ? void 0
            : e.flatMap((e) => {
                  let { content: t } = e;
                  if (!(0, m.g)(a, t)) return [];
                  let r = i[(0, c.T)(t)];
                  return (0, n.jsxs)(
                      'li',
                      {
                          className: h.locatorEntry,
                          children: [
                              (0, n.jsx)(b, {
                                  type: t.author_type,
                                  id: t.author_id
                              }),
                              !r &&
                                  (0, n.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: 'Expired or no matching presence'
                                  }),
                              (0, p.n2)(t) &&
                                  (0, n.jsxs)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: ['Expired at ', t.expires_at]
                                  }),
                              s.has(t.id) &&
                                  (0, n.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: 'Impression capped'
                                  })
                          ]
                      },
                      t.id
                  );
              });
    return (0, n.jsxs)(l.hjN, {
        children: [(0, n.jsx)(l.vwX, { children: 'Selected Content' }), null != o ? (0, n.jsx)('ul', { children: o }) : (0, n.jsx)('div', { children: '(none?)' })]
    });
}
