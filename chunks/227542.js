"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(477782),
    a = n(817281),
    o = n(775602),
    l = n(688810),
    d = n(692798),
    _ = n(363195),
    u = n(964404),
    c = n(185928),
    E = n(652215),
    h = n(985018);
function m() {
    let { analyticsLocations: e } = (0, l.Ay)(),
        {
            theme: t,
            useSystemTheme: n,
            useForcedColors: m,
        } = (0, r.cf)([_.A, u.Ay, o.A], () => ({
            theme: _.A.theme,
            useSystemTheme: u.Ay.useSystemTheme,
            useForcedColors: o.A.useForcedColors,
        })),
        f = (r, o) =>
            (0, i.jsx)(s.iD, {
                id: r,
                group: "input-modes",
                label: o,
                disabled: m,
                checked: n === c.Q_.ON ? "system" === r : r === t,
                action: () => {
                    (0, d.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${r}` }),
                        (0, a.u_)({ theme: r });
                },
            });
    return [
        (0, i.jsxs)(
            s.rX,
            {
                children: [
                    f(E.NJ8.LIGHT, h.intl.string(h.t.K2sFfo)),
                    f(E.NJ8.DARK, h.intl.string(h.t.SMPT1k)),
                    f(E.NJ8.DARKER, h.intl.string(h.t.b8Cei3)),
                    f(E.NJ8.MIDNIGHT, h.intl.string(h.t.Do4ZJx)),
                    f("system", h.intl.string(h.t["7rOU6j"])),
                ],
            },
            "theme-items",
        ),
    ];
}
