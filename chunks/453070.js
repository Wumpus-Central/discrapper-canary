r.d(n, {
    Go: function () {
        return w;
    },
    LZ: function () {
        return k;
    },
    Pq: function () {
        return C;
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
        return N;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(733860);
var s = r(192379),
    l = r(442837),
    u = r(357156),
    c = r(695346),
    d = r(516373),
    f = r(430824),
    p = r(914010),
    h = r(771845),
    _ = r(594174),
    m = r(267642),
    g = r(700785),
    E = r(285651),
    v = r(268350),
    y = r(822179),
    b = r(926491),
    I = r(373228),
    T = r(378233),
    S = r(981631),
    A = r(388032);
let C = (e) => {
        D();
        let n = (0, l.e7)([b.Z], () => b.Z.hasLoadedStickerPacks);
        s.useEffect(() => {
            n && null == b.Z.getStickerPack(e) && (0, v.FQ)(e);
        }, [e, n]);
    },
    N = (e) => {
        let n = c.Wp.useSetting();
        return (0, T.WD)(n, e);
    },
    R = (e) => {
        let { collapsedStickersCategories: n, filteredStickers: r, listPaddingRight: i = 0, listWidth: a = 0, stickerNodeMargin: o = 0, stickerNodeWidth: l, stickersCategories: c } = e;
        return s.useMemo(() => {
            let e = Math.floor((a - i + o) / (l + o)),
                s = Math.floor(Math.max(o, (a - i - l * e) / (e - 1))),
                d = [],
                h = [],
                _ = [],
                g = 0,
                E = 0,
                v = 0;
            if (0 !== a) {
                let i = function (n, r) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = (0, T.J8)(n[0]) ? f.Z.getGuild(n[0].guild_id) : void 0,
                        { canCreateExpressions: o } = (0, u.Gw)(a),
                        s = p.Z.getGuildId(),
                        l = c.findIndex((e) => e.type === I.Ih.FAVORITE),
                        y = c.findIndex((e) => e.type === I.Ih.RECENT),
                        b = n.length;
                    null != a && s === a.id && o && n.length < (0, m.A3)(a.premiumTier) && b++;
                    let S = Math.ceil(b / e);
                    h[E] = i ? 0 : S;
                    for (let o = 0; o < S; o++) {
                        let s = o * e,
                            u = s + e,
                            c = n.slice(s, u).map((e, n) => ({
                                type: I.al.STICKER,
                                sticker: e,
                                packId: (0, T.jl)(e) ? e.pack_id : 'TODO - fix',
                                gridSectionIndex: E,
                                rowIndex: g,
                                columnIndex: n,
                                visibleRowIndex: v,
                                category: r
                            }));
                        E > y &&
                            E > l &&
                            null != a &&
                            b > n.length &&
                            c.push({
                                type: I.al.CREATE_STICKER,
                                guild_id: a.id,
                                name: A.intl.string(A.t['UwF+Cw']),
                                gridSectionIndex: E,
                                rowIndex: g,
                                columnIndex: c.length,
                                visibleRowIndex: v
                            }),
                            !i && (v++, _.push(c), d.push(c.length)),
                            g++;
                    }
                    E++;
                };
                if (null == r) for (let e of c) e.stickers.length > 0 ? (g++, i(e.stickers, e.type, (null == n ? void 0 : n.has(e.id)) === !0)) : e.type === I.Ih.EMPTY_GUILD_UPSELL && ((h[E] = 0), E++);
                else r.sendable.length > 0 && i(r.sendable, I.Ih.SEARCH_RESULTS), r.sendableWithPremium.length > 0 && i(r.sendableWithPremium, I.Ih.SEARCH_RESULTS);
            }
            return {
                rowCount: g,
                rowCountBySection: h,
                stickersGrid: _,
                gutterWidth: s,
                columnCounts: d
            };
        }, [n, r, i, a, o, l, c]);
    },
    O = (e) => {
        let n = (0, l.e7)([_.default], () => _.default.getCurrentUser());
        return (0, l.e7)(
            [b.Z],
            () => {
                for (let r of b.Z.getAllStickersIterator()) if ((0, E.kl)(r, n, e)) return !0;
                return !1;
            },
            [n, e]
        );
    },
    D = () => {
        s.useEffect(() => {
            (0, v.$p)();
        }, []);
    },
    L = (e) => {
        let n = (0, l.e7)([b.Z], () => b.Z.getAllGuildStickers()),
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
            i = (0, l.e7)([_.default], () => _.default.getCurrentUser());
        return s.useMemo(() => {
            let a = [];
            for (let { name: e, id: i } of r) {
                let r = n.get(i);
                if (null != r && 0 !== r.length)
                    a.push({
                        type: I.Ih.GUILD,
                        id: i,
                        name: e,
                        stickers: r
                    });
            }
            if ((null == e ? void 0 : e.getGuildId()) != null) {
                let n = f.Z.getGuild(e.getGuildId()),
                    { canManageAllExpressions: r } = (0, u.Gw)(n),
                    o = a.findIndex((n) => n.id === e.getGuildId());
                o >= 1
                    ? a.unshift(a.splice(o, 1)[0])
                    : -1 === o &&
                      null != n &&
                      r &&
                      a.unshift({
                          type: I.Ih.EMPTY_GUILD_UPSELL,
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
    return (0, l.Wu)([b.Z], () => e.map((e) => b.Z.getStickerById(e)).filter((e) => null != e && (!(0, T.J8)(e) || (0, T.V9)(e))), [e]);
}
function M() {
    var e, n;
    let r = (0, d.D)(),
        i = x;
    return (null == r ? void 0 : null === (e = r.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (i = Object.keys(null == r ? void 0 : null === (n = r.stickerFrecency) || void 0 === n ? void 0 : n.stickers)), i;
}
function k() {
    let e = M();
    return (0, l.Wu)([b.Z], () => e.map((e) => b.Z.getStickerById(e)).filter((e) => void 0 !== e), [e]);
}
let U = (e) => {
        let n = P(),
            { packs: r, frequentlyUsedStickers: i } = (0, l.cj)(
                [b.Z, y.Z],
                () => ({
                    packs: b.Z.getPremiumPacks(),
                    frequentlyUsedStickers: y.Z.stickerFrecencyWithoutFetchingLatest.frequently
                }),
                []
            ),
            a = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
            o = L(e);
        return s.useMemo(() => {
            var s;
            let l = r.map(T.z),
                u = {
                    type: I.Ih.FAVORITE,
                    id: I.Ih.FAVORITE,
                    name: A.intl.string(A.t.y3LQCA),
                    stickers: n
                };
            return [
                u,
                {
                    type: I.Ih.RECENT,
                    id: I.Ih.RECENT,
                    name: A.intl.string(A.t['6hjpXV']),
                    stickers:
                        null !==
                            (s =
                                null == i
                                    ? void 0
                                    : i.filter((n) => {
                                          if ((0, T.J8)(n)) {
                                              var i, o;
                                              return null !== (o = null === (i = b.Z.getStickersByGuildId(n.guild_id)) || void 0 === i ? void 0 : i.some((e) => e.id === n.id)) && void 0 !== o && o && (0, E.cO)(n, a, e) !== E.eb.NONSENDABLE;
                                          }
                                          if ((0, T.jl)(n)) return r.some((e) => e.id === n.pack_id);
                                      })) && void 0 !== s
                            ? s
                            : []
                },
                ...o,
                ...l
            ];
        }, [r, n, i, o, a, e]);
    },
    B = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = (0, l.e7)([b.Z], () => b.Z.getStickerById(e.id)),
            [i, a] = s.useState(!0),
            [o, u] = s.useState(!1),
            c = (0, T.J8)(e) || (0, T.jl)(e),
            d = {
                hasFetched: o,
                isReturnable: c,
                renderableSticker: e,
                shouldFetch: i,
                stickersStoreDefinition: r
            },
            f = s.useRef(d);
        return (s.useEffect(() => {
            f.current = d;
        }),
        s.useEffect(() => {
            (async () => {
                let { hasFetched: e, isReturnable: r, renderableSticker: i, shouldFetch: o, stickersStoreDefinition: s } = f.current;
                if (n && !r && null == s && o && !e) {
                    a(!1);
                    try {
                        await (0, v.Il)(i.id);
                    } catch {}
                    u(!0);
                }
            })();
        }, [n]),
        c)
            ? [e, o]
            : [null != r ? r : null, o];
    },
    G = (e) => {
        let n = U(e);
        return s.useMemo(() => n.filter((e) => e.type === I.Ih.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [n]);
    };
