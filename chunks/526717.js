n.d(t, { Z: () => a }), n(388685);
var r = n(647438),
    i = n(768581),
    l = n(776155),
    s = n(981631);
function a(e, t, n) {
    var a, o;
    let { isLoading: c, error: d, highlightedCreatorDetails: u } = (0, l.Z)(e),
        g = null == u ? void 0 : u.store_page,
        m = r.useMemo(() => {
            var e, t;
            let n = (function (e) {
                    let t = new Set();
                    return (
                        null == e ||
                            e.forEach((e) => {
                                var n;
                                null == (n = e.subscription_listings) ||
                                    n.forEach((e) => {
                                        t.add(e.role_id);
                                    });
                            }),
                        t
                    );
                })(null == g || null == (e = g.role_subscription) ? void 0 : e.group_listings),
                r = null == g || null == (t = g.role_subscription) ? void 0 : t.benefit_emojis;
            return null == r ? void 0 : r.filter((e) => e.roles.some((e) => n.has(e)));
        }, [null == g ? void 0 : g.role_subscription]),
        p = null == g ? void 0 : g.guild.icon_hash,
        f = i.ZP.getGuildIconURL({
            id: e,
            icon: p,
            size: n,
        }),
        h = r.useMemo(() => (null != m && m.length > t ? m.slice(0, t) : m), [m, t]),
        x = null != m && m.length > t ? m.length - t : null,
        b = null == u ? void 0 : u.slug,
        j = null != b ? s.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(b) : void 0,
        _ = null == g || null == (a = g.guild) ? void 0 : a.name,
        v = null == g || null == (o = g.role_subscription) ? void 0 : o.subscriber_count,
        C = !c && null != _ && null != p && null != f;
    return C
        ? {
              hasAllImperativeDetails: C,
              isLoading: c,
              details: {
                  guildName: _,
                  guildIcon: p,
                  guildAvatarUrl: f,
                  storePageUrl: j,
                  subscriberCount: v,
                  emojisToShow: h,
                  notShownEmojiCount: x,
              },
          }
        : {
              hasAllImperativeDetails: C,
              isLoading: c,
              error: d,
          };
}
