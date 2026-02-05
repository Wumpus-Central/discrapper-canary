"use strict";
n.d(t, {
    Gc: () => D,
    Sr: () => y,
    Th: () => S,
    UT: () => w,
    XQ: () => b,
    ZO: () => C,
    Zq: () => P,
    _c: () => v,
    ln: () => O,
    pD: () => M,
}),
    n(321073),
    n(667532);
var r = n(64700),
    i = n(311907),
    a = n(931991),
    s = n(253932),
    o = n(999886),
    l = n(71393),
    u = n(967198),
    c = n(711014),
    d = n(287809),
    _ = n(473145),
    f = n(488926),
    p = n(361670),
    h = n(631576),
    m = n(931959),
    g = n(679382),
    E = n(842086),
    A = n(378058),
    I = n(652215),
    T = n(985018);
let y = (e) => {
        b();
        let t = (0, i.bG)([g.A], () => g.A.hasLoadedStickerPacks);
        r.useEffect(() => {
            t && null == g.A.getStickerPack(e) && (0, h.zk)(e);
        }, [e, t]);
    },
    S = (e) => {
        let t = s.S0.useSetting();
        return (0, A.Qn)(t, e);
    },
    v = (e) => {
        let {
            collapsedStickersCategories: t,
            filteredStickers: n,
            listPaddingRight: i = 0,
            listWidth: s = 0,
            stickerNodeMargin: o = 0,
            stickerNodeWidth: c,
            stickersCategories: d,
        } = e;
        return r.useMemo(() => {
            let e = Math.floor((s - i + o) / (c + o)),
                r = Math.floor(Math.max(o, (s - i - c * e) / (e - 1))),
                f = [],
                p = [],
                h = [],
                m = 0,
                g = 0,
                I = 0;
            if (0 !== s) {
                let r = function (t, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = (0, A.Xw)(t[0]) ? l.A.getGuild(t[0].guild_id) : void 0,
                        { canCreateExpressions: s } = (0, a.ie)(i),
                        o = u.A.getGuildId(),
                        c = d.findIndex((e) => e.type === E.Z2.FAVORITE),
                        y = d.findIndex((e) => e.type === E.Z2.RECENT),
                        S = t.length;
                    null != i && o === i.id && s && t.length < (0, _.aG)(i.premiumTier) && S++;
                    let v = Math.ceil(S / e);
                    p[g] = r ? 0 : v;
                    for (let a = 0; a < v; a++) {
                        let s = a * e,
                            o = s + e,
                            l = t
                                .slice(s, o)
                                .map((e, t) => ({
                                    type: E.op.STICKER,
                                    sticker: e,
                                    packId: (0, A.FD)(e) ? e.pack_id : "TODO - fix",
                                    gridSectionIndex: g,
                                    rowIndex: m,
                                    columnIndex: t,
                                    visibleRowIndex: I,
                                    category: n,
                                }));
                        g > y &&
                            g > c &&
                            null != i &&
                            S > t.length &&
                            l.push({
                                type: E.op.CREATE_STICKER,
                                guild_id: i.id,
                                name: T.intl.string(T.t["UwF+Cw"]),
                                gridSectionIndex: g,
                                rowIndex: m,
                                columnIndex: l.length,
                                visibleRowIndex: I,
                            }),
                            r || (I++, h.push(l), f.push(l.length)),
                            m++;
                    }
                    g++;
                };
                if (null == n)
                    for (let e of d)
                        e.stickers.length > 0
                            ? (m++, r(e.stickers, e.type, t?.has(e.id) === !0))
                            : e.type === E.Z2.EMPTY_GUILD_UPSELL && ((p[g] = 0), g++);
                else
                    n.sendable.length > 0 && r(n.sendable, E.Z2.SEARCH_RESULTS),
                        n.sendableWithPremium.length > 0 && r(n.sendableWithPremium, E.Z2.SEARCH_RESULTS);
            }
            return { rowCount: m, rowCountBySection: p, stickersGrid: h, gutterWidth: r, columnCounts: f };
        }, [t, n, i, s, o, c, d]);
    },
    C = (e) => !0,
    b = () => {
        r.useEffect(() => {
            (0, h.YB)();
        }, []);
    },
    N = (e) => {
        let t = (0, i.bG)([g.A], () => g.A.getAllGuildStickers()),
            n = (0, i.yK)([c.Ay, l.A], () => {
                let e = c.Ay.getFlattenedGuildIds(),
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
                null != n && 0 !== n.length && r.push({ type: E.Z2.GUILD, id: i, name: e, stickers: n });
            }
            if (e?.getGuildId() != null) {
                let t = l.A.getGuild(e.getGuildId()),
                    { canManageAllExpressions: n } = (0, a.ie)(t),
                    i = r.findIndex((t) => t.id === e.getGuildId());
                i >= 1
                    ? r.unshift(r.splice(i, 1)[0])
                    : -1 === i &&
                      null != t &&
                      n &&
                      r.unshift({ type: E.Z2.EMPTY_GUILD_UPSELL, id: t.id, name: t.name, stickers: [] }),
                    null == s ||
                        f.$3({ permission: I.xBc.USE_EXTERNAL_EMOJIS, user: s, context: e }) ||
                        (r = r.filter((t) => t.id === e.getGuildId()));
            }
            return r;
        }, [t, n, s, e]);
    },
    R = [];
function O() {
    let e = (0, o.k)();
    return e.favoriteStickers?.stickerIds ?? R;
}
function D() {
    let e = O();
    return (0, i.yK)(
        [g.A],
        () => e.map((e) => g.A.getStickerById(e)).filter((e) => null != e && (!(0, A.Xw)(e) || (0, A.Y4)(e))),
        [e],
    );
}
function L() {
    let e = (0, o.k)(),
        t = R;
    return e?.stickerFrecency?.stickers != null && (t = Object.keys(e?.stickerFrecency?.stickers)), t;
}
function w() {
    let e = L();
    return (0, i.yK)([g.A], () => e.map((e) => g.A.getStickerById(e)).filter((e) => void 0 !== e), [e]);
}
let x = (e) => {
        let t = D(),
            { packs: n, frequentlyUsedStickers: a } = (0, i.cf)(
                [g.A, m.A],
                () => ({
                    packs: g.A.getPremiumPacks(),
                    frequentlyUsedStickers: m.A.stickerFrecencyWithoutFetchingLatest.frequently,
                }),
                [],
            ),
            s = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            o = N(e);
        return r.useMemo(() => {
            let r = n.map(A.T5);
            return [
                { type: E.Z2.FAVORITE, id: E.Z2.FAVORITE, name: T.intl.string(T.t.y3LQCG), stickers: t },
                {
                    type: E.Z2.RECENT,
                    id: E.Z2.RECENT,
                    name: T.intl.string(T.t["6hjpXW"]),
                    stickers:
                        a?.filter((t) =>
                            (0, A.Xw)(t)
                                ? (g.A.getStickersByGuildId(t.guild_id)?.some((e) => e.id === t.id) ?? !1) &&
                                  (0, p.W$)(t, s, e) !== p.Ux.NONSENDABLE
                                : (0, A.FD)(t)
                                  ? n.some((e) => e.id === t.pack_id)
                                  : void 0,
                        ) ?? [],
                },
                ...o,
                ...r,
            ];
        }, [n, t, a, o, s, e]);
    },
    P = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, i.bG)([g.A], () => g.A.getStickerById(e.id)),
            [a, s] = r.useState(!0),
            [o, l] = r.useState(!1),
            u = (0, A.Xw)(e) || (0, A.FD)(e),
            c = { hasFetched: o, isReturnable: u, renderableSticker: e, shouldFetch: a, stickersStoreDefinition: n },
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
                    stickersStoreDefinition: a,
                } = d.current;
                if (t && !n && null == a && i && !e) {
                    s(!1);
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
    M = (e) => {
        let t = x(e);
        return r.useMemo(() => t.filter((e) => e.type === E.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
    };
