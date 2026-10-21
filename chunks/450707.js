n.d(t, { O: () => d, u: () => c });
var i,
    s = n(624793),
    l = n(975571),
    a = n(652215),
    r = n(105292),
    o = n(732447),
    c = (((i = {}).GET_PREMIUM = "GET_PREMIUM"), (i.JOIN_GUILD = "JOIN_GUILD"), (i.UNAVAILABLE = "UNAVAILABLE"), i);
function d(e) {
    if (e.sourceType === s.rV.PACK)
        return {
            type: "UNAVAILABLE",
            text: null,
            description: null,
            emojiDescription: r.intl.format(o.default["/jdd/7"], {
                helpdeskArticle: l.A.getArticleURL(a.MVz.NITRO_EMOJI_PACKS),
            }),
            analyticsType: "Custom Emoji Popout (Nitro Emoji Pack)",
        };
    let t = (function (e) {
            let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: i,
                hasJoinedEmojiSourceGuild: l,
                isUnusableRoleSubscriptionEmoji: a,
                isDiscoverable: o,
                emojiComesFromCurrentGuild: c,
                userIsRoleSubscriber: d,
                isRoleSubscriptionEmoji: u,
                shouldHideRoleSubscriptionCTA: m,
                onOpenPremiumSettings: x,
            } = e;
            return t === s.rV.APPLICATION && null != n
                ? r.intl.formatToPlainString(r.t.uERlTd, { appName: n.name })
                : i
                  ? l
                      ? u
                          ? m && a
                              ? r.intl.string(r.t.xFb68j)
                              : a
                                ? d
                                    ? r.intl.string(r.t.vLklfF)
                                    : r.intl.string(r.t["g8i/bf"])
                                : r.intl.string(r.t.Eoynp0)
                          : c
                            ? r.intl.string(r.t.hU4kIe)
                            : r.intl.string(r.t.GM0xaX)
                      : o
                        ? r.intl.string(r.t.xE9WGt)
                        : r.intl.string(r.t["0LMpW+"])
                  : l
                    ? m && a
                        ? r.intl.string(r.t.xFb68j)
                        : a
                          ? d
                              ? r.intl.string(r.t.vLklfF)
                              : r.intl.string(r.t["g8i/bf"])
                          : c
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
                    isUnusableRoleSubscriptionEmoji: i,
                    emojiComesFromCurrentGuild: s,
                    isDiscoverable: l,
                } = e,
                a = "Custom Emoji Popout";
            return (
                t && !n && l
                    ? (a = "Custom Emoji Popout (Cross-Server)")
                    : t || !n || i
                      ? t ||
                        n ||
                        (a = l
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
                    isUnusableRoleSubscriptionEmoji: i,
                    isDiscoverable: s,
                } = e,
                l = !n && s;
            return t && l
                ? { type: "JOIN_GUILD", text: r.intl.string(r.t.riu2R5), description: null }
                : !t && ((n && !i) || l)
                  ? { type: "GET_PREMIUM", text: r.intl.string(r.t["gl/XHJ"]), description: null }
                  : { type: "UNAVAILABLE", text: null, description: null };
        })(e),
        emojiDescription: t,
        analyticsType: n,
    };
}
