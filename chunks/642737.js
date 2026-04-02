t.d(l, { A: () => x }), t(667532);
var i = t(627968),
    n = t(64700),
    s = t(311907),
    a = t(397927),
    r = t(263063),
    o = t(71393),
    d = t(711014),
    c = t(403362),
    u = t(985018),
    m = t(18911);
let A = "MAIN_PROFILE";
function x(e) {
    let { selectedGuildId: l, onChange: t } = e,
        x = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        p = (0, s.bG)([o.A], () => o.A.getGuilds()),
        g = n.useMemo(() => {
            let e = x
                .map((e) => {
                    let l = p[e];
                    return null == l
                        ? null
                        : {
                              id: l.id,
                              label: l.name,
                              value: l.id,
                              leading: (0, i.jsx)(r.Ay, {
                                  className: m.$,
                                  guild: l,
                                  size: r.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(c.Vq);
            return (
                e.unshift({
                    id: A,
                    label: u.intl.string(u.t["2p07FR"]),
                    value: A,
                    leading: (0, i.jsx)(a.pVd, { size: "sm", color: a.LU0.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [x, p]),
        f = n.useCallback(
            (e) => {
                t(e === A ? null : e);
            },
            [t],
        );
    return (0, i.jsx)(a.ZiE, {
        label: u.intl.string(u.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: f,
        value: l ?? A,
        options: g,
    });
}
