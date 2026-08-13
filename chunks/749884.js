"use strict";
n.d(t, { A: () => u, J: () => c });
var i = n(17928),
    r = n(967198),
    a = n(181079),
    s = n(93055),
    l = n(5180),
    o = n(771959);
function d(e, t, n) {
    let { isExperimentEnabled: i, isFreemium: r, hasAccess: a, isIntroPopoverShown: s, keepWhileViewing: d } = n;
    return (
        !!i &&
        (!!(d && (0, l.ai)(t.getGuildId())) ||
            (!!a && !1 !== e.favoriteGuildVisibleSetting && (!!e.favoriteGuildEnabled || (r && (s || (0, o.zW)())))))
    );
}
function c() {
    let { isExperimentEnabled: e, isFreemium: t, hasAccess: n } = (0, s.ad)();
    return d(a.A, r.A, {
        isExperimentEnabled: e,
        isFreemium: t,
        hasAccess: n,
        isIntroPopoverShown: (0, o.UW)(),
        keepWhileViewing: !0,
    });
}
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { isExperimentEnabled: t, isFreemium: n, hasAccess: l } = (0, s.TW)(),
        c = (0, o.DA)();
    return (0, i.bG)(
        [a.A, r.A],
        () =>
            d(a.A, r.A, {
                isExperimentEnabled: t,
                isFreemium: n,
                hasAccess: l,
                isIntroPopoverShown: c,
                keepWhileViewing: e,
            }),
        [t, n, l, c, e],
    );
}
