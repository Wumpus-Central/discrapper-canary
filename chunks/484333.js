"use strict";
n.d(t, { Mq: () => w, a2: () => L, bm: () => O, cr: () => M, wu: () => D }), n(321073);
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
    R = n(985018),
    O = (function (e) {
        return (
            (e[(e.EMOJI = 0)] = "EMOJI"),
            (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
            (e[(e.SOUNDMOJI = 2)] = "SOUNDMOJI"),
            e
        );
    })({});
let b = [C.Am.DISALLOW_EXTERNAL, C.Am.DISALLOW_CUSTOM],
    D = (e) => {
        let {
                channel: t,
                fallbackGuildId: n,
                collapsedSections: i,
                pickerIntention: l,
                emojiSearchResults: c,
                gridWidth: _,
                emojiPaddingHorizontal: f,
                emojiSpriteSize: O,
                shouldShowSoundmojiInEmojiPicker: D,
                showOnlyUnicode: L,
            } = e,
            w = (0, o.bG)([u.Ay], () => u.Ay.categories),
            M = r.useMemo(() => (L ? d.Ay.getCategories() : w), [w, L]),
            x = (0, o.bG)([E.A], () => E.A.getGuild(t?.getGuildId()), [t]),
            P = t?.getGuildId() ?? n,
            k = (0, o.bG)([u.Ay], () => u.Ay.getDisambiguatedEmojiContext(P), [P]),
            U = (0, S.XI)(P),
            G = (0, S.Fj)(P),
            F = (0, S.QZ)(P),
            { topEmojis: V, newlyAddedEmojis: B } = (0, v.A)(P, l),
            H = (0, o.yK)([g.Ay], () => g.Ay.getFlattenedGuildIds(), []),
            j = (0, o.bG)([u.Ay], () => u.Ay.expandedSectionsByGuildIds),
            Y = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
            W = (0, T.ki)(Y),
            K = (0, p.k0)(),
            $ = k.getGroupedCustomEmoji(),
            z = (0, h.Ym)({ location: "useEmojiGrid" });
        return r.useMemo(() => {
            let e = [],
                n = [],
                r = [],
                o = [],
                u = 0,
                p = 0;
            if (null != k && null != _) {
                let h = Math.floor(_ / (O + 2 * f)),
                    g = 3 * h,
                    A = (a, c) => {
                        let d = new Map(),
                            _ = i.has(c.sectionId),
                            [f, m] = s().partition(a, (e) => {
                                let n = I.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: l });
                                return d.set(e, n), !n;
                            }),
                            E = f.concat(m),
                            A = c.guild,
                            T = E.length > g && null != A && c.isNitroLocked,
                            y = T && !j.has(A.id);
                        y && E.splice(g - 1);
                        let v = Math.ceil((T ? E.length + 1 : E.length) / h),
                            C = [];
                        for (let e = 0; e < v; e++) {
                            let t = e * h,
                                n = t + h,
                                i = E.slice(t, n).map((e, t) => ({
                                    type: 0,
                                    emoji: e,
                                    size: O,
                                    isDisabled: d.get(e),
                                    rowIndex: p,
                                    columnIndex: t,
                                    visibleRowIndex: u,
                                    category: c.type,
                                    subCategory:
                                        c.sectionId === N.s.TOP_GUILD_EMOJI
                                            ? (0, S.DA)(V, B, e.id ?? e.uniqueName ?? e.name)
                                            : N.tm.NONE,
                                }));
                            if ((C.push(i), !_)) {
                                if (T && e === v - 1) {
                                    let t = C[e];
                                    t.push({
                                        type: 1,
                                        guildId: A.id,
                                        name: R.intl.string(R.t.NZI2Zk),
                                        size: O,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u,
                                        sectionCollapsedToThreeRows: y,
                                    });
                                }
                                o.push(i.length), r.push(i), u++;
                            }
                            p++;
                        }
                        let b = _ ? 0 : v,
                            D = { ...c, count: a.length };
                        n.push(D), e.push(b);
                    };
                if (null != c)
                    0 !== c.unlocked.length &&
                        A(c.unlocked, {
                            type: N.s.SEARCH_RESULTS,
                            sectionId: N.s.SEARCH_RESULTS,
                            count: c.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== c.locked.length &&
                            A(c.locked, {
                                type: N.s.PREMIUM_UPSELL,
                                categoryId: N.R2.PREMIUM_UPSELL,
                                sectionId: N.s.PREMIUM_UPSELL,
                                count: c.locked.length,
                                isNitroLocked: !W,
                            });
                else {
                    if (z && D) {
                        let t = [{ type: 2, rowIndex: p, columnIndex: 0, visibleRowIndex: u }];
                        n.push({
                            type: N.s.SOUNDMOJI,
                            categoryId: N.R2.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: t.length,
                            isNitroLocked: !1,
                        });
                        let s = i.has(N.R2.SOUNDMOJI);
                        !s && (o.push(t.length), r.push(t), u++), e.push(+!s), p++;
                    }
                    for (let e of M)
                        if (e === N.R2.CUSTOM) {
                            let n = (n) => {
                                let r = $.get(n);
                                if (null == r) return;
                                let i = r.filter(
                                    (e) =>
                                        !b.includes(
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
                                        K ||
                                        (!W &&
                                            I.Ay.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: t,
                                                intention: l,
                                            }));
                                A(i, {
                                    categoryId: e,
                                    guild: s,
                                    type: N.s.GUILD,
                                    sectionId: null != s ? s.id : (0, a.A)(),
                                    count: i.length,
                                    isNitroLocked: o,
                                });
                            };
                            if ((null != x && n(x.id), (0, C.Re)(l)))
                                for (let e of H) (null == x || x.id !== e) && n(e);
                        } else if (e === N.R2.TOP_GUILD_EMOJI) {
                            if (null != x) {
                                let { allEmojis: t } = (0, y.W)({ topEmojis: V, newlyAddedEmojis: B });
                                t.length > 0 &&
                                    A(t, {
                                        categoryId: e,
                                        guild: E.A.getGuild(x.id),
                                        type: N.s.TOP_GUILD_EMOJI,
                                        sectionId: N.s.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === N.R2.RECENT) {
                            let n = (l === C.b_.REACTION ? F : G).filter(
                                (e) => !I.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: l }),
                            );
                            A(n, {
                                categoryId: e,
                                type: N.s.RECENT,
                                sectionId: N.s.RECENT,
                                count: n.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === N.R2.FAVORITES) {
                            let n = U.filter((e) => !I.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: l }));
                            0 !== n.length &&
                                A(n, {
                                    categoryId: e,
                                    type: N.s.FAVORITES,
                                    sectionId: N.s.FAVORITES,
                                    count: n.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = d.Ay.getByCategory(e);
                            null != t &&
                                A(t, {
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
        }, [k, _, O, f, c, i, $, j, t, l, V, B, W, M, x, H, F, G, U, K, z, D]);
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
    M = (e) => {
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
