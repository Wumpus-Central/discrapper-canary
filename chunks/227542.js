"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(817281),
    o = n(775602),
    l = n(688810),
    u = n(692798),
    c = n(544028),
    d = n(964404),
    _ = n(358776),
    f = n(361082),
    p = n(185928),
    h = n(652215),
    m = n(985018);
function E() {
    let e = (0, _.bp)("useAppearanceItems"),
        t = (0, f.A)(),
        { analyticsLocations: n } = (0, l.Ay)(),
        {
            theme: E,
            useSystemTheme: g,
            useForcedColors: A,
        } = (0, i.cf)([c.A, d.Ay, o.A], () => ({
            theme: c.A.theme,
            useSystemTheme: d.Ay.useSystemTheme,
            useForcedColors: o.A.useForcedColors,
        })),
        I = (e, t) =>
            (0, r.jsx)(s.iDA, {
                id: e,
                group: "input-modes",
                label: t,
                disabled: A,
                checked: g === p.Q_.ON ? "system" === e : e === E,
                action: () => {
                    (0, u.X8)({ isPersisted: !0, analyticsLocations: n, themeName: `default ${e}` }),
                        (0, a.u_)({ theme: e });
                },
            });
    return [
        (0, r.jsxs)(
            s.rXV,
            {
                children: [
                    I(h.NJ8.LIGHT, m.intl.string(m.t.K2sFfo)),
                    I(h.NJ8.DARK, m.intl.string(m.t.SMPT1k)),
                    I(h.NJ8.DARKER, m.intl.string(m.t.b8Cei3)),
                    I(h.NJ8.MIDNIGHT, m.intl.string(m.t.Do4ZJx)),
                    I("system", m.intl.string(m.t["7rOU6j"])),
                ],
            },
            "theme-items",
        ),
        ...(e ? [] : t),
    ];
}
