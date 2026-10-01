(i.d(t, {
    Gc: () => G,
    Sr: () => A,
    Th: () => k,
    UT: () => w,
    XQ: () => x,
    ZO: () => R,
    Zq: () => P,
    _c: () => T,
    ln: () => L,
    pD: () => U,
}),
    i(321073),
    i(667532));
var n = i(582128),
    r = i(17928),
    s = i(931991),
    l = i(683973),
    u = i(885386),
    d = i(71393),
    c = i(967198),
    a = i(711014),
    _ = i(287809),
    o = i(473145),
    f = i(488926),
    p = i(361670),
    E = i(631576),
    g = i(931959),
    h = i(750385),
    y = i(194004),
    S = i(378058),
    m = i(652215),
    I = i(375708);
function A(e) {
    x();
    let t = (0, r.bG)([h.A], () => h.A.hasLoadedStickerPacks);
    n.useEffect(() => {
        t && null == h.A.getStickerPack(e) && (0, E.zk)(e);
    }, [e, t]);
}
function k(e) {
    let t = u.S0.useSetting();
    return (0, S.Qn)(t, e);
}
function T(e) {
    let {
        collapsedStickersCategories: t,
        filteredStickers: i,
        listPaddingRight: r = 0,
        listWidth: l = 0,
        stickerNodeMargin: u = 0,
        stickerNodeWidth: a,
        stickersCategories: _,
        collapsePremiumSearchSection: f = !1,
    } = e;
    return n.useMemo(() => {
        let e = Math.floor((l - r + u) / (a + u)),
            n = Math.floor(Math.max(u, (l - r - a * e) / (e - 1))),
            p = [],
            E = [],
            g = [],
            h = 0,
            m = 0,
            A = 0;
        if (0 !== l) {
            function k(t, i) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = (0, S.Xw)(t[0]) ? d.A.getGuild(t[0].guild_id) : void 0,
                    { canCreateExpressions: l } = (0, s.ie)(r),
                    u = c.A.getGuildId(),
                    a = _.findIndex((e) => e.type === y.Z2.FAVORITE),
                    f = _.findIndex((e) => e.type === y.Z2.RECENT),
                    k = t.length;
                null != r && u === r.id && l && t.length < (0, o.aG)(r.premiumTier) && k++;
                let T = Math.ceil(k / e);
                E[m] = n ? 0 : T;
                for (let s = 0; s < T; s++) {
                    let l = s * e,
                        u = l + e,
                        d = t
                            .slice(l, u)
                            .map((e, t) => ({
                                type: y.op.STICKER,
                                sticker: e,
                                packId: (0, S.FD)(e) ? e.pack_id : "TODO - fix",
                                gridSectionIndex: m,
                                rowIndex: h,
                                columnIndex: t,
                                visibleRowIndex: A,
                                category: i,
                            }));
                    (m > f &&
                        m > a &&
                        null != r &&
                        k > t.length &&
                        d.push({
                            type: y.op.CREATE_STICKER,
                            guild_id: r.id,
                            name: I.intl.string(I.t["UwF+Cw"]),
                            gridSectionIndex: m,
                            rowIndex: h,
                            columnIndex: d.length,
                            visibleRowIndex: A,
                        }),
                        n || (A++, g.push(d), p.push(d.length)),
                        h++);
                }
                m++;
            }
            if (null == i)
                for (let e of _)
                    e.stickers.length > 0
                        ? (h++, k(e.stickers, e.type, t?.has(e.id) === !0))
                        : e.type === y.Z2.EMPTY_GUILD_UPSELL && ((E[m] = 0), m++);
            else
                (i.sendable.length > 0 && k(i.sendable, y.Z2.SEARCH_RESULTS),
                    i.sendableWithPremium.length > 0 && k(i.sendableWithPremium, y.Z2.SEARCH_RESULTS, f));
        }
        return { rowCount: h, rowCountBySection: E, stickersGrid: g, gutterWidth: n, columnCounts: p };
    }, [t, i, r, l, u, a, _, f]);
}
function R(e) {
    return !0;
}
function x() {
    n.useEffect(() => {
        (0, E.YB)();
    }, []);
}
let C = [];
function L() {
    let e = (0, l.k)();
    return e.favoriteStickers?.stickerIds ?? C;
}
function G() {
    let e = L();
    return (0, r.yK)(
        [h.A],
        () => e.map((e) => h.A.getStickerById(e)).filter((e) => null != e && (!(0, S.Xw)(e) || (0, S.Y4)(e))),
        [e],
    );
}
function w() {
    let e,
        t,
        i =
            ((e = (0, l.k)()),
            (t = C),
            e?.stickerFrecency?.stickers != null && (t = Object.keys(e?.stickerFrecency?.stickers)),
            t);
    return (0, r.yK)([h.A], () => i.map((e) => h.A.getStickerById(e)).filter((e) => void 0 !== e), [i]);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = (0, r.bG)([h.A], () => h.A.getStickerById(e.id)),
        [s, l] = n.useState(!0),
        [u, d] = n.useState(!1),
        c = (0, S.Xw)(e) || (0, S.FD)(e),
        a = { hasFetched: u, isReturnable: c, renderableSticker: e, shouldFetch: s, stickersStoreDefinition: i },
        _ = n.useRef(a);
    return (n.useEffect(() => {
        _.current = a;
    }),
    n.useEffect(() => {
        (async () => {
            let {
                hasFetched: e,
                isReturnable: i,
                renderableSticker: n,
                shouldFetch: r,
                stickersStoreDefinition: s,
            } = _.current;
            if (t && !i && null == s && r && !e) {
                l(!1);
                try {
                    await (0, E.AO)(n.id);
                } catch {}
                d(!0);
            }
        })();
    }, [t]),
    c)
        ? [e, u]
        : [i ?? null, u];
}
function U(e) {
    let t = (function (e) {
        let t,
            i,
            l,
            u = G(),
            { packs: c, frequentlyUsedStickers: o } = (0, r.cf)(
                [h.A, g.A],
                () => ({
                    packs: h.A.getPremiumPacks(),
                    frequentlyUsedStickers: g.A.stickerFrecencyWithoutFetchingLatest.frequently,
                }),
                [],
            ),
            E = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
            A =
                ((t = (0, r.bG)([h.A], () => h.A.getAllGuildStickers())),
                (i = (0, r.yK)(
                    [a.Ay, d.A],
                    () => {
                        let e = a.Ay.getFlattenedGuildIds(),
                            t = [];
                        return (
                            e.forEach((e) => {
                                let i = d.A.getGuild(e);
                                null != i && t.push(i);
                            }),
                            t
                        );
                    },
                    [],
                )),
                (l = (0, r.bG)([_.default], () => _.default.getCurrentUser())),
                n.useMemo(() => {
                    let n = [];
                    for (let { name: e, id: r } of i) {
                        let i = t.get(r);
                        null != i && 0 !== i.length && n.push({ type: y.Z2.GUILD, id: r, name: e, stickers: i });
                    }
                    if (e?.getGuildId() != null) {
                        let t = d.A.getGuild(e.getGuildId()),
                            { canManageAllExpressions: i } = (0, s.ie)(t),
                            r = n.findIndex((t) => t.id === e.getGuildId());
                        (r >= 1
                            ? n.unshift(n.splice(r, 1)[0])
                            : -1 === r &&
                              null != t &&
                              i &&
                              n.unshift({ type: y.Z2.EMPTY_GUILD_UPSELL, id: t.id, name: t.name, stickers: [] }),
                            null == l ||
                                f.$3({ permission: m.xBc.USE_EXTERNAL_EMOJIS, user: l, context: e }) ||
                                (n = n.filter((t) => t.id === e.getGuildId())));
                    }
                    return n;
                }, [t, i, l, e]));
        return n.useMemo(() => {
            let t = c.map(S.T5);
            return [
                { type: y.Z2.FAVORITE, id: y.Z2.FAVORITE, name: I.intl.string(I.t.y3LQCG), stickers: u },
                {
                    type: y.Z2.RECENT,
                    id: y.Z2.RECENT,
                    name: I.intl.string(I.t["6hjpXW"]),
                    stickers:
                        o?.filter((t) =>
                            (0, S.Xw)(t)
                                ? (h.A.getStickersByGuildId(t.guild_id)?.some((e) => e.id === t.id) ?? !1) &&
                                  (0, p.W$)(t, E, e) !== p.Ux.NONSENDABLE
                                : (0, S.FD)(t)
                                  ? c.some((e) => e.id === t.pack_id)
                                  : void 0,
                        ) ?? [],
                },
                ...A,
                ...t,
            ];
        }, [c, u, o, A, E, e]);
    })(e);
    return n.useMemo(() => t.filter((e) => e.type === y.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
}
