"use strict";
n.d(t, { k: () => m });
var i = n(627968),
    s = n(64700),
    l = n(835245),
    r = n(311907),
    a = n(508675),
    o = n(624793),
    d = n(767143),
    c = n(498642),
    u = n(818348);
function m(e) {
    let { guild: t, discoverableGuild: n } = e,
        m = t?.id,
        { memberCount: g, onlineCount: x } = (0, r.cf)(
            [c.A],
            () => ({ memberCount: c.A.getMemberCount(m) ?? 1234, onlineCount: c.A.getOnlineCount(m) ?? 1234 }),
            [m],
        ),
        h = s.useRef((0, l.A)()),
        _ = s.useMemo(() => {
            if (null != n) return o.GO.createFromDiscoverableGuild(n);
            if (null == t) return null;
            let e = a.Ay.getGuildEmoji(t.id);
            return o.GO.createFromDiscoverableGuild({
                ...t,
                premiumSubscriptionCount: t?.premiumSubscriberCount,
                emojis: e,
                emojiCount: e.length,
                presenceCount: x,
                memberCount: g,
            });
        }, [n, t, g, x]),
        A = s.useMemo(() => {
            let e = _?.emojis?.[0];
            return null != e
                ? {
                      name: e.require_colons ? `:${e.name}:` : e.name,
                      emojiId: e.id,
                      animated: e.animated,
                      jumboable: !0,
                  }
                : {};
        }, [_?.emojis]);
    return null != _ && _.isDiscoverable()
        ? (0, i.jsx)(d.sX, {
              sourceType: o.rV.GUILD,
              expressionSourceApplication: null,
              expressionSourceGuild: _,
              node: A,
              closePopout: u.tE,
              nonce: h.current,
              demoMode: !0,
          })
        : null;
}
