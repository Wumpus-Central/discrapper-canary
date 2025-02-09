n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(3570),
    l = n(685311),
    a = n(186901);
let o = function (e) {
    let { match: t, location: n } = e,
        o = async (e, t) => {
            await (0, r.s)(a.jE.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search
            });
        };
    return (0, i.jsx)(l.Z, {
        match: t,
        location: n,
        attemptDeepLink: o
    });
};
