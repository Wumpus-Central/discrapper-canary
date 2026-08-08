"use strict";
n.d(t, { A: () => _, J: () => u });
var i = n(17928),
    r = n(967198),
    a = n(181079),
    s = n(676168),
    l = n(93055),
    o = n(5180),
    d = n(551289);
function c(e, t, n) {
    let { isExperimentEnabled: i, isFreemium: r, hasAccess: a, isIntroPopoverShown: s } = n;
    return !!i && (!!(s || (0, o.ai)(t.getGuildId())) || (!!a && (0, d.n_)(r, e)));
}
function u() {
    let { isExperimentEnabled: e, isFreemium: t, hasAccess: n } = (0, l.ad)();
    return c(a.A, r.A, { isExperimentEnabled: e, isFreemium: t, hasAccess: n, isIntroPopoverShown: (0, s.UW)() });
}
function _(e) {
    let { isExperimentEnabled: t, isFreemium: n, hasAccess: o } = (0, l.TW)(e),
        d = (0, s.DA)();
    return (0, i.bG)(
        [a.A, r.A],
        () => c(a.A, r.A, { isExperimentEnabled: t, isFreemium: n, hasAccess: o, isIntroPopoverShown: d }),
        [t, n, o, d],
    );
}
