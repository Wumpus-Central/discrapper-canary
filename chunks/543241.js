(n.d(t, {
    A3: () => D,
    C1: () => W,
    DV: () => F,
    Gn: () => j,
    IP: () => z,
    J1: () => G,
    MZ: () => K,
    NJ: () => Y,
    Nf: () => B,
    PC: () => L,
    Y1: () => V,
    ZF: () => w,
    fe: () => U,
    jA: () => x,
    kI: () => P,
    nV: () => q,
    q5: () => H,
    to: () => M,
    wC: () => Z,
    y$: () => k
}),
    n(290780),
    n(539854),
    n(388685),
    n(314940),
    n(704826),
    n(35282));
var r = n(73800),
    i = n(392711),
    a = n(278074),
    o = n(442837),
    s = n(367907),
    l = n(339085),
    c = n(689789),
    u = n(407477),
    d = n(633302),
    _ = n(558217),
    f = n(125900),
    p = n(675478),
    h = n(430824),
    m = n(771845),
    g = n(594174),
    E = n(626135),
    b = n(70956),
    y = n(176354),
    O = n(111361),
    v = n(304852),
    I = n(199257),
    T = n(149203),
    S = n(981631),
    A = n(185923),
    N = n(957825),
    C = n(474936),
    R = n(388032);
let P = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, _.O)(n);
        let a = (0, A.Gt)(e),
            s = Z(n),
            d = H(n),
            { canSplitFrecencyList: p } = (0, c.S)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            E = (0, u.p3)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            });
        u.Xb.useExperiment({ location: 'useEmojiCategories' }, { autoTrackExposure: !0 });
        let b = Y(n),
            { topEmojis: S, newlyAddedEmojis: N } = (0, I.Z)(n, e),
            { allEmojis: C } = (0, v.Z)({
                topEmojis: S,
                newlyAddedEmojis: N
            }),
            P = (0, o.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
            w = (0, o.e7)([h.Z], () => {
                var e;
                return null == (e = h.Z.getGuild(n)) ? void 0 : e.name;
            }),
            D = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
            L = (0, O.I5)(D),
            x = (0, f.g2)({ location: 'useEmojiCategories' });
        return r.useMemo(() => {
            let r = P.getGroupedCustomEmoji(),
                o = m.ZP.getFlattenedGuildIds(),
                c = [],
                u = {
                    type: T.En.SOUNDMOJI,
                    name: R.intl.string(R.t.f0Ezmp),
                    id: T.UX.SOUNDMOJI,
                    isNitroLocked: !1
                },
                _ = (r) =>
                    y.ZP.getEmojiUnavailableReasons({
                        categoryEmojis: r,
                        channel: t,
                        guildId: n,
                        intention: e
                    });
            return (
                ((e, t) => {
                    for (let i of e) {
                        let e;
                        if ((t === T.En.GUILD && (e = h.Z.getGuild(i)), null == e)) continue;
                        let a = null == r ? void 0 : r[e.id];
                        if (null == a || 0 === a.length) continue;
                        let { emojisDisabled: o, emojisUnfiltered: s, emojisPremiumLockedCount: l, emojiNitroLocked: u } = _(a);
                        if (0 === s.length) continue;
                        let d = null;
                        (t === T.En.GUILD &&
                            (d = {
                                type: T.En.GUILD,
                                guild: e,
                                isNitroLocked: !L && u && l === a.length,
                                emojis: a,
                                emojisDisabled: o
                            }),
                            null != d && (e.id === n ? c.unshift(d) : c.push(d)));
                    }
                })(o, T.En.GUILD),
                l.ZP.categories.reduce(
                    (t, r) => {
                        if (r === T.UX.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = _(C);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: T.En.TOP_GUILD_EMOJI,
                                id: r,
                                name: R.intl.formatToPlainString(R.t.W6Wi1d, { guildName: w }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e
                            });
                        } else if (r === T.UX.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: i } = _(e === A.Hz.REACTION && (p || E) ? d : s);
                            if (null == i || 0 === i.length) return t;
                            t.push({
                                type: T.En.RECENT,
                                id: r,
                                name: R.intl.string(R.t['5TvaSk']),
                                isNitroLocked: !1,
                                emojis: i,
                                emojisDisabled: n
                            });
                        } else if (r === T.UX.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = _(b);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: T.En.FAVORITES,
                                id: r,
                                name: R.intl.string(R.t.y3LQCA),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e
                            });
                        } else if (r === T.UX.CUSTOM) {
                            let e = c;
                            (a || (e = c.filter((e) => e.type === T.En.GUILD && e.guild.id === n)), t.push(...e));
                        } else
                            t.push({
                                type: T.En.UNICODE,
                                id: r,
                                name: r,
                                isNitroLocked: !1
                            });
                        return t;
                    },
                    x && i ? [u] : []
                )
            );
        }, [P, t, n, e, L, C, w, p, E, d, s, b, a, x, i]);
    },
    w = () =>
        d.ZP.getCategories().map((e) => ({
            type: T.En.UNICODE,
            id: e,
            name: e,
            isNitroLocked: !1
        })),
    D = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        E.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? S.ZY5.GUILD_CHANNEL : S.ZY5.DM_CHANNEL,
            location_section: null != e ? S.jXE.EMOJI_PICKER_POPOUT : S.jXE.CUSTOM_STATUS_MODAL
        });
    },
    L = (e, t) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_STARTED, {
            search_type: null != t && t === A.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            location: e
        });
    },
    x = (e, t, n, r, i) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === A.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n
        });
    },
    k = (e) => {
        var t, n, r;
        let { emoji: i, emojiSuggestions: o, searchQuery: l, isLocked: c, location: u, intention: d, index: _ } = e,
            f = null != (r = i.uniqueName) ? r : i.name,
            p = (0, a.EQ)(d)
                .with(A.Hz.REACTION, () => S.aib.EMOJI_REACTION)
                .with(A.Hz.AUTO_SUGGESTION, () => S.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => S.aib.EMOJI);
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SELECTED, {
            search_type: p,
            location: u,
            expression_guild_id: i.guildId,
            emoji_id: i.id,
            emoji_name: f,
            is_custom: null != i.id,
            is_animated: i.animated,
            is_locked: c,
            query: l,
            index_num: _,
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
                          .filter((e) => null != e)
        });
    },
    M = (e, t) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_EMPTY, {
            search_type: S.aib.EMOJI,
            query: t,
            location: e
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
            emoji_position: r
        });
    },
    U = (e) => {
        var t;
        let n,
            { emoji: r, location: i, pickerIntention: a, category: o, subCategory: l = T.t0.NONE, position: c, newlyAddedHighlight: u, isBurstReaction: d } = e;
        switch (a) {
            case A.Hz.REACTION:
                n = d ? C.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : C.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case A.Hz.STATUS:
                n = C.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                n = C.cd.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let _ = null != (t = r.uniqueName) ? t : r.name;
        s.ZP.trackWithMetadata(S.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: n,
            location: i,
            expression_id: r.id,
            expression_name: _,
            expression_guild_id: r.guildId,
            is_custom: null != r.id,
            is_animated: r.animated,
            expression_picker_section: o,
            expression_section: null == l ? void 0 : l.toString(),
            emoji_position: c,
            newly_added_highlight: u,
            is_burst: d
        });
    },
    G = (e) => {
        var t;
        let { emoji: n, location: r } = e,
            i = null != (t = n.uniqueName) ? t : n.name;
        s.ZP.trackWithMetadata(S.rMx.EXPRESSION_FAVORITED, {
            location: r,
            expression_type: N.X1.EMOJI,
            expression_id: n.id,
            expression_name: i,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated
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
            location: n
        });
    },
    b.Z.Millis.HALF_SECOND,
    {
        leading: !1,
        trailing: !0
    }
);
let B = (e, t) => (e.type !== T.En.GUILD ? e.id : null != t ? t.name : ''),
    V = (e, t) => {
        switch (e) {
            case T.UX.TOP_GUILD_EMOJI:
                return R.intl.formatToPlainString(R.t.W6Wi1d, { guildName: t });
            case T.UX.RECENT:
                return R.intl.string(R.t['5TvaSk']);
            case T.UX.FAVORITES:
                return R.intl.string(R.t.y3LQCA);
            case T.UX.ACTIVITY:
                return R.intl.string(R.t.O783tb);
            case T.UX.FLAGS:
                return R.intl.string(R.t.vvaizs);
            case T.UX.FOOD:
                return R.intl.string(R.t.ldm9aW);
            case T.UX.NATURE:
                return R.intl.string(R.t.egIBDA);
            case T.UX.OBJECTS:
                return R.intl.string(R.t.gWm7Mj);
            case T.UX.PEOPLE:
                return R.intl.string(R.t.GX594O);
            case T.UX.SYMBOLS:
                return R.intl.string(R.t.QXMYAQ);
            case T.UX.TRAVEL:
                return R.intl.string(R.t.w33hIC);
            case T.UX.PREMIUM_UPSELL:
                return R.intl.string(R.t.pAF6xM);
            case T.UX.SOUNDMOJI:
                return R.intl.string(R.t.f0Ezmp);
            default:
                return null != t ? t : e;
        }
    };
function F(e, t, n, i) {
    r.useEffect(() => {
        p.DZ.loadIfNecessary();
    }, []);
    let a = (0, A.Gt)(n);
    return (0, o.e7)(
        [l.ZP],
        () => {
            let r = e.replace(/^:/, '').replace(/:$/, '');
            return '' === r
                ? null
                : l.ZP.searchWithoutFetchingLatest({
                      channel: t,
                      query: r,
                      count: 0,
                      intention: n,
                      includeExternalGuilds: a,
                      showOnlyUnicode: i
                  });
        },
        [e, t, n, a, i],
        o.pF
    );
}
function Z(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function H(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function Y(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function W(e, t) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, o.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    );
}
function K(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function z(e, t, n) {
    if (null == n) return T.t0.NONE;
    let r = e.map((e) => {
            var t, n;
            return null != (n = null != (t = e.id) ? t : e.uniqueName) ? n : e.name;
        }),
        i = t.map((e) => e.id);
    return r.includes(n) ? T.t0.TOP_GUILD_EMOJI : i.includes(n) ? T.t0.NEWLY_ADDED_EMOJI : T.t0.NONE;
}
function q(e, t) {
    return e === A.Hz.REACTION ? (t ? R.intl.string(R.t['h7ES+v']) : R.intl.string(R.t['6any2N'])) : R.intl.string(R.t.KgK5qq);
}
