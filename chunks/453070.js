n.d(t, {
    Go: () => R,
    LZ: () => D,
    Pq: () => O,
    RJ: () => P,
    Sd: () => M,
    XW: () => x,
    el: () => S,
    fP: () => N,
    fQ: () => T,
    t$: () => I
}),
    n(539854),
    n(388685),
    n(290780);
var r = n(192379),
    i = n(442837),
    a = n(357156),
    o = n(695346),
    s = n(516373),
    l = n(430824),
    c = n(914010),
    u = n(771845),
    d = n(594174),
    f = n(267642),
    _ = n(700785),
    p = n(285651),
    h = n(268350),
    m = n(822179),
    g = n(926491),
    E = n(373228),
    b = n(378233),
    y = n(981631),
    v = n(388032);
let O = (e) => {
        N();
        let t = (0, i.e7)([g.Z], () => g.Z.hasLoadedStickerPacks);
        r.useEffect(() => {
            t && null == g.Z.getStickerPack(e) && (0, h.FQ)(e);
        }, [e, t]);
    },
    I = (e) => {
        let t = o.Wp.useSetting();
        return (0, b.WD)(t, e);
    },
    S = (e) => {
        let { collapsedStickersCategories: t, filteredStickers: n, listPaddingRight: i = 0, listWidth: o = 0, stickerNodeMargin: s = 0, stickerNodeWidth: u, stickersCategories: d } = e;
        return r.useMemo(() => {
            let e = Math.floor((o - i + s) / (u + s)),
                r = Math.floor(Math.max(s, (o - i - u * e) / (e - 1))),
                _ = [],
                p = [],
                h = [],
                m = 0,
                g = 0,
                y = 0;
            if (0 !== o) {
                let r = function (t, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = (0, b.J8)(t[0]) ? l.Z.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: o } = (0, a.Gw)(i),
                        s = c.Z.getGuildId(),
                        u = d.findIndex((e) => e.type === E.Ih.FAVORITE),
                        O = d.findIndex((e) => e.type === E.Ih.RECENT),
                        I = t.length;
                    null != i && s === i.id && o && t.length < (0, f.A3)(i.premiumTier) && I++;
                    let S = Math.ceil(I / e);
                    p[g] = r ? 0 : S;
                    for (let a = 0; a < S; a++) {
                        let o = a * e,
                            s = o + e,
                            l = t.slice(o, s).map((e, t) => ({
                                type: E.al.STICKER,
                                sticker: e,
                                packId: (0, b.jl)(e) ? e.pack_id : 'TODO - fix',
                                gridSectionIndex: g,
                                rowIndex: m,
                                columnIndex: t,
                                visibleRowIndex: y,
                                category: n
                            }));
                        g > O &&
                            g > u &&
                            null != i &&
                            I > t.length &&
                            l.push({
                                type: E.al.CREATE_STICKER,
                                guild_id: i.id,
                                name: v.NW.string(v.t['UwF+Cw']),
                                gridSectionIndex: g,
                                rowIndex: m,
                                columnIndex: l.length,
                                visibleRowIndex: y
                            }),
                            r || (y++, h.push(l), _.push(l.length)),
                            m++;
                    }
                    g++;
                };
                if (null == n) for (let e of d) e.stickers.length > 0 ? (m++, r(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === E.Ih.EMPTY_GUILD_UPSELL && ((p[g] = 0), g++);
                else n.sendable.length > 0 && r(n.sendable, E.Ih.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && r(n.sendableWithPremium, E.Ih.SEARCH_RESULTS);
            }
            return {
                rowCount: m,
                rowCountBySection: p,
                stickersGrid: h,
                gutterWidth: r,
                columnCounts: _
            };
        }, [t, n, i, o, s, u, d]);
    },
    T = (e) => {
        let t = (0, i.e7)([d.default], () => d.default.getCurrentUser());
        return (0, i.e7)(
            [g.Z],
            () => {
                for (let n of g.Z.getAllStickersIterator()) if ((0, p.kl)(n, t, e)) return !0;
                return !1;
            },
            [t, e]
        );
    },
    N = () => {
        r.useEffect(() => {
            (0, h.$p)();
        }, []);
    },
    A = (e) => {
        let t = (0, i.e7)([g.Z], () => g.Z.getAllGuildStickers()),
            n = (0, i.Wu)(
                [u.ZP, l.Z],
                () => {
                    let e = u.ZP.getFlattenedGuildIds(),
                        t = [];
                    return (
                        e.forEach((e) => {
                            let n = l.Z.getGuild(e);
                            null != n && t.push(n);
                        }),
                        t
                    );
                },
                []
            ),
            o = (0, i.e7)([d.default], () => d.default.getCurrentUser());
        return r.useMemo(() => {
            let r = [];
            for (let { name: e, id: i } of n) {
                let n = t.get(i);
                null != n &&
                    0 !== n.length &&
                    r.push({
                        type: E.Ih.GUILD,
                        id: i,
                        name: e,
                        stickers: n
                    });
            }
            if ((null == e ? void 0 : e.getGuildId()) != null) {
                let t = l.Z.getGuild(e.getGuildId()),
                    { canManageAllExpressions: n } = (0, a.Gw)(t),
                    i = r.findIndex((t) => t.id === e.getGuildId());
                i >= 1
                    ? r.unshift(r.splice(i, 1)[0])
                    : -1 === i &&
                      null != t &&
                      n &&
                      r.unshift({
                          type: E.Ih.EMPTY_GUILD_UPSELL,
                          id: t.id,
                          name: t.name,
                          stickers: []
                      }),
                    null == o ||
                        _.BT({
                            permission: y.Plq.USE_EXTERNAL_EMOJIS,
                            user: o,
                            context: e
                        }) ||
                        (r = r.filter((t) => t.id === e.getGuildId()));
            }
            return r;
        }, [t, n, o, e]);
    },
    C = [];
function R() {
    var e, t;
    return null != (t = null == (e = (0, s.D)().favoriteStickers) ? void 0 : e.stickerIds) ? t : C;
}
function P() {
    let e = R();
    return (0, i.Wu)([g.Z], () => e.map((e) => g.Z.getStickerById(e)).filter((e) => null != e && (!(0, b.J8)(e) || (0, b.V9)(e))), [e]);
}
function w() {
    var e, t;
    let n = (0, s.D)(),
        r = C;
    return (null == n || null == (e = n.stickerFrecency) ? void 0 : e.stickers) != null && (r = Object.keys(null == n || null == (t = n.stickerFrecency) ? void 0 : t.stickers)), r;
}
function D() {
    let e = w();
    return (0, i.Wu)([g.Z], () => e.map((e) => g.Z.getStickerById(e)).filter((e) => void 0 !== e), [e]);
}
let L = (e) => {
        let t = P(),
            { packs: n, frequentlyUsedStickers: a } = (0, i.cj)(
                [g.Z, m.Z],
                () => ({
                    packs: g.Z.getPremiumPacks(),
                    frequentlyUsedStickers: m.Z.stickerFrecencyWithoutFetchingLatest.frequently
                }),
                []
            ),
            o = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
            s = A(e);
        return r.useMemo(() => {
            var r;
            let i = n.map(b.z);
            return [
                {
                    type: E.Ih.FAVORITE,
                    id: E.Ih.FAVORITE,
                    name: v.NW.string(v.t.y3LQCA),
                    stickers: t
                },
                {
                    type: E.Ih.RECENT,
                    id: E.Ih.RECENT,
                    name: v.NW.string(v.t['6hjpXV']),
                    stickers:
                        null !=
                        (r =
                            null == a
                                ? void 0
                                : a.filter((t) => {
                                      if ((0, b.J8)(t)) {
                                          var r, i;
                                          return null != (i = null == (r = g.Z.getStickersByGuildId(t.guild_id)) ? void 0 : r.some((e) => e.id === t.id)) && i && (0, p.cO)(t, o, e) !== p.eb.NONSENDABLE;
                                      }
                                      if ((0, b.jl)(t)) return n.some((e) => e.id === t.pack_id);
                                  }))
                            ? r
                            : []
                },
                ...s,
                ...i
            ];
        }, [n, t, a, s, o, e]);
    },
    x = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, i.e7)([g.Z], () => g.Z.getStickerById(e.id)),
            [a, o] = r.useState(!0),
            [s, l] = r.useState(!1),
            c = (0, b.J8)(e) || (0, b.jl)(e),
            u = {
                hasFetched: s,
                isReturnable: c,
                renderableSticker: e,
                shouldFetch: a,
                stickersStoreDefinition: n
            },
            d = r.useRef(u);
        return (r.useEffect(() => {
            d.current = u;
        }),
        r.useEffect(() => {
            (async () => {
                let { hasFetched: e, isReturnable: n, renderableSticker: r, shouldFetch: i, stickersStoreDefinition: a } = d.current;
                if (t && !n && null == a && i && !e) {
                    o(!1);
                    try {
                        await (0, h.Il)(r.id);
                    } catch (e) {}
                    l(!0);
                }
            })();
        }, [t]),
        c)
            ? [e, s]
            : [null != n ? n : null, s];
    },
    M = (e) => {
        let t = L(e);
        return r.useMemo(() => t.filter((e) => e.type === E.Ih.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
