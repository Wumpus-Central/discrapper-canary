"use strict";
n.d(t, { O: () => a, u: () => r });
var l,
    i = n(624793),
    s = n(375708),
    r = (((l = {}).GET_PREMIUM = "GET_PREMIUM"), (l.JOIN_GUILD = "JOIN_GUILD"), (l.UNAVAILABLE = "UNAVAILABLE"), l);
function a(e) {
    let t = (function (e) {
            let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: l,
                hasJoinedEmojiSourceGuild: r,
                isUnusableRoleSubscriptionEmoji: a,
                isDiscoverable: o,
                emojiComesFromCurrentGuild: u,
                userIsRoleSubscriber: c,
                isRoleSubscriptionEmoji: d,
                shouldHideRoleSubscriptionCTA: h,
                onOpenPremiumSettings: m,
            } = e;
            return t === i.rV.APPLICATION && null != n
                ? s.intl.formatToPlainString(s.t.uERlTd, { appName: n.name })
                : l
                  ? r
                      ? d
                          ? h && a
                              ? s.intl.string(s.t.xFb68j)
                              : a
                                ? c
                                    ? s.intl.string(s.t.vLklfF)
                                    : s.intl.string(s.t["g8i/bf"])
                                : s.intl.string(s.t.Eoynp0)
                          : u
                            ? s.intl.string(s.t.hU4kIe)
                            : s.intl.string(s.t.GM0xaX)
                      : o
                        ? s.intl.string(s.t.xE9WGt)
                        : s.intl.string(s.t["0LMpW+"])
                  : r
                    ? h && a
                        ? s.intl.string(s.t.xFb68j)
                        : a
                          ? c
                              ? s.intl.string(s.t.vLklfF)
                              : s.intl.string(s.t["g8i/bf"])
                          : u
                            ? s.intl.string(s.t.ICPhqa)
                            : s.intl.string(s.t.jQy3aM)
                    : o
                      ? s.intl.string(s.t.FJ6Z01)
                      : s.intl.format(s.t.U6vLcA, { openPremiumSettings: m });
        })(e),
        n = (function (e) {
            let {
                    isPremium: t,
                    hasJoinedEmojiSourceGuild: n,
                    isUnusableRoleSubscriptionEmoji: l,
                    emojiComesFromCurrentGuild: i,
                    isDiscoverable: s,
                } = e,
                r = "Custom Emoji Popout";
            return (
                t && !n && s
                    ? (r = "Custom Emoji Popout (Cross-Server)")
                    : t || !n || l
                      ? t ||
                        n ||
                        (r = s
                            ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                            : "Custom Emoji Popout (Soft Upsell)")
                      : (r = i
                            ? "Custom Emoji Popout (Upsell Joined Current-Server)"
                            : "Custom Emoji Popout (Upsell Joined Cross-Server)"),
                r
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
                r = !n && i;
            return t && r
                ? { type: "JOIN_GUILD", text: s.intl.string(s.t.riu2R5), description: null }
                : !t && ((n && !l) || r)
                  ? { type: "GET_PREMIUM", text: s.intl.string(s.t["gl/XHJ"]), description: null }
                  : { type: "UNAVAILABLE", text: null, description: null };
        })(e),
        emojiDescription: t,
        analyticsType: n,
    };
}
