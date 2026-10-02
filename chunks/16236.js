n.d(t, {
    fv: () => X,
    S_: () => W,
    w6: () => K,
    od: () => $,
    Ub: () => q,
    zN: () => J,
    tV: () => et,
    _2: () => Q,
    kG: () => en,
    Ye: () => Z,
    uM: () => ee,
    nR: () => z,
    i_: () => Y,
});
var i = n(435558),
    r = n.n(i),
    a = n(873298),
    s = n(406935),
    l = n(157559),
    o = n(541689),
    d = n(355903),
    c = n(976860),
    u = n(594061),
    _ = n(95701),
    E = n(734057),
    A = n(576705),
    h = n(309010),
    I = n(967198),
    f = n(935208),
    p = n(181079),
    T = n(676168),
    m = n(796637),
    g = n(93055),
    S = n(5180),
    N = n(635233),
    C = n(771959),
    O = n(928424),
    R = n(376357),
    L = n(857250),
    y = n(97483),
    D = n(375708),
    v = n(349828),
    b = n(652215),
    M = n(818348);
function P(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function U(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === a.Ip.CATEGORY) continue;
        let i = E.A.getChannel(t);
        if (null == i) {
            let i = n.channelType?.value;
            if (null != i && _.Le.has(i)) continue;
            delete e[t];
            continue;
        }
        if (
            (null == n.channelType && (n.channelType = s.ZQ.create({ value: i.type })),
            !i.isPrivate() && !A.A.can(M.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function w(e, t) {
    let n = e[t];
    if (null == n || n.parentId === v.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = v.O8);
}
function G(e) {
    return r().filter(e, (e) => e.type !== a.Ip.CATEGORY).length;
}
function x(e, t) {
    if ((U(e), r().size(e) >= v.lj)) return { limit: v.lj, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, g.ad)();
    return n <= 0 || t === a.Ip.CATEGORY || G(e) < n ? null : { limit: n, canUpsell: i };
}
function k(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, O.A)(t)
        : l.A.show({ title: D.intl.string(D.t["+XYXtZ"]), body: D.intl.formatToPlainString(D.t.JaIyFi, { count: t }) });
}
function F(e) {
    e?.status === 403 &&
        (u.wc.loadIfNecessary(!0).catch(b.tEg),
        l.A.show({ title: D.intl.string(D.t.iufib1), body: D.intl.string(D.t.eAn6z2) }));
}
function B(e) {
    let { update: t, batched: n = !1 } = e;
    return u.wc.updateAsync("favorites", t, n ? u.Sb.FREQUENT_USER_ACTION : u.Sb.INFREQUENT_USER_ACTION, F);
}
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.default.fromTimestamp(Date.now());
    return ((e[n] = a.wL.create({ nickname: t, type: a.Ip.CATEGORY, position: P(e), parentId: v.O8 })), n);
}
function H(e, t) {
    let n = t.trim().toLowerCase();
    for (let t in e) {
        let i = e[t];
        if (i.type === a.Ip.CATEGORY && i.nickname.trim().toLowerCase() === n) return t;
    }
}
async function j(e, t, n) {
    let { silent: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = e.filter((e) => !p.A.isFavorite(e));
    if (0 === r.length) return;
    let l = !p.A.favoriteGuildEnabled;
    (await B({
        update: (e) => {
            let o = !1,
                d = ("parentId" in t ? t.parentId : null) ?? v.O8;
            for (let l of r) {
                let r = x(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                if (null != r) {
                    if ((i || k(r), !o)) return !1;
                    break;
                }
                if ("categoryName" in t && !o) {
                    d = H(e.favoriteChannels, t.categoryName) ?? V(e.favoriteChannels, t.categoryName);
                    let n = x(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                    if (null != n) return (i || k(n), !1);
                }
                let c = E.A.getChannel(l);
                ((e.favoriteChannels[l] = a.wL.create({
                    nickname: "",
                    type: a.Ip.REFERENCE_ORIGINAL,
                    channelType: null != c ? s.ZQ.create({ value: c.type }) : void 0,
                    position: P(e.favoriteChannels),
                    parentId: d,
                })),
                    U(e.favoriteChannels),
                    w(e.favoriteChannels, l),
                    (o = !0),
                    (0, N.LO)(n, c?.type ?? null, G(e.favoriteChannels)));
            }
            o && l && !i && ((e.guildVisible = s._t.create({ value: !0 })), (0, N.uS)("auto", !0));
        },
    }),
        !i && r.some((e) => p.A.isFavorite(e)) && (0, R.P)((0, L.o)(D.intl.string(D.t["4tSWQg"]), y.Ck.FAVORITE)));
}
async function W(e) {
    let { channelIds: t, parentId: n, source: i } = e;
    await j(t, { parentId: n ?? null }, i);
}
function Y(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = p.A.getFavorite(e);
    null != n &&
        ((function (e) {
            let t = I.A.getGuildId();
            if ((0, S.ai)(t) && h.Ay.getChannelId() === e) {
                let n, i, a;
                (0, c.pX)(
                    b.BVt.CHANNEL(
                        t,
                        0 ===
                            (a = (i = (n = (0, m.g)())
                                .getSections()
                                .flatMap((e, t) =>
                                    r()
                                        .range(e)
                                        .map((e) => n.getChannelFromSectionRow(t, e)?.channel.id),
                                )
                                .filter((e) => null != e)).indexOf(e))
                            ? i[1]
                            : i[a - 1],
                    ),
                );
            }
        })(e),
        B({
            update: (i) => {
                if ((delete i.favoriteChannels[e], n.type === a.Ip.CATEGORY))
                    for (let t in i.favoriteChannels)
                        i.favoriteChannels[t].parentId === e && (i.favoriteChannels[t].parentId = v.O8);
                (U(i.favoriteChannels),
                    t &&
                        (0, N.TX)(
                            n.type === a.Ip.CATEGORY ? null : (E.A.getChannel(e)?.type ?? null),
                            G(i.favoriteChannels),
                        ));
            },
        }));
}
function K(e, t) {
    p.A.isFavorite(e) &&
        B({
            update: (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
        });
}
async function $(e) {
    if (!(0, S.QN)(e)) return null;
    let t = e.trim(),
        n = f.default.fromTimestamp(Date.now());
    return (
        await B({
            update: (e) => {
                let i = x(e.favoriteChannels, a.Ip.CATEGORY);
                if (null != i) return (k(i), !1);
                V(e.favoriteChannels, t, n);
            },
        }),
        null != p.A.getFavorite(n) ? n : null
    );
}
async function z(e) {
    let { channelIds: t, categoryName: n, source: i } = e;
    await j(t, { categoryName: n }, i);
}
function X(e) {
    Y(e);
}
async function Z(e) {
    if (!p.A.autoAddJoinedThreads || p.A.isFavorite(e)) return;
    let t = E.A.getChannel(e);
    null != t &&
        t.isThread() &&
        (t.isPrivate() || A.A.can(M.xB.VIEW_CHANNEL, t)) &&
        (0, g.ad)().hasAccess &&
        (await j([e], { categoryName: v.A }, "auto_thread_join", { silent: !0 }));
}
function q(e) {
    B({
        update: (t) => {
            if (
                t.autoAddJoinedThreads === e ||
                (e &&
                    null ==
                        (function (e) {
                            let t = H(e, v.A);
                            if (null != t) return t;
                            let n = x(e, a.Ip.CATEGORY);
                            return null != n ? void k(n) : V(e, v.A);
                        })(t.favoriteChannels))
            )
                return !1;
            t.autoAddJoinedThreads = e;
        },
    });
}
function Q(e, t) {
    B({
        update: (n) => {
            let i = null != t ? [t] : Object.keys(n.favoriteChannels),
                r = !1;
            for (let t of i) {
                let i = n.favoriteChannels[t];
                null != i && i.type === a.Ip.CATEGORY && i.collapsed !== e && ((i.collapsed = e), (r = !0));
            }
            if (!r) return !1;
        },
        batched: !0,
    });
}
function J(e) {
    0 !== e.length &&
        B({
            update: (t) => {
                for (let n of e) {
                    let e = n.id;
                    (null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? v.O8), w(t.favoriteChannels, e)));
                }
                (0, N.P)();
            },
        });
}
function ee() {
    for (let e of (B({
        update: (e) => {
            ((e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1), (e.autoAddJoinedThreads = !1));
        },
    }),
    (0, o.Ab)(),
    (0, d._0)(),
    (0, C.mj)(),
    T.dt))
        (0, u.xB)(e);
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    B({
        update: (n) => {
            if (n.guildVisible?.value === e) return !1;
            ((n.guildVisible = s._t.create({ value: e })), (0, N.uS)(t, e));
        },
    });
}
function en(e) {
    (et(e, "settings_page"), !e && (0, S.ai)(I.A.getGuildId()) && (0, c.pX)(b.BVt.ME));
}
