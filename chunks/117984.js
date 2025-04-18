t.d(n, {
    CM: () => p,
    UT: () => v,
    _Z: () => b,
    kj: () => f,
    oC: () => h,
    s3: () => Z,
    uA: () => O,
    xh: () => y
}),
    t(388685);
var r = t(524437),
    i = t(675478),
    a = t(592125),
    o = t(496675),
    l = t(709054),
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
        if (t.type === r.Dd.CATEGORY) continue;
        let i = a.Z.getChannel(n);
        if (null == i || (!i.isPrivate() && !o.Z.can(c.Pl.VIEW_CHANNEL, i))) {
            delete e[n];
            continue;
        }
    }
}
function f(e, n) {
    d.Z.isFavorite(e) ||
        i.hW.updateAsync(
            'favorites',
            (t) => {
                (t.favoriteChannels[e] = r.aV.create({
                    nickname: '',
                    type: r.Dd.REFERENCE_ORIGINAL,
                    position: s(),
                    parentId: null != n ? n : '0'
                })),
                    u(t.favoriteChannels);
            },
            i.fy.FREQUENT_USER_ACTION
        );
}
function h(e) {
    let n = d.Z.getFavorite(e);
    null != n &&
        i.hW.updateAsync(
            'favorites',
            (t) => {
                if ((delete t.favoriteChannels[e], n.type === r.Dd.CATEGORY)) for (let n in t.favoriteChannels) t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = '0');
                u(t.favoriteChannels);
            },
            i.fy.INFREQUENT_USER_ACTION
        );
}
function v(e, n) {
    d.Z.isFavorite(e) &&
        i.hW.updateAsync(
            'favorites',
            (t) => {
                t.favoriteChannels[e].nickname = null != n ? n : '';
            },
            i.fy.INFREQUENT_USER_ACTION
        );
}
function p(e) {
    let n = l.default.fromTimestamp(Date.now());
    i.hW.updateAsync(
        'favorites',
        (t) => {
            t.favoriteChannels[n] = r.aV.create({
                nickname: e,
                type: r.Dd.CATEGORY,
                position: s(),
                parentId: '0'
            });
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function y(e) {
    h(e);
}
function Z(e) {
    i.hW.updateAsync(
        'favorites',
        (n) => {
            for (let r of e)
                if ((null != r.position && (n.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id)) {
                    var t;
                    n.favoriteChannels[r.id].parentId = null != (t = r.parent_id) ? t : '0';
                }
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function O(e, n) {
    i.hW.updateAsync(
        'favorites',
        (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : '0';
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function b() {
    i.hW.updateAsync(
        'favorites',
        (e) => {
            e.muted = !e.muted;
        },
        i.fy.INFREQUENT_USER_ACTION
    );
}
