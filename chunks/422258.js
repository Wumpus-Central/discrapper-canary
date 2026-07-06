"use strict";
n.d(t, {
    JD: () => P,
    Jz: () => O,
    S_: () => R,
    fv: () => D,
    i_: () => v,
    od: () => L,
    tV: () => M,
    w6: () => b,
    zN: () => w,
});
var i = n(735438),
    r = n.n(i),
    s = n(873298),
    a = n(406935),
    o = n(157559),
    l = n(594061),
    u = n(95701),
    c = n(734057),
    d = n(576705),
    _ = n(935208),
    h = n(181079),
    f = n(668267),
    E = n(349828),
    p = n(818348),
    m = n(375708);
function g(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function A(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === s.Ip.CATEGORY) continue;
        let i = c.A.getChannel(t);
        if (null == i) {
            let i = n.channelType?.value;
            if (null != i && u.Le.has(i)) continue;
            delete e[t];
            continue;
        }
        if (
            (null == n.channelType && (n.channelType = a.ZQ.create({ value: i.type })),
            !i.isPrivate() && !d.A.can(p.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function I(e, t) {
    let n = e[t];
    if (null == n || n.parentId === E.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== s.Ip.CATEGORY) && (n.parentId = E.O8);
}
function T(e) {
    return A(e), r().size(e) >= E.lj;
}
function S() {
    o.A.show({ title: m.intl.string(m.t["+XYXtZ"]), body: m.intl.formatToPlainString(m.t.JaIyFi, { count: E.lj }) });
}
function N() {
    o.A.show({
        title: m.intl.string(m.t.iufib1),
        body: m.intl.string(m.t.eAn6z2),
        onCloseCallback: function () {
            window.location.reload();
        },
    });
}
function C(e) {
    return Object.keys(e).length;
}
function y(e, t) {
    return t === s.Ip.CATEGORY ? null : (c.A.getChannel(e)?.type ?? null);
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    R([e], t, n);
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !h.A.isFavorite(e));
    0 !== i.length &&
        l.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let o of i) {
                    if (T(e.favoriteChannels)) {
                        if ((S(), !r)) return !1;
                        break;
                    }
                    let i = c.A.getChannel(o);
                    (e.favoriteChannels[o] = s.wL.create({
                        nickname: "",
                        type: s.Ip.REFERENCE_ORIGINAL,
                        channelType: null != i ? a.ZQ.create({ value: i.type }) : void 0,
                        position: g(e.favoriteChannels),
                        parentId: t ?? E.O8,
                    })),
                        A(e.favoriteChannels),
                        I(e.favoriteChannels, o),
                        (r = !0),
                        (0, f.LO)(n, y(o, s.Ip.REFERENCE_ORIGINAL), C(e.favoriteChannels));
                }
            },
            l.Sb.FREQUENT_USER_ACTION,
            N,
        );
}
function v(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = h.A.getFavorite(e);
    if (null == n) return;
    let i = t ? y(e, n.type) : null;
    l.wc.updateAsync(
        "favorites",
        (r) => {
            if ((delete r.favoriteChannels[e], n.type === s.Ip.CATEGORY))
                for (let t in r.favoriteChannels)
                    r.favoriteChannels[t].parentId === e && (r.favoriteChannels[t].parentId = E.O8);
            A(r.favoriteChannels), t && (0, f.TX)(i, C(r.favoriteChannels));
        },
        l.Sb.INFREQUENT_USER_ACTION,
        N,
    );
}
function b(e, t) {
    h.A.isFavorite(e) &&
        l.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            l.Sb.INFREQUENT_USER_ACTION,
            N,
        );
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        n = _.default.fromTimestamp(Date.now());
    l.wc.updateAsync(
        "favorites",
        (i) => {
            if (T(i.favoriteChannels)) return S(), !1;
            (i.favoriteChannels[n] = s.wL.create({
                nickname: e,
                type: s.Ip.CATEGORY,
                position: g(i.favoriteChannels),
                parentId: E.O8,
            })),
                (0, f.LO)(t, y(n, s.Ip.CATEGORY), C(i.favoriteChannels));
        },
        l.Sb.FREQUENT_USER_ACTION,
        N,
    );
}
function D(e) {
    v(e);
}
function w(e) {
    0 !== e.length &&
        l.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? E.O8), I(t.favoriteChannels, e));
                }
                (0, f.P)();
            },
            l.Sb.FREQUENT_USER_ACTION,
            N,
        );
}
function P(e, t) {
    l.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? E.O8), I(n.favoriteChannels, e);
        },
        l.Sb.FREQUENT_USER_ACTION,
        N,
    );
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    l.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = a._t.create({ value: e })), (0, f.uS)(t, e);
        },
        l.Sb.INFREQUENT_USER_ACTION,
        N,
    );
}
