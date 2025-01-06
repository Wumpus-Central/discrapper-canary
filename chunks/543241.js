r.d(n, {
    A3: function () {
        return k;
    },
    C1: function () {
        return Q;
    },
    DV: function () {
        return W;
    },
    Gn: function () {
        return F;
    },
    IP: function () {
        return J;
    },
    J1: function () {
        return j;
    },
    MZ: function () {
        return X;
    },
    NJ: function () {
        return q;
    },
    Nf: function () {
        return H;
    },
    PC: function () {
        return U;
    },
    Y1: function () {
        return Y;
    },
    fe: function () {
        return V;
    },
    jA: function () {
        return B;
    },
    kI: function () {
        return M;
    },
    nV: function () {
        return $;
    },
    q5: function () {
        return z;
    },
    to: function () {
        return Z;
    },
    wC: function () {
        return K;
    },
    y$: function () {
        return G;
    }
});
var i = r(733860);
var a = r(653041);
var s = r(47120);
var o = r(724458);
var l = r(627341);
var u = r(757143);
var c = r(192379),
    d = r(392711);
var f = r(278074),
    _ = r(442837),
    h = r(367907),
    p = r(339085),
    m = r(689789),
    g = r(407477),
    E = r(558217),
    v = r(675478),
    I = r(430824),
    T = r(771845),
    b = r(594174),
    y = r(626135),
    S = r(70956),
    A = r(176354),
    N = r(111361),
    C = r(304852),
    R = r(199257),
    O = r(149203),
    D = r(981631),
    L = r(185923),
    x = r(957825),
    w = r(474936),
    P = r(388032);
let M = function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == n ? void 0 : n.getGuildId();
        (0, E.O)(r);
        let i = (0, L.Gt)(e),
            a = K(r),
            s = z(r),
            { canSplitFrecencyList: o } = (0, m.S)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            l = (0, g.p3)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            });
        g.Xb.useExperiment({ location: 'useEmojiCategories' }, { autoTrackExposure: !0 });
        let u = q(r),
            { topEmojis: d, newlyAddedEmojis: f } = (0, R.Z)(r, e),
            { allEmojis: h } = (0, C.Z)({
                topEmojis: d,
                newlyAddedEmojis: f
            }),
            v = (0, _.e7)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(r), [r]),
            y = (0, _.e7)([I.Z], () => {
                var e;
                return null === (e = I.Z.getGuild(r)) || void 0 === e ? void 0 : e.name;
            }),
            S = (0, _.e7)([b.default], () => b.default.getCurrentUser()),
            D = (0, N.I5)(S);
        return c.useMemo(() => {
            let c = v.getGroupedCustomEmoji(),
                d = T.ZP.getFlattenedGuildIds(),
                f = [],
                _ = (i, a) =>
                    A.ZP.getEmojiUnavailableReasons({
                        categoryEmojis: i,
                        channel: n,
                        guildId: r,
                        intention: e,
                        computeUnfiltered: a
                    });
            return (
                ((e, i) => {
                    for (let a of e) {
                        let e;
                        if ((i === O.En.GUILD && (e = I.Z.getGuild(a)), null == e)) continue;
                        let s = null == c ? void 0 : c[e.id];
                        if (null == s || 0 === s.length) continue;
                        let { emojisDisabled: o, emojisFilteredCount: l, emojisPremiumLockedCount: u, emojiNitroLocked: d } = _(s, !1);
                        if (null != n && s.length === l) continue;
                        let h = null;
                        i === O.En.GUILD &&
                            (h = {
                                type: O.En.GUILD,
                                guild: e,
                                isNitroLocked: !D && d && u === s.length,
                                emojis: s,
                                emojisDisabled: o
                            }),
                            null != h && (e.id === r ? f.unshift(h) : f.push(h));
                    }
                })(d, O.En.GUILD),
                p.ZP.categories.reduce((n, c) => {
                    if (c === O.UX.TOP_GUILD_EMOJI) {
                        let { emojisDisabled: e, emojisUnfiltered: r } = _(h, !0);
                        if (null == r || 0 === r.length) return n;
                        n.push({
                            type: O.En.TOP_GUILD_EMOJI,
                            id: c,
                            name: P.intl.formatToPlainString(P.t.W6Wi1d, { guildName: y }),
                            isNitroLocked: !1,
                            emojis: r,
                            emojisDisabled: e
                        });
                    } else if (c === O.UX.RECENT) {
                        let { emojisDisabled: r, emojisUnfiltered: i } = _(e === L.Hz.REACTION && (o || l) ? s : a, !0);
                        if (null == i || 0 === i.length) return n;
                        n.push({
                            type: O.En.RECENT,
                            id: c,
                            name: P.intl.string(P.t['5TvaSk']),
                            isNitroLocked: !1,
                            emojis: i,
                            emojisDisabled: r
                        });
                    } else if (c === O.UX.FAVORITES) {
                        let { emojisDisabled: e, emojisUnfiltered: r } = _(u, !0);
                        if (null == r || 0 === r.length) return n;
                        n.push({
                            type: O.En.FAVORITES,
                            id: c,
                            name: P.intl.string(P.t.y3LQCA),
                            isNitroLocked: !1,
                            emojis: r,
                            emojisDisabled: e
                        });
                    } else if (c === O.UX.CUSTOM) {
                        let e = f;
                        !i && (e = f.filter((e) => e.type === O.En.GUILD && e.guild.id === r)), n.push(...e);
                    } else
                        n.push({
                            type: O.En.UNICODE,
                            id: c,
                            name: c,
                            isNitroLocked: !1
                        });
                    return n;
                }, [])
            );
        }, [v, n, r, e, D, h, y, o, l, s, a, u, i]);
    },
    k = (e) => {
        let n = (null == e ? void 0 : e.getGuildId()) != null;
        y.default.track(D.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: n ? D.ZY5.GUILD_CHANNEL : D.ZY5.DM_CHANNEL,
            location_section: null != e ? D.jXE.EMOJI_PICKER_POPOUT : D.jXE.CUSTOM_STATUS_MODAL
        });
    },
    U = (e, n) => {
        h.ZP.trackWithMetadata(D.rMx.SEARCH_STARTED, {
            search_type: null != n && n === L.Hz.REACTION ? D.aib.EMOJI_REACTION : D.aib.EMOJI,
            location: e
        });
    },
    B = (e, n, r, i, a) => {
        h.ZP.trackWithMetadata(D.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != a && a === L.Hz.REACTION ? D.aib.EMOJI_REACTION : D.aib.EMOJI,
            total_results: e,
            num_results_locked: n,
            query: i,
            location: r
        });
    },
    G = (e) => {
        var n, r, i;
        let { emoji: a, emojiSuggestions: s, searchQuery: o, isLocked: l, location: u, intention: c, index: d } = e,
            _ = null !== (i = a.uniqueName) && void 0 !== i ? i : a.name,
            p = (0, f.EQ)(c)
                .with(L.Hz.REACTION, () => D.aib.EMOJI_REACTION)
                .with(L.Hz.AUTO_SUGGESTION, () => D.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => D.aib.EMOJI);
        h.ZP.trackWithMetadata(D.rMx.SEARCH_RESULT_SELECTED, {
            search_type: p,
            location: u,
            expression_guild_id: a.guildId,
            emoji_id: a.id,
            emoji_name: _,
            is_custom: null != a.id,
            is_animated: a.animated,
            is_locked: l,
            query: o,
            index_num: d,
            load_id: null == s ? void 0 : s.loadId,
            total_results: null == s ? void 0 : null === (n = s.results) || void 0 === n ? void 0 : n.length,
            emoji_suggestion_ids:
                null == s
                    ? void 0
                    : null === (r = s.results) || void 0 === r
                      ? void 0
                      : r
                            .map((e) => {
                                let { emoji: n } = e;
                                return n.id;
                            })
                            .filter((e) => null != e)
        });
    },
    Z = (e, n) => {
        h.ZP.trackWithMetadata(D.rMx.SEARCH_RESULT_EMPTY, {
            search_type: D.aib.EMOJI,
            query: n,
            location: e
        });
    },
    F = (e) => {
        let { emoji: n, subCategory: r, position: i, newlyAddedHighlight: a } = e;
        h.ZP.trackWithMetadata(D.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: null == r ? void 0 : r.toString(),
            newly_added_highlight: a,
            emoji_id: n.id,
            emoji_name: n.name,
            emoji_animated: n.animated,
            emoji_position: i
        });
    },
    V = (e) => {
        var n;
        let r,
            { emoji: i, location: a, pickerIntention: s, category: o, subCategory: l = O.t0.NONE, position: u, newlyAddedHighlight: c, isBurstReaction: d } = e;
        switch (s) {
            case L.Hz.REACTION:
                r = d ? w.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : w.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case L.Hz.STATUS:
                r = w.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                r = w.cd.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let f = null !== (n = i.uniqueName) && void 0 !== n ? n : i.name;
        h.ZP.trackWithMetadata(D.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: r,
            location: a,
            expression_id: i.id,
            expression_name: f,
            expression_guild_id: i.guildId,
            is_custom: null != i.id,
            is_animated: i.animated,
            expression_picker_section: o,
            expression_section: null == l ? void 0 : l.toString(),
            emoji_position: u,
            newly_added_highlight: c,
            is_burst: d
        });
    },
    j = (e) => {
        var n;
        let { emoji: r, location: i } = e,
            a = null !== (n = r.uniqueName) && void 0 !== n ? n : r.name;
        h.ZP.trackWithMetadata(D.rMx.EXPRESSION_FAVORITED, {
            location: i,
            expression_type: x.X1.EMOJI,
            expression_id: r.id,
            expression_name: a,
            expression_guild_id: r.guildId,
            is_custom: null != r.id,
            is_animated: r.animated
        });
    };
(0, d.throttle)(
    (e) => {
        let { emojiSuggestions: n, analyticsLocation: r } = e;
        h.ZP.trackWithMetadata(D.rMx.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: D.Z9p.EMOJI,
            suggestion_quantity: n.results.length,
            custom_quantity: n.results.filter((e) => {
                let { emoji: n } = e;
                return null != n.id;
            }).length,
            load_id: n.loadId,
            location: r
        });
    },
    S.Z.Millis.HALF_SECOND,
    {
        leading: !1,
        trailing: !0
    }
);
let H = (e, n) => {
        if (e.type === O.En.GUILD) return null != n ? n.toString() : '';
        return e.id;
    },
    Y = (e, n) => {
        switch (e) {
            case O.UX.TOP_GUILD_EMOJI:
                return P.intl.formatToPlainString(P.t.W6Wi1d, { guildName: n });
            case O.UX.RECENT:
                return P.intl.string(P.t['5TvaSk']);
            case O.UX.FAVORITES:
                return P.intl.string(P.t.y3LQCA);
            case O.UX.ACTIVITY:
                return P.intl.string(P.t.O783tb);
            case O.UX.FLAGS:
                return P.intl.string(P.t.vvaizs);
            case O.UX.FOOD:
                return P.intl.string(P.t.ldm9aW);
            case O.UX.NATURE:
                return P.intl.string(P.t.egIBDA);
            case O.UX.OBJECTS:
                return P.intl.string(P.t.gWm7Mj);
            case O.UX.PEOPLE:
                return P.intl.string(P.t.GX594O);
            case O.UX.SYMBOLS:
                return P.intl.string(P.t.QXMYAQ);
            case O.UX.TRAVEL:
                return P.intl.string(P.t.w33hIC);
            case O.UX.PREMIUM_UPSELL:
                return P.intl.string(P.t.pAF6xM);
            default:
                return null != n ? n : e;
        }
    };
function W(e, n, r) {
    c.useEffect(() => {
        v.DZ.loadIfNecessary();
    }, []);
    let i = (0, L.Gt)(r);
    return (0, _.e7)(
        [p.ZP],
        () => {
            let a = e.replace(/^:/, '').replace(/:$/, '');
            return '' === a
                ? null
                : p.ZP.searchWithoutFetchingLatest({
                      channel: n,
                      query: a,
                      count: 0,
                      intention: r,
                      includeExternalGuilds: i
                  });
        },
        [n, r, e, i],
        _.pF
    );
}
function K(e) {
    return (
        c.useEffect(() => {
            v.DZ.loadIfNecessary();
        }, []),
        (0, _.Wu)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function z(e) {
    return (
        c.useEffect(() => {
            v.DZ.loadIfNecessary();
        }, []),
        (0, _.Wu)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function q(e) {
    return (
        c.useEffect(() => {
            v.DZ.loadIfNecessary();
        }, []),
        (0, _.Wu)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function Q(e, n) {
    return (
        c.useEffect(() => {
            v.DZ.loadIfNecessary();
        }, []),
        (0, _.e7)([p.ZP], () => null != n && p.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(n))
    );
}
function X(e) {
    return (
        c.useEffect(() => {
            v.DZ.loadIfNecessary();
        }, []),
        (0, _.Wu)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function J(e, n, r) {
    if (null == r) return O.t0.NONE;
    let i = e.map((e) => {
            var n, r;
            return null !== (r = null !== (n = e.id) && void 0 !== n ? n : e.uniqueName) && void 0 !== r ? r : e.name;
        }),
        a = n.map((e) => e.id);
    return i.includes(r) ? O.t0.TOP_GUILD_EMOJI : a.includes(r) ? O.t0.NEWLY_ADDED_EMOJI : O.t0.NONE;
}
function $(e, n) {
    return e === L.Hz.REACTION ? (n ? P.intl.string(P.t['h7ES+v']) : P.intl.string(P.t['6any2N'])) : P.intl.string(P.t.KgK5qq);
}
