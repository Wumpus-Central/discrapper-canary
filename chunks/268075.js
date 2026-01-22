n.d(t, { k: () => f });
var r = n(627968),
    i = n(64700),
    l = n(835245),
    s = n(311907),
    a = n(508675),
    c = n(624793),
    o = n(767143),
    d = n(498642),
    u = n(818348);
function f(e) {
    let { guild: t, discoverableGuild: n } = e,
        f = null == t ? void 0 : t.id,
        { memberCount: g, onlineCount: b } = (0, s.cf)([d.A], () => {
            var e, t;
            return {
                memberCount: null != (e = d.A.getMemberCount(f)) ? e : 1234,
                onlineCount: null != (t = d.A.getOnlineCount(f)) ? t : 1234,
            };
        }, [f]),
        m = i.useRef((0, l.A)()),
        p = i.useMemo(() => {
            var e, r;
            if (null != n) return c.GO.createFromDiscoverableGuild(n);
            if (null == t) return null;
            let i = a.Ay.getGuildEmoji(t.id);
            return c.GO.createFromDiscoverableGuild(
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, t)),
                (r = r =
                    {
                        premiumSubscriptionCount: null == t ? void 0 : t.premiumSubscriberCount,
                        emojis: i,
                        emojiCount: i.length,
                        presenceCount: b,
                        memberCount: g,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      }),
                e),
            );
        }, [n, t, g, b]),
        x = i.useMemo(() => {
            var e;
            let t = null == p || null == (e = p.emojis) ? void 0 : e[0];
            return null != t
                ? {
                      name: t.require_colons ? ":".concat(t.name, ":") : t.name,
                      emojiId: t.id,
                      animated: t.animated,
                      jumboable: !0,
                  }
                : {};
        }, [null == p ? void 0 : p.emojis]);
    return null != p && p.isDiscoverable()
        ? (0, r.jsx)(o.sX, {
              sourceType: c.rV.GUILD,
              expressionSourceApplication: null,
              expressionSourceGuild: p,
              node: x,
              closePopout: u.tE,
              nonce: m.current,
              demoMode: !0,
          })
        : null;
}
