n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(734057),
    o = n(71393),
    c = n(599941),
    d = n(251766),
    u = n(950344),
    h = n(136179),
    A = n(250253),
    _ = n(652215),
    m = n(985018),
    g = n(807611);
function p(e) {
    let { guildId: t, channelId: n } = e,
        p = (0, d.e)({ guildId: t, channelId: n }),
        f = (0, c.uk)(t),
        x = (0, c.Tq)(t),
        E = (0, s.bG)([o.A], () => o.A.getGuild(t), [t]),
        I = E?.name,
        C = (0, s.bG)([r.A], () => r.A.getChannel(n)),
        N = l.useMemo(() => {
            let e = {};
            for (let t of f) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [f]);
    return ((0, u.A)({
        guildId: t,
        location: _.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: p.map((e) => e.id),
    }),
    null == E)
        ? (0, i.jsx)("div", {
              className: g.__invalid_spinnerContainer,
              children: (0, i.jsx)(a.y$y, { className: g.__invalid_spinner }),
          })
        : (0, i.jsxs)(a.ArX, {
              className: g.$$,
              children: [
                  (0, i.jsx)(a.Heading, {
                      variant: "heading-xl/semibold",
                      className: g.DX,
                      children: m.intl.format(m.t.xHMpym, { serverName: I, channelName: C?.name }),
                  }),
                  (0, i.jsx)(a.Text, {
                      className: g.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: x?.description,
                  }),
                  (0, i.jsx)(h.A, {
                      children: p
                          .filter((e) => null != N[e.id])
                          .map((e) =>
                              (0, i.jsx)(
                                  A.A,
                                  {
                                      guildId: t,
                                      listingId: e.id,
                                      groupListingId: N[e.id],
                                      analyticsLocation: _.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
