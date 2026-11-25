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
                    sortSectionEmojis: P,
                } = e,
                L = (0, c.bG)([d.Ay], () => d.Ay.categories),
                M = l.useMemo(() => (R ? f.Ay.getCategories() : L), [L, R]),
                D = (0, c.bG)([A.A], () => A.A.getGuild(t?.getGuildId()), [t]),
                w = t?.getGuildId() ?? n,
                k = (0, c.bG)([d.Ay], () => d.Ay.getDisambiguatedEmojiContext(w), [w]),
                U = (0, y.XI)(w),
                G = (0, y.Fj)(w),
                F = (0, y.QZ)(w),
                { topEmojis: J, newlyAddedEmojis: K } = (0, j.A)(w, s),
                V = (0, c.yK)([p.Ay], () => p.Ay.getFlattenedGuildIds(), []),
                B = (0, c.bG)([d.Ay], () => d.Ay.expandedSectionsByGuildIds),
                H = (0, c.bG)([_.default], () => _.default.getCurrentUser()),
                W = (0, C.ki)(H),
                X = (0, C.ki)(H, T.PremiumTypes.TIER_2),
                z = (0, h.k0)(),
                Y = k.getGroupedCustomEmoji();
            return l.useMemo(() => {
                let e = [],
                    n = [],
                    l = [],
                    c = [],
                    d = 0,
                    h = 0;
                if (null != k && null != u) {
                    let C = Math.floor(u / (E + 2 * m)),
                        j = 3 * C;
                    function p(r, o) {
                        let u = P?.(r, o) ?? r,
                            m = new Map(),
                            f = i.has(o.sectionId),
                            [I, g] = a().partition(u, (e) => {
                                let n = N.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                return (m.set(e, n), !n);
                            }),
                            A = I.concat(g),
                            p = o.guild,
                            _ = A.length > j && null != p && o.isNitroLocked,
                            x = _ && !B.has(p.id);
                        x && A.splice(j - 1);
                        let S = Math.ceil((_ ? A.length + 1 : A.length) / C),
                            T = [];
                        for (let e = 0; e < S; e++) {
                            let t = e * C,
                                n = t + C,
                                i = A.slice(t, n).map((e, t) => ({
                                    type: 0,
                                    emoji: e,
                                    size: E,
                                    isDisabled: m.get(e),
                                    rowIndex: h,
                                    columnIndex: t,
                                    visibleRowIndex: d,
                                    category: o.type,
                                    subCategory:
                                        o.sectionId === O.s.TOP_GUILD_EMOJI
                                            ? (0, y.DA)(J, K, e.id ?? e.uniqueName ?? e.name)
                                            : O.tm.NONE,
                                }));
                            if ((T.push(i), !f)) {
                                if (_ && e === S - 1) {
                                    let t = T[e];
                                    t.push({
                                        type: 1,
                                        guildId: p.id,
                                        name: b.intl.string(b.t.NZI2Zk),
                                        size: E,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: d,
                                        sectionCollapsedToThreeRows: x,
                                    });
                                }
                                (c.push(i.length), l.push(i), d++);
                            }
                            h++;
                        }
                        let R = { ...o, count: u.length };
                        (n.push(R), e.push(f ? 0 : S));
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
                                    isNitroLocked: !W,
                                }));
                    else {
                        let e = M.includes(O.R2.CUSTOM) ? O.R2.CUSTOM : f.Ay.getCategories()[0];
                        for (let n of M) {
                            if (n === e)
                                for (let e of I) {
                                    let t = a().compact(
                                        e.emojis.map((e) => {
                                            let { id: t } = e;
                                            return k.getById(t);
                                        }),
                                    );
                                    p(t, {
                                        type: O.s.PACK,
                                        pack: e,
                                        sectionId: `pack:${e.id}`,
                                        count: t.length,
                                        isNitroLocked: !X,
                                    });
                                }
                            if (n === O.R2.CUSTOM) {
                                function _(e) {
                                    let i = Y.get(e);
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
                                            z ||
                                            (!W &&
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
                                if ((null != D && _(D.id), (0, S.Re)(s)))
                                    for (let e of V) (null == D || D.id !== e) && _(e);
                            } else if (n === O.R2.TOP_GUILD_EMOJI) {
                                if (null != D) {
                                    let { allEmojis: e } = (0, x.W)({ topEmojis: J, newlyAddedEmojis: K });
                                    e.length > 0 &&
                                        p(e, {
                                            categoryId: n,
                                            guild: A.A.getGuild(D.id),
                                            type: O.s.TOP_GUILD_EMOJI,
                                            sectionId: O.s.TOP_GUILD_EMOJI,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                }
                            } else if (n === O.R2.RECENT) {
                                let e = (s === S.EmojiIntention.REACTION ? F : G).filter(
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
                                let e = U.filter((e) => !N.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }));
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
            }, [k, u, E, m, r, i, Y, B, t, s, J, K, W, X, M, D, V, I, F, G, U, z, P]);
        },
    },
);
