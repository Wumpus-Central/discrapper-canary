t.d(e, {
    JD: () => V,
    Jz: () => N,
    O8: () => L,
    S_: () => w,
    fv: () => D,
    hR: () => k,
    i_: () => U,
    od: () => g,
    tV: () => Q,
    w6: () => F,
    zN: () => m,
});
var i = t(435558),
    a = t.n(i),
    l = t(873298),
    o = t(406935),
    r = t(157559),
    u = t(594061),
    f = t(95701),
    c = t(734057),
    s = t(576705),
    _ = t(935208),
    p = t(181079),
    E = t(668267),
    A = t(349828),
    d = t(818348),
    v = t(375708);
function I(n) {
    let e = 0;
    for (let t in n) {
        let i = n[t];
        null != i && null != i.position && (e = Math.max(e, i.position));
    }
    return e + 1;
}
function h(n) {
    for (let e in n) {
        let t = n[e];
        if (null == t) {
            delete n[e];
            continue;
        }
        if (t.type === l.Ip.CATEGORY) continue;
        let i = c.A.getChannel(e);
        if (null == i) {
            let i = t.channelType?.value;
            if (null != i && f.Le.has(i)) continue;
            delete n[e];
            continue;
        }
        if (
            (null == t.channelType && (t.channelType = o.ZQ.create({ value: i.type })),
            !i.isPrivate() && !s.A.can(d.xB.VIEW_CHANNEL, i))
        ) {
            delete n[e];
            continue;
        }
    }
}
function C(n, e) {
    let t = n[e];
    if (null == t || t.parentId === A.O8) return;
    let i = null != t.parentId ? n[t.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (t.parentId = A.O8);
}
function O(n) {
    return h(n), a().size(n) >= A.lj;
}
function T() {
    r.A.show({ title: v.intl.string(v.t["+XYXtZ"]), body: v.intl.formatToPlainString(v.t.JaIyFi, { count: A.lj }) });
}
function R() {
    r.A.show({
        title: v.intl.string(v.t.iufib1),
        body: v.intl.string(v.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function S(n) {
    return Object.keys(n).length;
}
function y(n, e) {
    return e === l.Ip.CATEGORY ? null : (c.A.getChannel(n)?.type ?? null);
}
function N(n, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    w([n], e, t);
}
function w(n, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = n.filter((n) => !p.A.isFavorite(n));
    0 !== i.length &&
        u.wc.updateAsync(
            "favorites",
            (n) => {
                let a = !1;
                for (let r of i) {
                    if (O(n.favoriteChannels)) {
                        if ((T(), !a)) return !1;
                        break;
                    }
                    let i = c.A.getChannel(r);
                    (n.favoriteChannels[r] = l.wL.create({
                        nickname: "",
                        type: l.Ip.REFERENCE_ORIGINAL,
                        channelType: null != i ? o.ZQ.create({ value: i.type }) : void 0,
                        position: I(n.favoriteChannels),
                        parentId: e ?? A.O8,
                    })),
                        h(n.favoriteChannels),
                        C(n.favoriteChannels, r),
                        (a = !0),
                        (0, E.LO)(t, y(r, l.Ip.REFERENCE_ORIGINAL), S(n.favoriteChannels));
                }
            },
            u.Sb.FREQUENT_USER_ACTION,
            R,
        );
}
function U(n) {
    let { trackAnalytics: e = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = p.A.getFavorite(n);
    if (null == t) return;
    let i = e ? y(n, t.type) : null;
    u.wc.updateAsync(
        "favorites",
        (a) => {
            if ((delete a.favoriteChannels[n], t.type === l.Ip.CATEGORY))
                for (let e in a.favoriteChannels)
                    a.favoriteChannels[e].parentId === n && (a.favoriteChannels[e].parentId = A.O8);
            h(a.favoriteChannels), e && (0, E.TX)(i, S(a.favoriteChannels));
        },
        u.Sb.INFREQUENT_USER_ACTION,
        R,
    );
}
function F(n, e) {
    p.A.isFavorite(n) &&
        u.wc.updateAsync(
            "favorites",
            (t) => {
                t.favoriteChannels[n].nickname = e ?? "";
            },
            u.Sb.INFREQUENT_USER_ACTION,
            R,
        );
}
function g(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        t = _.default.fromTimestamp(Date.now());
    u.wc.updateAsync(
        "favorites",
        (i) => {
            if (O(i.favoriteChannels)) return T(), !1;
            (i.favoriteChannels[t] = l.wL.create({
                nickname: n,
                type: l.Ip.CATEGORY,
                position: I(i.favoriteChannels),
                parentId: A.O8,
            })),
                (0, E.LO)(e, y(t, l.Ip.CATEGORY), S(i.favoriteChannels));
        },
        u.Sb.FREQUENT_USER_ACTION,
        R,
    );
}
function D(n) {
    U(n);
}
function b(n, e) {
    return null != n && n.type === l.Ip.CATEGORY && n.collapsed !== e && ((n.collapsed = e), !0);
}
function G(n) {
    u.wc.updateAsync(
        "favorites",
        (e) => {
            if (!n(e)) return !1;
        },
        u.Sb.FREQUENT_USER_ACTION,
        R,
    );
}
function L(n, e) {
    let t = p.A.getFavorite(n);
    null != t && t.type === l.Ip.CATEGORY && G((t) => b(t.favoriteChannels[n], e));
}
function k(n) {
    G((e) => {
        let t = !1;
        for (let i in e.favoriteChannels) b(e.favoriteChannels[i], n) && (t = !0);
        return t;
    });
}
function m(n) {
    0 !== n.length &&
        u.wc.updateAsync(
            "favorites",
            (e) => {
                for (let t of n) {
                    let n = t.id;
                    null != t.position && (e.favoriteChannels[n].position = t.position),
                        void 0 !== t.parent_id &&
                            ((e.favoriteChannels[n].parentId = t.parent_id ?? A.O8), C(e.favoriteChannels, n));
                }
                (0, E.P)();
            },
            u.Sb.FREQUENT_USER_ACTION,
            R,
        );
}
function V(n, e) {
    u.wc.updateAsync(
        "favorites",
        (t) => {
            (t.favoriteChannels[n].parentId = e ?? A.O8), C(t.favoriteChannels, n);
        },
        u.Sb.FREQUENT_USER_ACTION,
        R,
    );
}
function Q(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    u.wc.updateAsync(
        "favorites",
        (t) => {
            (t.guildVisible = o._t.create({ value: n })), (0, E.uS)(e, n);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        R,
    );
}
