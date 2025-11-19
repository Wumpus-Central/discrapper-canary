e.d(n, {
    CM: () => v,
    UT: () => g,
    _Z: () => p,
    kj: () => h,
    oC: () => f,
    s3: () => m,
    uA: () => b,
    xh: () => Z,
}),
    e(388685);
var i = e(524437),
    a = e(675478),
    l = e(592125),
    r = e(496675),
    s = e(709054),
    o = e(853856),
    d = e(231338);
function u() {
    let t = o.Z.getFavoriteChannels(),
        n = 1;
    for (let e in t) n = Math.max(n, t[e].order);
    return n + 1;
}
function c(t) {
    for (let n in t) {
        let e = t[n];
        if (null == e) {
            delete t[n];
            continue;
        }
        if (e.type === i.Dd.CATEGORY) continue;
        let a = l.Z.getChannel(n);
        if (null == a || (!a.isPrivate() && !r.Z.can(d.Pl.VIEW_CHANNEL, a))) {
            delete t[n];
            continue;
        }
    }
}
function h(t, n) {
    o.Z.isFavorite(t) ||
        a.hW.updateAsync(
            "favorites",
            (e) => {
                (e.favoriteChannels[t] = i.aV.create({
                    nickname: "",
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: u(),
                    parentId: null != n ? n : "0",
                })),
                    c(e.favoriteChannels);
            },
            a.fy.FREQUENT_USER_ACTION,
        );
}
function f(t) {
    let n = o.Z.getFavorite(t);
    null != n &&
        a.hW.updateAsync(
            "favorites",
            (e) => {
                if ((delete e.favoriteChannels[t], n.type === i.Dd.CATEGORY))
                    for (let n in e.favoriteChannels)
                        e.favoriteChannels[n].parentId === t && (e.favoriteChannels[n].parentId = "0");
                c(e.favoriteChannels);
            },
            a.fy.INFREQUENT_USER_ACTION,
        );
}
function g(t, n) {
    o.Z.isFavorite(t) &&
        a.hW.updateAsync(
            "favorites",
            (e) => {
                e.favoriteChannels[t].nickname = null != n ? n : "";
            },
            a.fy.INFREQUENT_USER_ACTION,
        );
}
function v(t) {
    let n = s.default.fromTimestamp(Date.now());
    a.hW.updateAsync(
        "favorites",
        (e) => {
            e.favoriteChannels[n] = i.aV.create({
                nickname: t,
                type: i.Dd.CATEGORY,
                position: u(),
                parentId: "0",
            });
        },
        a.fy.FREQUENT_USER_ACTION,
    );
}
function Z(t) {
    f(t);
}
function m(t) {
    a.hW.updateAsync(
        "favorites",
        (n) => {
            for (let i of t)
                if ((null != i.position && (n.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var e;
                    n.favoriteChannels[i.id].parentId = null != (e = i.parent_id) ? e : "0";
                }
        },
        a.fy.FREQUENT_USER_ACTION,
    );
}
function b(t, n) {
    a.hW.updateAsync(
        "favorites",
        (e) => {
            e.favoriteChannels[t].parentId = null != n ? n : "0";
        },
        a.fy.FREQUENT_USER_ACTION,
    );
}
function p() {
    a.hW.updateAsync(
        "favorites",
        (t) => {
            t.muted = !t.muted;
        },
        a.fy.INFREQUENT_USER_ACTION,
    );
}
