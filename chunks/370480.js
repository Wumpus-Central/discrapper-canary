"use strict";
n.d(t, { An: () => g, N8: () => T, RP: () => p, _g: () => m, iC: () => h, jO: () => I, vA: () => f }),
    n(323874),
    n(14289),
    n(35956);
var i,
    r = n(284009),
    a = n.n(r),
    s = n(435558),
    l = n.n(s);
n(17928), n(554146);
var o = n(920268);
n(826673);
var d = n(317525),
    c = n(71393);
n(576705);
var u = n(998218),
    _ = n(783419),
    E = n(652215),
    A = n(375708);
let h = [
    "426537812993638400",
    "1042836142560645130",
    "296023718839451649",
    "979802510766268446",
    "1031611223235637258",
    "512333785338216465",
];
var I = (((i = {})[(i.AND = 0)] = "AND"), (i[(i.OR = 1)] = "OR"), i);
function f(e) {
    let { searchParams: t } = u.A.toURLSafe(e) ?? { searchParams: new URLSearchParams() },
        { code: n, state: i, error: r, error_description: s } = Object.fromEntries(t);
    return (
        a()(!Array.isArray(n), "Received multiple query param values for code"),
        a()(!Array.isArray(i), "Received multiple query param values for state"),
        a()(!Array.isArray(r), "Received multiple query param values for error"),
        a()(!Array.isArray(s), "Received multiple query param values for error_description"),
        { code: n, state: i, error: r, errorDescription: s }
    );
}
function p(e) {
    let { connectionType: t, connectionMetadataField: n, operator: i, operatorText: r, value: a } = e,
        s = null,
        l = Math.round(Number(a));
    switch (i) {
        case _.so.EQUAL:
            (s = A.t.H97H4S), t === E.fg2.PAYPAL && n === _.pK.PAYPAL_VERIFIED && (s = A.t["N95b+f"]);
            break;
        case _.so.NOT_EQUAL:
            s = A.t["D9B/q2"];
            break;
        case _.so.LESS_THAN:
            (s = A.t["3ru8/N"]), (l = Math.max(0, l - 1));
            break;
        case _.so.GREATER_THAN:
            (s = A.t.wCVDHn), (l = Math.max(0, l + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != r && (s = r), null != s && null != i))
        switch (t) {
            case E.fg2.REDDIT:
                switch (n) {
                    case _.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case _.pK.REDDIT_TOTAL_KARMA:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.P2JAEc, { karma: l }),
                        });
                        break;
                    case _.pK.REDDIT_GOLD:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t["+/5TCx"]) });
                        break;
                    case _.pK.REDDIT_MOD:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t["9rPbEs"]) });
                        break;
                    default:
                        return null;
                }
                break;
            case E.fg2.STEAM:
                switch (n) {
                    case _.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case _.pK.STEAM_GAME_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.H9eLoe, { count: l }),
                        });
                        break;
                    case _.pK.STEAM_ITEM_COUNT_TF2:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.MceZJ6, { count: l }),
                        });
                        break;
                    case _.pK.STEAM_ITEM_COUNT_DOTA2:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.dMnRar, { count: l }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case E.fg2.BLUESKY:
                switch (n) {
                    case _.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case _.pK.BLUESKY_FOLLOWERS_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.xIdKU8, { count: l }),
                        });
                        break;
                    case _.pK.BLUESKY_STATUSES_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t["dy3+NR"], { count: l }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case E.fg2.TWITTER:
                switch (n) {
                    case _.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case _.pK.TWITTER_VERIFIED:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t.xRygZL) });
                        break;
                    case _.pK.TWITTER_FOLLOWERS_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.bkajar, { count: l }),
                        });
                        break;
                    case _.pK.TWITTER_STATUSES_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.MI7NKi, { count: l }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case E.fg2.PAYPAL:
                switch (n) {
                    case _.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case _.pK.PAYPAL_VERIFIED:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t.slSQuB) });
                        break;
                    default:
                        return null;
                }
                break;
            case E.fg2.EBAY:
                switch (n) {
                    case _.pK.CREATED_AT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.TPbtEu, { days: l }),
                        });
                        break;
                    case _.pK.EBAY_TOP_RATED_SELLER:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t.TEEYwa) });
                        break;
                    case _.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.rl9Vgy, { value: l }),
                        });
                        break;
                    case _.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.QP5W1R, { count: l }),
                        });
                        break;
                    case _.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t["6ZFYdK"], { count: l }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case E.fg2.TIKTOK:
                switch (n) {
                    case _.pK.TIKTOK_VERIFIED:
                        s = A.intl.format(s, { platformQuantityHook: () => A.intl.string(A.t.uv7ety) });
                        break;
                    case _.pK.TIKTOK_FOLLOWER_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.qIPDRy, { count: l }),
                        });
                        break;
                    case _.pK.TIKTOK_FOLLOWING_COUNT:
                        s = A.intl.format(s, {
                            platformQuantityHook: () => A.intl.formatToPlainString(A.t.zRta4X, { count: l }),
                        });
                        break;
                    case _.pK.TIKTOK_LIKES_COUNT:
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
function T(e) {
    return e.some((e) => null === e.tags.guild_connections);
}
function m(e) {
    let { guildMember: t, guild: n, sortedGuildRoles: i, channel: r, onlyChannelConnectionRoles: a = !1 } = e;
    if (null == t || (null == n && null != r && (n = c.A.getGuild(r.getGuildId())), null == n)) return null;
    let { id: s } = n;
    null == i && (i = d.A.getSortedRoles(s));
    let u = i.filter((e) => null === e.tags.guild_connections && t.roles.includes(e.id)),
        _ = l().intersection(u, (0, o.A)(r));
    return _.length > 0 ? (_[0] ?? null) : a ? null : (u[0] ?? null);
}
function g(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, { month: "short", day: "numeric", year: "numeric" });
}
