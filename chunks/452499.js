n.d(t, { A: () => a }), n(896048);
var r = n(64700),
    i = n(486020),
    l = n(791275),
    s = n(652215);
function a(e, t, n) {
    var a, c;
    let { isLoading: o, error: d, highlightedCreatorDetails: u } = (0, l.A)(e),
        f = null == u ? void 0 : u.store_page,
        g = r.useMemo(() => {
            var e, t, n;
            let r,
                i =
                    ((n = null == f || null == (e = f.role_subscription) ? void 0 : e.group_listings),
                    (r = new Set()),
                    null == n ||
                        n.forEach((e) => {
                            var t;
                            null == (t = e.subscription_listings) ||
                                t.forEach((e) => {
                                    r.add(e.role_id);
                                });
                        }),
                    r),
                l = null == f || null == (t = f.role_subscription) ? void 0 : t.benefit_emojis;
            return null == l ? void 0 : l.filter((e) => e.roles.some((e) => i.has(e)));
        }, [null == f ? void 0 : f.role_subscription]),
        b = null == f ? void 0 : f.guild.icon_hash,
        m = i.Ay.getGuildIconURL({
            id: e,
            icon: b,
            size: n,
        }),
        p = r.useMemo(() => (null != g && g.length > t ? g.slice(0, t) : g), [g, t]),
        x = null != g && g.length > t ? g.length - t : null,
        h = null == u ? void 0 : u.slug,
        j = null != h ? s.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(h) : void 0,
        O = null == f || null == (a = f.guild) ? void 0 : a.name,
        y = null == f || null == (c = f.role_subscription) ? void 0 : c.subscriber_count,
        v = !o && null != O && null != b && null != m;
    return v
        ? {
              hasAllImperativeDetails: v,
              isLoading: o,
              details: {
                  guildName: O,
                  guildIcon: b,
                  guildAvatarUrl: m,
                  storePageUrl: j,
                  subscriberCount: y,
                  emojisToShow: p,
                  notShownEmojiCount: x,
              },
          }
        : {
              hasAllImperativeDetails: v,
              isLoading: o,
              error: d,
          };
}
