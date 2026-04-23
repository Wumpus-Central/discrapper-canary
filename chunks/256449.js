"use strict";
n.d(t, {
    Gc: () => D,
    Sr: () => S,
    Th: () => N,
    UT: () => L,
    XQ: () => O,
    ZO: () => R,
    Zq: () => b,
    _c: () => C,
    ln: () => v,
    pD: () => w,
}),
    n(321073),
    n(667532);
var i = n(64700),
    r = n(17928),
    s = n(931991),
    a = n(253932),
    o = n(999886),
    l = n(71393),
    d = n(967198),
    _ = n(711014),
    u = n(287809),
    c = n(473145),
    E = n(488926),
    h = n(361670),
    m = n(631576),
    f = n(931959),
    g = n(750385),
    p = n(194004),
    A = n(68935),
    I = n(652215),
    T = n(985018);
let S = (e) => {
        O();
        let t = (0, r.bG)([g.A], () => g.A.hasLoadedStickerPacks);
        i.useEffect(() => {
            t && null == g.A.getStickerPack(e) && (0, m.zk)(e);
        }, [e, t]);
    },
    N = (e) => {
        let t = a.S0.useSetting();
        return (0, A.Qn)(t, e);
    },
    C = (e) => {
        let {
            collapsedStickersCategories: t,
            filteredStickers: n,
            listPaddingRight: r = 0,
            listWidth: a = 0,
            stickerNodeMargin: o = 0,
            stickerNodeWidth: _,
            stickersCategories: u,
        } = e;
        return i.useMemo(() => {
            let e = Math.floor((a - r + o) / (_ + o)),
                i = Math.floor(Math.max(o, (a - r - _ * e) / (e - 1))),
                E = [],
                h = [],
                m = [],
                f = 0,
                g = 0,
                I = 0;
            if (0 !== a) {
                let i = function (t, n) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = (0, A.Xw)(t[0]) ? l.A.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: a } = (0, s.ie)(r),
                        o = d.A.getGuildId(),
                        _ = u.findIndex((e) => e.type === p.Z2.FAVORITE),
                        S = u.findIndex((e) => e.type === p.Z2.RECENT),
                        N = t.length;
                    null != r && o === r.id && a && t.length < (0, c.aG)(r.premiumTier) && N++;
                    let C = Math.ceil(N / e);
                    h[g] = i ? 0 : C;
                    for (let s = 0; s < C; s++) {
                        let a = s * e,
                            o = a + e,
                            l = t
                                .slice(a, o)
                                .map((e, t) => ({
                                    type: p.op.STICKER,
                                    sticker: e,
                                    packId: (0, A.FD)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: g,
                                    rowIndex: f,
                                    columnIndex: t,
                                    visibleRowIndex: I,
                                    category: n,
                                }));
                        g > S &&
                            g > _ &&
                            null != r &&
                            N > t.length &&
                            l.push({
                                type: p.op.CREATE_STICKER,
                                guild_id: r.id,
                                name: T.intl.string(T.t["UwF+Cw"]),
                                gridSectionIndex: g,
                                rowIndex: f,
                                columnIndex: l.length,
                                visibleRowIndex: I,
                            }),
                            i || (I++, m.push(l), E.push(l.length)),
                            f++;
                    }
                    g++;
                };
                if (null == n)
                    for (let e of u)
                        e.stickers.length > 0
                            ? (f++, i(e.stickers, e.type, t?.has(e.id) === !0))
                            : e.type === p.Z2.EMPTY_GUILD_UPSELL && ((h[g] = 0), g++);
                else
                    n.sendable.length > 0 && i(n.sendable, p.Z2.SEARCH_RESULTS),
                        n.sendableWithPremium.length > 0 && i(n.sendableWithPremium, p.Z2.SEARCH_RESULTS);
            }
            return { rowCount: f, rowCountBySection: h, stickersGrid: m, gutterWidth: i, columnCounts: E };
        }, [t, n, r, a, o, _, u]);
    },
    R = (e) => !0,
    O = () => {
        i.useEffect(() => {
            (0, m.YB)();
        }, []);
    },
    y = [];
function v() {
    let e = (0, o.k)();
    return e.favoriteStickers?.stickerIds ?? y;
}
function D() {
    let e = v();
    return (0, r.yK)(
        [g.A],
        () => e.map((e) => g.A.getStickerById(e)).filter((e) => null != e && (!(0, A.Xw)(e) || (0, A.Y4)(e))),
        [e],
    );
}
function L() {
    let e,
        t,
        n =
            ((e = (0, o.k)()),
            (t = y),
            e?.stickerFrecency?.stickers != null && (t = Object.keys(e?.stickerFrecency?.stickers)),
            t);
    return (0, r.yK)([g.A], () => n.map((e) => g.A.getStickerById(e)).filter((e) => void 0 !== e), [n]);
}
let b = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, r.bG)([g.A], () => g.A.getStickerById(e.id)),
            [s, a] = i.useState(!0),
            [o, l] = i.useState(!1),
            d = (0, A.Xw)(e) || (0, A.FD)(e),
            _ = { hasFetched: o, isReturnable: d, renderableSticker: e, shouldFetch: s, stickersStoreDefinition: n },
            u = i.useRef(_);
        return (i.useEffect(() => {
            u.current = _;
        }),
        i.useEffect(() => {
            (async () => {
                let {
                    hasFetched: e,
                    isReturnable: n,
                    renderableSticker: i,
                    shouldFetch: r,
                    stickersStoreDefinition: s,
                } = u.current;
                if (t && !n && null == s && r && !e) {
                    a(!1);
                    try {
                        await (0, m.AO)(i.id);
                    } catch {}
                    l(!0);
                }
            })();
        }, [t]),
        d)
            ? [e, o]
            : [n ?? null, o];
    },
    w = (e) => {
        let t = ((e) => {
            let t,
                n,
                a,
                o = D(),
                { packs: d, frequentlyUsedStickers: c } = (0, r.cf)(
                    [g.A, f.A],
                    () => ({
                        packs: g.A.getPremiumPacks(),
                        frequentlyUsedStickers: f.A.stickerFrecencyWithoutFetchingLatest.frequently,
                    }),
                    [],
                ),
                m = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
                S =
                    ((t = (0, r.bG)([g.A], () => g.A.getAllGuildStickers())),
                    (n = (0, r.yK)([_.Ay, l.A], () => {
                        let e = _.Ay.getFlattenedGuildIds(),
                            t = [];
                        return (
                            e.forEach((e) => {
                                let n = l.A.getGuild(e);
                                null != n && t.push(n);
                            }),
                            t
                        );
                    }, [])),
                    (a = (0, r.bG)([u.default], () => u.default.getCurrentUser())),
                    i.useMemo(() => {
                        let i = [];
                        for (let { name: e, id: r } of n) {
                            let n = t.get(r);
                            null != n && 0 !== n.length && i.push({ type: p.Z2.GUILD, id: r, name: e, stickers: n });
                        }
                        if (e?.getGuildId() != null) {
                            let t = l.A.getGuild(e.getGuildId()),
                                { canManageAllExpressions: n } = (0, s.ie)(t),
                                r = i.findIndex((t) => t.id === e.getGuildId());
                            r >= 1
                                ? i.unshift(i.splice(r, 1)[0])
                                : -1 === r &&
                                  null != t &&
                                  n &&
                                  i.unshift({ type: p.Z2.EMPTY_GUILD_UPSELL, id: t.id, name: t.name, stickers: [] }),
                                null == a ||
                                    E.$3({ permission: I.xBc.USE_EXTERNAL_EMOJIS, user: a, context: e }) ||
                                    (i = i.filter((t) => t.id === e.getGuildId()));
                        }
                        return i;
                    }, [t, n, a, e]));
            return i.useMemo(() => {
                let t = d.map(A.T5);
                return [
                    { type: p.Z2.FAVORITE, id: p.Z2.FAVORITE, name: T.intl.string(T.t.y3LQCG), stickers: o },
                    {
                        type: p.Z2.RECENT,
                        id: p.Z2.RECENT,
                        name: T.intl.string(T.t["6hjpXW"]),
                        stickers:
                            c?.filter((t) =>
                                (0, A.Xw)(t)
                                    ? (g.A.getStickersByGuildId(t.guild_id)?.some((e) => e.id === t.id) ?? !1) &&
                                      (0, h.W$)(t, m, e) !== h.Ux.NONSENDABLE
                                    : (0, A.FD)(t)
                                      ? d.some((e) => e.id === t.pack_id)
                                      : void 0,
                            ) ?? [],
                    },
                    ...S,
                    ...t,
                ];
            }, [d, o, c, S, m, e]);
        })(e);
        return i.useMemo(() => t.filter((e) => e.type === p.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
