t.d(e, {
    CM: () => p,
    UT: () => v,
    _Z: () => b,
    kj: () => f,
    oC: () => h,
    s3: () => Z,
    uA: () => C,
    xh: () => g
}),
    t(388685);
var i = t(524437),
    r = t(675478),
    a = t(592125),
    l = t(496675),
    o = t(709054),
    s = t(853856),
    d = t(231338);
function u() {
    let n = s.Z.getFavoriteChannels(),
        e = 1;
    for (let t in n) e = Math.max(e, n[t].order);
    return e + 1;
}
function c(n) {
    for (let e in n) {
        let t = n[e];
        if (null == t) {
            delete n[e];
            continue;
        }
        if (t.type === i.Dd.CATEGORY) continue;
        let r = a.Z.getChannel(e);
        if (null == r || (!r.isPrivate() && !l.Z.can(d.Pl.VIEW_CHANNEL, r))) {
            delete n[e];
            continue;
        }
    }
}
function f(n, e) {
    s.Z.isFavorite(n) ||
        r.hW.updateAsync(
            'favorites',
            (t) => {
                (t.favoriteChannels[n] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: u(),
                    parentId: null != e ? e : '0'
                })),
                    c(t.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION
        );
}
function h(n) {
    let e = s.Z.getFavorite(n);
    null != e &&
        r.hW.updateAsync(
            'favorites',
            (t) => {
                if ((delete t.favoriteChannels[n], e.type === i.Dd.CATEGORY)) for (let e in t.favoriteChannels) t.favoriteChannels[e].parentId === n && (t.favoriteChannels[e].parentId = '0');
                c(t.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function v(n, e) {
    s.Z.isFavorite(n) &&
        r.hW.updateAsync(
            'favorites',
            (t) => {
                t.favoriteChannels[n].nickname = null != e ? e : '';
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function p(n) {
    let e = o.default.fromTimestamp(Date.now());
    r.hW.updateAsync(
        'favorites',
        (t) => {
            t.favoriteChannels[e] = i.aV.create({
                nickname: n,
                type: i.Dd.CATEGORY,
                position: u(),
                parentId: '0'
            });
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function g(n) {
    h(n);
}
function Z(n) {
    r.hW.updateAsync(
        'favorites',
        (e) => {
            for (let i of n)
                if ((null != i.position && (e.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var t;
                    e.favoriteChannels[i.id].parentId = null != (t = i.parent_id) ? t : '0';
                }
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function C(n, e) {
    r.hW.updateAsync(
        'favorites',
        (t) => {
            t.favoriteChannels[n].parentId = null != e ? e : '0';
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function b() {
    r.hW.updateAsync(
        'favorites',
        (n) => {
            n.muted = !n.muted;
        },
        r.fy.INFREQUENT_USER_ACTION
    );
}
