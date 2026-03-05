i.d(e, {
    JD: () => y,
    Jz: () => O,
    S_: () => b,
    fv: () => m,
    i_: () => p,
    od: () => L,
    tV: () => f,
    w6: () => D,
    zE: () => v,
    zN: () => R,
});
var n = i(735438),
    l = i.n(n),
    s = i(873298),
    a = i(406935),
    r = i(157559),
    u = i(594061),
    o = i(734057),
    d = i(576705),
    A = i(661191),
    T = i(181079),
    S = i(349828),
    E = i(818348),
    g = i(985018);
function c(t) {
    let e = 0;
    for (let i in t) {
        let n = t[i];
        null != n && null != n.position && (e = Math.max(e, n.position));
    }
    return e + 1;
}
function _(t) {
    for (let e in t) {
        let i = t[e];
        if (null == i) {
            delete t[e];
            continue;
        }
        if (i.type === s.Ip.CATEGORY) continue;
        let n = o.A.getChannel(e);
        if (null == n || (!n.isPrivate() && !d.A.can(E.xB.VIEW_CHANNEL, n))) {
            delete t[e];
            continue;
        }
    }
}
function I(t, e) {
    let i = t[e];
    if (null == i || i.parentId === S.O8) return;
    let n = null != i.parentId ? t[i.parentId] : null;
    (null == n || n.type !== s.Ip.CATEGORY) && (i.parentId = S.O8);
}
function C(t) {
    return _(t), l().size(t) >= S.lj;
}
function N() {
    r.A.show({ title: g.intl.string(g.t["+XYXtZ"]), body: g.intl.formatToPlainString(g.t.JaIyFi, { count: S.lj }) });
}
function O(t, e) {
    b([t], e);
}
function b(t, e) {
    let i = t.filter((t) => !T.A.isFavorite(t));
    0 !== i.length &&
        u.wc.updateAsync(
            "favorites",
            (t) => {
                let n = !1;
                for (let l of i) {
                    if (C(t.favoriteChannels)) {
                        if ((N(), !n)) return !1;
                        break;
                    }
                    (t.favoriteChannels[l] = s.wL.create({
                        nickname: "",
                        type: s.Ip.REFERENCE_ORIGINAL,
                        position: c(t.favoriteChannels),
                        parentId: e ?? S.O8,
                    })),
                        _(t.favoriteChannels),
                        I(t.favoriteChannels, l),
                        (n = !0);
                }
            },
            u.Sb.FREQUENT_USER_ACTION,
        );
}
function p(t) {
    let e = T.A.getFavorite(t);
    null != e &&
        u.wc.updateAsync(
            "favorites",
            (i) => {
                if ((delete i.favoriteChannels[t], e.type === s.Ip.CATEGORY))
                    for (let e in i.favoriteChannels)
                        i.favoriteChannels[e].parentId === t && (i.favoriteChannels[e].parentId = S.O8);
                _(i.favoriteChannels);
            },
            u.Sb.INFREQUENT_USER_ACTION,
        );
}
function D(t, e) {
    T.A.isFavorite(t) &&
        u.wc.updateAsync(
            "favorites",
            (i) => {
                i.favoriteChannels[t].nickname = e ?? "";
            },
            u.Sb.INFREQUENT_USER_ACTION,
        );
}
function L(t) {
    let e = A.default.fromTimestamp(Date.now());
    u.wc.updateAsync(
        "favorites",
        (i) => {
            if (C(i.favoriteChannels)) return N(), !1;
            i.favoriteChannels[e] = s.wL.create({
                nickname: t,
                type: s.Ip.CATEGORY,
                position: c(i.favoriteChannels),
                parentId: S.O8,
            });
        },
        u.Sb.FREQUENT_USER_ACTION,
    );
}
function m(t) {
    p(t);
}
function R(t) {
    u.wc.updateAsync(
        "favorites",
        (e) => {
            for (let i of t) {
                let t = i.id;
                null != i.position && (e.favoriteChannels[t].position = i.position),
                    void 0 !== i.parent_id &&
                        ((e.favoriteChannels[t].parentId = i.parent_id ?? S.O8), I(e.favoriteChannels, t));
            }
        },
        u.Sb.FREQUENT_USER_ACTION,
    );
}
function y(t, e) {
    u.wc.updateAsync(
        "favorites",
        (i) => {
            (i.favoriteChannels[t].parentId = e ?? S.O8), I(i.favoriteChannels, t);
        },
        u.Sb.FREQUENT_USER_ACTION,
    );
}
function v() {
    u.wc.updateAsync(
        "favorites",
        (t) => {
            t.muted = !t.muted;
        },
        u.Sb.INFREQUENT_USER_ACTION,
    );
}
function f(t) {
    u.wc.updateAsync(
        "favorites",
        (e) => {
            e.guildVisible = a._t.create({ value: t });
        },
        u.Sb.INFREQUENT_USER_ACTION,
    );
}
