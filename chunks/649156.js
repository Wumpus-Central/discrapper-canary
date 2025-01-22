var i = n(200651);
n(192379);
var r = n(3570),
    s = n(685311),
    l = n(186901);
t.Z = function (e) {
    let { match: t, location: n } = e,
        o = async (e, t) => {
            await (0, r.s)(l.jE.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search
            });
        };
    return (0, i.jsx)(s.Z, {
        match: t,
        location: n,
        attemptDeepLink: o
    });
};
