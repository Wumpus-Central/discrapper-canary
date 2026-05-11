"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(477782),
    a = n(817281),
    o = n(775602),
    l = n(688810),
    u = n(487245),
    c = n(363195),
    d = n(742023),
    _ = n(185928),
    f = n(652215),
    h = n(375708);
function p() {
    let { analyticsLocations: e } = (0, l.Ay)(),
        {
            theme: t,
            useSystemTheme: n,
            useForcedColors: p,
        } = (0, r.cf)([c.A, d.Ay, o.A], () => ({
            theme: c.A.theme,
            useSystemTheme: d.Ay.useSystemTheme,
            useForcedColors: o.A.useForcedColors,
        })),
        E = (r, o) =>
            (0, i.jsx)(s.iD, {
                id: r,
                group: "input-modes",
                label: o,
                disabled: p,
                checked: n === _.Q_.ON ? "system" === r : r === t,
                action: () => {
                    (0, u.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${r}` }),
                        (0, a.u_)({ theme: r });
                },
            });
    return [
        (0, i.jsxs)(
            s.rX,
            {
                children: [
                    E(f.NJ8.LIGHT, h.intl.string(h.t.K2sFfo)),
                    E(f.NJ8.DARK, h.intl.string(h.t.SMPT1k)),
                    E(f.NJ8.DARKER, h.intl.string(h.t.b8Cei3)),
                    E(f.NJ8.MIDNIGHT, h.intl.string(h.t.Do4ZJx)),
                    E("system", h.intl.string(h.t["7rOU6j"])),
                ],
            },
            "theme-items",
        ),
    ];
}
