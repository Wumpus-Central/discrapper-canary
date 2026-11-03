n.d(t, { $x: () => u, Ay: () => c, UU: () => d });
var i = n(17928),
    r = n(805942),
    a = n(874421),
    s = n(886540),
    l = n(260498),
    o = n(277867);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, i.yK)(
        [l.Ay, r.A],
        () =>
            (0, o.Nu)(
                e().map((e) => {
                    let t = (0, s.Ji)(r.A.getMessages(e.id));
                    return {
                        project: e,
                        turnStartedAt: null != t ? (0, a.S)(t) : null,
                        finishedAt: r.A.getFinishedAt(e.id),
                    };
                }),
            ),
        t,
    );
}
function c() {
    return d(() => l.Ay.getOwnedProjects());
}
function u() {
    return d(() => l.Ay.getSharedWithMeProjects());
}
