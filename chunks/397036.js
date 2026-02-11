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
    m = n(652215),
    p = n(985018),
    g = n(449515);
function _(e) {
    let { guildId: t, channelId: n } = e,
        _ = (0, c.e)({ guildId: t, channelId: n }),
        f = (0, d.uk)(t),
        x = (0, d.Tq)(t),
        C = (0, s.bG)([o.A], () => o.A.getGuild(t), [t]),
        E = C?.name,
        I = (0, s.bG)([r.A], () => r.A.getChannel(n)),
        b = l.useMemo(() => {
            let e = {};
            for (let t of f) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [f]);
    return ((0, u.A)({
        guildId: t,
        location: m.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: _.map((e) => e.id),
    }),
    null == C)
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
                      children: p.intl.format(p.t.xHMpym, { serverName: E, channelName: I?.name }),
                  }),
                  (0, i.jsx)(a.Text, {
                      className: g.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: x?.description,
                  }),
                  (0, i.jsx)(h.A, {
                      guildId: t,
                      children: _.filter((e) => null != b[e.id]).map((e) =>
                          (0, i.jsx)(
                              A.A,
                              {
                                  guildId: t,
                                  listingId: e.id,
                                  groupListingId: b[e.id],
                                  analyticsLocation: m.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
