n.d(t, { JD: () => S, Jz: () => p, S_: () => m, fv: () => G, i_: () => N, od: () => T, p0: () => y, w6: () => I });
var i = n(735438),
    l = n.n(i),
    r = n(873298),
    a = n(157559),
    u = n(594061),
    s = n(734057),
    d = n(576705),
    o = n(661191),
    c = n(181079),
    f = n(349828),
    A = n(818348),
    E = n(985018);
function v() {
    let e = c.A.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1;
}
function g(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === r.Ip.CATEGORY) continue;
        let i = s.A.getChannel(t);
        if (null == i || (!i.isPrivate() && !d.A.can(A.xB.VIEW_CHANNEL, i))) {
            delete e[t];
            continue;
        }
    }
}
function h(e, t) {
    let n = e[t];
    if (null == n || n.parentId === f.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== r.Ip.CATEGORY) && (n.parentId = f.O8);
}
function _(e) {
    return g(e), l().size(e) >= f.lj;
}
function C() {
    a.A.show({ title: E.intl.string(E.t["+XYXtZ"]), body: E.intl.formatToPlainString(E.t.JaIyFi, { count: f.lj }) });
}
function p(e, t) {
    c.A.isFavorite(e) ||
        u.wc.updateAsync(
            "favorites",
            (n) => {
                if (_(n.favoriteChannels)) return C(), !1;
                (n.favoriteChannels[e] = r.wL.create({
                    nickname: "",
                    type: r.Ip.REFERENCE_ORIGINAL,
                    position: v(),
                    parentId: t ?? f.O8,
                })),
                    g(n.favoriteChannels),
                    h(n.favoriteChannels, e);
            },
            u.Sb.FREQUENT_USER_ACTION,
        );
}
function N(e) {
    let t = c.A.getFavorite(e);
    null != t &&
        u.wc.updateAsync(
            "favorites",
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === r.Ip.CATEGORY))
                    for (let t in n.favoriteChannels)
                        n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = f.O8);
                g(n.favoriteChannels);
            },
            u.Sb.INFREQUENT_USER_ACTION,
        );
}
function I(e, t) {
    c.A.isFavorite(e) &&
        u.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            u.Sb.INFREQUENT_USER_ACTION,
        );
}
function T(e) {
    let t = o.default.fromTimestamp(Date.now());
    u.wc.updateAsync(
        "favorites",
        (n) => {
            if (_(n.favoriteChannels)) return C(), !1;
            n.favoriteChannels[t] = r.wL.create({ nickname: e, type: r.Ip.CATEGORY, position: v(), parentId: f.O8 });
        },
        u.Sb.FREQUENT_USER_ACTION,
    );
}
function G(e) {
    N(e);
}
function m(e) {
    u.wc.updateAsync(
        "favorites",
        (t) => {
            for (let n of e) {
                let e = n.id;
                null != n.position && (t.favoriteChannels[e].position = n.position),
                    void 0 !== n.parent_id &&
                        ((t.favoriteChannels[e].parentId = n.parent_id ?? f.O8), h(t.favoriteChannels, e));
            }
        },
        u.Sb.FREQUENT_USER_ACTION,
    );
}
function S(e, t) {
    u.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? f.O8), h(n.favoriteChannels, e);
        },
        u.Sb.FREQUENT_USER_ACTION,
    );
}
function y() {
    u.wc.updateAsync(
        "favorites",
        (e) => {
            e.muted = !e.muted;
        },
        u.Sb.INFREQUENT_USER_ACTION,
    );
}
