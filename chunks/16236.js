"use strict";
n.d(t, {
    fv: () => z,
    S_: () => j,
    w6: () => Y,
    od: () => K,
    Ub: () => q,
    JD: () => J,
    zN: () => Q,
    tV: () => et,
    _2: () => X,
    kG: () => en,
    Ye: () => Z,
    uM: () => ee,
    nR: () => $,
    i_: () => W,
});
var i = n(435558),
    r = n.n(i),
    a = n(873298),
    s = n(406935),
    l = n(157559),
    o = n(541689),
    d = n(558845),
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
    m = n(93055),
    g = n(5180),
    S = n(635233),
    N = n(771959),
    C = n(928424),
    O = n(691540),
    R = n(857250),
    L = n(97483),
    y = n(375708),
    D = n(349828),
    v = n(652215),
    b = n(818348);
function M(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function P(e) {
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
            !i.isPrivate() && !A.A.can(b.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function U(e, t) {
    let n = e[t];
    if (null == n || n.parentId === D.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = D.O8);
}
function w(e) {
    return r().filter(e, (e) => e.type !== a.Ip.CATEGORY).length;
}
function G(e, t) {
    if ((P(e), r().size(e) >= D.lj)) return { limit: D.lj, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, m.ad)();
    return n <= 0 || t === a.Ip.CATEGORY || w(e) < n ? null : { limit: n, canUpsell: i };
}
function x(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, C.A)(t)
        : l.A.show({ title: y.intl.string(y.t["+XYXtZ"]), body: y.intl.formatToPlainString(y.t.JaIyFi, { count: t }) });
}
function k(e) {
    e?.status === 403 &&
        (u.wc.loadIfNecessary(!0).catch(v.tEg),
        l.A.show({ title: y.intl.string(y.t.iufib1), body: y.intl.string(y.t.eAn6z2) }));
}
function F(e) {
    let { update: t, batched: n = !1 } = e;
    return u.wc.updateAsync("favorites", t, n ? u.Sb.FREQUENT_USER_ACTION : u.Sb.INFREQUENT_USER_ACTION, k);
}
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.default.fromTimestamp(Date.now());
    return (e[n] = a.wL.create({ nickname: t, type: a.Ip.CATEGORY, position: M(e), parentId: D.O8 })), n;
}
function B(e, t) {
    let n = t.trim().toLowerCase();
    for (let t in e) {
        let i = e[t];
        if (i.type === a.Ip.CATEGORY && i.nickname.trim().toLowerCase() === n) return t;
    }
}
async function H(e, t, n) {
    let { silent: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = e.filter((e) => !p.A.isFavorite(e));
    if (0 === r.length) return;
    let l = !p.A.favoriteGuildEnabled;
    await F({
        update: (e) => {
            let o = !1,
                d = ("parentId" in t ? t.parentId : null) ?? D.O8;
            for (let l of r) {
                let r = G(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                if (null != r) {
                    if ((i || x(r), !o)) return !1;
                    break;
                }
                if ("categoryName" in t && !o) {
                    d = B(e.favoriteChannels, t.categoryName) ?? V(e.favoriteChannels, t.categoryName);
                    let n = G(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                    if (null != n) return i || x(n), !1;
                }
                let c = E.A.getChannel(l);
                (e.favoriteChannels[l] = a.wL.create({
                    nickname: "",
                    type: a.Ip.REFERENCE_ORIGINAL,
                    channelType: null != c ? s.ZQ.create({ value: c.type }) : void 0,
                    position: M(e.favoriteChannels),
                    parentId: d,
                })),
                    P(e.favoriteChannels),
                    U(e.favoriteChannels, l),
                    (o = !0),
                    (0, S.LO)(n, c?.type ?? null, w(e.favoriteChannels));
            }
            o && l && !i && ((e.guildVisible = s._t.create({ value: !0 })), (0, S.uS)("auto", !0));
        },
    }),
        !i && r.some((e) => p.A.isFavorite(e)) && (0, O.P0)((0, R.o)(y.intl.string(y.t["4tSWQg"]), L.Ck.FAVORITE));
}
async function j(e) {
    let { channelIds: t, parentId: n, source: i } = e;
    await H(t, { parentId: n ?? null }, i);
}
function W(e) {
    var t;
    let n,
        { trackAnalytics: i = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = p.A.getFavorite(e);
    null != r &&
        (F({
            update: (t) => {
                if ((delete t.favoriteChannels[e], r.type === a.Ip.CATEGORY))
                    for (let n in t.favoriteChannels)
                        t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = D.O8);
                P(t.favoriteChannels),
                    i &&
                        (0, S.TX)(
                            r.type === a.Ip.CATEGORY ? null : (E.A.getChannel(e)?.type ?? null),
                            w(t.favoriteChannels),
                        );
            },
        }),
        (t = e),
        (n = I.A.getGuildId()),
        (0, g.ai)(n) && h.Ay.getChannelId() === t && (0, c.pX)(v.BVt.CHANNEL(n)));
}
function Y(e, t) {
    p.A.isFavorite(e) &&
        F({
            update: (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
        });
}
async function K(e) {
    if (!(0, g.QN)(e)) return null;
    let t = e.trim(),
        n = f.default.fromTimestamp(Date.now());
    return (
        await F({
            update: (e) => {
                let i = G(e.favoriteChannels, a.Ip.CATEGORY);
                if (null != i) return x(i), !1;
                V(e.favoriteChannels, t, n);
            },
        }),
        null != p.A.getFavorite(n) ? n : null
    );
}
async function $(e) {
    let { channelIds: t, categoryName: n, source: i } = e;
    await H(t, { categoryName: n }, i);
}
function z(e) {
    W(e);
}
async function Z(e) {
    if (!p.A.autoAddJoinedThreads || p.A.isFavorite(e)) return;
    let t = E.A.getChannel(e);
    null != t &&
        t.isThread() &&
        (t.isPrivate() || A.A.can(b.xB.VIEW_CHANNEL, t)) &&
        (0, m.ad)().hasAccess &&
        (await H([e], { categoryName: D.A }, "auto_thread_join", { silent: !0 }));
}
function q(e) {
    F({
        update: (t) => {
            if (
                t.autoAddJoinedThreads === e ||
                (e &&
                    null ==
                        (function (e) {
                            let t = B(e, D.A);
                            if (null != t) return t;
                            let n = G(e, a.Ip.CATEGORY);
                            return null != n ? void x(n) : V(e, D.A);
                        })(t.favoriteChannels))
            )
                return !1;
            t.autoAddJoinedThreads = e;
        },
    });
}
function X(e, t) {
    F({
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
function Q(e) {
    0 !== e.length &&
        F({
            update: (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? D.O8), U(t.favoriteChannels, e));
                }
                (0, S.P)();
            },
        });
}
function J(e, t) {
    F({
        update: (n) => {
            (n.favoriteChannels[e].parentId = t ?? D.O8), U(n.favoriteChannels, e), (0, S.P)();
        },
    });
}
function ee() {
    for (let e of (F({
        update: (e) => {
            (e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1), (e.autoAddJoinedThreads = !1);
        },
    }),
    (0, o.Ab)(),
    (0, d._0)(),
    (0, N.mj)(),
    T.dt))
        (0, u.xB)(e);
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    F({
        update: (n) => {
            if (n.guildVisible?.value === e) return !1;
            (n.guildVisible = s._t.create({ value: e })), (0, S.uS)(t, e);
        },
    });
}
function en(e) {
    et(e, "settings_page"), !e && (0, g.ai)(I.A.getGuildId()) && (0, c.pX)(v.BVt.ME);
}
