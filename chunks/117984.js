t.d(n, {
    CM: () => C,
    UT: () => v,
    _Z: () => A,
    kj: () => f,
    oC: () => h,
    s3: () => I,
    uA: () => E,
    xh: () => p,
}),
    t(388685);
var a = t(524437),
    i = t(675478),
    l = t(592125),
    r = t(496675),
    o = t(709054),
    d = t(853856),
    c = t(231338);
function s() {
    let e = d.Z.getFavoriteChannels(),
        n = 1;
    for (let t in e) n = Math.max(n, e[t].order);
    return n + 1;
}
function u(e) {
    for (let n in e) {
        let t = e[n];
        if (null == t) {
            delete e[n];
            continue;
        }
        if (t.type === a.Dd.CATEGORY) continue;
        let i = l.Z.getChannel(n);
        if (null == i || (!i.isPrivate() && !r.Z.can(c.Pl.VIEW_CHANNEL, i))) {
            delete e[n];
            continue;
        }
    }
}
function f(e, n) {
    d.Z.isFavorite(e) ||
        i.hW.updateAsync(
            "favorites",
            (t) => {
                (t.favoriteChannels[e] = a.aV.create({
                    nickname: "",
                    type: a.Dd.REFERENCE_ORIGINAL,
                    position: s(),
                    parentId: null != n ? n : "0",
                })),
                    u(t.favoriteChannels);
            },
            i.fy.FREQUENT_USER_ACTION,
        );
}
function h(e) {
    let n = d.Z.getFavorite(e);
    null != n &&
        i.hW.updateAsync(
            "favorites",
            (t) => {
                if ((delete t.favoriteChannels[e], n.type === a.Dd.CATEGORY))
                    for (let n in t.favoriteChannels)
                        t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = "0");
                u(t.favoriteChannels);
            },
            i.fy.INFREQUENT_USER_ACTION,
        );
}
function v(e, n) {
    d.Z.isFavorite(e) &&
        i.hW.updateAsync(
            "favorites",
            (t) => {
                t.favoriteChannels[e].nickname = null != n ? n : "";
            },
            i.fy.INFREQUENT_USER_ACTION,
        );
}
function C(e) {
    let n = o.default.fromTimestamp(Date.now());
    i.hW.updateAsync(
        "favorites",
        (t) => {
            t.favoriteChannels[n] = a.aV.create({
                nickname: e,
                type: a.Dd.CATEGORY,
                position: s(),
                parentId: "0",
            });
        },
        i.fy.FREQUENT_USER_ACTION,
    );
}
function p(e) {
    h(e);
}
function I(e) {
    i.hW.updateAsync(
        "favorites",
        (n) => {
            for (let a of e)
                if ((null != a.position && (n.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id)) {
                    var t;
                    n.favoriteChannels[a.id].parentId = null != (t = a.parent_id) ? t : "0";
                }
        },
        i.fy.FREQUENT_USER_ACTION,
    );
}
function E(e, n) {
    i.hW.updateAsync(
        "favorites",
        (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : "0";
        },
        i.fy.FREQUENT_USER_ACTION,
    );
}
function A() {
    i.hW.updateAsync(
        "favorites",
        (e) => {
            e.muted = !e.muted;
        },
        i.fy.INFREQUENT_USER_ACTION,
    );
}
