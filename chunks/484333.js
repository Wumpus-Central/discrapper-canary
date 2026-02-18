"use strict";
n.d(t, { Mq: () => w, a2: () => L, bm: () => R, cr: () => x, wu: () => D }), n(321073);
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(835245),
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
    E = n(71393),
    g = n(711014),
    A = n(287809),
    I = n(690521),
    T = n(474090),
    S = n(822123),
    y = n(818645),
    v = n(316884),
    N = n(732139),
    C = n(307731),
    b = n(985018),
    R = (function (e) {
        return (
            (e[(e.EMOJI = 0)] = "EMOJI"),
            (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
            (e[(e.SOUNDMOJI = 2)] = "SOUNDMOJI"),
            e
        );
    })({});
let O = [C.Am.DISALLOW_EXTERNAL, C.Am.DISALLOW_CUSTOM],
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
            M = r.useMemo(() => (w ? d.Ay.getCategories() : x), [x, w]),
            P = (0, o.bG)([E.A], () => E.A.getGuild(t?.getGuildId()), [t]),
            k = t?.getGuildId() ?? n,
            U = (0, o.bG)([u.Ay], () => u.Ay.getDisambiguatedEmojiContext(k), [k]),
            G = (0, S.XI)(k),
            F = (0, S.Fj)(k),
            V = (0, S.QZ)(k),
            { topEmojis: B, newlyAddedEmojis: H } = (0, v.A)(k, l),
            j = (0, o.yK)([g.Ay], () => g.Ay.getFlattenedGuildIds(), []),
            Y = (0, o.bG)([u.Ay], () => u.Ay.expandedSectionsByGuildIds),
            W = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
            K = (0, T.ki)(W),
            z = (0, p.k0)(),
            $ = U.getCustomEmoji(),
            q = (e) => {
                if (e.type === c.i.GUILD) return e.guildId;
            },
            Z = r.useMemo(() => s().groupBy($, q), [$]),
            X = (0, h.Ym)({ location: "useEmojiGrid" });
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
                    g = (a, d) => {
                        let _ = new Map(),
                            f = i.has(d.sectionId),
                            [m, E] = s().partition(a, (e) => {
                                let n = I.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: l });
                                return _.set(e, n), !n;
                            }),
                            g = m.concat(E),
                            A = d.guild,
                            T = g.length > h && null != A && d.isNitroLocked,
                            y = T && !Y.has(A.id);
                        y && g.splice(h - 1);
                        let v = Math.ceil((T ? g.length + 1 : g.length) / p),
                            C = [];
                        for (let e = 0; e < v; e++) {
                            let t = e * p,
                                n = t + p,
                                i = g
                                    .slice(t, n)
                                    .map((e, t) => ({
                                        type: 0,
                                        emoji: e,
                                        size: D,
                                        isDisabled: _.get(e),
                                        rowIndex: c,
                                        columnIndex: t,
                                        visibleRowIndex: u,
                                        category: d.type,
                                        subCategory:
                                            d.sectionId === N.s.TOP_GUILD_EMOJI
                                                ? (0, S.DA)(B, H, e.id ?? e.uniqueName ?? e.name)
                                                : N.tm.NONE,
                                    }));
                            if ((C.push(i), !f)) {
                                if (T && e === v - 1) {
                                    let t = C[e];
                                    t.push({
                                        type: 1,
                                        guildId: A.id,
                                        name: b.intl.string(b.t.NZI2Zk),
                                        size: D,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u,
                                        sectionCollapsedToThreeRows: y,
                                    });
                                }
                                o.push(i.length), r.push(i), u++;
                            }
                            c++;
                        }
                        let R = f ? 0 : v,
                            O = { ...d, count: a.length };
                        n.push(O), e.push(R);
                    };
                if (null != _)
                    0 !== _.unlocked.length &&
                        g(_.unlocked, {
                            type: N.s.SEARCH_RESULTS,
                            sectionId: N.s.SEARCH_RESULTS,
                            count: _.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== _.locked.length &&
                            g(_.locked, {
                                type: N.s.PREMIUM_UPSELL,
                                categoryId: N.R2.PREMIUM_UPSELL,
                                sectionId: N.s.PREMIUM_UPSELL,
                                count: _.locked.length,
                                isNitroLocked: !K,
                            });
                else {
                    if (X && L) {
                        let t = [{ type: 2, rowIndex: c, columnIndex: 0, visibleRowIndex: u }];
                        n.push({
                            type: N.s.SOUNDMOJI,
                            categoryId: N.R2.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: t.length,
                            isNitroLocked: !1,
                        });
                        let s = i.has(N.R2.SOUNDMOJI);
                        !s && (o.push(t.length), r.push(t), u++), e.push(+!s), c++;
                    }
                    for (let e of M)
                        if (e === N.R2.CUSTOM) {
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
                                let s = E.A.getGuild(n),
                                    o =
                                        z ||
                                        (!K &&
                                            I.Ay.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: t,
                                                intention: l,
                                            }));
                                g(i, {
                                    categoryId: e,
                                    guild: s,
                                    type: N.s.GUILD,
                                    sectionId: null != s ? s.id : (0, a.A)(),
                                    count: i.length,
                                    isNitroLocked: o,
                                });
                            };
                            if ((null != P && n(P.id), (0, C.Re)(l)))
                                for (let e of j) (null == P || P.id !== e) && n(e);
                        } else if (e === N.R2.TOP_GUILD_EMOJI) {
                            if (null != P) {
                                let { allEmojis: t } = (0, y.W)({ topEmojis: B, newlyAddedEmojis: H });
                                t.length > 0 &&
                                    g(t, {
                                        categoryId: e,
                                        guild: E.A.getGuild(P.id),
                                        type: N.s.TOP_GUILD_EMOJI,
                                        sectionId: N.s.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === N.R2.RECENT) {
                            let n = (l === C.b_.REACTION ? V : F).filter(
                                (e) => !I.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: l }),
                            );
                            g(n, {
                                categoryId: e,
                                type: N.s.RECENT,
                                sectionId: N.s.RECENT,
                                count: n.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === N.R2.FAVORITES) {
                            let n = G.filter((e) => !I.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: l }));
                            0 !== n.length &&
                                g(n, {
                                    categoryId: e,
                                    type: N.s.FAVORITES,
                                    sectionId: N.s.FAVORITES,
                                    count: n.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = d.Ay.getByCategory(e);
                            null != t &&
                                g(t, {
                                    categoryId: e,
                                    type: N.s.UNICODE,
                                    sectionId: e,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        }
                }
            }
            return { columnCounts: o, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
        }, [U, f, D, R, _, i, Z, Y, t, l, B, H, K, M, P, j, V, F, G, z, X, L]);
    };
var L = (function (e) {
    return (e[(e.PREMIUM = 0)] = "PREMIUM"), (e[(e.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), e;
})({});
let w = (e) => {
        let {
                pickerIntention: t,
                selectedChannel: n,
                fallbackGuildId: i,
                onSelectEmoji: s,
                setUpsellConfigs: a,
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
                    if (o !== C.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                        if (o === C.Am.PREMIUM_LOCKED) return void a({ type: 0, emojiDescriptor: e });
                        if (o === C.Am.ROLE_SUBSCRIPTION_LOCKED && i.type === c.i.GUILD)
                            return void a({ type: 1, guildId: i.guildId, emojiId: i.id });
                        o !== C.Am.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                            (d?.(e), s({ emoji: i, willClose: r.isFinalSelection, isBurst: r.isBurst }));
                    }
                }
            },
            [n, t, s, a, f, d, _],
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
