n(321073);
var i,
    s,
    l = n(582128),
    r = n(435558),
    a = n.n(r),
    o = n(115560),
    c = n(855986),
    u = n(554375),
    d = n(121681),
    m = n(770335),
    f = n(7584),
    E = n(850992),
    I = n(151271),
    h = n(526292),
    g = n(808728),
    A = n(71393),
    p = n(711014),
    _ = n(287809),
    N = n(690521),
    C = n(474090),
    y = n(822123),
    x = n(818645),
    j = n(316884),
    O = n(732139),
    S = n(307731),
    T = n(682901),
    b = n(792996),
    R = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let v = [S.Am.DISALLOW_EXTERNAL, S.Am.DISALLOW_CUSTOM];
var P = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s);
n.d(
    t,
    {},
    {
        Mq: function (e) {
            let {
                    pickerIntention: t,
                    selectedChannel: n,
                    fallbackGuildId: i,
                    onSelectEmoji: s,
                    setUpsellConfigs: r,
                    emojiSelectAnalytics: a,
                    trackEmojiFavorited: o,
                } = e,
                f = (0, c.bG)([d.Ay], () => d.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
            return l.useCallback(
                (e, i) => {
                    if (0 === e.type) {
                        let { emoji: l } = e;
                        if (null == l) return;
                        let c = N.Ay.getEmojiUnavailableReason({ emoji: l, channel: n, intention: t });
                        if (i.toggleFavorite)
                            return void (f.isFavoriteEmojiWithoutFetchingLatest(l) || null != c
                                ? (0, u.Sw)(l)
                                : (o?.(e), (0, u.V4)(l)));
                        if (c !== S.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                            if (c === S.Am.PREMIUM_LOCKED) {
                                (a?.(e, c), r({ type: 0, emojiDescriptor: e }));
                                return;
                            }
                            if (c === S.Am.ROLE_SUBSCRIPTION_LOCKED && l.type === m.i.GUILD) {
                                (a?.(e, c), r({ type: 1, guildId: l.guildId, emojiId: l.id }));
                                return;
                            }
                            c !== S.Am.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                (a?.(e), s({ emoji: l, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                        }
                    }
                },
                [n, t, s, r, f, a, o],
            );
        },
        a2: P,
        bm: R,
        cr: function (e) {
            let { emojiListRef: t } = e,
                n = (0, I.RQ)((e) => e.searchQuery),
                i = l.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return l.useCallback(
                (e) => {
                    "" !== n ? ((0, I.Ri)(""), E.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        },
        wu: function (e) {
            let {
                    channel: t,
                    fallbackGuildId: n,
                    collapsedSections: i,
                    pickerIntention: s,
                    emojiSearchResults: r,
                    gridWidth: u,
                    emojiPaddingHorizontal: m,
                    emojiSpriteSize: E,
                    pinnedPacks: I,
                    showOnlyUnicode: R,
                } = e,
                P = (0, c.bG)([d.Ay], () => d.Ay.categories),
                L = l.useMemo(() => (R ? f.Ay.getCategories() : P), [P, R]),
                M = (0, c.bG)([A.A], () => A.A.getGuild(t?.getGuildId()), [t]),
                D = t?.getGuildId() ?? n,
                w = (0, c.bG)([d.Ay], () => d.Ay.getDisambiguatedEmojiContext(D), [D]),
                k = (0, y.XI)(D),
                U = (0, y.Fj)(D),
                G = (0, y.QZ)(D),
                { topEmojis: F, newlyAddedEmojis: J } = (0, j.A)(D, s),
                K = (0, c.yK)([p.Ay], () => p.Ay.getFlattenedGuildIds(), []),
                V = (0, c.bG)([d.Ay], () => d.Ay.expandedSectionsByGuildIds),
                B = (0, c.bG)([_.default], () => _.default.getCurrentUser()),
                H = (0, C.ki)(B),
                W = (0, C.ki)(B, T.PremiumTypes.TIER_2),
                X = (0, h.k0)(),
                z = w.getGroupedCustomEmoji();
            return l.useMemo(() => {
                let e = [],
                    n = [],
                    l = [],
                    c = [],
                    d = 0,
                    h = 0;
                if (null != w && null != u) {
                    let C = Math.floor(u / (E + 2 * m)),
                        j = 3 * C;
                    function p(r, o) {
                        let u = new Map(),
                            m = i.has(o.sectionId),
                            [f, I] = a().partition(r, (e) => {
                                let n = N.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                return (u.set(e, n), !n);
                            }),
                            g = f.concat(I),
                            A = o.guild,
                            p = g.length > j && null != A && o.isNitroLocked,
                            _ = p && !V.has(A.id);
                        _ && g.splice(j - 1);
                        let x = Math.ceil((p ? g.length + 1 : g.length) / C),
                            S = [];
                        for (let e = 0; e < x; e++) {
                            let t = e * C,
                                n = t + C,
                                i = g
                                    .slice(t, n)
                                    .map((e, t) => ({
                                        type: 0,
                                        emoji: e,
                                        size: E,
                                        isDisabled: u.get(e),
                                        rowIndex: h,
                                        columnIndex: t,
                                        visibleRowIndex: d,
                                        category: o.type,
                                        subCategory:
                                            o.sectionId === O.s.TOP_GUILD_EMOJI
                                                ? (0, y.DA)(F, J, e.id ?? e.uniqueName ?? e.name)
                                                : O.tm.NONE,
                                    }));
                            if ((S.push(i), !m)) {
                                if (p && e === x - 1) {
                                    let t = S[e];
                                    t.push({
                                        type: 1,
                                        guildId: A.id,
                                        name: b.intl.string(b.t.NZI2Zk),
                                        size: E,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: d,
                                        sectionCollapsedToThreeRows: _,
                                    });
                                }
                                (c.push(i.length), l.push(i), d++);
                            }
                            h++;
                        }
                        let T = { ...o, count: r.length };
                        (n.push(T), e.push(m ? 0 : x));
                    }
                    if (null != r)
                        (0 !== r.unlocked.length &&
                            p(r.unlocked, {
                                type: O.s.SEARCH_RESULTS,
                                sectionId: O.s.SEARCH_RESULTS,
                                count: r.unlocked.length,
                                isNitroLocked: !1,
                            }),
                            0 !== r.locked.length &&
                                p(r.locked, {
                                    type: O.s.PREMIUM_UPSELL,
                                    categoryId: O.R2.PREMIUM_UPSELL,
                                    sectionId: O.s.PREMIUM_UPSELL,
                                    count: r.locked.length,
                                    isNitroLocked: !H,
                                }));
                    else {
                        let e = L.includes(O.R2.CUSTOM) ? O.R2.CUSTOM : f.Ay.getCategories()[0];
                        for (let n of L) {
                            if (n === e)
                                for (let e of I) {
                                    let t = a().compact(
                                        e.emojis.map((e) => {
                                            let { id: t } = e;
                                            return w.getById(t);
                                        }),
                                    );
                                    p(t, {
                                        type: O.s.PACK,
                                        pack: e,
                                        sectionId: `pack:${e.id}`,
                                        count: t.length,
                                        isNitroLocked: !W,
                                    });
                                }
                            if (n === O.R2.CUSTOM) {
                                function _(e) {
                                    let i = z.get(e);
                                    if (null == i) return;
                                    let l = i.filter(
                                        (n) =>
                                            !v.includes(
                                                N.Ay.getEmojiUnavailableReason({
                                                    emoji: n,
                                                    channel: t ?? g.A.getDefaultChannel(e),
                                                    intention: s,
                                                }),
                                            ),
                                    );
                                    if (0 === l.length) return;
                                    let r = A.A.getGuild(e),
                                        a =
                                            X ||
                                            (!H &&
                                                N.Ay.isEmojiCategoryNitroLocked({
                                                    categoryEmojis: l,
                                                    channel: t,
                                                    intention: s,
                                                }));
                                    p(l, {
                                        categoryId: n,
                                        guild: r,
                                        type: O.s.GUILD,
                                        sectionId: null != r ? r.id : (0, o.A)(),
                                        count: l.length,
                                        isNitroLocked: a,
                                    });
                                }
                                if ((null != M && _(M.id), (0, S.Re)(s)))
                                    for (let e of K) (null == M || M.id !== e) && _(e);
                            } else if (n === O.R2.TOP_GUILD_EMOJI) {
                                if (null != M) {
                                    let { allEmojis: e } = (0, x.W)({ topEmojis: F, newlyAddedEmojis: J });
                                    e.length > 0 &&
                                        p(e, {
                                            categoryId: n,
                                            guild: A.A.getGuild(M.id),
                                            type: O.s.TOP_GUILD_EMOJI,
                                            sectionId: O.s.TOP_GUILD_EMOJI,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                }
                            } else if (n === O.R2.RECENT) {
                                let e = (s === S.EmojiIntention.REACTION ? G : U).filter(
                                    (e) => !N.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                );
                                p(e, {
                                    categoryId: n,
                                    type: O.s.RECENT,
                                    sectionId: O.s.RECENT,
                                    count: e.length,
                                    isNitroLocked: !1,
                                });
                            } else if (n === O.R2.FAVORITES) {
                                let e = k.filter((e) => !N.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }));
                                0 !== e.length &&
                                    p(e, {
                                        categoryId: n,
                                        type: O.s.FAVORITES,
                                        sectionId: O.s.FAVORITES,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                            } else {
                                let e = f.Ay.getByCategory(n);
                                null != e &&
                                    p(e, {
                                        categoryId: n,
                                        type: O.s.UNICODE,
                                        sectionId: n,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        }
                    }
                }
                return { columnCounts: c, emojiGrid: l, rowCountBySection: e, sectionDescriptors: n };
            }, [w, u, E, m, r, i, z, V, t, s, F, J, H, W, L, M, K, I, G, U, k, X]);
        },
    },
);
