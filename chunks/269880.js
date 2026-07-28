"use strict";
n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var r = n(17928),
    a = n(477782),
    s = n(817281),
    l = n(775602),
    o = n(688810),
    d = n(487245),
    c = n(363195),
    u = n(742023),
    _ = n(185928),
    E = n(652215),
    A = n(375708);
function h() {
    let { analyticsLocations: e } = (0, o.Ay)(),
        {
            theme: t,
            useSystemTheme: n,
            useForcedColors: h,
        } = (0, r.cf)([c.A, u.Ay, l.Ay], () => ({
            theme: c.A.theme,
            useSystemTheme: u.Ay.useSystemTheme,
            useForcedColors: l.Ay.useForcedColors,
        }));
    function I(r, l) {
        return (0, i.jsx)(a.iD, {
            id: r,
            group: "input-modes",
            label: l,
            disabled: h,
            checked: n === _.Q_.ON ? "system" === r : r === t,
            action: () => {
                (0, d.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${r}` }),
                    (0, s.u_)({ theme: r });
            },
        });
    }
    return [
        (0, i.jsxs)(
            a.rX,
            {
                children: [
                    I(E.NJ8.LIGHT, A.intl.string(A.t.K2sFfo)),
                    I(E.NJ8.DARK, A.intl.string(A.t.SMPT1k)),
                    I(E.NJ8.DARKER, A.intl.string(A.t.b8Cei3)),
                    I(E.NJ8.MIDNIGHT, A.intl.string(A.t.Do4ZJx)),
                    I("system", A.intl.string(A.t["7rOU6j"])),
                ],
            },
            "theme-items",
        ),
    ];
}
