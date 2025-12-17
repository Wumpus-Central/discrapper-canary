n.d(t, {
    A3: () => R,
    C1: () => H,
    DV: () => Z,
    Gn: () => j,
    IP: () => W,
    J1: () => k,
    MZ: () => Y,
    NJ: () => V,
    Nf: () => U,
    PC: () => w,
    Y1: () => G,
    ZF: () => P,
    fe: () => M,
    jA: () => D,
    kI: () => N,
    nV: () => K,
    q5: () => B,
    to: () => L,
    wC: () => F,
    y$: () => x,
}),
    n(290780),
    n(539854),
    n(388685),
    n(314940),
    n(704826),
    n(35282);
var r = n(473749),
    i = n(392711),
    a = n(278074),
    o = n(442837),
    s = n(367907),
    l = n(339085),
    c = n(633302),
    u = n(558217),
    d = n(125900),
    f = n(675478),
    p = n(430824),
    _ = n(771845),
    m = n(594174),
    h = n(626135),
    g = n(70956),
    E = n(176354),
    b = n(111361),
    y = n(304852),
    O = n(199257),
    v = n(149203),
    S = n(981631),
    I = n(185923),
    T = n(957825),
    C = n(474936),
    A = n(388032);
let N = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, u.O)(n);
        let a = (0, I.Gt)(e),
            s = F(n),
            c = B(n),
            f = V(n),
            { topEmojis: h, newlyAddedEmojis: g } = (0, O.Z)(n, e),
            { allEmojis: S } = (0, y.Z)({
                topEmojis: h,
                newlyAddedEmojis: g,
            }),
            T = (0, o.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
            C = (0, o.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.getGuild(n)) ? void 0 : e.name;
            }),
            N = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
            P = (0, b.I5)(N),
            R = (0, d.g2)({ location: "useEmojiCategories" });
        return r.useMemo(() => {
            let r = T.getGroupedCustomEmoji(),
                o = _.ZP.getFlattenedGuildIds(),
                u = [],
                d = {
                    type: v.En.SOUNDMOJI,
                    name: A.intl.string(A.t.f0Ezmv),
                    id: v.UX.SOUNDMOJI,
                    isNitroLocked: !1,
                },
                m = (r) =>
                    E.ZP.getEmojiUnavailableReasons({
                        categoryEmojis: r,
                        channel: t,
                        guildId: n,
                        intention: e,
                    });
            return (
                ((e, t) => {
                    for (let i of e) {
                        let e;
                        if ((t === v.En.GUILD && (e = p.Z.getGuild(i)), null == e)) continue;
                        let a = null == r ? void 0 : r[e.id];
                        if (null == a || 0 === a.length) continue;
                        let {
                            emojisDisabled: o,
                            emojisUnfiltered: s,
                            emojisPremiumLockedCount: l,
                            emojiNitroLocked: c,
                        } = m(a);
                        if (0 === s.length) continue;
                        let d = null;
                        t === v.En.GUILD &&
                            (d = {
                                type: v.En.GUILD,
                                guild: e,
                                isNitroLocked: !P && c && l === a.length,
                                emojis: a,
                                emojisDisabled: o,
                            }),
                            null != d && (e.id === n ? u.unshift(d) : u.push(d));
                    }
                })(o, v.En.GUILD),
                l.ZP.categories.reduce(
                    (t, r) => {
                        if (r === v.UX.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = m(S);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: v.En.TOP_GUILD_EMOJI,
                                id: r,
                                name: A.intl.formatToPlainString(A.t.W6Wi1X, { guildName: C }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (r === v.UX.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: i } = m(
                                [I.Hz.REACTION, I.Hz.DEFAULT_REACT_EMOJI].includes(e) ? c : s,
                            );
                            if (null == i || 0 === i.length) return t;
                            t.push({
                                type: v.En.RECENT,
                                id: r,
                                name: A.intl.string(A.t["5TvaSm"]),
                                isNitroLocked: !1,
                                emojis: i,
                                emojisDisabled: n,
                            });
                        } else if (r === v.UX.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = m(f);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: v.En.FAVORITES,
                                id: r,
                                name: A.intl.string(A.t.y3LQCG),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (r === v.UX.CUSTOM) {
                            let e = u;
                            a || (e = u.filter((e) => e.type === v.En.GUILD && e.guild.id === n)), t.push(...e);
                        } else
                            t.push({
                                type: v.En.UNICODE,
                                id: r,
                                name: r,
                                isNitroLocked: !1,
                            });
                        return t;
                    },
                    R && i ? [d] : [],
                )
            );
        }, [T, t, n, e, P, S, C, c, s, f, a, R, i]);
    },
    P = () =>
        c.ZP.getCategories().map((e) => ({
            type: v.En.UNICODE,
            id: e,
            name: e,
            isNitroLocked: !1,
        })),
    R = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        h.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? S.ZY5.GUILD_CHANNEL : S.ZY5.DM_CHANNEL,
            location_section: null != e ? S.jXE.EMOJI_PICKER_POPOUT : S.jXE.CUSTOM_STATUS_MODAL,
        });
    },
    w = (e, t) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_STARTED, {
            search_type: null != t && t === I.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            location: e,
        });
    },
    D = (e, t, n, r, i) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === I.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n,
        });
    },
    x = (e) => {
        var t, n, r;
        let { emoji: i, emojiSuggestions: o, searchQuery: l, isLocked: c, location: u, intention: d, index: f } = e,
            p = null != (r = i.uniqueName) ? r : i.name,
            _ = (0, a.EQ)(d)
                .with(I.Hz.REACTION, () => S.aib.EMOJI_REACTION)
                .with(I.Hz.AUTO_SUGGESTION, () => S.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => S.aib.EMOJI);
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SELECTED, {
            search_type: _,
            location: u,
            expression_guild_id: i.guildId,
            emoji_id: i.id,
            emoji_name: p,
            is_custom: null != i.id,
            is_animated: i.animated,
            is_locked: c,
            query: l,
            index_num: f,
            load_id: null == o ? void 0 : o.loadId,
            total_results: null == o || null == (t = o.results) ? void 0 : t.length,
            emoji_suggestion_ids:
                null == o || null == (n = o.results)
                    ? void 0
                    : n
                          .map((e) => {
                              let { emoji: t } = e;
                              return t.id;
                          })
                          .filter((e) => null != e),
        });
    },
    L = (e, t) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_EMPTY, {
            search_type: S.aib.EMOJI,
            query: t,
            location: e,
        });
    },
    j = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        s.ZP.trackWithMetadata(S.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: null == n ? void 0 : n.toString(),
            newly_added_highlight: i,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: r,
        });
    },
    M = (e) => {
        var t;
        let n,
            {
                emoji: r,
                location: i,
                pickerIntention: a,
                category: o,
                subCategory: l = v.t0.NONE,
                position: c,
                newlyAddedHighlight: u,
                isBurstReaction: d,
            } = e;
        switch (a) {
            case I.Hz.REACTION:
                n = d ? C.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : C.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case I.Hz.STATUS:
                n = C.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                n = C.cd.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let f = null != (t = r.uniqueName) ? t : r.name;
        s.ZP.trackWithMetadata(S.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: n,
            location: i,
            expression_id: r.id,
            expression_name: f,
            expression_guild_id: r.guildId,
            is_custom: null != r.id,
            is_animated: r.animated,
            expression_picker_section: o,
            expression_section: null == l ? void 0 : l.toString(),
            emoji_position: c,
            newly_added_highlight: u,
            is_burst: d,
        });
    },
    k = (e) => {
        var t;
        let { emoji: n, location: r } = e,
            i = null != (t = n.uniqueName) ? t : n.name;
        s.ZP.trackWithMetadata(S.rMx.EXPRESSION_FAVORITED, {
            location: r,
            expression_type: T.X1.EMOJI,
            expression_id: n.id,
            expression_name: i,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated,
        });
    };
(0, i.throttle)(
    (e) => {
        let { emojiSuggestions: t, analyticsLocation: n } = e;
        s.ZP.trackWithMetadata(S.rMx.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: S.Z9p.EMOJI,
            suggestion_quantity: t.results.length,
            custom_quantity: t.results.filter((e) => {
                let { emoji: t } = e;
                return null != t.id;
            }).length,
            load_id: t.loadId,
            location: n,
        });
    },
    g.Z.Millis.HALF_SECOND,
    {
        leading: !1,
        trailing: !0,
    },
);
let U = (e, t) => (e.type !== v.En.GUILD ? e.id : null != t ? t.name : ""),
    G = (e, t) => {
        switch (e) {
            case v.UX.TOP_GUILD_EMOJI:
                return A.intl.formatToPlainString(A.t.W6Wi1X, { guildName: t });
            case v.UX.RECENT:
                return A.intl.string(A.t["5TvaSm"]);
            case v.UX.FAVORITES:
                return A.intl.string(A.t.y3LQCG);
            case v.UX.ACTIVITY:
                return A.intl.string(A.t.O783tR);
            case v.UX.FLAGS:
                return A.intl.string(A.t.vvaizu);
            case v.UX.FOOD:
                return A.intl.string(A.t.ldm9aY);
            case v.UX.NATURE:
                return A.intl.string(A.t.egIBDH);
            case v.UX.OBJECTS:
                return A.intl.string(A.t.gWm7Mk);
            case v.UX.PEOPLE:
                return A.intl.string(A.t.GX594D);
            case v.UX.SYMBOLS:
                return A.intl.string(A.t.QXMYAb);
            case v.UX.TRAVEL:
                return A.intl.string(A.t.w33hIP);
            case v.UX.PREMIUM_UPSELL:
                return A.intl.string(A.t.pAF6xE);
            case v.UX.SOUNDMOJI:
                return A.intl.string(A.t.f0Ezmv);
            default:
                return null != t ? t : e;
        }
    };
function Z(e, t, n, i) {
    r.useEffect(() => {
        f.DZ.loadIfNecessary();
    }, []);
    let a = (0, I.Gt)(n);
    return (0, o.e7)(
        [l.ZP],
        () => {
            let r = e.replace(/^:/, "").replace(/:$/, "");
            return "" === r
                ? null
                : l.ZP.searchWithoutFetchingLatest({
                      channel: t,
                      query: r,
                      count: 0,
                      intention: n,
                      includeExternalGuilds: a,
                      showOnlyUnicode: i,
                  });
        },
        [e, t, n, a, i],
        o.pF,
    );
}
function F(e) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function B(e) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, o.Wu)([l.ZP], () =>
            l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}
function V(e) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function H(e, t) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, o.e7)(
            [l.ZP],
            () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t),
        )
    );
}
function Y(e) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function W(e, t, n) {
    if (null == n) return v.t0.NONE;
    let r = e.map((e) => {
            var t, n;
            return null != (n = null != (t = e.id) ? t : e.uniqueName) ? n : e.name;
        }),
        i = t.map((e) => e.id);
    return r.includes(n) ? v.t0.TOP_GUILD_EMOJI : i.includes(n) ? v.t0.NEWLY_ADDED_EMOJI : v.t0.NONE;
}
function K(e, t) {
    return e === I.Hz.REACTION
        ? t
            ? A.intl.string(A.t["h7ES+n"])
            : A.intl.string(A.t["6any2A"])
        : A.intl.string(A.t.KgK5qg);
}
