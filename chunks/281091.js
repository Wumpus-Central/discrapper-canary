i.d(e, { A: () => o });
var a = i(17928),
    n = i(245179),
    r = i(874421),
    l = i(886540),
    c = i(260498),
    u = i(277867);
function o(t) {
    return (0, a.yK)(
        [c.Ay, n.A],
        () => {
            let e =
                null != t
                    ? [...c.Ay.getOwnedProjects(), ...c.Ay.getSharedProjects(t)].filter(
                          (e) => e.guild_id === t || e.preview_guild_id === t,
                      )
                    : c.Ay.getOwnedProjects();
            return (0, u.N)(
                e.map((t) => {
                    let e = (0, l.Ji)(n.A.getMessages(t.id));
                    return {
                        project: t,
                        turnStartedAt: null != e ? (0, r.S)(e) : null,
                        finishedAt: n.A.getFinishedAt(t.id),
                    };
                }),
            );
        },
        [t],
    );
}
