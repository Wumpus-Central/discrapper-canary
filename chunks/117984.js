t.d(n, {
    CM: () => g,
    UT: () => v,
    _Z: () => _,
    kj: () => f,
    oC: () => h,
    s3: () => b,
    uA: () => Z,
    xh: () => p
}),
    t(388685);
var i = t(524437),
    r = t(675478),
    a = t(592125),
    l = t(496675),
    o = t(709054),
    d = t(853856),
    u = t(231338);
function s() {
    let e = d.Z.getFavoriteChannels(),
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
        let r = a.Z.getChannel(n);
        if (null == r || (!r.isPrivate() && !l.Z.can(u.Pl.VIEW_CHANNEL, r))) {
            delete e[n];
            continue;
        }
    }
}
function f(e, n) {
    d.Z.isFavorite(e) ||
        r.hW.updateAsync(
            'favorites',
            (t) => {
                (t.favoriteChannels[e] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: s(),
                    parentId: null != n ? n : '0'
                })),
                    c(t.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION
        );
}
function h(e) {
    let n = d.Z.getFavorite(e);
    null != n &&
        r.hW.updateAsync(
            'favorites',
            (t) => {
                if ((delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY)) for (let n in t.favoriteChannels) t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = '0');
                c(t.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function v(e, n) {
    d.Z.isFavorite(e) &&
        r.hW.updateAsync(
            'favorites',
            (t) => {
                t.favoriteChannels[e].nickname = null != n ? n : '';
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function g(e) {
    let n = o.default.fromTimestamp(Date.now());
    r.hW.updateAsync(
        'favorites',
        (t) => {
            t.favoriteChannels[n] = i.aV.create({
                nickname: e,
                type: i.Dd.CATEGORY,
                position: s(),
                parentId: '0'
            });
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function p(e) {
    h(e);
}
function b(e) {
    r.hW.updateAsync(
        'favorites',
        (n) => {
            for (let i of e)
                if ((null != i.position && (n.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var t;
                    n.favoriteChannels[i.id].parentId = null != (t = i.parent_id) ? t : '0';
                }
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function Z(e, n) {
    r.hW.updateAsync(
        'favorites',
        (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : '0';
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
