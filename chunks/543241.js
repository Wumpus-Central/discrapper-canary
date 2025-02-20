n.d(t, {
    A3: () => P,
    C1: () => H,
    DV: () => B,
    Gn: () => M,
    IP: () => Y,
    J1: () => j,
    MZ: () => W,
    NJ: () => V,
    Nf: () => U,
    PC: () => w,
    Y1: () => G,
    fe: () => k,
    jA: () => D,
    kI: () => R,
    nV: () => K,
    q5: () => F,
    to: () => L,
    wC: () => Z,
    y$: () => x
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
    p = n(675478),
    _ = n(430824),
    h = n(771845),
    m = n(594174),
    g = n(626135),
    E = n(70956),
    v = n(176354),
    b = n(111361),
    y = n(304852),
    O = n(199257),
    S = n(149203),
    I = n(981631),
    T = n(185923),
    N = n(957825),
    A = n(474936),
    C = n(388032);
let R = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, d.O)(n);
        let o = (0, T.Gt)(e),
            s = Z(n),
            p = F(n),
            { canSplitFrecencyList: g } = (0, c.S)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            E = (0, u.p3)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            });
        u.Xb.useExperiment({ location: 'useEmojiCategories' }, { autoTrackExposure: !0 });
        let I = V(n),
            { topEmojis: N, newlyAddedEmojis: A } = (0, O.Z)(n, e),
            { allEmojis: R } = (0, y.Z)({
                topEmojis: N,
                newlyAddedEmojis: A
            }),
            P = (0, a.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
            w = (0, a.e7)([_.Z], () => {
                var e;
                return null === (e = _.Z.getGuild(n)) || void 0 === e ? void 0 : e.name;
            }),
            D = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            x = (0, b.I5)(D),
            L = (0, f.g2)({ location: 'useEmojiCategories' });
        return r.useMemo(() => {
            let r = P.getGroupedCustomEmoji(),
                a = h.ZP.getFlattenedGuildIds(),
                c = [],
                u = {
                    type: S.En.SOUNDMOJI,
                    name: C.NW.string(C.t.f0Ezmp),
                    id: S.UX.SOUNDMOJI,
                    isNitroLocked: !1
                },
                d = (r) =>
                    v.ZP.getEmojiUnavailableReasons({
                        categoryEmojis: r,
                        channel: t,
                        guildId: n,
                        intention: e
                    });
            return (
                ((e, i) => {
                    for (let o of e) {
                        let e;
                        if ((i === S.En.GUILD && (e = _.Z.getGuild(o)), null == e)) continue;
                        let a = null == r ? void 0 : r[e.id];
                        if (null == a || 0 === a.length) continue;
                        let { emojisDisabled: s, emojisUnfiltered: l, emojisPremiumLockedCount: u, emojiNitroLocked: f } = d(a);
                        if (null != t && 0 === l.length) continue;
                        let p = null;
                        i === S.En.GUILD &&
                            (p = {
                                type: S.En.GUILD,
                                guild: e,
                                isNitroLocked: !x && f && u === a.length,
                                emojis: a,
                                emojisDisabled: s
                            }),
                            null != p && (e.id === n ? c.unshift(p) : c.push(p));
                    }
                })(a, S.En.GUILD),
                l.ZP.categories.reduce(
                    (t, r) => {
                        if (r === S.UX.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = d(R);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: S.En.TOP_GUILD_EMOJI,
                                id: r,
                                name: C.NW.formatToPlainString(C.t.W6Wi1d, { guildName: w }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e
                            });
                        } else if (r === S.UX.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: i } = d(e === T.Hz.REACTION && (g || E) ? p : s);
                            if (null == i || 0 === i.length) return t;
                            t.push({
                                type: S.En.RECENT,
                                id: r,
                                name: C.NW.string(C.t['5TvaSk']),
                                isNitroLocked: !1,
                                emojis: i,
                                emojisDisabled: n
                            });
                        } else if (r === S.UX.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = d(I);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: S.En.FAVORITES,
                                id: r,
                                name: C.NW.string(C.t.y3LQCA),
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
                    L && i ? [u] : []
                )
            );
        }, [P, t, n, e, x, R, w, g, E, p, s, I, o, L, i]);
    },
    P = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        g.default.track(I.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? I.ZY5.GUILD_CHANNEL : I.ZY5.DM_CHANNEL,
            location_section: null != e ? I.jXE.EMOJI_PICKER_POPOUT : I.jXE.CUSTOM_STATUS_MODAL
        });
    },
    w = (e, t) => {
        s.ZP.trackWithMetadata(I.rMx.SEARCH_STARTED, {
            search_type: null != t && t === T.Hz.REACTION ? I.aib.EMOJI_REACTION : I.aib.EMOJI,
            location: e
        });
    },
    D = (e, t, n, r, i) => {
        s.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === T.Hz.REACTION ? I.aib.EMOJI_REACTION : I.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n
        });
    },
    x = (e) => {
        var t, n, r;
        let { emoji: i, emojiSuggestions: a, searchQuery: l, isLocked: c, location: u, intention: d, index: f } = e,
            p = null !== (r = i.uniqueName) && void 0 !== r ? r : i.name,
            _ = (0, o.EQ)(d)
                .with(T.Hz.REACTION, () => I.aib.EMOJI_REACTION)
                .with(T.Hz.AUTO_SUGGESTION, () => I.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => I.aib.EMOJI);
        s.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_SELECTED, {
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
            load_id: null == a ? void 0 : a.loadId,
            total_results: null == a ? void 0 : null === (t = a.results) || void 0 === t ? void 0 : t.length,
            emoji_suggestion_ids:
                null == a
                    ? void 0
                    : null === (n = a.results) || void 0 === n
                      ? void 0
                      : n
                            .map((e) => {
                                let { emoji: t } = e;
                                return t.id;
                            })
                            .filter((e) => null != e)
        });
    },
    L = (e, t) => {
        s.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_EMPTY, {
            search_type: I.aib.EMOJI,
            query: t,
            location: e
        });
    },
    M = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        s.ZP.trackWithMetadata(I.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
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
            { emoji: r, location: i, pickerIntention: o, category: a, subCategory: l = S.t0.NONE, position: c, newlyAddedHighlight: u, isBurstReaction: d } = e;
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
        let f = null !== (t = r.uniqueName) && void 0 !== t ? t : r.name;
        s.ZP.trackWithMetadata(I.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
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
            i = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
        s.ZP.trackWithMetadata(I.rMx.EXPRESSION_FAVORITED, {
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
        s.ZP.trackWithMetadata(I.rMx.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: I.Z9p.EMOJI,
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
let U = (e, t) => (e.type === S.En.GUILD ? (null != t ? t.toString() : '') : e.id),
    G = (e, t) => {
        switch (e) {
            case S.UX.TOP_GUILD_EMOJI:
                return C.NW.formatToPlainString(C.t.W6Wi1d, { guildName: t });
            case S.UX.RECENT:
                return C.NW.string(C.t['5TvaSk']);
            case S.UX.FAVORITES:
                return C.NW.string(C.t.y3LQCA);
            case S.UX.ACTIVITY:
                return C.NW.string(C.t.O783tb);
            case S.UX.FLAGS:
                return C.NW.string(C.t.vvaizs);
            case S.UX.FOOD:
                return C.NW.string(C.t.ldm9aW);
            case S.UX.NATURE:
                return C.NW.string(C.t.egIBDA);
            case S.UX.OBJECTS:
                return C.NW.string(C.t.gWm7Mj);
            case S.UX.PEOPLE:
                return C.NW.string(C.t.GX594O);
            case S.UX.SYMBOLS:
                return C.NW.string(C.t.QXMYAQ);
            case S.UX.TRAVEL:
                return C.NW.string(C.t.w33hIC);
            case S.UX.PREMIUM_UPSELL:
                return C.NW.string(C.t.pAF6xM);
            case S.UX.SOUNDMOJI:
                return C.NW.string(C.t.f0Ezmp);
            default:
                return null != t ? t : e;
        }
    };
function B(e, t, n) {
    r.useEffect(() => {
        p.DZ.loadIfNecessary();
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
function Z(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function F(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function V(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function H(e, t) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    );
}
function W(e) {
    return (
        r.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []),
        (0, a.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function Y(e, t, n) {
    if (null == n) return S.t0.NONE;
    let r = e.map((e) => {
            var t, n;
            return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name;
        }),
        i = t.map((e) => e.id);
    return r.includes(n) ? S.t0.TOP_GUILD_EMOJI : i.includes(n) ? S.t0.NEWLY_ADDED_EMOJI : S.t0.NONE;
}
function K(e, t) {
    return e === T.Hz.REACTION ? (t ? C.NW.string(C.t['h7ES+v']) : C.NW.string(C.t['6any2N'])) : C.NW.string(C.t.KgK5qq);
}
