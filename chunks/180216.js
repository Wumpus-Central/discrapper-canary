n.d(t, { Z: () => b }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(592125),
    o = n(430824),
    c = n(584825),
    u = n(406074),
    d = n(660196),
    h = n(36246),
    p = n(305342),
    f = n(981631),
    g = n(388032),
    m = n(845230);
function b(e) {
    let { guildId: t, channelId: n } = e,
        b = (0, u.C)({
            guildId: t,
            channelId: n,
        }),
        y = (0, c.GG)(t),
        x = (0, c.YB)(t),
        j = (0, l.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        _ = null == j ? void 0 : j.name,
        O = (0, l.e7)([s.Z], () => s.Z.getChannel(n)),
        v = i.useMemo(() => {
            let e = {};
            for (let t of y) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [y]);
    return ((0, d.Z)({
        guildId: t,
        location: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: b.map((e) => e.id),
    }),
    null == j)
        ? (0, r.jsx)("div", {
              className: m.__invalid_spinnerContainer,
              children: (0, r.jsx)(a.$jN, { className: m.__invalid_spinner }),
          })
        : (0, r.jsxs)(a.w0Z, {
              className: m.pageContainer,
              children: [
                  (0, r.jsx)(a.X6q, {
                      variant: "heading-xl/semibold",
                      className: m.joinCtaTitle,
                      children: g.intl.format(g.t.xHMpys, {
                          serverName: _,
                          channelName: null == O ? void 0 : O.name,
                      }),
                  }),
                  (0, r.jsx)(a.Text, {
                      className: m.joinCtaSubtitle,
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: null == x ? void 0 : x.description,
                  }),
                  (0, r.jsx)(h.Z, {
                      guildId: t,
                      children: b
                          .filter((e) => null != v[e.id])
                          .map((e) =>
                              (0, r.jsx)(
                                  p.Z,
                                  {
                                      guildId: t,
                                      listingId: e.id,
                                      groupListingId: v[e.id],
                                      analyticsLocation: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
