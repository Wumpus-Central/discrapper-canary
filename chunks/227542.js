"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(477782),
    a = n(817281),
    o = n(775602),
    l = n(688810),
    u = n(692798),
    c = n(544028),
    d = n(964404),
    _ = n(185928),
    f = n(652215),
    p = n(985018);
function h() {
    let { analyticsLocations: e } = (0, l.Ay)(),
        {
            theme: t,
            useSystemTheme: n,
            useForcedColors: h,
        } = (0, i.cf)([c.A, d.Ay, o.A], () => ({
            theme: c.A.theme,
            useSystemTheme: d.Ay.useSystemTheme,
            useForcedColors: o.A.useForcedColors,
        })),
        E = (i, o) =>
            (0, r.jsx)(s.iD, {
                id: i,
                group: "input-modes",
                label: o,
                disabled: h,
                checked: n === _.Q_.ON ? "system" === i : i === t,
                action: () => {
                    (0, u.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${i}` }),
                        (0, a.u_)({ theme: i });
                },
            });
    return [
        (0, r.jsxs)(
            s.rX,
            {
                children: [
                    E(f.NJ8.LIGHT, p.intl.string(p.t.K2sFfo)),
                    E(f.NJ8.DARK, p.intl.string(p.t.SMPT1k)),
                    E(f.NJ8.DARKER, p.intl.string(p.t.b8Cei3)),
                    E(f.NJ8.MIDNIGHT, p.intl.string(p.t.Do4ZJx)),
                    E("system", p.intl.string(p.t["7rOU6j"])),
                ],
            },
            "theme-items",
        ),
    ];
}
