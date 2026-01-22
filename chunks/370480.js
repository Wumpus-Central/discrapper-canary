n.d(t, {
    An: () => y,
    N8: () => E,
    RP: () => g,
    _g: () => b,
    iC: () => _,
    jO: () => h,
    vA: () => m,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(446912);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a);
n(311907), n(554146);
var o = n(920268);
n(826673);
var l = n(317525),
    c = n(71393);
n(576705);
var u = n(998218),
    d = n(783419),
    f = n(652215),
    p = n(985018);
let _ = [
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
    var t;
    let { searchParams: n } =
            null != (t = u.A.toURLSafe(e))
                ? t
                : {
                      searchParams: new URLSearchParams(),
                  },
        { code: r, state: a, error: s, error_description: o } = Object.fromEntries(n);
    return (
        i()(!Array.isArray(r), "Received multiple query param values for code"),
        i()(!Array.isArray(a), "Received multiple query param values for state"),
        i()(!Array.isArray(s), "Received multiple query param values for error"),
        i()(!Array.isArray(o), "Received multiple query param values for error_description"),
        {
            code: r,
            state: a,
            error: s,
            errorDescription: o,
        }
    );
}

function g(e) {
    let { connectionType: t, connectionMetadataField: n, operator: r, operatorText: i, value: a } = e,
        s = null,
        o = Math.round(Number(a));
    switch (r) {
        case d.so.EQUAL:
            (s = p.t.H97H4S), t === f.fg2.PAYPAL && n === d.pK.PAYPAL_VERIFIED && (s = p.t["N95b+f"]);
            break;
        case d.so.NOT_EQUAL:
            s = p.t["D9B/q2"];
            break;
        case d.so.LESS_THAN:
            (s = p.t["3ru8/N"]), (o = Math.max(0, o - 1));
            break;
        case d.so.GREATER_THAN:
            (s = p.t.wCVDHn), (o = Math.max(0, o + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != i && (s = i), null != s && null != r))
        switch (t) {
            case f.fg2.REDDIT:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.TPbtEu, {
                                    days: o,
                                }),
                        });
                        break;
                    case d.pK.REDDIT_TOTAL_KARMA:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.P2JAEc, {
                                    karma: o,
                                }),
                        });
                        break;
                    case d.pK.REDDIT_GOLD:
                        s = p.intl.format(s, {
                            platformQuantityHook: () => p.intl.string(p.t["+/5TCx"]),
                        });
                        break;
                    case d.pK.REDDIT_MOD:
                        s = p.intl.format(s, {
                            platformQuantityHook: () => p.intl.string(p.t["9rPbEs"]),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.STEAM:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.TPbtEu, {
                                    days: o,
                                }),
                        });
                        break;
                    case d.pK.STEAM_GAME_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.H9eLoe, {
                                    count: o,
                                }),
                        });
                        break;
                    case d.pK.STEAM_ITEM_COUNT_TF2:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.MceZJ6, {
                                    count: o,
                                }),
                        });
                        break;
                    case d.pK.STEAM_ITEM_COUNT_DOTA2:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.dMnRar, {
                                    count: o,
                                }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.BLUESKY:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.TPbtEu, {
                                    days: o,
                                }),
                        });
                        break;
                    case d.pK.BLUESKY_FOLLOWERS_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.xIdKU8, {
                                    count: o,
                                }),
                        });
                        break;
                    case d.pK.BLUESKY_STATUSES_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t["dy3+NR"], {
                                    count: o,
                                }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.TWITTER:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.TPbtEu, {
                                    days: o,
                                }),
                        });
                        break;
                    case d.pK.TWITTER_VERIFIED:
                        s = p.intl.format(s, {
                            platformQuantityHook: () => p.intl.string(p.t.xRygZL),
                        });
                        break;
                    case d.pK.TWITTER_FOLLOWERS_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.bkajar, {
                                    count: o,
                                }),
                        });
                        break;
                    case d.pK.TWITTER_STATUSES_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.MI7NKi, {
                                    count: o,
                                }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.PAYPAL:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.TPbtEu, {
                                    days: o,
                                }),
                        });
                        break;
                    case d.pK.PAYPAL_VERIFIED:
                        s = p.intl.format(s, {
                            platformQuantityHook: () => p.intl.string(p.t.slSQuB),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.EBAY:
                switch (n) {
                    case d.pK.CREATED_AT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.TPbtEu, {
                                    days: o,
                                }),
                        });
                        break;
                    case d.pK.EBAY_TOP_RATED_SELLER:
                        s = p.intl.format(s, {
                            platformQuantityHook: () => p.intl.string(p.t.TEEYwa),
                        });
                        break;
                    case d.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.rl9Vgy, {
                                    value: o,
                                }),
                        });
                        break;
                    case d.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.QP5W1R, {
                                    count: o,
                                }),
                        });
                        break;
                    case d.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t["6ZFYdK"], {
                                    count: o,
                                }),
                        });
                        break;
                    default:
                        return null;
                }
                break;
            case f.fg2.TIKTOK:
                switch (n) {
                    case d.pK.TIKTOK_VERIFIED:
                        s = p.intl.format(s, {
                            platformQuantityHook: () => p.intl.string(p.t.uv7ety),
                        });
                        break;
                    case d.pK.TIKTOK_FOLLOWER_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.qIPDRy, {
                                    count: o,
                                }),
                        });
                        break;
                    case d.pK.TIKTOK_FOLLOWING_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t.zRta4X, {
                                    count: o,
                                }),
                        });
                        break;
                    case d.pK.TIKTOK_LIKES_COUNT:
                        s = p.intl.format(s, {
                            platformQuantityHook: () =>
                                p.intl.formatToPlainString(p.t["ar0WW+"], {
                                    count: o,
                                }),
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

function b(e) {
    var t, n;
    let { guildMember: r, guild: i, sortedGuildRoles: a, channel: u, onlyChannelConnectionRoles: d = !1 } = e;
    if (null == r || (null == i && null != u && (i = c.A.getGuild(u.getGuildId())), null == i)) return null;
    let { id: f } = i;
    null == a && (a = l.A.getSortedRoles(f));
    let p = a.filter((e) => null === e.tags.guild_connections && r.roles.includes(e.id)),
        _ = s().intersection(p, (0, o.A)(u));
    return _.length > 0 ? (null != (n = _[0]) ? n : null) : d ? null : null != (t = p[0]) ? t : null;
}

function y(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, {
              month: "short",
              day: "numeric",
              year: "numeric",
          });
}
