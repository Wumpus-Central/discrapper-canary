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
    d = n(544028),
    c = n(964404),
    _ = n(185928),
    f = n(652215),
    E = n(985018);
function h() {
    let { analyticsLocations: e } = (0, l.Ay)(),
        {
            theme: t,
            useSystemTheme: n,
            useForcedColors: h,
        } = (0, i.cf)([d.A, c.Ay, o.A], () => ({
            theme: d.A.theme,
            useSystemTheme: c.Ay.useSystemTheme,
            useForcedColors: o.A.useForcedColors,
        })),
        p = (i, o) =>
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
                    p(f.NJ8.LIGHT, E.intl.string(E.t.K2sFfo)),
                    p(f.NJ8.DARK, E.intl.string(E.t.SMPT1k)),
                    p(f.NJ8.DARKER, E.intl.string(E.t.b8Cei3)),
                    p(f.NJ8.MIDNIGHT, E.intl.string(E.t.Do4ZJx)),
                    p("system", E.intl.string(E.t["7rOU6j"])),
                ],
            },
            "theme-items",
        ),
    ];
}
