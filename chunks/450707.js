var l,
    i = n(624793),
    r = n(975571),
    s = n(652215),
    a = n(792996),
    o = n(236432),
    u = (((l = {}).GET_PREMIUM = "GET_PREMIUM"), (l.JOIN_GUILD = "JOIN_GUILD"), (l.UNAVAILABLE = "UNAVAILABLE"), l);
n.d(
    t,
    {},
    {
        O: function (e) {
            if (e.sourceType === i.rV.PACK)
                return {
                    type: "UNAVAILABLE",
                    text: null,
                    description: null,
                    emojiDescription: a.intl.format(o.default["/jdd/7"], {
                        helpdeskArticle: r.A.getArticleURL(s.MVz.NITRO_EMOJI_PACKS),
                    }),
                    analyticsType: "Custom Emoji Popout (Nitro Emoji Pack)",
                };
            let t = (function (e) {
                    let {
                        sourceType: t,
                        expressionSourceApplication: n,
                        isPremium: l,
                        hasJoinedEmojiSourceGuild: r,
                        isUnusableRoleSubscriptionEmoji: s,
                        isDiscoverable: o,
                        emojiComesFromCurrentGuild: u,
                        userIsRoleSubscriber: d,
                        isRoleSubscriptionEmoji: c,
                        shouldHideRoleSubscriptionCTA: m,
                        onOpenPremiumSettings: h,
                    } = e;
                    return t === i.rV.APPLICATION && null != n
                        ? a.intl.formatToPlainString(a.t.uERlTd, { appName: n.name })
                        : l
                          ? r
                              ? c
                                  ? m && s
                                      ? a.intl.string(a.t.xFb68j)
                                      : s
                                        ? d
                                            ? a.intl.string(a.t.vLklfF)
                                            : a.intl.string(a.t["g8i/bf"])
                                        : a.intl.string(a.t.Eoynp0)
                                  : u
                                    ? a.intl.string(a.t.hU4kIe)
                                    : a.intl.string(a.t.GM0xaX)
                              : o
                                ? a.intl.string(a.t.xE9WGt)
                                : a.intl.string(a.t["0LMpW+"])
                          : r
                            ? m && s
                                ? a.intl.string(a.t.xFb68j)
                                : s
                                  ? d
                                      ? a.intl.string(a.t.vLklfF)
                                      : a.intl.string(a.t["g8i/bf"])
                                  : u
                                    ? a.intl.string(a.t.ICPhqa)
                                    : a.intl.string(a.t.jQy3aM)
                            : o
                              ? a.intl.string(a.t.FJ6Z01)
                              : a.intl.format(a.t.U6vLcA, { openPremiumSettings: h });
                })(e),
                n = (function (e) {
                    let {
                            isPremium: t,
                            hasJoinedEmojiSourceGuild: n,
                            isUnusableRoleSubscriptionEmoji: l,
                            emojiComesFromCurrentGuild: i,
                            isDiscoverable: r,
                        } = e,
                        s = "Custom Emoji Popout";
                    return (
                        t && !n && r
                            ? (s = "Custom Emoji Popout (Cross-Server)")
                            : t || !n || l
                              ? t ||
                                n ||
                                (s = r
                                    ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                                    : "Custom Emoji Popout (Soft Upsell)")
                              : (s = i
                                    ? "Custom Emoji Popout (Upsell Joined Current-Server)"
                                    : "Custom Emoji Popout (Upsell Joined Cross-Server)"),
                        s
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
                        ? { type: "JOIN_GUILD", text: a.intl.string(a.t.riu2R5), description: null }
                        : !t && ((n && !l) || r)
                          ? { type: "GET_PREMIUM", text: a.intl.string(a.t["gl/XHJ"]), description: null }
                          : { type: "UNAVAILABLE", text: null, description: null };
                })(e),
                emojiDescription: t,
                analyticsType: n,
            };
        },
        u: u,
    },
);
