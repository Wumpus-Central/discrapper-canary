"use strict";
n.d(t, {
    Gc: () => j,
    Sr: () => I,
    Th: () => v,
    UT: () => R,
    XQ: () => b,
    ZO: () => S,
    Zq: () => w,
    _c: () => y,
    ln: () => T,
    pD: () => L,
}),
    n(321073),
    n(667532);
var i = n(64700),
    l = n(311907),
    s = n(931991),
    r = n(253932),
    a = n(999886),
    o = n(71393),
    c = n(967198),
    u = n(711014),
    d = n(287809),
    h = n(473145),
    m = n(488926),
    p = n(361670),
    f = n(631576),
    g = n(931959),
    _ = n(679382),
    x = n(842086),
    A = n(378058),
    C = n(652215),
    E = n(985018);
let I = (e) => {
        b();
        let t = (0, l.bG)([_.A], () => _.A.hasLoadedStickerPacks);
        i.useEffect(() => {
            t && null == _.A.getStickerPack(e) && (0, f.zk)(e);
        }, [e, t]);
    },
    v = (e) => {
        let t = r.S0.useSetting();
        return (0, A.Qn)(t, e);
    },
    y = (e) => {
        let {
            collapsedStickersCategories: t,
            filteredStickers: n,
            listPaddingRight: l = 0,
            listWidth: r = 0,
            stickerNodeMargin: a = 0,
            stickerNodeWidth: u,
            stickersCategories: d,
        } = e;
        return i.useMemo(() => {
            let e = Math.floor((r - l + a) / (u + a)),
                i = Math.floor(Math.max(a, (r - l - u * e) / (e - 1))),
                m = [],
                p = [],
                f = [],
                g = 0,
                _ = 0,
                C = 0;
            if (0 !== r) {
                let i = function (t, n) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = (0, A.Xw)(t[0]) ? o.A.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: r } = (0, s.ie)(l),
                        a = c.A.getGuildId(),
                        u = d.findIndex((e) => e.type === x.Z2.FAVORITE),
                        I = d.findIndex((e) => e.type === x.Z2.RECENT),
                        v = t.length;
                    null != l && a === l.id && r && t.length < (0, h.aG)(l.premiumTier) && v++;
                    let y = Math.ceil(v / e);
                    p[_] = i ? 0 : y;
                    for (let s = 0; s < y; s++) {
                        let r = s * e,
                            a = r + e,
                            o = t
                                .slice(r, a)
                                .map((e, t) => ({
                                    type: x.op.STICKER,
                                    sticker: e,
                                    packId: (0, A.FD)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: _,
                                    rowIndex: g,
                                    columnIndex: t,
                                    visibleRowIndex: C,
                                    category: n,
                                }));
                        _ > I &&
                            _ > u &&
                            null != l &&
                            v > t.length &&
                            o.push({
                                type: x.op.CREATE_STICKER,
                                guild_id: l.id,
                                name: E.intl.string(E.t["UwF+Cw"]),
                                gridSectionIndex: _,
                                rowIndex: g,
                                columnIndex: o.length,
                                visibleRowIndex: C,
                            }),
                            i || (C++, f.push(o), m.push(o.length)),
                            g++;
                    }
                    _++;
                };
                if (null == n)
                    for (let e of d)
                        e.stickers.length > 0
                            ? (g++, i(e.stickers, e.type, t?.has(e.id) === !0))
                            : e.type === x.Z2.EMPTY_GUILD_UPSELL && ((p[_] = 0), _++);
                else
                    n.sendable.length > 0 && i(n.sendable, x.Z2.SEARCH_RESULTS),
                        n.sendableWithPremium.length > 0 && i(n.sendableWithPremium, x.Z2.SEARCH_RESULTS);
            }
            return { rowCount: g, rowCountBySection: p, stickersGrid: f, gutterWidth: i, columnCounts: m };
        }, [t, n, l, r, a, u, d]);
    },
    S = (e) => !0,
    b = () => {
        i.useEffect(() => {
            (0, f.YB)();
        }, []);
    },
    N = [];
function T() {
    let e = (0, a.k)();
    return e.favoriteStickers?.stickerIds ?? N;
}
function j() {
    let e = T();
    return (0, l.yK)(
        [_.A],
        () => e.map((e) => _.A.getStickerById(e)).filter((e) => null != e && (!(0, A.Xw)(e) || (0, A.Y4)(e))),
        [e],
    );
}
function R() {
    let e,
        t,
        n =
            ((e = (0, a.k)()),
            (t = N),
            e?.stickerFrecency?.stickers != null && (t = Object.keys(e?.stickerFrecency?.stickers)),
            t);
    return (0, l.yK)([_.A], () => n.map((e) => _.A.getStickerById(e)).filter((e) => void 0 !== e), [n]);
}
let w = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, l.bG)([_.A], () => _.A.getStickerById(e.id)),
            [s, r] = i.useState(!0),
            [a, o] = i.useState(!1),
            c = (0, A.Xw)(e) || (0, A.FD)(e),
            u = { hasFetched: a, isReturnable: c, renderableSticker: e, shouldFetch: s, stickersStoreDefinition: n },
            d = i.useRef(u);
        return (i.useEffect(() => {
            d.current = u;
        }),
        i.useEffect(() => {
            (async () => {
                let {
                    hasFetched: e,
                    isReturnable: n,
                    renderableSticker: i,
                    shouldFetch: l,
                    stickersStoreDefinition: s,
                } = d.current;
                if (t && !n && null == s && l && !e) {
                    r(!1);
                    try {
                        await (0, f.AO)(i.id);
                    } catch {}
                    o(!0);
                }
            })();
        }, [t]),
        c)
            ? [e, a]
            : [n ?? null, a];
    },
    L = (e) => {
        let t = ((e) => {
            let t,
                n,
                r,
                a = j(),
                { packs: c, frequentlyUsedStickers: h } = (0, l.cf)(
                    [_.A, g.A],
                    () => ({
                        packs: _.A.getPremiumPacks(),
                        frequentlyUsedStickers: g.A.stickerFrecencyWithoutFetchingLatest.frequently,
                    }),
                    [],
                ),
                f = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
                I =
                    ((t = (0, l.bG)([_.A], () => _.A.getAllGuildStickers())),
                    (n = (0, l.yK)([u.Ay, o.A], () => {
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
                    (r = (0, l.bG)([d.default], () => d.default.getCurrentUser())),
                    i.useMemo(() => {
                        let i = [];
                        for (let { name: e, id: l } of n) {
                            let n = t.get(l);
                            null != n && 0 !== n.length && i.push({ type: x.Z2.GUILD, id: l, name: e, stickers: n });
                        }
                        if (e?.getGuildId() != null) {
                            let t = o.A.getGuild(e.getGuildId()),
                                { canManageAllExpressions: n } = (0, s.ie)(t),
                                l = i.findIndex((t) => t.id === e.getGuildId());
                            l >= 1
                                ? i.unshift(i.splice(l, 1)[0])
                                : -1 === l &&
                                  null != t &&
                                  n &&
                                  i.unshift({ type: x.Z2.EMPTY_GUILD_UPSELL, id: t.id, name: t.name, stickers: [] }),
                                null == r ||
                                    m.$3({ permission: C.xBc.USE_EXTERNAL_EMOJIS, user: r, context: e }) ||
                                    (i = i.filter((t) => t.id === e.getGuildId()));
                        }
                        return i;
                    }, [t, n, r, e]));
            return i.useMemo(() => {
                let t = c.map(A.T5);
                return [
                    { type: x.Z2.FAVORITE, id: x.Z2.FAVORITE, name: E.intl.string(E.t.y3LQCG), stickers: a },
                    {
                        type: x.Z2.RECENT,
                        id: x.Z2.RECENT,
                        name: E.intl.string(E.t["6hjpXW"]),
                        stickers:
                            h?.filter((t) =>
                                (0, A.Xw)(t)
                                    ? (_.A.getStickersByGuildId(t.guild_id)?.some((e) => e.id === t.id) ?? !1) &&
                                      (0, p.W$)(t, f, e) !== p.Ux.NONSENDABLE
                                    : (0, A.FD)(t)
                                      ? c.some((e) => e.id === t.pack_id)
                                      : void 0,
                            ) ?? [],
                    },
                    ...I,
                    ...t,
                ];
            }, [c, a, h, I, f, e]);
        })(e);
        return i.useMemo(() => t.filter((e) => e.type === x.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
