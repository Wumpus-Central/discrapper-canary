n.d(t, { Z: () => b }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(592125),
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
        C = (0, c.YB)(t),
        y = (0, l.e7)([s.Z], () => s.Z.getGuild(t), [t]),
        x = null == y ? void 0 : y.name,
        v = (0, l.e7)([a.Z], () => a.Z.getChannel(n)),
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
    null == y)
        ? (0, r.jsx)('div', {
              className: g.__invalid_spinnerContainer,
              children: (0, r.jsx)(o.$jN, { className: g.__invalid_spinner })
          })
        : (0, r.jsxs)(o.w0Z, {
              className: g.pageContainer,
              children: [
                  (0, r.jsx)(o.X6q, {
                      variant: 'heading-xl/semibold',
                      className: g.joinCtaTitle,
                      children: m.NW.format(m.t.xHMpys, {
                          serverName: x,
                          channelName: null == v ? void 0 : v.name
                      })
                  }),
                  (0, r.jsx)(o.Text, {
                      className: g.joinCtaSubtitle,
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: null == C ? void 0 : C.description
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
