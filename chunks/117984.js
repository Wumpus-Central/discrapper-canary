n.d(t, {
    CM: () => p,
    UT: () => E,
    _Z: () => A,
    kj: () => f,
    oC: () => _,
    s3: () => N,
    uA: () => T,
    xh: () => m
}),
    n(388685);
var r = n(524437),
    i = n(675478),
    a = n(592125),
    l = n(496675),
    o = n(709054),
    u = n(853856),
    c = n(231338);
function s() {
    let e = u.Z.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1;
}
function d(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === r.Dd.CATEGORY) continue;
        let i = a.Z.getChannel(t);
        if (null == i || (!i.isPrivate() && !l.Z.can(c.Pl.VIEW_CHANNEL, i))) {
            delete e[t];
            continue;
        }
    }
}
function f(e, t) {
    u.Z.isFavorite(e) ||
        i.hW.updateAsync(
            'favorites',
            (n) => {
                (n.favoriteChannels[e] = r.aV.create({
                    nickname: '',
                    type: r.Dd.REFERENCE_ORIGINAL,
                    position: s(),
                    parentId: null != t ? t : '0'
                })),
                    d(n.favoriteChannels);
            },
            i.fy.FREQUENT_USER_ACTION
        );
}
function _(e) {
    let t = u.Z.getFavorite(e);
    null != t &&
        i.hW.updateAsync(
            'favorites',
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === r.Dd.CATEGORY)) for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = '0');
                d(n.favoriteChannels);
            },
            i.fy.INFREQUENT_USER_ACTION
        );
}
function E(e, t) {
    u.Z.isFavorite(e) &&
        i.hW.updateAsync(
            'favorites',
            (n) => {
                n.favoriteChannels[e].nickname = null != t ? t : '';
            },
            i.fy.INFREQUENT_USER_ACTION
        );
}
function p(e) {
    let t = o.default.fromTimestamp(Date.now());
    i.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[t] = r.aV.create({
                nickname: e,
                type: r.Dd.CATEGORY,
                position: s(),
                parentId: '0'
            });
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function m(e) {
    _(e);
}
function N(e) {
    i.hW.updateAsync(
        'favorites',
        (t) => {
            for (let r of e)
                if ((null != r.position && (t.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id)) {
                    var n;
                    t.favoriteChannels[r.id].parentId = null != (n = r.parent_id) ? n : '0';
                }
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function T(e, t) {
    i.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : '0';
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function A() {
    i.hW.updateAsync(
        'favorites',
        (e) => {
            e.muted = !e.muted;
        },
        i.fy.INFREQUENT_USER_ACTION
    );
}
