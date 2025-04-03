n.d(t, { Z: () => l }), n(47120);
var r = n(192379),
    i = n(768581),
    s = n(776155),
    a = n(981631);
function l(e, t, n) {
    var l, o;
    let { isLoading: c, error: d, highlightedCreatorDetails: u } = (0, s.Z)(e),
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
        b = null != g && g.length > t ? g.length - t : null,
        x = null == u ? void 0 : u.slug,
        j = null != x ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(x) : void 0,
        N = null == m || null == (l = m.guild) ? void 0 : l.name,
        _ = null == m || null == (o = m.role_subscription) ? void 0 : o.subscriber_count,
        v = !c && null != N && null != p && null != h;
    return v
        ? {
              hasAllImperativeDetails: v,
              isLoading: c,
              details: {
                  guildName: N,
                  guildIcon: p,
                  guildAvatarUrl: h,
                  storePageUrl: j,
                  subscriberCount: _,
                  emojisToShow: f,
                  notShownEmojiCount: b
              }
          }
        : {
              hasAllImperativeDetails: v,
              isLoading: c,
              error: d
          };
}
