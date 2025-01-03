n(47120);
var i = n(570140),
    r = n(224706),
    l = n(710845),
    a = n(77498);
let s = {};
function o(e) {
    let { name: t, hash: n, missingData: i } = e;
    for (let e of (a.Z.markGameReported(t), i)) {
        if ('icon' === e) {
            let e = s[t];
            null != e && r.Z.uploadIcon(t, n, e);
            return;
        }
        new l.Z('GameStoreIconManager').log('Could not find missing data key: '.concat(e));
    }
}
function c(e) {
    let { gameName: t, icon: n } = e;
    s[t] = n;
}
t.Z = {
    initialize() {
        i.Z.subscribe('UNVERIFIED_GAME_UPDATE', o), i.Z.subscribe('GAME_ICON_UPDATE', c);
    }
};
