n.d(t, {
    fv: () => el,
    od: () => ea,
    tV: () => eA,
    uM: () => eE,
    Ub: () => ed,
    nR: () => es,
    S_: () => Z,
    i_: () => Q,
    zN: () => e_,
    w6: () => J,
    Nz: () => er,
    u$: () => ec,
    _2: () => eu,
    kG: () => eh,
    Ye: () => eo,
});
var i = n(435558),
    r = n.n(i),
    a = n(554146),
    s = n(873298),
    l = n(406935),
    o = n(157559),
    d = n(541689),
    c = n(47899),
    u = n(976860),
    _ = n(594061),
    E = n(95701),
    A = n(280450),
    h = n(734057),
    f = n(576705),
    I = n(309010),
    p = n(967198),
    m = n(927813),
    T = n(935208),
    g = n(181079);
n(321073);
var S = n(353202),
    N = n(826767),
    C = n(573163),
    O = n(349828),
    R = n(818348);
function L(e) {
    return Object.values(g.A.getFavoriteChannels())
        .filter((t) => {
            if (t.type !== s.Ip.REFERENCE_ORIGINAL || (null != e && t.parentId !== e)) return !1;
            let n = h.A.getChannel(t.id);
            return null != n ? n.isThread() : null != t.channelType && E.Le.has(t.channelType);
        })
        .map((e) => e.id);
}
async function y(e) {
    await S.A.loadThreadsBulk(L(e));
}
function D(e) {
    let { days: t, categoryId: n } = e;
    if (!Number.isSafeInteger(t) || t < 0) return [];
    let i = Date.now() - t * m.A.Millis.DAY,
        r = [];
    for (let e of L(n)) {
        let n = h.A.getChannel(e);
        if (null == n || null == n.threadMetadata || !f.A.can(R.xB.VIEW_CHANNEL, n) || C.Ay.hasUnreadOrMentions(e))
            continue;
        if (n.threadMetadata.archived) {
            r.push(n);
            continue;
        }
        if (t === O.HH) continue;
        let a = (0, N.F)(n);
        Number.isFinite(a) && a > 0 && a < i && r.push(n);
    }
    return r
        .map((e) => {
            let t = (0, N.F)(e);
            return { channel: e, activity: Number.isFinite(t) && t > 0 ? t : 1 / 0 };
        })
        .sort((e, t) => e.activity - t.activity)
        .map((e) => {
            let { channel: t } = e;
            return t;
        });
}
var b = n(796637),
    v = n(93055),
    P = n(5180),
    M = n(635233),
    U = n(928424),
    w = n(858899),
    G = n(27232),
    x = n(105292),
    k = n(652215);
function F(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function B(e) {
    let t = p.A.getGuildId(),
        n = I.Ay.getChannelId();
    (0, P.ai)(t) &&
        null != n &&
        e.has(n) &&
        (0, u.pX)(
            k.BVt.CHANNEL(
                t,
                (function (e, t) {
                    let n = (0, b.g)(),
                        i = n
                            .getSections()
                            .flatMap((e, t) =>
                                r()
                                    .range(e)
                                    .map((e) => n.getChannelFromSectionRow(t, e)?.channel.id),
                            )
                            .filter((e) => null != e),
                        a = i.indexOf(e);
                    for (let e = a - 1; e >= 0; e--) if (!t.has(i[e])) return i[e];
                    return i.find((e) => !t.has(e));
                })(n, e),
            ),
        );
}
function V(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === s.Ip.CATEGORY) continue;
        let i = h.A.getChannel(t);
        if (null == i) {
            let i = n.channelType?.value;
            if (null != i && E.Le.has(i)) continue;
            delete e[t];
            continue;
        }
        if (
            (null == n.channelType && (n.channelType = l.ZQ.create({ value: i.type })),
            !i.isPrivate() && !f.A.can(R.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function H(e, t) {
    let n = e[t];
    if (null == n || n.parentId === O.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== s.Ip.CATEGORY) && (n.parentId = O.O8);
}
function j(e) {
    return r().filter(e, (e) => e.type !== s.Ip.CATEGORY).length;
}
function W(e, t) {
    if ((V(e), r().size(e) >= O.lj)) return { limit: O.lj, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, v.o9)();
    return t === s.Ip.CATEGORY || j(e) < n ? null : { limit: n, canUpsell: i };
}
function Y(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, U.A)(t)
        : o.A.show({ title: x.intl.string(x.t["+XYXtZ"]), body: x.intl.formatToPlainString(x.t.JaIyFi, { count: t }) });
}
function K(e) {
    e?.status === 403 &&
        (_.wc.loadIfNecessary(!0).catch(k.tEg),
        o.A.show({ title: x.intl.string(x.t.iufib1), body: x.intl.string(x.t.eAn6z2) }));
}
function $(e) {
    let { update: t, batched: n = !1 } = e;
    return _.wc.updateAsync("favorites", t, n ? _.Sb.FREQUENT_USER_ACTION : _.Sb.INFREQUENT_USER_ACTION, K);
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.default.fromTimestamp(Date.now());
    return ((e[n] = s.wL.create({ nickname: t, type: s.Ip.CATEGORY, position: F(e), parentId: O.O8 })), n);
}
function X(e, t) {
    let n = t.trim().toLowerCase();
    for (let t in e) {
        let i = e[t];
        if (i.type === s.Ip.CATEGORY && i.nickname.trim().toLowerCase() === n) return t;
    }
}
async function q(e, t, n) {
    let { silent: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = e.filter((e) => !g.A.isFavorite(e));
    if (0 === r.length) return;
    let a = !g.A.favoriteGuildEnabled;
    (await $({
        update: (e) => {
            let o = !1,
                d = ("parentId" in t ? t.parentId : null) ?? O.O8;
            for (let a of r) {
                let r = W(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                if (null != r) {
                    if ((i || Y(r), !o)) return !1;
                    break;
                }
                if ("categoryName" in t && !o) {
                    d = X(e.favoriteChannels, t.categoryName) ?? z(e.favoriteChannels, t.categoryName);
                    let n = W(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                    if (null != n) return (i || Y(n), !1);
                }
                let c = h.A.getChannel(a);
                ((e.favoriteChannels[a] = s.wL.create({
                    nickname: "",
                    type: s.Ip.REFERENCE_ORIGINAL,
                    channelType: null != c ? l.ZQ.create({ value: c.type }) : void 0,
                    position: F(e.favoriteChannels),
                    parentId: d,
                })),
                    V(e.favoriteChannels),
                    H(e.favoriteChannels, a),
                    (o = !0),
                    (0, M.LO)(n, c?.type ?? null, j(e.favoriteChannels)));
            }
            o && a && !i && ((e.guildVisible = l._t.create({ value: !0 })), (0, M.uS)("auto", !0));
        },
    }),
        !i && r.some((e) => g.A.isFavorite(e)) && (0, w.P0)({ text: x.intl.string(x.t["4tSWQg"]), icon: G.StarIcon }));
}
async function Z(e) {
    let { channelIds: t, parentId: n, source: i } = e;
    await q(t, { parentId: n ?? null }, i);
}
function Q(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = g.A.getFavorite(e);
    null != n &&
        (B(new Set([e])),
        $({
            update: (i) => {
                if ((delete i.favoriteChannels[e], n.type === s.Ip.CATEGORY))
                    for (let t in i.favoriteChannels)
                        i.favoriteChannels[t].parentId === e && (i.favoriteChannels[t].parentId = O.O8);
                (V(i.favoriteChannels),
                    t &&
                        (0, M.TX)(
                            n.type === s.Ip.CATEGORY ? null : (h.A.getChannel(e)?.type ?? null),
                            j(i.favoriteChannels),
                        ));
            },
        }));
}
function J(e, t) {
    g.A.isFavorite(e) &&
        $({
            update: (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
        });
}
async function ee(e, t) {
    let n = new Set(e);
    await $({
        update: (e) => {
            let i = D(t).filter((t) => n.has(t.id) && null != e.favoriteChannels[t.id]);
            if (0 === i.length) return !1;
            for (let t of (B(new Set(i.map((e) => e.id))), i))
                (delete e.favoriteChannels[t.id], (0, M.TX)(t.type, j(e.favoriteChannels)));
        },
    });
}
function et() {
    return g.A.pruneInactiveThreads;
}
let en = 0,
    ei = null;
async function er() {
    let e,
        t,
        n = A.default.getId();
    if (!et() || (n === ei && Date.now() - en < m.A.Millis.DAY)) return;
    let i = g.A.pruneInactiveThreadsScope,
        r =
            i === O.l0
                ? ((e = O.A.toLowerCase()),
                  (t = Object.values(g.A.getFavoriteChannels()).find(
                      (t) => t.type === s.Ip.CATEGORY && t.nickname?.trim().toLowerCase() === e,
                  )),
                  t?.id ?? null)
                : i;
    if (null == r) return;
    ((en = Date.now()), (ei = n));
    let a = { days: g.A.pruneInactiveThreadsDays, categoryId: r === O.sY ? null : r };
    if ((await y(a.categoryId), !et() || g.A.pruneInactiveThreadsScope !== i)) return;
    let l = I.Ay.getChannelId(),
        o = D(a)
            .map((e) => e.id)
            .filter((e) => e !== l);
    0 !== o.length && (await ee(o, a));
}
async function ea(e) {
    if (!(0, P.QN)(e)) return null;
    let t = e.trim(),
        n = T.default.fromTimestamp(Date.now());
    return (
        await $({
            update: (e) => {
                let i = W(e.favoriteChannels, s.Ip.CATEGORY);
                if (null != i) return (Y(i), !1);
                z(e.favoriteChannels, t, n);
            },
        }),
        null != g.A.getFavorite(n) ? n : null
    );
}
async function es(e) {
    let { channelIds: t, categoryName: n, source: i } = e;
    await q(t, { categoryName: n }, i);
}
function el(e) {
    Q(e);
}
async function eo(e) {
    if (!g.A.autoAddJoinedThreads || g.A.isFavorite(e)) return;
    let t = h.A.getChannel(e);
    null == t ||
        !t.isThread() ||
        ((t.isPrivate() || f.A.can(R.xB.VIEW_CHANNEL, t)) &&
            (await q([e], { categoryName: O.A }, "auto_thread_join", { silent: !0 })));
}
function ed(e) {
    $({
        update: (t) => {
            if (
                t.autoAddJoinedThreads === e ||
                (e &&
                    null ==
                        (function (e) {
                            let t = X(e, O.A);
                            if (null != t) return t;
                            let n = W(e, s.Ip.CATEGORY);
                            return null != n ? void Y(n) : z(e, O.A);
                        })(t.favoriteChannels))
            )
                return !1;
            t.autoAddJoinedThreads = e;
        },
    });
}
function ec(e, t, n) {
    return $({
        update: (i) => {
            ((i.pruneInactiveThreads = l._t.create({ value: e })),
                e && ((i.pruneInactiveThreadsDays = t), (i.pruneAllFavoritedThreads = n === O.sY)));
        },
    });
}
function eu(e, t) {
    $({
        update: (n) => {
            let i = null != t ? [t] : Object.keys(n.favoriteChannels),
                r = !1;
            for (let t of i) {
                let i = n.favoriteChannels[t];
                null != i && i.type === s.Ip.CATEGORY && i.collapsed !== e && ((i.collapsed = e), (r = !0));
            }
            if (!r) return !1;
        },
        batched: !0,
    });
}
function e_(e) {
    0 !== e.length &&
        $({
            update: (t) => {
                for (let n of e) {
                    let e = n.id;
                    (null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? O.O8), H(t.favoriteChannels, e)));
                }
                (0, M.P)();
            },
        });
}
function eE() {
    ($({
        update: (e) => {
            ((e.favoriteChannels = {}),
                (e.guildVisible = void 0),
                (e.muted = !1),
                (e.autoAddJoinedThreads = !1),
                (e.pruneInactiveThreads = void 0),
                (e.pruneInactiveThreadsDays = 0),
                (e.pruneAllFavoritedThreads = !1));
        },
    }),
        (0, d.Ab)(),
        (0, c._0)(),
        (0, _.xB)(a.M.FAVORITES_GUILD_SUGGESTIONS));
}
function eA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    $({
        update: (n) => {
            if (n.guildVisible?.value === e) return !1;
            ((n.guildVisible = l._t.create({ value: e })), (0, M.uS)(t, e));
        },
    });
}
function eh(e) {
    (eA(e, "settings_page"), !e && (0, P.ai)(p.A.getGuildId()) && (0, u.pX)(k.BVt.ME));
}
