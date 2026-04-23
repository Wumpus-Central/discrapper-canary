n.d(t, { An: () => f, N8: () => O, RP: () => N, _g: () => R, iC: () => A, jO: () => T, vA: () => S }),
    n(323874),
    n(14289),
    n(35956);
var i,
    r = n(284009),
    a = n.n(r),
    s = n(735438),
    _ = n.n(s);
n(17928), n(554146);
var l = n(920268);
n(826673);
var o = n(317525),
    E = n(71393);
n(576705);
var d = n(998218),
    c = n(783419),
    u = n(652215),
    I = n(985018);
let A = [
    "426537812993638400",
    "1042836142560645130",
    "296023718839451649",
    "979802510766268446",
    "1031611223235637258",
    "512333785338216465",
];
var T = (((i = {})[(i.AND = 0)] = "AND"), (i[(i.OR = 1)] = "OR"), i);
function S(e) {
    let { searchParams: t } = d.A.toURLSafe(e) ?? { searchParams: new URLSearchParams() },
        { code: n, state: i, error: r, error_description: s } = Object.fromEntries(t);
    return (
        a()(!Array.isArray(n), "Received multiple query param values for code"),
        a()(!Array.isArray(i), "Received multiple query param values for state"),
        a()(!Array.isArray(r), "Received multiple query param values for error"),
        a()(!Array.isArray(s), "Received multiple query param values for error_description"),
        { code: n, state: i, error: r, errorDescription: s }
    );
}
function N(e) {
    let { connectionType: t, connectionMetadataField: n, operator: i, operatorText: r, value: a } = e,
        s = null,
        _ = Math.round(Number(a));
    switch (i) {
        case c.so.EQUAL:
            (s = I.t.H97H4S), t === u.fg2.PAYPAL && n === c.pK.PAYPAL_VERIFIED && (s = I.t["N95b+f"]);
            break;
        case c.so.NOT_EQUAL:
            s = I.t["D9B/q2"];
            break;
        case c.so.LESS_THAN:
            (s = I.t["3ru8/N"]), (_ = Math.max(0, _ - 1));
            break;
        case c.so.GREATER_THAN:
            (s = I.t.wCVDHn), (_ = Math.max(0, _ + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != r && (s = r), null != s && null != i))
        switch (t) {
            case u.fg2.REDDIT:
                switch (n) {
                    case c.pK.CREATED_AT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEu, { days: _ }),
                        });
                        break;
                    case c.pK.REDDIT_TOTAL_KARMA:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.P2JAEc, { karma: _ }),
                        });
                        break;
                    case c.pK.REDDIT_GOLD:
                        s = I.intl.format(s, { platformQuantityHook: () => I.intl.string(I.t["+/5TCx"]) });
                        break;
                    case c.pK.REDDIT_MOD:
                        s = I.intl.format(s, { platformQuantityHook: () => I.intl.string(I.t["9rPbEs"]) });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.STEAM:
                switch (n) {
                    case c.pK.CREATED_AT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEu, { days: _ }),
                        });
                        break;
                    case c.pK.STEAM_GAME_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.H9eLoe, { count: _ }),
                        });
                        break;
                    case c.pK.STEAM_ITEM_COUNT_TF2:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.MceZJ6, { count: _ }),
                        });
                        break;
                    case c.pK.STEAM_ITEM_COUNT_DOTA2:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.dMnRar, { count: _ }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.BLUESKY:
                switch (n) {
                    case c.pK.CREATED_AT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEu, { days: _ }),
                        });
                        break;
                    case c.pK.BLUESKY_FOLLOWERS_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.xIdKU8, { count: _ }),
                        });
                        break;
                    case c.pK.BLUESKY_STATUSES_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t["dy3+NR"], { count: _ }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.TWITTER:
                switch (n) {
                    case c.pK.CREATED_AT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEu, { days: _ }),
                        });
                        break;
                    case c.pK.TWITTER_VERIFIED:
                        s = I.intl.format(s, { platformQuantityHook: () => I.intl.string(I.t.xRygZL) });
                        break;
                    case c.pK.TWITTER_FOLLOWERS_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.bkajar, { count: _ }),
                        });
                        break;
                    case c.pK.TWITTER_STATUSES_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.MI7NKi, { count: _ }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.PAYPAL:
                switch (n) {
                    case c.pK.CREATED_AT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEu, { days: _ }),
                        });
                        break;
                    case c.pK.PAYPAL_VERIFIED:
                        s = I.intl.format(s, { platformQuantityHook: () => I.intl.string(I.t.slSQuB) });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.EBAY:
                switch (n) {
                    case c.pK.CREATED_AT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEu, { days: _ }),
                        });
                        break;
                    case c.pK.EBAY_TOP_RATED_SELLER:
                        s = I.intl.format(s, { platformQuantityHook: () => I.intl.string(I.t.TEEYwa) });
                        break;
                    case c.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.rl9Vgy, { value: _ }),
                        });
                        break;
                    case c.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.QP5W1R, { count: _ }),
                        });
                        break;
                    case c.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t["6ZFYdK"], { count: _ }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case u.fg2.TIKTOK:
                switch (n) {
                    case c.pK.TIKTOK_VERIFIED:
                        s = I.intl.format(s, { platformQuantityHook: () => I.intl.string(I.t.uv7ety) });
                        break;
                    case c.pK.TIKTOK_FOLLOWER_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.qIPDRy, { count: _ }),
                        });
                        break;
                    case c.pK.TIKTOK_FOLLOWING_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t.zRta4X, { count: _ }),
                        });
                        break;
                    case c.pK.TIKTOK_LIKES_COUNT:
                        s = I.intl.format(s, {
                            platformQuantityHook: () => I.intl.formatToPlainString(I.t["ar0WW+"], { count: _ }),
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
function O(e) {
    return e.some((e) => null === e.tags.guild_connections);
}
function R(e) {
    let { guildMember: t, guild: n, sortedGuildRoles: i, channel: r, onlyChannelConnectionRoles: a = !1 } = e;
    if (null == t || (null == n && null != r && (n = E.A.getGuild(r.getGuildId())), null == n)) return null;
    let { id: s } = n;
    null == i && (i = o.A.getSortedRoles(s));
    let d = i.filter((e) => null === e.tags.guild_connections && t.roles.includes(e.id)),
        c = _().intersection(d, (0, l.A)(r));
    return c.length > 0 ? (c[0] ?? null) : a ? null : (d[0] ?? null);
}
function f(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, { month: "short", day: "numeric", year: "numeric" });
}
