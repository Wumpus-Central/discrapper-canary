n.d(t, { An: () => p, N8: () => N, RP: () => S, _g: () => f, iC: () => I, jO: () => T, vA: () => h }),
    n(323874),
    n(14289),
    n(35956);
var i,
    a = n(284009),
    r = n.n(a),
    s = n(735438),
    l = n.n(s);
n(17928), n(554146);
var o = n(920268);
n(826673);
var d = n(317525),
    c = n(71393);
n(576705);
var _ = n(998218),
    E = n(783419),
    u = n(652215),
    A = n(985018);
let I = [
    "426537812993638400",
    "1042836142560645130",
    "296023718839451649",
    "979802510766268446",
    "1031611223235637258",
    "512333785338216465",
];
var T = (((i = {})[(i.AND = 0)] = "AND"), (i[(i.OR = 1)] = "OR"), i);
function h(e) {
    let { searchParams: t } = _.A.toURLSafe(e) ?? { searchParams: new URLSearchParams() },
        { code: n, state: i, error: a, error_description: s } = Object.fromEntries(t);
    return (
        r()(!Array.isArray(n), "Received multiple query param values for code"),
        r()(!Array.isArray(i), "Received multiple query param values for state"),
        r()(!Array.isArray(a), "Received multiple query param values for error"),
        r()(!Array.isArray(s), "Received multiple query param values for error_description"),
        { code: n, state: i, error: a, errorDescription: s }
    );
}
function S(e) {
    let { connectionType: t, connectionMetadataField: n, operator: i, operatorText: a, value: r } = e,
        s = null,
        l = Math.round(Number(r));
    switch (i) {
        case E.so.EQUAL:
            (s = A.t.H97H4S), t === u.fg2.PAYPAL && n === E.pK.PAYPAL_VERIFIED && (s = A.t["N95b+f"]);
            break;
        case E.so.NOT_EQUAL:
            s = A.t["D9B/q2"];
            break;
        case E.so.LESS_THAN:
            (s = A.t["3ru8/N"]), (l = Math.max(0, l - 1));
            break;
        case E.so.GREATER_THAN:
            (s = A.t.wCVDHn), (l = Math.max(0, l + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != a && (s = a), null != s && null != i))
        switch (t) {
            case u.fg2.REDDIT:
                switch (n) {
                    case E.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case E.pK.REDDIT_TOTAL_KARMA:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.P2JAEc, { karma: l }),
                        });
                        break;
                    case E.pK.REDDIT_GOLD:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t["+/5TCx"]) });
                        break;
                    case E.pK.REDDIT_MOD:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t["9rPbEs"]) });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.STEAM:
                switch (n) {
                    case E.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case E.pK.STEAM_GAME_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.H9eLoe, { count: l }),
                        });
                        break;
                    case E.pK.STEAM_ITEM_COUNT_TF2:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.MceZJ6, { count: l }),
                        });
                        break;
                    case E.pK.STEAM_ITEM_COUNT_DOTA2:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.dMnRar, { count: l }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.BLUESKY:
                switch (n) {
                    case E.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case E.pK.BLUESKY_FOLLOWERS_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.xIdKU8, { count: l }),
                        });
                        break;
                    case E.pK.BLUESKY_STATUSES_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t["dy3+NR"], { count: l }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.TWITTER:
                switch (n) {
                    case E.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case E.pK.TWITTER_VERIFIED:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t.xRygZL) });
                        break;
                    case E.pK.TWITTER_FOLLOWERS_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.bkajar, { count: l }),
                        });
                        break;
                    case E.pK.TWITTER_STATUSES_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.MI7NKi, { count: l }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.PAYPAL:
                switch (n) {
                    case E.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case E.pK.PAYPAL_VERIFIED:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t.slSQuB) });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.EBAY:
                switch (n) {
                    case E.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case E.pK.EBAY_TOP_RATED_SELLER:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t.TEEYwa) });
                        break;
                    case E.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.rl9Vgy, { value: l }),
                        });
                        break;
                    case E.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.QP5W1R, { count: l }),
                        });
                        break;
                    case E.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t["6ZFYdK"], { count: l }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.TIKTOK:
                switch (n) {
                    case E.pK.TIKTOK_VERIFIED:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t.uv7ety) });
                        break;
                    case E.pK.TIKTOK_FOLLOWER_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.qIPDRy, { count: l }),
                        });
                        break;
                    case E.pK.TIKTOK_FOLLOWING_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.zRta4X, { count: l }),
                        });
                        break;
                    case E.pK.TIKTOK_LIKES_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t["ar0WW+"], { count: l }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            default:
                return null;
        }
    return s;
}
function N(e) {
    return e.some((e) => null === e.tags.guild_connections);
}
function f(e) {
    let { guildMember: t, guild: n, sortedGuildRoles: i, channel: a, onlyChannelConnectionRoles: r = !1 } = e;
    if (null == t || (null == n && null != a && (n = c.A.getGuild(a.getGuildId())), null == n)) return null;
    let { id: s } = n;
    null == i && (i = d.A.getSortedRoles(s));
    let _ = i.filter((e) => null === e.tags.guild_connections && t.roles.includes(e.id)),
        E = l().intersection(_, (0, o.A)(a));
    return E.length > 0 ? (E[0] ?? null) : r ? null : (_[0] ?? null);
}
function p(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, { month: "short", day: "numeric", year: "numeric" });
}
