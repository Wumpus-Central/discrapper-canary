n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(592125),
    o = n(430824),
    c = n(584825),
    d = n(406074),
    u = n(660196),
    h = n(36246),
    p = n(305342),
    m = n(981631),
    f = n(388032),
    g = n(578535);
function _(e) {
    let { guildId: t, channelId: n } = e,
        _ = (0, d.C)({
            guildId: t,
            channelId: n
        }),
        C = (0, c.GG)(t),
        x = (0, c.YB)(t),
        v = (0, a.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        E = null == v ? void 0 : v.name,
        I = (0, a.e7)([s.Z], () => s.Z.getChannel(n)),
        b = l.useMemo(() => {
            let e = {};
            for (let t of C) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [C]);
    return ((0, u.Z)({
        guildId: t,
        location: m.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: _.map((e) => e.id)
    }),
    null == v)
        ? (0, i.jsx)('div', {
              className: g.__invalid_spinnerContainer,
              children: (0, i.jsx)(r.$jN, { className: g.__invalid_spinner })
          })
        : (0, i.jsxs)(r.w0Z, {
              className: g.pageContainer,
              children: [
                  (0, i.jsx)(r.X6q, {
                      variant: 'heading-xl/semibold',
                      className: g.joinCtaTitle,
                      children: f.intl.format(f.t.xHMpys, {
                          serverName: E,
                          channelName: null == I ? void 0 : I.name
                      })
                  }),
                  (0, i.jsx)(r.Text, {
                      className: g.joinCtaSubtitle,
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: null == x ? void 0 : x.description
                  }),
                  (0, i.jsx)(h.Z, {
                      guildId: t,
                      children: _.filter((e) => null != b[e.id]).map((e) =>
                          (0, i.jsx)(
                              p.Z,
                              {
                                  guildId: t,
                                  listingId: e.id,
                                  groupListingId: b[e.id],
                                  analyticsLocation: m.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
