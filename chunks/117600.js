"use strict";
n.d(t, { CU: () => h, E9: () => u, Z0: () => E, aj: () => f, fj: () => A, lK: () => I });
var i = n(582128),
    r = n(196765),
    a = n(554146),
    s = n(558845),
    l = n(131607),
    o = n(93055),
    d = n(652215),
    c = n(49999);
let u = [],
    _ = (0, r.v)(() => ({ suggestions: u, dismiss: d.tEg }));
function E() {
    return _((e) => e.suggestions);
}
function A() {
    return _((e) => e.suggestions.length > 0);
}
function h(e) {
    _.setState({ suggestions: e });
}
function I() {
    let { hasAccess: e, isFreemium: t } = (0, o.TW)(),
        n = (0, s.Ay)((e) => e.postConnectionOpen),
        r = e && t && n,
        [E, A] = (0, l.kn)(r ? [a.M.FAVORITES_GUILD_SUGGESTIONS] : []),
        I = E === a.M.FAVORITES_GUILD_SUGGESTIONS;
    return (
        i.useLayoutEffect(() => {
            _.setState({
                dismiss: () => {
                    A(c.i.USER_DISMISS), h(u);
                },
            });
        }, [A]),
        i.useLayoutEffect(() => () => _.setState({ dismiss: d.tEg }), []),
        { isEligible: r, isSelected: I }
    );
}
function f() {
    return _((e) => e.dismiss);
}
