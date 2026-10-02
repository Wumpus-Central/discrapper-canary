n.d(t, { O: () => d, u: () => u });
var l,
    i = n(624793),
    s = n(975571),
    a = n(652215),
    r = n(375708),
    o = n(732447),
    u = (((l = {}).GET_PREMIUM = "GET_PREMIUM"), (l.JOIN_GUILD = "JOIN_GUILD"), (l.UNAVAILABLE = "UNAVAILABLE"), l);
function d(e) {
    if (e.sourceType === i.rV.PACK)
        return {
            type: "UNAVAILABLE",
            text: null,
            description: null,
            emojiDescription: r.intl.format(o.default["/jdd/7"], {
                helpdeskArticle: s.A.getArticleURL(a.MVz.NITRO_EMOJI_PACKS),
            }),
            analyticsType: "Custom Emoji Popout (Nitro Emoji Pack)",
        };
    let t = (function (e) {
            let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: l,
                hasJoinedEmojiSourceGuild: s,
                isUnusableRoleSubscriptionEmoji: a,
                isDiscoverable: o,
                emojiComesFromCurrentGuild: u,
                userIsRoleSubscriber: d,
                isRoleSubscriptionEmoji: c,
                shouldHideRoleSubscriptionCTA: m,
                onOpenPremiumSettings: x,
            } = e;
            return t === i.rV.APPLICATION && null != n
                ? r.intl.formatToPlainString(r.t.uERlTd, { appName: n.name })
                : l
                  ? s
                      ? c
                          ? m && a
                              ? r.intl.string(r.t.xFb68j)
                              : a
                                ? d
                                    ? r.intl.string(r.t.vLklfF)
                                    : r.intl.string(r.t["g8i/bf"])
                                : r.intl.string(r.t.Eoynp0)
                          : u
                            ? r.intl.string(r.t.hU4kIe)
                            : r.intl.string(r.t.GM0xaX)
                      : o
                        ? r.intl.string(r.t.xE9WGt)
                        : r.intl.string(r.t["0LMpW+"])
                  : s
                    ? m && a
                        ? r.intl.string(r.t.xFb68j)
                        : a
                          ? d
                              ? r.intl.string(r.t.vLklfF)
                              : r.intl.string(r.t["g8i/bf"])
                          : u
                            ? r.intl.string(r.t.ICPhqa)
                            : r.intl.string(r.t.jQy3aM)
                    : o
                      ? r.intl.string(r.t.FJ6Z01)
                      : r.intl.format(r.t.U6vLcA, { openPremiumSettings: x });
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
                s = !n && i;
            return t && s
                ? { type: "JOIN_GUILD", text: r.intl.string(r.t.riu2R5), description: null }
                : !t && ((n && !l) || s)
                  ? { type: "GET_PREMIUM", text: r.intl.string(r.t["gl/XHJ"]), description: null }
                  : { type: "UNAVAILABLE", text: null, description: null };
        })(e),
        emojiDescription: t,
        analyticsType: n,
    };
}
