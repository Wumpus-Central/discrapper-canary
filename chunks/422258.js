n.d(t, {
    JD: () => v,
    Jz: () => N,
    S_: () => L,
    fv: () => G,
    i_: () => O,
    od: () => y,
    tV: () => D,
    w6: () => R,
    zN: () => U,
});
var i = n(735438),
    r = n.n(i),
    a = n(873298),
    s = n(406935),
    l = n(157559),
    o = n(594061),
    d = n(734057),
    _ = n(576705),
    c = n(661191),
    u = n(181079),
    A = n(668267),
    E = n(349828),
    I = n(818348),
    g = n(985018);
function h(e) {
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
        let i = d.A.getChannel(t);
        if (null == i || (!i.isPrivate() && !_.A.can(I.xB.VIEW_CHANNEL, i))) {
            delete e[t];
            continue;
        }
    }
}
function p(e, t) {
    let n = e[t];
    if (null == n || n.parentId === E.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = E.O8);
}
function f(e) {
    return C(e), r().size(e) >= E.lj;
}
function m() {
    l.A.show({ title: g.intl.string(g.t["+XYXtZ"]), body: g.intl.formatToPlainString(g.t.JaIyFi, { count: E.lj }) });
}
function S() {
    l.A.show({
        title: g.intl.string(g.t.iufib1),
        body: g.intl.string(g.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload();
        },
    });
}
function T(e) {
    return Object.keys(e).length;
}
function b(e, t) {
    return t === a.Ip.CATEGORY ? null : (d.A.getChannel(e)?.type ?? null);
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    L([e], t, n);
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter((e) => !u.A.isFavorite(e));
    0 !== i.length &&
        o.wc.updateAsync(
            "favorites",
            (e) => {
                let r = !1;
                for (let s of i) {
                    if (f(e.favoriteChannels)) {
                        if ((m(), !r)) return !1;
                        break;
                    }
                    (e.favoriteChannels[s] = a.wL.create({
                        nickname: "",
                        type: a.Ip.REFERENCE_ORIGINAL,
                        position: h(e.favoriteChannels),
                        parentId: t ?? E.O8,
                    })),
                        C(e.favoriteChannels),
                        p(e.favoriteChannels, s),
                        (r = !0),
                        (0, A.LO)(n, b(s, a.Ip.REFERENCE_ORIGINAL), T(e.favoriteChannels));
                }
            },
            o.Sb.FREQUENT_USER_ACTION,
            S,
        );
}
function O(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = u.A.getFavorite(e);
    if (null == n) return;
    let i = t ? b(e, n.type) : null;
    o.wc.updateAsync(
        "favorites",
        (r) => {
            if ((delete r.favoriteChannels[e], n.type === a.Ip.CATEGORY))
                for (let t in r.favoriteChannels)
                    r.favoriteChannels[t].parentId === e && (r.favoriteChannels[t].parentId = E.O8);
            C(r.favoriteChannels), t && (0, A.TX)(i, T(r.favoriteChannels));
        },
        o.Sb.INFREQUENT_USER_ACTION,
        S,
    );
}
function R(e, t) {
    u.A.isFavorite(e) &&
        o.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            o.Sb.INFREQUENT_USER_ACTION,
            S,
        );
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        n = c.default.fromTimestamp(Date.now());
    o.wc.updateAsync(
        "favorites",
        (i) => {
            if (f(i.favoriteChannels)) return m(), !1;
            (i.favoriteChannels[n] = a.wL.create({
                nickname: e,
                type: a.Ip.CATEGORY,
                position: h(i.favoriteChannels),
                parentId: E.O8,
            })),
                (0, A.LO)(t, b(n, a.Ip.CATEGORY), T(i.favoriteChannels));
        },
        o.Sb.FREQUENT_USER_ACTION,
        S,
    );
}
function G(e) {
    O(e);
}
function U(e) {
    0 !== e.length &&
        o.wc.updateAsync(
            "favorites",
            (t) => {
                for (let n of e) {
                    let e = n.id;
                    null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? E.O8), p(t.favoriteChannels, e));
                }
                (0, A.P)();
            },
            o.Sb.FREQUENT_USER_ACTION,
            S,
        );
}
function v(e, t) {
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? E.O8), p(n.favoriteChannels, e);
        },
        o.Sb.FREQUENT_USER_ACTION,
        S,
    );
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.guildVisible = s._t.create({ value: e })), (0, A.uS)(t, e);
        },
        o.Sb.INFREQUENT_USER_ACTION,
        S,
    );
}
