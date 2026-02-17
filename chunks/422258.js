n.d(t, { JD: () => p, Jz: () => E, S_: () => C, fv: () => h, i_: () => v, od: () => _, p0: () => N, w6: () => g });
var i = n(873298),
    l = n(594061),
    a = n(734057),
    r = n(576705),
    u = n(661191),
    s = n(181079),
    d = n(349828),
    o = n(818348);
function c() {
    let e = s.A.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1;
}
function f(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === i.Ip.CATEGORY) continue;
        let l = a.A.getChannel(t);
        if (null == l || (!l.isPrivate() && !r.A.can(o.xB.VIEW_CHANNEL, l))) {
            delete e[t];
            continue;
        }
    }
}
function A(e, t) {
    let n = e[t];
    if (null == n || n.parentId === d.O8) return;
    let l = null != n.parentId ? e[n.parentId] : null;
    (null == l || l.type !== i.Ip.CATEGORY) && (n.parentId = d.O8);
}
function E(e, t) {
    s.A.isFavorite(e) ||
        l.wc.updateAsync(
            "favorites",
            (n) => {
                (n.favoriteChannels[e] = i.wL.create({
                    nickname: "",
                    type: i.Ip.REFERENCE_ORIGINAL,
                    position: c(),
                    parentId: t ?? d.O8,
                })),
                    f(n.favoriteChannels),
                    A(n.favoriteChannels, e);
            },
            l.Sb.FREQUENT_USER_ACTION,
        );
}
function v(e) {
    let t = s.A.getFavorite(e);
    null != t &&
        l.wc.updateAsync(
            "favorites",
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === i.Ip.CATEGORY))
                    for (let t in n.favoriteChannels)
                        n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = d.O8);
                f(n.favoriteChannels);
            },
            l.Sb.INFREQUENT_USER_ACTION,
        );
}
function g(e, t) {
    s.A.isFavorite(e) &&
        l.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            l.Sb.INFREQUENT_USER_ACTION,
        );
}
function _(e) {
    let t = u.default.fromTimestamp(Date.now());
    l.wc.updateAsync(
        "favorites",
        (n) => {
            n.favoriteChannels[t] = i.wL.create({ nickname: e, type: i.Ip.CATEGORY, position: c(), parentId: d.O8 });
        },
        l.Sb.FREQUENT_USER_ACTION,
    );
}
function h(e) {
    v(e);
}
function C(e) {
    l.wc.updateAsync(
        "favorites",
        (t) => {
            for (let n of e) {
                let e = n.id;
                null != n.position && (t.favoriteChannels[e].position = n.position),
                    void 0 !== n.parent_id &&
                        ((t.favoriteChannels[e].parentId = n.parent_id ?? d.O8), A(t.favoriteChannels, e));
            }
        },
        l.Sb.FREQUENT_USER_ACTION,
    );
}
function p(e, t) {
    l.wc.updateAsync(
        "favorites",
        (n) => {
            (n.favoriteChannels[e].parentId = t ?? d.O8), A(n.favoriteChannels, e);
        },
        l.Sb.FREQUENT_USER_ACTION,
    );
}
function N() {
    l.wc.updateAsync(
        "favorites",
        (e) => {
            e.muted = !e.muted;
        },
        l.Sb.INFREQUENT_USER_ACTION,
    );
}
