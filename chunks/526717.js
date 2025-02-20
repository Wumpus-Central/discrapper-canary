n.d(t, { Z: () => l }), n(47120);
var r = n(192379),
    i = n(768581),
    s = n(776155),
    a = n(981631);
function l(e, t, n) {
    var l, o;
    let { isLoading: c, error: d, highlightedCreatorDetails: u } = (0, s.Z)(e),
        m = null == u ? void 0 : u.store_page,
        p = r.useMemo(() => {
            var e, t;
            let n = (function (e) {
                    let t = new Set();
                    return (
                        null == e ||
                            e.forEach((e) => {
                                var n;
                                null === (n = e.subscription_listings) ||
                                    void 0 === n ||
                                    n.forEach((e) => {
                                        t.add(e.role_id);
                                    });
                            }),
                        t
                    );
                })(null == m ? void 0 : null === (e = m.role_subscription) || void 0 === e ? void 0 : e.group_listings),
                r = null == m ? void 0 : null === (t = m.role_subscription) || void 0 === t ? void 0 : t.benefit_emojis;
            return null == r ? void 0 : r.filter((e) => e.roles.some((e) => n.has(e)));
        }, [null == m ? void 0 : m.role_subscription]),
        g = null == m ? void 0 : m.guild.icon_hash,
        h = i.ZP.getGuildIconURL({
            id: e,
            icon: g,
            size: n
        }),
        f = r.useMemo(() => (null != p && p.length > t ? p.slice(0, t) : p), [p, t]),
        b = null != p && p.length > t ? p.length - t : null,
        x = null == u ? void 0 : u.slug,
        j = null != x ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(x) : void 0,
        N = null == m ? void 0 : null === (l = m.guild) || void 0 === l ? void 0 : l.name,
        v = null == m ? void 0 : null === (o = m.role_subscription) || void 0 === o ? void 0 : o.subscriber_count,
        _ = !c && null != N && null != g && null != h;
    return _
        ? {
              hasAllImperativeDetails: _,
              isLoading: c,
              details: {
                  guildName: N,
                  guildIcon: g,
                  guildAvatarUrl: h,
                  storePageUrl: j,
                  subscriberCount: v,
                  emojisToShow: f,
                  notShownEmojiCount: b
              }
          }
        : {
              hasAllImperativeDetails: _,
              isLoading: c,
              error: d
          };
}
