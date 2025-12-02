n.d(t, {
    CM: () => p,
    UT: () => v,
    _Z: () => R,
    kj: () => c,
    oC: () => _,
    s3: () => h,
    uA: () => C,
    xh: () => g,
}),
    n(388685);
var i = n(524437),
    a = n(675478),
    l = n(592125),
    r = n(496675),
    u = n(709054),
    o = n(853856),
    d = n(231338);
function s() {
    let e = o.Z.getFavoriteChannels(),
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
        if (n.type === i.Dd.CATEGORY) continue;
        let a = l.Z.getChannel(t);
        if (null == a || (!a.isPrivate() && !r.Z.can(d.Pl.VIEW_CHANNEL, a))) {
            delete e[t];
            continue;
        }
    }
}
function c(e, t) {
    o.Z.isFavorite(e) ||
        a.hW.updateAsync(
            "favorites",
            (n) => {
                (n.favoriteChannels[e] = i.aV.create({
                    nickname: "",
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: s(),
                    parentId: null != t ? t : "0",
                })),
                    f(n.favoriteChannels);
            },
            a.fy.FREQUENT_USER_ACTION,
        );
}
function _(e) {
    let t = o.Z.getFavorite(e);
    null != t &&
        a.hW.updateAsync(
            "favorites",
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY))
                    for (let t in n.favoriteChannels)
                        n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                f(n.favoriteChannels);
            },
            a.fy.INFREQUENT_USER_ACTION,
        );
}
function v(e, t) {
    o.Z.isFavorite(e) &&
        a.hW.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            a.fy.INFREQUENT_USER_ACTION,
        );
}
function p(e) {
    let t = u.default.fromTimestamp(Date.now());
    a.hW.updateAsync(
        "favorites",
        (n) => {
            n.favoriteChannels[t] = i.aV.create({
                nickname: e,
                type: i.Dd.CATEGORY,
                position: s(),
                parentId: "0",
            });
        },
        a.fy.FREQUENT_USER_ACTION,
    );
}
function g(e) {
    _(e);
}
function h(e) {
    a.hW.updateAsync(
        "favorites",
        (t) => {
            for (let i of e)
                if ((null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var n;
                    t.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : "0";
                }
        },
        a.fy.FREQUENT_USER_ACTION,
    );
}
function C(e, t) {
    a.hW.updateAsync(
        "favorites",
        (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
        },
        a.fy.FREQUENT_USER_ACTION,
    );
}
function R() {
    a.hW.updateAsync(
        "favorites",
        (e) => {
            e.muted = !e.muted;
        },
        a.fy.INFREQUENT_USER_ACTION,
    );
}
