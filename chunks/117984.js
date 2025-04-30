n.d(t, {
    CM: () => O,
    UT: () => p,
    _Z: () => _,
    kj: () => f,
    oC: () => g,
    s3: () => v,
    uA: () => b,
    xh: () => E
}),
    n(388685);
var i = n(524437),
    l = n(675478),
    r = n(592125),
    a = n(496675),
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
        if (n.type === i.Dd.CATEGORY) continue;
        let l = r.Z.getChannel(t);
        if (null == l || (!l.isPrivate() && !a.Z.can(c.Pl.VIEW_CHANNEL, l))) {
            delete e[t];
            continue;
        }
    }
}
function f(e, t) {
    u.Z.isFavorite(e) ||
        l.hW.updateAsync(
            'favorites',
            (n) => {
                (n.favoriteChannels[e] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: s(),
                    parentId: null != t ? t : '0'
                })),
                    d(n.favoriteChannels);
            },
            l.fy.FREQUENT_USER_ACTION
        );
}
function g(e) {
    let t = u.Z.getFavorite(e);
    null != t &&
        l.hW.updateAsync(
            'favorites',
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY)) for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = '0');
                d(n.favoriteChannels);
            },
            l.fy.INFREQUENT_USER_ACTION
        );
}
function p(e, t) {
    u.Z.isFavorite(e) &&
        l.hW.updateAsync(
            'favorites',
            (n) => {
                n.favoriteChannels[e].nickname = null != t ? t : '';
            },
            l.fy.INFREQUENT_USER_ACTION
        );
}
function O(e) {
    let t = o.default.fromTimestamp(Date.now());
    l.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[t] = i.aV.create({
                nickname: e,
                type: i.Dd.CATEGORY,
                position: s(),
                parentId: '0'
            });
        },
        l.fy.FREQUENT_USER_ACTION
    );
}
function E(e) {
    g(e);
}
function v(e) {
    l.hW.updateAsync(
        'favorites',
        (t) => {
            for (let i of e)
                if ((null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var n;
                    t.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : '0';
                }
        },
        l.fy.FREQUENT_USER_ACTION
    );
}
function b(e, t) {
    l.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : '0';
        },
        l.fy.FREQUENT_USER_ACTION
    );
}
function _() {
    l.hW.updateAsync(
        'favorites',
        (e) => {
            e.muted = !e.muted;
        },
        l.fy.INFREQUENT_USER_ACTION
    );
}
