n.d(l, { A: () => x }), n(667532);
var t = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(263063),
    o = n(71393),
    d = n(711014),
    c = n(403362),
    u = n(985018),
    m = n(18911);
let p = "MAIN_PROFILE";
function x(e) {
    let { selectedGuildId: l, onChange: n } = e,
        x = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        A = (0, s.bG)([o.A], () => o.A.getGuilds()),
        g = i.useMemo(() => {
            let e = x
                .map((e) => {
                    let l = A[e];
                    return null == l
                        ? null
                        : {
                              id: l.id,
                              label: l.name,
                              value: l.id,
                              leading: (0, t.jsx)(r.Ay, {
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
                    id: p,
                    label: u.intl.string(u.t["2p07FR"]),
                    value: p,
                    leading: (0, t.jsx)(a.pVd, { size: "sm", color: a.LU0.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [x, A]),
        f = i.useCallback(
            (e) => {
                n(e === p ? null : e);
            },
            [n],
        );
    return (0, t.jsx)(a.ZiE, {
        label: u.intl.string(u.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: f,
        value: l ?? p,
        options: g,
    });
}
