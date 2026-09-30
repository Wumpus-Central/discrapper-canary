(n.d(t, {
    Gc: () => T,
    Sr: () => y,
    Th: () => S,
    UT: () => R,
    XQ: () => _,
    ZO: () => N,
    Zq: () => O,
    _c: () => v,
    ln: () => b,
    pD: () => L,
}),
    n(321073),
    n(667532));
var l = n(582128),
    i = n(17928),
    s = n(931991),
    r = n(683973),
    a = n(885386),
    o = n(71393),
    u = n(967198),
    c = n(711014),
    d = n(287809),
    m = n(473145),
    h = n(488926),
    p = n(361670),
    f = n(631576),
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
        t && null == x.A.getStickerPack(e) && (0, f.zk)(e);
    }, [e, t]);
}
function S(e) {
    let t = a.S0.useSetting();
    return (0, C.Qn)(t, e);
}
function v(e) {
    let {
        collapsedStickersCategories: t,
        filteredStickers: n,
        listPaddingRight: i = 0,
        listWidth: r = 0,
        stickerNodeMargin: a = 0,
        stickerNodeWidth: c,
        stickersCategories: d,
        collapsePremiumSearchSection: h = !1,
    } = e;
    return l.useMemo(() => {
        let e = Math.floor((r - i + a) / (c + a)),
            l = Math.floor(Math.max(a, (r - i - c * e) / (e - 1))),
            p = [],
            f = [],
            g = [],
            x = 0,
            E = 0,
            y = 0;
        if (0 !== r) {
            function S(t, n) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = (0, C.Xw)(t[0]) ? o.A.getGuild(t[0].guild_id) : void 0,
                    { canCreateExpressions: r } = (0, s.ie)(i),
                    a = u.A.getGuildId(),
                    c = d.findIndex((e) => e.type === A.Z2.FAVORITE),
                    h = d.findIndex((e) => e.type === A.Z2.RECENT),
                    S = t.length;
                null != i && a === i.id && r && t.length < (0, m.aG)(i.premiumTier) && S++;
                let v = Math.ceil(S / e);
                f[E] = l ? 0 : v;
                for (let s = 0; s < v; s++) {
                    let r = s * e,
                        a = r + e,
                        o = t
                            .slice(r, a)
                            .map((e, t) => ({
                                type: A.op.STICKER,
                                sticker: e,
                                packId: (0, C.FD)(e) ? e.pack_id : "TODO - fix",
                                gridSectionIndex: E,
                                rowIndex: x,
                                columnIndex: t,
                                visibleRowIndex: y,
                                category: n,
                            }));
                    (E > h &&
                        E > c &&
                        null != i &&
                        S > t.length &&
                        o.push({
                            type: A.op.CREATE_STICKER,
                            guild_id: i.id,
                            name: I.intl.string(I.t["UwF+Cw"]),
                            gridSectionIndex: E,
                            rowIndex: x,
                            columnIndex: o.length,
                            visibleRowIndex: y,
                        }),
                        l || (y++, g.push(o), p.push(o.length)),
                        x++);
                }
                E++;
            }
            if (null == n)
                for (let e of d)
                    e.stickers.length > 0
                        ? (x++, S(e.stickers, e.type, t?.has(e.id) === !0))
                        : e.type === A.Z2.EMPTY_GUILD_UPSELL && ((f[E] = 0), E++);
            else
                (n.sendable.length > 0 && S(n.sendable, A.Z2.SEARCH_RESULTS),
                    n.sendableWithPremium.length > 0 && S(n.sendableWithPremium, A.Z2.SEARCH_RESULTS, h));
        }
        return { rowCount: x, rowCountBySection: f, stickersGrid: g, gutterWidth: l, columnCounts: p };
    }, [t, n, i, r, a, c, d, h]);
}
function N(e) {
    return !0;
}
function _() {
    l.useEffect(() => {
        (0, f.YB)();
    }, []);
}
let j = [];
function b() {
    let e = (0, r.k)();
    return e.favoriteStickers?.stickerIds ?? j;
}
function T() {
    let e = b();
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
            (t = j),
            e?.stickerFrecency?.stickers != null && (t = Object.keys(e?.stickerFrecency?.stickers)),
            t);
    return (0, i.yK)([x.A], () => n.map((e) => x.A.getStickerById(e)).filter((e) => void 0 !== e), [n]);
}
function O(e) {
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
                    await (0, f.AO)(l.id);
                } catch {}
                o(!0);
            }
        })();
    }, [t]),
    u)
        ? [e, a]
        : [n ?? null, a];
}
function L(e) {
    let t = (function (e) {
        let t,
            n,
            r,
            a = T(),
            { packs: u, frequentlyUsedStickers: m } = (0, i.cf)(
                [x.A, g.A],
                () => ({
                    packs: x.A.getPremiumPacks(),
                    frequentlyUsedStickers: g.A.stickerFrecencyWithoutFetchingLatest.frequently,
                }),
                [],
            ),
            f = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            y =
                ((t = (0, i.bG)([x.A], () => x.A.getAllGuildStickers())),
                (n = (0, i.yK)(
                    [c.Ay, o.A],
                    () => {
                        let e = c.Ay.getFlattenedGuildIds(),
                            t = [];
                        return (
                            e.forEach((e) => {
                                let n = o.A.getGuild(e);
                                null != n && t.push(n);
                            }),
                            t
                        );
                    },
                    [],
                )),
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
                        (i >= 1
                            ? l.unshift(l.splice(i, 1)[0])
                            : -1 === i &&
                              null != t &&
                              n &&
                              l.unshift({ type: A.Z2.EMPTY_GUILD_UPSELL, id: t.id, name: t.name, stickers: [] }),
                            null == r ||
                                h.$3({ permission: E.xBc.USE_EXTERNAL_EMOJIS, user: r, context: e }) ||
                                (l = l.filter((t) => t.id === e.getGuildId())));
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
                        m?.filter((t) =>
                            (0, C.Xw)(t)
                                ? (x.A.getStickersByGuildId(t.guild_id)?.some((e) => e.id === t.id) ?? !1) &&
                                  (0, p.W$)(t, f, e) !== p.Ux.NONSENDABLE
                                : (0, C.FD)(t)
                                  ? u.some((e) => e.id === t.pack_id)
                                  : void 0,
                        ) ?? [],
                },
                ...y,
                ...t,
            ];
        }, [u, a, m, y, f, e]);
    })(e);
    return l.useMemo(() => t.filter((e) => e.type === A.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
}
