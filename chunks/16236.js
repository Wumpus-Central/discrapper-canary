"use strict";
n.d(t, {
    fv: () => K,
    S_: () => B,
    w6: () => j,
    od: () => W,
    JD: () => q,
    zN: () => z,
    tV: () => X,
    _2: () => $,
    kG: () => Q,
    uM: () => Z,
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
    N = n(551289),
    C = n(928424),
    O = n(691540),
    R = n(857250),
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
function w(e, t) {
    if ((P(e), r().size(e) >= y.lj)) return { limit: y.lj, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, m.ad)();
    return n <= 0 || t === a.Ip.CATEGORY || r().filter(e, (e) => e.type !== a.Ip.CATEGORY).length < n
        ? null
        : { limit: n, canUpsell: i };
}
function G(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, C.A)(t)
        : l.A.show({ title: D.intl.string(D.t["+XYXtZ"]), body: D.intl.formatToPlainString(D.t.JaIyFi, { count: t }) });
}
function x() {
    l.A.show({
        title: D.intl.string(D.t.iufib1),
        body: D.intl.string(D.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function k(e) {
    return Object.keys(e).length;
}
function F(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.default.fromTimestamp(Date.now());
    return (
        (e[i] = a.wL.create({ nickname: t, type: a.Ip.CATEGORY, position: M(e), parentId: y.O8 })),
        (0, S.LO)(n, null, k(e)),
        i
    );
}
async function V(e, t, n) {
    let i = e.filter((e) => !p.A.isFavorite(e));
    if (0 === i.length) return;
    let r = !(0, N.Yz)();
    await u.wc.updateAsync(
        "favorites",
        (e) => {
            let l = !1,
                o = ("parentId" in t ? t.parentId : null) ?? y.O8;
            for (let r of i) {
                let i = w(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                if (null != i) {
                    if ((G(i), !l)) return !1;
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
                        })(e.favoriteChannels, t.categoryName) ?? F(e.favoriteChannels, t.categoryName, n);
                    let i = w(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                    if (null != i) return G(i), !1;
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
                    (0, S.LO)(n, d?.type ?? null, k(e.favoriteChannels));
            }
            l && r && ((e.guildVisible = s._t.create({ value: !0 })), (0, S.uS)("auto", !0));
        },
        u.Sb.FREQUENT_USER_ACTION,
        x,
    ),
        i.some((e) => p.A.isFavorite(e)) && (0, O.P0)((0, R.o)(D.intl.string(D.t["4tSWQg"]), L.Ck.FAVORITE));
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
                            k(t.favoriteChannels),
                        );
            },
            u.Sb.INFREQUENT_USER_ACTION,
            x,
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
            x,
        );
}
async function W(e, t) {
    if (!(0, g.QN)(e)) return null;
    let n = e.trim(),
        i = f.default.fromTimestamp(Date.now());
    return (
        await u.wc.updateAsync(
            "favorites",
            (e) => {
                let r = w(e.favoriteChannels, a.Ip.CATEGORY);
                if (null != r) return G(r), !1;
                F(e.favoriteChannels, n, t, i);
            },
            u.Sb.FREQUENT_USER_ACTION,
            x,
        ),
        null != p.A.getFavorite(i) ? i : null
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
        x,
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
            x,
        );
}
function q(e, t) {
    u.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? y.O8), U(n.favoriteChannels, e), (0, S.P)();
        },
        u.Sb.FREQUENT_USER_ACTION,
        x,
    );
}
function Z() {
    for (let e of (u.wc.updateAsync(
        "favorites",
        (e) => {
            (e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        x,
    ),
    (0, o.Ab)(),
    (0, d._0)(),
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
        x,
    );
}
function Q(e) {
    X(e, "settings_page"), !e && (0, g.ai)(I.A.getGuildId()) && (0, c.pX)(v.BVt.ME);
}
