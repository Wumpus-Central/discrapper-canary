t.d(n, { A: () => p }), t(667532);
var l = t(627968),
    i = t(64700),
    r = t(311907),
    a = t(111159),
    s = t(827734),
    o = t(783878),
    d = t(263063),
    u = t(71393),
    c = t(711014),
    g = t(403362),
    A = t(985018),
    m = t(308696);
let f = "MAIN_PROFILE";
function p(e) {
    let { selectedGuildId: n, onChange: t, loading: p } = e,
        x = (0, r.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()),
        h = (0, r.bG)([u.A], () => u.A.getGuilds()),
        v = i.useMemo(() => {
            let e = x
                .map((e) => {
                    let n = h[e];
                    return null == n
                        ? null
                        : {
                              id: n.id,
                              label: n.name,
                              value: n.id,
                              leading: (0, l.jsx)(d.Ay, {
                                  className: m.$,
                                  guild: n,
                                  size: d.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(g.Vq);
            return (
                e.unshift({
                    id: f,
                    label: A.intl.string(A.t["2p07FR"]),
                    value: f,
                    leading: (0, l.jsx)(a.p, { size: "sm", color: s.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [x, h]),
        j = i.useCallback(
            (e) => {
                t(e === f ? null : e);
            },
            [t],
        );
    return (0, l.jsx)(o.Z, {
        label: A.intl.string(A.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: j,
        value: n ?? f,
        options: v,
        loading: p,
    });
}
