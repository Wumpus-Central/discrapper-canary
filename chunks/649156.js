n.d(t, { Z: () => l }), n(35282);
var r = n(54381);
n(473749);
var i = n(3570),
    s = n(685311),
    a = n(186901);
let l = function (e) {
    let { match: t, location: n } = e,
        l = async (e, t) => {
            await (0, i.s)(a.jE.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        };
    return (0, r.jsx)(s.Z, {
        match: t,
        location: n,
        attemptDeepLink: l,
    });
};
