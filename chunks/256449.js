"use strict";
n.d(t, {
    Gc: () => b,
    Sr: () => S,
    Th: () => y,
    UT: () => D,
    XQ: () => C,
    ZO: () => v,
    Zq: () => L,
    _c: () => N,
    ln: () => R,
    pD: () => w,
}),
    n(321073),
    n(667532);
var r = n(64700),
    i = n(311907),
    s = n(931991),
    a = n(253932),
    o = n(999886),
    l = n(71393),
    u = n(967198),
    c = n(711014),
    d = n(287809),
    _ = n(473145),
    f = n(488926),
    p = n(361670),
    h = n(631576),
    E = n(931959),
    m = n(679382),
    g = n(842086),
    A = n(378058),
    I = n(652215),
    T = n(985018);
let S = (e) => {
        C();
        let t = (0, i.bG)([m.A], () => m.A.hasLoadedStickerPacks);
        r.useEffect(() => {
            t && null == m.A.getStickerPack(e) && (0, h.zk)(e);
        }, [e, t]);
    },
    y = (e) => {
        let t = a.S0.useSetting();
        return (0, A.Qn)(t, e);
    },
    N = (e) => {
        let {
            collapsedStickersCategories: t,
            filteredStickers: n,
            listPaddingRight: i = 0,
            listWidth: a = 0,
            stickerNodeMargin: o = 0,
            stickerNodeWidth: c,
            stickersCategories: d,
        } = e;
        return r.useMemo(() => {
            let e = Math.floor((a - i + o) / (c + o)),
                r = Math.floor(Math.max(o, (a - i - c * e) / (e - 1))),
                f = [],
                p = [],
                h = [],
                E = 0,
                m = 0,
                I = 0;
            if (0 !== a) {
                let r = function (t, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = (0, A.Xw)(t[0]) ? l.A.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: a } = (0, s.ie)(i),
                        o = u.A.getGuildId(),
                        c = d.findIndex((e) => e.type === g.Z2.FAVORITE),
                        S = d.findIndex((e) => e.type === g.Z2.RECENT),
                        y = t.length;
                    null != i && o === i.id && a && t.length < (0, _.aG)(i.premiumTier) && y++;
                    let N = Math.ceil(y / e);
                    p[m] = r ? 0 : N;
                    for (let s = 0; s < N; s++) {
                        let a = s * e,
                            o = a + e,
                            l = t
                                .slice(a, o)
                                .map((e, t) => ({
                                    type: g.op.STICKER,
                                    sticker: e,
                                    packId: (0, A.FD)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: m,
                                    rowIndex: E,
                                    columnIndex: t,
                                    visibleRowIndex: I,
                                    category: n,
                                }));
                        m > S &&
                            m > c &&
                            null != i &&
                            y > t.length &&
                            l.push({
                                type: g.op.CREATE_STICKER,
                                guild_id: i.id,
                                name: T.intl.string(T.t["UwF+Cw"]),
                                gridSectionIndex: m,
                                rowIndex: E,
                                columnIndex: l.length,
                                visibleRowIndex: I,
                            }),
                            r || (I++, h.push(l), f.push(l.length)),
                            E++;
                    }
                    m++;
                };
                if (null == n)
                    for (let e of d)
                        e.stickers.length > 0
                            ? (E++, r(e.stickers, e.type, t?.has(e.id) === !0))
                            : e.type === g.Z2.EMPTY_GUILD_UPSELL && ((p[m] = 0), m++);
                else
                    n.sendable.length > 0 && r(n.sendable, g.Z2.SEARCH_RESULTS),
                        n.sendableWithPremium.length > 0 && r(n.sendableWithPremium, g.Z2.SEARCH_RESULTS);
            }
            return { rowCount: E, rowCountBySection: p, stickersGrid: h, gutterWidth: r, columnCounts: f };
        }, [t, n, i, a, o, c, d]);
    },
    v = (e) => !0,
    C = () => {
        r.useEffect(() => {
            (0, h.YB)();
        }, []);
    },
    O = [];
function R() {
    let e = (0, o.k)();
    return e.favoriteStickers?.stickerIds ?? O;
}
function b() {
    let e = R();
    return (0, i.yK)(
        [m.A],
        () => e.map((e) => m.A.getStickerById(e)).filter((e) => null != e && (!(0, A.Xw)(e) || (0, A.Y4)(e))),
        [e],
    );
}
function D() {
    let e,
        t,
        n =
            ((e = (0, o.k)()),
            (t = O),
            e?.stickerFrecency?.stickers != null && (t = Object.keys(e?.stickerFrecency?.stickers)),
            t);
    return (0, i.yK)([m.A], () => n.map((e) => m.A.getStickerById(e)).filter((e) => void 0 !== e), [n]);
}
let L = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, i.bG)([m.A], () => m.A.getStickerById(e.id)),
            [s, a] = r.useState(!0),
            [o, l] = r.useState(!1),
            u = (0, A.Xw)(e) || (0, A.FD)(e),
            c = { hasFetched: o, isReturnable: u, renderableSticker: e, shouldFetch: s, stickersStoreDefinition: n },
            d = r.useRef(c);
        return (r.useEffect(() => {
            d.current = c;
        }),
        r.useEffect(() => {
            (async () => {
                let {
                    hasFetched: e,
                    isReturnable: n,
                    renderableSticker: r,
                    shouldFetch: i,
                    stickersStoreDefinition: s,
                } = d.current;
                if (t && !n && null == s && i && !e) {
                    a(!1);
                    try {
                        await (0, h.AO)(r.id);
                    } catch {}
                    l(!0);
                }
            })();
        }, [t]),
        u)
            ? [e, o]
            : [n ?? null, o];
    },
    w = (e) => {
        let t = ((e) => {
            let t,
                n,
                a,
                o = b(),
                { packs: u, frequentlyUsedStickers: _ } = (0, i.cf)(
                    [m.A, E.A],
                    () => ({
                        packs: m.A.getPremiumPacks(),
                        frequentlyUsedStickers: E.A.stickerFrecencyWithoutFetchingLatest.frequently,
                    }),
                    [],
                ),
                h = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
                S =
                    ((t = (0, i.bG)([m.A], () => m.A.getAllGuildStickers())),
                    (n = (0, i.yK)([c.Ay, l.A], () => {
                        let e = c.Ay.getFlattenedGuildIds(),
                            t = [];
                        return (
                            e.forEach((e) => {
                                let n = l.A.getGuild(e);
                                null != n && t.push(n);
                            }),
                            t
                        );
                    }, [])),
                    (a = (0, i.bG)([d.default], () => d.default.getCurrentUser())),
                    r.useMemo(() => {
                        let r = [];
                        for (let { name: e, id: i } of n) {
                            let n = t.get(i);
                            null != n && 0 !== n.length && r.push({ type: g.Z2.GUILD, id: i, name: e, stickers: n });
                        }
                        if (e?.getGuildId() != null) {
                            let t = l.A.getGuild(e.getGuildId()),
                                { canManageAllExpressions: n } = (0, s.ie)(t),
                                i = r.findIndex((t) => t.id === e.getGuildId());
                            i >= 1
                                ? r.unshift(r.splice(i, 1)[0])
                                : -1 === i &&
                                  null != t &&
                                  n &&
                                  r.unshift({ type: g.Z2.EMPTY_GUILD_UPSELL, id: t.id, name: t.name, stickers: [] }),
                                null == a ||
                                    f.$3({ permission: I.xBc.USE_EXTERNAL_EMOJIS, user: a, context: e }) ||
                                    (r = r.filter((t) => t.id === e.getGuildId()));
                        }
                        return r;
                    }, [t, n, a, e]));
            return r.useMemo(() => {
                let t = u.map(A.T5);
                return [
                    { type: g.Z2.FAVORITE, id: g.Z2.FAVORITE, name: T.intl.string(T.t.y3LQCG), stickers: o },
                    {
                        type: g.Z2.RECENT,
                        id: g.Z2.RECENT,
                        name: T.intl.string(T.t["6hjpXW"]),
                        stickers:
                            _?.filter((t) =>
                                (0, A.Xw)(t)
                                    ? (m.A.getStickersByGuildId(t.guild_id)?.some((e) => e.id === t.id) ?? !1) &&
                                      (0, p.W$)(t, h, e) !== p.Ux.NONSENDABLE
                                    : (0, A.FD)(t)
                                      ? u.some((e) => e.id === t.pack_id)
                                      : void 0,
                            ) ?? [],
                    },
                    ...S,
                    ...t,
                ];
            }, [u, o, _, S, h, e]);
        })(e);
        return r.useMemo(() => t.filter((e) => e.type === g.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
