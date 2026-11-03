n.d(e, { O: () => d, u: () => u });
var i,
    r = n(624793),
    l = n(975571),
    s = n(652215),
    o = n(105292),
    a = n(765036),
    u = (((i = {}).GET_PREMIUM = "GET_PREMIUM"), (i.JOIN_GUILD = "JOIN_GUILD"), (i.UNAVAILABLE = "UNAVAILABLE"), i);
function d(t) {
    if (t.sourceType === r.rV.PACK)
        return {
            type: "UNAVAILABLE",
            text: null,
            description: null,
            emojiDescription: o.intl.format(a.default["/jdd/7"], {
                helpdeskArticle: l.A.getArticleURL(s.MVz.NITRO_EMOJI_PACKS),
            }),
            analyticsType: "Custom Emoji Popout (Nitro Emoji Pack)",
        };
    let e = (function (t) {
            let {
                sourceType: e,
                expressionSourceApplication: n,
                isPremium: i,
                hasJoinedEmojiSourceGuild: l,
                isUnusableRoleSubscriptionEmoji: s,
                isDiscoverable: a,
                emojiComesFromCurrentGuild: u,
                userIsRoleSubscriber: d,
                isRoleSubscriptionEmoji: c,
                shouldHideRoleSubscriptionCTA: p,
                onOpenPremiumSettings: m,
            } = t;
            return e === r.rV.APPLICATION && null != n
                ? o.intl.formatToPlainString(o.t.uERlTd, { appName: n.name })
                : i
                  ? l
                      ? c
                          ? p && s
                              ? o.intl.string(o.t.xFb68j)
                              : s
                                ? d
                                    ? o.intl.string(o.t.vLklfF)
                                    : o.intl.string(o.t["g8i/bf"])
                                : o.intl.string(o.t.Eoynp0)
                          : u
                            ? o.intl.string(o.t.hU4kIe)
                            : o.intl.string(o.t.GM0xaX)
                      : a
                        ? o.intl.string(o.t.xE9WGt)
                        : o.intl.string(o.t["0LMpW+"])
                  : l
                    ? p && s
                        ? o.intl.string(o.t.xFb68j)
                        : s
                          ? d
                              ? o.intl.string(o.t.vLklfF)
                              : o.intl.string(o.t["g8i/bf"])
                          : u
                            ? o.intl.string(o.t.ICPhqa)
                            : o.intl.string(o.t.jQy3aM)
                    : a
                      ? o.intl.string(o.t.FJ6Z01)
                      : o.intl.format(o.t.U6vLcA, { openPremiumSettings: m });
        })(t),
        n = (function (t) {
            let {
                    isPremium: e,
                    hasJoinedEmojiSourceGuild: n,
                    isUnusableRoleSubscriptionEmoji: i,
                    emojiComesFromCurrentGuild: r,
                    isDiscoverable: l,
                } = t,
                s = "Custom Emoji Popout";
            return (
                e && !n && l
                    ? (s = "Custom Emoji Popout (Cross-Server)")
                    : e || !n || i
                      ? e ||
                        n ||
                        (s = l
                            ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                            : "Custom Emoji Popout (Soft Upsell)")
                      : (s = r
                            ? "Custom Emoji Popout (Upsell Joined Current-Server)"
                            : "Custom Emoji Popout (Upsell Joined Cross-Server)"),
                s
            );
        })(t);
    return {
        ...(function (t) {
            let {
                    isPremium: e,
                    hasJoinedEmojiSourceGuild: n,
                    isUnusableRoleSubscriptionEmoji: i,
                    isDiscoverable: r,
                } = t,
                l = !n && r;
            return e && l
                ? { type: "JOIN_GUILD", text: o.intl.string(o.t.riu2R5), description: null }
                : !e && ((n && !i) || l)
                  ? { type: "GET_PREMIUM", text: o.intl.string(o.t["gl/XHJ"]), description: null }
                  : { type: "UNAVAILABLE", text: null, description: null };
        })(t),
        emojiDescription: e,
        analyticsType: n,
    };
}
