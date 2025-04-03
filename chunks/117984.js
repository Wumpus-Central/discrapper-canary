n.d(t, {
    CM: () => p,
    UT: () => O,
    _Z: () => _,
    kj: () => f,
    oC: () => g,
    s3: () => N,
    uA: () => b,
    xh: () => E
}),
    n(47120);
var i = n(524437),
    r = n(675478),
    a = n(592125),
    l = n(496675),
    o = n(709054),
    u = n(853856),
    s = n(231338);
function c() {
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
        let r = a.Z.getChannel(t);
        if (null == r || (!r.isPrivate() && !l.Z.can(s.Pl.VIEW_CHANNEL, r))) {
            delete e[t];
            continue;
        }
    }
}
function f(e, t) {
    u.Z.isFavorite(e) ||
        r.hW.updateAsync(
            'favorites',
            (n) => {
                (n.favoriteChannels[e] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: c(),
                    parentId: null != t ? t : '0'
                })),
                    d(n.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION
        );
}
function g(e) {
    let t = u.Z.getFavorite(e);
    null != t &&
        r.hW.updateAsync(
            'favorites',
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY)) for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = '0');
                d(n.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function O(e, t) {
    u.Z.isFavorite(e) &&
        r.hW.updateAsync(
            'favorites',
            (n) => {
                n.favoriteChannels[e].nickname = null != t ? t : '';
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function p(e) {
    let t = o.default.fromTimestamp(Date.now());
    r.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[t] = i.aV.create({
                nickname: e,
                type: i.Dd.CATEGORY,
                position: c(),
                parentId: '0'
            });
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function E(e) {
    g(e);
}
function N(e) {
    r.hW.updateAsync(
        'favorites',
        (t) => {
            for (let i of e)
                if ((null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var n;
                    t.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : '0';
                }
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function b(e, t) {
    r.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : '0';
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function _() {
    r.hW.updateAsync(
        'favorites',
        (e) => {
            e.muted = !e.muted;
        },
        r.fy.INFREQUENT_USER_ACTION
    );
}
