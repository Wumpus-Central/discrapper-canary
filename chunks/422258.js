"use strict";
n.d(t, {
    JD: () => F,
    Jz: () => y,
    O8: () => G,
    S_: () => D,
    fv: () => P,
    hR: () => x,
    i_: () => v,
    od: () => M,
    tV: () => V,
    w6: () => b,
    zN: () => k,
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
    h = n(281980),
    I = n(5180),
    f = n(349828),
    p = n(818348),
    T = n(375708);
function m(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function g(e) {
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
            !i.isPrivate() && !u.A.can(p.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function S(e, t) {
    let n = e[t];
    if (null == n || n.parentId === f.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = f.O8);
}
function N(e) {
    g(e);
    let { favoriteLimit: t } = (0, h.ad)();
    return !(t <= 0) && r().size(e) >= t;
}
function C() {
    l.A.show({
        title: T.intl.string(T.t["+XYXtZ"]),
        body: T.intl.formatToPlainString(T.t.JaIyFi, { count: (0, h.ad)().favoriteLimit }),
    });
}
function O() {
    l.A.show({
        title: T.intl.string(T.t.iufib1),
        body: T.intl.string(T.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function R(e) {
    return Object.keys(e).length;
}
function L(e, t) {
    return t === a.Ip.CATEGORY ? null : (c.A.getChannel(e)?.type ?? null);
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    D([e], t, n);
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !E.A.isFavorite(e));
    0 !== i.length &&
        o.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let l of i) {
                    if (N(e.favoriteChannels)) {
                        if ((C(), !r)) return !1;
                        break;
                    }
                    let i = c.A.getChannel(l);
                    (e.favoriteChannels[l] = a.wL.create({
                        nickname: "",
                        type: a.Ip.REFERENCE_ORIGINAL,
                        channelType: null != i ? s.ZQ.create({ value: i.type }) : void 0,
                        position: m(e.favoriteChannels),
                        parentId: t ?? f.O8,
                    })),
                        g(e.favoriteChannels),
                        S(e.favoriteChannels, l),
                        (r = !0),
                        (0, A.LO)(n, L(l, a.Ip.REFERENCE_ORIGINAL), R(e.favoriteChannels));
                }
            },
            o.Sb.FREQUENT_USER_ACTION,
            O,
        );
}
function v(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = E.A.getFavorite(e);
    if (null == n) return;
    let i = t ? L(e, n.type) : null;
    o.wc.updateAsync(
        "favorites",
        (r) => {
            if ((delete r.favoriteChannels[e], n.type === a.Ip.CATEGORY))
                for (let t in r.favoriteChannels)
                    r.favoriteChannels[t].parentId === e && (r.favoriteChannels[t].parentId = f.O8);
            g(r.favoriteChannels), t && (0, A.TX)(i, R(r.favoriteChannels));
        },
        o.Sb.INFREQUENT_USER_ACTION,
        O,
    );
}
function b(e, t) {
    E.A.isFavorite(e) &&
        o.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            o.Sb.INFREQUENT_USER_ACTION,
            O,
        );
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal";
    if (!(0, I.QN)(e)) return;
    let n = e.trim(),
        i = _.default.fromTimestamp(Date.now());
    o.wc.updateAsync(
        "favorites",
        (e) => {
            if (N(e.favoriteChannels)) return C(), !1;
            (e.favoriteChannels[i] = a.wL.create({
                nickname: n,
                type: a.Ip.CATEGORY,
                position: m(e.favoriteChannels),
                parentId: f.O8,
            })),
                (0, A.LO)(t, L(i, a.Ip.CATEGORY), R(e.favoriteChannels));
        },
        o.Sb.FREQUENT_USER_ACTION,
        O,
    );
}
function P(e) {
    v(e);
}
function U(e, t) {
    return null != e && e.type === a.Ip.CATEGORY && e.collapsed !== t && ((e.collapsed = t), !0);
}
function w(e) {
    o.wc.updateAsync(
        "favorites",
        (t) => {
            if (!e(t)) return !1;
        },
        o.Sb.FREQUENT_USER_ACTION,
        O,
    );
}
function G(e, t) {
    let n = E.A.getFavorite(e);
    null != n && n.type === a.Ip.CATEGORY && w((n) => U(n.favoriteChannels[e], t));
}
function x(e) {
    w((t) => {
        let n = !1;
        for (let i in t.favoriteChannels) U(t.favoriteChannels[i], e) && (n = !0);
        return n;
    });
}
function k(e) {
    0 !== e.length &&
        o.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? f.O8), S(t.favoriteChannels, e));
                }
                (0, A.P)();
            },
            o.Sb.FREQUENT_USER_ACTION,
            O,
        );
}
function F(e, t) {
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? f.O8), S(n.favoriteChannels, e);
        },
        o.Sb.FREQUENT_USER_ACTION,
        O,
    );
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = s._t.create({ value: e })), (0, A.uS)(t, e);
        },
        o.Sb.INFREQUENT_USER_ACTION,
        O,
    );
}
