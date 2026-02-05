n.d(t, { JD: () => h, Jz: () => c, S_: () => v, fv: () => _, i_: () => f, od: () => g, p0: () => C, w6: () => E });
var i = n(873298),
    l = n(594061),
    r = n(734057),
    a = n(576705),
    u = n(661191),
    d = n(181079),
    s = n(818348);
function o() {
    let e = d.A.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1;
}
function A(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === i.Ip.CATEGORY) continue;
        let l = r.A.getChannel(t);
        if (null == l || (!l.isPrivate() && !a.A.can(s.xB.VIEW_CHANNEL, l))) {
            delete e[t];
            continue;
        }
    }
}
function c(e, t) {
    d.A.isFavorite(e) ||
        l.wc.updateAsync(
            "favorites",
            (n) => {
                (n.favoriteChannels[e] = i.wL.create({
                    nickname: "",
                    type: i.Ip.REFERENCE_ORIGINAL,
                    position: o(),
                    parentId: t ?? "0",
                })),
                    A(n.favoriteChannels);
            },
            l.Sb.FREQUENT_USER_ACTION,
        );
}
function f(e) {
    let t = d.A.getFavorite(e);
    null != t &&
        l.wc.updateAsync(
            "favorites",
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === i.Ip.CATEGORY))
                    for (let t in n.favoriteChannels)
                        n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                A(n.favoriteChannels);
            },
            l.Sb.INFREQUENT_USER_ACTION,
        );
}
function E(e, t) {
    d.A.isFavorite(e) &&
        l.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
            l.Sb.INFREQUENT_USER_ACTION,
        );
}
function g(e) {
    let t = u.default.fromTimestamp(Date.now());
    l.wc.updateAsync(
        "favorites",
        (n) => {
            n.favoriteChannels[t] = i.wL.create({ nickname: e, type: i.Ip.CATEGORY, position: o(), parentId: "0" });
        },
        l.Sb.FREQUENT_USER_ACTION,
    );
}
function _(e) {
    f(e);
}
function v(e) {
    l.wc.updateAsync(
        "favorites",
        (t) => {
            for (let n of e)
                null != n.position && (t.favoriteChannels[n.id].position = n.position),
                    void 0 !== n.parent_id && (t.favoriteChannels[n.id].parentId = n.parent_id ?? "0");
        },
        l.Sb.FREQUENT_USER_ACTION,
    );
}
function h(e, t) {
    l.wc.updateAsync(
        "favorites",
        (n) => {
            n.favoriteChannels[e].parentId = t ?? "0";
        },
        l.Sb.FREQUENT_USER_ACTION,
    );
}
function C() {
    l.wc.updateAsync(
        "favorites",
        (e) => {
            e.muted = !e.muted;
        },
        l.Sb.INFREQUENT_USER_ACTION,
    );
}
