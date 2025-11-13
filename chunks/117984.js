t.d(n, {
    CM: () => v,
    UT: () => h,
    _Z: () => O,
    kj: () => f,
    oC: () => g,
    s3: () => b,
    uA: () => p,
    xh: () => _,
}),
    t(388685);
var i = t(524437),
    l = t(675478),
    r = t(592125),
    a = t(496675),
    o = t(709054),
    u = t(853856),
    s = t(231338);
function d() {
    let e = u.Z.getFavoriteChannels(),
        n = 1;
    for (let t in e) n = Math.max(n, e[t].order);
    return n + 1;
}
function c(e) {
    for (let n in e) {
        let t = e[n];
        if (null == t) {
            delete e[n];
            continue;
        }
        if (t.type === i.Dd.CATEGORY) continue;
        let l = r.Z.getChannel(n);
        if (null == l || (!l.isPrivate() && !a.Z.can(s.Pl.VIEW_CHANNEL, l))) {
            delete e[n];
            continue;
        }
    }
}
function f(e, n) {
    u.Z.isFavorite(e) ||
        l.hW.updateAsync(
            "favorites",
            (t) => {
                (t.favoriteChannels[e] = i.aV.create({
                    nickname: "",
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: d(),
                    parentId: null != n ? n : "0",
                })),
                    c(t.favoriteChannels);
            },
            l.fy.FREQUENT_USER_ACTION,
        );
}
function g(e) {
    let n = u.Z.getFavorite(e);
    null != n &&
        l.hW.updateAsync(
            "favorites",
            (t) => {
                if ((delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY))
                    for (let n in t.favoriteChannels)
                        t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = "0");
                c(t.favoriteChannels);
            },
            l.fy.INFREQUENT_USER_ACTION,
        );
}
function h(e, n) {
    u.Z.isFavorite(e) &&
        l.hW.updateAsync(
            "favorites",
            (t) => {
                t.favoriteChannels[e].nickname = null != n ? n : "";
            },
            l.fy.INFREQUENT_USER_ACTION,
        );
}
function v(e) {
    let n = o.default.fromTimestamp(Date.now());
    l.hW.updateAsync(
        "favorites",
        (t) => {
            t.favoriteChannels[n] = i.aV.create({
                nickname: e,
                type: i.Dd.CATEGORY,
                position: d(),
                parentId: "0",
            });
        },
        l.fy.FREQUENT_USER_ACTION,
    );
}
function _(e) {
    g(e);
}
function b(e) {
    l.hW.updateAsync(
        "favorites",
        (n) => {
            for (let i of e)
                if ((null != i.position && (n.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var t;
                    n.favoriteChannels[i.id].parentId = null != (t = i.parent_id) ? t : "0";
                }
        },
        l.fy.FREQUENT_USER_ACTION,
    );
}
function p(e, n) {
    l.hW.updateAsync(
        "favorites",
        (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : "0";
        },
        l.fy.FREQUENT_USER_ACTION,
    );
}
function O() {
    l.hW.updateAsync(
        "favorites",
        (e) => {
            e.muted = !e.muted;
        },
        l.fy.INFREQUENT_USER_ACTION,
    );
}
