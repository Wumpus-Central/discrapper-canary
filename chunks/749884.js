"use strict";
n.d(t, { A: () => A, J: () => E });
var i = n(17928),
    r = n(554146),
    a = n(558845),
    s = n(826673),
    l = n(967198),
    o = n(181079),
    d = n(281980),
    c = n(5180),
    u = n(551289);
function _(e, t, n) {
    let { isExperimentEnabled: i, isFreemium: r, hasAccess: a, isMenuItemDCSelected: s, isIntroDCDismissed: l } = n;
    return !!i && (!!((s && !l) || (0, c.ai)(t.getGuildId())) || (!!a && (0, u.n_)(r, e)));
}
function E() {
    let { isExperimentEnabled: e, isFreemium: t, hasAccess: n } = (0, d.ad)(),
        i = (0, a.dD)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        c = (0, s.k8)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO);
    return _(o.A, l.A, {
        isExperimentEnabled: e,
        isFreemium: t,
        hasAccess: n,
        isMenuItemDCSelected: i,
        isIntroDCDismissed: c,
    });
}
function A(e) {
    let { isExperimentEnabled: t, isFreemium: n, hasAccess: c } = (0, d.TW)(e),
        u = (0, a.mB)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        E = (0, s.HX)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO);
    return (0, i.bG)(
        [o.A, l.A],
        () =>
            _(o.A, l.A, {
                isExperimentEnabled: t,
                isFreemium: n,
                hasAccess: c,
                isMenuItemDCSelected: u,
                isIntroDCDismissed: E,
            }),
        [t, n, c, u, E],
    );
}
