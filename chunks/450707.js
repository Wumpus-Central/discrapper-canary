"use strict";
n.d(t, { O: () => a, u: () => r });
var i,
    l = n(624793),
    s = n(985018),
    r = (((i = {}).GET_PREMIUM = "GET_PREMIUM"), (i.JOIN_GUILD = "JOIN_GUILD"), (i.UNAVAILABLE = "UNAVAILABLE"), i);
let a = (e) => {
    let t = ((e) => {
            let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: i,
                hasJoinedEmojiSourceGuild: r,
                isUnusableRoleSubscriptionEmoji: a,
                isDiscoverable: o,
                emojiComesFromCurrentGuild: c,
                userIsRoleSubscriber: u,
                isRoleSubscriptionEmoji: d,
                shouldHideRoleSubscriptionCTA: h,
                onOpenPremiumSettings: m,
            } = e;
            return t === l.rV.APPLICATION && null != n
                ? s.intl.formatToPlainString(s.t.uERlTd, { appName: n.name })
                : i
                  ? r
                      ? d
                          ? h && a
                              ? s.intl.string(s.t.xFb68j)
                              : a
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
                  : r
                    ? h && a
                        ? s.intl.string(s.t.xFb68j)
                        : a
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
                    isUnusableRoleSubscriptionEmoji: i,
                    emojiComesFromCurrentGuild: l,
                    isDiscoverable: s,
                } = e,
                r = "Custom Emoji Popout";
            return (
                t && !n && s
                    ? (r = "Custom Emoji Popout (Cross-Server)")
                    : t || !n || i
                      ? t ||
                        n ||
                        (r = s
                            ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                            : "Custom Emoji Popout (Soft Upsell)")
                      : (r = l
                            ? "Custom Emoji Popout (Upsell Joined Current-Server)"
                            : "Custom Emoji Popout (Upsell Joined Cross-Server)"),
                r
            );
        })(e);
    return {
        ...((e) => {
            let {
                    isPremium: t,
                    hasJoinedEmojiSourceGuild: n,
                    isUnusableRoleSubscriptionEmoji: i,
                    isDiscoverable: l,
                } = e,
                r = !n && l;
            return t && r
                ? { type: "JOIN_GUILD", text: s.intl.string(s.t.riu2R5), description: null }
                : !t && ((n && !i) || r)
                  ? { type: "GET_PREMIUM", text: s.intl.string(s.t["gl/XHJ"]), description: null }
                  : { type: "UNAVAILABLE", text: null, description: null };
        })(e),
        emojiDescription: t,
        analyticsType: n,
    };
};
