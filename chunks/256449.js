"use strict";
n.d(t, {
    Gc: () => b,
    Sr: () => y,
    Th: () => v,
    UT: () => R,
    XQ: () => _,
    ZO: () => N,
    Zq: () => M,
    _c: () => S,
    ln: () => j,
    pD: () => O,
}),
    n(321073),
    n(667532);
var l = n(582128),
    i = n(17928),
    s = n(931991),
    r = n(683973),
    a = n(885386),
    o = n(71393),
    u = n(967198),
    c = n(711014),
    d = n(287809),
    h = n(473145),
    m = n(488926),
    f = n(361670),
    p = n(631576),
    g = n(931959),
    x = n(750385),
    A = n(194004),
    C = n(68935),
    E = n(652215),
    I = n(375708);
function y(e) {
    _();
    let t = (0, i.bG)([x.A], () => x.A.hasLoadedStickerPacks);
    l.useEffect(() => {
        t && null == x.A.getStickerPack(e) && (0, p.zk)(e);
    }, [e, t]);
}
function v(e) {
    let t = a.S0.useSetting();
    return (0, C.Qn)(t, e);
}
function S(e) {
    let {
        collapsedStickersCategories: t,
        filteredStickers: n,
        listPaddingRight: i = 0,
        listWidth: r = 0,
        stickerNodeMargin: a = 0,
        stickerNodeWidth: c,
        stickersCategories: d,
    } = e;
    return l.useMemo(() => {
        let e = Math.floor((r - i + a) / (c + a)),
            l = Math.floor(Math.max(a, (r - i - c * e) / (e - 1))),
            m = [],
            f = [],
            p = [],
            g = 0,
            x = 0,
            E = 0;
        if (0 !== r) {
            function y(t, n) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = (0, C.Xw)(t[0]) ? o.A.getGuild(t[0].guild_id) : void 0,
                    { canCreateExpressions: r } = (0, s.ie)(i),
                    a = u.A.getGuildId(),
                    c = d.findIndex((e) => e.type === A.Z2.FAVORITE),
                    y = d.findIndex((e) => e.type === A.Z2.RECENT),
                    v = t.length;
                null != i && a === i.id && r && t.length < (0, h.aG)(i.premiumTier) && v++;
                let S = Math.ceil(v / e);
                f[x] = l ? 0 : S;
                for (let s = 0; s < S; s++) {
                    let r = s * e,
                        a = r + e,
                        o = t
                            .slice(r, a)
                            .map((e, t) => ({
                                type: A.op.STICKER,
                                sticker: e,
                                packId: (0, C.FD)(e) ? e.pack_id : "TODO - fix",
                                gridSectionIndex: x,
                                rowIndex: g,
                                columnIndex: t,
                                visibleRowIndex: E,
                                category: n,
                            }));
                    x > y &&
                        x > c &&
                        null != i &&
                        v > t.length &&
                        o.push({
                            type: A.op.CREATE_STICKER,
                            guild_id: i.id,
                            name: I.intl.string(I.t["UwF+Cw"]),
                            gridSectionIndex: x,
                            rowIndex: g,
                            columnIndex: o.length,
                            visibleRowIndex: E,
                        }),
                        l || (E++, p.push(o), m.push(o.length)),
                        g++;
                }
                x++;
            }
            if (null == n)
                for (let e of d)
                    e.stickers.length > 0
                        ? (g++, y(e.stickers, e.type, t?.has(e.id) === !0))
                        : e.type === A.Z2.EMPTY_GUILD_UPSELL && ((f[x] = 0), x++);
            else
                n.sendable.length > 0 && y(n.sendable, A.Z2.SEARCH_RESULTS),
                    n.sendableWithPremium.length > 0 && y(n.sendableWithPremium, A.Z2.SEARCH_RESULTS);
        }
        return { rowCount: g, rowCountBySection: f, stickersGrid: p, gutterWidth: l, columnCounts: m };
    }, [t, n, i, r, a, c, d]);
}
function N(e) {
    return !0;
}
function _() {
    l.useEffect(() => {
        (0, p.YB)();
    }, []);
}
let T = [];
function j() {
    let e = (0, r.k)();
    return e.favoriteStickers?.stickerIds ?? T;
}
function b() {
    let e = j();
    return (0, i.yK)(
        [x.A],
        () => e.map((e) => x.A.getStickerById(e)).filter((e) => null != e && (!(0, C.Xw)(e) || (0, C.Y4)(e))),
        [e],
    );
}
function R() {
    let e,
        t,
        n =
            ((e = (0, r.k)()),
            (t = T),
            e?.stickerFrecency?.stickers != null && (t = Object.keys(e?.stickerFrecency?.stickers)),
            t);
    return (0, i.yK)([x.A], () => n.map((e) => x.A.getStickerById(e)).filter((e) => void 0 !== e), [n]);
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.bG)([x.A], () => x.A.getStickerById(e.id)),
        [s, r] = l.useState(!0),
        [a, o] = l.useState(!1),
        u = (0, C.Xw)(e) || (0, C.FD)(e),
        c = { hasFetched: a, isReturnable: u, renderableSticker: e, shouldFetch: s, stickersStoreDefinition: n },
        d = l.useRef(c);
    return (l.useEffect(() => {
        d.current = c;
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
                r(!1);
                try {
                    await (0, p.AO)(l.id);
                } catch {}
                o(!0);
            }
        })();
    }, [t]),
    u)
        ? [e, a]
        : [n ?? null, a];
}
function O(e) {
    let t = (function (e) {
        let t,
            n,
            r,
            a = b(),
            { packs: u, frequentlyUsedStickers: h } = (0, i.cf)(
                [x.A, g.A],
                () => ({
                    packs: x.A.getPremiumPacks(),
                    frequentlyUsedStickers: g.A.stickerFrecencyWithoutFetchingLatest.frequently,
                }),
                [],
            ),
            p = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            y =
                ((t = (0, i.bG)([x.A], () => x.A.getAllGuildStickers())),
                (n = (0, i.yK)([c.Ay, o.A], () => {
                    let e = c.Ay.getFlattenedGuildIds(),
                        t = [];
                    return (
                        e.forEach((e) => {
                            let n = o.A.getGuild(e);
                            null != n && t.push(n);
                        }),
                        t
                    );
                }, [])),
                (r = (0, i.bG)([d.default], () => d.default.getCurrentUser())),
                l.useMemo(() => {
                    let l = [];
                    for (let { name: e, id: i } of n) {
                        let n = t.get(i);
                        null != n && 0 !== n.length && l.push({ type: A.Z2.GUILD, id: i, name: e, stickers: n });
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
                              l.unshift({ type: A.Z2.EMPTY_GUILD_UPSELL, id: t.id, name: t.name, stickers: [] }),
                            null == r ||
                                m.$3({ permission: E.xBc.USE_EXTERNAL_EMOJIS, user: r, context: e }) ||
                                (l = l.filter((t) => t.id === e.getGuildId()));
                    }
                    return l;
                }, [t, n, r, e]));
        return l.useMemo(() => {
            let t = u.map(C.T5);
            return [
                { type: A.Z2.FAVORITE, id: A.Z2.FAVORITE, name: I.intl.string(I.t.y3LQCG), stickers: a },
                {
                    type: A.Z2.RECENT,
                    id: A.Z2.RECENT,
                    name: I.intl.string(I.t["6hjpXW"]),
                    stickers:
                        h?.filter((t) =>
                            (0, C.Xw)(t)
                                ? (x.A.getStickersByGuildId(t.guild_id)?.some((e) => e.id === t.id) ?? !1) &&
                                  (0, f.W$)(t, p, e) !== f.Ux.NONSENDABLE
                                : (0, C.FD)(t)
                                  ? u.some((e) => e.id === t.pack_id)
                                  : void 0,
                        ) ?? [],
                },
                ...y,
                ...t,
            ];
        }, [u, a, h, y, p, e]);
    })(e);
    return l.useMemo(() => t.filter((e) => e.type === A.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
}
