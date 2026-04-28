"use strict";
n.d(t, {
    Gc: () => T,
    Sr: () => I,
    Th: () => v,
    UT: () => w,
    XQ: () => S,
    ZO: () => b,
    Zq: () => R,
    _c: () => y,
    ln: () => j,
    pD: () => L,
}),
    n(321073),
    n(667532);
var l = n(64700),
    i = n(17928),
    s = n(931991),
    a = n(253932),
    r = n(999886),
    o = n(71393),
    c = n(967198),
    u = n(711014),
    d = n(287809),
    h = n(473145),
    m = n(488926),
    p = n(361670),
    f = n(631576),
    g = n(931959),
    _ = n(750385),
    x = n(194004),
    C = n(68935),
    A = n(652215),
    E = n(985018);
let I = (e) => {
        S();
        let t = (0, i.bG)([_.A], () => _.A.hasLoadedStickerPacks);
        l.useEffect(() => {
            t && null == _.A.getStickerPack(e) && (0, f.zk)(e);
        }, [e, t]);
    },
    v = (e) => {
        let t = a.S0.useSetting();
        return (0, C.Qn)(t, e);
    },
    y = (e) => {
        let {
            collapsedStickersCategories: t,
            filteredStickers: n,
            listPaddingRight: i = 0,
            listWidth: a = 0,
            stickerNodeMargin: r = 0,
            stickerNodeWidth: u,
            stickersCategories: d,
        } = e;
        return l.useMemo(() => {
            let e = Math.floor((a - i + r) / (u + r)),
                l = Math.floor(Math.max(r, (a - i - u * e) / (e - 1))),
                m = [],
                p = [],
                f = [],
                g = 0,
                _ = 0,
                A = 0;
            if (0 !== a) {
                let l = function (t, n) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = (0, C.Xw)(t[0]) ? o.A.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: a } = (0, s.ie)(i),
                        r = c.A.getGuildId(),
                        u = d.findIndex((e) => e.type === x.Z2.FAVORITE),
                        I = d.findIndex((e) => e.type === x.Z2.RECENT),
                        v = t.length;
                    null != i && r === i.id && a && t.length < (0, h.aG)(i.premiumTier) && v++;
                    let y = Math.ceil(v / e);
                    p[_] = l ? 0 : y;
                    for (let s = 0; s < y; s++) {
                        let a = s * e,
                            r = a + e,
                            o = t
                                .slice(a, r)
                                .map((e, t) => ({
                                    type: x.op.STICKER,
                                    sticker: e,
                                    packId: (0, C.FD)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: _,
                                    rowIndex: g,
                                    columnIndex: t,
                                    visibleRowIndex: A,
                                    category: n,
                                }));
                        _ > I &&
                            _ > u &&
                            null != i &&
                            v > t.length &&
                            o.push({
                                type: x.op.CREATE_STICKER,
                                guild_id: i.id,
                                name: E.intl.string(E.t["UwF+Cw"]),
                                gridSectionIndex: _,
                                rowIndex: g,
                                columnIndex: o.length,
                                visibleRowIndex: A,
                            }),
                            l || (A++, f.push(o), m.push(o.length)),
                            g++;
                    }
                    _++;
                };
                if (null == n)
                    for (let e of d)
                        e.stickers.length > 0
                            ? (g++, l(e.stickers, e.type, t?.has(e.id) === !0))
                            : e.type === x.Z2.EMPTY_GUILD_UPSELL && ((p[_] = 0), _++);
                else
                    n.sendable.length > 0 && l(n.sendable, x.Z2.SEARCH_RESULTS),
                        n.sendableWithPremium.length > 0 && l(n.sendableWithPremium, x.Z2.SEARCH_RESULTS);
            }
            return { rowCount: g, rowCountBySection: p, stickersGrid: f, gutterWidth: l, columnCounts: m };
        }, [t, n, i, a, r, u, d]);
    },
    b = (e) => !0,
    S = () => {
        l.useEffect(() => {
            (0, f.YB)();
        }, []);
    },
    N = [];
function j() {
    let e = (0, r.k)();
    return e.favoriteStickers?.stickerIds ?? N;
}
function T() {
    let e = j();
    return (0, i.yK)(
        [_.A],
        () => e.map((e) => _.A.getStickerById(e)).filter((e) => null != e && (!(0, C.Xw)(e) || (0, C.Y4)(e))),
        [e],
    );
}
function w() {
    let e,
        t,
        n =
            ((e = (0, r.k)()),
            (t = N),
            e?.stickerFrecency?.stickers != null && (t = Object.keys(e?.stickerFrecency?.stickers)),
            t);
    return (0, i.yK)([_.A], () => n.map((e) => _.A.getStickerById(e)).filter((e) => void 0 !== e), [n]);
}
let R = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, i.bG)([_.A], () => _.A.getStickerById(e.id)),
            [s, a] = l.useState(!0),
            [r, o] = l.useState(!1),
            c = (0, C.Xw)(e) || (0, C.FD)(e),
            u = { hasFetched: r, isReturnable: c, renderableSticker: e, shouldFetch: s, stickersStoreDefinition: n },
            d = l.useRef(u);
        return (l.useEffect(() => {
            d.current = u;
        }),
        l.useEffect(() => {
            (async () => {
                let {
                    hasFetched: e,
                    isReturnable: n,
                    renderableSticker: l,
                    shouldFetch: i,
                    stickersStoreDefinition: s,
                } = d.current;
                if (t && !n && null == s && i && !e) {
                    a(!1);
                    try {
                        await (0, f.AO)(l.id);
                    } catch {}
                    o(!0);
                }
            })();
        }, [t]),
        c)
            ? [e, r]
            : [n ?? null, r];
    },
    L = (e) => {
        let t = ((e) => {
            let t,
                n,
                a,
                r = T(),
                { packs: c, frequentlyUsedStickers: h } = (0, i.cf)(
                    [_.A, g.A],
                    () => ({
                        packs: _.A.getPremiumPacks(),
                        frequentlyUsedStickers: g.A.stickerFrecencyWithoutFetchingLatest.frequently,
                    }),
                    [],
                ),
                f = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
                I =
                    ((t = (0, i.bG)([_.A], () => _.A.getAllGuildStickers())),
                    (n = (0, i.yK)([u.Ay, o.A], () => {
                        let e = u.Ay.getFlattenedGuildIds(),
                            t = [];
                        return (
                            e.forEach((e) => {
                                let n = o.A.getGuild(e);
                                null != n && t.push(n);
                            }),
                            t
                        );
                    }, [])),
                    (a = (0, i.bG)([d.default], () => d.default.getCurrentUser())),
                    l.useMemo(() => {
                        let l = [];
                        for (let { name: e, id: i } of n) {
                            let n = t.get(i);
                            null != n && 0 !== n.length && l.push({ type: x.Z2.GUILD, id: i, name: e, stickers: n });
                        }
                        if (e?.getGuildId() != null) {
                            let t = o.A.getGuild(e.getGuildId()),
                                { canManageAllExpressions: n } = (0, s.ie)(t),
                                i = l.findIndex((t) => t.id === e.getGuildId());
                            i >= 1
                                ? l.unshift(l.splice(i, 1)[0])
                                : -1 === i &&
                                  null != t &&
                                  n &&
                                  l.unshift({ type: x.Z2.EMPTY_GUILD_UPSELL, id: t.id, name: t.name, stickers: [] }),
                                null == a ||
                                    m.$3({ permission: A.xBc.USE_EXTERNAL_EMOJIS, user: a, context: e }) ||
                                    (l = l.filter((t) => t.id === e.getGuildId()));
                        }
                        return l;
                    }, [t, n, a, e]));
            return l.useMemo(() => {
                let t = c.map(C.T5);
                return [
                    { type: x.Z2.FAVORITE, id: x.Z2.FAVORITE, name: E.intl.string(E.t.y3LQCG), stickers: r },
                    {
                        type: x.Z2.RECENT,
                        id: x.Z2.RECENT,
                        name: E.intl.string(E.t["6hjpXW"]),
                        stickers:
                            h?.filter((t) =>
                                (0, C.Xw)(t)
                                    ? (_.A.getStickersByGuildId(t.guild_id)?.some((e) => e.id === t.id) ?? !1) &&
                                      (0, p.W$)(t, f, e) !== p.Ux.NONSENDABLE
                                    : (0, C.FD)(t)
                                      ? c.some((e) => e.id === t.pack_id)
                                      : void 0,
                            ) ?? [],
                    },
                    ...I,
                    ...t,
                ];
            }, [c, r, h, I, f, e]);
        })(e);
        return l.useMemo(() => t.filter((e) => e.type === x.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
