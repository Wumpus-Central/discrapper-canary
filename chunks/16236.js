"use strict";
n.d(t, {
    fv: () => K,
    S_: () => B,
    w6: () => j,
    od: () => W,
    JD: () => Z,
    zN: () => z,
    tV: () => X,
    _2: () => $,
    kG: () => Q,
    uM: () => q,
    nR: () => Y,
    i_: () => H,
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
    R = n(691540),
    O = n(857250),
    L = n(97483),
    D = n(375708),
    y = n(349828),
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
    if (null == n || n.parentId === y.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = y.O8);
}
function w(e) {
    return r().filter(e, (e) => e.type !== a.Ip.CATEGORY).length;
}
function G(e, t) {
    if ((P(e), r().size(e) >= y.lj)) return { limit: y.lj, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, m.ad)();
    return n <= 0 || t === a.Ip.CATEGORY || w(e) < n ? null : { limit: n, canUpsell: i };
}
function x(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, C.A)(t)
        : l.A.show({ title: D.intl.string(D.t["+XYXtZ"]), body: D.intl.formatToPlainString(D.t.JaIyFi, { count: t }) });
}
function k(e) {
    e?.status === 403 &&
        (u.wc.loadIfNecessary(!0).catch(v.tEg),
        l.A.show({ title: D.intl.string(D.t.iufib1), body: D.intl.string(D.t.eAn6z2) }));
}
function F(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.default.fromTimestamp(Date.now());
    return (e[n] = a.wL.create({ nickname: t, type: a.Ip.CATEGORY, position: M(e), parentId: y.O8 })), n;
}
async function V(e, t, n) {
    let i = e.filter((e) => !p.A.isFavorite(e));
    if (0 === i.length) return;
    let r = !p.A.favoriteGuildEnabled;
    await u.wc.updateAsync(
        "favorites",
        (e) => {
            let l = !1,
                o = ("parentId" in t ? t.parentId : null) ?? y.O8;
            for (let r of i) {
                let i = G(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                if (null != i) {
                    if ((x(i), !l)) return !1;
                    break;
                }
                if ("categoryName" in t && !l) {
                    o =
                        (function (e, t) {
                            let n = t.trim().toLowerCase();
                            for (let t in e) {
                                let i = e[t];
                                if (i.type === a.Ip.CATEGORY && i.nickname.trim().toLowerCase() === n) return t;
                            }
                        })(e.favoriteChannels, t.categoryName) ?? F(e.favoriteChannels, t.categoryName);
                    let n = G(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                    if (null != n) return x(n), !1;
                }
                let d = E.A.getChannel(r);
                (e.favoriteChannels[r] = a.wL.create({
                    nickname: "",
                    type: a.Ip.REFERENCE_ORIGINAL,
                    channelType: null != d ? s.ZQ.create({ value: d.type }) : void 0,
                    position: M(e.favoriteChannels),
                    parentId: o,
                })),
                    P(e.favoriteChannels),
                    U(e.favoriteChannels, r),
                    (l = !0),
                    (0, S.LO)(n, d?.type ?? null, w(e.favoriteChannels));
            }
            l && r && ((e.guildVisible = s._t.create({ value: !0 })), (0, S.uS)("auto", !0));
        },
        u.Sb.FREQUENT_USER_ACTION,
        k,
    ),
        i.some((e) => p.A.isFavorite(e)) && (0, R.P0)((0, O.o)(D.intl.string(D.t["4tSWQg"]), L.Ck.FAVORITE));
}
async function B(e) {
    let { channelIds: t, parentId: n, source: i } = e;
    await V(t, { parentId: n ?? null }, i);
}
function H(e) {
    var t;
    let n,
        { trackAnalytics: i = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = p.A.getFavorite(e);
    null != r &&
        (u.wc.updateAsync(
            "favorites",
            (t) => {
                if ((delete t.favoriteChannels[e], r.type === a.Ip.CATEGORY))
                    for (let n in t.favoriteChannels)
                        t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = y.O8);
                P(t.favoriteChannels),
                    i &&
                        (0, S.TX)(
                            r.type === a.Ip.CATEGORY ? null : (E.A.getChannel(e)?.type ?? null),
                            w(t.favoriteChannels),
                        );
            },
            u.Sb.INFREQUENT_USER_ACTION,
            k,
        ),
        (t = e),
        (n = I.A.getGuildId()),
        (0, g.ai)(n) && h.Ay.getChannelId() === t && (0, c.pX)(v.BVt.CHANNEL(n)));
}
function j(e, t) {
    p.A.isFavorite(e) &&
        u.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            u.Sb.INFREQUENT_USER_ACTION,
            k,
        );
}
async function W(e) {
    if (!(0, g.QN)(e)) return null;
    let t = e.trim(),
        n = f.default.fromTimestamp(Date.now());
    return (
        await u.wc.updateAsync(
            "favorites",
            (e) => {
                let i = G(e.favoriteChannels, a.Ip.CATEGORY);
                if (null != i) return x(i), !1;
                F(e.favoriteChannels, t, n);
            },
            u.Sb.FREQUENT_USER_ACTION,
            k,
        ),
        null != p.A.getFavorite(n) ? n : null
    );
}
async function Y(e) {
    let { channelIds: t, categoryName: n, source: i } = e;
    await V(t, { categoryName: n }, i);
}
function K(e) {
    H(e);
}
function $(e, t) {
    u.wc.updateAsync(
        "favorites",
        (n) => {
            let i = null != t ? [t] : Object.keys(n.favoriteChannels),
                r = !1;
            for (let t of i) {
                let i = n.favoriteChannels[t];
                null != i && i.type === a.Ip.CATEGORY && i.collapsed !== e && ((i.collapsed = e), (r = !0));
            }
            if (!r) return !1;
        },
        u.Sb.FREQUENT_USER_ACTION,
        k,
    );
}
function z(e) {
    0 !== e.length &&
        u.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? y.O8), U(t.favoriteChannels, e));
                }
                (0, S.P)();
            },
            u.Sb.FREQUENT_USER_ACTION,
            k,
        );
}
function Z(e, t) {
    u.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? y.O8), U(n.favoriteChannels, e), (0, S.P)();
        },
        u.Sb.FREQUENT_USER_ACTION,
        k,
    );
}
function q() {
    for (let e of (u.wc.updateAsync(
        "favorites",
        (e) => {
            (e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        k,
    ),
    (0, o.Ab)(),
    (0, d._0)(),
    (0, N.mj)(),
    T.dt))
        (0, u.xB)(e);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    u.wc.updateAsync(
        "favorites",
        (n) => {
            if (n.guildVisible?.value === e) return !1;
            (n.guildVisible = s._t.create({ value: e })), (0, S.uS)(t, e);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        k,
    );
}
function Q(e) {
    X(e, "settings_page"), !e && (0, g.ai)(I.A.getGuildId()) && (0, c.pX)(v.BVt.ME);
}
