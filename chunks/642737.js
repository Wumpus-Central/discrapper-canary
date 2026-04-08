t.d(l, { A: () => p }), t(667532);
var n = t(627968),
    i = t(64700),
    s = t(311907),
    a = t(397927),
    r = t(263063),
    o = t(71393),
    d = t(711014),
    c = t(403362),
    u = t(985018),
    m = t(401736);
let x = "MAIN_PROFILE";
function p(e) {
    let { selectedGuildId: l, onChange: t } = e,
        p = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        A = (0, s.bG)([o.A], () => o.A.getGuilds()),
        g = i.useMemo(() => {
            let e = p
                .map((e) => {
                    let l = A[e];
                    return null == l
                        ? null
                        : {
                              id: l.id,
                              label: l.name,
                              value: l.id,
                              leading: (0, n.jsx)(r.Ay, {
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
                    id: x,
                    label: u.intl.string(u.t["2p07FR"]),
                    value: x,
                    leading: (0, n.jsx)(a.pVd, { size: "sm", color: a.LU0.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [p, A]),
        f = i.useCallback(
            (e) => {
                t(e === x ? null : e);
            },
            [t],
        );
    return (0, n.jsx)(a.ZiE, {
        label: u.intl.string(u.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: f,
        value: l ?? x,
        options: g,
    });
}
