n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(734057),
    o = n(71393),
    d = n(599941),
    c = n(251766),
    u = n(950344),
    h = n(136179),
    A = n(250253),
    g = n(652215),
    m = n(985018),
    p = n(18318);
function _(e) {
    let { guildId: t, channelId: n } = e,
        _ = (0, c.e)({ guildId: t, channelId: n }),
        x = (0, d.uk)(t),
        f = (0, d.Tq)(t),
        E = (0, s.bG)([o.A], () => o.A.getGuild(t), [t]),
        C = E?.name,
        I = (0, s.bG)([r.A], () => r.A.getChannel(n)),
        S = l.useMemo(() => {
            let e = {};
            for (let t of x) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [x]);
    return ((0, u.A)({
        guildId: t,
        location: g.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: _.map((e) => e.id),
    }),
    null == E)
        ? (0, i.jsx)("div", {
              className: p.__invalid_spinnerContainer,
              children: (0, i.jsx)(a.y$y, { className: p.__invalid_spinner }),
          })
        : (0, i.jsxs)(a.ArX, {
              className: p.$$,
              children: [
                  (0, i.jsx)(a.Heading, {
                      variant: "heading-xl/semibold",
                      className: p.DX,
                      children: m.intl.format(m.t.xHMpym, { serverName: C, channelName: I?.name }),
                  }),
                  (0, i.jsx)(a.Text, {
                      className: p.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: f?.description,
                  }),
                  (0, i.jsx)(h.A, {
                      guildId: t,
                      children: _.filter((e) => null != S[e.id]).map((e) =>
                          (0, i.jsx)(
                              A.A,
                              {
                                  guildId: t,
                                  listingId: e.id,
                                  groupListingId: S[e.id],
                                  analyticsLocation: g.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
