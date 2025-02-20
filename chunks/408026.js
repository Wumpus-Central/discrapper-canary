n.d(t, { Z: () => u }), n(47120);
var r = n(570140),
    i = n(224706),
    l = n(710845),
    o = n(77498);
let a = {};
function s(e) {
    let { name: t, hash: n, missingData: r } = e;
    for (let e of (o.Z.markGameReported(t), r)) {
        if ('icon' === e) {
            let e = a[t];
            null != e && i.Z.uploadIcon(t, n, e);
            return;
        }
        new l.Z('GameStoreIconManager').log('Could not find missing data key: '.concat(e));
    }
}
function c(e) {
    let { gameName: t, icon: n } = e;
    a[t] = n;
}
let u = {
    initialize() {
        r.Z.subscribe('UNVERIFIED_GAME_UPDATE', s), r.Z.subscribe('GAME_ICON_UPDATE', c);
    }
};
