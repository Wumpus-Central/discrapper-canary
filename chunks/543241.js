n.d(t, {
    A3: () => P,
    C1: () => H,
    DV: () => B,
    Gn: () => M,
    IP: () => Y,
    J1: () => j,
    MZ: () => W,
    NJ: () => Z,
    Nf: () => U,
    PC: () => w,
    Y1: () => G,
    fe: () => k,
    jA: () => D,
    kI: () => R,
    nV: () => K,
    q5: () => V,
    to: () => x,
    wC: () => F,
    y$: () => L
}),
    n(733860),
    n(653041),
    n(47120),
    n(627341),
    n(757143),
    n(301563);
var r = n(192379),
    i = n(392711),
    o = n(278074),
    a = n(442837),
    s = n(367907),
    l = n(339085),
    c = n(689789),
    u = n(407477),
    d = n(558217),
    f = n(125900),
    _ = n(675478),
    p = n(430824),
    h = n(771845),
    m = n(594174),
    g = n(626135),
    E = n(70956),
    b = n(176354),
    y = n(111361),
    v = n(304852),
    O = n(199257),
    I = n(149203),
    S = n(981631),
    T = n(185923),
    N = n(957825),
    A = n(474936),
    C = n(388032);
let R = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, d.O)(n);
        let o = (0, T.Gt)(e),
            s = F(n),
            _ = V(n),
            { canSplitFrecencyList: g } = (0, c.S)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            E = (0, u.p3)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            });
        u.Xb.useExperiment({ location: 'useEmojiCategories' }, { autoTrackExposure: !0 });
        let S = Z(n),
            { topEmojis: N, newlyAddedEmojis: A } = (0, O.Z)(n, e),
            { allEmojis: R } = (0, v.Z)({
                topEmojis: N,
                newlyAddedEmojis: A
            }),
            P = (0, a.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
            w = (0, a.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.getGuild(n)) ? void 0 : e.name;
            }),
            D = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            L = (0, y.I5)(D),
            x = (0, f.g2)({ location: 'useEmojiCategories' });
        return r.useMemo(() => {
            let r = P.getGroupedCustomEmoji(),
                a = h.ZP.getFlattenedGuildIds(),
                c = [],
                u = {
                    type: I.En.SOUNDMOJI,
                    name: C.NW.string(C.t.f0Ezmp),
                    id: I.UX.SOUNDMOJI,
                    isNitroLocked: !1
                },
                d = (r) =>
                    b.ZP.getEmojiUnavailableReasons({
                        categoryEmojis: r,
                        channel: t,
                        guildId: n,
                        intention: e
                    });
            return (
                ((e, t) => {
                    for (let i of e) {
                        let e;
                        if ((t === I.En.GUILD && (e = p.Z.getGuild(i)), null == e)) continue;
                        let o = null == r ? void 0 : r[e.id];
                        if (null == o || 0 === o.length) continue;
                        let { emojisDisabled: a, emojisUnfiltered: s, emojisPremiumLockedCount: l, emojiNitroLocked: u } = d(o);
                        if (0 === s.length) continue;
                        let f = null;
                        t === I.En.GUILD &&
                            (f = {
                                type: I.En.GUILD,
                                guild: e,
                                isNitroLocked: !L && u && l === o.length,
                                emojis: o,
                                emojisDisabled: a
                            }),
                            null != f && (e.id === n ? c.unshift(f) : c.push(f));
                    }
                })(a, I.En.GUILD),
                l.ZP.categories.reduce(
                    (t, r) => {
                        if (r === I.UX.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = d(R);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: I.En.TOP_GUILD_EMOJI,
                                id: r,
                                name: C.NW.formatToPlainString(C.t.W6Wi1d, { guildName: w }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e
                            });
                        } else if (r === I.UX.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: i } = d(e === T.Hz.REACTION && (g || E) ? _ : s);
                            if (null == i || 0 === i.length) return t;
                            t.push({
                                type: I.En.RECENT,
                                id: r,
                                name: C.NW.string(C.t['5TvaSk']),
                                isNitroLocked: !1,
                                emojis: i,
                                emojisDisabled: n
                            });
                        } else if (r === I.UX.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = d(S);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: I.En.FAVORITES,
                                id: r,
                                name: C.NW.string(C.t.y3LQCA),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e
                            });
                        } else if (r === I.UX.CUSTOM) {
                            let e = c;
                            o || (e = c.filter((e) => e.type === I.En.GUILD && e.guild.id === n)), t.push(...e);
                        } else
                            t.push({
                                type: I.En.UNICODE,
                                id: r,
                                name: r,
                                isNitroLocked: !1
                            });
                        return t;
                    },
                    x && i ? [u] : []
                )
            );
        }, [P, t, n, e, L, R, w, g, E, _, s, S, o, x, i]);
    },
    P = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        g.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? S.ZY5.GUILD_CHANNEL : S.ZY5.DM_CHANNEL,
            location_section: null != e ? S.jXE.EMOJI_PICKER_POPOUT : S.jXE.CUSTOM_STATUS_MODAL
        });
    },
    w = (e, t) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_STARTED, {
            search_type: null != t && t === T.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            location: e
        });
    },
    D = (e, t, n, r, i) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === T.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n
        });
    },
    L = (e) => {
        var t, n, r;
        let { emoji: i, emojiSuggestions: a, searchQuery: l, isLocked: c, location: u, intention: d, index: f } = e,
            _ = null != (r = i.uniqueName) ? r : i.name,
            p = (0, o.EQ)(d)
                .with(T.Hz.REACTION, () => S.aib.EMOJI_REACTION)
                .with(T.Hz.AUTO_SUGGESTION, () => S.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => S.aib.EMOJI);
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SELECTED, {
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
    x = (e, t) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_EMPTY, {
            search_type: S.aib.EMOJI,
            query: t,
            location: e
        });
    },
    M = (e) => {
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
    k = (e) => {
        var t;
        let n,
            { emoji: r, location: i, pickerIntention: o, category: a, subCategory: l = I.t0.NONE, position: c, newlyAddedHighlight: u, isBurstReaction: d } = e;
        switch (o) {
            case T.Hz.REACTION:
                n = d ? A.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : A.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case T.Hz.STATUS:
                n = A.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                n = A.cd.EMOJI_PICKER_EMOJI_CLICKED;
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
            expression_picker_section: a,
            expression_section: null == l ? void 0 : l.toString(),
            emoji_position: c,
            newly_added_highlight: u,
            is_burst: d
        });
    },
    j = (e) => {
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
    E.Z.Millis.HALF_SECOND,
    {
        leading: !1,
        trailing: !0
    }
);
let U = (e, t) => (e.type !== I.En.GUILD ? e.id : null != t ? t.toString() : ''),
    G = (e, t) => {
        switch (e) {
            case I.UX.TOP_GUILD_EMOJI:
                return C.NW.formatToPlainString(C.t.W6Wi1d, { guildName: t });
            case I.UX.RECENT:
                return C.NW.string(C.t['5TvaSk']);
            case I.UX.FAVORITES:
                return C.NW.string(C.t.y3LQCA);
            case I.UX.ACTIVITY:
                return C.NW.string(C.t.O783tb);
            case I.UX.FLAGS:
                return C.NW.string(C.t.vvaizs);
            case I.UX.FOOD:
                return C.NW.string(C.t.ldm9aW);
            case I.UX.NATURE:
                return C.NW.string(C.t.egIBDA);
            case I.UX.OBJECTS:
                return C.NW.string(C.t.gWm7Mj);
            case I.UX.PEOPLE:
                return C.NW.string(C.t.GX594O);
            case I.UX.SYMBOLS:
                return C.NW.string(C.t.QXMYAQ);
            case I.UX.TRAVEL:
                return C.NW.string(C.t.w33hIC);
            case I.UX.PREMIUM_UPSELL:
                return C.NW.string(C.t.pAF6xM);
            case I.UX.SOUNDMOJI:
                return C.NW.string(C.t.f0Ezmp);
            default:
                return null != t ? t : e;
        }
    };
function B(e, t, n) {
    r.useEffect(() => {
        _.DZ.loadIfNecessary();
    }, []);
    let i = (0, T.Gt)(n);
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
                      includeExternalGuilds: i
                  });
        },
        [t, n, e, i],
        a.pF
    );
}
function F(e) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function V(e) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function Z(e) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function H(e, t) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, a.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    );
}
function W(e) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function Y(e, t, n) {
    if (null == n) return I.t0.NONE;
    let r = e.map((e) => {
            var t, n;
            return null != (n = null != (t = e.id) ? t : e.uniqueName) ? n : e.name;
        }),
        i = t.map((e) => e.id);
    return r.includes(n) ? I.t0.TOP_GUILD_EMOJI : i.includes(n) ? I.t0.NEWLY_ADDED_EMOJI : I.t0.NONE;
}
function K(e, t) {
    return e === T.Hz.REACTION ? (t ? C.NW.string(C.t['h7ES+v']) : C.NW.string(C.t['6any2N'])) : C.NW.string(C.t.KgK5qq);
}
