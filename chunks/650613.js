n.d(t, { Z: () => f }), n(47120), n(390547);
var a = n(200651),
    r = n(442837),
    l = n(481060),
    i = n(100527),
    o = n(171368),
    s = n(594174),
    c = n(719247),
    d = n(71585),
    u = n(146282),
    h = n(897674),
    m = n(561308),
    x = n(206583),
    _ = n(44529);
function p(e) {
    let { id: t } = e,
        n = (0, r.e7)([s.default], () => s.default.getUser(t));
    return null == n
        ? null
        : (0, a.jsx)(l.P3F, {
              className: _.entryAuthor,
              onClick: function () {
                  (0, o.openUserProfileModal)({
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
    let t = (0, r.e7)([u.Z], () => u.Z.getFeed(x.YN.GLOBAL_FEED)),
        n = (0, r.e7)([u.Z], () => u.Z.getFilters()),
        i = (0, r.cj)(
            [c.Z],
            () => {
                var e;
                let n = {};
                for (let a of null !== (e = null == t ? void 0 : t.entries) && void 0 !== e ? e : []) n[(0, c.T)(a.content)] = c.Z.canRenderContent(a.content);
                return n;
            },
            [t]
        ),
        o = (0, r.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
    if (null == n) return null;
    let s =
        null == t
            ? void 0
            : null === (e = t.entries) || void 0 === e
              ? void 0
              : e.flatMap((e) => {
                    let { content: t } = e;
                    if (!(0, h.g)(n, t)) return [];
                    let r = i[(0, c.T)(t)];
                    return (0, a.jsxs)(
                        'li',
                        {
                            className: _.locatorEntry,
                            children: [
                                (0, a.jsx)(p, {
                                    type: t.author_type,
                                    id: t.author_id
                                }),
                                !r &&
                                    (0, a.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: 'Expired or no matching presence'
                                    }),
                                (0, m.n2)(t) &&
                                    (0, a.jsxs)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: ['Expired at ', t.expires_at]
                                    }),
                                o.has(t.id) &&
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
        children: [(0, a.jsx)(l.vwX, { children: 'Selected Content' }), null != s ? (0, a.jsx)('ul', { children: s }) : (0, a.jsx)('div', { children: '(none?)' })]
    });
}
