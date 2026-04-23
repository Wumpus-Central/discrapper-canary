n.d(t, { A: () => u });
var i = n(73153),
    r = n(544420),
    a = n(626584),
    l = n(760751);
let s = {};
function o(e) {
    let { name: t, hash: n, missingData: i } = e;
    for (let e of (l.A.markGameReported(t), i))
        if ("icon" === e) {
            let e = s[t];
            null != e && r.Ay.uploadIcon(t, n, e);
            return;
        } else new a.A("GameStoreIconManager").log(`Could not find missing data key: ${e}`);
}
function d(e) {
    let { gameName: t, icon: n } = e;
    s[t] = n;
}
let u = {
    initialize() {
        i.h.subscribe("UNVERIFIED_GAME_UPDATE", o), i.h.subscribe("GAME_ICON_UPDATE", d);
    },
};
