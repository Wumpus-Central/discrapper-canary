var i = n(582128),
    r = n(196765),
    a = n(554146),
    s = n(517057),
    l = n(263775),
    o = n(652215),
    d = n(49999);
let c = [],
    u = (0, r.v)(() => ({ suggestions: c, dismiss: o.tEg }));
function _(e) {
    u.setState({ suggestions: e });
}
n.d(
    t,
    {},
    {
        CU: _,
        E9: c,
        Z0: function () {
            return u((e) => e.suggestions);
        },
        aj: function () {
            return u((e) => e.dismiss);
        },
        fj: function () {
            return u((e) => e.suggestions.length > 0);
        },
        lK: function () {
            let e = (0, s.Ay)((e) => e.postConnectionOpen),
                [t, n] = (0, l.kn)(e ? [a.M.FAVORITES_GUILD_SUGGESTIONS] : []),
                r = t === a.M.FAVORITES_GUILD_SUGGESTIONS;
            return (
                i.useLayoutEffect(() => {
                    u.setState({
                        dismiss: () => {
                            (n(d.i.USER_DISMISS), _(c));
                        },
                    });
                }, [n]),
                i.useLayoutEffect(() => () => u.setState({ dismiss: o.tEg }), []),
                { isEligible: e, isSelected: r }
            );
        },
    },
);
