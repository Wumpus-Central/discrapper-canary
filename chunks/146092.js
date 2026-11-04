n.d(t, {
    od: () => ei,
    S_: () => q,
    nR: () => er,
    Ye: () => es,
    Nz: () => en,
    fv: () => ea,
    i_: () => Z,
    uM: () => eu,
    _2: () => ed,
    w6: () => Q,
    Ub: () => el,
    tV: () => e_,
    kG: () => eE,
    u$: () => eo,
    zN: () => ec,
});
var i = n(435558),
    r = n.n(i),
    a = n(554146),
    s = n(873298),
    l = n(406935),
    o = n(157559),
    d = n(541689),
    c = n(517057),
    u = n(976860),
    _ = n(594061),
    E = n(95701),
    A = n(46653),
    h = n(734057),
    f = n(576705),
    I = n(309010),
    p = n(967198),
    m = n(927813),
    T = n(811091),
    g = n(181079);
n(321073);
var S = n(353202),
    N = n(826767),
    C = n(218461),
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
function y(e) {
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
        if (0 === t) continue;
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
var D = n(796637),
    b = n(93055),
    v = n(5180),
    P = n(635233),
    M = n(928424),
    U = n(858899),
    w = n(27232),
    G = n(792996),
    x = n(652215);
function k(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function F(e) {
    let t = p.A.getGuildId(),
        n = I.Ay.getChannelId();
    (0, v.ai)(t) &&
        null != n &&
        e.has(n) &&
        (0, u.pX)(
            x.BVt.CHANNEL(
                t,
                (function (e, t) {
                    let n = (0, D.g)(),
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
function B(e) {
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
function V(e, t) {
    let n = e[t];
    if (null == n || "0" === n.parentId) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== s.Ip.CATEGORY) && (n.parentId = "0");
}
function H(e) {
    return r().filter(e, (e) => e.type !== s.Ip.CATEGORY).length;
}
function j(e, t) {
    if ((B(e), r().size(e) >= 200)) return { limit: 200, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, b.o9)();
    return t === s.Ip.CATEGORY || H(e) < n ? null : { limit: n, canUpsell: i };
}
function W(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, M.A)(t)
        : o.A.show({ title: G.intl.string(G.t["+XYXtZ"]), body: G.intl.formatToPlainString(G.t.JaIyFi, { count: t }) });
}
function Y(e) {
    e?.status === 403 &&
        (_.wc.loadIfNecessary(!0).catch(x.tEg),
        o.A.show({ title: G.intl.string(G.t.iufib1), body: G.intl.string(G.t.eAn6z2) }));
}
function K(e) {
    let { update: t, batched: n = !1 } = e;
    return _.wc.updateAsync("favorites", t, n ? _.Sb.FREQUENT_USER_ACTION : _.Sb.INFREQUENT_USER_ACTION, Y);
}
function $(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.default.fromTimestamp(Date.now());
    return ((e[n] = s.wL.create({ nickname: t, type: s.Ip.CATEGORY, position: k(e), parentId: "0" })), n);
}
function z(e, t) {
    let n = t.trim().toLowerCase();
    for (let t in e) {
        let i = e[t];
        if (i.type === s.Ip.CATEGORY && i.nickname.trim().toLowerCase() === n) return t;
    }
}
async function X(e, t, n) {
    let { silent: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = e.filter((e) => !g.A.isFavorite(e));
    if (0 === r.length) return;
    let a = !g.A.favoriteGuildEnabled;
    (await K({
        update: (e) => {
            let o = !1,
                d = ("parentId" in t ? t.parentId : null) ?? "0";
            for (let a of r) {
                let r = j(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                if (null != r) {
                    if ((i || W(r), !o)) return !1;
                    break;
                }
                if ("categoryName" in t && !o) {
                    d = z(e.favoriteChannels, t.categoryName) ?? $(e.favoriteChannels, t.categoryName);
                    let n = j(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                    if (null != n) return (i || W(n), !1);
                }
                let c = h.A.getChannel(a);
                ((e.favoriteChannels[a] = s.wL.create({
                    nickname: "",
                    type: s.Ip.REFERENCE_ORIGINAL,
                    channelType: null != c ? l.ZQ.create({ value: c.type }) : void 0,
                    position: k(e.favoriteChannels),
                    parentId: d,
                })),
                    B(e.favoriteChannels),
                    V(e.favoriteChannels, a),
                    (o = !0),
                    (0, P.LO)(n, c?.type ?? null, H(e.favoriteChannels)));
            }
            o && a && !i && ((e.guildVisible = l._t.create({ value: !0 })), (0, P.uS)("auto", !0));
        },
    }),
        !i && r.some((e) => g.A.isFavorite(e)) && (0, U.P0)({ text: G.intl.string(G.t["4tSWQg"]), icon: w.StarIcon }));
}
async function q(e) {
    let { channelIds: t, parentId: n, source: i } = e;
    await X(t, { parentId: n ?? null }, i);
}
function Z(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = g.A.getFavorite(e);
    null != n &&
        (F(new Set([e])),
        K({
            update: (i) => {
                if ((delete i.favoriteChannels[e], n.type === s.Ip.CATEGORY))
                    for (let t in i.favoriteChannels)
                        i.favoriteChannels[t].parentId === e && (i.favoriteChannels[t].parentId = "0");
                (B(i.favoriteChannels),
                    t &&
                        (0, P.TX)(
                            n.type === s.Ip.CATEGORY ? null : (h.A.getChannel(e)?.type ?? null),
                            H(i.favoriteChannels),
                        ));
            },
        }));
}
function Q(e, t) {
    g.A.isFavorite(e) &&
        K({
            update: (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
        });
}
function J() {
    return g.A.pruneInactiveThreads;
}
let ee = 0,
    et = null;
async function en() {
    let e,
        t,
        n = A.default.getId();
    if (!J() || (n === et && Date.now() - ee < m.A.Millis.DAY)) return;
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
    ((ee = Date.now()), (et = n));
    let a = { days: g.A.pruneInactiveThreadsDays, categoryId: "all" === r ? null : r };
    if (
        (await (async function (e) {
            await S.A.loadThreadsBulk(L(e));
        })(a.categoryId),
        !J() || g.A.pruneInactiveThreadsScope !== i)
    )
        return;
    let l = I.Ay.getChannelId(),
        o = y(a)
            .map((e) => e.id)
            .filter((e) => e !== l);
    0 !== o.length &&
        (await (async function (e, t) {
            let n = new Set(e);
            await K({
                update: (e) => {
                    let i = y(t).filter((t) => n.has(t.id) && null != e.favoriteChannels[t.id]);
                    if (0 === i.length) return !1;
                    for (let t of (F(new Set(i.map((e) => e.id))), i))
                        (delete e.favoriteChannels[t.id], (0, P.TX)(t.type, H(e.favoriteChannels)));
                },
            });
        })(o, a));
}
async function ei(e) {
    if (!(0, v.QN)(e)) return null;
    let t = e.trim(),
        n = T.default.fromTimestamp(Date.now());
    return (
        await K({
            update: (e) => {
                let i = j(e.favoriteChannels, s.Ip.CATEGORY);
                if (null != i) return (W(i), !1);
                $(e.favoriteChannels, t, n);
            },
        }),
        null != g.A.getFavorite(n) ? n : null
    );
}
async function er(e) {
    let { channelIds: t, categoryName: n, source: i } = e;
    await X(t, { categoryName: n }, i);
}
function ea(e) {
    Z(e);
}
async function es(e) {
    if (!g.A.autoAddJoinedThreads || g.A.isFavorite(e)) return;
    let t = h.A.getChannel(e);
    null == t ||
        !t.isThread() ||
        ((t.isPrivate() || f.A.can(R.xB.VIEW_CHANNEL, t)) &&
            (await X([e], { categoryName: O.A }, "auto_thread_join", { silent: !0 })));
}
function el(e) {
    K({
        update: (t) => {
            if (
                t.autoAddJoinedThreads === e ||
                (e &&
                    null ==
                        (function (e) {
                            let t = z(e, O.A);
                            if (null != t) return t;
                            let n = j(e, s.Ip.CATEGORY);
                            return null != n ? void W(n) : $(e, O.A);
                        })(t.favoriteChannels))
            )
                return !1;
            t.autoAddJoinedThreads = e;
        },
    });
}
function eo(e, t, n) {
    return K({
        update: (i) => {
            ((i.pruneInactiveThreads = l._t.create({ value: e })),
                e && ((i.pruneInactiveThreadsDays = t), (i.pruneAllFavoritedThreads = "all" === n)));
        },
    });
}
function ed(e, t) {
    K({
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
function ec(e) {
    0 !== e.length &&
        K({
            update: (t) => {
                for (let n of e) {
                    let e = n.id;
                    (null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? "0"), V(t.favoriteChannels, e)));
                }
                (0, P.P)();
            },
        });
}
function eu() {
    (K({
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
function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    K({
        update: (n) => {
            if (n.guildVisible?.value === e) return !1;
            ((n.guildVisible = l._t.create({ value: e })), (0, P.uS)(t, e));
        },
    });
}
function eE(e) {
    (e_(e, "settings_page"), !e && (0, v.ai)(p.A.getGuildId()) && (0, u.pX)(x.BVt.ME));
}
