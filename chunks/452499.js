n.d(t, { A: () => a });
var i = n(64700),
    l = n(486020),
    s = n(791275),
    r = n(652215);
function a(e, t, n) {
    let { isLoading: a, error: o, highlightedCreatorDetails: d } = (0, s.A)(e),
        c = d?.store_page,
        u = i.useMemo(() => {
            var e;
            let t,
                n =
                    ((e = c?.role_subscription?.group_listings),
                    (t = new Set()),
                    e?.forEach((e) => {
                        e.subscription_listings?.forEach((e) => {
                            t.add(e.role_id);
                        });
                    }),
                    t),
                i = c?.role_subscription?.benefit_emojis;
            return i?.filter((e) => e.roles.some((e) => n.has(e)));
        }, [c?.role_subscription]),
        m = c?.guild.icon_hash,
        g = l.Ay.getGuildIconURL({ id: e, icon: m, size: n }),
        h = i.useMemo(() => (null != u && u.length > t ? u.slice(0, t) : u), [u, t]),
        x = null != u && u.length > t ? u.length - t : null,
        _ = d?.slug,
        p = null != _ ? r.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(_) : void 0,
        A = c?.guild?.name,
        E = c?.role_subscription?.subscriber_count,
        f = !a && null != A && null != m && null != g;
    return f
        ? {
              hasAllImperativeDetails: f,
              isLoading: a,
              details: {
                  guildName: A,
                  guildIcon: m,
                  guildAvatarUrl: g,
                  storePageUrl: p,
                  subscriberCount: E,
                  emojisToShow: h,
                  notShownEmojiCount: x,
              },
          }
        : { hasAllImperativeDetails: f, isLoading: a, error: o };
}
