(e.d(n, {
    CM: () => g,
    UT: () => v,
    _Z: () => m,
    kj: () => f,
    oC: () => h,
    s3: () => b,
    uA: () => p,
    xh: () => Z
}),
    e(388685));
var i = e(524437),
    r = e(675478),
    l = e(592125),
    a = e(496675),
    o = e(709054),
    s = e(853856),
    d = e(231338);
function u() {
    let t = s.Z.getFavoriteChannels(),
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
        let r = l.Z.getChannel(n);
        if (null == r || (!r.isPrivate() && !a.Z.can(d.Pl.VIEW_CHANNEL, r))) {
            delete t[n];
            continue;
        }
    }
}
function f(t, n) {
    s.Z.isFavorite(t) ||
        r.hW.updateAsync(
            'favorites',
            (e) => {
                ((e.favoriteChannels[t] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: u(),
                    parentId: null != n ? n : '0'
                })),
                    c(e.favoriteChannels));
            },
            r.fy.FREQUENT_USER_ACTION
        );
}
function h(t) {
    let n = s.Z.getFavorite(t);
    null != n &&
        r.hW.updateAsync(
            'favorites',
            (e) => {
                if ((delete e.favoriteChannels[t], n.type === i.Dd.CATEGORY)) for (let n in e.favoriteChannels) e.favoriteChannels[n].parentId === t && (e.favoriteChannels[n].parentId = '0');
                c(e.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function v(t, n) {
    s.Z.isFavorite(t) &&
        r.hW.updateAsync(
            'favorites',
            (e) => {
                e.favoriteChannels[t].nickname = null != n ? n : '';
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function g(t) {
    let n = o.default.fromTimestamp(Date.now());
    r.hW.updateAsync(
        'favorites',
        (e) => {
            e.favoriteChannels[n] = i.aV.create({
                nickname: t,
                type: i.Dd.CATEGORY,
                position: u(),
                parentId: '0'
            });
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function Z(t) {
    h(t);
}
function b(t) {
    r.hW.updateAsync(
        'favorites',
        (n) => {
            for (let i of t)
                if ((null != i.position && (n.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var e;
                    n.favoriteChannels[i.id].parentId = null != (e = i.parent_id) ? e : '0';
                }
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function p(t, n) {
    r.hW.updateAsync(
        'favorites',
        (e) => {
            e.favoriteChannels[t].parentId = null != n ? n : '0';
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function m() {
    r.hW.updateAsync(
        'favorites',
        (t) => {
            t.muted = !t.muted;
        },
        r.fy.INFREQUENT_USER_ACTION
    );
}
