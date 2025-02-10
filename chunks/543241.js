n.d(t, {
    A3: () => D,
    C1: () => H,
    DV: () => Z,
    Gn: () => M,
    IP: () => W,
    J1: () => U,
    MZ: () => Y,
    NJ: () => j,
    Nf: () => G,
    PC: () => L,
    Y1: () => B,
    fe: () => k,
    jA: () => x,
    kI: () => O,
    nV: () => K,
    q5: () => V,
    to: () => w,
    wC: () => F,
    y$: () => P
}),
    n(733860),
    n(653041),
    n(47120),
    n(724458),
    n(627341),
    n(757143);
var i = n(192379),
    r = n(392711),
    a = n(278074),
    s = n(442837),
    o = n(367907),
    l = n(339085),
    u = n(689789),
    c = n(407477),
    d = n(558217),
    f = n(125900),
    _ = n(675478),
    p = n(430824),
    h = n(771845),
    m = n(594174),
    g = n(626135),
    E = n(70956),
    v = n(176354),
    y = n(111361),
    I = n(304852),
    T = n(199257),
    b = n(149203),
    S = n(981631),
    A = n(185923),
    N = n(957825),
    C = n(474936),
    R = n(388032);
let O = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId(),
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, d.O)(n);
        let a = (0, A.Gt)(e),
            o = F(n),
            _ = V(n),
            { canSplitFrecencyList: g } = (0, u.S)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            E = (0, c.p3)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            });
        c.Xb.useExperiment({ location: 'useEmojiCategories' }, { autoTrackExposure: !0 });
        let S = j(n),
            { topEmojis: N, newlyAddedEmojis: C } = (0, T.Z)(n, e),
            { allEmojis: O } = (0, I.Z)({
                topEmojis: N,
                newlyAddedEmojis: C
            }),
            D = (0, s.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
            L = (0, s.e7)([p.Z], () => {
                var e;
                return null === (e = p.Z.getGuild(n)) || void 0 === e ? void 0 : e.name;
            }),
            x = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
            P = (0, y.I5)(x),
            w = (0, f.g2)({ location: 'useEmojiCategories' });
        return i.useMemo(() => {
            let i = D.getGroupedCustomEmoji(),
                s = h.ZP.getFlattenedGuildIds(),
                u = [],
                c = {
                    type: b.En.SOUNDMOJI,
                    name: R.intl.string(R.t.f0Ezmp),
                    id: b.UX.SOUNDMOJI,
                    isNitroLocked: !1
                },
                d = (i, r) =>
                    v.ZP.getEmojiUnavailableReasons({
                        categoryEmojis: i,
                        channel: t,
                        guildId: n,
                        intention: e,
                        computeUnfiltered: r
                    });
            return (
                ((e, r) => {
                    for (let a of e) {
                        let e;
                        if ((r === b.En.GUILD && (e = p.Z.getGuild(a)), null == e)) continue;
                        let s = null == i ? void 0 : i[e.id];
                        if (null == s || 0 === s.length) continue;
                        let { emojisDisabled: o, emojisFilteredCount: l, emojisPremiumLockedCount: c, emojiNitroLocked: f } = d(s, !1);
                        if (null != t && s.length === l) continue;
                        let _ = null;
                        r === b.En.GUILD &&
                            (_ = {
                                type: b.En.GUILD,
                                guild: e,
                                isNitroLocked: !P && f && c === s.length,
                                emojis: s,
                                emojisDisabled: o
                            }),
                            null != _ && (e.id === n ? u.unshift(_) : u.push(_));
                    }
                })(s, b.En.GUILD),
                l.ZP.categories.reduce(
                    (t, i) => {
                        if (i === b.UX.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = d(O, !0);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: b.En.TOP_GUILD_EMOJI,
                                id: i,
                                name: R.intl.formatToPlainString(R.t.W6Wi1d, { guildName: L }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e
                            });
                        } else if (i === b.UX.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: r } = d(e === A.Hz.REACTION && (g || E) ? _ : o, !0);
                            if (null == r || 0 === r.length) return t;
                            t.push({
                                type: b.En.RECENT,
                                id: i,
                                name: R.intl.string(R.t['5TvaSk']),
                                isNitroLocked: !1,
                                emojis: r,
                                emojisDisabled: n
                            });
                        } else if (i === b.UX.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = d(S, !0);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: b.En.FAVORITES,
                                id: i,
                                name: R.intl.string(R.t.y3LQCA),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e
                            });
                        } else if (i === b.UX.CUSTOM) {
                            let e = u;
                            a || (e = u.filter((e) => e.type === b.En.GUILD && e.guild.id === n)), t.push(...e);
                        } else
                            t.push({
                                type: b.En.UNICODE,
                                id: i,
                                name: i,
                                isNitroLocked: !1
                            });
                        return t;
                    },
                    w && r ? [c] : []
                )
            );
        }, [D, t, n, e, P, O, L, g, E, _, o, S, a, w, r]);
    },
    D = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        g.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? S.ZY5.GUILD_CHANNEL : S.ZY5.DM_CHANNEL,
            location_section: null != e ? S.jXE.EMOJI_PICKER_POPOUT : S.jXE.CUSTOM_STATUS_MODAL
        });
    },
    L = (e, t) => {
        o.ZP.trackWithMetadata(S.rMx.SEARCH_STARTED, {
            search_type: null != t && t === A.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            location: e
        });
    },
    x = (e, t, n, i, r) => {
        o.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != r && r === A.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: i,
            location: n
        });
    },
    P = (e) => {
        var t, n, i;
        let { emoji: r, emojiSuggestions: s, searchQuery: l, isLocked: u, location: c, intention: d, index: f } = e,
            _ = null !== (i = r.uniqueName) && void 0 !== i ? i : r.name,
            p = (0, a.EQ)(d)
                .with(A.Hz.REACTION, () => S.aib.EMOJI_REACTION)
                .with(A.Hz.AUTO_SUGGESTION, () => S.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => S.aib.EMOJI);
        o.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SELECTED, {
            search_type: p,
            location: c,
            expression_guild_id: r.guildId,
            emoji_id: r.id,
            emoji_name: _,
            is_custom: null != r.id,
            is_animated: r.animated,
            is_locked: u,
            query: l,
            index_num: f,
            load_id: null == s ? void 0 : s.loadId,
            total_results: null == s ? void 0 : null === (t = s.results) || void 0 === t ? void 0 : t.length,
            emoji_suggestion_ids:
                null == s
                    ? void 0
                    : null === (n = s.results) || void 0 === n
                      ? void 0
                      : n
                            .map((e) => {
                                let { emoji: t } = e;
                                return t.id;
                            })
                            .filter((e) => null != e)
        });
    },
    w = (e, t) => {
        o.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_EMPTY, {
            search_type: S.aib.EMOJI,
            query: t,
            location: e
        });
    },
    M = (e) => {
        let { emoji: t, subCategory: n, position: i, newlyAddedHighlight: r } = e;
        o.ZP.trackWithMetadata(S.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: null == n ? void 0 : n.toString(),
            newly_added_highlight: r,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: i
        });
    },
    k = (e) => {
        var t;
        let n,
            { emoji: i, location: r, pickerIntention: a, category: s, subCategory: l = b.t0.NONE, position: u, newlyAddedHighlight: c, isBurstReaction: d } = e;
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
        let f = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
        o.ZP.trackWithMetadata(S.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: n,
            location: r,
            expression_id: i.id,
            expression_name: f,
            expression_guild_id: i.guildId,
            is_custom: null != i.id,
            is_animated: i.animated,
            expression_picker_section: s,
            expression_section: null == l ? void 0 : l.toString(),
            emoji_position: u,
            newly_added_highlight: c,
            is_burst: d
        });
    },
    U = (e) => {
        var t;
        let { emoji: n, location: i } = e,
            r = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
        o.ZP.trackWithMetadata(S.rMx.EXPRESSION_FAVORITED, {
            location: i,
            expression_type: N.X1.EMOJI,
            expression_id: n.id,
            expression_name: r,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated
        });
    };
(0, r.throttle)(
    (e) => {
        let { emojiSuggestions: t, analyticsLocation: n } = e;
        o.ZP.trackWithMetadata(S.rMx.AUTO_SUGGEST_DISPLAYED, {
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
let G = (e, t) => (e.type === b.En.GUILD ? (null != t ? t.toString() : '') : e.id),
    B = (e, t) => {
        switch (e) {
            case b.UX.TOP_GUILD_EMOJI:
                return R.intl.formatToPlainString(R.t.W6Wi1d, { guildName: t });
            case b.UX.RECENT:
                return R.intl.string(R.t['5TvaSk']);
            case b.UX.FAVORITES:
                return R.intl.string(R.t.y3LQCA);
            case b.UX.ACTIVITY:
                return R.intl.string(R.t.O783tb);
            case b.UX.FLAGS:
                return R.intl.string(R.t.vvaizs);
            case b.UX.FOOD:
                return R.intl.string(R.t.ldm9aW);
            case b.UX.NATURE:
                return R.intl.string(R.t.egIBDA);
            case b.UX.OBJECTS:
                return R.intl.string(R.t.gWm7Mj);
            case b.UX.PEOPLE:
                return R.intl.string(R.t.GX594O);
            case b.UX.SYMBOLS:
                return R.intl.string(R.t.QXMYAQ);
            case b.UX.TRAVEL:
                return R.intl.string(R.t.w33hIC);
            case b.UX.PREMIUM_UPSELL:
                return R.intl.string(R.t.pAF6xM);
            case b.UX.SOUNDMOJI:
                return R.intl.string(R.t.f0Ezmp);
            default:
                return null != t ? t : e;
        }
    };
function Z(e, t, n) {
    i.useEffect(() => {
        _.DZ.loadIfNecessary();
    }, []);
    let r = (0, A.Gt)(n);
    return (0, s.e7)(
        [l.ZP],
        () => {
            let i = e.replace(/^:/, '').replace(/:$/, '');
            return '' === i
                ? null
                : l.ZP.searchWithoutFetchingLatest({
                      channel: t,
                      query: i,
                      count: 0,
                      intention: n,
                      includeExternalGuilds: r
                  });
        },
        [t, n, e, r],
        s.pF
    );
}
function F(e) {
    return (
        i.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function V(e) {
    return (
        i.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function j(e) {
    return (
        i.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function H(e, t) {
    return (
        i.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    );
}
function Y(e) {
    return (
        i.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function W(e, t, n) {
    if (null == n) return b.t0.NONE;
    let i = e.map((e) => {
            var t, n;
            return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name;
        }),
        r = t.map((e) => e.id);
    return i.includes(n) ? b.t0.TOP_GUILD_EMOJI : r.includes(n) ? b.t0.NEWLY_ADDED_EMOJI : b.t0.NONE;
}
function K(e, t) {
    return e === A.Hz.REACTION ? (t ? R.intl.string(R.t['h7ES+v']) : R.intl.string(R.t['6any2N'])) : R.intl.string(R.t.KgK5qq);
}
