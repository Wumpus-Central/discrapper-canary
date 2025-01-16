n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(592125),
    o = n(430824),
    c = n(584825),
    d = n(406074),
    u = n(660196),
    h = n(36246),
    p = n(305342),
    m = n(981631),
    f = n(388032),
    g = n(625298);
function C(e) {
    let { guildId: t, channelId: n } = e,
        C = (0, d.C)({
            guildId: t,
            channelId: n
        }),
        x = (0, c.GG)(t),
        v = (0, c.YB)(t),
        _ = (0, r.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        I = null == _ ? void 0 : _.name,
        E = (0, r.e7)([s.Z], () => s.Z.getChannel(n)),
        b = l.useMemo(() => {
            let e = {};
            for (let t of x) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [x]);
    return ((0, u.Z)({
        guildId: t,
        location: m.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: C.map((e) => e.id)
    }),
    null == _)
        ? (0, i.jsx)('div', {
              className: g.__invalid_spinnerContainer,
              children: (0, i.jsx)(a.Spinner, { className: g.__invalid_spinner })
          })
        : (0, i.jsxs)(a.ScrollerAuto, {
              className: g.pageContainer,
              children: [
                  (0, i.jsx)(a.Heading, {
                      variant: 'heading-xl/semibold',
                      className: g.joinCtaTitle,
                      children: f.intl.format(f.t.xHMpys, {
                          serverName: I,
                          channelName: null == E ? void 0 : E.name
                      })
                  }),
                  (0, i.jsx)(a.Text, {
                      className: g.joinCtaSubtitle,
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: null == v ? void 0 : v.description
                  }),
                  (0, i.jsx)(h.Z, {
                      guildId: t,
                      children: C.filter((e) => null != b[e.id]).map((e) =>
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
