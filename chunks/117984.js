n.d(e, {
    CM: () => p,
    UT: () => E,
    _Z: () => A,
    kj: () => f,
    oC: () => _,
    s3: () => h,
    uA: () => N,
    xh: () => m
}),
    n(388685);
var r = n(524437),
    i = n(675478),
    l = n(592125),
    a = n(496675),
    o = n(709054),
    u = n(853856),
    c = n(231338);
function s() {
    let t = u.Z.getFavoriteChannels(),
        e = 1;
    for (let n in t) e = Math.max(e, t[n].order);
    return e + 1;
}
function d(t) {
    for (let e in t) {
        let n = t[e];
        if (null == n) {
            delete t[e];
            continue;
        }
        if (n.type === r.Dd.CATEGORY) continue;
        let i = l.Z.getChannel(e);
        if (null == i || (!i.isPrivate() && !a.Z.can(c.Pl.VIEW_CHANNEL, i))) {
            delete t[e];
            continue;
        }
    }
}
function f(t, e) {
    u.Z.isFavorite(t) ||
        i.hW.updateAsync(
            'favorites',
            (n) => {
                (n.favoriteChannels[t] = r.aV.create({
                    nickname: '',
                    type: r.Dd.REFERENCE_ORIGINAL,
                    position: s(),
                    parentId: null != e ? e : '0'
                })),
                    d(n.favoriteChannels);
            },
            i.fy.FREQUENT_USER_ACTION
        );
}
function _(t) {
    let e = u.Z.getFavorite(t);
    null != e &&
        i.hW.updateAsync(
            'favorites',
            (n) => {
                if ((delete n.favoriteChannels[t], e.type === r.Dd.CATEGORY)) for (let e in n.favoriteChannels) n.favoriteChannels[e].parentId === t && (n.favoriteChannels[e].parentId = '0');
                d(n.favoriteChannels);
            },
            i.fy.INFREQUENT_USER_ACTION
        );
}
function E(t, e) {
    u.Z.isFavorite(t) &&
        i.hW.updateAsync(
            'favorites',
            (n) => {
                n.favoriteChannels[t].nickname = null != e ? e : '';
            },
            i.fy.INFREQUENT_USER_ACTION
        );
}
function p(t) {
    let e = o.default.fromTimestamp(Date.now());
    i.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[e] = r.aV.create({
                nickname: t,
                type: r.Dd.CATEGORY,
                position: s(),
                parentId: '0'
            });
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function m(t) {
    _(t);
}
function h(t) {
    i.hW.updateAsync(
        'favorites',
        (e) => {
            for (let r of t)
                if ((null != r.position && (e.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id)) {
                    var n;
                    e.favoriteChannels[r.id].parentId = null != (n = r.parent_id) ? n : '0';
                }
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function N(t, e) {
    i.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[t].parentId = null != e ? e : '0';
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function A() {
    i.hW.updateAsync(
        'favorites',
        (t) => {
            t.muted = !t.muted;
        },
        i.fy.INFREQUENT_USER_ACTION
    );
}
