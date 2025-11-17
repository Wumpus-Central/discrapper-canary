n.d(t, { Z: () => a }), n(35282);
var r = n(54381);
n(473749);
var i = n(3570),
    s = n(685311),
    l = n(186901);
let a = function (e) {
    let { match: t, location: n } = e,
        a = async (e, t) => {
            await (0, i.s)(l.jE.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        };
    return (0, r.jsx)(s.Z, {
        match: t,
        location: n,
        attemptDeepLink: a,
    });
};
