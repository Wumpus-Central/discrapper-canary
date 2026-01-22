n.d(t, {
    Mq: () => M,
    a2: () => j,
    bm: () => D,
    cr: () => k,
    wu: () => L,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(835245),
    o = n(311907),
    l = n(554375),
    c = n(508675),
    u = n(770335),
    d = n(7584),
    f = n(850992),
    p = n(151271),
    _ = n(526292),
    h = n(704591),
    m = n(808728),
    g = n(71393),
    E = n(711014),
    b = n(287809),
    y = n(690521),
    O = n(474090),
    A = n(822123),
    v = n(818645),
    S = n(316884),
    I = n(732139),
    T = n(307731),
    C = n(985018);

function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}

function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var D = (function (e) {
    return (
        (e[(e.EMOJI = 0)] = "EMOJI"),
        (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (e[(e.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        e
    );
})({});
let x = [T.Am.DISALLOW_EXTERNAL, T.Am.DISALLOW_CUSTOM],
    L = (e) => {
        var t;
        let {
                channel: n,
                fallbackGuildId: i,
                collapsedSections: l,
                pickerIntention: f,
                emojiSearchResults: p,
                gridWidth: N,
                emojiPaddingHorizontal: w,
                emojiSpriteSize: D,
                shouldShowSoundmojiInEmojiPicker: L,
                showOnlyUnicode: j,
            } = e,
            M = (0, o.bG)([c.Ay], () => c.Ay.categories),
            k = r.useMemo(() => (j ? d.Ay.getCategories() : M), [M, j]),
            U = (0, o.bG)([g.A], () => g.A.getGuild(null == n ? void 0 : n.getGuildId()), [n]),
            G = null != (t = null == n ? void 0 : n.getGuildId()) ? t : i,
            V = (0, o.bG)([c.Ay], () => c.Ay.getDisambiguatedEmojiContext(G), [G]),
            F = (0, A.XI)(G),
            B = (0, A.Fj)(G),
            H = (0, A.QZ)(G),
            { topEmojis: Y, newlyAddedEmojis: W } = (0, S.A)(G, f),
            K = (0, o.yK)([E.Ay], () => E.Ay.getFlattenedGuildIds(), []),
            z = (0, o.bG)([c.Ay], () => c.Ay.expandedSectionsByGuildIds),
            q = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
            X = (0, O.ki)(q),
            Z = (0, _.k0)(),
            Q = V.getCustomEmoji(),
            $ = (e) => {
                if (e.type === u.i.GUILD) return e.guildId;
            },
            J = r.useMemo(() => a().groupBy(Q, $), [Q]),
            ee = (0, h.Ym)({
                location: "useEmojiGrid",
            });
        return r.useMemo(() => {
            let e = [],
                t = [],
                r = [],
                i = [],
                o = 0,
                c = 0;
            if (null != V && null != N) {
                let u = Math.floor(N / (D + 2 * w)),
                    _ = 3 * u,
                    h = (s, d) => {
                        let p = new Map(),
                            h = l.has(d.sectionId),
                            [m, g] = a().partition(s, (e) => {
                                let t = y.Ay.isEmojiDisabled({
                                    emoji: e,
                                    channel: n,
                                    intention: f,
                                });
                                return p.set(e, t), !t;
                            }),
                            E = m.concat(g),
                            b = d.guild,
                            O = E.length > _ && null != b && d.isNitroLocked,
                            v = O && !z.has(b.id);
                        v && E.splice(_ - 1);
                        let S = Math.ceil((O ? E.length + 1 : E.length) / u),
                            T = [];
                        for (let e = 0; e < S; e++) {
                            let t = e * u,
                                n = t + u,
                                a = E.slice(t, n).map((e, t) => {
                                    var n, r;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: D,
                                        isDisabled: p.get(e),
                                        rowIndex: c,
                                        columnIndex: t,
                                        visibleRowIndex: o,
                                        category: d.type,
                                        subCategory:
                                            d.sectionId === I.s.TOP_GUILD_EMOJI
                                                ? (0, A.DA)(
                                                      Y,
                                                      W,
                                                      null != (n = null != (r = e.id) ? r : e.uniqueName) ? n : e.name,
                                                  )
                                                : I.tm.NONE,
                                    };
                                });
                            if ((T.push(a), !h)) {
                                if (O && e === S - 1) {
                                    let t = T[e];
                                    t.push({
                                        type: 1,
                                        guildId: b.id,
                                        name: C.intl.string(C.t.NZI2Zk),
                                        size: D,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: o,
                                        sectionCollapsedToThreeRows: v,
                                    });
                                }
                                i.push(a.length), r.push(a), o++;
                            }
                            c++;
                        }
                        let N = h ? 0 : S,
                            w = P(R({}, d), {
                                count: s.length,
                            });
                        t.push(w), e.push(N);
                    };
                if (null != p)
                    0 !== p.unlocked.length &&
                        h(p.unlocked, {
                            type: I.s.SEARCH_RESULTS,
                            sectionId: I.s.SEARCH_RESULTS,
                            count: p.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== p.locked.length &&
                            h(p.locked, {
                                type: I.s.PREMIUM_UPSELL,
                                categoryId: I.R2.PREMIUM_UPSELL,
                                sectionId: I.s.PREMIUM_UPSELL,
                                count: p.locked.length,
                                isNitroLocked: !X,
                            });
                else {
                    if (ee && L) {
                        let n = [
                            {
                                type: 2,
                                rowIndex: c,
                                columnIndex: 0,
                                visibleRowIndex: o,
                            },
                        ];
                        t.push({
                            type: I.s.SOUNDMOJI,
                            categoryId: I.R2.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: n.length,
                            isNitroLocked: !1,
                        });
                        let a = l.has(I.R2.SOUNDMOJI);
                        !a && (i.push(n.length), r.push(n), o++), e.push(+!a), c++;
                    }
                    for (let e of k)
                        if (e === I.R2.CUSTOM) {
                            let t = (t) => {
                                let r = J[t];
                                if (null == r) return;
                                let i = r.filter(
                                    (e) =>
                                        !x.includes(
                                            y.Ay.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: null != n ? n : m.Ay.getDefaultChannel(t),
                                                intention: f,
                                            }),
                                        ),
                                );
                                if (0 === i.length) return;
                                let a = g.A.getGuild(t),
                                    o =
                                        Z ||
                                        (!X &&
                                            y.Ay.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: n,
                                                intention: f,
                                            }));
                                h(i, {
                                    categoryId: e,
                                    guild: a,
                                    type: I.s.GUILD,
                                    sectionId: null != a ? a.id : (0, s.A)(),
                                    count: i.length,
                                    isNitroLocked: o,
                                });
                            };
                            if ((null != U && t(U.id), (0, T.Re)(f)))
                                for (let e of K) (null == U || U.id !== e) && t(e);
                        } else if (e === I.R2.TOP_GUILD_EMOJI) {
                            if (null != U) {
                                let { allEmojis: t } = (0, v.W)({
                                    topEmojis: Y,
                                    newlyAddedEmojis: W,
                                });
                                t.length > 0 &&
                                    h(t, {
                                        categoryId: e,
                                        guild: g.A.getGuild(U.id),
                                        type: I.s.TOP_GUILD_EMOJI,
                                        sectionId: I.s.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === I.R2.RECENT) {
                            let t = (f === T.b_.REACTION ? H : B).filter(
                                (e) =>
                                    !y.Ay.isEmojiFiltered({
                                        emoji: e,
                                        channel: n,
                                        intention: f,
                                    }),
                            );
                            h(t, {
                                categoryId: e,
                                type: I.s.RECENT,
                                sectionId: I.s.RECENT,
                                count: t.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === I.R2.FAVORITES) {
                            let t = F.filter(
                                (e) =>
                                    !y.Ay.isEmojiFiltered({
                                        emoji: e,
                                        channel: n,
                                        intention: f,
                                    }),
                            );
                            0 !== t.length &&
                                h(t, {
                                    categoryId: e,
                                    type: I.s.FAVORITES,
                                    sectionId: I.s.FAVORITES,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = d.Ay.getByCategory(e);
                            null != t &&
                                h(t, {
                                    categoryId: e,
                                    type: I.s.UNICODE,
                                    sectionId: e,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        }
                }
            }
            return {
                columnCounts: i,
                emojiGrid: r,
                rowCountBySection: e,
                sectionDescriptors: t,
            };
        }, [V, N, D, w, p, l, J, z, n, f, Y, W, X, k, U, K, H, B, F, Z, ee, L]);
    };
var j = (function (e) {
    return (e[(e.PREMIUM = 0)] = "PREMIUM"), (e[(e.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), e;
})({});
let M = (e) => {
        let {
                pickerIntention: t,
                selectedChannel: n,
                fallbackGuildId: i,
                onSelectEmoji: a,
                setUpsellConfigs: s,
                emojiSelectAnalytics: d,
                trackEmojiFavorited: f,
            } = e,
            p = (0, o.bG)([c.Ay], () => {
                var e;
                return c.Ay.getDisambiguatedEmojiContext(null != (e = null == n ? void 0 : n.getGuildId()) ? e : i);
            }, [i, n]);
        return r.useCallback(
            (e, r) => {
                if (0 === e.type) {
                    let { emoji: i } = e;
                    if (null == i) return;
                    let o = y.Ay.getEmojiUnavailableReason({
                        emoji: i,
                        channel: n,
                        intention: t,
                    });
                    if (r.toggleFavorite)
                        return void (p.isFavoriteEmojiWithoutFetchingLatest(i) || null != o
                            ? (0, l.Sw)(i)
                            : (null == f || f(e), (0, l.V4)(i)));
                    if (o !== T.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                        if (o === T.Am.PREMIUM_LOCKED)
                            return void s({
                                type: 0,
                                emojiDescriptor: e,
                            });
                        if (o === T.Am.ROLE_SUBSCRIPTION_LOCKED && i.type === u.i.GUILD)
                            return void s({
                                type: 1,
                                guildId: i.guildId,
                                emojiId: i.id,
                            });
                        o !== T.Am.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                            (null == d || d(e),
                            a({
                                emoji: i,
                                willClose: r.isFinalSelection,
                                isBurst: r.isBurst,
                            }));
                    }
                }
            },
            [n, t, a, s, p, d, f],
        );
    },
    k = (e) => {
        let { emojiListRef: t } = e,
            n = (0, p.RQ)((e) => e.searchQuery),
            i = r.useCallback(
                (e) => {
                    var n;
                    return null == (n = t.current) ? void 0 : n.scrollToSectionTop(e);
                },
                [t],
            );
        return r.useCallback(
            (e) => {
                "" !== n ? ((0, p.Ri)(""), f.Om.setActiveCategoryIndex(e)) : i(e);
            },
            [i, n],
        );
    };
