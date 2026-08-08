"use strict";
n.d(t, { Yz: () => l, dM: () => o, n_: () => s });
var i = n(17928),
    r = n(181079),
    a = n(93055);
function s(e, t) {
    return e ? !1 !== t.favoriteGuildVisibleSetting : t.favoriteGuildEnabled;
}
function l() {
    return s((0, a.ad)().isFreemium, r.A);
}
function o() {
    let { isFreemium: e } = (0, a.TW)("useIsFavoritesGuildEnabled");
    return (0, i.bG)([r.A], () => s(e, r.A));
}
