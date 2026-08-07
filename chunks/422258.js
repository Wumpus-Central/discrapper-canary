"use strict";
n.d(t, {
    JD: () => z,
    Jz: () => x,
    O8: () => Y,
    S_: () => k,
    fv: () => H,
    hR: () => K,
    i_: () => F,
    kG: () => X,
    od: () => B,
    tV: () => Z,
    uM: () => q,
    w6: () => V,
    zN: () => $,
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
    T = n(668267),
    m = n(676168),
    g = n(313281),
    S = n(5180),
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
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, g.ad)();
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
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    k([e], t, n);
}
function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !p.A.isFavorite(e));
    if (0 === i.length) return;
    let r = !(0, N.Yz)();
    u.wc.updateAsync(
        "favorites",
        (e) => {
            let l = !1;
            for (let r of i) {
                let i = M(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                if (null != i) {
                    if ((P(i), !l)) return !1;
                    break;
                }
                let o = E.A.getChannel(r);
                (e.favoriteChannels[r] = a.wL.create({
                    nickname: "",
                    type: a.Ip.REFERENCE_ORIGINAL,
                    channelType: null != o ? s.ZQ.create({ value: o.type }) : void 0,
                    position: y(e.favoriteChannels),
                    parentId: t ?? O.O8,
                })),
                    v(e.favoriteChannels),
                    b(e.favoriteChannels, r),
                    (l = !0),
                    (0, T.LO)(n, G(r, a.Ip.REFERENCE_ORIGINAL), w(e.favoriteChannels));
            }
            l && r && ((e.guildVisible = s._t.create({ value: !0 })), (0, T.uS)(n, !0));
        },
        u.Sb.FREQUENT_USER_ACTION,
        U,
    );
}
function F(e) {
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
            v(t.favoriteChannels), n && (0, T.TX)(r, w(t.favoriteChannels));
        },
        u.Sb.INFREQUENT_USER_ACTION,
        U,
    ),
        (t = I.A.getGuildId()),
        (0, S.ai)(t) && h.Ay.getChannelId() === e && (0, c.pX)(R.BVt.CHANNEL(t));
}
function V(e, t) {
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
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal";
    if (!(0, S.QN)(e)) return;
    let n = e.trim(),
        i = f.default.fromTimestamp(Date.now());
    u.wc.updateAsync(
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
                (0, T.LO)(t, G(i, a.Ip.CATEGORY), w(e.favoriteChannels));
        },
        u.Sb.FREQUENT_USER_ACTION,
        U,
    );
}
function H(e) {
    F(e);
}
function j(e, t) {
    return null != e && e.type === a.Ip.CATEGORY && e.collapsed !== t && ((e.collapsed = t), !0);
}
function W(e) {
    u.wc.updateAsync(
        "favorites",
        (t) => {
            if (!e(t)) return !1;
        },
        u.Sb.FREQUENT_USER_ACTION,
        U,
    );
}
function Y(e, t) {
    let n = p.A.getFavorite(e);
    null != n && n.type === a.Ip.CATEGORY && W((n) => j(n.favoriteChannels[e], t));
}
function K(e) {
    W((t) => {
        let n = !1;
        for (let i in t.favoriteChannels) j(t.favoriteChannels[i], e) && (n = !0);
        return n;
    });
}
function $(e) {
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
                (0, T.P)();
            },
            u.Sb.FREQUENT_USER_ACTION,
            U,
        );
}
function z(e, t) {
    u.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? O.O8), b(n.favoriteChannels, e);
        },
        u.Sb.FREQUENT_USER_ACTION,
        U,
    );
}
function q() {
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
    m.dt))
        (0, u.xB)(e);
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    u.wc.updateAsync(
        "favorites",
        (n) => {
            if (n.guildVisible?.value === e) return !1;
            (n.guildVisible = s._t.create({ value: e })), (0, T.uS)(t, e);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        U,
    );
}
function X(e) {
    Z(e, "settings_page"), !e && (0, S.ai)(I.A.getGuildId()) && (0, c.pX)(R.BVt.ME);
}
