n.d(t, { A: () => i });
var l = n(17928),
    a = n(245179),
    r = n(260498);
function i(e) {
    return (0, l.yK)(
        [r.Ay, a.A],
        () =>
            (null != e
                ? [...r.Ay.getOwnedProjects(), ...r.Ay.getSharedProjects(e)].filter(
                      (t) => t.guild_id === e || t.preview_guild_id === e,
                  )
                : r.Ay.getOwnedProjects()
            )
                .map((e) => {
                    let t;
                    return {
                        project: e,
                        time:
                            a.A.isThinking(e.id) && !r.Ay.isProjectDeleting(e.id)
                                ? 1 / 0
                                : Math.max(
                                      a.A.getFinishedAt(e.id) ?? 0,
                                      Number.isNaN((t = null == e.updated_at ? 0 : Date.parse(e.updated_at))) ? 0 : t,
                                  ),
                    };
                })
                .sort((e, t) =>
                    e.time === t.time ? e.project.id.localeCompare(t.project.id) : e.time < t.time ? 1 : -1,
                )
                .map((e) => {
                    let { project: t } = e;
                    return t;
                }),
        [e],
    );
}
