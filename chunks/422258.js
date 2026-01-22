n.d(e, {
    JD: () => E,
    Jz: () => g,
    S_: () => N,
    fv: () => f,
    i_: () => _,
    od: () => S,
    p0: () => h,
    w6: () => A,
}),
    n(896048);
var i = n(873298),
    r = n(594061),
    l = n(734057),
    a = n(576705),
    s = n(661191),
    o = n(181079),
    d = n(818348);
function u() {
    let t = o.A.getFavoriteChannels(),
        e = 1;
    for (let n in t) e = Math.max(e, t[n].order);
    return e + 1;
}
function c(t) {
    for (let e in t) {
        let n = t[e];
        if (null == n) {
            delete t[e];
            continue;
        }
        if (n.type === i.Ip.CATEGORY) continue;
        let r = l.A.getChannel(e);
        if (null == r || (!r.isPrivate() && !a.A.can(d.xB.VIEW_CHANNEL, r))) {
            delete t[e];
            continue;
        }
    }
}
function g(t, e) {
    o.A.isFavorite(t) ||
        r.wc.updateAsync(
            "favorites",
            (n) => {
                (n.favoriteChannels[t] = i.wL.create({
                    nickname: "",
                    type: i.Ip.REFERENCE_ORIGINAL,
                    position: u(),
                    parentId: null != e ? e : "0",
                })),
                    c(n.favoriteChannels);
            },
            r.Sb.FREQUENT_USER_ACTION,
        );
}
function _(t) {
    let e = o.A.getFavorite(t);
    null != e &&
        r.wc.updateAsync(
            "favorites",
            (n) => {
                if ((delete n.favoriteChannels[t], e.type === i.Ip.CATEGORY))
                    for (let e in n.favoriteChannels)
                        n.favoriteChannels[e].parentId === t && (n.favoriteChannels[e].parentId = "0");
                c(n.favoriteChannels);
            },
            r.Sb.INFREQUENT_USER_ACTION,
        );
}
function A(t, e) {
    o.A.isFavorite(t) &&
        r.wc.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[t].nickname = null != e ? e : "";
            },
            r.Sb.INFREQUENT_USER_ACTION,
        );
}
function S(t) {
    let e = s.default.fromTimestamp(Date.now());
    r.wc.updateAsync(
        "favorites",
        (n) => {
            n.favoriteChannels[e] = i.wL.create({
                nickname: t,
                type: i.Ip.CATEGORY,
                position: u(),
                parentId: "0",
            });
        },
        r.Sb.FREQUENT_USER_ACTION,
    );
}
function f(t) {
    _(t);
}
function N(t) {
    r.wc.updateAsync(
        "favorites",
        (e) => {
            for (let i of t)
                if ((null != i.position && (e.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var n;
                    e.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : "0";
                }
        },
        r.Sb.FREQUENT_USER_ACTION,
    );
}
function E(t, e) {
    r.wc.updateAsync(
        "favorites",
        (n) => {
            n.favoriteChannels[t].parentId = null != e ? e : "0";
        },
        r.Sb.FREQUENT_USER_ACTION,
    );
}
function h() {
    r.wc.updateAsync(
        "favorites",
        (t) => {
            t.muted = !t.muted;
        },
        r.Sb.INFREQUENT_USER_ACTION,
    );
}
