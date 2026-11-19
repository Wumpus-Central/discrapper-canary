i.d(e, { U: () => s });
var r = i(855986),
    a = i(513425),
    n = i(874421),
    d = i(886540),
    u = i(260498),
    p = i(811091);
function s(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, r.yK)(
        [u.Ay, a.A],
        () =>
            t()
                .map((t) => {
                    let e = (0, d.Ji)(a.A.getMessages(t.id));
                    return {
                        project: t,
                        turnStartedAt: null != e ? (0, n.S)(e) : null,
                        finishedAt: a.A.getFinishedAt(t.id),
                    };
                })
                .map((t) => ({
                    project: t.project,
                    time: (function (t) {
                        var e;
                        let i,
                            { project: r, turnStartedAt: a, finishedAt: n } = t;
                        return Math.max(
                            /^\d+$/.test(r.id) ? p.default.extractTimestamp(r.id) : 0,
                            Number.isNaN((i = null == (e = r.updated_at) ? 0 : Date.parse(e))) ? 0 : i,
                            a ?? 0,
                            n ?? 0,
                        );
                    })(t),
                }))
                .sort((t, e) => {
                    var i, r;
                    return t.time !== e.time
                        ? e.time - t.time
                        : ((i = t.project.id),
                          (r = e.project.id),
                          i.length !== r.length ? r.length - i.length : i < r ? 1 : i > r ? -1 : 0);
                })
                .map((t) => {
                    let { project: e } = t;
                    return e;
                }),
        e,
    );
}
