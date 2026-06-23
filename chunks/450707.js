"use strict";
n.d(t, { O: () => o, u: () => a });
var i,
    r = n(624793),
    s = n(375708),
    a = (((i = {}).GET_PREMIUM = "GET_PREMIUM"), (i.JOIN_GUILD = "JOIN_GUILD"), (i.UNAVAILABLE = "UNAVAILABLE"), i);
function o(e) {
    let t = (function (e) {
            let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: i,
                hasJoinedEmojiSourceGuild: a,
                isUnusableRoleSubscriptionEmoji: o,
                isDiscoverable: l,
                emojiComesFromCurrentGuild: u,
                userIsRoleSubscriber: c,
                isRoleSubscriptionEmoji: d,
                shouldHideRoleSubscriptionCTA: _,
                onOpenPremiumSettings: h,
            } = e;
            return t === r.rV.APPLICATION && null != n
                ? s.intl.formatToPlainString(s.t.uERlTd, { appName: n.name })
                : i
                  ? a
                      ? d
                          ? _ && o
                              ? s.intl.string(s.t.xFb68j)
                              : o
                                ? c
                                    ? s.intl.string(s.t.vLklfF)
                                    : s.intl.string(s.t["g8i/bf"])
                                : s.intl.string(s.t.Eoynp0)
                          : u
                            ? s.intl.string(s.t.hU4kIe)
                            : s.intl.string(s.t.GM0xaX)
                      : l
                        ? s.intl.string(s.t.xE9WGt)
                        : s.intl.string(s.t["0LMpW+"])
                  : a
                    ? _ && o
                        ? s.intl.string(s.t.xFb68j)
                        : o
                          ? c
                              ? s.intl.string(s.t.vLklfF)
                              : s.intl.string(s.t["g8i/bf"])
                          : u
                            ? s.intl.string(s.t.ICPhqa)
                            : s.intl.string(s.t.jQy3aM)
                    : l
                      ? s.intl.string(s.t.FJ6Z01)
                      : s.intl.format(s.t.U6vLcA, { openPremiumSettings: h });
        })(e),
        n = (function (e) {
            let {
                    isPremium: t,
                    hasJoinedEmojiSourceGuild: n,
                    isUnusableRoleSubscriptionEmoji: i,
                    emojiComesFromCurrentGuild: r,
                    isDiscoverable: s,
                } = e,
                a = "Custom Emoji Popout";
            return (
                t && !n && s
                    ? (a = "Custom Emoji Popout (Cross-Server)")
                    : t || !n || i
                      ? t ||
                        n ||
                        (a = s
                            ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                            : "Custom Emoji Popout (Soft Upsell)")
                      : (a = r
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
                    isUnusableRoleSubscriptionEmoji: i,
                    isDiscoverable: r,
                } = e,
                a = !n && r;
            return t && a
                ? { type: "JOIN_GUILD", text: s.intl.string(s.t.riu2R5), description: null }
                : !t && ((n && !i) || a)
                  ? { type: "GET_PREMIUM", text: s.intl.string(s.t["gl/XHJ"]), description: null }
                  : { type: "UNAVAILABLE", text: null, description: null };
        })(e),
        emojiDescription: t,
        analyticsType: n,
    };
}
