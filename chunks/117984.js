(n.d(e, {
    CM: () => S,
    UT: () => f,
    _Z: () => b,
    kj: () => g,
    oC: () => _,
    s3: () => h,
    uA: () => N,
    xh: () => E
}),
    n(388685));
var i = n(524437),
    l = n(675478),
    a = n(592125),
    s = n(496675),
    r = n(709054),
    o = n(853856),
    d = n(231338);
function c() {
    let t = o.Z.getFavoriteChannels(),
        e = 1;
    for (let n in t) e = Math.max(e, t[n].order);
    return e + 1;
}
function u(t) {
    for (let e in t) {
        let n = t[e];
        if (null == n) {
            delete t[e];
            continue;
        }
        if (n.type === i.Dd.CATEGORY) continue;
        let l = a.Z.getChannel(e);
        if (null == l || (!l.isPrivate() && !s.Z.can(d.Pl.VIEW_CHANNEL, l))) {
            delete t[e];
            continue;
        }
    }
}
function g(t, e) {
    o.Z.isFavorite(t) ||
        l.hW.updateAsync(
            'favorites',
            (n) => {
                ((n.favoriteChannels[t] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: c(),
                    parentId: null != e ? e : '0'
                })),
                    u(n.favoriteChannels));
            },
            l.fy.FREQUENT_USER_ACTION
        );
}
function _(t) {
    let e = o.Z.getFavorite(t);
    null != e &&
        l.hW.updateAsync(
            'favorites',
            (n) => {
                if ((delete n.favoriteChannels[t], e.type === i.Dd.CATEGORY)) for (let e in n.favoriteChannels) n.favoriteChannels[e].parentId === t && (n.favoriteChannels[e].parentId = '0');
                u(n.favoriteChannels);
            },
            l.fy.INFREQUENT_USER_ACTION
        );
}
function f(t, e) {
    o.Z.isFavorite(t) &&
        l.hW.updateAsync(
            'favorites',
            (n) => {
                n.favoriteChannels[t].nickname = null != e ? e : '';
            },
            l.fy.INFREQUENT_USER_ACTION
        );
}
function S(t) {
    let e = r.default.fromTimestamp(Date.now());
    l.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[e] = i.aV.create({
                nickname: t,
                type: i.Dd.CATEGORY,
                position: c(),
                parentId: '0'
            });
        },
        l.fy.FREQUENT_USER_ACTION
    );
}
function E(t) {
    _(t);
}
function h(t) {
    l.hW.updateAsync(
        'favorites',
        (e) => {
            for (let i of t)
                if ((null != i.position && (e.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var n;
                    e.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : '0';
                }
        },
        l.fy.FREQUENT_USER_ACTION
    );
}
function N(t, e) {
    l.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[t].parentId = null != e ? e : '0';
        },
        l.fy.FREQUENT_USER_ACTION
    );
}
function b() {
    l.hW.updateAsync(
        'favorites',
        (t) => {
            t.muted = !t.muted;
        },
        l.fy.INFREQUENT_USER_ACTION
    );
}
