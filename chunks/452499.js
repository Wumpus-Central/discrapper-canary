"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    s = n(486020),
    l = n(791275),
    r = n(652215);
function a(e, t, n) {
    let { isLoading: a, error: o, highlightedCreatorDetails: d } = (0, l.A)(e),
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
        g = s.Ay.getGuildIconURL({ id: e, icon: m, size: n }),
        x = i.useMemo(() => (null != u && u.length > t ? u.slice(0, t) : u), [u, t]),
        h = null != u && u.length > t ? u.length - t : null,
        _ = d?.slug,
        A = null != _ ? r.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(_) : void 0,
        p = c?.guild?.name,
        f = c?.role_subscription?.subscriber_count,
        j = !a && null != p && null != m && null != g;
    return j
        ? {
              hasAllImperativeDetails: j,
              isLoading: a,
              details: {
                  guildName: p,
                  guildIcon: m,
                  guildAvatarUrl: g,
                  storePageUrl: A,
                  subscriberCount: f,
                  emojisToShow: x,
                  notShownEmojiCount: h,
              },
          }
        : { hasAllImperativeDetails: j, isLoading: a, error: o };
}
