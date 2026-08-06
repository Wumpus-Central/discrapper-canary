"use strict";
n.d(t, {
    JD: () => $,
    Jz: () => G,
    O8: () => W,
    S_: () => x,
    fv: () => B,
    hR: () => Y,
    i_: () => k,
    kG: () => Z,
    od: () => V,
    tV: () => q,
    uM: () => z,
    w6: () => F,
    zN: () => K,
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
    N = n(928424),
    C = n(349828),
    O = n(652215),
    R = n(818348),
    L = n(375708);
function D(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function y(e) {
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
            !i.isPrivate() && !A.A.can(R.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function v(e, t) {
    let n = e[t];
    if (null == n || n.parentId === C.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = C.O8);
}
function b(e, t) {
    if ((y(e), r().size(e) >= C.lj)) return { limit: C.lj, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, g.ad)();
    return n <= 0 || t === a.Ip.CATEGORY || r().filter(e, (e) => e.type !== a.Ip.CATEGORY).length < n
        ? null
        : { limit: n, canUpsell: i };
}
function M(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, N.A)(t)
        : l.A.show({ title: L.intl.string(L.t["+XYXtZ"]), body: L.intl.formatToPlainString(L.t.JaIyFi, { count: t }) });
}
function P() {
    l.A.show({
        title: L.intl.string(L.t.iufib1),
        body: L.intl.string(L.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function U(e) {
    return Object.keys(e).length;
}
function w(e, t) {
    return t === a.Ip.CATEGORY ? null : (E.A.getChannel(e)?.type ?? null);
}
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    x([e], t, n);
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !p.A.isFavorite(e));
    0 !== i.length &&
        u.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let l of i) {
                    let i = b(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                    if (null != i) {
                        if ((M(i), !r)) return !1;
                        break;
                    }
                    let o = E.A.getChannel(l);
                    (e.favoriteChannels[l] = a.wL.create({
                        nickname: "",
                        type: a.Ip.REFERENCE_ORIGINAL,
                        channelType: null != o ? s.ZQ.create({ value: o.type }) : void 0,
                        position: D(e.favoriteChannels),
                        parentId: t ?? C.O8,
                    })),
                        y(e.favoriteChannels),
                        v(e.favoriteChannels, l),
                        (r = !0),
                        (0, T.LO)(n, w(l, a.Ip.REFERENCE_ORIGINAL), U(e.favoriteChannels));
                }
            },
            u.Sb.FREQUENT_USER_ACTION,
            P,
        );
}
function k(e) {
    let t,
        { trackAnalytics: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = p.A.getFavorite(e);
    if (null == i) return;
    let r = n ? w(e, i.type) : null;
    u.wc.updateAsync(
        "favorites",
        (t) => {
            if ((delete t.favoriteChannels[e], i.type === a.Ip.CATEGORY))
                for (let n in t.favoriteChannels)
                    t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = C.O8);
            y(t.favoriteChannels), n && (0, T.TX)(r, U(t.favoriteChannels));
        },
        u.Sb.INFREQUENT_USER_ACTION,
        P,
    ),
        (t = I.A.getGuildId()),
        (0, S.ai)(t) && h.Ay.getChannelId() === e && (0, c.pX)(O.BVt.CHANNEL(t));
}
function F(e, t) {
    p.A.isFavorite(e) &&
        u.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            u.Sb.INFREQUENT_USER_ACTION,
            P,
        );
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal";
    if (!(0, S.QN)(e)) return;
    let n = e.trim(),
        i = f.default.fromTimestamp(Date.now());
    u.wc.updateAsync(
        "favorites",
        (e) => {
            let r = b(e.favoriteChannels, a.Ip.CATEGORY);
            if (null != r) return M(r), !1;
            (e.favoriteChannels[i] = a.wL.create({
                nickname: n,
                type: a.Ip.CATEGORY,
                position: D(e.favoriteChannels),
                parentId: C.O8,
            })),
                (0, T.LO)(t, w(i, a.Ip.CATEGORY), U(e.favoriteChannels));
        },
        u.Sb.FREQUENT_USER_ACTION,
        P,
    );
}
function B(e) {
    k(e);
}
function H(e, t) {
    return null != e && e.type === a.Ip.CATEGORY && e.collapsed !== t && ((e.collapsed = t), !0);
}
function j(e) {
    u.wc.updateAsync(
        "favorites",
        (t) => {
            if (!e(t)) return !1;
        },
        u.Sb.FREQUENT_USER_ACTION,
        P,
    );
}
function W(e, t) {
    let n = p.A.getFavorite(e);
    null != n && n.type === a.Ip.CATEGORY && j((n) => H(n.favoriteChannels[e], t));
}
function Y(e) {
    j((t) => {
        let n = !1;
        for (let i in t.favoriteChannels) H(t.favoriteChannels[i], e) && (n = !0);
        return n;
    });
}
function K(e) {
    0 !== e.length &&
        u.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? C.O8), v(t.favoriteChannels, e));
                }
                (0, T.P)();
            },
            u.Sb.FREQUENT_USER_ACTION,
            P,
        );
}
function $(e, t) {
    u.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? C.O8), v(n.favoriteChannels, e);
        },
        u.Sb.FREQUENT_USER_ACTION,
        P,
    );
}
function z() {
    for (let e of (u.wc.updateAsync(
        "favorites",
        (e) => {
            (e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        P,
    ),
    (0, o.Ab)(),
    (0, d._0)(),
    m.dt))
        (0, u.xB)(e);
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    u.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = s._t.create({ value: e })), (0, T.uS)(t, e);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        P,
    );
}
function Z(e) {
    q(e, "settings_page"), !e && (0, S.ai)(I.A.getGuildId()) && (0, c.pX)(O.BVt.ME);
}
