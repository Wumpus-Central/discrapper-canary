n.d(t, { Z: () => u }), n(388685);
var r = n(570140),
    i = n(224706),
    l = n(710845),
    a = n(77498);
let s = {};
function o(e) {
    let { name: t, hash: n, missingData: r } = e;
    for (let e of (a.Z.markGameReported(t), r))
        if ("icon" === e) {
            let e = s[t];
            null != e && i.Z.uploadIcon(t, n, e);
            return;
        } else new l.Z("GameStoreIconManager").log("Could not find missing data key: ".concat(e));
}
function c(e) {
    let { gameName: t, icon: n } = e;
    s[t] = n;
}
let u = {
    initialize() {
        r.Z.subscribe("UNVERIFIED_GAME_UPDATE", o), r.Z.subscribe("GAME_ICON_UPDATE", c);
    },
};
