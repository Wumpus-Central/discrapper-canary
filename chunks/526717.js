(n.d(t, { Z: () => s }), n(388685));
var r = n(73800),
    i = n(768581),
    l = n(776155),
    a = n(981631);
function s(e, t, n) {
    var s, o;
    let { isLoading: c, error: d, highlightedCreatorDetails: u } = (0, l.Z)(e),
        m = null == u ? void 0 : u.store_page,
        g = r.useMemo(() => {
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
                })(null == m || null == (e = m.role_subscription) ? void 0 : e.group_listings),
                r = null == m || null == (t = m.role_subscription) ? void 0 : t.benefit_emojis;
            return null == r ? void 0 : r.filter((e) => e.roles.some((e) => n.has(e)));
        }, [null == m ? void 0 : m.role_subscription]),
        p = null == m ? void 0 : m.guild.icon_hash,
        h = i.ZP.getGuildIconURL({
            id: e,
            icon: p,
            size: n
        }),
        f = r.useMemo(() => (null != g && g.length > t ? g.slice(0, t) : g), [g, t]),
        x = null != g && g.length > t ? g.length - t : null,
        b = null == u ? void 0 : u.slug,
        j = null != b ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(b) : void 0,
        v = null == m || null == (s = m.guild) ? void 0 : s.name,
        _ = null == m || null == (o = m.role_subscription) ? void 0 : o.subscriber_count,
        O = !c && null != v && null != p && null != h;
    return O
        ? {
              hasAllImperativeDetails: O,
              isLoading: c,
              details: {
                  guildName: v,
                  guildIcon: p,
                  guildAvatarUrl: h,
                  storePageUrl: j,
                  subscriberCount: _,
                  emojisToShow: f,
                  notShownEmojiCount: x
              }
          }
        : {
              hasAllImperativeDetails: O,
              isLoading: c,
              error: d
          };
}
