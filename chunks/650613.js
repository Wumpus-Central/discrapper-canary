n.d(t, { Z: () => _ }), n(47120), n(390547);
var a = n(200651),
    l = n(442837),
    r = n(481060),
    i = n(100527),
    o = n(171368),
    s = n(594174),
    c = n(719247),
    d = n(71585),
    u = n(146282),
    m = n(897674),
    h = n(561308),
    x = n(206583),
    p = n(44529);
function f(e) {
    let { id: t } = e,
        n = (0, l.e7)([s.default], () => s.default.getUser(t));
    return null == n
        ? null
        : (0, a.jsx)(r.P3F, {
              className: p.entryAuthor,
              onClick: function () {
                  (0, o.openUserProfileModal)({
                      sourceAnalyticsLocations: [i.Z.DEV_TOOLS],
                      userId: t
                  });
              },
              children: (0, a.jsx)(r.Text, {
                  variant: 'text-md/semibold',
                  children: n.username
              })
          });
}
function _() {
    var e;
    let t = (0, l.e7)([u.Z], () => u.Z.getFeed(x.YN.GLOBAL_FEED)),
        n = (0, l.e7)([u.Z], () => u.Z.getFilters()),
        i = (0, l.cj)(
            [c.Z],
            () => {
                var e;
                let n = {};
                for (let a of null !== (e = null == t ? void 0 : t.entries) && void 0 !== e ? e : []) n[(0, c.T)(a.content)] = c.Z.canRenderContent(a.content);
                return n;
            },
            [t]
        ),
        o = (0, l.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
    if (null == n) return null;
    let s =
        null == t
            ? void 0
            : null === (e = t.entries) || void 0 === e
              ? void 0
              : e.flatMap((e) => {
                    let { content: t } = e;
                    if (!(0, m.g)(n, t)) return [];
                    let l = i[(0, c.T)(t)];
                    return (0, a.jsxs)(
                        'li',
                        {
                            className: p.locatorEntry,
                            children: [
                                (0, a.jsx)(f, {
                                    type: t.author_type,
                                    id: t.author_id
                                }),
                                !l &&
                                    (0, a.jsx)(r.Text, {
                                        variant: 'text-md/normal',
                                        children: 'Expired or no matching presence'
                                    }),
                                (0, h.n2)(t) &&
                                    (0, a.jsxs)(r.Text, {
                                        variant: 'text-md/normal',
                                        children: ['Expired at ', t.expires_at]
                                    }),
                                o.has(t.id) &&
                                    (0, a.jsx)(r.Text, {
                                        variant: 'text-md/normal',
                                        children: 'Impression capped'
                                    })
                            ]
                        },
                        t.id
                    );
                });
    return (0, a.jsxs)(r.hjN, {
        children: [(0, a.jsx)(r.vwX, { children: 'Selected Content' }), null != s ? (0, a.jsx)('ul', { children: s }) : (0, a.jsx)('div', { children: '(none?)' })]
    });
}
