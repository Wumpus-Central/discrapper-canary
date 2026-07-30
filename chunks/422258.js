"use strict";
n.d(t, {
    JD: () => H,
    Jz: () => b,
    O8: () => F,
    S_: () => M,
    fv: () => G,
    hR: () => V,
    i_: () => P,
    od: () => w,
    tV: () => W,
    uM: () => j,
    w6: () => U,
    zN: () => B,
});
var i = n(435558),
    r = n.n(i),
    a = n(873298),
    s = n(406935),
    l = n(157559),
    o = n(541689),
    d = n(558845),
    c = n(594061),
    u = n(95701),
    _ = n(734057),
    E = n(576705),
    A = n(935208),
    h = n(181079),
    I = n(668267),
    f = n(676168),
    p = n(298358),
    T = n(5180),
    m = n(349828),
    g = n(818348),
    S = n(375708);
function N(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function C(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === a.Ip.CATEGORY) continue;
        let i = _.A.getChannel(t);
        if (null == i) {
            let i = n.channelType?.value;
            if (null != i && u.Le.has(i)) continue;
            delete e[t];
            continue;
        }
        if (
            (null == n.channelType && (n.channelType = s.ZQ.create({ value: i.type })),
            !i.isPrivate() && !E.A.can(g.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function O(e, t) {
    let n = e[t];
    if (null == n || n.parentId === m.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = m.O8);
}
function R(e, t) {
    if ((C(e), r().size(e) >= m.lj)) return m.lj;
    let { favoriteLimit: n } = (0, p.ad)();
    return n <= 0 || t === a.Ip.CATEGORY ? null : r().filter(e, (e) => e.type !== a.Ip.CATEGORY).length >= n ? n : null;
}
function L(e) {
    l.A.show({ title: S.intl.string(S.t["+XYXtZ"]), body: S.intl.formatToPlainString(S.t.JaIyFi, { count: e }) });
}
function D() {
    l.A.show({
        title: S.intl.string(S.t.iufib1),
        body: S.intl.string(S.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function y(e) {
    return Object.keys(e).length;
}
function v(e, t) {
    return t === a.Ip.CATEGORY ? null : (_.A.getChannel(e)?.type ?? null);
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    M([e], t, n);
}
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !h.A.isFavorite(e));
    0 !== i.length &&
        c.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let l of i) {
                    let i = R(e.favoriteChannels, a.Ip.REFERENCE_ORIGINAL);
                    if (null != i) {
                        if ((L(i), !r)) return !1;
                        break;
                    }
                    let o = _.A.getChannel(l);
                    (e.favoriteChannels[l] = a.wL.create({
                        nickname: "",
                        type: a.Ip.REFERENCE_ORIGINAL,
                        channelType: null != o ? s.ZQ.create({ value: o.type }) : void 0,
                        position: N(e.favoriteChannels),
                        parentId: t ?? m.O8,
                    })),
                        C(e.favoriteChannels),
                        O(e.favoriteChannels, l),
                        (r = !0),
                        (0, I.LO)(n, v(l, a.Ip.REFERENCE_ORIGINAL), y(e.favoriteChannels));
                }
            },
            c.Sb.FREQUENT_USER_ACTION,
            D,
        );
}
function P(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = h.A.getFavorite(e);
    if (null == n) return;
    let i = t ? v(e, n.type) : null;
    c.wc.updateAsync(
        "favorites",
        (r) => {
            if ((delete r.favoriteChannels[e], n.type === a.Ip.CATEGORY))
                for (let t in r.favoriteChannels)
                    r.favoriteChannels[t].parentId === e && (r.favoriteChannels[t].parentId = m.O8);
            C(r.favoriteChannels), t && (0, I.TX)(i, y(r.favoriteChannels));
        },
        c.Sb.INFREQUENT_USER_ACTION,
        D,
    );
}
function U(e, t) {
    h.A.isFavorite(e) &&
        c.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            c.Sb.INFREQUENT_USER_ACTION,
            D,
        );
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal";
    if (!(0, T.QN)(e)) return;
    let n = e.trim(),
        i = A.default.fromTimestamp(Date.now());
    c.wc.updateAsync(
        "favorites",
        (e) => {
            let r = R(e.favoriteChannels, a.Ip.CATEGORY);
            if (null != r) return L(r), !1;
            (e.favoriteChannels[i] = a.wL.create({
                nickname: n,
                type: a.Ip.CATEGORY,
                position: N(e.favoriteChannels),
                parentId: m.O8,
            })),
                (0, I.LO)(t, v(i, a.Ip.CATEGORY), y(e.favoriteChannels));
        },
        c.Sb.FREQUENT_USER_ACTION,
        D,
    );
}
function G(e) {
    P(e);
}
function x(e, t) {
    return null != e && e.type === a.Ip.CATEGORY && e.collapsed !== t && ((e.collapsed = t), !0);
}
function k(e) {
    c.wc.updateAsync(
        "favorites",
        (t) => {
            if (!e(t)) return !1;
        },
        c.Sb.FREQUENT_USER_ACTION,
        D,
    );
}
function F(e, t) {
    let n = h.A.getFavorite(e);
    null != n && n.type === a.Ip.CATEGORY && k((n) => x(n.favoriteChannels[e], t));
}
function V(e) {
    k((t) => {
        let n = !1;
        for (let i in t.favoriteChannels) x(t.favoriteChannels[i], e) && (n = !0);
        return n;
    });
}
function B(e) {
    0 !== e.length &&
        c.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? m.O8), O(t.favoriteChannels, e));
                }
                (0, I.P)();
            },
            c.Sb.FREQUENT_USER_ACTION,
            D,
        );
}
function H(e, t) {
    c.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? m.O8), O(n.favoriteChannels, e);
        },
        c.Sb.FREQUENT_USER_ACTION,
        D,
    );
}
function j() {
    for (let e of (c.wc.updateAsync(
        "favorites",
        (e) => {
            (e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1);
        },
        c.Sb.INFREQUENT_USER_ACTION,
        D,
    ),
    (0, o.Ab)(),
    (0, d._0)(),
    f.dt))
        (0, c.xB)(e);
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    c.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = s._t.create({ value: e })), (0, I.uS)(t, e);
        },
        c.Sb.INFREQUENT_USER_ACTION,
        D,
    );
}
