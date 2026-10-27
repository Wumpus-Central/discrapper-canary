n.d(e, { A: () => s });
var i = n(17928),
    r = n(245179),
    u = n(874421),
    l = n(886540),
    a = n(260498),
    d = n(935208);
function s(t) {
    return (0, i.yK)(
        [a.Ay, r.A],
        () =>
            (null != t
                ? [...a.Ay.getOwnedProjects(), ...a.Ay.getSharedProjects(t)].filter(
                      (e) => e.guild_id === t || e.preview_guild_id === t,
                  )
                : a.Ay.getOwnedProjects()
            )
                .map((t) => {
                    let e = (0, l.Ji)(r.A.getMessages(t.id));
                    return {
                        project: t,
                        turnStartedAt: null != e ? (0, u.S)(e) : null,
                        finishedAt: r.A.getFinishedAt(t.id),
                    };
                })
                .map((t) => ({
                    project: t.project,
                    time: (function (t) {
                        var e;
                        let n,
                            { project: i, turnStartedAt: r, finishedAt: u } = t;
                        return Math.max(
                            /^\d+$/.test(i.id) ? d.default.extractTimestamp(i.id) : 0,
                            Number.isNaN((n = null == (e = i.updated_at) ? 0 : Date.parse(e))) ? 0 : n,
                            r ?? 0,
                            u ?? 0,
                        );
                    })(t),
                }))
                .sort((t, e) => {
                    var n, i;
                    return t.time !== e.time
                        ? e.time - t.time
                        : ((n = t.project.id),
                          (i = e.project.id),
                          n.length !== i.length ? i.length - n.length : n < i ? 1 : n > i ? -1 : 0);
                })
                .map((t) => {
                    let { project: e } = t;
                    return e;
                }),
        [t],
    );
}
