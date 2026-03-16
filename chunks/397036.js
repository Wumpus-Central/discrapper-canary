"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(734057),
    o = n(71393),
    c = n(599941),
    d = n(251766),
    u = n(950344),
    h = n(136179),
    A = n(250253),
    m = n(652215),
    p = n(985018),
    g = n(18318);
function _(e) {
    let { guildId: t, channelId: n } = e,
        _ = (0, d.e)({ guildId: t, channelId: n }),
        f = (0, c.uk)(t),
        x = (0, c.Tq)(t),
        C = (0, l.bG)([o.A], () => o.A.getGuild(t), [t]),
        E = C?.name,
        I = (0, l.bG)([a.A], () => a.A.getChannel(n)),
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
              className: g.__invalid_spinnerContainer,
              children: (0, i.jsx)(r.y$y, { className: g.__invalid_spinner }),
          })
        : (0, i.jsxs)(r.ArX, {
              className: g.$$,
              children: [
                  (0, i.jsx)(r.Heading, {
                      variant: "heading-xl/semibold",
                      className: g.DX,
                      children: p.intl.format(p.t.xHMpym, { serverName: E, channelName: I?.name }),
                  }),
                  (0, i.jsx)(r.Text, {
                      className: g.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: x?.description,
                  }),
                  (0, i.jsx)(h.A, {
                      guildId: t,
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
