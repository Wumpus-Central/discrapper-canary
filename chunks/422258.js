n.d(t, {
    JD: () => O,
    Jz: () => f,
    Qh: () => R,
    S_: () => L,
    fv: () => N,
    i_: () => m,
    od: () => b,
    p0: () => G,
    w6: () => T,
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
    A = n(349828),
    g = n(818348),
    E = n(985018);
function I() {
    let e = u.A.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1;
}
function h(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === a.Ip.CATEGORY) continue;
        let i = d.A.getChannel(t);
        if (null == i || (!i.isPrivate() && !_.A.can(g.xB.VIEW_CHANNEL, i))) {
            delete e[t];
            continue;
        }
    }
}
function C(e, t) {
    let n = e[t];
    if (null == n || n.parentId === A.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = A.O8);
}
function p(e) {
    return h(e), r().size(e) >= A.lj;
}
function S() {
    l.A.show({ title: E.intl.string(E.t["+XYXtZ"]), body: E.intl.formatToPlainString(E.t.JaIyFi, { count: A.lj }) });
}
function f(e, t) {
    u.A.isFavorite(e) ||
        o.wc.updateAsync(
            "favorites",
            (n) => {
                if (p(n.favoriteChannels)) return S(), !1;
                (n.favoriteChannels[e] = a.wL.create({
                    nickname: "",
                    type: a.Ip.REFERENCE_ORIGINAL,
                    position: I(),
                    parentId: t ?? A.O8,
                })),
                    h(n.favoriteChannels),
                    C(n.favoriteChannels, e);
            },
            o.Sb.FREQUENT_USER_ACTION,
        );
}
function m(e) {
    let t = u.A.getFavorite(e);
    null != t &&
        o.wc.updateAsync(
            "favorites",
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === a.Ip.CATEGORY))
                    for (let t in n.favoriteChannels)
                        n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = A.O8);
                h(n.favoriteChannels);
            },
            o.Sb.INFREQUENT_USER_ACTION,
        );
}
function T(e, t) {
    u.A.isFavorite(e) &&
        o.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            o.Sb.INFREQUENT_USER_ACTION,
        );
}
function b(e) {
    let t = c.default.fromTimestamp(Date.now());
    o.wc.updateAsync(
        "favorites",
        (n) => {
            if (p(n.favoriteChannels)) return S(), !1;
            n.favoriteChannels[t] = a.wL.create({ nickname: e, type: a.Ip.CATEGORY, position: I(), parentId: A.O8 });
        },
        o.Sb.FREQUENT_USER_ACTION,
    );
}
function N(e) {
    m(e);
}
function L(e) {
    o.wc.updateAsync(
        "favorites",
        (t) => {
            for (let n of e) {
                let e = n.id;
                null != n.position && (t.favoriteChannels[e].position = n.position),
                    void 0 !== n.parent_id &&
                        ((t.favoriteChannels[e].parentId = n.parent_id ?? A.O8), C(t.favoriteChannels, e));
            }
        },
        o.Sb.FREQUENT_USER_ACTION,
    );
}
function O(e, t) {
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? A.O8), C(n.favoriteChannels, e);
        },
        o.Sb.FREQUENT_USER_ACTION,
    );
}
function G() {
    o.wc.updateAsync(
        "favorites",
        (e) => {
            e.muted = !e.muted;
        },
        o.Sb.INFREQUENT_USER_ACTION,
    );
}
function R(e) {
    o.wc.updateAsync(
        "favorites",
        (t) => {
            t.guildVisible = s._t.create({ value: e });
        },
        o.Sb.INFREQUENT_USER_ACTION,
    );
}
