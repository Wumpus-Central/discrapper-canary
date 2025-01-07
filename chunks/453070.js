r.d(n, {
    Go: function () {
        return w;
    },
    LZ: function () {
        return k;
    },
    Pq: function () {
        return N;
    },
    RJ: function () {
        return P;
    },
    Sd: function () {
        return G;
    },
    XW: function () {
        return B;
    },
    el: function () {
        return R;
    },
    fP: function () {
        return D;
    },
    fQ: function () {
        return O;
    },
    t$: function () {
        return C;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(733860);
var o = r(192379),
    l = r(442837),
    u = r(357156),
    c = r(695346),
    d = r(516373),
    f = r(430824),
    _ = r(914010),
    h = r(771845),
    p = r(594174),
    m = r(267642),
    g = r(700785),
    E = r(285651),
    v = r(268350),
    I = r(822179),
    T = r(926491),
    b = r(373228),
    y = r(378233),
    S = r(981631),
    A = r(388032);
let N = (e) => {
        D();
        let n = (0, l.e7)([T.Z], () => T.Z.hasLoadedStickerPacks);
        o.useEffect(() => {
            n && null == T.Z.getStickerPack(e) && (0, v.FQ)(e);
        }, [e, n]);
    },
    C = (e) => {
        let n = c.Wp.useSetting();
        return (0, y.WD)(n, e);
    },
    R = (e) => {
        let { collapsedStickersCategories: n, filteredStickers: r, listPaddingRight: i = 0, listWidth: a = 0, stickerNodeMargin: s = 0, stickerNodeWidth: l, stickersCategories: c } = e;
        return o.useMemo(() => {
            let e = Math.floor((a - i + s) / (l + s)),
                o = Math.floor(Math.max(s, (a - i - l * e) / (e - 1))),
                d = [],
                h = [],
                p = [],
                g = 0,
                E = 0,
                v = 0;
            if (0 !== a) {
                let i = function (n, r) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = (0, y.J8)(n[0]) ? f.Z.getGuild(n[0].guild_id) : void 0,
                        { canCreateExpressions: s } = (0, u.Gw)(a),
                        o = _.Z.getGuildId(),
                        l = c.findIndex((e) => e.type === b.Ih.FAVORITE),
                        I = c.findIndex((e) => e.type === b.Ih.RECENT),
                        T = n.length;
                    null != a && o === a.id && s && n.length < (0, m.A3)(a.premiumTier) && T++;
                    let S = Math.ceil(T / e);
                    h[E] = i ? 0 : S;
                    for (let s = 0; s < S; s++) {
                        let o = s * e,
                            u = o + e,
                            c = n.slice(o, u).map((e, n) => ({
                                type: b.al.STICKER,
                                sticker: e,
                                packId: (0, y.jl)(e) ? e.pack_id : 'TODO - fix',
                                gridSectionIndex: E,
                                rowIndex: g,
                                columnIndex: n,
                                visibleRowIndex: v,
                                category: r
                            }));
                        E > I &&
                            E > l &&
                            null != a &&
                            T > n.length &&
                            c.push({
                                type: b.al.CREATE_STICKER,
                                guild_id: a.id,
                                name: A.intl.string(A.t['UwF+Cw']),
                                gridSectionIndex: E,
                                rowIndex: g,
                                columnIndex: c.length,
                                visibleRowIndex: v
                            }),
                            !i && (v++, p.push(c), d.push(c.length)),
                            g++;
                    }
                    E++;
                };
                if (null == r) for (let e of c) e.stickers.length > 0 ? (g++, i(e.stickers, e.type, (null == n ? void 0 : n.has(e.id)) === !0)) : e.type === b.Ih.EMPTY_GUILD_UPSELL && ((h[E] = 0), E++);
                else r.sendable.length > 0 && i(r.sendable, b.Ih.SEARCH_RESULTS), r.sendableWithPremium.length > 0 && i(r.sendableWithPremium, b.Ih.SEARCH_RESULTS);
            }
            return {
                rowCount: g,
                rowCountBySection: h,
                stickersGrid: p,
                gutterWidth: o,
                columnCounts: d
            };
        }, [n, r, i, a, s, l, c]);
    },
    O = (e) => {
        let n = (0, l.e7)([p.default], () => p.default.getCurrentUser());
        return (0, l.e7)(
            [T.Z],
            () => {
                for (let r of T.Z.getAllStickersIterator()) if ((0, E.kl)(r, n, e)) return !0;
                return !1;
            },
            [n, e]
        );
    },
    D = () => {
        o.useEffect(() => {
            (0, v.$p)();
        }, []);
    },
    L = (e) => {
        let n = (0, l.e7)([T.Z], () => T.Z.getAllGuildStickers()),
            r = (0, l.Wu)(
                [h.ZP, f.Z],
                () => {
                    let e = h.ZP.getFlattenedGuildIds(),
                        n = [];
                    return (
                        e.forEach((e) => {
                            let r = f.Z.getGuild(e);
                            null != r && n.push(r);
                        }),
                        n
                    );
                },
                []
            ),
            i = (0, l.e7)([p.default], () => p.default.getCurrentUser());
        return o.useMemo(() => {
            let a = [];
            for (let { name: e, id: i } of r) {
                let r = n.get(i);
                if (null != r && 0 !== r.length)
                    a.push({
                        type: b.Ih.GUILD,
                        id: i,
                        name: e,
                        stickers: r
                    });
            }
            if ((null == e ? void 0 : e.getGuildId()) != null) {
                let n = f.Z.getGuild(e.getGuildId()),
                    { canManageAllExpressions: r } = (0, u.Gw)(n),
                    s = a.findIndex((n) => n.id === e.getGuildId());
                s >= 1
                    ? a.unshift(a.splice(s, 1)[0])
                    : -1 === s &&
                      null != n &&
                      r &&
                      a.unshift({
                          type: b.Ih.EMPTY_GUILD_UPSELL,
                          id: n.id,
                          name: n.name,
                          stickers: []
                      }),
                    null != i &&
                        !g.BT({
                            permission: S.Plq.USE_EXTERNAL_EMOJIS,
                            user: i,
                            context: e
                        }) &&
                        (a = a.filter((n) => n.id === e.getGuildId()));
            }
            return a;
        }, [n, r, i, e]);
    },
    x = [];
function w() {
    var e, n;
    return null !== (n = null === (e = (0, d.D)().favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== n ? n : x;
}
function P() {
    let e = w();
    return (0, l.Wu)([T.Z], () => e.map((e) => T.Z.getStickerById(e)).filter((e) => null != e && (!(0, y.J8)(e) || (0, y.V9)(e))), [e]);
}
function M() {
    var e, n;
    let r = (0, d.D)(),
        i = x;
    return (null == r ? void 0 : null === (e = r.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (i = Object.keys(null == r ? void 0 : null === (n = r.stickerFrecency) || void 0 === n ? void 0 : n.stickers)), i;
}
function k() {
    let e = M();
    return (0, l.Wu)([T.Z], () => e.map((e) => T.Z.getStickerById(e)).filter((e) => void 0 !== e), [e]);
}
let U = (e) => {
        let n = P(),
            { packs: r, frequentlyUsedStickers: i } = (0, l.cj)(
                [T.Z, I.Z],
                () => ({
                    packs: T.Z.getPremiumPacks(),
                    frequentlyUsedStickers: I.Z.stickerFrecencyWithoutFetchingLatest.frequently
                }),
                []
            ),
            a = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
            s = L(e);
        return o.useMemo(() => {
            var o;
            let l = r.map(y.z),
                u = {
                    type: b.Ih.FAVORITE,
                    id: b.Ih.FAVORITE,
                    name: A.intl.string(A.t.y3LQCA),
                    stickers: n
                };
            return [
                u,
                {
                    type: b.Ih.RECENT,
                    id: b.Ih.RECENT,
                    name: A.intl.string(A.t['6hjpXV']),
                    stickers:
                        null !==
                            (o =
                                null == i
                                    ? void 0
                                    : i.filter((n) => {
                                          if ((0, y.J8)(n)) {
                                              var i, s;
                                              return null !== (s = null === (i = T.Z.getStickersByGuildId(n.guild_id)) || void 0 === i ? void 0 : i.some((e) => e.id === n.id)) && void 0 !== s && s && (0, E.cO)(n, a, e) !== E.eb.NONSENDABLE;
                                          }
                                          if ((0, y.jl)(n)) return r.some((e) => e.id === n.pack_id);
                                      })) && void 0 !== o
                            ? o
                            : []
                },
                ...s,
                ...l
            ];
        }, [r, n, i, s, a, e]);
    },
    B = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = (0, l.e7)([T.Z], () => T.Z.getStickerById(e.id)),
            [i, a] = o.useState(!0),
            [s, u] = o.useState(!1),
            c = (0, y.J8)(e) || (0, y.jl)(e),
            d = {
                hasFetched: s,
                isReturnable: c,
                renderableSticker: e,
                shouldFetch: i,
                stickersStoreDefinition: r
            },
            f = o.useRef(d);
        return (o.useEffect(() => {
            f.current = d;
        }),
        o.useEffect(() => {
            (async () => {
                let { hasFetched: e, isReturnable: r, renderableSticker: i, shouldFetch: s, stickersStoreDefinition: o } = f.current;
                if (n && !r && null == o && s && !e) {
                    a(!1);
                    try {
                        await (0, v.Il)(i.id);
                    } catch {}
                    u(!0);
                }
            })();
        }, [n]),
        c)
            ? [e, s]
            : [null != r ? r : null, s];
    },
    G = (e) => {
        let n = U(e);
        return o.useMemo(() => n.filter((e) => e.type === b.Ih.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [n]);
    };
