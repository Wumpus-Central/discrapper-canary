n.d(t, { Z: () => a }), n(35282);
var r = n(255367);
n(73800);
var i = n(3570),
    l = n(685311),
    o = n(186901);
let a = function (e) {
    let { match: t, location: n } = e,
        a = async (e, t) => {
            await (0, i.s)(o.jE.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search
            });
        };
    return (0, r.jsx)(l.Z, {
        match: t,
        location: n,
        attemptDeepLink: a
    });
};
