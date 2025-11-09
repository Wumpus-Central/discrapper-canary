n.d(t, { Z: () => b }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(592125),
    o = n(430824),
    c = n(584825),
    d = n(406074),
    u = n(660196),
    p = n(36246),
    h = n(305342),
    f = n(981631),
    g = n(388032),
    m = n(31428);
function b(e) {
    let { guildId: t, channelId: n } = e,
        b = (0, d.C)({
            guildId: t,
            channelId: n,
        }),
        _ = (0, c.GG)(t),
        y = (0, c.YB)(t),
        x = (0, l.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        O = null == x ? void 0 : x.name,
        v = (0, l.e7)([s.Z], () => s.Z.getChannel(n)),
        j = i.useMemo(() => {
            let e = {};
            for (let t of _) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [_]);
    return ((0, u.Z)({
        guildId: t,
        location: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: b.map((e) => e.id),
    }),
    null == x)
        ? (0, r.jsx)("div", {
              className: m.__invalid_spinnerContainer,
              children: (0, r.jsx)(a.$jN, { className: m.__invalid_spinner }),
          })
        : (0, r.jsxs)(a.w0Z, {
              className: m.pageContainer,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-xl/semibold",
                      className: m.joinCtaTitle,
                      children: g.intl.format(g.t.xHMpym, {
                          serverName: O,
                          channelName: null == v ? void 0 : v.name,
                      }),
                  }),
                  (0, r.jsx)(a.Text, {
                      className: m.joinCtaSubtitle,
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: null == y ? void 0 : y.description,
                  }),
                  (0, r.jsx)(p.Z, {
                      guildId: t,
                      children: b
                          .filter((e) => null != j[e.id])
                          .map((e) =>
                              (0, r.jsx)(
                                  h.Z,
                                  {
                                      guildId: t,
                                      listingId: e.id,
                                      groupListingId: j[e.id],
                                      analyticsLocation: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
