n.d(t, {
    O: () => p,
    u: () => c,
});
var r = n(624793),
    i = n(985018);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var c = (function (e) {
    return (e.GET_PREMIUM = "GET_PREMIUM"), (e.JOIN_GUILD = "JOIN_GUILD"), (e.UNAVAILABLE = "UNAVAILABLE"), e;
})({});
let u = (e) => {
        let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: r,
                emojiComesFromCurrentGuild: i,
                isDiscoverable: a,
            } = e,
            s = "Custom Emoji Popout";
        return (
            t && !n && a
                ? (s = "Custom Emoji Popout (Cross-Server)")
                : t || !n || r
                  ? t ||
                    n ||
                    (s = a
                        ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                        : "Custom Emoji Popout (Soft Upsell)")
                  : (s = i
                        ? "Custom Emoji Popout (Upsell Joined Current-Server)"
                        : "Custom Emoji Popout (Upsell Joined Cross-Server)"),
            s
        );
    },
    d = (e) => {
        let {
                sourceType: t,
                expressionSourceApplication: n,
                isPremium: a,
                hasJoinedEmojiSourceGuild: s,
                isUnusableRoleSubscriptionEmoji: o,
                isDiscoverable: l,
                emojiComesFromCurrentGuild: c,
                userIsRoleSubscriber: u,
                isRoleSubscriptionEmoji: d,
                shouldHideRoleSubscriptionCTA: f,
                onOpenPremiumSettings: p,
            } = e,
            _ = null;
        return t === r.rV.APPLICATION && null != n
            ? i.intl.formatToPlainString(i.t.uERlTd, { appName: n.name })
            : a
              ? s
                  ? d
                      ? f && o
                          ? i.intl.string(i.t.xFb68j)
                          : o
                            ? u
                                ? i.intl.string(i.t.vLklfF)
                                : i.intl.string(i.t["g8i/bf"])
                            : i.intl.string(i.t.Eoynp0)
                      : c
                        ? i.intl.string(i.t.hU4kIe)
                        : i.intl.string(i.t.GM0xaX)
                  : l
                    ? i.intl.string(i.t.xE9WGt)
                    : i.intl.string(i.t["0LMpW+"])
              : s
                ? f && o
                    ? i.intl.string(i.t.xFb68j)
                    : o
                      ? u
                          ? i.intl.string(i.t.vLklfF)
                          : i.intl.string(i.t["g8i/bf"])
                      : c
                        ? i.intl.string(i.t.ICPhqa)
                        : i.intl.string(i.t.jQy3aM)
                : l
                  ? i.intl.string(i.t.FJ6Z01)
                  : i.intl.format(i.t.U6vLcA, { openPremiumSettings: p });
    },
    f = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: r, isDiscoverable: a } = e,
            s = n && !r,
            o = !n && a,
            l = !t && (s || o);
        return t && o
            ? {
                  type: "JOIN_GUILD",
                  text: i.intl.string(i.t.riu2R5),
                  description: null,
              }
            : l
              ? {
                    type: "GET_PREMIUM",
                    text: i.intl.string(i.t["gl/XHJ"]),
                    description: null,
                }
              : {
                    type: "UNAVAILABLE",
                    text: null,
                    description: null,
                };
    },
    p = (e) => {
        let t = d(e),
            n = u(e);
        return l(s({}, f(e)), {
            emojiDescription: t,
            analyticsType: n,
        });
    };
