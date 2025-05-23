n.d(t, { Z: () => b }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(592125),
    s = n(430824),
    c = n(584825),
    u = n(406074),
    d = n(660196),
    p = n(36246),
    h = n(305342),
    f = n(981631),
    m = n(388032),
    g = n(845230);
function b(e) {
    let { guildId: t, channelId: n } = e,
        b = (0, u.C)({
            guildId: t,
            channelId: n
        }),
        _ = (0, c.GG)(t),
        x = (0, c.YB)(t),
        C = (0, l.e7)([s.Z], () => s.Z.getGuild(t), [t]),
        y = null == C ? void 0 : C.name,
        v = (0, l.e7)([o.Z], () => o.Z.getChannel(n)),
        j = i.useMemo(() => {
            let e = {};
            for (let t of _) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [_]);
    return ((0, d.Z)({
        guildId: t,
        location: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: b.map((e) => e.id)
    }),
    null == C)
        ? (0, r.jsx)('div', {
              className: g.__invalid_spinnerContainer,
              children: (0, r.jsx)(a.$jN, { className: g.__invalid_spinner })
          })
        : (0, r.jsxs)(a.w0Z, {
              className: g.pageContainer,
              children: [
                  (0, r.jsx)(a.X6q, {
                      variant: 'heading-xl/semibold',
                      className: g.joinCtaTitle,
                      children: m.intl.format(m.t.xHMpys, {
                          serverName: y,
                          channelName: null == v ? void 0 : v.name
                      })
                  }),
                  (0, r.jsx)(a.Text, {
                      className: g.joinCtaSubtitle,
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: null == x ? void 0 : x.description
                  }),
                  (0, r.jsx)(p.Z, {
                      guildId: t,
                      children: b
                          .filter((e) => null != j[e.id])
                          .map((e) =>
                              (0, r.jsx)(
                                  h.Z,
                                  {
                                      guildId: t,
                                      listingId: e.id,
                                      groupListingId: j[e.id],
                                      analyticsLocation: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL
                                  },
                                  e.id
                              )
                          )
                  })
              ]
          });
}
