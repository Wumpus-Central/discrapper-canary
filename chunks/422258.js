"use strict";
n.d(t, {
    JD: () => w,
    Jz: () => v,
    S_: () => C,
    fv: () => D,
    i_: () => R,
    od: () => b,
    tV: () => M,
    w6: () => O,
    zN: () => L,
});
var i = n(735438),
    r = n.n(i),
    s = n(873298),
    a = n(406935),
    o = n(157559),
    l = n(594061),
    u = n(734057),
    c = n(576705),
    d = n(935208),
    _ = n(181079),
    h = n(668267),
    f = n(349828),
    p = n(818348),
    E = n(375708);
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
        if (n.type === s.Ip.CATEGORY) continue;
        let i = u.A.getChannel(t);
        if (null == i || (!i.isPrivate() && !c.A.can(p.xB.VIEW_CHANNEL, i))) {
            delete e[t];
            continue;
        }
    }
}
function A(e, t) {
    let n = e[t];
    if (null == n || n.parentId === f.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== s.Ip.CATEGORY) && (n.parentId = f.O8);
}
function I(e) {
    return g(e), r().size(e) >= f.lj;
}
function T() {
    o.A.show({ title: E.intl.string(E.t["+XYXtZ"]), body: E.intl.formatToPlainString(E.t.JaIyFi, { count: f.lj }) });
}
function S() {
    o.A.show({
        title: E.intl.string(E.t.iufib1),
        body: E.intl.string(E.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload();
        },
    });
}
function y(e) {
    return Object.keys(e).length;
}
function N(e, t) {
    return t === s.Ip.CATEGORY ? null : (u.A.getChannel(e)?.type ?? null);
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    C([e], t, n);
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !_.A.isFavorite(e));
    0 !== i.length &&
        l.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let a of i) {
                    if (I(e.favoriteChannels)) {
                        if ((T(), !r)) return !1;
                        break;
                    }
                    (e.favoriteChannels[a] = s.wL.create({
                        nickname: "",
                        type: s.Ip.REFERENCE_ORIGINAL,
                        position: m(e.favoriteChannels),
                        parentId: t ?? f.O8,
                    })),
                        g(e.favoriteChannels),
                        A(e.favoriteChannels, a),
                        (r = !0),
                        (0, h.LO)(n, N(a, s.Ip.REFERENCE_ORIGINAL), y(e.favoriteChannels));
                }
            },
            l.Sb.FREQUENT_USER_ACTION,
            S,
        );
}
function R(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = _.A.getFavorite(e);
    if (null == n) return;
    let i = t ? N(e, n.type) : null;
    l.wc.updateAsync(
        "favorites",
        (r) => {
            if ((delete r.favoriteChannels[e], n.type === s.Ip.CATEGORY))
                for (let t in r.favoriteChannels)
                    r.favoriteChannels[t].parentId === e && (r.favoriteChannels[t].parentId = f.O8);
            g(r.favoriteChannels), t && (0, h.TX)(i, y(r.favoriteChannels));
        },
        l.Sb.INFREQUENT_USER_ACTION,
        S,
    );
}
function O(e, t) {
    _.A.isFavorite(e) &&
        l.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            l.Sb.INFREQUENT_USER_ACTION,
            S,
        );
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        n = d.default.fromTimestamp(Date.now());
    l.wc.updateAsync(
        "favorites",
        (i) => {
            if (I(i.favoriteChannels)) return T(), !1;
            (i.favoriteChannels[n] = s.wL.create({
                nickname: e,
                type: s.Ip.CATEGORY,
                position: m(i.favoriteChannels),
                parentId: f.O8,
            })),
                (0, h.LO)(t, N(n, s.Ip.CATEGORY), y(i.favoriteChannels));
        },
        l.Sb.FREQUENT_USER_ACTION,
        S,
    );
}
function D(e) {
    R(e);
}
function L(e) {
    0 !== e.length &&
        l.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? f.O8), A(t.favoriteChannels, e));
                }
                (0, h.P)();
            },
            l.Sb.FREQUENT_USER_ACTION,
            S,
        );
}
function w(e, t) {
    l.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? f.O8), A(n.favoriteChannels, e);
        },
        l.Sb.FREQUENT_USER_ACTION,
        S,
    );
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    l.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = a._t.create({ value: e })), (0, h.uS)(t, e);
        },
        l.Sb.INFREQUENT_USER_ACTION,
        S,
    );
}
