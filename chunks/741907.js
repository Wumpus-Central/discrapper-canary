i.d(e, { A: () => o });
var a = i(17928),
    n = i(245179),
    r = i(874421),
    l = i(886540),
    c = i(260498),
    u = i(935208);
function o(t) {
    return (0, a.yK)(
        [c.Ay, n.A],
        () =>
            (null != t
                ? [...c.Ay.getOwnedProjects(), ...c.Ay.getSharedProjects(t)].filter(
                      (e) => e.guild_id === t || e.preview_guild_id === t,
                  )
                : c.Ay.getOwnedProjects()
            )
                .map((t) => {
                    let e = (0, l.Ji)(n.A.getMessages(t.id));
                    return {
                        project: t,
                        turnStartedAt: null != e ? (0, r.S)(e) : null,
                        finishedAt: n.A.getFinishedAt(t.id),
                    };
                })
                .map((t) => ({
                    project: t.project,
                    time: (function (t) {
                        var e;
                        let i,
                            { project: a, turnStartedAt: n, finishedAt: r } = t;
                        return Math.max(
                            /^\d+$/.test(a.id) ? u.default.extractTimestamp(a.id) : 0,
                            Number.isNaN((i = null == (e = a.updated_at) ? 0 : Date.parse(e))) ? 0 : i,
                            n ?? 0,
                            r ?? 0,
                        );
                    })(t),
                }))
                .sort((t, e) => {
                    var i, a;
                    return t.time !== e.time
                        ? e.time - t.time
                        : ((i = t.project.id),
                          (a = e.project.id),
                          i.length !== a.length ? a.length - i.length : i < a ? 1 : i > a ? -1 : 0);
                })
                .map((t) => {
                    let { project: e } = t;
                    return e;
                }),
        [t],
    );
}
