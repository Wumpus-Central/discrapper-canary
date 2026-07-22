"use strict";
n.d(t, {
    JD: () => k,
    Jz: () => L,
    O8: () => w,
    S_: () => y,
    fv: () => M,
    hR: () => G,
    i_: () => D,
    od: () => b,
    tV: () => F,
    w6: () => v,
    zN: () => x,
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
    h = n(298358),
    I = n(349828),
    f = n(818348),
    p = n(375708);
function T(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function m(e) {
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
            !i.isPrivate() && !u.A.can(f.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function g(e, t) {
    let n = e[t];
    if (null == n || n.parentId === I.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = I.O8);
}
function S(e) {
    m(e);
    let { favoriteLimit: t } = (0, h.ad)();
    return !(t <= 0) && r().size(e) >= t;
}
function N() {
    l.A.show({
        title: p.intl.string(p.t["+XYXtZ"]),
        body: p.intl.formatToPlainString(p.t.JaIyFi, { count: (0, h.ad)().favoriteLimit }),
    });
}
function C() {
    l.A.show({
        title: p.intl.string(p.t.iufib1),
        body: p.intl.string(p.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function O(e) {
    return Object.keys(e).length;
}
function R(e, t) {
    return t === a.Ip.CATEGORY ? null : (c.A.getChannel(e)?.type ?? null);
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    y([e], t, n);
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !E.A.isFavorite(e));
    0 !== i.length &&
        o.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let l of i) {
                    if (S(e.favoriteChannels)) {
                        if ((N(), !r)) return !1;
                        break;
                    }
                    let i = c.A.getChannel(l);
                    (e.favoriteChannels[l] = a.wL.create({
                        nickname: "",
                        type: a.Ip.REFERENCE_ORIGINAL,
                        channelType: null != i ? s.ZQ.create({ value: i.type }) : void 0,
                        position: T(e.favoriteChannels),
                        parentId: t ?? I.O8,
                    })),
                        m(e.favoriteChannels),
                        g(e.favoriteChannels, l),
                        (r = !0),
                        (0, A.LO)(n, R(l, a.Ip.REFERENCE_ORIGINAL), O(e.favoriteChannels));
                }
            },
            o.Sb.FREQUENT_USER_ACTION,
            C,
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
                    r.favoriteChannels[t].parentId === e && (r.favoriteChannels[t].parentId = I.O8);
            m(r.favoriteChannels), t && (0, A.TX)(i, O(r.favoriteChannels));
        },
        o.Sb.INFREQUENT_USER_ACTION,
        C,
    );
}
function v(e, t) {
    E.A.isFavorite(e) &&
        o.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            o.Sb.INFREQUENT_USER_ACTION,
            C,
        );
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        n = _.default.fromTimestamp(Date.now());
    o.wc.updateAsync(
        "favorites",
        (i) => {
            if (S(i.favoriteChannels)) return N(), !1;
            (i.favoriteChannels[n] = a.wL.create({
                nickname: e,
                type: a.Ip.CATEGORY,
                position: T(i.favoriteChannels),
                parentId: I.O8,
            })),
                (0, A.LO)(t, R(n, a.Ip.CATEGORY), O(i.favoriteChannels));
        },
        o.Sb.FREQUENT_USER_ACTION,
        C,
    );
}
function M(e) {
    D(e);
}
function P(e, t) {
    return null != e && e.type === a.Ip.CATEGORY && e.collapsed !== t && ((e.collapsed = t), !0);
}
function U(e) {
    o.wc.updateAsync(
        "favorites",
        (t) => {
            if (!e(t)) return !1;
        },
        o.Sb.FREQUENT_USER_ACTION,
        C,
    );
}
function w(e, t) {
    let n = E.A.getFavorite(e);
    null != n && n.type === a.Ip.CATEGORY && U((n) => P(n.favoriteChannels[e], t));
}
function G(e) {
    U((t) => {
        let n = !1;
        for (let i in t.favoriteChannels) P(t.favoriteChannels[i], e) && (n = !0);
        return n;
    });
}
function x(e) {
    0 !== e.length &&
        o.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? I.O8), g(t.favoriteChannels, e));
                }
                (0, A.P)();
            },
            o.Sb.FREQUENT_USER_ACTION,
            C,
        );
}
function k(e, t) {
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? I.O8), g(n.favoriteChannels, e);
        },
        o.Sb.FREQUENT_USER_ACTION,
        C,
    );
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = s._t.create({ value: e })), (0, A.uS)(t, e);
        },
        o.Sb.INFREQUENT_USER_ACTION,
        C,
    );
}
