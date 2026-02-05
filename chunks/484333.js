"use strict";
n.d(t, { Mq: () => w, a2: () => L, bm: () => R, cr: () => x, wu: () => D }), n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(835245),
    o = n(311907),
    l = n(554375),
    u = n(508675),
    c = n(770335),
    d = n(7584),
    _ = n(850992),
    f = n(151271),
    p = n(526292),
    h = n(704591),
    m = n(808728),
    g = n(71393),
    E = n(711014),
    A = n(287809),
    I = n(690521),
    T = n(474090),
    y = n(822123),
    S = n(818645),
    v = n(316884),
    C = n(732139),
    b = n(307731),
    N = n(985018),
    R = (function (e) {
        return (
            (e[(e.EMOJI = 0)] = "EMOJI"),
            (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
            (e[(e.SOUNDMOJI = 2)] = "SOUNDMOJI"),
            e
        );
    })({});
let O = [b.Am.DISALLOW_EXTERNAL, b.Am.DISALLOW_CUSTOM],
    D = (e) => {
        let {
                channel: t,
                fallbackGuildId: n,
                collapsedSections: i,
                pickerIntention: l,
                emojiSearchResults: _,
                gridWidth: f,
                emojiPaddingHorizontal: R,
                emojiSpriteSize: D,
                shouldShowSoundmojiInEmojiPicker: L,
                showOnlyUnicode: w,
            } = e,
            x = (0, o.bG)([u.Ay], () => u.Ay.categories),
            P = r.useMemo(() => (w ? d.Ay.getCategories() : x), [x, w]),
            M = (0, o.bG)([g.A], () => g.A.getGuild(t?.getGuildId()), [t]),
            k = t?.getGuildId() ?? n,
            U = (0, o.bG)([u.Ay], () => u.Ay.getDisambiguatedEmojiContext(k), [k]),
            G = (0, y.XI)(k),
            V = (0, y.Fj)(k),
            F = (0, y.QZ)(k),
            { topEmojis: B, newlyAddedEmojis: j } = (0, v.A)(k, l),
            H = (0, o.yK)([E.Ay], () => E.Ay.getFlattenedGuildIds(), []),
            Y = (0, o.bG)([u.Ay], () => u.Ay.expandedSectionsByGuildIds),
            W = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
            K = (0, T.ki)(W),
            z = (0, p.k0)(),
            $ = U.getCustomEmoji(),
            q = (e) => {
                if (e.type === c.i.GUILD) return e.guildId;
            },
            Z = r.useMemo(() => a().groupBy($, q), [$]),
            Q = (0, h.Ym)({ location: "useEmojiGrid" });
        return r.useMemo(() => {
            let e = [],
                n = [],
                r = [],
                o = [],
                u = 0,
                c = 0;
            if (null != U && null != f) {
                let p = Math.floor(f / (D + 2 * R)),
                    h = 3 * p,
                    E = (s, d) => {
                        let _ = new Map(),
                            f = i.has(d.sectionId),
                            [m, g] = a().partition(s, (e) => {
                                let n = I.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: l });
                                return _.set(e, n), !n;
                            }),
                            E = m.concat(g),
                            A = d.guild,
                            T = E.length > h && null != A && d.isNitroLocked,
                            S = T && !Y.has(A.id);
                        S && E.splice(h - 1);
                        let v = Math.ceil((T ? E.length + 1 : E.length) / p),
                            b = [];
                        for (let e = 0; e < v; e++) {
                            let t = e * p,
                                n = t + p,
                                i = E.slice(t, n).map((e, t) => ({
                                    type: 0,
                                    emoji: e,
                                    size: D,
                                    isDisabled: _.get(e),
                                    rowIndex: c,
                                    columnIndex: t,
                                    visibleRowIndex: u,
                                    category: d.type,
                                    subCategory:
                                        d.sectionId === C.s.TOP_GUILD_EMOJI
                                            ? (0, y.DA)(B, j, e.id ?? e.uniqueName ?? e.name)
                                            : C.tm.NONE,
                                }));
                            if ((b.push(i), !f)) {
                                if (T && e === v - 1) {
                                    let t = b[e];
                                    t.push({
                                        type: 1,
                                        guildId: A.id,
                                        name: N.intl.string(N.t.NZI2Zk),
                                        size: D,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u,
                                        sectionCollapsedToThreeRows: S,
                                    });
                                }
                                o.push(i.length), r.push(i), u++;
                            }
                            c++;
                        }
                        let R = f ? 0 : v,
                            O = { ...d, count: s.length };
                        n.push(O), e.push(R);
                    };
                if (null != _)
                    0 !== _.unlocked.length &&
                        E(_.unlocked, {
                            type: C.s.SEARCH_RESULTS,
                            sectionId: C.s.SEARCH_RESULTS,
                            count: _.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== _.locked.length &&
                            E(_.locked, {
                                type: C.s.PREMIUM_UPSELL,
                                categoryId: C.R2.PREMIUM_UPSELL,
                                sectionId: C.s.PREMIUM_UPSELL,
                                count: _.locked.length,
                                isNitroLocked: !K,
                            });
                else {
                    if (Q && L) {
                        let t = [{ type: 2, rowIndex: c, columnIndex: 0, visibleRowIndex: u }];
                        n.push({
                            type: C.s.SOUNDMOJI,
                            categoryId: C.R2.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: t.length,
                            isNitroLocked: !1,
                        });
                        let a = i.has(C.R2.SOUNDMOJI);
                        !a && (o.push(t.length), r.push(t), u++), e.push(+!a), c++;
                    }
                    for (let e of P)
                        if (e === C.R2.CUSTOM) {
                            let n = (n) => {
                                let r = Z[n];
                                if (null == r) return;
                                let i = r.filter(
                                    (e) =>
                                        !O.includes(
                                            I.Ay.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: t ?? m.Ay.getDefaultChannel(n),
                                                intention: l,
                                            }),
                                        ),
                                );
                                if (0 === i.length) return;
                                let a = g.A.getGuild(n),
                                    o =
                                        z ||
                                        (!K &&
                                            I.Ay.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: t,
                                                intention: l,
                                            }));
                                E(i, {
                                    categoryId: e,
                                    guild: a,
                                    type: C.s.GUILD,
                                    sectionId: null != a ? a.id : (0, s.A)(),
                                    count: i.length,
                                    isNitroLocked: o,
                                });
                            };
                            if ((null != M && n(M.id), (0, b.Re)(l)))
                                for (let e of H) (null == M || M.id !== e) && n(e);
                        } else if (e === C.R2.TOP_GUILD_EMOJI) {
                            if (null != M) {
                                let { allEmojis: t } = (0, S.W)({ topEmojis: B, newlyAddedEmojis: j });
                                t.length > 0 &&
                                    E(t, {
                                        categoryId: e,
                                        guild: g.A.getGuild(M.id),
                                        type: C.s.TOP_GUILD_EMOJI,
                                        sectionId: C.s.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === C.R2.RECENT) {
                            let n = (l === b.b_.REACTION ? F : V).filter(
                                (e) => !I.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: l }),
                            );
                            E(n, {
                                categoryId: e,
                                type: C.s.RECENT,
                                sectionId: C.s.RECENT,
                                count: n.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === C.R2.FAVORITES) {
                            let n = G.filter((e) => !I.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: l }));
                            0 !== n.length &&
                                E(n, {
                                    categoryId: e,
                                    type: C.s.FAVORITES,
                                    sectionId: C.s.FAVORITES,
                                    count: n.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = d.Ay.getByCategory(e);
                            null != t &&
                                E(t, {
                                    categoryId: e,
                                    type: C.s.UNICODE,
                                    sectionId: e,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        }
                }
            }
            return { columnCounts: o, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
        }, [U, f, D, R, _, i, Z, Y, t, l, B, j, K, P, M, H, F, V, G, z, Q, L]);
    };
var L = (function (e) {
    return (e[(e.PREMIUM = 0)] = "PREMIUM"), (e[(e.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), e;
})({});
let w = (e) => {
        let {
                pickerIntention: t,
                selectedChannel: n,
                fallbackGuildId: i,
                onSelectEmoji: a,
                setUpsellConfigs: s,
                emojiSelectAnalytics: d,
                trackEmojiFavorited: _,
            } = e,
            f = (0, o.bG)([u.Ay], () => u.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
        return r.useCallback(
            (e, r) => {
                if (0 === e.type) {
                    let { emoji: i } = e;
                    if (null == i) return;
                    let o = I.Ay.getEmojiUnavailableReason({ emoji: i, channel: n, intention: t });
                    if (r.toggleFavorite)
                        return void (f.isFavoriteEmojiWithoutFetchingLatest(i) || null != o
                            ? (0, l.Sw)(i)
                            : (_?.(e), (0, l.V4)(i)));
                    if (o !== b.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                        if (o === b.Am.PREMIUM_LOCKED) return void s({ type: 0, emojiDescriptor: e });
                        if (o === b.Am.ROLE_SUBSCRIPTION_LOCKED && i.type === c.i.GUILD)
                            return void s({ type: 1, guildId: i.guildId, emojiId: i.id });
                        o !== b.Am.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                            (d?.(e), a({ emoji: i, willClose: r.isFinalSelection, isBurst: r.isBurst }));
                    }
                }
            },
            [n, t, a, s, f, d, _],
        );
    },
    x = (e) => {
        let { emojiListRef: t } = e,
            n = (0, f.RQ)((e) => e.searchQuery),
            i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
        return r.useCallback(
            (e) => {
                "" !== n ? ((0, f.Ri)(""), _.Om.setActiveCategoryIndex(e)) : i(e);
            },
            [i, n],
        );
    };
