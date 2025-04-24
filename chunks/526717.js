n.d(t, { Z: () => a }), n(388685);
var r = n(192379),
    i = n(768581),
    l = n(776155),
    s = n(981631);
function a(e, t, n) {
    var a, o;
    let { isLoading: c, error: u, highlightedCreatorDetails: d } = (0, l.Z)(e),
        m = null == d ? void 0 : d.store_page,
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
        b = null == d ? void 0 : d.slug,
        j = null != b ? s.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(b) : void 0,
        _ = null == m || null == (a = m.guild) ? void 0 : a.name,
        v = null == m || null == (o = m.role_subscription) ? void 0 : o.subscriber_count,
        O = !c && null != _ && null != p && null != h;
    return O
        ? {
              hasAllImperativeDetails: O,
              isLoading: c,
              details: {
                  guildName: _,
                  guildIcon: p,
                  guildAvatarUrl: h,
                  storePageUrl: j,
                  subscriberCount: v,
                  emojisToShow: f,
                  notShownEmojiCount: x
              }
          }
        : {
              hasAllImperativeDetails: O,
              isLoading: c,
              error: u
          };
}
