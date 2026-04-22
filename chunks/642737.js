l.d(n, { A: () => p }), l(667532);
var t = l(627968),
    i = l(64700),
    r = l(311907),
    s = l(111159),
    a = l(827734),
    o = l(783878),
    d = l(263063),
    c = l(71393),
    u = l(711014),
    g = l(403362),
    A = l(985018),
    m = l(308696);
let f = "MAIN_PROFILE";
function p(e) {
    let { selectedGuildId: n, onChange: l, loading: p } = e,
        x = (0, r.bG)([u.Ay], () => u.Ay.getFlattenedGuildIds()),
        h = (0, r.bG)([c.A], () => c.A.getGuilds()),
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
                              leading: (0, t.jsx)(d.Ay, {
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
                    leading: (0, t.jsx)(s.p, { size: "sm", color: a.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [x, h]),
        j = i.useCallback(
            (e) => {
                l(e === f ? null : e);
            },
            [l],
        );
    return (0, t.jsx)(o.Z, {
        label: A.intl.string(A.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: j,
        value: n ?? f,
        options: v,
        loading: p,
    });
}
