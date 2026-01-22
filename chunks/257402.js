n.d(t, { A: () => u }), n(896048);
var r = n(73153),
    i = n(544420),
    l = n(626584),
    a = n(760751);
let s = {};
function o(e) {
    let { name: t, hash: n, missingData: r } = e;
    for (let e of (a.A.markGameReported(t), r))
        if ("icon" === e) {
            let e = s[t];
            null != e && i.A.uploadIcon(t, n, e);
            return;
        } else new l.A("GameStoreIconManager").log("Could not find missing data key: ".concat(e));
}
function c(e) {
    let { gameName: t, icon: n } = e;
    s[t] = n;
}
let u = {
    initialize() {
        r.h.subscribe("UNVERIFIED_GAME_UPDATE", o), r.h.subscribe("GAME_ICON_UPDATE", c);
    },
};
