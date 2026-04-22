"use strict";
n.d(t, { An: () => T, N8: () => A, RP: () => g, _g: () => I, iC: () => h, jO: () => p, vA: () => m }),
    n(323874),
    n(14289),
    n(35956);
var r,
    i = n(284009),
    s = n.n(i),
    a = n(735438),
    o = n.n(a);
n(311907), n(554146);
var l = n(920268);
n(826673);
var u = n(317525),
    d = n(71393);
n(576705);
var c = n(998218),
    _ = n(783419),
    f = n(652215),
    E = n(985018);
let h = [
    "426537812993638400",
    "1042836142560645130",
    "296023718839451649",
    "979802510766268446",
    "1031611223235637258",
    "512333785338216465",
];
var p = (((r = {})[(r.AND = 0)] = "AND"), (r[(r.OR = 1)] = "OR"), r);
function m(e) {
    let { searchParams: t } = c.A.toURLSafe(e) ?? { searchParams: new URLSearchParams() },
        { code: n, state: r, error: i, error_description: a } = Object.fromEntries(t);
    return (
        s()(!Array.isArray(n), "Received multiple query param values for code"),
        s()(!Array.isArray(r), "Received multiple query param values for state"),
        s()(!Array.isArray(i), "Received multiple query param values for error"),
        s()(!Array.isArray(a), "Received multiple query param values for error_description"),
        { code: n, state: r, error: i, errorDescription: a }
    );
}
function g(e) {
    let { connectionType: t, connectionMetadataField: n, operator: r, operatorText: i, value: s } = e,
        a = null,
        o = Math.round(Number(s));
    switch (r) {
        case _.so.EQUAL:
            (a = E.t.H97H4S), t === f.fg2.PAYPAL && n === _.pK.PAYPAL_VERIFIED && (a = E.t["N95b+f"]);
            break;
        case _.so.NOT_EQUAL:
            a = E.t["D9B/q2"];
            break;
        case _.so.LESS_THAN:
            (a = E.t["3ru8/N"]), (o = Math.max(0, o - 1));
            break;
        case _.so.GREATER_THAN:
            (a = E.t.wCVDHn), (o = Math.max(0, o + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != i && (a = i), null != a && null != r))
        switch (t) {
            case f.fg2.REDDIT:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.REDDIT_TOTAL_KARMA:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.P2JAEc, { karma: o }),
                        });
                        break;
                    case _.pK.REDDIT_GOLD:
                        a = E.intl.format(a, { platformQuantityHook: () => E.intl.string(E.t["+/5TCx"]) });
                        break;
                    case _.pK.REDDIT_MOD:
                        a = E.intl.format(a, { platformQuantityHook: () => E.intl.string(E.t["9rPbEs"]) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.STEAM:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.STEAM_GAME_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.H9eLoe, { count: o }),
                        });
                        break;
                    case _.pK.STEAM_ITEM_COUNT_TF2:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.MceZJ6, { count: o }),
                        });
                        break;
                    case _.pK.STEAM_ITEM_COUNT_DOTA2:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.dMnRar, { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.BLUESKY:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.BLUESKY_FOLLOWERS_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.xIdKU8, { count: o }),
                        });
                        break;
                    case _.pK.BLUESKY_STATUSES_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t["dy3+NR"], { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.TWITTER:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.TWITTER_VERIFIED:
                        a = E.intl.format(a, { platformQuantityHook: () => E.intl.string(E.t.xRygZL) });
                        break;
                    case _.pK.TWITTER_FOLLOWERS_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.bkajar, { count: o }),
                        });
                        break;
                    case _.pK.TWITTER_STATUSES_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.MI7NKi, { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.PAYPAL:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.PAYPAL_VERIFIED:
                        a = E.intl.format(a, { platformQuantityHook: () => E.intl.string(E.t.slSQuB) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.EBAY:
                switch (n) {
                    case _.pK.CREATED_AT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.TPbtEu, { days: o }),
                        });
                        break;
                    case _.pK.EBAY_TOP_RATED_SELLER:
                        a = E.intl.format(a, { platformQuantityHook: () => E.intl.string(E.t.TEEYwa) });
                        break;
                    case _.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.rl9Vgy, { value: o }),
                        });
                        break;
                    case _.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.QP5W1R, { count: o }),
                        });
                        break;
                    case _.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t["6ZFYdK"], { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.TIKTOK:
                switch (n) {
                    case _.pK.TIKTOK_VERIFIED:
                        a = E.intl.format(a, { platformQuantityHook: () => E.intl.string(E.t.uv7ety) });
                        break;
                    case _.pK.TIKTOK_FOLLOWER_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.qIPDRy, { count: o }),
                        });
                        break;
                    case _.pK.TIKTOK_FOLLOWING_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t.zRta4X, { count: o }),
                        });
                        break;
                    case _.pK.TIKTOK_LIKES_COUNT:
                        a = E.intl.format(a, {
                            platformQuantityHook: () => E.intl.formatToPlainString(E.t["ar0WW+"], { count: o }),
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
    let { guildMember: t, guild: n, sortedGuildRoles: r, channel: i, onlyChannelConnectionRoles: s = !1 } = e;
    if (null == t || (null == n && null != i && (n = d.A.getGuild(i.getGuildId())), null == n)) return null;
    let { id: a } = n;
    null == r && (r = u.A.getSortedRoles(a));
    let c = r.filter((e) => null === e.tags.guild_connections && t.roles.includes(e.id)),
        _ = o().intersection(c, (0, l.A)(i));
    return _.length > 0 ? (_[0] ?? null) : s ? null : (c[0] ?? null);
}
function T(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, { month: "short", day: "numeric", year: "numeric" });
}
