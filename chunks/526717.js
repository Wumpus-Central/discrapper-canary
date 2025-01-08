n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(768581),
    l = n(776155),
    a = n(981631);
function s(e, t, n) {
    var s, o;
    let { isLoading: c, error: d, highlightedCreatorDetails: u } = (0, l.Z)(e),
        m = null == u ? void 0 : u.store_page,
        h = i.useMemo(() => {
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
                i = null == m ? void 0 : null === (t = m.role_subscription) || void 0 === t ? void 0 : t.benefit_emojis;
            return null == i ? void 0 : i.filter((e) => e.roles.some((e) => n.has(e)));
        }, [null == m ? void 0 : m.role_subscription]),
        g = null == m ? void 0 : m.guild.icon_hash,
        x = r.ZP.getGuildIconURL({
            id: e,
            icon: g,
            size: n
        }),
        p = i.useMemo(() => (null != h && h.length > t ? h.slice(0, t) : h), [h, t]),
        f = null != h && h.length > t ? h.length - t : null,
        C = null == u ? void 0 : u.slug,
        v = null != C ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(C) : void 0,
        _ = null == m ? void 0 : null === (s = m.guild) || void 0 === s ? void 0 : s.name,
        N = null == m ? void 0 : null === (o = m.role_subscription) || void 0 === o ? void 0 : o.subscriber_count,
        I = !c && null != _ && null != g && null != x;
    return I
        ? {
              hasAllImperativeDetails: I,
              isLoading: c,
              details: {
                  guildName: _,
                  guildIcon: g,
                  guildAvatarUrl: x,
                  storePageUrl: v,
                  subscriberCount: N,
                  emojisToShow: p,
                  notShownEmojiCount: f
              }
          }
        : {
              hasAllImperativeDetails: I,
              isLoading: c,
              error: d
          };
}
