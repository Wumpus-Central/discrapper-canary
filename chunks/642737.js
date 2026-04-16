l.d(n, { A: () => A }), l(667532);
var t = l(627968),
    i = l(64700),
    s = l(311907),
    a = l(397927),
    r = l(263063),
    o = l(71393),
    d = l(711014),
    c = l(403362),
    u = l(985018),
    m = l(401736);
let p = "MAIN_PROFILE";
function A(e) {
    let { selectedGuildId: n, onChange: l, loading: A } = e,
        x = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        g = (0, s.bG)([o.A], () => o.A.getGuilds()),
        f = i.useMemo(() => {
            let e = x
                .map((e) => {
                    let n = g[e];
                    return null == n
                        ? null
                        : {
                              id: n.id,
                              label: n.name,
                              value: n.id,
                              leading: (0, t.jsx)(r.Ay, {
                                  className: m.$,
                                  guild: n,
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
        }, [x, g]),
        h = i.useCallback(
            (e) => {
                l(e === p ? null : e);
            },
            [l],
        );
    return (0, t.jsx)(a.ZiE, {
        label: u.intl.string(u.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: h,
        value: n ?? p,
        options: f,
        loading: A,
    });
}
