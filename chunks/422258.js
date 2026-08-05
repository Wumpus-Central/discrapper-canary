"use strict";
n.d(t, {
    JD: () => K,
    Jz: () => w,
    O8: () => j,
    S_: () => G,
    fv: () => V,
    hR: () => W,
    i_: () => x,
    kG: () => q,
    od: () => F,
    tV: () => z,
    uM: () => $,
    w6: () => k,
    zN: () => Y,
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
    g = n(298358),
    S = n(5180),
    N = n(349828),
    C = n(652215),
    O = n(818348),
    R = n(375708);
function L(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function D(e) {
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
            !i.isPrivate() && !A.A.can(O.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function y(e, t) {
    let n = e[t];
    if (null == n || n.parentId === N.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = N.O8);
}
function v(e, t) {
    if ((D(e), r().size(e) >= N.lj)) return N.lj;
    let { favoriteLimit: n } = (0, g.ad)();
    return n <= 0 || t === a.Ip.CATEGORY ? null : r().filter(e, (e) => e.type !== a.Ip.CATEGORY).length >= n ? n : null;
}
function b(e) {
    l.A.show({ title: R.intl.string(R.t["+XYXtZ"]), body: R.intl.formatToPlainString(R.t.JaIyFi, { count: e }) });
}
function M() {
    l.A.show({
        title: R.intl.string(R.t.iufib1),
        body: R.intl.string(R.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function P(e) {
    return Object.keys(e).length;
}
function U(e, t) {
    return t === a.Ip.CATEGORY ? null : (E.A.getChannel(e)?.type ?? null);
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    G([e], t, n);
}
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !p.A.isFavorite(e));
    0 !== i.length &&
        u.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let l of i) {
                    let i = v(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                    if (null != i) {
                        if ((b(i), !r)) return !1;
                        break;
                    }
                    let o = E.A.getChannel(l);
                    (e.favoriteChannels[l] = a.wL.create({
                        nickname: "",
                        type: a.Ip.REFERENCE_ORIGINAL,
                        channelType: null != o ? s.ZQ.create({ value: o.type }) : void 0,
                        position: L(e.favoriteChannels),
                        parentId: t ?? N.O8,
                    })),
                        D(e.favoriteChannels),
                        y(e.favoriteChannels, l),
                        (r = !0),
                        (0, T.LO)(n, U(l, a.Ip.REFERENCE_ORIGINAL), P(e.favoriteChannels));
                }
            },
            u.Sb.FREQUENT_USER_ACTION,
            M,
        );
}
function x(e) {
    let t,
        { trackAnalytics: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = p.A.getFavorite(e);
    if (null == i) return;
    let r = n ? U(e, i.type) : null;
    u.wc.updateAsync(
        "favorites",
        (t) => {
            if ((delete t.favoriteChannels[e], i.type === a.Ip.CATEGORY))
                for (let n in t.favoriteChannels)
                    t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = N.O8);
            D(t.favoriteChannels), n && (0, T.TX)(r, P(t.favoriteChannels));
        },
        u.Sb.INFREQUENT_USER_ACTION,
        M,
    ),
        (t = I.A.getGuildId()),
        (0, S.ai)(t) && h.Ay.getChannelId() === e && (0, c.pX)(C.BVt.CHANNEL(t));
}
function k(e, t) {
    p.A.isFavorite(e) &&
        u.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            u.Sb.INFREQUENT_USER_ACTION,
            M,
        );
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal";
    if (!(0, S.QN)(e)) return;
    let n = e.trim(),
        i = f.default.fromTimestamp(Date.now());
    u.wc.updateAsync(
        "favorites",
        (e) => {
            let r = v(e.favoriteChannels, a.Ip.CATEGORY);
            if (null != r) return b(r), !1;
            (e.favoriteChannels[i] = a.wL.create({
                nickname: n,
                type: a.Ip.CATEGORY,
                position: L(e.favoriteChannels),
                parentId: N.O8,
            })),
                (0, T.LO)(t, U(i, a.Ip.CATEGORY), P(e.favoriteChannels));
        },
        u.Sb.FREQUENT_USER_ACTION,
        M,
    );
}
function V(e) {
    x(e);
}
function B(e, t) {
    return null != e && e.type === a.Ip.CATEGORY && e.collapsed !== t && ((e.collapsed = t), !0);
}
function H(e) {
    u.wc.updateAsync(
        "favorites",
        (t) => {
            if (!e(t)) return !1;
        },
        u.Sb.FREQUENT_USER_ACTION,
        M,
    );
}
function j(e, t) {
    let n = p.A.getFavorite(e);
    null != n && n.type === a.Ip.CATEGORY && H((n) => B(n.favoriteChannels[e], t));
}
function W(e) {
    H((t) => {
        let n = !1;
        for (let i in t.favoriteChannels) B(t.favoriteChannels[i], e) && (n = !0);
        return n;
    });
}
function Y(e) {
    0 !== e.length &&
        u.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? N.O8), y(t.favoriteChannels, e));
                }
                (0, T.P)();
            },
            u.Sb.FREQUENT_USER_ACTION,
            M,
        );
}
function K(e, t) {
    u.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? N.O8), y(n.favoriteChannels, e);
        },
        u.Sb.FREQUENT_USER_ACTION,
        M,
    );
}
function $() {
    for (let e of (u.wc.updateAsync(
        "favorites",
        (e) => {
            (e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        M,
    ),
    (0, o.Ab)(),
    (0, d._0)(),
    m.dt))
        (0, u.xB)(e);
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    u.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = s._t.create({ value: e })), (0, T.uS)(t, e);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        M,
    );
}
function q(e) {
    z(e, "settings_page"), !e && (0, S.ai)(I.A.getGuildId()) && (0, c.pX)(C.BVt.ME);
}
