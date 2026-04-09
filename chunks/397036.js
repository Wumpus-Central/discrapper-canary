n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(47167),
    o = n(734057),
    d = n(71393),
    c = n(599941),
    u = n(251766),
    h = n(950344),
    A = n(136179),
    _ = n(250253),
    m = n(652215),
    p = n(985018),
    g = n(551432);
function f(e) {
    let { guildId: t, channelId: n } = e,
        f = (0, u.e)({ guildId: t, channelId: n }),
        x = (0, c.uk)(t),
        E = (0, c.Tq)(t),
        I = (0, s.bG)([d.A], () => d.A.getGuild(t), [t]),
        C = I?.name,
        N = (0, s.bG)([o.A], () => o.A.getChannel(n)),
        T = (0, r.Ay)(N),
        S = l.useMemo(() => {
            let e = {};
            for (let t of x) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [x]);
    return ((0, h.A)({
        guildId: t,
        location: m.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: f.map((e) => e.id),
    }),
    null == I)
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
                      children: p.intl.format(p.t.xHMpym, { serverName: C, channelName: T }),
                  }),
                  (0, i.jsx)(a.Text, {
                      className: g.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: E?.description,
                  }),
                  (0, i.jsx)(A.A, {
                      children: f
                          .filter((e) => null != S[e.id])
                          .map((e) =>
                              (0, i.jsx)(
                                  _.A,
                                  {
                                      guildId: t,
                                      listingId: e.id,
                                      groupListingId: S[e.id],
                                      analyticsLocation: m.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
