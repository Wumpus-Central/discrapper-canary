n.d(t, {
    Go: () => O,
    LZ: () => L,
    Pq: () => T,
    RJ: () => D,
    Sd: () => M,
    XW: () => w,
    el: () => S,
    fP: () => N,
    fQ: () => A,
    t$: () => b
}),
    n(653041),
    n(47120),
    n(733860);
var i = n(192379),
    r = n(442837),
    a = n(357156),
    s = n(695346),
    o = n(516373),
    l = n(430824),
    u = n(914010),
    c = n(771845),
    d = n(594174),
    f = n(267642),
    _ = n(700785),
    p = n(285651),
    h = n(268350),
    m = n(822179),
    g = n(926491),
    E = n(373228),
    v = n(378233),
    y = n(981631),
    I = n(388032);
let T = (e) => {
        N();
        let t = (0, r.e7)([g.Z], () => g.Z.hasLoadedStickerPacks);
        i.useEffect(() => {
            t && null == g.Z.getStickerPack(e) && (0, h.FQ)(e);
        }, [e, t]);
    },
    b = (e) => {
        let t = s.Wp.useSetting();
        return (0, v.WD)(t, e);
    },
    S = (e) => {
        let { collapsedStickersCategories: t, filteredStickers: n, listPaddingRight: r = 0, listWidth: s = 0, stickerNodeMargin: o = 0, stickerNodeWidth: c, stickersCategories: d } = e;
        return i.useMemo(() => {
            let e = Math.floor((s - r + o) / (c + o)),
                i = Math.floor(Math.max(o, (s - r - c * e) / (e - 1))),
                _ = [],
                p = [],
                h = [],
                m = 0,
                g = 0,
                y = 0;
            if (0 !== s) {
                let i = function (t, n) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = (0, v.J8)(t[0]) ? l.Z.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: s } = (0, a.Gw)(r),
                        o = u.Z.getGuildId(),
                        c = d.findIndex((e) => e.type === E.Ih.FAVORITE),
                        T = d.findIndex((e) => e.type === E.Ih.RECENT),
                        b = t.length;
                    null != r && o === r.id && s && t.length < (0, f.A3)(r.premiumTier) && b++;
                    let S = Math.ceil(b / e);
                    p[g] = i ? 0 : S;
                    for (let a = 0; a < S; a++) {
                        let s = a * e,
                            o = s + e,
                            l = t.slice(s, o).map((e, t) => ({
                                type: E.al.STICKER,
                                sticker: e,
                                packId: (0, v.jl)(e) ? e.pack_id : 'TODO - fix',
                                gridSectionIndex: g,
                                rowIndex: m,
                                columnIndex: t,
                                visibleRowIndex: y,
                                category: n
                            }));
                        g > T &&
                            g > c &&
                            null != r &&
                            b > t.length &&
                            l.push({
                                type: E.al.CREATE_STICKER,
                                guild_id: r.id,
                                name: I.intl.string(I.t['UwF+Cw']),
                                gridSectionIndex: g,
                                rowIndex: m,
                                columnIndex: l.length,
                                visibleRowIndex: y
                            }),
                            i || (y++, h.push(l), _.push(l.length)),
                            m++;
                    }
                    g++;
                };
                if (null == n) for (let e of d) e.stickers.length > 0 ? (m++, i(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === E.Ih.EMPTY_GUILD_UPSELL && ((p[g] = 0), g++);
                else n.sendable.length > 0 && i(n.sendable, E.Ih.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && i(n.sendableWithPremium, E.Ih.SEARCH_RESULTS);
            }
            return {
                rowCount: m,
                rowCountBySection: p,
                stickersGrid: h,
                gutterWidth: i,
                columnCounts: _
            };
        }, [t, n, r, s, o, c, d]);
    },
    A = (e) => {
        let t = (0, r.e7)([d.default], () => d.default.getCurrentUser());
        return (0, r.e7)(
            [g.Z],
            () => {
                for (let n of g.Z.getAllStickersIterator()) if ((0, p.kl)(n, t, e)) return !0;
                return !1;
            },
            [t, e]
        );
    },
    N = () => {
        i.useEffect(() => {
            (0, h.$p)();
        }, []);
    },
    C = (e) => {
        let t = (0, r.e7)([g.Z], () => g.Z.getAllGuildStickers()),
            n = (0, r.Wu)(
                [c.ZP, l.Z],
                () => {
                    let e = c.ZP.getFlattenedGuildIds(),
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
            s = (0, r.e7)([d.default], () => d.default.getCurrentUser());
        return i.useMemo(() => {
            let i = [];
            for (let { name: e, id: r } of n) {
                let n = t.get(r);
                null != n &&
                    0 !== n.length &&
                    i.push({
                        type: E.Ih.GUILD,
                        id: r,
                        name: e,
                        stickers: n
                    });
            }
            if ((null == e ? void 0 : e.getGuildId()) != null) {
                let t = l.Z.getGuild(e.getGuildId()),
                    { canManageAllExpressions: n } = (0, a.Gw)(t),
                    r = i.findIndex((t) => t.id === e.getGuildId());
                r >= 1
                    ? i.unshift(i.splice(r, 1)[0])
                    : -1 === r &&
                      null != t &&
                      n &&
                      i.unshift({
                          type: E.Ih.EMPTY_GUILD_UPSELL,
                          id: t.id,
                          name: t.name,
                          stickers: []
                      }),
                    null == s ||
                        _.BT({
                            permission: y.Plq.USE_EXTERNAL_EMOJIS,
                            user: s,
                            context: e
                        }) ||
                        (i = i.filter((t) => t.id === e.getGuildId()));
            }
            return i;
        }, [t, n, s, e]);
    },
    R = [];
function O() {
    var e, t;
    return null !== (t = null === (e = (0, o.D)().favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : R;
}
function D() {
    let e = O();
    return (0, r.Wu)([g.Z], () => e.map((e) => g.Z.getStickerById(e)).filter((e) => null != e && (!(0, v.J8)(e) || (0, v.V9)(e))), [e]);
}
function x() {
    var e, t;
    let n = (0, o.D)(),
        i = R;
    return (null == n ? void 0 : null === (e = n.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (i = Object.keys(null == n ? void 0 : null === (t = n.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), i;
}
function L() {
    let e = x();
    return (0, r.Wu)([g.Z], () => e.map((e) => g.Z.getStickerById(e)).filter((e) => void 0 !== e), [e]);
}
let P = (e) => {
        let t = D(),
            { packs: n, frequentlyUsedStickers: a } = (0, r.cj)(
                [g.Z, m.Z],
                () => ({
                    packs: g.Z.getPremiumPacks(),
                    frequentlyUsedStickers: m.Z.stickerFrecencyWithoutFetchingLatest.frequently
                }),
                []
            ),
            s = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
            o = C(e);
        return i.useMemo(() => {
            var i;
            let r = n.map(v.z);
            return [
                {
                    type: E.Ih.FAVORITE,
                    id: E.Ih.FAVORITE,
                    name: I.intl.string(I.t.y3LQCA),
                    stickers: t
                },
                {
                    type: E.Ih.RECENT,
                    id: E.Ih.RECENT,
                    name: I.intl.string(I.t['6hjpXV']),
                    stickers:
                        null !==
                            (i =
                                null == a
                                    ? void 0
                                    : a.filter((t) => {
                                          if ((0, v.J8)(t)) {
                                              var i, r;
                                              return null !== (r = null === (i = g.Z.getStickersByGuildId(t.guild_id)) || void 0 === i ? void 0 : i.some((e) => e.id === t.id)) && void 0 !== r && r && (0, p.cO)(t, s, e) !== p.eb.NONSENDABLE;
                                          }
                                          if ((0, v.jl)(t)) return n.some((e) => e.id === t.pack_id);
                                      })) && void 0 !== i
                            ? i
                            : []
                },
                ...o,
                ...r
            ];
        }, [n, t, a, o, s, e]);
    },
    w = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, r.e7)([g.Z], () => g.Z.getStickerById(e.id)),
            [a, s] = i.useState(!0),
            [o, l] = i.useState(!1),
            u = (0, v.J8)(e) || (0, v.jl)(e),
            c = {
                hasFetched: o,
                isReturnable: u,
                renderableSticker: e,
                shouldFetch: a,
                stickersStoreDefinition: n
            },
            d = i.useRef(c);
        return (i.useEffect(() => {
            d.current = c;
        }),
        i.useEffect(() => {
            (async () => {
                let { hasFetched: e, isReturnable: n, renderableSticker: i, shouldFetch: r, stickersStoreDefinition: a } = d.current;
                if (t && !n && null == a && r && !e) {
                    s(!1);
                    try {
                        await (0, h.Il)(i.id);
                    } catch {}
                    l(!0);
                }
            })();
        }, [t]),
        u)
            ? [e, o]
            : [null != n ? n : null, o];
    },
    M = (e) => {
        let t = P(e);
        return i.useMemo(() => t.filter((e) => e.type === E.Ih.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
