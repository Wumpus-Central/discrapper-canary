n.d(t, { A: () => m }), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(734057),
    o = n(71393),
    c = n(599941),
    u = n(251766),
    d = n(950344),
    f = n(136179),
    p = n(250253),
    h = n(652215),
    b = n(985018),
    g = n(18318);
function m(e) {
    let { guildId: t, channelId: n } = e,
        m = (0, u.e)({
            guildId: t,
            channelId: n,
        }),
        A = (0, c.uk)(t),
        y = (0, c.Tq)(t),
        O = (0, i.bG)([o.A], () => o.A.getGuild(t), [t]),
        j = null == O ? void 0 : O.name,
        v = (0, i.bG)([s.A], () => s.A.getChannel(n)),
        x = l.useMemo(() => {
            let e = {};
            for (let t of A) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [A]);
    return ((0, d.A)({
        guildId: t,
        location: h.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: m.map((e) => e.id),
    }),
    null == O)
        ? (0, r.jsx)("div", {
              className: g.__invalid_spinnerContainer,
              children: (0, r.jsx)(a.y$y, { className: g.__invalid_spinner }),
          })
        : (0, r.jsxs)(a.ArX, {
              className: g.$$,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-xl/semibold",
                      className: g.DX,
                      children: b.intl.format(b.t.xHMpym, {
                          serverName: j,
                          channelName: null == v ? void 0 : v.name,
                      }),
                  }),
                  (0, r.jsx)(a.Text, {
                      className: g.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: null == y ? void 0 : y.description,
                  }),
                  (0, r.jsx)(f.A, {
                      guildId: t,
                      children: m
                          .filter((e) => null != x[e.id])
                          .map((e) =>
                              (0, r.jsx)(
                                  p.A,
                                  {
                                      guildId: t,
                                      listingId: e.id,
                                      groupListingId: x[e.id],
                                      analyticsLocation: h.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
