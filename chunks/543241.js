r.d(n, {
    A3: function () {
        return U;
    },
    C1: function () {
        return X;
    },
    DV: function () {
        return K;
    },
    Gn: function () {
        return V;
    },
    IP: function () {
        return $;
    },
    J1: function () {
        return H;
    },
    MZ: function () {
        return J;
    },
    NJ: function () {
        return Q;
    },
    Nf: function () {
        return Y;
    },
    PC: function () {
        return B;
    },
    Y1: function () {
        return W;
    },
    fe: function () {
        return j;
    },
    jA: function () {
        return G;
    },
    kI: function () {
        return k;
    },
    nV: function () {
        return ee;
    },
    q5: function () {
        return q;
    },
    to: function () {
        return F;
    },
    wC: function () {
        return z;
    },
    y$: function () {
        return Z;
    }
});
var i = r(733860);
var a = r(653041);
var o = r(47120);
var s = r(724458);
var l = r(627341);
var u = r(757143);
var c = r(192379),
    d = r(392711);
var f = r(278074),
    p = r(442837),
    h = r(367907),
    _ = r(339085),
    m = r(689789),
    g = r(407477),
    E = r(558217),
    v = r(125900),
    y = r(675478),
    b = r(430824),
    I = r(771845),
    T = r(594174),
    S = r(626135),
    A = r(70956),
    C = r(176354),
    N = r(111361),
    R = r(304852),
    O = r(199257),
    D = r(149203),
    L = r(981631),
    x = r(185923),
    w = r(957825),
    P = r(474936),
    M = r(388032);
let k = function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == n ? void 0 : n.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, E.O)(r);
        let a = (0, x.Gt)(e),
            o = z(r),
            s = q(r),
            { canSplitFrecencyList: l } = (0, m.S)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            u = (0, g.p3)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            });
        g.Xb.useExperiment({ location: 'useEmojiCategories' }, { autoTrackExposure: !0 });
        let d = Q(r),
            { topEmojis: f, newlyAddedEmojis: h } = (0, O.Z)(r, e),
            { allEmojis: y } = (0, R.Z)({
                topEmojis: f,
                newlyAddedEmojis: h
            }),
            S = (0, p.e7)([_.ZP], () => _.ZP.getDisambiguatedEmojiContext(r), [r]),
            A = (0, p.e7)([b.Z], () => {
                var e;
                return null === (e = b.Z.getGuild(r)) || void 0 === e ? void 0 : e.name;
            }),
            L = (0, p.e7)([T.default], () => T.default.getCurrentUser()),
            w = (0, N.I5)(L),
            P = (0, v.g2)({ location: 'useEmojiCategories' });
        return c.useMemo(() => {
            let c = S.getGroupedCustomEmoji(),
                f = I.ZP.getFlattenedGuildIds(),
                p = [],
                h = {
                    type: D.En.SOUNDMOJI,
                    name: M.intl.string(M.t.f0Ezmp),
                    id: D.UX.SOUNDMOJI,
                    isNitroLocked: !1
                },
                m = (i, a) =>
                    C.ZP.getEmojiUnavailableReasons({
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
                        if ((i === D.En.GUILD && (e = b.Z.getGuild(a)), null == e)) continue;
                        let o = null == c ? void 0 : c[e.id];
                        if (null == o || 0 === o.length) continue;
                        let { emojisDisabled: s, emojisFilteredCount: l, emojisPremiumLockedCount: u, emojiNitroLocked: d } = m(o, !1);
                        if (null != n && o.length === l) continue;
                        let f = null;
                        i === D.En.GUILD &&
                            (f = {
                                type: D.En.GUILD,
                                guild: e,
                                isNitroLocked: !w && d && u === o.length,
                                emojis: o,
                                emojisDisabled: s
                            }),
                            null != f && (e.id === r ? p.unshift(f) : p.push(f));
                    }
                })(f, D.En.GUILD),
                _.ZP.categories.reduce(
                    (n, i) => {
                        if (i === D.UX.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: r } = m(y, !0);
                            if (null == r || 0 === r.length) return n;
                            n.push({
                                type: D.En.TOP_GUILD_EMOJI,
                                id: i,
                                name: M.intl.formatToPlainString(M.t.W6Wi1d, { guildName: A }),
                                isNitroLocked: !1,
                                emojis: r,
                                emojisDisabled: e
                            });
                        } else if (i === D.UX.RECENT) {
                            let { emojisDisabled: r, emojisUnfiltered: a } = m(e === x.Hz.REACTION && (l || u) ? s : o, !0);
                            if (null == a || 0 === a.length) return n;
                            n.push({
                                type: D.En.RECENT,
                                id: i,
                                name: M.intl.string(M.t['5TvaSk']),
                                isNitroLocked: !1,
                                emojis: a,
                                emojisDisabled: r
                            });
                        } else if (i === D.UX.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: r } = m(d, !0);
                            if (null == r || 0 === r.length) return n;
                            n.push({
                                type: D.En.FAVORITES,
                                id: i,
                                name: M.intl.string(M.t.y3LQCA),
                                isNitroLocked: !1,
                                emojis: r,
                                emojisDisabled: e
                            });
                        } else if (i === D.UX.CUSTOM) {
                            let e = p;
                            !a && (e = p.filter((e) => e.type === D.En.GUILD && e.guild.id === r)), n.push(...e);
                        } else
                            n.push({
                                type: D.En.UNICODE,
                                id: i,
                                name: i,
                                isNitroLocked: !1
                            });
                        return n;
                    },
                    P && i ? [h] : []
                )
            );
        }, [S, n, r, e, w, y, A, l, u, s, o, d, a, P, i]);
    },
    U = (e) => {
        let n = (null == e ? void 0 : e.getGuildId()) != null;
        S.default.track(L.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: n ? L.ZY5.GUILD_CHANNEL : L.ZY5.DM_CHANNEL,
            location_section: null != e ? L.jXE.EMOJI_PICKER_POPOUT : L.jXE.CUSTOM_STATUS_MODAL
        });
    },
    B = (e, n) => {
        h.ZP.trackWithMetadata(L.rMx.SEARCH_STARTED, {
            search_type: null != n && n === x.Hz.REACTION ? L.aib.EMOJI_REACTION : L.aib.EMOJI,
            location: e
        });
    },
    G = (e, n, r, i, a) => {
        h.ZP.trackWithMetadata(L.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != a && a === x.Hz.REACTION ? L.aib.EMOJI_REACTION : L.aib.EMOJI,
            total_results: e,
            num_results_locked: n,
            query: i,
            location: r
        });
    },
    Z = (e) => {
        var n, r, i;
        let { emoji: a, emojiSuggestions: o, searchQuery: s, isLocked: l, location: u, intention: c, index: d } = e,
            p = null !== (i = a.uniqueName) && void 0 !== i ? i : a.name,
            _ = (0, f.EQ)(c)
                .with(x.Hz.REACTION, () => L.aib.EMOJI_REACTION)
                .with(x.Hz.AUTO_SUGGESTION, () => L.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => L.aib.EMOJI);
        h.ZP.trackWithMetadata(L.rMx.SEARCH_RESULT_SELECTED, {
            search_type: _,
            location: u,
            expression_guild_id: a.guildId,
            emoji_id: a.id,
            emoji_name: p,
            is_custom: null != a.id,
            is_animated: a.animated,
            is_locked: l,
            query: s,
            index_num: d,
            load_id: null == o ? void 0 : o.loadId,
            total_results: null == o ? void 0 : null === (n = o.results) || void 0 === n ? void 0 : n.length,
            emoji_suggestion_ids:
                null == o
                    ? void 0
                    : null === (r = o.results) || void 0 === r
                      ? void 0
                      : r
                            .map((e) => {
                                let { emoji: n } = e;
                                return n.id;
                            })
                            .filter((e) => null != e)
        });
    },
    F = (e, n) => {
        h.ZP.trackWithMetadata(L.rMx.SEARCH_RESULT_EMPTY, {
            search_type: L.aib.EMOJI,
            query: n,
            location: e
        });
    },
    V = (e) => {
        let { emoji: n, subCategory: r, position: i, newlyAddedHighlight: a } = e;
        h.ZP.trackWithMetadata(L.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: null == r ? void 0 : r.toString(),
            newly_added_highlight: a,
            emoji_id: n.id,
            emoji_name: n.name,
            emoji_animated: n.animated,
            emoji_position: i
        });
    },
    j = (e) => {
        var n;
        let r,
            { emoji: i, location: a, pickerIntention: o, category: s, subCategory: l = D.t0.NONE, position: u, newlyAddedHighlight: c, isBurstReaction: d } = e;
        switch (o) {
            case x.Hz.REACTION:
                r = d ? P.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : P.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case x.Hz.STATUS:
                r = P.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                r = P.cd.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let f = null !== (n = i.uniqueName) && void 0 !== n ? n : i.name;
        h.ZP.trackWithMetadata(L.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: r,
            location: a,
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
    H = (e) => {
        var n;
        let { emoji: r, location: i } = e,
            a = null !== (n = r.uniqueName) && void 0 !== n ? n : r.name;
        h.ZP.trackWithMetadata(L.rMx.EXPRESSION_FAVORITED, {
            location: i,
            expression_type: w.X1.EMOJI,
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
        h.ZP.trackWithMetadata(L.rMx.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: L.Z9p.EMOJI,
            suggestion_quantity: n.results.length,
            custom_quantity: n.results.filter((e) => {
                let { emoji: n } = e;
                return null != n.id;
            }).length,
            load_id: n.loadId,
            location: r
        });
    },
    A.Z.Millis.HALF_SECOND,
    {
        leading: !1,
        trailing: !0
    }
);
let Y = (e, n) => {
        if (e.type === D.En.GUILD) return null != n ? n.toString() : '';
        return e.id;
    },
    W = (e, n) => {
        switch (e) {
            case D.UX.TOP_GUILD_EMOJI:
                return M.intl.formatToPlainString(M.t.W6Wi1d, { guildName: n });
            case D.UX.RECENT:
                return M.intl.string(M.t['5TvaSk']);
            case D.UX.FAVORITES:
                return M.intl.string(M.t.y3LQCA);
            case D.UX.ACTIVITY:
                return M.intl.string(M.t.O783tb);
            case D.UX.FLAGS:
                return M.intl.string(M.t.vvaizs);
            case D.UX.FOOD:
                return M.intl.string(M.t.ldm9aW);
            case D.UX.NATURE:
                return M.intl.string(M.t.egIBDA);
            case D.UX.OBJECTS:
                return M.intl.string(M.t.gWm7Mj);
            case D.UX.PEOPLE:
                return M.intl.string(M.t.GX594O);
            case D.UX.SYMBOLS:
                return M.intl.string(M.t.QXMYAQ);
            case D.UX.TRAVEL:
                return M.intl.string(M.t.w33hIC);
            case D.UX.PREMIUM_UPSELL:
                return M.intl.string(M.t.pAF6xM);
            case D.UX.SOUNDMOJI:
                return M.intl.string(M.t.f0Ezmp);
            default:
                return null != n ? n : e;
        }
    };
function K(e, n, r) {
    c.useEffect(() => {
        y.DZ.loadIfNecessary();
    }, []);
    let i = (0, x.Gt)(r);
    return (0, p.e7)(
        [_.ZP],
        () => {
            let a = e.replace(/^:/, '').replace(/:$/, '');
            return '' === a
                ? null
                : _.ZP.searchWithoutFetchingLatest({
                      channel: n,
                      query: a,
                      count: 0,
                      intention: r,
                      includeExternalGuilds: i
                  });
        },
        [n, r, e, i],
        p.pF
    );
}
function z(e) {
    return (
        c.useEffect(() => {
            y.DZ.loadIfNecessary();
        }, []),
        (0, p.Wu)([_.ZP], () => _.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function q(e) {
    return (
        c.useEffect(() => {
            y.DZ.loadIfNecessary();
        }, []),
        (0, p.Wu)([_.ZP], () => _.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function Q(e) {
    return (
        c.useEffect(() => {
            y.DZ.loadIfNecessary();
        }, []),
        (0, p.Wu)([_.ZP], () => _.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function X(e, n) {
    return (
        c.useEffect(() => {
            y.DZ.loadIfNecessary();
        }, []),
        (0, p.e7)([_.ZP], () => null != n && _.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(n))
    );
}
function J(e) {
    return (
        c.useEffect(() => {
            y.DZ.loadIfNecessary();
        }, []),
        (0, p.Wu)([_.ZP], () => _.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function $(e, n, r) {
    if (null == r) return D.t0.NONE;
    let i = e.map((e) => {
            var n, r;
            return null !== (r = null !== (n = e.id) && void 0 !== n ? n : e.uniqueName) && void 0 !== r ? r : e.name;
        }),
        a = n.map((e) => e.id);
    return i.includes(r) ? D.t0.TOP_GUILD_EMOJI : a.includes(r) ? D.t0.NEWLY_ADDED_EMOJI : D.t0.NONE;
}
function ee(e, n) {
    return e === x.Hz.REACTION ? (n ? M.intl.string(M.t['h7ES+v']) : M.intl.string(M.t['6any2N'])) : M.intl.string(M.t.KgK5qq);
}
