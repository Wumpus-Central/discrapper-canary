n.d(t, { Ay: () => p });
var i = n(582128),
    l = n(17928),
    a = n(627363),
    s = n(429913),
    r = n(878014),
    o = n(948230),
    c = n(683180),
    d = n(972786),
    u = n(486020),
    h = n(495457);
function p(e) {
    i.useEffect(() => {
        (0, o.hF)(e);
    }, [e]);
    let t = (0, l.yK)([d.Ay], () => d.Ay.getOwnedProjects()),
        n = (0, l.yK)([d.Ay], () => d.Ay.getSharedProjects(e), [e]),
        p = i.useMemo(
            () =>
                (function (e, t, n) {
                    let i = new Map();
                    for (let l of [...e, ...t]) (0, c.X0)(l, n) && i.set(l.application_id, l);
                    return [...i.values()].sort((e, t) => e.name.localeCompare(t.name));
                })(t, n, e),
            [t, n, e],
        ),
        m = i.useMemo(() => p.map((e) => e.application_id), [p]),
        A = (0, s.A)(m, !1),
        f = i.useRef(new Set()),
        [x, g] = i.useState(new Set()),
        [C, y] = i.useState(!1),
        j = i.useMemo(() => p.filter((e, t) => !(0, r.D)(A[t])).map((e) => e.application_id), [p, A]);
    i.useEffect(() => {
        let e = j.filter((e) => !f.current.has(e));
        if (0 !== e.length) {
            for (let t of e) f.current.add(t);
            a.Ay.fetchApplications(e, !0)
                .catch(() => y(!0))
                .finally(() => g((t) => new Set([...t, ...e])));
        }
    }, [j]);
    let I = i.useMemo(() => p.filter((e, t) => (0, r.D)(A[t])), [p, A]),
        N = (0, l.bG)([d.Ay], () => d.Ay.getGuildProjectsFetchState(e), [e]),
        v = j.some((e) => !x.has(e)),
        E = (0, h._)({
            hasRows: I.length > 0,
            loadFailed: "error" === N || C,
            fetchPhase: "unattempted" === N ? "unattempted" : "loading" === N || v ? "pending" : "settled",
        }),
        b = i.useMemo(() => I.map((e) => e.preview_application_id ?? e.application_id), [I]),
        _ = (0, s.A)(b);
    return {
        options: i.useMemo(
            () =>
                I.map((e, t) => {
                    let n = _[t];
                    return {
                        applicationId: e.application_id,
                        name: e.name,
                        iconURL:
                            n?.icon == null
                                ? null
                                : (u.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 20 }) ?? null),
                    };
                }),
            [I, _],
        ),
        listState: E,
    };
}
