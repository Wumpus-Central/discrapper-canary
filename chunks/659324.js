"use strict";
n.d(t, {
    fv: () => w,
    S_: () => b,
    Jz: () => v,
    od: () => U,
    w6: () => P,
    JD: () => B,
    zN: () => V,
    O8: () => k,
    tV: () => j,
    hR: () => F,
    uM: () => H,
    i_: () => M,
});
var i = n(435558),
    r = n.n(i),
    a = n(873298),
    s = n(406935),
    l = n(157559),
    o = n(594061),
    d = n(95701),
    c = n(734057),
    u = n(576705),
    _ = n(935208),
    E = n(181079),
    A = n(668267),
    h = n(554146);
let I = [
    h.M.FAVORITES_SERVER_ONBOARDING_INTRO,
    h.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
    h.M.FAVORITES_GUILD_NEW_BADGE,
];
var f = n(281980),
    p = n(5180),
    T = n(349828),
    m = n(818348),
    g = n(375708);
function S(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function N(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === a.Ip.CATEGORY) continue;
        let i = c.A.getChannel(t);
        if (null == i) {
            let i = n.channelType?.value;
            if (null != i && d.Le.has(i)) continue;
            delete e[t];
            continue;
        }
        if (
            (null == n.channelType && (n.channelType = s.ZQ.create({ value: i.type })),
            !i.isPrivate() && !u.A.can(m.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function C(e, t) {
    let n = e[t];
    if (null == n || n.parentId === T.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = T.O8);
}
function O(e, t) {
    if ((N(e), r().size(e) >= T.lj)) return T.lj;
    let { favoriteLimit: n } = (0, f.ad)();
    return n <= 0 || t === a.Ip.CATEGORY ? null : r().filter(e, (e) => e.type !== a.Ip.CATEGORY).length >= n ? n : null;
}
function R(e) {
    l.A.show({ title: g.intl.string(g.t["+XYXtZ"]), body: g.intl.formatToPlainString(g.t.JaIyFi, { count: e }) });
}
function L() {
    l.A.show({
        title: g.intl.string(g.t.iufib1),
        body: g.intl.string(g.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function y(e) {
    return Object.keys(e).length;
}
function D(e, t) {
    return t === a.Ip.CATEGORY ? null : (c.A.getChannel(e)?.type ?? null);
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    b([e], t, n);
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !E.A.isFavorite(e));
    0 !== i.length &&
        o.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let l of i) {
                    let i = O(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                    if (null != i) {
                        if ((R(i), !r)) return !1;
                        break;
                    }
                    let o = c.A.getChannel(l);
                    (e.favoriteChannels[l] = a.wL.create({
                        nickname: "",
                        type: a.Ip.REFERENCE_ORIGINAL,
                        channelType: null != o ? s.ZQ.create({ value: o.type }) : void 0,
                        position: S(e.favoriteChannels),
                        parentId: t ?? T.O8,
                    })),
                        N(e.favoriteChannels),
                        C(e.favoriteChannels, l),
                        (r = !0),
                        (0, A.LO)(n, D(l, a.Ip.REFERENCE_ORIGINAL), y(e.favoriteChannels));
                }
            },
            o.Sb.FREQUENT_USER_ACTION,
            L,
        );
}
function M(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = E.A.getFavorite(e);
    if (null == n) return;
    let i = t ? D(e, n.type) : null;
    o.wc.updateAsync(
        "favorites",
        (r) => {
            if ((delete r.favoriteChannels[e], n.type === a.Ip.CATEGORY))
                for (let t in r.favoriteChannels)
                    r.favoriteChannels[t].parentId === e && (r.favoriteChannels[t].parentId = T.O8);
            N(r.favoriteChannels), t && (0, A.TX)(i, y(r.favoriteChannels));
        },
        o.Sb.INFREQUENT_USER_ACTION,
        L,
    );
}
function P(e, t) {
    E.A.isFavorite(e) &&
        o.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            o.Sb.INFREQUENT_USER_ACTION,
            L,
        );
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal";
    if (!(0, p.QN)(e)) return;
    let n = e.trim(),
        i = _.default.fromTimestamp(Date.now());
    o.wc.updateAsync(
        "favorites",
        (e) => {
            let r = O(e.favoriteChannels, a.Ip.CATEGORY);
            if (null != r) return R(r), !1;
            (e.favoriteChannels[i] = a.wL.create({
                nickname: n,
                type: a.Ip.CATEGORY,
                position: S(e.favoriteChannels),
                parentId: T.O8,
            })),
                (0, A.LO)(t, D(i, a.Ip.CATEGORY), y(e.favoriteChannels));
        },
        o.Sb.FREQUENT_USER_ACTION,
        L,
    );
}
function w(e) {
    M(e);
}
function G(e, t) {
    return null != e && e.type === a.Ip.CATEGORY && e.collapsed !== t && ((e.collapsed = t), !0);
}
function x(e) {
    o.wc.updateAsync(
        "favorites",
        (t) => {
            if (!e(t)) return !1;
        },
        o.Sb.FREQUENT_USER_ACTION,
        L,
    );
}
function k(e, t) {
    let n = E.A.getFavorite(e);
    null != n && n.type === a.Ip.CATEGORY && x((n) => G(n.favoriteChannels[e], t));
}
function F(e) {
    x((t) => {
        let n = !1;
        for (let i in t.favoriteChannels) G(t.favoriteChannels[i], e) && (n = !0);
        return n;
    });
}
function V(e) {
    0 !== e.length &&
        o.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? T.O8), C(t.favoriteChannels, e));
                }
                (0, A.P)();
            },
            o.Sb.FREQUENT_USER_ACTION,
            L,
        );
}
function B(e, t) {
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? T.O8), C(n.favoriteChannels, e);
        },
        o.Sb.FREQUENT_USER_ACTION,
        L,
    );
}
function H() {
    for (let e of (o.wc.updateAsync(
        "favorites",
        (e) => {
            (e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1);
        },
        o.Sb.INFREQUENT_USER_ACTION,
        L,
    ),
    I))
        (0, o.xB)(e);
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = s._t.create({ value: e })), (0, A.uS)(t, e);
        },
        o.Sb.INFREQUENT_USER_ACTION,
        L,
    );
}
