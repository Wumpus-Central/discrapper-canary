n.d(t, {
    JD: () => R,
    Jz: () => S,
    S_: () => T,
    fv: () => O,
    i_: () => b,
    od: () => L,
    tV: () => v,
    w6: () => N,
    zN: () => y,
});
var i = n(735438),
    r = n.n(i),
    a = n(873298),
    s = n(406935),
    l = n(157559),
    o = n(594061),
    d = n(734057),
    c = n(576705),
    _ = n(661191),
    u = n(181079),
    A = n(349828),
    E = n(818348),
    g = n(985018);
function I(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
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
        if (null == i || (!i.isPrivate() && !c.A.can(E.xB.VIEW_CHANNEL, i))) {
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
function f() {
    l.A.show({ title: g.intl.string(g.t["+XYXtZ"]), body: g.intl.formatToPlainString(g.t.JaIyFi, { count: A.lj }) });
}
function m() {
    l.A.show({
        title: g.intl.string(g.t.iufib1),
        body: g.intl.string(g.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload();
        },
    });
}
function S(e, t) {
    T([e], t);
}
function T(e, t) {
    let n = e.filter((e) => !u.A.isFavorite(e));
    0 !== n.length &&
        o.wc.updateAsync(
            "favorites",
            (e) => {
                let i = !1;
                for (let r of n) {
                    if (p(e.favoriteChannels)) {
                        if ((f(), !i)) return !1;
                        break;
                    }
                    (e.favoriteChannels[r] = a.wL.create({
                        nickname: "",
                        type: a.Ip.REFERENCE_ORIGINAL,
                        position: I(e.favoriteChannels),
                        parentId: t ?? A.O8,
                    })),
                        h(e.favoriteChannels),
                        C(e.favoriteChannels, r),
                        (i = !0);
                }
            },
            o.Sb.FREQUENT_USER_ACTION,
            m,
        );
}
function b(e) {
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
            m,
        );
}
function N(e, t) {
    u.A.isFavorite(e) &&
        o.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            o.Sb.INFREQUENT_USER_ACTION,
            m,
        );
}
function L(e) {
    let t = _.default.fromTimestamp(Date.now());
    o.wc.updateAsync(
        "favorites",
        (n) => {
            if (p(n.favoriteChannels)) return f(), !1;
            n.favoriteChannels[t] = a.wL.create({
                nickname: e,
                type: a.Ip.CATEGORY,
                position: I(n.favoriteChannels),
                parentId: A.O8,
            });
        },
        o.Sb.FREQUENT_USER_ACTION,
        m,
    );
}
function O(e) {
    b(e);
}
function y(e) {
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
        m,
    );
}
function R(e, t) {
    o.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? A.O8), C(n.favoriteChannels, e);
        },
        o.Sb.FREQUENT_USER_ACTION,
        m,
    );
}
function v(e) {
    o.wc.updateAsync(
        "favorites",
        (t) => {
            t.guildVisible = s._t.create({ value: e });
        },
        o.Sb.INFREQUENT_USER_ACTION,
        m,
    );
}
