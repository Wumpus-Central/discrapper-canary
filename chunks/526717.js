n.d(t, { Z: () => s }), n(388685);
var r = n(473749),
    i = n(768581),
    l = n(776155),
    a = n(981631);
function s(e, t, n) {
    var s, o;
    let { isLoading: c, error: d, highlightedCreatorDetails: u } = (0, l.Z)(e),
        g = null == u ? void 0 : u.store_page,
        f = r.useMemo(() => {
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
        m = null == g ? void 0 : g.guild.icon_hash,
        b = i.ZP.getGuildIconURL({
            id: e,
            icon: m,
            size: n,
        }),
        p = r.useMemo(() => (null != f && f.length > t ? f.slice(0, t) : f), [f, t]),
        h = null != f && f.length > t ? f.length - t : null,
        x = null == u ? void 0 : u.slug,
        j = null != x ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(x) : void 0,
        v = null == g || null == (s = g.guild) ? void 0 : s.name,
        O = null == g || null == (o = g.role_subscription) ? void 0 : o.subscriber_count,
        C = !c && null != v && null != m && null != b;
    return C
        ? {
              hasAllImperativeDetails: C,
              isLoading: c,
              details: {
                  guildName: v,
                  guildIcon: m,
                  guildAvatarUrl: b,
                  storePageUrl: j,
                  subscriberCount: O,
                  emojisToShow: p,
                  notShownEmojiCount: h,
              },
          }
        : {
              hasAllImperativeDetails: C,
              isLoading: c,
              error: d,
          };
}
