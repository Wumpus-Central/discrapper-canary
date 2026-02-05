"use strict";
n.d(t, { An: () => I, N8: () => E, RP: () => g, _g: () => A, iC: () => p, jO: () => h, vA: () => m }),
    n(323874),
    n(14289),
    n(35956);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a);
n(311907), n(554146);
var o = n(920268);
n(826673);
var l = n(317525),
    u = n(71393);
n(576705);
var c = n(998218),
    d = n(783419),
    _ = n(652215),
    f = n(985018);
let p = [
    "426537812993638400",
    "1042836142560645130",
    "296023718839451649",
    "979802510766268446",
    "1031611223235637258",
    "512333785338216465",
];
var h = (function (e) {
    return (e[(e.AND = 0)] = "AND"), (e[(e.OR = 1)] = "OR"), e;
})({});
function m(e) {
    let { searchParams: t } = c.A.toURLSafe(e) ?? { searchParams: new URLSearchParams() },
        { code: n, state: r, error: a, error_description: s } = Object.fromEntries(t);
    return (
        i()(!Array.isArray(n), "Received multiple query param values for code"),
        i()(!Array.isArray(r), "Received multiple query param values for state"),
        i()(!Array.isArray(a), "Received multiple query param values for error"),
        i()(!Array.isArray(s), "Received multiple query param values for error_description"),
        { code: n, state: r, error: a, errorDescription: s }
    );
}
function g(e) {
    let { connectionType: t, connectionMetadataField: n, operator: r, operatorText: i, value: a } = e,
        s = null,
        o = Math.round(Number(a));
    switch (r) {
        case d.so.EQUAL:
            (s = f.t.H97H4S), t === _.fg2.PAYPAL && n === d.pK.PAYPAL_VERIFIED && (s = f.t["N95b+f"]);
            break;
        case d.so.NOT_EQUAL:
            s = f.t["D9B/q2"];
            break;
        case d.so.LESS_THAN:
            (s = f.t["3ru8/N"]), (o = Math.max(0, o - 1));
            break;
        case d.so.GREATER_THAN:
            (s = f.t.wCVDHn), (o = Math.max(0, o + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != i && (s = i), null != s && null != r))
        switch (t) {
            case _.fg2.REDDIT:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEu, { days: o }),
                        });
                        break;
                    case d.pK.REDDIT_TOTAL_KARMA:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.P2JAEc, { karma: o }),
                        });
                        break;
                    case d.pK.REDDIT_GOLD:
                        s = f.intl.format(s, { platformQuantityHook: () => f.intl.string(f.t["+/5TCx"]) });
                        break;
                    case d.pK.REDDIT_MOD:
                        s = f.intl.format(s, { platformQuantityHook: () => f.intl.string(f.t["9rPbEs"]) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.fg2.STEAM:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEu, { days: o }),
                        });
                        break;
                    case d.pK.STEAM_GAME_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.H9eLoe, { count: o }),
                        });
                        break;
                    case d.pK.STEAM_ITEM_COUNT_TF2:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.MceZJ6, { count: o }),
                        });
                        break;
                    case d.pK.STEAM_ITEM_COUNT_DOTA2:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.dMnRar, { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case _.fg2.BLUESKY:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEu, { days: o }),
                        });
                        break;
                    case d.pK.BLUESKY_FOLLOWERS_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.xIdKU8, { count: o }),
                        });
                        break;
                    case d.pK.BLUESKY_STATUSES_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t["dy3+NR"], { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case _.fg2.TWITTER:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEu, { days: o }),
                        });
                        break;
                    case d.pK.TWITTER_VERIFIED:
                        s = f.intl.format(s, { platformQuantityHook: () => f.intl.string(f.t.xRygZL) });
                        break;
                    case d.pK.TWITTER_FOLLOWERS_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.bkajar, { count: o }),
                        });
                        break;
                    case d.pK.TWITTER_STATUSES_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.MI7NKi, { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case _.fg2.PAYPAL:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEu, { days: o }),
                        });
                        break;
                    case d.pK.PAYPAL_VERIFIED:
                        s = f.intl.format(s, { platformQuantityHook: () => f.intl.string(f.t.slSQuB) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.fg2.EBAY:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEu, { days: o }),
                        });
                        break;
                    case d.pK.EBAY_TOP_RATED_SELLER:
                        s = f.intl.format(s, { platformQuantityHook: () => f.intl.string(f.t.TEEYwa) });
                        break;
                    case d.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.rl9Vgy, { value: o }),
                        });
                        break;
                    case d.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.QP5W1R, { count: o }),
                        });
                        break;
                    case d.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t["6ZFYdK"], { count: o }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case _.fg2.TIKTOK:
                switch (n) {
                    case d.pK.TIKTOK_VERIFIED:
                        s = f.intl.format(s, { platformQuantityHook: () => f.intl.string(f.t.uv7ety) });
                        break;
                    case d.pK.TIKTOK_FOLLOWER_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.qIPDRy, { count: o }),
                        });
                        break;
                    case d.pK.TIKTOK_FOLLOWING_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t.zRta4X, { count: o }),
                        });
                        break;
                    case d.pK.TIKTOK_LIKES_COUNT:
                        s = f.intl.format(s, {
                            platformQuantityHook: () => f.intl.formatToPlainString(f.t["ar0WW+"], { count: o }),
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
function E(e) {
    return e.some((e) => null === e.tags.guild_connections);
}
function A(e) {
    let { guildMember: t, guild: n, sortedGuildRoles: r, channel: i, onlyChannelConnectionRoles: a = !1 } = e;
    if (null == t || (null == n && null != i && (n = u.A.getGuild(i.getGuildId())), null == n)) return null;
    let { id: c } = n;
    null == r && (r = l.A.getSortedRoles(c));
    let d = r.filter((e) => null === e.tags.guild_connections && t.roles.includes(e.id)),
        _ = s().intersection(d, (0, o.A)(i));
    return _.length > 0 ? (_[0] ?? null) : a ? null : (d[0] ?? null);
}
function I(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, { month: "short", day: "numeric", year: "numeric" });
}
