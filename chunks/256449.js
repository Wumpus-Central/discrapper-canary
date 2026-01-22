n.d(t, {
    Gc: () => w,
    Sr: () => A,
    Th: () => v,
    UT: () => D,
    XQ: () => T,
    ZO: () => I,
    Zq: () => L,
    _c: () => S,
    ln: () => R,
    pD: () => j,
}),
    n(321073),
    n(896048),
    n(667532);
var r = n(64700),
    i = n(311907),
    a = n(931991),
    s = n(253932),
    o = n(999886),
    l = n(71393),
    c = n(967198),
    u = n(711014),
    d = n(287809),
    f = n(473145),
    p = n(488926),
    _ = n(361670),
    h = n(631576),
    m = n(931959),
    g = n(679382),
    E = n(842086),
    b = n(378058),
    y = n(652215),
    O = n(985018);
let A = (e) => {
        T();
        let t = (0, i.bG)([g.A], () => g.A.hasLoadedStickerPacks);
        r.useEffect(() => {
            t && null == g.A.getStickerPack(e) && (0, h.zk)(e);
        }, [e, t]);
    },
    v = (e) => {
        let t = s.S0.useSetting();
        return (0, b.Qn)(t, e);
    },
    S = (e) => {
        let {
            collapsedStickersCategories: t,
            filteredStickers: n,
            listPaddingRight: i = 0,
            listWidth: s = 0,
            stickerNodeMargin: o = 0,
            stickerNodeWidth: u,
            stickersCategories: d,
        } = e;
        return r.useMemo(() => {
            let e = Math.floor((s - i + o) / (u + o)),
                r = Math.floor(Math.max(o, (s - i - u * e) / (e - 1))),
                p = [],
                _ = [],
                h = [],
                m = 0,
                g = 0,
                y = 0;
            if (0 !== s) {
                let r = function (t, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = (0, b.Xw)(t[0]) ? l.A.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: s } = (0, a.ie)(i),
                        o = c.A.getGuildId(),
                        u = d.findIndex((e) => e.type === E.Z2.FAVORITE),
                        A = d.findIndex((e) => e.type === E.Z2.RECENT),
                        v = t.length;
                    null != i && o === i.id && s && t.length < (0, f.aG)(i.premiumTier) && v++;
                    let S = Math.ceil(v / e);
                    _[g] = r ? 0 : S;
                    for (let a = 0; a < S; a++) {
                        let s = a * e,
                            o = s + e,
                            l = t.slice(s, o).map((e, t) => ({
                                type: E.op.STICKER,
                                sticker: e,
                                packId: (0, b.FD)(e) ? e.pack_id : "TODO - fix",
                                gridSectionIndex: g,
                                rowIndex: m,
                                columnIndex: t,
                                visibleRowIndex: y,
                                category: n,
                            }));
                        g > A &&
                            g > u &&
                            null != i &&
                            v > t.length &&
                            l.push({
                                type: E.op.CREATE_STICKER,
                                guild_id: i.id,
                                name: O.intl.string(O.t["UwF+Cw"]),
                                gridSectionIndex: g,
                                rowIndex: m,
                                columnIndex: l.length,
                                visibleRowIndex: y,
                            }),
                            r || (y++, h.push(l), p.push(l.length)),
                            m++;
                    }
                    g++;
                };
                if (null == n)
                    for (let e of d)
                        e.stickers.length > 0
                            ? (m++, r(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0))
                            : e.type === E.Z2.EMPTY_GUILD_UPSELL && ((_[g] = 0), g++);
                else
                    n.sendable.length > 0 && r(n.sendable, E.Z2.SEARCH_RESULTS),
                        n.sendableWithPremium.length > 0 && r(n.sendableWithPremium, E.Z2.SEARCH_RESULTS);
            }
            return {
                rowCount: m,
                rowCountBySection: _,
                stickersGrid: h,
                gutterWidth: r,
                columnCounts: p,
            };
        }, [t, n, i, s, o, u, d]);
    },
    I = (e) => !0,
    T = () => {
        r.useEffect(() => {
            (0, h.YB)();
        }, []);
    },
    C = (e) => {
        let t = (0, i.bG)([g.A], () => g.A.getAllGuildStickers()),
            n = (0, i.yK)([u.Ay, l.A], () => {
                let e = u.Ay.getFlattenedGuildIds(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = l.A.getGuild(e);
                        null != n && t.push(n);
                    }),
                    t
                );
            }, []),
            s = (0, i.bG)([d.default], () => d.default.getCurrentUser());
        return r.useMemo(() => {
            let r = [];
            for (let { name: e, id: i } of n) {
                let n = t.get(i);
                null != n &&
                    0 !== n.length &&
                    r.push({
                        type: E.Z2.GUILD,
                        id: i,
                        name: e,
                        stickers: n,
                    });
            }
            if ((null == e ? void 0 : e.getGuildId()) != null) {
                let t = l.A.getGuild(e.getGuildId()),
                    { canManageAllExpressions: n } = (0, a.ie)(t),
                    i = r.findIndex((t) => t.id === e.getGuildId());
                i >= 1
                    ? r.unshift(r.splice(i, 1)[0])
                    : -1 === i &&
                      null != t &&
                      n &&
                      r.unshift({
                          type: E.Z2.EMPTY_GUILD_UPSELL,
                          id: t.id,
                          name: t.name,
                          stickers: [],
                      }),
                    null == s ||
                        p.$3({
                            permission: y.xBc.USE_EXTERNAL_EMOJIS,
                            user: s,
                            context: e,
                        }) ||
                        (r = r.filter((t) => t.id === e.getGuildId()));
            }
            return r;
        }, [t, n, s, e]);
    },
    N = [];

function R() {
    var e, t;
    return null != (e = null == (t = (0, o.k)().favoriteStickers) ? void 0 : t.stickerIds) ? e : N;
}

function w() {
    let e = R();
    return (0, i.yK)(
        [g.A],
        () => e.map((e) => g.A.getStickerById(e)).filter((e) => null != e && (!(0, b.Xw)(e) || (0, b.Y4)(e))),
        [e],
    );
}

function P() {
    var e, t;
    let n = (0, o.k)(),
        r = N;
    return (
        (null == n || null == (e = n.stickerFrecency) ? void 0 : e.stickers) != null &&
            (r = Object.keys(null == n || null == (t = n.stickerFrecency) ? void 0 : t.stickers)),
        r
    );
}

function D() {
    let e = P();
    return (0, i.yK)([g.A], () => e.map((e) => g.A.getStickerById(e)).filter((e) => void 0 !== e), [e]);
}
let x = (e) => {
        let t = w(),
            { packs: n, frequentlyUsedStickers: a } = (0, i.cf)(
                [g.A, m.A],
                () => ({
                    packs: g.A.getPremiumPacks(),
                    frequentlyUsedStickers: m.A.stickerFrecencyWithoutFetchingLatest.frequently,
                }),
                [],
            ),
            s = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            o = C(e);
        return r.useMemo(() => {
            var r;
            let i = n.map(b.T5);
            return [
                {
                    type: E.Z2.FAVORITE,
                    id: E.Z2.FAVORITE,
                    name: O.intl.string(O.t.y3LQCG),
                    stickers: t,
                },
                {
                    type: E.Z2.RECENT,
                    id: E.Z2.RECENT,
                    name: O.intl.string(O.t["6hjpXW"]),
                    stickers:
                        null !=
                        (r =
                            null == a
                                ? void 0
                                : a.filter((t) => {
                                      if ((0, b.Xw)(t)) {
                                          var r, i;
                                          return (
                                              null !=
                                                  (r =
                                                      null == (i = g.A.getStickersByGuildId(t.guild_id))
                                                          ? void 0
                                                          : i.some((e) => e.id === t.id)) &&
                                              r &&
                                              (0, _.W$)(t, s, e) !== _.Ux.NONSENDABLE
                                          );
                                      }
                                      if ((0, b.FD)(t)) return n.some((e) => e.id === t.pack_id);
                                  }))
                            ? r
                            : [],
                },
                ...o,
                ...i,
            ];
        }, [n, t, a, o, s, e]);
    },
    L = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, i.bG)([g.A], () => g.A.getStickerById(e.id)),
            [a, s] = r.useState(!0),
            [o, l] = r.useState(!1),
            c = (0, b.Xw)(e) || (0, b.FD)(e),
            u = {
                hasFetched: o,
                isReturnable: c,
                renderableSticker: e,
                shouldFetch: a,
                stickersStoreDefinition: n,
            },
            d = r.useRef(u);
        return (r.useEffect(() => {
            d.current = u;
        }),
        r.useEffect(() => {
            (async () => {
                let {
                    hasFetched: e,
                    isReturnable: n,
                    renderableSticker: r,
                    shouldFetch: i,
                    stickersStoreDefinition: a,
                } = d.current;
                if (t && !n && null == a && i && !e) {
                    s(!1);
                    try {
                        await (0, h.AO)(r.id);
                    } catch (e) {}
                    l(!0);
                }
            })();
        }, [t]),
        c)
            ? [e, o]
            : [null != n ? n : null, o];
    },
    j = (e) => {
        let t = x(e);
        return r.useMemo(() => t.filter((e) => e.type === E.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
