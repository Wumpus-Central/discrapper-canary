"use strict";
n.d(t, { An: () => T, N8: () => A, RP: () => g, _g: () => I, iC: () => p, jO: () => E, vA: () => m }),
    n(323874),
    n(14289),
    n(35956);
var i,
    r = n(284009),
    s = n.n(r),
    a = n(735438),
    o = n.n(a);
n(17928), n(554146);
var l = n(920268);
n(826673);
var u = n(317525),
    c = n(71393);
n(576705);
var d = n(998218),
    _ = n(783419),
    f = n(652215),
    h = n(375708);
let p = [
    "426537812993638400",
    "1042836142560645130",
    "296023718839451649",
    "979802510766268446",
    "1031611223235637258",
    "512333785338216465",
];
var E = (((i = {})[(i.AND = 0)] = "AND"), (i[(i.OR = 1)] = "OR"), i);
function m(e) {
    let { searchParams: t } = d.A.toURLSafe(e) ?? { searchParams: new URLSearchParams() },
        { code: n, state: i, error: r, error_description: a } = Object.fromEntries(t);
    return (
        s()(!Array.isArray(n), "Received multiple query param values for code"),
        s()(!Array.isArray(i), "Received multiple query param values for state"),
        s()(!Array.isArray(r), "Received multiple query param values for error"),
        s()(!Array.isArray(a), "Received multiple query param values for error_description"),
        { code: n, state: i, error: r, errorDescription: a }
    );
}
function g(e) {
    let { connectionType: t, connectionMetadataField: n, operator: i, operatorText: r, value: s } = e,
        a = null,
        o = Math.round(Number(s));
    switch (i) {
        case _.so.EQUAL:
            (a = h.t.H97H4S), t === f.fg2.PAYPAL && n === _.pK.PAYPAL_VERIFIED && (a = h.t["N95b+f"]);
            break;
        case _.so.NOT_EQUAL:
            a = h.t["D9B/q2"];
            break;
        case _.so.LESS_THAN:
            (a = h.t["3ru8/N"]), (o = Math.max(0, o - 1));
            break;
        case _.so.GREATER_THAN:
            (a = h.t.wCVDHn), (o = Math.max(0, o + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != r && (a = r), null != a && null != i))
        switch (t) {
            case f.fg2.REDDIT:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.REDDIT_TOTAL_KARMA:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.P2JAEc, { karma: o }),
                        });
                        break;
                    case _.pK.REDDIT_GOLD:
                        a = h.intl.format(a, { platformQuantityHook: () => h.intl.string(h.t["+/5TCx"]) });
                        break;
                    case _.pK.REDDIT_MOD:
                        a = h.intl.format(a, { platformQuantityHook: () => h.intl.string(h.t["9rPbEs"]) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.STEAM:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.STEAM_GAME_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.H9eLoe, { count: o }),
                        });
                        break;
                    case _.pK.STEAM_ITEM_COUNT_TF2:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.MceZJ6, { count: o }),
                        });
                        break;
                    case _.pK.STEAM_ITEM_COUNT_DOTA2:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.dMnRar, { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.BLUESKY:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.BLUESKY_FOLLOWERS_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.xIdKU8, { count: o }),
                        });
                        break;
                    case _.pK.BLUESKY_STATUSES_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t["dy3+NR"], { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.TWITTER:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.TWITTER_VERIFIED:
                        a = h.intl.format(a, { platformQuantityHook: () => h.intl.string(h.t.xRygZL) });
                        break;
                    case _.pK.TWITTER_FOLLOWERS_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.bkajar, { count: o }),
                        });
                        break;
                    case _.pK.TWITTER_STATUSES_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.MI7NKi, { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.PAYPAL:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.PAYPAL_VERIFIED:
                        a = h.intl.format(a, { platformQuantityHook: () => h.intl.string(h.t.slSQuB) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.EBAY:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.EBAY_TOP_RATED_SELLER:
                        a = h.intl.format(a, { platformQuantityHook: () => h.intl.string(h.t.TEEYwa) });
                        break;
                    case _.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.rl9Vgy, { value: o }),
                        });
                        break;
                    case _.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.QP5W1R, { count: o }),
                        });
                        break;
                    case _.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t["6ZFYdK"], { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.TIKTOK:
                switch (n) {
                    case _.pK.TIKTOK_VERIFIED:
                        a = h.intl.format(a, { platformQuantityHook: () => h.intl.string(h.t.uv7ety) });
                        break;
                    case _.pK.TIKTOK_FOLLOWER_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.qIPDRy, { count: o }),
                        });
                        break;
                    case _.pK.TIKTOK_FOLLOWING_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t.zRta4X, { count: o }),
                        });
                        break;
                    case _.pK.TIKTOK_LIKES_COUNT:
                        a = h.intl.format(a, {
                            platformQuantityHook: () => h.intl.formatToPlainString(h.t["ar0WW+"], { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            default:
                return null;
        }
    return a;
}
function A(e) {
    return e.some((e) => null === e.tags.guild_connections);
}
function I(e) {
    let { guildMember: t, guild: n, sortedGuildRoles: i, channel: r, onlyChannelConnectionRoles: s = !1 } = e;
    if (null == t || (null == n && null != r && (n = c.A.getGuild(r.getGuildId())), null == n)) return null;
    let { id: a } = n;
    null == i && (i = u.A.getSortedRoles(a));
    let d = i.filter((e) => null === e.tags.guild_connections && t.roles.includes(e.id)),
        _ = o().intersection(d, (0, l.A)(r));
    return _.length > 0 ? (_[0] ?? null) : s ? null : (d[0] ?? null);
}
function T(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, { month: "short", day: "numeric", year: "numeric" });
}
