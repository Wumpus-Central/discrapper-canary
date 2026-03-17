i.d(l, { A: () => p }), i(667532);
var n = i(627968),
    t = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(263063),
    o = i(71393),
    d = i(711014),
    c = i(403362),
    u = i(985018),
    A = i(427185);
let m = "MAIN_PROFILE";
function p(e) {
    let { selectedGuildId: l, onChange: i } = e,
        p = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        g = (0, s.bG)([o.A], () => o.A.getGuilds()),
        x = t.useMemo(() => {
            let e = p
                .map((e) => {
                    let l = g[e];
                    return null == l
                        ? null
                        : {
                              id: l.id,
                              label: l.name,
                              value: l.id,
                              leading: (0, n.jsx)(r.Ay, {
                                  className: A.$,
                                  guild: l,
                                  size: r.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(c.Vq);
            return (
                e.unshift({
                    id: m,
                    label: u.intl.string(u.t["2p07FR"]),
                    value: m,
                    leading: (0, n.jsx)(a.pVd, { size: "sm", color: a.LU0.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [p, g]),
        h = t.useCallback(
            (e) => {
                i(e === m ? null : e);
            },
            [i],
        );
    return (0, n.jsx)(a.ZiE, {
        label: u.intl.string(u.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: h,
        value: l ?? m,
        options: x,
    });
}
