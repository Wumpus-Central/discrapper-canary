n.d(t, {
    CM: () => h,
    UT: () => v,
    _Z: () => m,
    kj: () => f,
    oC: () => p,
    s3: () => y,
    uA: () => O,
    xh: () => E
}),
    n(388685);
var i = n(524437),
    r = n(675478),
    l = n(592125),
    a = n(496675),
    o = n(709054),
    u = n(853856),
    d = n(231338);
function s() {
    let e = u.Z.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1;
}
function c(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === i.Dd.CATEGORY) continue;
        let r = l.Z.getChannel(t);
        if (null == r || (!r.isPrivate() && !a.Z.can(d.Pl.VIEW_CHANNEL, r))) {
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
                    position: s(),
                    parentId: null != t ? t : '0'
                })),
                    c(n.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION
        );
}
function p(e) {
    let t = u.Z.getFavorite(e);
    null != t &&
        r.hW.updateAsync(
            'favorites',
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY)) for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = '0');
                c(n.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function v(e, t) {
    u.Z.isFavorite(e) &&
        r.hW.updateAsync(
            'favorites',
            (n) => {
                n.favoriteChannels[e].nickname = null != t ? t : '';
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function h(e) {
    let t = o.default.fromTimestamp(Date.now());
    r.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[t] = i.aV.create({
                nickname: e,
                type: i.Dd.CATEGORY,
                position: s(),
                parentId: '0'
            });
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function E(e) {
    p(e);
}
function y(e) {
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
function O(e, t) {
    r.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : '0';
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function m() {
    r.hW.updateAsync(
        'favorites',
        (e) => {
            e.muted = !e.muted;
        },
        r.fy.INFREQUENT_USER_ACTION
    );
}
