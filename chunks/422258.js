"use strict";
n.d(t, {
    JD: () => x,
    Jz: () => O,
    O8: () => U,
    S_: () => L,
    fv: () => b,
    hR: () => w,
    i_: () => D,
    od: () => v,
    tV: () => k,
    w6: () => y,
    zN: () => G,
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
    h = n(349828),
    I = n(818348),
    f = n(375708);
function p(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function T(e) {
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
            !i.isPrivate() && !u.A.can(I.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function m(e, t) {
    let n = e[t];
    if (null == n || n.parentId === h.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = h.O8);
}
function g(e) {
    return T(e), r().size(e) >= h.lj;
}
function S() {
    l.A.show({ title: f.intl.string(f.t["+XYXtZ"]), body: f.intl.formatToPlainString(f.t.JaIyFi, { count: h.lj }) });
}
function N() {
    l.A.show({
        title: f.intl.string(f.t.iufib1),
        body: f.intl.string(f.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function C(e) {
    return Object.keys(e).length;
}
function R(e, t) {
    return t === a.Ip.CATEGORY ? null : (c.A.getChannel(e)?.type ?? null);
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    L([e], t, n);
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !E.A.isFavorite(e));
    0 !== i.length &&
        o.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let l of i) {
                    if (g(e.favoriteChannels)) {
                        if ((S(), !r)) return !1;
                        break;
                    }
                    let i = c.A.getChannel(l);
                    (e.favoriteChannels[l] = a.wL.create({
                        nickname: "",
                        type: a.Ip.REFERENCE_ORIGINAL,
                        channelType: null != i ? s.ZQ.create({ value: i.type }) : void 0,
                        position: p(e.favoriteChannels),
                        parentId: t ?? h.O8,
                    })),
                        T(e.favoriteChannels),
                        m(e.favoriteChannels, l),
                        (r = !0),
                        (0, A.LO)(n, R(l, a.Ip.REFERENCE_ORIGINAL), C(e.favoriteChannels));
                }
            },
            o.Sb.FREQUENT_USER_ACTION,
            N,
        );
}
function D(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = E.A.getFavorite(e);
    if (null == n) return;
    let i = t ? R(e, n.type) : null;
    o.wc.updateAsync(
        "favorites",
        (r) => {
            if ((delete r.favoriteChannels[e], n.type === a.Ip.CATEGORY))
                for (let t in r.favoriteChannels)
                    r.favoriteChannels[t].parentId === e && (r.favoriteChannels[t].parentId = h.O8);
            T(r.favoriteChannels), t && (0, A.TX)(i, C(r.favoriteChannels));
        },
        o.Sb.INFREQUENT_USER_ACTION,
        N,
    );
}
function y(e, t) {
    E.A.isFavorite(e) &&
        o.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            o.Sb.INFREQUENT_USER_ACTION,
            N,
        );
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        n = _.default.fromTimestamp(Date.now());
    o.wc.updateAsync(
        "favorites",
        (i) => {
            if (g(i.favoriteChannels)) return S(), !1;
            (i.favoriteChannels[n] = a.wL.create({
                nickname: e,
                type: a.Ip.CATEGORY,
                position: p(i.favoriteChannels),
                parentId: h.O8,
            })),
                (0, A.LO)(t, R(n, a.Ip.CATEGORY), C(i.favoriteChannels));
        },
        o.Sb.FREQUENT_USER_ACTION,
        N,
    );
}
function b(e) {
    D(e);
}
function M(e, t) {
    return null != e && e.type === a.Ip.CATEGORY && e.collapsed !== t && ((e.collapsed = t), !0);
}
function P(e) {
    o.wc.updateAsync(
        "favorites",
        (t) => {
            if (!e(t)) return !1;
        },
        o.Sb.FREQUENT_USER_ACTION,
        N,
    );
}
function U(e, t) {
    let n = E.A.getFavorite(e);
    null != n && n.type === a.Ip.CATEGORY && P((n) => M(n.favoriteChannels[e], t));
}
function w(e) {
    P((t) => {
        let n = !1;
        for (let i in t.favoriteChannels) M(t.favoriteChannels[i], e) && (n = !0);
        return n;
    });
}
function G(e) {
    0 !== e.length &&
        o.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? h.O8), m(t.favoriteChannels, e));
                }
                (0, A.P)();
            },
            o.Sb.FREQUENT_USER_ACTION,
            N,
        );
}
function x(e, t) {
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? h.O8), m(n.favoriteChannels, e);
        },
        o.Sb.FREQUENT_USER_ACTION,
        N,
    );
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = s._t.create({ value: e })), (0, A.uS)(t, e);
        },
        o.Sb.INFREQUENT_USER_ACTION,
        N,
    );
}
