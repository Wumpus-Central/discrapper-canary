"use strict";
n.d(t, {
    JD: () => Y,
    S_: () => x,
    _2: () => j,
    fv: () => H,
    i_: () => k,
    kG: () => z,
    nR: () => B,
    od: () => V,
    tV: () => $,
    uM: () => K,
    w6: () => F,
    zN: () => W,
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
    O = n(349828),
    R = n(652215),
    L = n(818348),
    D = n(375708);
function y(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function v(e) {
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
            !i.isPrivate() && !A.A.can(L.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function b(e, t) {
    let n = e[t];
    if (null == n || n.parentId === O.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = O.O8);
}
function M(e, t) {
    if ((v(e), r().size(e) >= O.lj)) return { limit: O.lj, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, m.ad)();
    return n <= 0 || t === a.Ip.CATEGORY || r().filter(e, (e) => e.type !== a.Ip.CATEGORY).length < n
        ? null
        : { limit: n, canUpsell: i };
}
function P(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, C.A)(t)
        : l.A.show({ title: D.intl.string(D.t["+XYXtZ"]), body: D.intl.formatToPlainString(D.t.JaIyFi, { count: t }) });
}
function U() {
    l.A.show({
        title: D.intl.string(D.t.iufib1),
        body: D.intl.string(D.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function w(e) {
    return Object.keys(e).length;
}
function G(e, t) {
    return t === a.Ip.CATEGORY ? null : (E.A.getChannel(e)?.type ?? null);
}
function x(e) {
    let { channelIds: t, parentId: n, source: i } = e,
        r = t.filter((e) => !p.A.isFavorite(e));
    if (0 === r.length) return;
    let l = !(0, N.Yz)();
    u.wc.updateAsync(
        "favorites",
        (e) => {
            let t = !1;
            for (let l of r) {
                let r = M(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                if (null != r) {
                    if ((P(r), !t)) return !1;
                    break;
                }
                let o = E.A.getChannel(l);
                (e.favoriteChannels[l] = a.wL.create({
                    nickname: "",
                    type: a.Ip.REFERENCE_ORIGINAL,
                    channelType: null != o ? s.ZQ.create({ value: o.type }) : void 0,
                    position: y(e.favoriteChannels),
                    parentId: n ?? O.O8,
                })),
                    v(e.favoriteChannels),
                    b(e.favoriteChannels, l),
                    (t = !0),
                    (0, S.LO)(i, G(l, a.Ip.REFERENCE_ORIGINAL), w(e.favoriteChannels));
            }
            t && l && ((e.guildVisible = s._t.create({ value: !0 })), (0, S.uS)("auto", !0));
        },
        u.Sb.FREQUENT_USER_ACTION,
        U,
    );
}
function k(e) {
    let t,
        { trackAnalytics: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = p.A.getFavorite(e);
    if (null == i) return;
    let r = n ? G(e, i.type) : null;
    u.wc.updateAsync(
        "favorites",
        (t) => {
            if ((delete t.favoriteChannels[e], i.type === a.Ip.CATEGORY))
                for (let n in t.favoriteChannels)
                    t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = O.O8);
            v(t.favoriteChannels), n && (0, S.TX)(r, w(t.favoriteChannels));
        },
        u.Sb.INFREQUENT_USER_ACTION,
        U,
    ),
        (t = I.A.getGuildId()),
        (0, g.ai)(t) && h.Ay.getChannelId() === e && (0, c.pX)(R.BVt.CHANNEL(t));
}
function F(e, t) {
    p.A.isFavorite(e) &&
        u.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            u.Sb.INFREQUENT_USER_ACTION,
            U,
        );
}
async function V(e, t) {
    if (!(0, g.QN)(e)) return null;
    let n = e.trim(),
        i = f.default.fromTimestamp(Date.now());
    return (
        await u.wc.updateAsync(
            "favorites",
            (e) => {
                let r = M(e.favoriteChannels, a.Ip.CATEGORY);
                if (null != r) return P(r), !1;
                (e.favoriteChannels[i] = a.wL.create({
                    nickname: n,
                    type: a.Ip.CATEGORY,
                    position: y(e.favoriteChannels),
                    parentId: O.O8,
                })),
                    (0, S.LO)(t, G(i, a.Ip.CATEGORY), w(e.favoriteChannels));
            },
            u.Sb.FREQUENT_USER_ACTION,
            U,
        ),
        null != p.A.getFavorite(i) ? i : null
    );
}
async function B(e) {
    let { channelIds: t, categoryName: n, source: i } = e,
        r = t.filter((e) => !p.A.isFavorite(e));
    if (0 === r.length) return;
    let a = p.A.getCategoryIdByName(n) ?? (await V(n, i));
    null != a && x({ channelIds: r, parentId: a, source: i });
}
function H(e) {
    k(e);
}
function j(e, t) {
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
        U,
    );
}
function W(e) {
    0 !== e.length &&
        u.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? O.O8), b(t.favoriteChannels, e));
                }
                (0, S.P)();
            },
            u.Sb.FREQUENT_USER_ACTION,
            U,
        );
}
function Y(e, t) {
    u.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? O.O8), b(n.favoriteChannels, e), (0, S.P)();
        },
        u.Sb.FREQUENT_USER_ACTION,
        U,
    );
}
function K() {
    for (let e of (u.wc.updateAsync(
        "favorites",
        (e) => {
            (e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        U,
    ),
    (0, o.Ab)(),
    (0, d._0)(),
    T.dt))
        (0, u.xB)(e);
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    u.wc.updateAsync(
        "favorites",
        (n) => {
            if (n.guildVisible?.value === e) return !1;
            (n.guildVisible = s._t.create({ value: e })), (0, S.uS)(t, e);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        U,
    );
}
function z(e) {
    $(e, "settings_page"), !e && (0, g.ai)(I.A.getGuildId()) && (0, c.pX)(R.BVt.ME);
}
