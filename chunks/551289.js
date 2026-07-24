"use strict";
n.d(t, { dM: () => l, n_: () => s });
var i = n(17928),
    r = n(181079),
    a = n(281980);
function s(e, t) {
    return e ? !t.favoriteGuildExplicitlyHidden : t.favoriteGuildEnabled;
}
function l() {
    let { isFreemium: e } = (0, a.TW)("useIsFavoriteGuildEnabled");
    return (0, i.bG)([r.A], () => s(e, r.A));
}
