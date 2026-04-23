n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(289873),
    r = n(573613),
    o = n(534514),
    d = n(834730),
    c = n(47167),
    u = n(734057),
    h = n(71393),
    A = n(599941),
    _ = n(251766),
    m = n(950344),
    g = n(136179),
    p = n(250253),
    f = n(652215),
    E = n(985018),
    x = n(601099);
function I(e) {
    let { guildId: t, channelId: n } = e,
        I = (0, _.e)({ guildId: t, channelId: n }),
        C = (0, A.uk)(t),
        b = (0, A.Tq)(t),
        N = (0, s.bG)([h.A], () => h.A.getGuild(t), [t]),
        S = N?.name,
        v = (0, s.bG)([u.A], () => u.A.getChannel(n)),
        T = (0, c.Ay)(v),
        y = l.useMemo(() => {
            let e = {};
            for (let t of C) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [C]);
    return ((0, m.A)({
        guildId: t,
        location: f.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: I.map((e) => e.id),
    }),
    null == N)
        ? (0, i.jsx)("div", {
              className: x.__invalid_spinnerContainer,
              children: (0, i.jsx)(a.y, { className: x.__invalid_spinner }),
          })
        : (0, i.jsxs)(r.Ar, {
              className: x.$$,
              children: [
                  (0, i.jsx)(o.D, {
                      variant: "heading-xl/semibold",
                      className: x.DX,
                      children: E.intl.format(E.t.xHMpym, { serverName: S, channelName: T }),
                  }),
                  (0, i.jsx)(d.E, {
                      className: x.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: b?.description,
                  }),
                  (0, i.jsx)(g.A, {
                      children: I.filter((e) => null != y[e.id]).map((e) =>
                          (0, i.jsx)(
                              p.A,
                              {
                                  guildId: t,
                                  listingId: e.id,
                                  groupListingId: y[e.id],
                                  analyticsLocation: f.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
