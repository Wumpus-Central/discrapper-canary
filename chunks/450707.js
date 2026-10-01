n.d(t, { O: () => r, u: () => a });
var l,
    i = n(624793),
    s = n(375708),
    a = (((l = {}).GET_PREMIUM = "GET_PREMIUM"), (l.JOIN_GUILD = "JOIN_GUILD"), (l.UNAVAILABLE = "UNAVAILABLE"), l);
function r(e) {
    let t = (function (e) {
            let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: l,
                hasJoinedEmojiSourceGuild: a,
                isUnusableRoleSubscriptionEmoji: r,
                isDiscoverable: o,
                emojiComesFromCurrentGuild: u,
                userIsRoleSubscriber: d,
                isRoleSubscriptionEmoji: c,
                shouldHideRoleSubscriptionCTA: m,
                onOpenPremiumSettings: x,
            } = e;
            return t === i.rV.APPLICATION && null != n
                ? s.intl.formatToPlainString(s.t.uERlTd, { appName: n.name })
                : l
                  ? a
                      ? c
                          ? m && r
                              ? s.intl.string(s.t.xFb68j)
                              : r
                                ? d
                                    ? s.intl.string(s.t.vLklfF)
                                    : s.intl.string(s.t["g8i/bf"])
                                : s.intl.string(s.t.Eoynp0)
                          : u
                            ? s.intl.string(s.t.hU4kIe)
                            : s.intl.string(s.t.GM0xaX)
                      : o
                        ? s.intl.string(s.t.xE9WGt)
                        : s.intl.string(s.t["0LMpW+"])
                  : a
                    ? m && r
                        ? s.intl.string(s.t.xFb68j)
                        : r
                          ? d
                              ? s.intl.string(s.t.vLklfF)
                              : s.intl.string(s.t["g8i/bf"])
                          : u
                            ? s.intl.string(s.t.ICPhqa)
                            : s.intl.string(s.t.jQy3aM)
                    : o
                      ? s.intl.string(s.t.FJ6Z01)
                      : s.intl.format(s.t.U6vLcA, { openPremiumSettings: x });
        })(e),
        n = (function (e) {
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
        ...(function (e) {
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
}
