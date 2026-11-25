var l,
    i = n(624793),
    r = n(975571),
    a = n(652215),
    s = n(792996),
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
                    emojiDescription: s.intl.format(o.default["/jdd/7"], {
                        helpdeskArticle: r.A.getArticleURL(a.MVz.NITRO_EMOJI_PACKS),
                    }),
                    analyticsType: "Custom Emoji Popout (Nitro Emoji Pack)",
                };
            let t = (function (e) {
                    let {
                        sourceType: t,
                        expressionSourceApplication: n,
                        isPremium: l,
                        hasJoinedEmojiSourceGuild: r,
                        isUnusableRoleSubscriptionEmoji: a,
                        isDiscoverable: o,
                        emojiComesFromCurrentGuild: u,
                        userIsRoleSubscriber: d,
                        isRoleSubscriptionEmoji: c,
                        shouldHideRoleSubscriptionCTA: m,
                        onOpenPremiumSettings: h,
                    } = e;
                    return t === i.rV.APPLICATION && null != n
                        ? s.intl.formatToPlainString(s.t.uERlTd, { appName: n.name })
                        : l
                          ? r
                              ? c
                                  ? m && a
                                      ? s.intl.string(s.t.xFb68j)
                                      : a
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
                          : r
                            ? m && a
                                ? s.intl.string(s.t.xFb68j)
                                : a
                                  ? d
                                      ? s.intl.string(s.t.vLklfF)
                                      : s.intl.string(s.t["g8i/bf"])
                                  : u
                                    ? s.intl.string(s.t.ICPhqa)
                                    : s.intl.string(s.t.jQy3aM)
                            : o
                              ? s.intl.string(s.t.FJ6Z01)
                              : s.intl.format(s.t.U6vLcA, { openPremiumSettings: h });
                })(e),
                n = (function (e) {
                    let {
                            isPremium: t,
                            hasJoinedEmojiSourceGuild: n,
                            isUnusableRoleSubscriptionEmoji: l,
                            emojiComesFromCurrentGuild: i,
                            isDiscoverable: r,
                        } = e,
                        a = "Custom Emoji Popout";
                    return (
                        t && !n && r
                            ? (a = "Custom Emoji Popout (Cross-Server)")
                            : t || !n || l
                              ? t ||
                                n ||
                                (a = r
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
        },
        u: u,
    },
);
