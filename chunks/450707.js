"use strict";
n.d(t, { O: () => r, u: () => a });
var l,
    i = n(624793),
    s = n(985018),
    a = (((l = {}).GET_PREMIUM = "GET_PREMIUM"), (l.JOIN_GUILD = "JOIN_GUILD"), (l.UNAVAILABLE = "UNAVAILABLE"), l);
let r = (e) => {
    let t = ((e) => {
            let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: l,
                hasJoinedEmojiSourceGuild: a,
                isUnusableRoleSubscriptionEmoji: r,
                isDiscoverable: o,
                emojiComesFromCurrentGuild: c,
                userIsRoleSubscriber: u,
                isRoleSubscriptionEmoji: d,
                shouldHideRoleSubscriptionCTA: h,
                onOpenPremiumSettings: m,
            } = e;
            return t === i.rV.APPLICATION && null != n
                ? s.intl.formatToPlainString(s.t.uERlTd, { appName: n.name })
                : l
                  ? a
                      ? d
                          ? h && r
                              ? s.intl.string(s.t.xFb68j)
                              : r
                                ? u
                                    ? s.intl.string(s.t.vLklfF)
                                    : s.intl.string(s.t["g8i/bf"])
                                : s.intl.string(s.t.Eoynp0)
                          : c
                            ? s.intl.string(s.t.hU4kIe)
                            : s.intl.string(s.t.GM0xaX)
                      : o
                        ? s.intl.string(s.t.xE9WGt)
                        : s.intl.string(s.t["0LMpW+"])
                  : a
                    ? h && r
                        ? s.intl.string(s.t.xFb68j)
                        : r
                          ? u
                              ? s.intl.string(s.t.vLklfF)
                              : s.intl.string(s.t["g8i/bf"])
                          : c
                            ? s.intl.string(s.t.ICPhqa)
                            : s.intl.string(s.t.jQy3aM)
                    : o
                      ? s.intl.string(s.t.FJ6Z01)
                      : s.intl.format(s.t.U6vLcA, { openPremiumSettings: m });
        })(e),
        n = ((e) => {
            let {
                    isPremium: t,
                    hasJoinedEmojiSourceGuild: n,
                    isUnusableRoleSubscriptionEmoji: l,
                    emojiComesFromCurrentGuild: i,
                    isDiscoverable: s,
                } = e,
                a = "Custom Emoji Popout";
            return (
                t && !n && s
                    ? (a = "Custom Emoji Popout (Cross-Server)")
                    : t || !n || l
                      ? t ||
                        n ||
                        (a = s
                            ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                            : "Custom Emoji Popout (Soft Upsell)")
                      : (a = i
                            ? "Custom Emoji Popout (Upsell Joined Current-Server)"
                            : "Custom Emoji Popout (Upsell Joined Cross-Server)"),
                a
            );
        })(e);
    return {
        ...((e) => {
            let {
                    isPremium: t,
                    hasJoinedEmojiSourceGuild: n,
                    isUnusableRoleSubscriptionEmoji: l,
                    isDiscoverable: i,
                } = e,
                a = !n && i;
            return t && a
                ? { type: "JOIN_GUILD", text: s.intl.string(s.t.riu2R5), description: null }
                : !t && ((n && !l) || a)
                  ? { type: "GET_PREMIUM", text: s.intl.string(s.t["gl/XHJ"]), description: null }
                  : { type: "UNAVAILABLE", text: null, description: null };
        })(e),
        emojiDescription: t,
        analyticsType: n,
    };
};
