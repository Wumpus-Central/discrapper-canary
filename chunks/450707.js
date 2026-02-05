"use strict";
n.d(t, { O: () => u, u: () => a });
var r = n(624793),
    i = n(985018),
    a = (function (e) {
        return (e.GET_PREMIUM = "GET_PREMIUM"), (e.JOIN_GUILD = "JOIN_GUILD"), (e.UNAVAILABLE = "UNAVAILABLE"), e;
    })({});
let s = (e) => {
        let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: r,
                emojiComesFromCurrentGuild: i,
                isDiscoverable: a,
            } = e,
            s = "Custom Emoji Popout";
        return (
            t && !n && a
                ? (s = "Custom Emoji Popout (Cross-Server)")
                : t || !n || r
                  ? t ||
                    n ||
                    (s = a
                        ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                        : "Custom Emoji Popout (Soft Upsell)")
                  : (s = i
                        ? "Custom Emoji Popout (Upsell Joined Current-Server)"
                        : "Custom Emoji Popout (Upsell Joined Cross-Server)"),
            s
        );
    },
    o = (e) => {
        let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: a,
                hasJoinedEmojiSourceGuild: s,
                isUnusableRoleSubscriptionEmoji: o,
                isDiscoverable: l,
                emojiComesFromCurrentGuild: u,
                userIsRoleSubscriber: c,
                isRoleSubscriptionEmoji: d,
                shouldHideRoleSubscriptionCTA: _,
                onOpenPremiumSettings: f,
            } = e,
            p = null;
        return t === r.rV.APPLICATION && null != n
            ? i.intl.formatToPlainString(i.t.uERlTd, { appName: n.name })
            : a
              ? s
                  ? d
                      ? _ && o
                          ? i.intl.string(i.t.xFb68j)
                          : o
                            ? c
                                ? i.intl.string(i.t.vLklfF)
                                : i.intl.string(i.t["g8i/bf"])
                            : i.intl.string(i.t.Eoynp0)
                      : u
                        ? i.intl.string(i.t.hU4kIe)
                        : i.intl.string(i.t.GM0xaX)
                  : l
                    ? i.intl.string(i.t.xE9WGt)
                    : i.intl.string(i.t["0LMpW+"])
              : s
                ? _ && o
                    ? i.intl.string(i.t.xFb68j)
                    : o
                      ? c
                          ? i.intl.string(i.t.vLklfF)
                          : i.intl.string(i.t["g8i/bf"])
                      : u
                        ? i.intl.string(i.t.ICPhqa)
                        : i.intl.string(i.t.jQy3aM)
                : l
                  ? i.intl.string(i.t.FJ6Z01)
                  : i.intl.format(i.t.U6vLcA, { openPremiumSettings: f });
    },
    l = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: r, isDiscoverable: a } = e,
            s = n && !r,
            o = !n && a,
            l = !t && (s || o);
        return t && o
            ? { type: "JOIN_GUILD", text: i.intl.string(i.t.riu2R5), description: null }
            : l
              ? { type: "GET_PREMIUM", text: i.intl.string(i.t["gl/XHJ"]), description: null }
              : { type: "UNAVAILABLE", text: null, description: null };
    },
    u = (e) => {
        let t = o(e),
            n = s(e);
        return { ...l(e), emojiDescription: t, analyticsType: n };
    };
