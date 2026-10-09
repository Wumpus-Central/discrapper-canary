n.d(t, { O: () => c, u: () => u });
var l,
    s = n(624793),
    i = n(975571),
    a = n(652215),
    r = n(660183),
    o = n(732447),
    u = (((l = {}).GET_PREMIUM = "GET_PREMIUM"), (l.JOIN_GUILD = "JOIN_GUILD"), (l.UNAVAILABLE = "UNAVAILABLE"), l);
function c(e) {
    if (e.sourceType === s.rV.PACK)
        return {
            type: "UNAVAILABLE",
            text: null,
            description: null,
            emojiDescription: r.intl.format(o.default["/jdd/7"], {
                helpdeskArticle: i.A.getArticleURL(a.MVz.NITRO_EMOJI_PACKS),
            }),
            analyticsType: "Custom Emoji Popout (Nitro Emoji Pack)",
        };
    let t = (function (e) {
            let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: l,
                hasJoinedEmojiSourceGuild: i,
                isUnusableRoleSubscriptionEmoji: a,
                isDiscoverable: o,
                emojiComesFromCurrentGuild: u,
                userIsRoleSubscriber: c,
                isRoleSubscriptionEmoji: d,
                shouldHideRoleSubscriptionCTA: m,
                onOpenPremiumSettings: x,
            } = e;
            return t === s.rV.APPLICATION && null != n
                ? r.intl.formatToPlainString(r.t.uERlTd, { appName: n.name })
                : l
                  ? i
                      ? d
                          ? m && a
                              ? r.intl.string(r.t.xFb68j)
                              : a
                                ? c
                                    ? r.intl.string(r.t.vLklfF)
                                    : r.intl.string(r.t["g8i/bf"])
                                : r.intl.string(r.t.Eoynp0)
                          : u
                            ? r.intl.string(r.t.hU4kIe)
                            : r.intl.string(r.t.GM0xaX)
                      : o
                        ? r.intl.string(r.t.xE9WGt)
                        : r.intl.string(r.t["0LMpW+"])
                  : i
                    ? m && a
                        ? r.intl.string(r.t.xFb68j)
                        : a
                          ? c
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
                    emojiComesFromCurrentGuild: s,
                    isDiscoverable: i,
                } = e,
                a = "Custom Emoji Popout";
            return (
                t && !n && i
                    ? (a = "Custom Emoji Popout (Cross-Server)")
                    : t || !n || l
                      ? t ||
                        n ||
                        (a = i
                            ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                            : "Custom Emoji Popout (Soft Upsell)")
                      : (a = s
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
                    isDiscoverable: s,
                } = e,
                i = !n && s;
            return t && i
                ? { type: "JOIN_GUILD", text: r.intl.string(r.t.riu2R5), description: null }
                : !t && ((n && !l) || i)
                  ? { type: "GET_PREMIUM", text: r.intl.string(r.t["gl/XHJ"]), description: null }
                  : { type: "UNAVAILABLE", text: null, description: null };
        })(e),
        emojiDescription: t,
        analyticsType: n,
    };
}
