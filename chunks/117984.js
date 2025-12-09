n.d(t, {
    CM: () => O,
    UT: () => g,
    _Z: () => h,
    kj: () => f,
    oC: () => E,
    s3: () => v,
    uA: () => Z,
    xh: () => p,
}),
    n(388685);
var i = n(524437),
    r = n(675478),
    l = n(592125),
    u = n(496675),
    a = n(709054),
    o = n(853856),
    c = n(231338);
function d() {
    let e = o.Z.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1;
}
function s(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === i.Dd.CATEGORY) continue;
        let r = l.Z.getChannel(t);
        if (null == r || (!r.isPrivate() && !u.Z.can(c.Pl.VIEW_CHANNEL, r))) {
            delete e[t];
            continue;
        }
    }
}
function f(e, t) {
    o.Z.isFavorite(e) ||
        r.hW.updateAsync(
            "favorites",
            (n) => {
                (n.favoriteChannels[e] = i.aV.create({
                    nickname: "",
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: d(),
                    parentId: null != t ? t : "0",
                })),
                    s(n.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
        );
}
function E(e) {
    let t = o.Z.getFavorite(e);
    null != t &&
        r.hW.updateAsync(
            "favorites",
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY))
                    for (let t in n.favoriteChannels)
                        n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                s(n.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
        );
}
function g(e, t) {
    o.Z.isFavorite(e) &&
        r.hW.updateAsync(
            "favorites",
            (n) => {
                n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
        );
}
function O(e) {
    let t = a.default.fromTimestamp(Date.now());
    r.hW.updateAsync(
        "favorites",
        (n) => {
            n.favoriteChannels[t] = i.aV.create({
                nickname: e,
                type: i.Dd.CATEGORY,
                position: d(),
                parentId: "0",
            });
        },
        r.fy.FREQUENT_USER_ACTION,
    );
}
function p(e) {
    E(e);
}
function v(e) {
    r.hW.updateAsync(
        "favorites",
        (t) => {
            for (let i of e)
                if ((null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var n;
                    t.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : "0";
                }
        },
        r.fy.FREQUENT_USER_ACTION,
    );
}
function Z(e, t) {
    r.hW.updateAsync(
        "favorites",
        (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
        },
        r.fy.FREQUENT_USER_ACTION,
    );
}
function h() {
    r.hW.updateAsync(
        "favorites",
        (e) => {
            e.muted = !e.muted;
        },
        r.fy.INFREQUENT_USER_ACTION,
    );
}
