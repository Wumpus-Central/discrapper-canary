l.d(t, { A: () => x }), l(667532);
var n = l(627968),
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
function x(e) {
    let { selectedGuildId: t, onChange: l, loading: x } = e,
        A = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        g = (0, s.bG)([o.A], () => o.A.getGuilds()),
        f = i.useMemo(() => {
            let e = A.map((e) => {
                let t = g[e];
                return null == t
                    ? null
                    : {
                          id: t.id,
                          label: t.name,
                          value: t.id,
                          leading: (0, n.jsx)(r.Ay, { className: m.$, guild: t, size: r.Ay.Sizes.SMALLER, active: !0 }),
                      };
            }).filter(c.Vq);
            return (
                e.unshift({
                    id: p,
                    label: u.intl.string(u.t["2p07FR"]),
                    value: p,
                    leading: (0, n.jsx)(a.pVd, { size: "sm", color: a.LU0.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [A, g]),
        h = i.useCallback(
            (e) => {
                l(e === p ? null : e);
            },
            [l],
        );
    return (0, n.jsx)(a.ZiE, {
        label: u.intl.string(u.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: h,
        value: t ?? p,
        options: f,
        loading: x,
    });
}
