n.d(t, { Z: () => l }), n(35282);
var r = n(200651);
n(192379);
var i = n(3570),
    s = n(685311),
    o = n(186901);
let l = function (e) {
    let { match: t, location: n } = e,
        l = async (e, t) => {
            await (0, i.s)(o.jE.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search
            });
        };
    return (0, r.jsx)(s.Z, {
        match: t,
        location: n,
        attemptDeepLink: l
    });
};
