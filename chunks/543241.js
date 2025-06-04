n.d(t, {
    A3: () => D,
    C1: () => W,
    DV: () => V,
    Gn: () => j,
    IP: () => z,
    J1: () => G,
    MZ: () => K,
    NJ: () => Y,
    Nf: () => B,
    PC: () => L,
    Y1: () => F,
    ZF: () => w,
    fe: () => U,
    jA: () => x,
    kI: () => R,
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
    n(35282);
var r = n(73800),
    i = n(392711),
    o = n(278074),
    a = n(442837),
    s = n(367907),
    l = n(339085),
    c = n(689789),
    u = n(407477),
    d = n(633302),
    f = n(558217),
    _ = n(125900),
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
    S = n(149203),
    T = n(981631),
    A = n(185923),
    N = n(957825),
    C = n(474936),
    P = n(388032);
let R = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, f.O)(n);
        let o = (0, A.Gt)(e),
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
            { topEmojis: T, newlyAddedEmojis: N } = (0, I.Z)(n, e),
            { allEmojis: C } = (0, v.Z)({
                topEmojis: T,
                newlyAddedEmojis: N
            }),
            R = (0, a.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
            w = (0, a.e7)([h.Z], () => {
                var e;
                return null == (e = h.Z.getGuild(n)) ? void 0 : e.name;
            }),
            D = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            L = (0, O.I5)(D),
            x = (0, _.g2)({ location: 'useEmojiCategories' });
        return r.useMemo(() => {
            let r = R.getGroupedCustomEmoji(),
                a = m.ZP.getFlattenedGuildIds(),
                c = [],
                u = {
                    type: S.En.SOUNDMOJI,
                    name: P.intl.string(P.t.f0Ezmp),
                    id: S.UX.SOUNDMOJI,
                    isNitroLocked: !1
                },
                f = (r) =>
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
                        if ((t === S.En.GUILD && (e = h.Z.getGuild(i)), null == e)) continue;
                        let o = null == r ? void 0 : r[e.id];
                        if (null == o || 0 === o.length) continue;
                        let { emojisDisabled: a, emojisUnfiltered: s, emojisPremiumLockedCount: l, emojiNitroLocked: u } = f(o);
                        if (0 === s.length) continue;
                        let d = null;
                        t === S.En.GUILD &&
                            (d = {
                                type: S.En.GUILD,
                                guild: e,
                                isNitroLocked: !L && u && l === o.length,
                                emojis: o,
                                emojisDisabled: a
                            }),
                            null != d && (e.id === n ? c.unshift(d) : c.push(d));
                    }
                })(a, S.En.GUILD),
                l.ZP.categories.reduce(
                    (t, r) => {
                        if (r === S.UX.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = f(C);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: S.En.TOP_GUILD_EMOJI,
                                id: r,
                                name: P.intl.formatToPlainString(P.t.W6Wi1d, { guildName: w }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e
                            });
                        } else if (r === S.UX.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: i } = f(e === A.Hz.REACTION && (p || E) ? d : s);
                            if (null == i || 0 === i.length) return t;
                            t.push({
                                type: S.En.RECENT,
                                id: r,
                                name: P.intl.string(P.t['5TvaSk']),
                                isNitroLocked: !1,
                                emojis: i,
                                emojisDisabled: n
                            });
                        } else if (r === S.UX.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = f(b);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: S.En.FAVORITES,
                                id: r,
                                name: P.intl.string(P.t.y3LQCA),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e
                            });
                        } else if (r === S.UX.CUSTOM) {
                            let e = c;
                            o || (e = c.filter((e) => e.type === S.En.GUILD && e.guild.id === n)), t.push(...e);
                        } else
                            t.push({
                                type: S.En.UNICODE,
                                id: r,
                                name: r,
                                isNitroLocked: !1
                            });
                        return t;
                    },
                    x && i ? [u] : []
                )
            );
        }, [R, t, n, e, L, C, w, p, E, d, s, b, o, x, i]);
    },
    w = () =>
        d.ZP.getCategories().map((e) => ({
            type: S.En.UNICODE,
            id: e,
            name: e,
            isNitroLocked: !1
        })),
    D = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        E.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? T.ZY5.GUILD_CHANNEL : T.ZY5.DM_CHANNEL,
            location_section: null != e ? T.jXE.EMOJI_PICKER_POPOUT : T.jXE.CUSTOM_STATUS_MODAL
        });
    },
    L = (e, t) => {
        s.ZP.trackWithMetadata(T.rMx.SEARCH_STARTED, {
            search_type: null != t && t === A.Hz.REACTION ? T.aib.EMOJI_REACTION : T.aib.EMOJI,
            location: e
        });
    },
    x = (e, t, n, r, i) => {
        s.ZP.trackWithMetadata(T.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === A.Hz.REACTION ? T.aib.EMOJI_REACTION : T.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n
        });
    },
    k = (e) => {
        var t, n, r;
        let { emoji: i, emojiSuggestions: a, searchQuery: l, isLocked: c, location: u, intention: d, index: f } = e,
            _ = null != (r = i.uniqueName) ? r : i.name,
            p = (0, o.EQ)(d)
                .with(A.Hz.REACTION, () => T.aib.EMOJI_REACTION)
                .with(A.Hz.AUTO_SUGGESTION, () => T.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => T.aib.EMOJI);
        s.ZP.trackWithMetadata(T.rMx.SEARCH_RESULT_SELECTED, {
            search_type: p,
            location: u,
            expression_guild_id: i.guildId,
            emoji_id: i.id,
            emoji_name: _,
            is_custom: null != i.id,
            is_animated: i.animated,
            is_locked: c,
            query: l,
            index_num: f,
            load_id: null == a ? void 0 : a.loadId,
            total_results: null == a || null == (t = a.results) ? void 0 : t.length,
            emoji_suggestion_ids:
                null == a || null == (n = a.results)
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
        s.ZP.trackWithMetadata(T.rMx.SEARCH_RESULT_EMPTY, {
            search_type: T.aib.EMOJI,
            query: t,
            location: e
        });
    },
    j = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        s.ZP.trackWithMetadata(T.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
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
            { emoji: r, location: i, pickerIntention: o, category: a, subCategory: l = S.t0.NONE, position: c, newlyAddedHighlight: u, isBurstReaction: d } = e;
        switch (o) {
            case A.Hz.REACTION:
                n = d ? C.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : C.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case A.Hz.STATUS:
                n = C.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                n = C.cd.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let f = null != (t = r.uniqueName) ? t : r.name;
        s.ZP.trackWithMetadata(T.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: n,
            location: i,
            expression_id: r.id,
            expression_name: f,
            expression_guild_id: r.guildId,
            is_custom: null != r.id,
            is_animated: r.animated,
            expression_picker_section: a,
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
        s.ZP.trackWithMetadata(T.rMx.EXPRESSION_FAVORITED, {
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
        s.ZP.trackWithMetadata(T.rMx.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: T.Z9p.EMOJI,
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
let B = (e, t) => (e.type !== S.En.GUILD ? e.id : null != t ? t.toString() : ''),
    F = (e, t) => {
        switch (e) {
            case S.UX.TOP_GUILD_EMOJI:
                return P.intl.formatToPlainString(P.t.W6Wi1d, { guildName: t });
            case S.UX.RECENT:
                return P.intl.string(P.t['5TvaSk']);
            case S.UX.FAVORITES:
                return P.intl.string(P.t.y3LQCA);
            case S.UX.ACTIVITY:
                return P.intl.string(P.t.O783tb);
            case S.UX.FLAGS:
                return P.intl.string(P.t.vvaizs);
            case S.UX.FOOD:
                return P.intl.string(P.t.ldm9aW);
            case S.UX.NATURE:
                return P.intl.string(P.t.egIBDA);
            case S.UX.OBJECTS:
                return P.intl.string(P.t.gWm7Mj);
            case S.UX.PEOPLE:
                return P.intl.string(P.t.GX594O);
            case S.UX.SYMBOLS:
                return P.intl.string(P.t.QXMYAQ);
            case S.UX.TRAVEL:
                return P.intl.string(P.t.w33hIC);
            case S.UX.PREMIUM_UPSELL:
                return P.intl.string(P.t.pAF6xM);
            case S.UX.SOUNDMOJI:
                return P.intl.string(P.t.f0Ezmp);
            default:
                return null != t ? t : e;
        }
    };
function V(e, t, n, i) {
    r.useEffect(() => {
        p.DZ.loadIfNecessary();
    }, []);
    let o = (0, A.Gt)(n);
    return (0, a.e7)(
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
                      includeExternalGuilds: o,
                      showOnlyUnicode: i
                  });
        },
        [e, t, n, o, i],
        a.pF
    );
}
function Z(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function H(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function Y(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function W(e, t) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    );
}
function K(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function z(e, t, n) {
    if (null == n) return S.t0.NONE;
    let r = e.map((e) => {
            var t, n;
            return null != (n = null != (t = e.id) ? t : e.uniqueName) ? n : e.name;
        }),
        i = t.map((e) => e.id);
    return r.includes(n) ? S.t0.TOP_GUILD_EMOJI : i.includes(n) ? S.t0.NEWLY_ADDED_EMOJI : S.t0.NONE;
}
function q(e, t) {
    return e === A.Hz.REACTION ? (t ? P.intl.string(P.t['h7ES+v']) : P.intl.string(P.t['6any2N'])) : P.intl.string(P.t.KgK5qq);
}
