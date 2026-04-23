"use strict";
n.d(t, { Mq: () => P, a2: () => M, bm: () => D, cr: () => x, wu: () => w }), n(321073);
var r,
    i,
    s = n(64700),
    a = n(735438),
    o = n.n(a),
    l = n(835245),
    u = n(311907),
    c = n(554375),
    d = n(508675),
    _ = n(770335),
    f = n(7584),
    p = n(850992),
    h = n(151271),
    E = n(526292),
    m = n(704591),
    g = n(808728),
    A = n(71393),
    I = n(711014),
    T = n(287809),
    S = n(690521),
    y = n(474090),
    N = n(822123),
    v = n(818645),
    C = n(316884),
    O = n(732139),
    R = n(307731),
    b = n(985018),
    D =
        (((r = {})[(r.EMOJI = 0)] = "EMOJI"),
        (r[(r.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (r[(r.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        r);
let L = [R.EmojiDisabledReasons.DISALLOW_EXTERNAL, R.EmojiDisabledReasons.DISALLOW_CUSTOM],
    w = (e) => {
        let {
                channel: t,
                fallbackGuildId: n,
                collapsedSections: r,
                pickerIntention: i,
                emojiSearchResults: a,
                gridWidth: c,
                emojiPaddingHorizontal: _,
                emojiSpriteSize: p,
                shouldShowSoundmojiInEmojiPicker: h,
                showOnlyUnicode: D,
            } = e,
            w = (0, u.bG)([d.Ay], () => d.Ay.categories),
            M = s.useMemo(() => (D ? f.Ay.getCategories() : w), [w, D]),
            P = (0, u.bG)([A.A], () => A.A.getGuild(t?.getGuildId()), [t]),
            x = t?.getGuildId() ?? n,
            k = (0, u.bG)([d.Ay], () => d.Ay.getDisambiguatedEmojiContext(x), [x]),
            U = (0, N.XI)(x),
            G = (0, N.Fj)(x),
            F = (0, N.QZ)(x),
            { topEmojis: V, newlyAddedEmojis: B } = (0, C.A)(x, i),
            H = (0, u.yK)([I.Ay], () => I.Ay.getFlattenedGuildIds(), []),
            j = (0, u.bG)([d.Ay], () => d.Ay.expandedSectionsByGuildIds),
            Y = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
            W = (0, y.ki)(Y),
            K = (0, E.k0)(),
            $ = k.getGroupedCustomEmoji(),
            z = (0, m.Ym)({ location: "useEmojiGrid" });
        return s.useMemo(() => {
            let e = [],
                n = [],
                s = [],
                u = [],
                d = 0,
                E = 0;
            if (null != k && null != c) {
                let m = Math.floor(c / (p + 2 * _)),
                    I = 3 * m,
                    T = (a, l) => {
                        let c = new Map(),
                            _ = r.has(l.sectionId),
                            [f, h] = o().partition(a, (e) => {
                                let n = S.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: i });
                                return c.set(e, n), !n;
                            }),
                            g = f.concat(h),
                            A = l.guild,
                            T = g.length > I && null != A && l.isNitroLocked,
                            y = T && !j.has(A.id);
                        y && g.splice(I - 1);
                        let v = Math.ceil((T ? g.length + 1 : g.length) / m),
                            C = [];
                        for (let e = 0; e < v; e++) {
                            let t = e * m,
                                n = t + m,
                                r = g
                                    .slice(t, n)
                                    .map((e, t) => ({
                                        type: 0,
                                        emoji: e,
                                        size: p,
                                        isDisabled: c.get(e),
                                        rowIndex: E,
                                        columnIndex: t,
                                        visibleRowIndex: d,
                                        category: l.type,
                                        subCategory:
                                            l.sectionId === O.s.TOP_GUILD_EMOJI
                                                ? (0, N.DA)(V, B, e.id ?? e.uniqueName ?? e.name)
                                                : O.tm.NONE,
                                    }));
                            if ((C.push(r), !_)) {
                                if (T && e === v - 1) {
                                    let t = C[e];
                                    t.push({
                                        type: 1,
                                        guildId: A.id,
                                        name: b.intl.string(b.t.NZI2Zk),
                                        size: p,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: d,
                                        sectionCollapsedToThreeRows: y,
                                    });
                                }
                                u.push(r.length), s.push(r), d++;
                            }
                            E++;
                        }
                        let R = { ...l, count: a.length };
                        n.push(R), e.push(_ ? 0 : v);
                    };
                if (null != a)
                    0 !== a.unlocked.length &&
                        T(a.unlocked, {
                            type: O.s.SEARCH_RESULTS,
                            sectionId: O.s.SEARCH_RESULTS,
                            count: a.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== a.locked.length &&
                            T(a.locked, {
                                type: O.s.PREMIUM_UPSELL,
                                categoryId: O.R2.PREMIUM_UPSELL,
                                sectionId: O.s.PREMIUM_UPSELL,
                                count: a.locked.length,
                                isNitroLocked: !W,
                            });
                else {
                    if (z && h) {
                        let t = [{ type: 2, rowIndex: E, columnIndex: 0, visibleRowIndex: d }];
                        n.push({
                            type: O.s.SOUNDMOJI,
                            categoryId: O.R2.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: t.length,
                            isNitroLocked: !1,
                        });
                        let i = r.has(O.R2.SOUNDMOJI);
                        !i && (u.push(t.length), s.push(t), d++), e.push(+!i), E++;
                    }
                    for (let e of M)
                        if (e === O.R2.CUSTOM) {
                            let n = (n) => {
                                let r = $.get(n);
                                if (null == r) return;
                                let s = r.filter(
                                    (e) =>
                                        !L.includes(
                                            S.Ay.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: t ?? g.Ay.getDefaultChannel(n),
                                                intention: i,
                                            }),
                                        ),
                                );
                                if (0 === s.length) return;
                                let a = A.A.getGuild(n),
                                    o =
                                        K ||
                                        (!W &&
                                            S.Ay.isEmojiCategoryNitroLocked({
                                                categoryEmojis: s,
                                                channel: t,
                                                intention: i,
                                            }));
                                T(s, {
                                    categoryId: e,
                                    guild: a,
                                    type: O.s.GUILD,
                                    sectionId: null != a ? a.id : (0, l.A)(),
                                    count: s.length,
                                    isNitroLocked: o,
                                });
                            };
                            if ((null != P && n(P.id), (0, R.isExternalEmojiAllowedForIntention)(i)))
                                for (let e of H) (null == P || P.id !== e) && n(e);
                        } else if (e === O.R2.TOP_GUILD_EMOJI) {
                            if (null != P) {
                                let { allEmojis: t } = (0, v.W)({ topEmojis: V, newlyAddedEmojis: B });
                                t.length > 0 &&
                                    T(t, {
                                        categoryId: e,
                                        guild: A.A.getGuild(P.id),
                                        type: O.s.TOP_GUILD_EMOJI,
                                        sectionId: O.s.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === O.R2.RECENT) {
                            let n = (i === R.EmojiIntention.REACTION ? F : G).filter(
                                (e) => !S.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                            );
                            T(n, {
                                categoryId: e,
                                type: O.s.RECENT,
                                sectionId: O.s.RECENT,
                                count: n.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === O.R2.FAVORITES) {
                            let n = U.filter((e) => !S.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }));
                            0 !== n.length &&
                                T(n, {
                                    categoryId: e,
                                    type: O.s.FAVORITES,
                                    sectionId: O.s.FAVORITES,
                                    count: n.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = f.Ay.getByCategory(e);
                            null != t &&
                                T(t, {
                                    categoryId: e,
                                    type: O.s.UNICODE,
                                    sectionId: e,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        }
                }
            }
            return { columnCounts: u, emojiGrid: s, rowCountBySection: e, sectionDescriptors: n };
        }, [k, c, p, _, a, r, $, j, t, i, V, B, W, M, P, H, F, G, U, K, z, h]);
    };
var M = (((i = {})[(i.PREMIUM = 0)] = "PREMIUM"), (i[(i.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), i);
let P = (e) => {
        let {
                pickerIntention: t,
                selectedChannel: n,
                fallbackGuildId: r,
                onSelectEmoji: i,
                setUpsellConfigs: a,
                emojiSelectAnalytics: o,
                trackEmojiFavorited: l,
            } = e,
            f = (0, u.bG)([d.Ay], () => d.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? r), [r, n]);
        return s.useCallback(
            (e, r) => {
                if (0 === e.type) {
                    let { emoji: s } = e;
                    if (null == s) return;
                    let u = S.Ay.getEmojiUnavailableReason({ emoji: s, channel: n, intention: t });
                    if (r.toggleFavorite)
                        return void (f.isFavoriteEmojiWithoutFetchingLatest(s) || null != u
                            ? (0, c.Sw)(s)
                            : (l?.(e), (0, c.V4)(s)));
                    if (u !== R.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                        if (u === R.EmojiDisabledReasons.PREMIUM_LOCKED) return void a({ type: 0, emojiDescriptor: e });
                        if (u === R.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && s.type === _.i.GUILD)
                            return void a({ type: 1, guildId: s.guildId, emojiId: s.id });
                        u !== R.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                            (o?.(e), i({ emoji: s, willClose: r.isFinalSelection, isBurst: r.isBurst }));
                    }
                }
            },
            [n, t, i, a, f, o, l],
        );
    },
    x = (e) => {
        let { emojiListRef: t } = e,
            n = (0, h.RQ)((e) => e.searchQuery),
            r = s.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
        return s.useCallback(
            (e) => {
                "" !== n ? ((0, h.Ri)(""), p.Om.setActiveCategoryIndex(e)) : r(e);
            },
            [r, n],
        );
    };
