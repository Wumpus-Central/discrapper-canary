n.d(e, {
    CM: () => _,
    UT: () => g,
    _Z: () => p,
    kj: () => f,
    oC: () => E,
    s3: () => C,
    uA: () => h,
    xh: () => v
}),
    n(47120);
var i = n(524437),
    a = n(675478),
    l = n(592125),
    r = n(496675),
    u = n(709054),
    o = n(853856),
    s = n(231338);
function d() {
    let t = o.Z.getFavoriteChannels(),
        e = 1;
    for (let n in t) e = Math.max(e, t[n].order);
    return e + 1;
}
function c(t) {
    for (let e in t) {
        let n = t[e];
        if (null == n) {
            delete t[e];
            continue;
        }
        if (n.type === i.Dd.CATEGORY) continue;
        let a = l.Z.getChannel(e);
        if (null == a || (!a.isPrivate() && !r.Z.can(s.Pl.VIEW_CHANNEL, a))) {
            delete t[e];
            continue;
        }
    }
}
function f(t, e) {
    !o.Z.isFavorite(t) &&
        a.hW.updateAsync(
            'favorites',
            (n) => {
                (n.favoriteChannels[t] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: d(),
                    parentId: null != e ? e : '0'
                })),
                    c(n.favoriteChannels);
            },
            a.fy.FREQUENT_USER_ACTION
        );
}
function E(t) {
    let e = o.Z.getFavorite(t);
    null != e &&
        a.hW.updateAsync(
            'favorites',
            (n) => {
                if ((delete n.favoriteChannels[t], e.type === i.Dd.CATEGORY)) for (let e in n.favoriteChannels) n.favoriteChannels[e].parentId === t && (n.favoriteChannels[e].parentId = '0');
                c(n.favoriteChannels);
            },
            a.fy.INFREQUENT_USER_ACTION
        );
}
function g(t, e) {
    o.Z.isFavorite(t) &&
        a.hW.updateAsync(
            'favorites',
            (n) => {
                n.favoriteChannels[t].nickname = null != e ? e : '';
            },
            a.fy.INFREQUENT_USER_ACTION
        );
}
function _(t) {
    let e = u.default.fromTimestamp(Date.now());
    a.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[e] = i.aV.create({
                nickname: t,
                type: i.Dd.CATEGORY,
                position: d(),
                parentId: '0'
            });
        },
        a.fy.FREQUENT_USER_ACTION
    );
}
function v(t) {
    E(t);
}
function C(t) {
    a.hW.updateAsync(
        'favorites',
        (e) => {
            for (let i of t)
                if ((null != i.position && (e.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var n;
                    e.favoriteChannels[i.id].parentId = null !== (n = i.parent_id) && void 0 !== n ? n : '0';
                }
        },
        a.fy.FREQUENT_USER_ACTION
    );
}
function h(t, e) {
    a.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[t].parentId = null != e ? e : '0';
        },
        a.fy.FREQUENT_USER_ACTION
    );
}
function p() {
    a.hW.updateAsync(
        'favorites',
        (t) => {
            t.muted = !t.muted;
        },
        a.fy.INFREQUENT_USER_ACTION
    );
}
