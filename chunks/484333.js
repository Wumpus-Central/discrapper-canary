"use strict";
n.d(t, { Mq: () => k, a2: () => M, bm: () => R, cr: () => O, wu: () => L }), n(321073);
var i,
    l,
    s = n(64700),
    r = n(735438),
    a = n.n(r),
    o = n(835245),
    c = n(311907),
    u = n(554375),
    d = n(508675),
    h = n(770335),
    m = n(7584),
    p = n(850992),
    f = n(151271),
    g = n(526292),
    _ = n(704591),
    x = n(808728),
    A = n(71393),
    C = n(711014),
    E = n(287809),
    I = n(690521),
    v = n(474090),
    y = n(822123),
    S = n(818645),
    b = n(316884),
    N = n(732139),
    T = n(307731),
    j = n(985018),
    R =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let w = [T.EmojiDisabledReasons.DISALLOW_EXTERNAL, T.EmojiDisabledReasons.DISALLOW_CUSTOM],
    L = (e) => {
        let {
                channel: t,
                fallbackGuildId: n,
                collapsedSections: i,
                pickerIntention: l,
                emojiSearchResults: r,
                gridWidth: u,
                emojiPaddingHorizontal: h,
                emojiSpriteSize: p,
                shouldShowSoundmojiInEmojiPicker: f,
                showOnlyUnicode: R,
            } = e,
            L = (0, c.bG)([d.Ay], () => d.Ay.categories),
            M = s.useMemo(() => (R ? m.Ay.getCategories() : L), [L, R]),
            k = (0, c.bG)([A.A], () => A.A.getGuild(t?.getGuildId()), [t]),
            O = t?.getGuildId() ?? n,
            P = (0, c.bG)([d.Ay], () => d.Ay.getDisambiguatedEmojiContext(O), [O]),
            D = (0, y.XI)(O),
            U = (0, y.Fj)(O),
            V = (0, y.QZ)(O),
            { topEmojis: G, newlyAddedEmojis: F } = (0, b.A)(O, l),
            B = (0, c.yK)([C.Ay], () => C.Ay.getFlattenedGuildIds(), []),
            H = (0, c.bG)([d.Ay], () => d.Ay.expandedSectionsByGuildIds),
            W = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
            K = (0, v.ki)(W),
            z = (0, g.k0)(),
            Z = P.getGroupedCustomEmoji(),
            q = (0, _.Ym)({ location: "useEmojiGrid" });
        return s.useMemo(() => {
            let e = [],
                n = [],
                s = [],
                c = [],
                d = 0,
                g = 0;
            if (null != P && null != u) {
                let _ = Math.floor(u / (p + 2 * h)),
                    C = 3 * _,
                    E = (r, o) => {
                        let u = new Map(),
                            h = i.has(o.sectionId),
                            [m, f] = a().partition(r, (e) => {
                                let n = I.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: l });
                                return u.set(e, n), !n;
                            }),
                            x = m.concat(f),
                            A = o.guild,
                            E = x.length > C && null != A && o.isNitroLocked,
                            v = E && !H.has(A.id);
                        v && x.splice(C - 1);
                        let S = Math.ceil((E ? x.length + 1 : x.length) / _),
                            b = [];
                        for (let e = 0; e < S; e++) {
                            let t = e * _,
                                n = t + _,
                                i = x
                                    .slice(t, n)
                                    .map((e, t) => ({
                                        type: 0,
                                        emoji: e,
                                        size: p,
                                        isDisabled: u.get(e),
                                        rowIndex: g,
                                        columnIndex: t,
                                        visibleRowIndex: d,
                                        category: o.type,
                                        subCategory:
                                            o.sectionId === N.s.TOP_GUILD_EMOJI
                                                ? (0, y.DA)(G, F, e.id ?? e.uniqueName ?? e.name)
                                                : N.tm.NONE,
                                    }));
                            if ((b.push(i), !h)) {
                                if (E && e === S - 1) {
                                    let t = b[e];
                                    t.push({
                                        type: 1,
                                        guildId: A.id,
                                        name: j.intl.string(j.t.NZI2Zk),
                                        size: p,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: d,
                                        sectionCollapsedToThreeRows: v,
                                    });
                                }
                                c.push(i.length), s.push(i), d++;
                            }
                            g++;
                        }
                        let T = { ...o, count: r.length };
                        n.push(T), e.push(h ? 0 : S);
                    };
                if (null != r)
                    0 !== r.unlocked.length &&
                        E(r.unlocked, {
                            type: N.s.SEARCH_RESULTS,
                            sectionId: N.s.SEARCH_RESULTS,
                            count: r.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== r.locked.length &&
                            E(r.locked, {
                                type: N.s.PREMIUM_UPSELL,
                                categoryId: N.R2.PREMIUM_UPSELL,
                                sectionId: N.s.PREMIUM_UPSELL,
                                count: r.locked.length,
                                isNitroLocked: !K,
                            });
                else {
                    if (q && f) {
                        let t = [{ type: 2, rowIndex: g, columnIndex: 0, visibleRowIndex: d }];
                        n.push({
                            type: N.s.SOUNDMOJI,
                            categoryId: N.R2.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: t.length,
                            isNitroLocked: !1,
                        });
                        let l = i.has(N.R2.SOUNDMOJI);
                        !l && (c.push(t.length), s.push(t), d++), e.push(+!l), g++;
                    }
                    for (let e of M)
                        if (e === N.R2.CUSTOM) {
                            let n = (n) => {
                                let i = Z.get(n);
                                if (null == i) return;
                                let s = i.filter(
                                    (e) =>
                                        !w.includes(
                                            I.Ay.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: t ?? x.Ay.getDefaultChannel(n),
                                                intention: l,
                                            }),
                                        ),
                                );
                                if (0 === s.length) return;
                                let r = A.A.getGuild(n),
                                    a =
                                        z ||
                                        (!K &&
                                            I.Ay.isEmojiCategoryNitroLocked({
                                                categoryEmojis: s,
                                                channel: t,
                                                intention: l,
                                            }));
                                E(s, {
                                    categoryId: e,
                                    guild: r,
                                    type: N.s.GUILD,
                                    sectionId: null != r ? r.id : (0, o.A)(),
                                    count: s.length,
                                    isNitroLocked: a,
                                });
                            };
                            if ((null != k && n(k.id), (0, T.isExternalEmojiAllowedForIntention)(l)))
                                for (let e of B) (null == k || k.id !== e) && n(e);
                        } else if (e === N.R2.TOP_GUILD_EMOJI) {
                            if (null != k) {
                                let { allEmojis: t } = (0, S.W)({ topEmojis: G, newlyAddedEmojis: F });
                                t.length > 0 &&
                                    E(t, {
                                        categoryId: e,
                                        guild: A.A.getGuild(k.id),
                                        type: N.s.TOP_GUILD_EMOJI,
                                        sectionId: N.s.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === N.R2.RECENT) {
                            let n = (l === T.EmojiIntention.REACTION ? V : U).filter(
                                (e) => !I.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: l }),
                            );
                            E(n, {
                                categoryId: e,
                                type: N.s.RECENT,
                                sectionId: N.s.RECENT,
                                count: n.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === N.R2.FAVORITES) {
                            let n = D.filter((e) => !I.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: l }));
                            0 !== n.length &&
                                E(n, {
                                    categoryId: e,
                                    type: N.s.FAVORITES,
                                    sectionId: N.s.FAVORITES,
                                    count: n.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = m.Ay.getByCategory(e);
                            null != t &&
                                E(t, {
                                    categoryId: e,
                                    type: N.s.UNICODE,
                                    sectionId: e,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        }
                }
            }
            return { columnCounts: c, emojiGrid: s, rowCountBySection: e, sectionDescriptors: n };
        }, [P, u, p, h, r, i, Z, H, t, l, G, F, K, M, k, B, V, U, D, z, q, f]);
    };
var M = (((l = {})[(l.PREMIUM = 0)] = "PREMIUM"), (l[(l.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), l);
let k = (e) => {
        let {
                pickerIntention: t,
                selectedChannel: n,
                fallbackGuildId: i,
                onSelectEmoji: l,
                setUpsellConfigs: r,
                emojiSelectAnalytics: a,
                trackEmojiFavorited: o,
            } = e,
            m = (0, c.bG)([d.Ay], () => d.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
        return s.useCallback(
            (e, i) => {
                if (0 === e.type) {
                    let { emoji: s } = e;
                    if (null == s) return;
                    let c = I.Ay.getEmojiUnavailableReason({ emoji: s, channel: n, intention: t });
                    if (i.toggleFavorite)
                        return void (m.isFavoriteEmojiWithoutFetchingLatest(s) || null != c
                            ? (0, u.Sw)(s)
                            : (o?.(e), (0, u.V4)(s)));
                    if (c !== T.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                        if (c === T.EmojiDisabledReasons.PREMIUM_LOCKED) return void r({ type: 0, emojiDescriptor: e });
                        if (c === T.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && s.type === h.i.GUILD)
                            return void r({ type: 1, guildId: s.guildId, emojiId: s.id });
                        c !== T.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                            (a?.(e), l({ emoji: s, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                    }
                }
            },
            [n, t, l, r, m, a, o],
        );
    },
    O = (e) => {
        let { emojiListRef: t } = e,
            n = (0, f.RQ)((e) => e.searchQuery),
            i = s.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
        return s.useCallback(
            (e) => {
                "" !== n ? ((0, f.Ri)(""), p.Om.setActiveCategoryIndex(e)) : i(e);
            },
            [i, n],
        );
    };
