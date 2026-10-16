n.d(t, { CU: () => A, E9: () => c, Z0: () => _, aj: () => f, fj: () => E, lK: () => h });
var i = n(582128),
    r = n(196765),
    a = n(554146),
    s = n(47899),
    l = n(131607),
    o = n(652215),
    d = n(49999);
let c = [],
    u = (0, r.v)(() => ({ suggestions: c, dismiss: o.tEg }));
function _() {
    return u((e) => e.suggestions);
}
function E() {
    return u((e) => e.suggestions.length > 0);
}
function A(e) {
    u.setState({ suggestions: e });
}
function h() {
    let e = (0, s.Ay)((e) => e.postConnectionOpen),
        [t, n] = (0, l.kn)(e ? [a.M.FAVORITES_GUILD_SUGGESTIONS] : []),
        r = t === a.M.FAVORITES_GUILD_SUGGESTIONS;
    return (
        i.useLayoutEffect(() => {
            u.setState({
                dismiss: () => {
                    (n(d.i.USER_DISMISS), A(c));
                },
            });
        }, [n]),
        i.useLayoutEffect(() => () => u.setState({ dismiss: o.tEg }), []),
        { isEligible: e, isSelected: r }
    );
}
function f() {
    return u((e) => e.dismiss);
}
