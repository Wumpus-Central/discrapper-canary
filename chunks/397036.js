"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(734057),
    o = n(71393),
    c = n(599941),
    d = n(251766),
    u = n(950344),
    h = n(136179),
    A = n(250253),
    m = n(652215),
    g = n(985018),
    p = n(449515);
function _(e) {
    let { guildId: t, channelId: n } = e,
        _ = (0, d.e)({ guildId: t, channelId: n }),
        f = (0, c.uk)(t),
        x = (0, c.Tq)(t),
        C = (0, l.bG)([o.A], () => o.A.getGuild(t), [t]),
        E = C?.name,
        I = (0, l.bG)([r.A], () => r.A.getChannel(n)),
        N = s.useMemo(() => {
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
              className: p.__invalid_spinnerContainer,
              children: (0, i.jsx)(a.y$y, { className: p.__invalid_spinner }),
          })
        : (0, i.jsxs)(a.ArX, {
              className: p.$$,
              children: [
                  (0, i.jsx)(a.Heading, {
                      variant: "heading-xl/semibold",
                      className: p.DX,
                      children: g.intl.format(g.t.xHMpym, { serverName: E, channelName: I?.name }),
                  }),
                  (0, i.jsx)(a.Text, {
                      className: p.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: x?.description,
                  }),
                  (0, i.jsx)(h.A, {
                      children: _.filter((e) => null != N[e.id]).map((e) =>
                          (0, i.jsx)(
                              A.A,
                              {
                                  guildId: t,
                                  listingId: e.id,
                                  groupListingId: N[e.id],
                                  analyticsLocation: m.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
