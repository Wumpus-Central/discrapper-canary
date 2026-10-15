n.d(t, { O: () => d, u: () => c });
var i,
    s = n(624793),
    l = n(975571),
    r = n(652215),
    a = n(105292),
    o = n(732447),
    c = (((i = {}).GET_PREMIUM = "GET_PREMIUM"), (i.JOIN_GUILD = "JOIN_GUILD"), (i.UNAVAILABLE = "UNAVAILABLE"), i);
function d(e) {
    if (e.sourceType === s.rV.PACK)
        return {
            type: "UNAVAILABLE",
            text: null,
            description: null,
            emojiDescription: a.intl.format(o.default["/jdd/7"], {
                helpdeskArticle: l.A.getArticleURL(r.MVz.NITRO_EMOJI_PACKS),
            }),
            analyticsType: "Custom Emoji Popout (Nitro Emoji Pack)",
        };
    let t = (function (e) {
            let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: i,
                hasJoinedEmojiSourceGuild: l,
                isUnusableRoleSubscriptionEmoji: r,
                isDiscoverable: o,
                emojiComesFromCurrentGuild: c,
                userIsRoleSubscriber: d,
                isRoleSubscriptionEmoji: u,
                shouldHideRoleSubscriptionCTA: m,
                onOpenPremiumSettings: x,
            } = e;
            return t === s.rV.APPLICATION && null != n
                ? a.intl.formatToPlainString(a.t.uERlTd, { appName: n.name })
                : i
                  ? l
                      ? u
                          ? m && r
                              ? a.intl.string(a.t.xFb68j)
                              : r
                                ? d
                                    ? a.intl.string(a.t.vLklfF)
                                    : a.intl.string(a.t["g8i/bf"])
                                : a.intl.string(a.t.Eoynp0)
                          : c
                            ? a.intl.string(a.t.hU4kIe)
                            : a.intl.string(a.t.GM0xaX)
                      : o
                        ? a.intl.string(a.t.xE9WGt)
                        : a.intl.string(a.t["0LMpW+"])
                  : l
                    ? m && r
                        ? a.intl.string(a.t.xFb68j)
                        : r
                          ? d
                              ? a.intl.string(a.t.vLklfF)
                              : a.intl.string(a.t["g8i/bf"])
                          : c
                            ? a.intl.string(a.t.ICPhqa)
                            : a.intl.string(a.t.jQy3aM)
                    : o
                      ? a.intl.string(a.t.FJ6Z01)
                      : a.intl.format(a.t.U6vLcA, { openPremiumSettings: x });
        })(e),
        n = (function (e) {
            let {
                    isPremium: t,
                    hasJoinedEmojiSourceGuild: n,
                    isUnusableRoleSubscriptionEmoji: i,
                    emojiComesFromCurrentGuild: s,
                    isDiscoverable: l,
                } = e,
                r = "Custom Emoji Popout";
            return (
                t && !n && l
                    ? (r = "Custom Emoji Popout (Cross-Server)")
                    : t || !n || i
                      ? t ||
                        n ||
                        (r = l
                            ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                            : "Custom Emoji Popout (Soft Upsell)")
                      : (r = s
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
                    isUnusableRoleSubscriptionEmoji: i,
                    isDiscoverable: s,
                } = e,
                l = !n && s;
            return t && l
                ? { type: "JOIN_GUILD", text: a.intl.string(a.t.riu2R5), description: null }
                : !t && ((n && !i) || l)
                  ? { type: "GET_PREMIUM", text: a.intl.string(a.t["gl/XHJ"]), description: null }
                  : { type: "UNAVAILABLE", text: null, description: null };
        })(e),
        emojiDescription: t,
        analyticsType: n,
    };
}
